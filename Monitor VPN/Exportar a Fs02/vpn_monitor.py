"""
VPN Monitor - MikroTik PPP Connection Logger v2
================================================
Monitorea conexiones OVPN vía API clásica de MikroTik.
Incluye geolocalización de IP, tracking de tráfico y uptime diario.

Requisitos:  pip install librouteros cryptography requests
"""

import librouteros
import sqlite3
import json
import time
import os
import sys
import logging
import argparse
import getpass
import requests
from datetime import datetime, timedelta
from pathlib import Path
import csv
import threading

BASE_DIR = Path(__file__).parent
CONFIG_FILE = BASE_DIR / "config.json"
CREDENTIALS_FILE = BASE_DIR / ".credentials.enc"
KEY_FILE = BASE_DIR / ".secret.key"
DB_FILE = BASE_DIR / "vpn_sessions.db"
LOG_FILE = BASE_DIR / "vpn_monitor.log"
GEO_CACHE_FILE = BASE_DIR / ".geo_cache.json"

DEFAULT_CONFIG = {
    "mikrotik_host": "10.90.0.251",
    "mikrotik_port": 8728,
    "mikrotik_user": "api_monitor",
    "poll_interval_seconds": 60,
    "dashboard_port": 5555,
    "dashboard_bind": "0.0.0.0",
    "service_filter": "ovpn",
    "log_level": "INFO"
}

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler(LOG_FILE, encoding="utf-8"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger("vpn_monitor")


# ═══════════════════════════════════════════════════════════════════════════════
# CREDENCIALES ENCRIPTADAS
# ═══════════════════════════════════════════════════════════════════════════════

def _get_or_create_key():
    from cryptography.fernet import Fernet
    if KEY_FILE.exists():
        return KEY_FILE.read_bytes()
    key = Fernet.generate_key()
    KEY_FILE.write_bytes(key)
    try:
        import subprocess
        subprocess.run(['icacls', str(KEY_FILE), '/inheritance:r',
                        '/grant:r', f'{os.getlogin()}:(R,W)'],
                       capture_output=True, check=False)
    except Exception:
        pass
    return key


def save_credentials(user, password):
    from cryptography.fernet import Fernet
    key = _get_or_create_key()
    f = Fernet(key)
    data = json.dumps({"user": user, "password": password}).encode()
    CREDENTIALS_FILE.write_bytes(f.encrypt(data))
    try:
        import subprocess
        subprocess.run(['icacls', str(CREDENTIALS_FILE), '/inheritance:r',
                        '/grant:r', f'{os.getlogin()}:(R,W)'],
                       capture_output=True, check=False)
    except Exception:
        pass


def load_credentials():
    from cryptography.fernet import Fernet
    if not CREDENTIALS_FILE.exists() or not KEY_FILE.exists():
        return None
    try:
        key = KEY_FILE.read_bytes()
        f = Fernet(key)
        return json.loads(f.decrypt(CREDENTIALS_FILE.read_bytes()).decode())
    except Exception as e:
        logger.error(f"Error credenciales: {e}")
        return None


def setup_credentials():
    print("\n" + "=" * 50)
    print("   VPN Monitor — Configuración segura")
    print("=" * 50 + "\n")
    config = load_config(create_if_missing=True)
    print(f"  Host actual: {config['mikrotik_host']}")
    new = input("  Nuevo host (Enter=mantener): ").strip()
    if new: config["mikrotik_host"] = new
    print(f"  Puerto actual: {config['mikrotik_port']}")
    new = input("  Nuevo puerto (Enter=mantener): ").strip()
    if new: config["mikrotik_port"] = int(new)
    print(f"  Usuario actual: {config['mikrotik_user']}")
    new = input("  Nuevo usuario (Enter=mantener): ").strip()
    if new: config["mikrotik_user"] = new
    print()
    pw = getpass.getpass("  Contraseña: ")
    if not pw:
        print("  ERROR: Vacía."); sys.exit(1)
    pw2 = getpass.getpass("  Confirmar: ")
    if pw != pw2:
        print("  ERROR: No coinciden."); sys.exit(1)
    save_config(config)
    save_credentials(config["mikrotik_user"], pw)
    print(f"\n  OK Config: {CONFIG_FILE}")
    print(f"  OK Credenciales: {CREDENTIALS_FILE}")

    # NUEVO: Verificar que las credenciales funcionan
    print("\n  Verificando conexión a MikroTik...")
    try:
        api = librouteros.Api(username=config["mikrotik_user"], password=pw,
                             host=config["mikrotik_host"], port=config["mikrotik_port"],
                             use_ssl=False)
        api.get_all(command="/ip/firewall/nat/print")
        api.close()
        print("  ✓ Conexión exitosa - Credenciales verificadas")
    except Exception as e:
        print(f"  ✗ ERROR: Conexión fallida - {e}")
        print("  Las credenciales fueron guardadas, pero la prueba FALLÓ")
        print(f"  Ejecuta: python vpn_monitor.py --test\n")
        return

    print(f"\n  Siguiente: python vpn_monitor.py --test\n")


# ═══════════════════════════════════════════════════════════════════════════════
# CONFIGURACIÓN
# ═══════════════════════════════════════════════════════════════════════════════

def load_config(create_if_missing=False):
    if not CONFIG_FILE.exists():
        if create_if_missing:
            save_config(DEFAULT_CONFIG)
            return DEFAULT_CONFIG.copy()
        print(f"\n  Ejecutá: python vpn_monitor.py --setup\n"); sys.exit(1)
    with open(CONFIG_FILE, "r", encoding="utf-8") as f:
        config = json.load(f)
    for k, v in DEFAULT_CONFIG.items():
        if k not in config:
            config[k] = v
    return config

def save_config(config):
    safe = {k: v for k, v in config.items() if "password" not in k.lower()}
    with open(CONFIG_FILE, "w", encoding="utf-8") as f:
        json.dump(safe, f, indent=2, ensure_ascii=False)


# ═══════════════════════════════════════════════════════════════════════════════
# GEOLOCALIZACIÓN DE IP
# ═══════════════════════════════════════════════════════════════════════════════

geo_cache = {}

def load_geo_cache():
    global geo_cache
    if GEO_CACHE_FILE.exists():
        try:
            with open(GEO_CACHE_FILE, "r") as f:
                geo_cache = json.load(f)
        except Exception:
            geo_cache = {}

def save_geo_cache():
    try:
        with open(GEO_CACHE_FILE, "w") as f:
            json.dump(geo_cache, f, ensure_ascii=False)
    except Exception:
        pass

def lookup_ip_location(ip):
    """Consulta la geolocalización de una IP pública usando ip-api.com"""
    if not ip or ip.startswith("10.") or ip.startswith("192.168.") or ip.startswith("172."):
        return {"city": "Red privada", "region": "", "country": "", "isp": ""}
    if ip in geo_cache:
        return geo_cache[ip]
    try:
        r = requests.get(f"http://ip-api.com/json/{ip}?fields=status,city,regionName,country,isp",
                         timeout=5)
        data = r.json()
        if data.get("status") == "success":
            result = {
                "city": data.get("city", ""),
                "region": data.get("regionName", ""),
                "country": data.get("country", ""),
                "isp": data.get("isp", "")
            }
            geo_cache[ip] = result
            save_geo_cache()
            return result
    except Exception as e:
        logger.debug(f"Geo lookup failed for {ip}: {e}")
    return {"city": "Desconocida", "region": "", "country": "", "isp": ""}


# ═══════════════════════════════════════════════════════════════════════════════
# BASE DE DATOS
# ═══════════════════════════════════════════════════════════════════════════════

def init_db():
    conn = sqlite3.connect(str(DB_FILE))
    c = conn.cursor()

    c.execute("""CREATE TABLE IF NOT EXISTS vpn_sessions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        service TEXT,
        caller_id TEXT,
        assigned_ip TEXT,
        encoding TEXT,
        uptime_raw TEXT,
        connected_at DATETIME,
        last_seen DATETIME,
        disconnected_at DATETIME,
        bytes_in INTEGER DEFAULT 0,
        bytes_out INTEGER DEFAULT 0,
        is_active INTEGER DEFAULT 1,
        mikrotik_id TEXT,
        geo_city TEXT DEFAULT '',
        geo_region TEXT DEFAULT '',
        geo_country TEXT DEFAULT '',
        geo_isp TEXT DEFAULT ''
    )""")

    c.execute("""CREATE TABLE IF NOT EXISTS traffic_snapshots (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        session_id INTEGER,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        bytes_in INTEGER,
        bytes_out INTEGER,
        FOREIGN KEY (session_id) REFERENCES vpn_sessions(id)
    )""")

    c.execute("""CREATE TABLE IF NOT EXISTS daily_uptime (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        date TEXT NOT NULL,
        total_seconds INTEGER DEFAULT 0,
        first_seen TEXT,
        last_seen TEXT,
        bytes_in INTEGER DEFAULT 0,
        bytes_out INTEGER DEFAULT 0,
        UNIQUE(username, date)
    )""")

    c.execute("CREATE INDEX IF NOT EXISTS idx_s_user ON vpn_sessions(username)")
    c.execute("CREATE INDEX IF NOT EXISTS idx_s_active ON vpn_sessions(is_active)")
    c.execute("CREATE INDEX IF NOT EXISTS idx_s_conn ON vpn_sessions(connected_at)")
    c.execute("CREATE INDEX IF NOT EXISTS idx_du_user ON daily_uptime(username, date)")

    # Migrar columnas geo si no existen
    try:
        c.execute("ALTER TABLE vpn_sessions ADD COLUMN geo_city TEXT DEFAULT ''")
    except Exception:
        pass
    try:
        c.execute("ALTER TABLE vpn_sessions ADD COLUMN geo_region TEXT DEFAULT ''")
    except Exception:
        pass
    try:
        c.execute("ALTER TABLE vpn_sessions ADD COLUMN geo_country TEXT DEFAULT ''")
    except Exception:
        pass
    try:
        c.execute("ALTER TABLE vpn_sessions ADD COLUMN geo_isp TEXT DEFAULT ''")
    except Exception:
        pass
    try:
        c.execute("ALTER TABLE daily_uptime ADD COLUMN accumulated_closed_seconds INTEGER DEFAULT 0")
    except Exception:
        pass

    conn.commit()
    conn.close()
    logger.info("Base de datos inicializada.")


# ═══════════════════════════════════════════════════════════════════════════════
# API MIKROTIK
# ═══════════════════════════════════════════════════════════════════════════════

class MikroTikAPI:
    def __init__(self, config, credentials):
        self.host = config["mikrotik_host"]
        self.port = config["mikrotik_port"]
        self.user = credentials["user"]
        self.password = credentials["password"]
        self.service_filter = config.get("service_filter", "")
        self.api = None

    def connect(self):
        try:
            self.api = librouteros.connect(
                host=self.host, username=self.user,
                password=self.password, port=self.port)
            return True
        except Exception as e:
            logger.error(f"Conexión fallida: {e}")
            return False

    def ensure_connected(self):
        if self.api is None:
            return self.connect()
        try:
            list(self.api('/system/resource/print'))
            return True
        except Exception:
            self.api = None
            return self.connect()

    def test_connection(self):
        try:
            if not self.connect():
                return False, "No se pudo conectar."
            result = list(self.api('/system/resource/print'))
            return (True, result[0]) if result else (False, "Sin respuesta.")
        except Exception as e:
            return False, str(e)

    def get_active_connections(self):
        try:
            if not self.ensure_connected():
                return None
            connections = list(self.api('/ppp/active/print'))
            if self.service_filter:
                connections = [c for c in connections
                               if c.get("service", "").lower() == self.service_filter.lower()]
            return connections
        except Exception as e:
            logger.error(f"Error PPP: {e}")
            self.api = None
            return None

    def get_all_interface_traffic(self):
        """Obtiene tráfico de todas las interfaces ovpn de una sola vez."""
        try:
            if not self.ensure_connected():
                return {}
            result = list(self.api('/interface/print'))
            traffic = {}
            for iface in result:
                name = iface.get("name", "")
                itype = iface.get("type", "")
                if "ovpn" in name.lower() or "ovpn" in itype.lower():
                    # Extraer username del nombre de interfaz (ej: <ovpn-diego.martin>)
                    uname = name.replace("<ovpn-", "").replace(">", "").strip()
                    rx = int(iface.get("rx-byte", 0))
                    tx = int(iface.get("tx-byte", 0))
                    traffic[uname] = {"rx": rx, "tx": tx}
            return traffic
        except Exception as e:
            logger.debug(f"Error obteniendo tráfico interfaces: {e}")
            return {}


# ═══════════════════════════════════════════════════════════════════════════════
# PARSING
# ═══════════════════════════════════════════════════════════════════════════════

def parse_uptime(uptime_str):
    if not uptime_str:
        return 0
    total = 0
    s = uptime_str.strip()
    if "w" in s:
        w, s = s.split("w", 1); total += int(w.strip()) * 604800
    if "d" in s:
        d, s = s.split("d", 1); total += int(d.strip()) * 86400
    s = s.strip()
    if "h" in s:
        h, s = s.split("h", 1); total += int(h.strip()) * 3600
    if "m" in s:
        m, s = s.split("m", 1); total += int(m.strip()) * 60
    if "s" in s:
        sec = s.replace("s", "").strip()
        if sec: total += int(sec)
    return total

def format_duration(seconds):
    h, r = divmod(int(seconds), 3600)
    m, s = divmod(r, 60)
    return f"{h}h {m}m"

def calculate_connected_at(uptime_str):
    secs = parse_uptime(uptime_str)
    return datetime.now() - timedelta(seconds=secs) if secs > 0 else datetime.now()


# ═══════════════════════════════════════════════════════════════════════════════
# LÓGICA PRINCIPAL
# ═══════════════════════════════════════════════════════════════════════════════

def update_daily_uptime(db_conn, username, uptime_str, poll_interval, bytes_in_delta, bytes_out_delta):
    """Actualiza el uptime diario del usuario acumulando sesiones previas del día."""
    c = db_conn.cursor()
    today = datetime.now().strftime("%Y-%m-%d")
    now_time = datetime.now().strftime("%H:%M:%S")

    # Calcular cuántos segundos de HOY lleva la sesión activa actual
    total_uptime_secs = parse_uptime(uptime_str)
    connected_at = datetime.now() - timedelta(seconds=total_uptime_secs)
    today_start = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)

    if connected_at < today_start:
        current_session_today_secs = int((datetime.now() - today_start).total_seconds())
        first_seen_time = "00:00:00"
    else:
        current_session_today_secs = total_uptime_secs
        first_seen_time = connected_at.strftime("%H:%M:%S")

    c.execute("SELECT id, accumulated_closed_seconds, first_seen FROM daily_uptime WHERE username=? AND date=?", (username, today))
    row = c.fetchone()

    if row:
        acc_closed = row[1] or 0
        existing_first_seen = row[2]
        total_seconds = acc_closed + current_session_today_secs
        # NUEVO: Preservar first_seen si ya existe, sino usar el calculado
        final_first_seen = existing_first_seen or first_seen_time
        c.execute("""UPDATE daily_uptime SET
            total_seconds = ?,
            last_seen = ?,
            first_seen = ?,
            bytes_in = bytes_in + ?,
            bytes_out = bytes_out + ?
            WHERE id = ?""",
                  (total_seconds, now_time, final_first_seen, bytes_in_delta, bytes_out_delta, row[0]))
    else:
        c.execute("""INSERT INTO daily_uptime (username, date, total_seconds, accumulated_closed_seconds, first_seen, last_seen, bytes_in, bytes_out)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)""",
                  (username, today, current_session_today_secs, 0, first_seen_time, now_time, bytes_in_delta, bytes_out_delta))


