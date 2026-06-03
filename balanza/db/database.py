"""
db/database.py — SQLite Sistema de Balanza v2.1
Mejoras v2.1:
  - Context manager para conexiones (evita leaks)
  - Backup automático al iniciar
  - Campos peso_min/peso_max en productos
  - Consulta de último pesaje por patente (autocompletado)
  - Paginación en historial (sin LIMIT hardcodeado)
  - Escapeo de caracteres LIKE
"""
import sqlite3, os, shutil, datetime

_BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB_LOCAL = os.path.join(_BASE_DIR, "datos", "balanza.db")
_CFG = os.path.join(_BASE_DIR, "config.ini")


def _db_path():
    if os.path.exists(_CFG):
        with open(_CFG, encoding="utf-8", errors="ignore") as f:
            for line in f:
                if line.startswith("DB_PATH="):
                    val = line.strip().split("=", 1)[1].strip()
                    if val:
                        return val
    return DB_LOCAL


# ── Context manager para conexiones ──────────────────────────────────────────

class conn:
    """Context manager que garantiza cierre de conexión."""
    def __init__(self, path=None):
        self._path = path or _db_path()
    def __enter__(self):
        try:
            os.makedirs(os.path.dirname(self._path), exist_ok=True)
        except Exception:
            pass
        self._c = sqlite3.connect(self._path, timeout=10)
        self._c.row_factory = sqlite3.Row
        self._c.execute("PRAGMA foreign_keys=ON")
        self._c.execute("PRAGMA journal_mode=WAL")
        return self._c
    def __exit__(self, exc_type, exc_val, exc_tb):
        try:
            if exc_type is None:
                self._c.commit()
            self._c.close()
        except Exception:
            pass
        return False


# ── Backup automático ────────────────────────────────────────────────────────

def backup_db(path=None, max_backups=10):
    """Copia la BD a una subcarpeta 'backups' con timestamp. Retiene max_backups."""
    src = path or _db_path()
    if not os.path.exists(src):
        return None
    backup_dir = os.path.join(os.path.dirname(src), "backups")
    try:
        os.makedirs(backup_dir, exist_ok=True)
        ts = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        dst = os.path.join(backup_dir, f"balanza_{ts}.db")
        shutil.copy2(src, dst)
        # Limpiar backups viejos
        backups = sorted(
            [f for f in os.listdir(backup_dir) if f.endswith(".db")],
            reverse=True
        )
        for old in backups[max_backups:]:
            try:
                os.remove(os.path.join(backup_dir, old))
            except Exception:
                pass
        return dst
    except Exception as e:
        print(f"[backup] {e}")
        return None


# ── Init DB ──────────────────────────────────────────────────────────────────

