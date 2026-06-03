"""
balanza/lector.py — Lectura RS232/USB-Serie + Simulador de desarrollo
Mejoras v2.1:
  - Clase LectorSerial encapsulada (ya no variables globales)
  - Validación de estabilidad del peso (N lecturas consecutivas)
  - Manejo de tramas US (inestable) y OL (sobrecarga) con estado
  - Reconexión automática con backoff
  - Singleton compartible entre pantallas
"""
import threading, re, time, statistics

# ── Estados de la balanza ────────────────────────────────────────────────────
ESTADO_OK = "ok"
ESTADO_INESTABLE = "inestable"
ESTADO_SOBRECARGA = "sobrecarga"
ESTADO_SIN_CONEXION = "sin_conexion"
ESTADO_RECONECTANDO = "reconectando"

_RE = re.compile(r"[-+]?\d+(?:[.,]\d+)?")


def listar_puertos():
    try:
        import serial.tools.list_ports
        return [p.device for p in serial.tools.list_ports.comports()]
    except ImportError:
        return []


def _parse(s):
    s = s.strip()
    if s.startswith("OL"):
        return None, ESTADO_SOBRECARGA
    if s.startswith("US"):
        return None, ESTADO_INESTABLE
    m = _RE.search(s)
    if m:
        return float(m.group().replace(",", ".")), ESTADO_OK
    return None, ESTADO_SIN_CONEXION


class LectorSerial:
    """
    Lector de balanza RS232 con validación de estabilidad.
    Uso como singleton: crear UNA instancia y compartir entre pantallas.
    """
    def __init__(self, umbral_estabilidad=20.0, lecturas_estabilidad=5):
        self._peso = 0.0
        self._estado = ESTADO_SIN_CONEXION
        self._estable = False
        self._lock = threading.Lock()
        self._stop = threading.Event()
        self._hilo = None
        self._callbacks = []
        self._historial = []
        self._umbral = umbral_estabilidad
        self._n_lecturas = lecturas_estabilidad
        self._puerto = None
        self._baud = 9600
        self._max_reintentos = 5

    def agregar_callback(self, cb):
        """Registra un callback: cb(peso, estado, estable)"""
        if cb not in self._callbacks:
            self._callbacks.append(cb)

    def quitar_callback(self, cb):
        if cb in self._callbacks:
            self._callbacks.remove(cb)

    def _notificar(self):
        for cb in self._callbacks[:]:
            try:
                cb(self._peso, self._estado, self._estable)
            except Exception:
                pass

    @property
    def peso(self):
        with self._lock:
            return self._peso

    @property
    def estado(self):
        with self._lock:
            return self._estado

    @property
    def estable(self):
        with self._lock:
            return self._estable

    def _evaluar_estabilidad(self, nuevo_peso):
        """Evalúa si las últimas N lecturas están dentro del umbral."""
        self._historial.append(nuevo_peso)
        if len(self._historial) > self._n_lecturas:
            self._historial = self._historial[-self._n_lecturas:]
        if len(self._historial) >= self._n_lecturas:
            desv = statistics.stdev(self._historial)
            return desv <= self._umbral
        return False

    def conectar(self, puerto, baud=9600, callback=None):
        """Conecta al puerto serial. Inicia hilo de lectura con reconexión."""
        self.desconectar()
        self._puerto = puerto
        self._baud = baud
        if callback:
            self.agregar_callback(callback)
        self._stop = threading.Event()
        self._hilo = threading.Thread(target=self._loop_lectura, daemon=True)
        self._hilo.start()
        return True

    def _loop_lectura(self):
        """Loop principal con reconexión automática."""
        reintentos = 0
        while not self._stop.is_set():
            try:
                import serial
                ser = serial.Serial(
                    port=self._puerto, baudrate=self._baud,
                    bytesize=8, parity='N', stopbits=1, timeout=2
                )
                reintentos = 0
                self._leer_continuo(ser)
                try:
                    ser.close()
                except Exception:
                    pass
            except Exception as e:
                print(f"[RS232] Error: {e}")
                with self._lock:
                    self._estado = ESTADO_RECONECTANDO
                    self._estable = False
                self._notificar()
                reintentos += 1
                if reintentos > self._max_reintentos:
                    with self._lock:
                        self._estado = ESTADO_SIN_CONEXION
                    self._notificar()
                    break
                wait = min(2 ** reintentos, 30)
                self._stop.wait(wait)

    def _leer_continuo(self, ser):
        """Lee del puerto serial continuamente."""
        buf = b""
        while not self._stop.is_set():
            try:
                chunk = ser.read(64)
                if not chunk:
                    continue
                buf += chunk
                while b"\n" in buf:
                    line, buf = buf.split(b"\n", 1)
                    texto = line.decode("ascii", errors="ignore")
                    peso, estado = _parse(texto)
                    with self._lock:
                        self._estado = estado
                        if peso is not None:
                            self._peso = peso
                            self._estable = self._evaluar_estabilidad(peso)
                        elif estado == ESTADO_INESTABLE:
                            self._estable = False
                            self._historial.clear()
                        elif estado == ESTADO_SOBRECARGA:
                            self._estable = False
                            self._historial.clear()
                    self._notificar()
            except Exception:
                with self._lock:
                    self._estado = ESTADO_SIN_CONEXION
                    self._estable = False
                self._notificar()
                break

    def desconectar(self):
        self._stop.set()
        if self._hilo and self._hilo.is_alive():
            self._hilo.join(timeout=3)
        with self._lock:
            self._estado = ESTADO_SIN_CONEXION
            self._estable = False

    def is_conectada(self):
        with self._lock:
            return self._estado not in (ESTADO_SIN_CONEXION, ESTADO_RECONECTANDO)


class SimuladorBalanza:
    """Genera lecturas simuladas para desarrollo sin balanza física."""
    def __init__(self, base=39500.0, variacion=15.0):
        self.base = base
        self.variacion = variacion
        self._stop = threading.Event()
        self._t = None

    def iniciar(self, callback, intervalo=1.2):
        self._stop.clear()
        import random

        def _run():
            p = self.base
            while not self._stop.is_set():
                p += random.uniform(-self.variacion, self.variacion)
                p = round(p, 1)
                # Simular estabilidad (siempre estable en simulador)
                callback(p, ESTADO_OK, True)
                time.sleep(intervalo)

        self._t = threading.Thread(target=_run, daemon=True)
        self._t.start()

    def detener(self):
        self._stop.set()
        if self._t:
            self._t.join(timeout=2)