def process_connections(api, config):
    connections = api.get_active_connections()
    if connections is None:
        return

    # Obtener tráfico de TODAS las interfaces ovpn de una vez (1 sola query)
    all_traffic = api.get_all_interface_traffic()

    conn = sqlite3.connect(str(DB_FILE))
    c = conn.cursor()
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    active_mk_ids = set()
    poll_interval = config.get("poll_interval_seconds", 60)

    for vpn in connections:
        mk_id = vpn.get(".id", "")
        username = vpn.get("name", "unknown")
        service = vpn.get("service", "")
        caller_id = vpn.get("caller-id", "")
        address = vpn.get("address", "")
        encoding = vpn.get("encoding", "")
        uptime = vpn.get("uptime", "")

        active_mk_ids.add(mk_id)
        connected_at = calculate_connected_at(uptime).strftime("%Y-%m-%d %H:%M:%S")

        # Tráfico real de la interfaz
        iface_traffic = all_traffic.get(username, {})
        bytes_in = iface_traffic.get("rx", 0)
        bytes_out = iface_traffic.get("tx", 0)

        # Geolocalización
        geo = lookup_ip_location(caller_id)

        c.execute("""SELECT id, bytes_in, bytes_out FROM vpn_sessions
            WHERE mikrotik_id = ? AND is_active = 1""", (mk_id,))
        existing = c.fetchone()

        bytes_in_delta = 0
        bytes_out_delta = 0

        if existing:
            session_id = existing[0]
            old_in = existing[1] or 0
            old_out = existing[2] or 0
            bytes_in_delta = max(0, bytes_in - old_in)
            bytes_out_delta = max(0, bytes_out - old_out)

            c.execute("""UPDATE vpn_sessions SET
                last_seen=?, uptime_raw=?, bytes_in=?, bytes_out=?, caller_id=?,
                geo_city=?, geo_region=?, geo_country=?, geo_isp=?
                WHERE id=?""",
                (now, uptime, bytes_in, bytes_out, caller_id,
                 geo["city"], geo["region"], geo["country"], geo["isp"], session_id))

            if bytes_in_delta > 0 or bytes_out_delta > 0:
                c.execute("""INSERT INTO traffic_snapshots (session_id, timestamp, bytes_in, bytes_out)
                    VALUES (?, ?, ?, ?)""", (session_id, now, bytes_in, bytes_out))
        else:
            c.execute("""INSERT INTO vpn_sessions
                (username, service, caller_id, assigned_ip, encoding, uptime_raw,
                 connected_at, last_seen, bytes_in, bytes_out, is_active, mikrotik_id,
                 geo_city, geo_region, geo_country, geo_isp)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?, ?, ?, ?)""",
                (username, service, caller_id, address, encoding, uptime,
                 connected_at, now, bytes_in, bytes_out, mk_id,
                 geo["city"], geo["region"], geo["country"], geo["isp"]))
            logger.info(f"Nueva conexión: {username} ({service}) desde {caller_id} - {geo['city']}, {geo['country']}")

        # Actualizar uptime diario
        update_daily_uptime(conn, username, uptime, poll_interval, bytes_in_delta, bytes_out_delta)

    # Marcar desconectados y acumular su tiempo en daily_uptime
    c.execute("SELECT id, username, mikrotik_id, connected_at, bytes_in, bytes_out FROM vpn_sessions WHERE is_active = 1")
    for sid, uname, mid, conn_at, bi, bo in c.fetchall():
        if mid not in active_mk_ids:
            c.execute("UPDATE vpn_sessions SET is_active=0, disconnected_at=? WHERE id=?", (now, sid))
            logger.info(f"Desconexión: {uname}")
            # Acumular duración de la sesión cerrada en daily_uptime
            try:
                today = datetime.now().strftime("%Y-%m-%d")
                today_start = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
                if conn_at:
                    conn_dt = datetime.strptime(conn_at, "%Y-%m-%d %H:%M:%S")
                    effective_start = max(conn_dt, today_start)
                    session_today_secs = int((datetime.now() - effective_start).total_seconds())
                    session_today_secs = max(0, session_today_secs)
                    c.execute("""UPDATE daily_uptime SET accumulated_closed_seconds = accumulated_closed_seconds + ?
                        WHERE username=? AND date=?""", (session_today_secs, uname, today))
            except Exception as ex:
                logger.debug(f"Error acumulando uptime de sesión cerrada para {uname}: {ex}")

    conn.commit()
    conn.close()
    logger.info(f"Poll: {len(connections)} conexiones activas.")