def init_db(path=None):
    with conn(path) as c:
        c.executescript("""
        CREATE TABLE IF NOT EXISTS empresa (
            id INTEGER PRIMARY KEY,
            nombre TEXT, cuit TEXT, cod_aduana TEXT,
            cod_lot TEXT, direccion TEXT, telefono TEXT
        );
        CREATE TABLE IF NOT EXISTS exportadores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cuit TEXT UNIQUE, razon_social TEXT, activo INTEGER DEFAULT 1
        );
        CREATE TABLE IF NOT EXISTS transportistas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cuit TEXT UNIQUE, razon_social TEXT, activo INTEGER DEFAULT 1
        );
        CREATE TABLE IF NOT EXISTS camiones (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            patente TEXT UNIQUE, descripcion TEXT,
            id_transportista INTEGER REFERENCES transportistas(id),
            activo INTEGER DEFAULT 1
        );
        CREATE TABLE IF NOT EXISTS choferes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT, tipo_doc TEXT DEFAULT 'DNI',
            nro_doc TEXT, nacionalidad TEXT DEFAULT 'ARGENTINO',
            activo INTEGER DEFAULT 1
        );
        CREATE TABLE IF NOT EXISTS productos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            codigo TEXT UNIQUE, descripcion TEXT, activo INTEGER DEFAULT 1,
            peso_min REAL DEFAULT 0, peso_max REAL DEFAULT 0
        );
        CREATE TABLE IF NOT EXISTS certificado_balanza (
            id INTEGER PRIMARY KEY,
            nro_certificado TEXT,
            vencimiento TEXT,
            descripcion TEXT,
            puerto TEXT DEFAULT 'COM1',
            databits INTEGER DEFAULT 8,
            stopbits INTEGER DEFAULT 1,
            paridad INTEGER DEFAULT 0,
            handshake INTEGER DEFAULT 0,
            baud_rate INTEGER DEFAULT 9600,
            caracter_corte INTEGER DEFAULT 13,
            nro_certificado_ot TEXT
        );
        CREATE TABLE IF NOT EXISTS pesajes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nro_doc INTEGER UNIQUE,
            estado TEXT DEFAULT 'cerrado',
            tipo_pesaje TEXT DEFAULT 'Camion',
            id_exportador INTEGER, cuit_exportador TEXT, exportador TEXT,
            id_transportista INTEGER, cuit_transportista TEXT, transportista TEXT,
            id_camion INTEGER, patente_camion TEXT, desc_camion TEXT,
            patente_acoplado TEXT,
            id_chofer INTEGER, chofer TEXT, tipo_doc_chofer TEXT,
            nro_doc_chofer TEXT, nacionalidad_chofer TEXT,
            id_producto INTEGER, producto TEXT,
            id_contenedor TEXT, id_bulto TEXT, precintos TEXT,
            destinacion_aduanera TEXT, observaciones TEXT,
            fecha_ingreso TEXT, peso_tara REAL, usuario_ingreso TEXT,
            fecha_egreso TEXT, peso_bruto REAL, peso_neto REAL, usuario_egreso TEXT,
            creado_en TEXT DEFAULT (datetime('now','localtime'))
        );
        """)
        cur = c.cursor()
        cur.execute("SELECT COUNT(*) FROM empresa")
        if cur.fetchone()[0] == 0:
            cur.execute("""INSERT INTO empresa VALUES
                (1,'ARGENSUN S.A.','30-64078319-9','60589','C.A. 008',
                 'San Martin e Hilanderos','2323497957')""")
        cur.execute("SELECT COUNT(*) FROM productos")
        if cur.fetchone()[0] == 0:
            cur.executemany("INSERT INTO productos(codigo,descripcion) VALUES(?,?)",
                [("1","GIRASOL"),("2","SOJA"),("3","TRIGO"),
                 ("4","MAIZ"),("5","CEBADA"),("6","SORGO")])
        cur.execute("SELECT COUNT(*) FROM transportistas")
        if cur.fetchone()[0] == 0:
            cur.executemany("INSERT INTO transportistas(cuit,razon_social) VALUES(?,?)",
                [("33333333333","CMA-CGM"),
                 ("20112233445","Logistica Sur SRL"),
                 ("30556677889","Trans. Pampa S.A.")])
        cur.execute("SELECT COUNT(*) FROM camiones")
        if cur.fetchone()[0] == 0:
            cur.executemany("INSERT INTO camiones(patente,descripcion,id_transportista) VALUES(?,?,?)",
                [("AH657TC","Mercedes Benz",1),("BB321XY","Scania R450",2)])
        cur.execute("SELECT COUNT(*) FROM choferes")
        if cur.fetchone()[0] == 0:
            cur.execute("INSERT INTO choferes(nombre,tipo_doc,nro_doc,nacionalidad) VALUES(?,?,?,?)",
                        ("PAZ, JULIO CESAR","DNI","30669199","ARGENTINO"))
        cur.execute("SELECT COUNT(*) FROM exportadores")
        if cur.fetchone()[0] == 0:
            cur.execute("INSERT INTO exportadores(cuit,razon_social) VALUES(?,?)",
                        ("30-64078319-9","ARGENSUN S.A."))


# ── Migración ────────────────────────────────────────────────────────────────

