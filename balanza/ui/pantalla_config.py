"""
ui/pantalla_config.py — Configuracion completa del sistema
Sección de base de datos con validación de ruta de red.
"""
import customtkinter as ctk
from tkinter import messagebox, filedialog
import os, sys, sqlite3, threading

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from balanza import lector

AZUL  = "#1A5FA8"
VERDE = "#2E7D32"
ROJO  = "#C62828"
CFG   = os.path.join(os.path.dirname(__file__), "..", "config.ini")


def _leer_cfg():
    cfg = {}
    if os.path.exists(CFG):
        with open(CFG) as f:
            for line in f:
                if "=" in line:
                    k, v = line.strip().split("=", 1)
                    cfg[k] = v
    return cfg


def _guardar_cfg(cfg):
    with open(CFG, "w") as f:
        for k, v in cfg.items():
            f.write(f"{k}={v}\n")


def _db_local_default():
    base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    return os.path.join(base, "datos", "balanza.db")


class PantallaConfig(ctk.CTkFrame):
    def __init__(self, master, db_path=None):
        super().__init__(master, fg_color="transparent")
        self.db_path = db_path
        self._build()
        self._cargar()

    def _build(self):
        self.columnconfigure(0, weight=1)

        scroll = ctk.CTkScrollableFrame(self, fg_color="transparent")
        scroll.grid(row=0, column=0, sticky="nsew")
        self.rowconfigure(0, weight=1)
        scroll.columnconfigure(0, weight=1)
        self._s = scroll

        def sec(txt):
            ctk.CTkLabel(scroll, text=txt, font=("Helvetica",13,"bold"),
                         text_color=AZUL, anchor="w"
                         ).pack(fill="x", padx=8, pady=(18,4))

        def lbl(txt, color="#333333"):
            ctk.CTkLabel(scroll, text=txt, font=("Helvetica",11),
                         text_color=color, anchor="w"
                         ).pack(fill="x", padx=8, pady=(2,0))

        def sep():
            ctk.CTkFrame(scroll, height=1, fg_color="#DDDDDD"
                         ).pack(fill="x", padx=8, pady=8)

        # ═══════════════════════════════════════════════════════════════
        # SECCIÓN: BASE DE DATOS
        # ═══════════════════════════════════════════════════════════════
        sec("Base de datos")

        # Ruta actual
        lbl("Ruta actual de la base de datos:")
        from db import database as db
        ruta_actual = db._db_path()
        existe = os.path.exists(ruta_actual)
        color_estado = VERDE if existe else ROJO
        estado_txt   = "✓  Archivo encontrado" if existe else "✗  Archivo no encontrado (se creará al iniciar)"
        self.lbl_ruta_actual = ctk.CTkLabel(
            scroll, text=ruta_actual,
            font=("Helvetica",10), text_color="#555555",
            anchor="w", wraplength=600)
        self.lbl_ruta_actual.pack(fill="x", padx=8, pady=(2,0))
        self.lbl_existe = ctk.CTkLabel(scroll, text=estado_txt,
                                        font=("Helvetica",10,"bold"),
                                        text_color=color_estado, anchor="w")
        self.lbl_existe.pack(fill="x", padx=8, pady=(0,8))

        sep()

        # Opción 1 — Local
        ctk.CTkLabel(scroll, text="Opción 1 — Base de datos LOCAL (en esta PC)",
                     font=("Helvetica",11,"bold"), text_color=AZUL, anchor="w"
                     ).pack(fill="x", padx=8, pady=(4,2))
        lbl("Recomendado si solo se usa desde esta PC.", "#666666")

        local_frame = ctk.CTkFrame(scroll, fg_color="transparent")
        local_frame.pack(fill="x", padx=8, pady=4)
        local_frame.columnconfigure(0, weight=1)

        self.ent_local = ctk.CTkEntry(local_frame, font=("Helvetica",11))
        self.ent_local.grid(row=0, column=0, sticky="ew", padx=(0,4))
        ctk.CTkButton(local_frame, text="Examinar...", width=100,
                      command=self._examinar_local,
                      fg_color="transparent", border_width=1, border_color="#CCCCCC"
                      ).grid(row=0, column=1)

        ctk.CTkButton(scroll, text="Usar ruta local por defecto",
                      command=self._usar_local_default,
                      fg_color="transparent", border_width=1, border_color="#CCCCCC",
                      font=("Helvetica",10)
                      ).pack(anchor="w", padx=8, pady=(2,0))

        sep()

        # Opción 2 — Red
        ctk.CTkLabel(scroll, text="Opción 2 — Base de datos en RED (servidor)",
                     font=("Helvetica",11,"bold"), text_color=AZUL, anchor="w"
                     ).pack(fill="x", padx=8, pady=(4,2))
        lbl("Para usar desde varias PCs. La carpeta de red debe existir y tener permisos de escritura.", "#666666")

        red_frame = ctk.CTkFrame(scroll, fg_color="transparent")
        red_frame.pack(fill="x", padx=8, pady=4)
        red_frame.columnconfigure(0, weight=1)

        self.ent_red = ctk.CTkEntry(red_frame, font=("Helvetica",11),
                                     placeholder_text=r"\\servidor\carpeta\balanza.db")
        self.ent_red.grid(row=0, column=0, sticky="ew", padx=(0,4))

        btns_red = ctk.CTkFrame(red_frame, fg_color="transparent")
        btns_red.grid(row=0, column=1)
        ctk.CTkButton(btns_red, text="Probar", width=70,
                      command=self._probar_red,
                      fg_color=AZUL, text_color="white"
                      ).grid(row=0, column=0, padx=(0,2))
        ctk.CTkButton(btns_red, text="Examinar", width=80,
                      command=self._examinar_red,
                      fg_color="transparent", border_width=1, border_color="#CCCCCC"
                      ).grid(row=0, column=1)

        self.lbl_red_estado = ctk.CTkLabel(
            scroll, text="", font=("Helvetica",10,"bold"), anchor="w")
        self.lbl_red_estado.pack(fill="x", padx=8)

        # Ejemplo de ruta
        lbl("Ejemplos de ruta de red:", "#888888")
        for ejemplo in [r"\\fs01\datos\balanza\balanza.db",
                        r"\\192.168.1.10\compartido\balanza.db"]:
            ctk.CTkLabel(scroll, text=f"  {ejemplo}",
                         font=("Helvetica",10), text_color="#888888",
                         cursor="hand2", anchor="w"
                         ).pack(fill="x", padx=8)

        sep()

        # Botón APLICAR ruta
        ctk.CTkLabel(scroll,
                     text="⚠  Al cambiar la ruta, el programa se reiniciará para aplicar el cambio.",
                     font=("Helvetica",10), text_color="#AA6600", anchor="w"
                     ).pack(fill="x", padx=8, pady=(0,6))

        bf_bd = ctk.CTkFrame(scroll, fg_color="transparent")
        bf_bd.pack(fill="x", padx=8, pady=(0,8))
        bf_bd.columnconfigure((0,1), weight=1)
        ctk.CTkButton(bf_bd, text="Aplicar ruta LOCAL",
                      command=lambda: self._aplicar_ruta("local"),
                      fg_color=VERDE, text_color="white",
                      font=("Helvetica",11,"bold")
                      ).grid(row=0, column=0, sticky="ew", padx=(0,4))
        ctk.CTkButton(bf_bd, text="Aplicar ruta de RED",
                      command=lambda: self._aplicar_ruta("red"),
                      fg_color=AZUL, text_color="white",
                      font=("Helvetica",11,"bold")
                      ).grid(row=0, column=1, sticky="ew")

        # ═══════════════════════════════════════════════════════════════
        # SECCIÓN: CARPETA DE TICKETS
        # ═══════════════════════════════════════════════════════════════
        sep()
        sec("Carpeta de guardado de tickets")
        lbl("Ruta donde se guardarán los tickets PDF al imprimir:")
        lbl("Puede ser local (C:\\Tickets) o de red (\\\\servidor\\tickets)", "#666666")

        tickets_frame = ctk.CTkFrame(scroll, fg_color="transparent")
        tickets_frame.pack(fill="x", padx=8, pady=4)
        tickets_frame.columnconfigure(0, weight=1)

        self.ent_tickets = ctk.CTkEntry(tickets_frame, font=("Helvetica",11),
                                         placeholder_text="Ej: C:\\Tickets  o  \\\\servidor\\tickets")
        self.ent_tickets.grid(row=0, column=0, sticky="ew", padx=(0,4))
        ctk.CTkButton(tickets_frame, text="Examinar...", width=100,
                      command=self._examinar_tickets,
                      fg_color="transparent", border_width=1,
                      border_color="#CCCCCC"
                      ).grid(row=0, column=1)

        ctk.CTkLabel(scroll,
                     text="⚠  Si la carpeta no existe, se creará automáticamente al guardar el primer ticket.",
                     font=("Helvetica",10), text_color="#AA6600", anchor="w"
                     ).pack(fill="x", padx=8, pady=(0,4))

        bf_tkt = ctk.CTkFrame(scroll, fg_color="transparent")
        bf_tkt.pack(fill="x", padx=8, pady=(0,8))
        bf_tkt.columnconfigure((0,1), weight=1)
        ctk.CTkButton(bf_tkt, text="Usar carpeta por defecto",
                      command=self._usar_tickets_default,
                      fg_color="transparent", border_width=1,
                      border_color="#CCCCCC", font=("Helvetica",10)
                      ).grid(row=0, column=0, sticky="ew", padx=(0,4))
        ctk.CTkButton(bf_tkt, text="Guardar ruta de tickets",
                      command=self._guardar_tickets,
                      fg_color=AZUL, text_color="white",
                      font=("Helvetica",11,"bold")
                      ).grid(row=0, column=1, sticky="ew")

        # ═══════════════════════════════════════════════════════════════
        # SECCIÓN: BALANZA RS232
        # ═══════════════════════════════════════════════════════════════
        sep()
        sec("Balanza RS232")
        lbl("Puerto serie (ej: COM3):")
        port_f = ctk.CTkFrame(scroll, fg_color="transparent")
        port_f.pack(fill="x", padx=8, pady=4)
        port_f.columnconfigure(0, weight=1)
        self.cmb_puerto = ctk.CTkComboBox(port_f, values=lector.listar_puertos() or ["COM1"])
        self.cmb_puerto.grid(row=0, column=0, sticky="ew", padx=(0,4))
        ctk.CTkButton(port_f, text="↻", width=36,
                      command=self._refrescar_puertos,
                      fg_color="transparent", border_width=1, border_color="#CCCCCC"
                      ).grid(row=0, column=1)

        lbl("Velocidad (baud rate):")
        self.cmb_baud = ctk.CTkComboBox(scroll,
                         values=["9600","4800","19200","38400","115200"])
        self.cmb_baud.set("9600")
        self.cmb_baud.pack(fill="x", padx=8, pady=4)

        self.lbl_puerto_estado = ctk.CTkLabel(
            scroll, text="Sin conexion", font=("Helvetica",10),
            text_color="#888888", anchor="w")
        self.lbl_puerto_estado.pack(fill="x", padx=8)

        bf_rs = ctk.CTkFrame(scroll, fg_color="transparent")
        bf_rs.pack(fill="x", padx=8, pady=6)
        bf_rs.columnconfigure((0,1,2), weight=1)
        ctk.CTkButton(bf_rs, text="Conectar",
                      command=self._conectar,
                      fg_color=AZUL, text_color="white"
                      ).grid(row=0, column=0, sticky="ew", padx=(0,4))
        ctk.CTkButton(bf_rs, text="Desconectar",
                      command=self._desconectar,
                      fg_color=ROJO, text_color="white"
                      ).grid(row=0, column=1, sticky="ew", padx=(0,4))
        ctk.CTkButton(bf_rs, text="Guardar puerto",
                      command=self._guardar_puerto,
                      fg_color="transparent", border_width=1, border_color="#CCCCCC"
                      ).grid(row=0, column=2, sticky="ew")

    # ── Cargar configuración ──────────────────────────────────────────────
    def _cargar(self):
        cfg = _leer_cfg()
        local_default = _db_local_default()

        # Campo local: mostrar ruta actual si es local, si no la default
        from db import database as db
        ruta_act = db._db_path()
        if "\\\\" in ruta_act or ruta_act.startswith("//"):
            self.ent_local.insert(0, local_default)
            self.ent_red.insert(0, ruta_act)
        else:
            self.ent_local.insert(0, ruta_act)

        if cfg.get("TICKETS_PATH"):
            self.ent_tickets.insert(0, cfg["TICKETS_PATH"])
        if cfg.get("PUERTO"):
            self.cmb_puerto.set(cfg["PUERTO"])
        if cfg.get("BAUD"):
            self.cmb_baud.set(cfg["BAUD"])

    # ── Base de datos ─────────────────────────────────────────────────────
    def _examinar_local(self):
        ruta = filedialog.asksaveasfilename(
            defaultextension=".db", initialfile="balanza.db",
            filetypes=[("SQLite","*.db"),("Todos","*.*")],
            title="Elegir ubicacion local de la base de datos")
        if ruta:
            self.ent_local.delete(0, "end")
            self.ent_local.insert(0, ruta)

    def _examinar_red(self):
        # En Windows filedialog no navega bien rutas UNC, mejor escribir a mano
        messagebox.showinfo("Ruta de red",
            "Escribí la ruta de red directamente en el campo.\n\n"
            "Formato: \\\\servidor\\carpeta\\balanza.db\n"
            "Ejemplo: \\\\fs01\\datos\\balanza\\balanza.db\n\n"
            "Asegurate de que la carpeta exista y tengas\n"
            "permisos de escritura antes de aplicar.")

    def _usar_local_default(self):
        self.ent_local.delete(0, "end")
        self.ent_local.insert(0, _db_local_default())

    def _probar_red(self):
        ruta = self.ent_red.get().strip()
        if not ruta:
            self.lbl_red_estado.configure(text="Ingresa una ruta primero.", text_color=ROJO)
            return
        self.lbl_red_estado.configure(text="Probando conexion...", text_color="#888888")
        self.update()

        def _test():
            try:
                carpeta = os.path.dirname(ruta)
                if not os.path.exists(carpeta):
                    return False, f"Carpeta no encontrada:\n{carpeta}"
                # Intentar crear/abrir la BD de prueba
                c = sqlite3.connect(ruta, timeout=5)
                c.execute("CREATE TABLE IF NOT EXISTS _test (x INTEGER)")
                c.commit()
                c.close()
                return True, f"✓  Conexion exitosa\n{ruta}"
            except Exception as e:
                return False, f"✗  Error: {e}"

        def _run():
            ok, msg = _test()
            color = VERDE if ok else ROJO
            self.after(0, lambda: self.lbl_red_estado.configure(text=msg, text_color=color))

        threading.Thread(target=_run, daemon=True).start()

    def _aplicar_ruta(self, tipo):
        if tipo == "local":
            ruta = self.ent_local.get().strip()
            if not ruta:
                messagebox.showwarning("Atencion", "Ingresa una ruta local.")
                return
        else:
            ruta = self.ent_red.get().strip()
            if not ruta:
                messagebox.showwarning("Atencion", "Ingresa la ruta de red.")
                return
            # Validar que la carpeta sea accesible
            carpeta = os.path.dirname(ruta)
            if not os.path.exists(carpeta):
                if not messagebox.askyesno("Carpeta no encontrada",
                    f"La carpeta no se encuentra:\n{carpeta}\n\n"
                    "¿Guardar de todas formas?\n"
                    "(Solo funciona cuando la red esté disponible)"):
                    return

        cfg = _leer_cfg()
        cfg["DB_PATH"] = ruta
        _guardar_cfg(cfg)

        # Crear la BD en la nueva ruta si no existe
        try:
            from db import database as db
            db.init_db(ruta)
            from db.migrar import migrar
            migrar(ruta)
            msg = (f"Ruta guardada correctamente.\n\n"
                   f"{ruta}\n\n"
                   "Reinicia el programa para que tome efecto.")
        except Exception as e:
            msg = (f"Ruta guardada, pero hubo un error al inicializar la BD:\n{e}\n\n"
                   "Verifica que la ruta sea correcta y tengas permisos.")

        messagebox.showinfo("Listo", msg)
        # Actualizar etiqueta de ruta actual
        self.lbl_ruta_actual.configure(text=ruta)
        existe = os.path.exists(ruta)
        self.lbl_existe.configure(
            text="✓  Archivo encontrado" if existe else "✗  Archivo no encontrado",
            text_color=VERDE if existe else ROJO)

    # ── Carpeta de tickets ────────────────────────────────────────────────
    def _examinar_tickets(self):
        from tkinter import filedialog
        ruta = filedialog.askdirectory(title="Carpeta donde guardar los tickets")
        if ruta:
            self.ent_tickets.delete(0, "end")
            self.ent_tickets.insert(0, ruta.replace("/", "\\"))

    def _usar_tickets_default(self):
        import os
        default = os.path.join(os.path.expanduser("~"), "Documents", "Tickets_Balanza")
        self.ent_tickets.delete(0, "end")
        self.ent_tickets.insert(0, default)

    def _guardar_tickets(self):
        import os
        ruta = self.ent_tickets.get().strip()
        if not ruta:
            messagebox.showwarning("Atención", "Ingresá una ruta primero.")
            return
        # Crear carpeta si no existe
        try:
            os.makedirs(ruta, exist_ok=True)
        except Exception as ex:
            if not messagebox.askyesno("Carpeta no accesible",
                f"No se pudo crear la carpeta:\n{ruta}\n\n¿Guardar de todas formas?"):
                return
        cfg = _leer_cfg()
        cfg["TICKETS_PATH"] = ruta
        _guardar_cfg(cfg)
        messagebox.showinfo("Guardado",
                            f"Ruta de tickets guardada:\n{ruta}\n\n"
                            "Los próximos tickets se guardarán ahí por defecto.")

    # ── Balanza RS232 ─────────────────────────────────────────────────────
    def _refrescar_puertos(self):
        puertos = lector.listar_puertos() or ["(ninguno)"]
        self.cmb_puerto.configure(values=puertos)
        self.cmb_puerto.set(puertos[0])

    def _conectar(self):
        puerto = self.cmb_puerto.get()
        baud   = int(self.cmb_baud.get())
        ok = lector.conectar(puerto, baud,
                             callback=lambda p, c: self._cb_lector(p, c))
        if ok:
            self.lbl_puerto_estado.configure(
                text=f"✓  Conectado a {puerto}", text_color=VERDE)
        else:
            self.lbl_puerto_estado.configure(
                text=f"✗  No se pudo conectar a {puerto}", text_color=ROJO)

    def _desconectar(self):
        lector.desconectar()
        self.lbl_puerto_estado.configure(text="Desconectado", text_color="#888888")

    def _cb_lector(self, peso, ok):
        txt = f"Leyendo: {peso:,.1f} kg" if ok else "Sin señal"
        col = VERDE if ok else ROJO
        try:
            self.after(0, lambda: self.lbl_puerto_estado.configure(text=txt, text_color=col))
        except Exception:
            pass

    def _guardar_puerto(self):
        cfg = _leer_cfg()
        cfg["PUERTO"] = self.cmb_puerto.get()
        cfg["BAUD"]   = self.cmb_baud.get()
        _guardar_cfg(cfg)
        messagebox.showinfo("Guardado", "Configuracion de balanza guardada.")