# ═══════════════════════════════════════════════════════════════════════════════
# EXPORTACIÓN
# ═══════════════════════════════════════════════════════════════════════════════

def export_report(days=30):
    conn = sqlite3.connect(str(DB_FILE))
    c = conn.cursor()
    since = (datetime.now() - timedelta(days=days)).strftime("%Y-%m-%d")
    out = BASE_DIR / f"reporte_vpn_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv"
    c.execute("""SELECT username, service, caller_id, assigned_ip,
        geo_city, geo_region, geo_country, connected_at,
        COALESCE(disconnected_at, 'ACTIVO'),
        CASE WHEN disconnected_at IS NOT NULL THEN
            ROUND((julianday(disconnected_at)-julianday(connected_at))*24, 2)
        ELSE ROUND((julianday('now','localtime')-julianday(connected_at))*24, 2) END,
        ROUND(bytes_in/1048576.0, 2), ROUND(bytes_out/1048576.0, 2)
        FROM vpn_sessions WHERE connected_at >= ? ORDER BY connected_at DESC""", (since,))
    rows = c.fetchall()
    headers = ["Usuario","Servicio","IP Pública","IP Asignada","Ciudad","Región","País",
               "Conexión","Desconexión","Horas","MB Desc.","MB Sub."]
    with open(out, "w", newline="", encoding="utf-8-sig") as f:
        w = csv.writer(f); w.writerow(headers); w.writerows(rows)
    conn.close()
    logger.info(f"Reporte: {out} ({len(rows)} sesiones)")
    return out