def migrar(path=None):
    ruta_bd = path or _db_path()
    if not os.path.exists(ruta_bd):
        return
    try:
        with conn(path) as c:
            existentes = [r[1] for r in c.execute("PRAGMA table_info(pesajes)").fetchall()]
            if "estado" not in existentes:
                c.execute("ALTER TABLE pesajes ADD COLUMN estado TEXT DEFAULT 'cerrado'")
            c.execute("UPDATE pesajes SET estado='cerrado' WHERE (estado IS NULL OR estado='') AND fecha_egreso IS NOT NULL")
            c.execute("UPDATE pesajes SET estado='abierto'  WHERE (estado IS NULL OR estado='') AND fecha_egreso IS NULL")
            # peso_min/peso_max en productos
            cols_prod = [r[1] for r in c.execute("PRAGMA table_info(productos)").fetchall()]
            if "peso_min" not in cols_prod:
                c.execute("ALTER TABLE productos ADD COLUMN peso_min REAL DEFAULT 0")
            if "peso_max" not in cols_prod:
                c.execute("ALTER TABLE productos ADD COLUMN peso_max REAL DEFAULT 0")
            # certificado_balanza
            c.execute("""CREATE TABLE IF NOT EXISTS certificado_balanza (
                id INTEGER PRIMARY KEY, descripcion TEXT, nro_certificado TEXT,
                vencimiento TEXT, puerto TEXT, databits INTEGER DEFAULT 8,
                stopbits INTEGER DEFAULT 1, paridad INTEGER DEFAULT 0,
                handshake INTEGER DEFAULT 0, baud_rate INTEGER DEFAULT 9600,
                caracter_corte INTEGER DEFAULT 13, nro_certificado_ot TEXT
            )""")
    except Exception as e:
        print(f"[migrar] {e}")


# ── Número de documento ──────────────────────────────────────────────────────

def next_nro_doc(path=None):
    with conn(path) as c:
        r = c.execute("SELECT MAX(nro_doc) FROM pesajes").fetchone()
        nro_bd = r[0] or 0
    nro_base = 9226
    if os.path.exists(_CFG):
        with open(_CFG, encoding="utf-8", errors="ignore") as f:
            for line in f:
                if line.startswith("NRO_DOC_BASE="):
                    try: nro_base = int(line.strip().split("=",1)[1])
                    except: pass
    return max(nro_bd, nro_base) + 1


# ── Pesajes ──────────────────────────────────────────────────────────────────

def save_ingreso(d, path=None):
    with conn(path) as c:
        cur = c.cursor()
        cur.execute("""INSERT INTO pesajes(
            nro_doc, estado, tipo_pesaje,
            id_exportador, cuit_exportador, exportador,
            id_transportista, cuit_transportista, transportista,
            id_camion, patente_camion, desc_camion, patente_acoplado,
            id_chofer, chofer, tipo_doc_chofer, nro_doc_chofer, nacionalidad_chofer,
            id_contenedor,
            fecha_ingreso, peso_tara, usuario_ingreso
        ) VALUES (
            :nro_doc, 'abierto', :tipo_pesaje,
            :id_exportador, :cuit_exportador, :exportador,
            :id_transportista, :cuit_transportista, :transportista,
            :id_camion, :patente_camion, :desc_camion, :patente_acoplado,
            :id_chofer, :chofer, :tipo_doc_chofer, :nro_doc_chofer, :nacionalidad_chofer,
            :id_contenedor,
            :fecha_ingreso, :peso_tara, :usuario_ingreso
        )""", d)
        return cur.lastrowid


def cerrar_egreso(pid, d, path=None):
    with conn(path) as c:
        data = {**d, 'id': pid, 'estado': 'cerrado'}
        # Asegurar que fecha_egreso esté en formato ISO (YYYY-MM-DD HH:MM:SS) para que date() funcione
        if 'fecha_egreso' not in data or not data['fecha_egreso']:
            data['fecha_egreso'] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        else:
            # Convertir de DD/MM/YYYY HH:MM:SS a YYYY-MM-DD HH:MM:SS
            feg = data['fecha_egreso'].strip()
            if '/' in feg:
                try:
                    dt_obj = datetime.datetime.strptime(feg, "%d/%m/%Y %H:%M:%S")
                    data['fecha_egreso'] = dt_obj.strftime("%Y-%m-%d %H:%M:%S")
                except ValueError:
                    data['fecha_egreso'] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        campos = ['estado', 'id_producto', 'producto', 'id_bulto', 'precintos',
                  'destinacion_aduanera', 'observaciones',
                  'fecha_egreso', 'peso_bruto', 'peso_neto', 'usuario_egreso']
        sets = ', '.join(f"{k}=:{k}" for k in campos if k in data or k == 'estado')
        c.execute(f"UPDATE pesajes SET {sets} WHERE id=:id", data)


def list_abiertos(path=None):
    with conn(path) as c:
        rows = c.execute(
            "SELECT * FROM pesajes WHERE estado='abierto' ORDER BY fecha_ingreso"
        ).fetchall()
        return [dict(r) for r in rows]


def get_pesaje(pid, path=None):
    with conn(path) as c:
        r = c.execute("SELECT * FROM pesajes WHERE id=?", (pid,)).fetchone()
        return dict(r) if r else None


def _escape_like(s):
    """Escapea caracteres especiales de LIKE."""
    return s.replace("\\", "\\\\").replace("%", "\\%").replace("_", "\\_")


def list_pesajes(filtros=None, path=None, limit=5000):
    with conn(path) as c:
        sql    = "SELECT * FROM pesajes WHERE estado='cerrado'"
        params = []
        where  = []
        if filtros:
            if filtros.get("desde"):
                where.append("date(fecha_egreso) >= ?")
                params.append(filtros["desde"])
            if filtros.get("hasta"):
                where.append("date(fecha_egreso) <= ?")
                params.append(filtros["hasta"])
            if filtros.get("buscar"):
                t = f"%{_escape_like(filtros['buscar'])}%"
                where.append("(patente_camion LIKE ? ESCAPE '\\' OR transportista LIKE ? ESCAPE '\\' OR producto LIKE ? ESCAPE '\\' OR exportador LIKE ? ESCAPE '\\')")
                params.extend([t, t, t, t])
        if where:
            sql += " AND " + " AND ".join(where)
        sql += f" ORDER BY id DESC LIMIT {int(limit)}"
        rows = c.execute(sql, params).fetchall()
        return [dict(r) for r in rows]


def count_pesajes(filtros=None, path=None):
    """Cuenta total de pesajes cerrados (para saber si el limit cortó)."""
    with conn(path) as c:
        sql = "SELECT COUNT(*) FROM pesajes WHERE estado='cerrado'"
        params = []
        where = []
        if filtros:
            if filtros.get("desde"):
                where.append("date(fecha_egreso) >= ?")
                params.append(filtros["desde"])
            if filtros.get("hasta"):
                where.append("date(fecha_egreso) <= ?")
                params.append(filtros["hasta"])
            if filtros.get("buscar"):
                t = f"%{_escape_like(filtros['buscar'])}%"
                where.append("(patente_camion LIKE ? ESCAPE '\\' OR transportista LIKE ? ESCAPE '\\' OR producto LIKE ? ESCAPE '\\' OR exportador LIKE ? ESCAPE '\\')")
                params.extend([t, t, t, t])
        if where:
            sql += " AND " + " AND ".join(where)
        return c.execute(sql, params).fetchone()[0]


# ── Autocompletado por patente ───────────────────────────────────────────────

def ultimo_pesaje_por_patente(patente, path=None):
    """Devuelve el último pesaje de una patente para autocompletar.
    Prioriza cerrados; si no hay, busca abiertos."""
    if not patente:
        return None
    pat = patente.strip().upper()
    with conn(path) as c:
        # Primero buscar cerrados
        r = c.execute(
            """SELECT * FROM pesajes
               WHERE patente_camion=? AND estado='cerrado'
               ORDER BY id DESC LIMIT 1""",
            (pat,)
        ).fetchone()
        if r:
            return dict(r)
        # Si no hay cerrados, buscar cualquier pesaje
        r = c.execute(
            """SELECT * FROM pesajes
               WHERE patente_camion=?
               ORDER BY id DESC LIMIT 1""",
            (pat,)
        ).fetchone()
        return dict(r) if r else None


# ── Dashboard: estadísticas del día ──────────────────────────────────────────

def stats_hoy(path=None):
    """Devuelve estadísticas del día actual para el dashboard."""
    hoy = datetime.datetime.now().strftime("%Y-%m-%d")
    with conn(path) as c:
        # Pesajes cerrados hoy (egresos completados)
        cerrados = c.execute(
            "SELECT COUNT(*), COALESCE(SUM(peso_neto),0) FROM pesajes WHERE estado='cerrado' AND date(fecha_egreso)=?",
            (hoy,)).fetchone()
        # Abiertos (cargas sin cerrar)
        abiertos = c.execute(
            "SELECT COUNT(*) FROM pesajes WHERE estado='abierto'"
        ).fetchone()
        # Último pesaje cerrado hoy
        ultimo = c.execute(
            """SELECT patente_camion, producto, peso_neto, fecha_egreso
               FROM pesajes WHERE estado='cerrado' AND date(fecha_egreso)=?
               ORDER BY id DESC LIMIT 1""",
            (hoy,)).fetchone()
        # Top productos hoy
        top_prods = c.execute(
            """SELECT producto, COUNT(*) as cant, SUM(peso_neto) as total
               FROM pesajes WHERE estado='cerrado' AND date(fecha_egreso)=?
               GROUP BY producto ORDER BY total DESC LIMIT 5""",
            (hoy,)).fetchall()
        return {
            "cerrados_hoy": cerrados[0],
            "neto_hoy": cerrados[1],
            "abiertos": abiertos[0],
            "ultimo": dict(ultimo) if ultimo else None,
            "top_productos": [dict(r) for r in top_prods],
        }