def export_daily_summary(days=30):
    conn = sqlite3.connect(str(DB_FILE))
    c = conn.cursor()
    since = (datetime.now() - timedelta(days=days)).strftime("%Y-%m-%d")
    out = BASE_DIR / f"resumen_diario_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv"
    c.execute("""SELECT username, date, first_seen, last_seen,
        ROUND(total_seconds/3600.0, 2), ROUND(bytes_in/1048576.0, 2),
        ROUND(bytes_out/1048576.0, 2)
        FROM daily_uptime WHERE date >= ? ORDER BY date DESC, username""", (since,))
    rows = c.fetchall()
    headers = ["Usuario","Fecha","Primera Conexión","Última Actividad","Horas","MB Desc.","MB Sub."]
    with open(out, "w", newline="", encoding="utf-8-sig") as f:
        w = csv.writer(f); w.writerow(headers); w.writerows(rows)
    conn.close()
    logger.info(f"Resumen: {out} ({len(rows)} registros)")
    return out


# ═══════════════════════════════════════════════════════════════════════════════
# API LOCAL PARA DASHBOARD
# ═══════════════════════════════════════════════════════════════════════════════

def start_api_server(port=5555, bind="127.0.0.1"):
    from http.server import HTTPServer, BaseHTTPRequestHandler
    import urllib.parse

    class Handler(BaseHTTPRequestHandler):
        def do_GET(self):
            parsed = urllib.parse.urlparse(self.path)
            path = parsed.path
            params = urllib.parse.parse_qs(parsed.query)

            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()

            db = sqlite3.connect(str(DB_FILE))
            db.row_factory = sqlite3.Row
            c = db.cursor()

            try:
                if path == "/api/active":
                    c.execute("""SELECT username, service, caller_id, assigned_ip,
                        connected_at, uptime_raw, bytes_in, bytes_out, encoding,
                        geo_city, geo_region, geo_country, geo_isp
                        FROM vpn_sessions WHERE is_active = 1 ORDER BY username""")
                    rows = [dict(r) for r in c.fetchall()]
                    # Agregar uptime diario
                    today = datetime.now().strftime("%Y-%m-%d")
                    for row in rows:
                        c.execute("SELECT total_seconds, bytes_in, bytes_out FROM daily_uptime WHERE username=? AND date=?",
                                  (row["username"], today))
                        du = c.fetchone()
                        if du:
                            row["daily_uptime_seconds"] = du["total_seconds"]
                            row["daily_bytes_in"] = du["bytes_in"]
                            row["daily_bytes_out"] = du["bytes_out"]
                        else:
                            row["daily_uptime_seconds"] = 0
                            row["daily_bytes_in"] = 0
                            row["daily_bytes_out"] = 0
                    data = rows

                elif path == "/api/sessions":
                    days = int(params.get("days", [7])[0])
                    user = params.get("user", [None])[0]
                    since = (datetime.now() - timedelta(days=days)).strftime("%Y-%m-%d")
                    q = """SELECT username, service, caller_id, connected_at, disconnected_at,
                        bytes_in, bytes_out, geo_city, geo_region, geo_country, geo_isp,
                        CASE WHEN disconnected_at IS NOT NULL THEN
                            ROUND((julianday(disconnected_at)-julianday(connected_at))*24, 2)
                        ELSE ROUND((julianday('now','localtime')-julianday(connected_at))*24, 2)
                        END as hours FROM vpn_sessions WHERE connected_at >= ?"""
                    b = [since]
                    if user:
                        q += " AND username = ?"; b.append(user)
                    q += " ORDER BY connected_at DESC LIMIT 1000"
                    c.execute(q, b)
                    data = [dict(r) for r in c.fetchall()]

                elif path == "/api/summary":
                    days = int(params.get("days", [30])[0])
                    since = (datetime.now() - timedelta(days=days)).strftime("%Y-%m-%d")
                    c.execute("""SELECT username, COUNT(*) as sessions,
                        ROUND(SUM(CASE WHEN disconnected_at IS NOT NULL THEN
                            (julianday(disconnected_at)-julianday(connected_at))*24
                        ELSE (julianday('now','localtime')-julianday(connected_at))*24
                        END), 2) as total_hours,
                        ROUND(SUM(bytes_in)/1048576.0, 2) as mb_in,
                        ROUND(SUM(bytes_out)/1048576.0, 2) as mb_out,
                        MIN(connected_at) as first_seen,
                        MAX(COALESCE(disconnected_at, last_seen)) as last_seen
                        FROM vpn_sessions WHERE connected_at >= ?
                        GROUP BY username ORDER BY total_hours DESC""", (since,))
                    data = [dict(r) for r in c.fetchall()]

                elif path == "/api/daily":
                    days = int(params.get("days", [30])[0])
                    user = params.get("user", [None])[0]
                    since = (datetime.now() - timedelta(days=days)).strftime("%Y-%m-%d")
                    q = """SELECT username, date, total_seconds, first_seen, last_seen,
                        bytes_in, bytes_out FROM daily_uptime WHERE date >= ?"""
                    b = [since]
                    if user:
                        q += " AND username = ?"; b.append(user)
                    q += " ORDER BY date DESC, username"
                    c.execute(q, b)
                    data = [dict(r) for r in c.fetchall()]

                elif path == "/api/users":
                    c.execute("SELECT DISTINCT username FROM vpn_sessions ORDER BY username")
                    data = [r["username"] for r in c.fetchall()]

                elif path == "/api/stats":
                    c.execute("SELECT COUNT(*) as n FROM vpn_sessions WHERE is_active = 1")
                    active = c.fetchone()["n"]
                    c.execute("""SELECT COUNT(DISTINCT username) as n FROM vpn_sessions
                        WHERE DATE(connected_at) = DATE('now','localtime')""")
                    today_users = c.fetchone()["n"]
                    today = datetime.now().strftime("%Y-%m-%d")
                    c.execute("SELECT SUM(bytes_in+bytes_out) as b FROM daily_uptime WHERE date=?", (today,))
                    r = c.fetchone()
                    today_bytes = r["b"] if r["b"] else 0
                    data = {"active_now": active, "today_users": today_users,
                            "today_traffic_gb": round(today_bytes/1073741824, 2)}

                elif path == "/api/user-report":
                    user = params.get("user", [None])[0]
                    days = int(params.get("days", [30])[0])
                    if not user:
                        data = {"error": "user param required"}
                    else:
                        since = (datetime.now() - timedelta(days=days)).strftime("%Y-%m-%d")
                        # Daily breakdown
                        c.execute("""SELECT date, total_seconds, first_seen, last_seen,
                            bytes_in, bytes_out FROM daily_uptime
                            WHERE username=? AND date>=? ORDER BY date DESC""", (user, since))
                        daily = [dict(r) for r in c.fetchall()]
                        # Sessions
                        c.execute("""SELECT connected_at, disconnected_at, caller_id,
                            bytes_in, bytes_out, geo_city, geo_region, geo_country,
                            CASE WHEN disconnected_at IS NOT NULL THEN
                                ROUND((julianday(disconnected_at)-julianday(connected_at))*24, 2)
                            ELSE ROUND((julianday('now','localtime')-julianday(connected_at))*24, 2)
                            END as hours FROM vpn_sessions
                            WHERE username=? AND connected_at>=? ORDER BY connected_at DESC""",
                            (user, since))
                        sessions = [dict(r) for r in c.fetchall()]
                        # Totals
                        total_seconds = sum(d["total_seconds"] for d in daily)
                        total_in = sum(d["bytes_in"] for d in daily)
                        total_out = sum(d["bytes_out"] for d in daily)
                        # Locations
                        c.execute("""SELECT DISTINCT caller_id, geo_city, geo_region, geo_country
                            FROM vpn_sessions WHERE username=? AND connected_at>=?
                            AND caller_id != '' ORDER BY connected_at DESC""", (user, since))
                        locations = [dict(r) for r in c.fetchall()]

                        data = {
                            "username": user,
                            "days_range": days,
                            "total_hours": round(total_seconds/3600, 2),
                            "total_mb_in": round(total_in/1048576, 2),
                            "total_mb_out": round(total_out/1048576, 2),
                            "days_connected": len(daily),
                            "daily": daily,
                            "sessions": sessions,
                            "locations": locations
                        }

                elif path == "/api/audit":
                    user = params.get("user", [None])[0]
                    date_from = params.get("from", [None])[0]
                    date_to = params.get("to", [None])[0]
                    if not user:
                        data = {"error": "user param required"}
                    else:
                        if not date_from:
                            date_from = (datetime.now() - timedelta(days=7)).strftime("%Y-%m-%d")
                        if not date_to:
                            date_to = datetime.now().strftime("%Y-%m-%d")
                        # Daily uptime
                        c.execute("""SELECT date, total_seconds, first_seen, last_seen,
                            bytes_in, bytes_out FROM daily_uptime
                            WHERE username=? AND date>=? AND date<=?
                            ORDER BY date""", (user, date_from, date_to))
                        daily = [dict(r) for r in c.fetchall()]
                        # Sessions in range
                        c.execute("""SELECT connected_at, disconnected_at, caller_id,
                            bytes_in, bytes_out, geo_city, geo_region, geo_country,
                            CASE WHEN disconnected_at IS NOT NULL THEN
                                ROUND((julianday(disconnected_at)-julianday(connected_at))*24, 2)
                            ELSE ROUND((julianday('now','localtime')-julianday(connected_at))*24, 2)
                            END as hours FROM vpn_sessions
                            WHERE username=? AND DATE(connected_at)>=? AND DATE(connected_at)<=?
                            ORDER BY connected_at""", (user, date_from, date_to))
                        sessions = [dict(r) for r in c.fetchall()]
                        total_secs = sum(d["total_seconds"] for d in daily)
                        total_in = sum(d["bytes_in"] for d in daily)
                        total_out = sum(d["bytes_out"] for d in daily)
                        data = {
                            "username": user,
                            "from": date_from,
                            "to": date_to,
                            "total_hours": round(total_secs/3600, 2),
                            "total_mb_in": round(total_in/1048576, 2),
                            "total_mb_out": round(total_out/1048576, 2),
                            "days_connected": len(daily),
                            "days_total": (datetime.strptime(date_to, "%Y-%m-%d") - datetime.strptime(date_from, "%Y-%m-%d")).days + 1,
                            "daily": daily,
                            "sessions": sessions
                        }

                elif path == "/api/geo":
                    ip = params.get("ip", [None])[0]
                    if ip:
                        data = lookup_ip_location(ip)
                    else:
                        data = {"error": "ip param required"}

                elif path == "/api/export":
                    days = int(params.get("days", [30])[0])
                    f = export_report(days)
                    data = {"file": str(f)}

                else:
                    data = {"status": "ok"}

                self.wfile.write(json.dumps(data, ensure_ascii=False, default=str).encode())
            except Exception as e:
                logger.error(f"API error: {e}")
                self.wfile.write(json.dumps({"error": str(e)}).encode())
            finally:
                db.close()

        def log_message(self, *a):
            pass

    server = HTTPServer((bind, port), Handler)
    logger.info(f"Dashboard API: http://{bind}:{port}")
    server.serve_forever()