# ── Auto-alta maestros ──────────────────────────────────────────────────────

def get_or_create_chofer(nombre, tipo_doc, nro_doc, nacionalidad, path=None):
    if not nro_doc:
        return {}
    with conn(path) as c:
        r = c.execute("SELECT * FROM choferes WHERE nro_doc=? AND activo=1",
                      (nro_doc,)).fetchone()
        if r:
            return dict(r)
        c.execute(
            "INSERT OR IGNORE INTO choferes(nombre,tipo_doc,nro_doc,nacionalidad) VALUES(?,?,?,?)",
            (nombre or nro_doc, tipo_doc or "DNI", nro_doc, nacionalidad or "ARGENTINO")
        )
        r2 = c.execute("SELECT * FROM choferes WHERE nro_doc=?", (nro_doc,)).fetchone()
        return dict(r2) if r2 else {}


def get_or_create_camion(patente, descripcion, path=None):
    if not patente:
        return {}
    with conn(path) as c:
        pat = patente.strip().upper()
        r = c.execute("SELECT * FROM camiones WHERE patente=? AND activo=1",
                      (pat,)).fetchone()
        if r:
            return dict(r)
        c.execute(
            "INSERT OR IGNORE INTO camiones(patente,descripcion) VALUES(?,?)",
            (pat, descripcion or pat)
        )
        r2 = c.execute("SELECT * FROM camiones WHERE patente=?", (pat,)).fetchone()
        return dict(r2) if r2 else {}


# ── Empresa ──────────────────────────────────────────────────────────────────

def get_empresa(path=None):
    with conn(path) as c:
        r = c.execute("SELECT * FROM empresa WHERE id=1").fetchone()
        return dict(r) if r else {}


def save_empresa(d, path=None):
    with conn(path) as c:
        c.execute("""UPDATE empresa SET nombre=:nombre,cuit=:cuit,
                     cod_aduana=:cod_aduana,cod_lot=:cod_lot,
                     direccion=:direccion,telefono=:telefono WHERE id=1""", d)


# ── Transportistas ───────────────────────────────────────────────────────────

def list_transportistas(path=None):
    with conn(path) as c:
        r = c.execute("SELECT * FROM transportistas WHERE activo=1 ORDER BY razon_social").fetchall()
        return [dict(x) for x in r]


def save_transportista(d, path=None):
    with conn(path) as c:
        if d.get("id"):
            c.execute("UPDATE transportistas SET cuit=?,razon_social=? WHERE id=?",
                      (d["cuit"],d["razon_social"],d["id"]))
        else:
            c.execute("INSERT INTO transportistas(cuit,razon_social) VALUES(?,?)",
                      (d["cuit"],d["razon_social"]))


def del_transportista(tid, path=None):
    with conn(path) as c:
        c.execute("UPDATE transportistas SET activo=0 WHERE id=?", (tid,))


# ── Camiones ─────────────────────────────────────────────────────────────────

def list_camiones(path=None):
    with conn(path) as c:
        r = c.execute("""SELECT c.*,t.razon_social as transportista
                         FROM camiones c LEFT JOIN transportistas t ON c.id_transportista=t.id
                         WHERE c.activo=1 ORDER BY c.patente""").fetchall()
        return [dict(x) for x in r]


def save_camion(d, path=None):
    with conn(path) as c:
        if d.get("id"):
            c.execute("UPDATE camiones SET patente=?,descripcion=?,id_transportista=? WHERE id=?",
                      (d["patente"],d["descripcion"],d.get("id_transportista"),d["id"]))
        else:
            c.execute("INSERT INTO camiones(patente,descripcion,id_transportista) VALUES(?,?,?)",
                      (d["patente"],d["descripcion"],d.get("id_transportista")))


def del_camion(cid, path=None):
    with conn(path) as c:
        c.execute("UPDATE camiones SET activo=0 WHERE id=?", (cid,))


# ── Choferes ─────────────────────────────────────────────────────────────────

def list_choferes(path=None):
    with conn(path) as c:
        r = c.execute("SELECT * FROM choferes WHERE activo=1 ORDER BY nombre").fetchall()
        return [dict(x) for x in r]


def save_chofer(d, path=None):
    with conn(path) as c:
        if d.get("id"):
            c.execute("UPDATE choferes SET nombre=?,tipo_doc=?,nro_doc=?,nacionalidad=? WHERE id=?",
                      (d["nombre"],d["tipo_doc"],d["nro_doc"],d["nacionalidad"],d["id"]))
        else:
            c.execute("INSERT INTO choferes(nombre,tipo_doc,nro_doc,nacionalidad) VALUES(?,?,?,?)",
                      (d["nombre"],d["tipo_doc"],d["nro_doc"],d["nacionalidad"]))


def del_chofer(cid, path=None):
    with conn(path) as c:
        c.execute("UPDATE choferes SET activo=0 WHERE id=?", (cid,))


# ── Productos ────────────────────────────────────────────────────────────────

def list_productos(path=None):
    with conn(path) as c:
        r = c.execute("SELECT * FROM productos WHERE activo=1 ORDER BY descripcion").fetchall()
        return [dict(x) for x in r]


def save_producto(d, path=None):
    with conn(path) as c:
        if d.get("id"):
            c.execute("UPDATE productos SET codigo=?,descripcion=?,peso_min=?,peso_max=? WHERE id=?",
                      (d["codigo"],d["descripcion"],
                       float(d.get("peso_min") or 0), float(d.get("peso_max") or 0),
                       d["id"]))
        else:
            c.execute("INSERT INTO productos(codigo,descripcion,peso_min,peso_max) VALUES(?,?,?,?)",
                      (d["codigo"],d["descripcion"],
                       float(d.get("peso_min") or 0), float(d.get("peso_max") or 0)))


def del_producto(pid, path=None):
    with conn(path) as c:
        c.execute("UPDATE productos SET activo=0 WHERE id=?", (pid,))


def get_producto(pid, path=None):
    """Obtiene un producto por ID incluyendo peso_min/peso_max."""
    with conn(path) as c:
        r = c.execute("SELECT * FROM productos WHERE id=?", (pid,)).fetchone()
        return dict(r) if r else {}


# ── Exportadores ─────────────────────────────────────────────────────────────

def list_exportadores(path=None):
    with conn(path) as c:
        r = c.execute("SELECT * FROM exportadores WHERE activo=1 ORDER BY razon_social").fetchall()
        return [dict(x) for x in r]


def save_exportador(d, path=None):
    with conn(path) as c:
        if d.get("id"):
            c.execute("UPDATE exportadores SET cuit=?,razon_social=? WHERE id=?",
                      (d["cuit"],d["razon_social"],d["id"]))
        else:
            c.execute("INSERT INTO exportadores(cuit,razon_social) VALUES(?,?)",
                      (d["cuit"],d["razon_social"]))


# ── Certificado de balanza ───────────────────────────────────────────────────

def get_certificado(path=None):
    with conn(path) as c:
        r = c.execute("SELECT * FROM certificado_balanza WHERE id=1").fetchone()
        return dict(r) if r else {}


def save_certificado(d, path=None):
    with conn(path) as c:
        cur = c.cursor()
        cur.execute("SELECT COUNT(*) FROM certificado_balanza")
        if cur.fetchone()[0] == 0:
            cur.execute("""INSERT INTO certificado_balanza
                (id, nro_certificado, vencimiento, descripcion, puerto, databits,
                 stopbits, paridad, handshake, baud_rate, caracter_corte, nro_certificado_ot)
                VALUES (1,:nro_certificado,:vencimiento,:descripcion,:puerto,:databits,
                 :stopbits,:paridad,:handshake,:baud_rate,:caracter_corte,:nro_certificado_ot)""", d)
        else:
            cur.execute("""UPDATE certificado_balanza SET
                nro_certificado=:nro_certificado, vencimiento=:vencimiento,
                descripcion=:descripcion, puerto=:puerto, databits=:databits,
                stopbits=:stopbits, paridad=:paridad, handshake=:handshake,
                baud_rate=:baud_rate, caracter_corte=:caracter_corte,
                nro_certificado_ot=:nro_certificado_ot
                WHERE id=1""", d)