# ═══════════════════════════════════════════════════════════════════════════════
# TEST
# ═══════════════════════════════════════════════════════════════════════════════

def test_connection():
    config = load_config()
    creds = load_credentials()
    if not creds:
        print("\n  Ejecutá: python vpn_monitor.py --setup\n"); return
    print(f"\n  Conectando a {config['mikrotik_host']}:{config['mikrotik_port']}...")
    api = MikroTikAPI(config, creds)
    ok, result = api.test_connection()
    if ok:
        print(f"  OK Conexión exitosa!")
        print(f"     Modelo: {result.get('board-name', '?')}")
        print(f"     RouterOS: {result.get('version', '?')}")
        conns = api.get_active_connections()
        if conns is not None:
            print(f"     VPN activas ({config.get('service_filter','todas')}): {len(conns)}")
        print(f"\n  Todo listo. Ejecutá: python vpn_monitor.py\n")
    else:
        print(f"  ERROR: {result}\n")


# ═══════════════════════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════════════════════

def main():
    parser = argparse.ArgumentParser(description="VPN Monitor - MikroTik")
    parser.add_argument("--setup", action="store_true")
    parser.add_argument("--test", action="store_true")
    parser.add_argument("--export", action="store_true")
    parser.add_argument("--export-daily", action="store_true")
    parser.add_argument("--days", type=int, default=30)
    parser.add_argument("--api-only", action="store_true")
    args = parser.parse_args()

    if args.setup: setup_credentials(); return
    if args.test: test_connection(); return

    config = load_config()
    creds = load_credentials()
    if not creds:
        print("\n  Ejecutá: python vpn_monitor.py --setup\n"); sys.exit(1)

    init_db()
    load_geo_cache()

    if args.export: export_report(args.days); return
    if args.export_daily: export_daily_summary(args.days); return

    port = config.get("dashboard_port", 5555)
    bind = config.get("dashboard_bind", "127.0.0.1")

    if args.api_only:
        from web_server import create_app
        app = create_app(str(BASE_DIR / "dashboard.html"))
        app.run(host=bind, port=port, debug=False)
        return

    api = MikroTikAPI(config, creds)
    ok, result = api.test_connection()
    if not ok:
        logger.error(f"No conecta: {result}"); sys.exit(1)

    logger.info(f"Conectado: {result.get('board-name','?')} - RouterOS {result.get('version','?')}")

    # Iniciar Flask en thread separado
    from web_server import create_app
    flask_app = create_app(str(BASE_DIR / "dashboard.html"))
    threading.Thread(target=lambda: flask_app.run(host=bind, port=port, debug=False, use_reloader=False), daemon=True).start()

    logger.info(f"VPN Monitor v2 iniciado")
    logger.info(f"   MikroTik: {config['mikrotik_host']}:{config['mikrotik_port']}")
    logger.info(f"   Filtro: {config.get('service_filter', 'todos')}")
    logger.info(f"   Dashboard: http://{bind}:{port}")
    logger.info(f"   Polling: {config['poll_interval_seconds']}s")

    while True:
        try:
            process_connections(api, config)
        except Exception as e:
            logger.error(f"Error polling: {e}")
        time.sleep(config["poll_interval_seconds"])

if __name__ == "__main__":
    main()
