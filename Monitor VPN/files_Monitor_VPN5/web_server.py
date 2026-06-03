"""
VPN Monitor - Web Server con autenticación
===========================================
Servidor Flask que sirve el dashboard y la API con login.
"""

from flask import Flask, request, jsonify, redirect, url_for, session, render_template_string, send_file
import sqlite3
import json
import hashlib
import secrets
import os
from datetime import datetime, timedelta
from pathlib import Path
from functools import wraps

BASE_DIR = Path(__file__).parent
DB_FILE = BASE_DIR / "vpn_sessions.db"
USERS_DB = BASE_DIR / "users.db"

# ═══════════════════════════════════════════════════════════════════════════════
# USERS DB
# ═══════════════════════════════════════════════════════════════════════════════

def init_users_db():
    conn = sqlite3.connect(str(USERS_DB))
    c = conn.cursor()
    c.execute("""CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        salt TEXT NOT NULL,
        role TEXT DEFAULT 'viewer',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        last_login DATETIME
    )""")
    c.execute("""CREATE TABLE IF NOT EXISTS user_sectors (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        sector TEXT NOT NULL,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (username) REFERENCES users(username)
    )""")
    # Crear admin por defecto si no existe
    c.execute("SELECT COUNT(*) FROM users WHERE role='admin'")
    if c.fetchone()[0] == 0:
        salt = secrets.token_hex(16)
        pw_hash = hashlib.pbkdf2_hmac('sha256', "admin".encode(), salt.encode(), 100000).hex()
        c.execute("INSERT INTO users (username, password_hash, salt, role) VALUES (?,?,?,?)",
                  ("admin", pw_hash, salt, "admin"))
    conn.commit()
    conn.close()

def verify_user(username, password):
    conn = sqlite3.connect(str(USERS_DB))
    c = conn.cursor()
    c.execute("SELECT id, password_hash, salt, role FROM users WHERE username=?", (username,))
    row = c.fetchone()
    if row:
        uid, pw_hash, salt, role = row
        expected = hashlib.pbkdf2_hmac('sha256', password.encode(), salt.encode(), 100000).hex()
        if expected == pw_hash:
            c.execute("UPDATE users SET last_login=? WHERE id=?",
                      (datetime.now().strftime("%Y-%m-%d %H:%M:%S"), uid))
            conn.commit()
            conn.close()
            return {"id": uid, "username": username, "role": role}
    conn.close()
    return None

def list_users():
    conn = sqlite3.connect(str(USERS_DB))
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    c.execute("SELECT id, username, role, created_at, last_login FROM users ORDER BY username")
    users = [dict(r) for r in c.fetchall()]
    conn.close()
    return users

def create_user(username, password, role="viewer"):
    conn = sqlite3.connect(str(USERS_DB))
    c = conn.cursor()
    salt = secrets.token_hex(16)
    pw_hash = hashlib.pbkdf2_hmac('sha256', password.encode(), salt.encode(), 100000).hex()
    try:
        c.execute("INSERT INTO users (username, password_hash, salt, role) VALUES (?,?,?,?)",
                  (username, pw_hash, salt, role))
        conn.commit()
        conn.close()
        return True
    except sqlite3.IntegrityError:
        conn.close()
        return False

def delete_user(user_id):
    conn = sqlite3.connect(str(USERS_DB))
    c = conn.cursor()
    c.execute("DELETE FROM users WHERE id=? AND role != 'admin'", (user_id,))
    conn.commit()
    conn.close()

def change_password(user_id, new_password):
    conn = sqlite3.connect(str(USERS_DB))
    c = conn.cursor()
    salt = secrets.token_hex(16)
    pw_hash = hashlib.pbkdf2_hmac('sha256', new_password.encode(), salt.encode(), 100000).hex()
    c.execute("UPDATE users SET password_hash=?, salt=? WHERE id=?", (pw_hash, salt, user_id))
    conn.commit()
    conn.close()

def list_sectors():
    """Retorna todos los sectores únicos con sus usuarios."""
    conn = sqlite3.connect(str(USERS_DB))
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    c.execute("""SELECT DISTINCT sector FROM user_sectors ORDER BY sector""")
    sectors = [r["sector"] for r in c.fetchall()]
    conn.close()
    return sectors

def get_user_sector(username):
    """Obtiene el sector de un usuario."""
    conn = sqlite3.connect(str(USERS_DB))
    c = conn.cursor()
    c.execute("SELECT sector FROM user_sectors WHERE username=?", (username,))
    row = c.fetchone()
    conn.close()
    return row[0] if row else "Sin asignar"

def set_user_sector(username, sector):
    """Asigna un sector a un usuario."""
    conn = sqlite3.connect(str(USERS_DB))
    c = conn.cursor()
    try:
        c.execute("""INSERT OR REPLACE INTO user_sectors (username, sector, updated_at)
            VALUES (?, ?, datetime('now'))""", (username, sector))
        conn.commit()
        conn.close()
        return True
    except Exception:
        conn.close()
        return False


# ═══════════════════════════════════════════════════════════════════════════════
# FLASK APP
# ═══════════════════════════════════════════════════════════════════════════════

def create_app(dashboard_html_path):
    app = Flask(__name__)
    _sk_file = BASE_DIR / ".flask_secret.key"
    if _sk_file.exists():
        app.secret_key = _sk_file.read_text().strip()
    else:
        _sk = secrets.token_hex(32)
        _sk_file.write_text(_sk)
        try:
            import subprocess
            subprocess.run(['icacls', str(_sk_file), '/inheritance:r',
                            '/grant:r', f'{os.getlogin()}:(R,W)'],
                           capture_output=True, check=False)
        except Exception:
            pass
        app.secret_key = _sk
    app.permanent_session_lifetime = timedelta(hours=12)

    init_users_db()

    # Rate limiting para login
    _login_attempts = {}  # {ip: [timestamp, ...]}
    MAX_ATTEMPTS = 10
    WINDOW_SECS = 300  # 5 minutos

    @app.after_request
    def security_headers(response):
        response.headers['X-Content-Type-Options'] = 'nosniff'
        response.headers['X-Frame-Options'] = 'SAMEORIGIN'
        response.headers['X-XSS-Protection'] = '1; mode=block'
        response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'
        return response

    # ── Auth decorator ──
    def login_required(f):
        @wraps(f)
        def decorated(*args, **kwargs):
            if "user" not in session:
                if request.path.startswith("/api/"):
                    return jsonify({"error": "No autorizado"}), 401
                return redirect(url_for("login"))
            return f(*args, **kwargs)
        return decorated

    def admin_required(f):
        @wraps(f)
        def decorated(*args, **kwargs):
            if "user" not in session or session["user"].get("role") != "admin":
                if request.path.startswith("/api/"):
                    return jsonify({"error": "Sin permisos de administrador"}), 403
                return redirect(url_for("login"))
            return f(*args, **kwargs)
        return decorated

    # ── DB helper ──
    def get_db():
        db = sqlite3.connect(str(DB_FILE))
        db.row_factory = sqlite3.Row
        return db

    # ── Login page ──
    LOGIN_HTML = '''<!DOCTYPE html>
<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>VPN Monitor — Login</title>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
:root{--bg:#0b0e14;--s1:#131720;--s2:#1a1f2e;--bd:#252b3b;--tx:#c8cdd8;--txd:#6b7280;--txb:#e8ecf4;--ac:#3b82f6;--rd:#ef4444;--r:12px}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--tx);min-height:100vh;display:flex;align-items:center;justify-content:center}
.login-box{background:var(--s1);border:1px solid var(--bd);border-radius:16px;padding:40px;width:380px;box-shadow:0 20px 60px rgba(0,0,0,.4)}
.login-box h1{font-size:20px;color:var(--txb);margin-bottom:6px;text-align:center}
.login-box .sub{font-size:12px;color:var(--txd);text-align:center;margin-bottom:28px}
.login-box img{display:block;margin:0 auto 20px;height:36px}
.field{margin-bottom:16px}
.field label{display:block;font-size:11px;color:var(--txd);text-transform:uppercase;letter-spacing:.7px;font-weight:600;margin-bottom:6px}
.field input{width:100%;background:var(--s2);border:1px solid var(--bd);color:var(--txb);padding:10px 14px;border-radius:8px;font-size:14px;font-family:'JetBrains Mono',monospace;outline:none;transition:.2s}
.field input:focus{border-color:var(--ac)}
.btn{width:100%;background:var(--ac);color:#fff;border:none;padding:12px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;transition:.2s;margin-top:8px}
.btn:hover{filter:brightness(1.15)}
.error{background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);border-radius:8px;padding:10px;color:var(--rd);font-size:12px;margin-bottom:16px;text-align:center}
</style></head><body>
<div class="login-box">
<img src="/static/logo" alt="Argensun Foods">
<h1>VPN Monitor</h1>
<div class="sub">Argensun Foods — Sistemas</div>
{% if error %}<div class="error">{{ error }}</div>{% endif %}
<form method="POST">
<div class="field"><label>Usuario</label><input type="text" name="username" autofocus required></div>
<div class="field"><label>Contraseña</label><input type="password" name="password" required></div>
<button type="submit" class="btn">Iniciar sesión</button>
</form>
</div></body></html>'''

    # ── Admin panel ──
    ADMIN_HTML = '''<!DOCTYPE html>
<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>VPN Monitor — Administración</title>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
:root{--bg:#0b0e14;--s1:#131720;--s2:#1a1f2e;--bd:#252b3b;--tx:#c8cdd8;--txd:#6b7280;--txb:#e8ecf4;--ac:#3b82f6;--gn:#22c55e;--rd:#ef4444;--r:10px}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--tx);min-height:100vh;padding:40px}
.wrap{max-width:700px;margin:0 auto}
h1{font-size:20px;color:var(--txb);margin-bottom:4px}
.sub{font-size:12px;color:var(--txd);margin-bottom:24px}
.back{color:var(--ac);text-decoration:none;font-size:13px;display:inline-block;margin-bottom:20px}
.card{background:var(--s1);border:1px solid var(--bd);border-radius:var(--r);padding:20px;margin-bottom:16px}
.card h3{font-size:14px;color:var(--txb);margin-bottom:12px}
table{width:100%;border-collapse:collapse}
th{text-align:left;font-size:10px;color:var(--txd);text-transform:uppercase;letter-spacing:.7px;padding:8px;border-bottom:1px solid var(--bd)}
td{padding:8px;font-size:13px;border-bottom:1px solid var(--bd)}
.role{display:inline-block;padding:2px 8px;border-radius:12px;font-size:10px;font-weight:700;text-transform:uppercase}
.role.admin{background:rgba(59,130,246,.15);color:var(--ac)}
.role.viewer{background:rgba(34,197,94,.15);color:var(--gn)}
.field{margin-bottom:12px}
.field label{display:block;font-size:11px;color:var(--txd);text-transform:uppercase;letter-spacing:.5px;font-weight:600;margin-bottom:4px}
.field input,.field select{background:var(--s2);border:1px solid var(--bd);color:var(--txb);padding:8px 12px;border-radius:7px;font-size:13px;font-family:'JetBrains Mono',monospace;outline:none}
.btn{background:var(--ac);color:#fff;border:none;padding:8px 16px;border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;font-family:inherit}
.btn:hover{filter:brightness(1.15)}
.btn-r{background:var(--rd)}
.btn-sm{padding:5px 10px;font-size:11px}
.msg{padding:10px;border-radius:8px;font-size:12px;margin-bottom:12px}
.msg.ok{background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.2);color:var(--gn)}
.msg.err{background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);color:var(--rd)}
.row{display:flex;gap:8px;align-items:end}
</style></head><body><div class="wrap">
<a href="/" class="back">← Volver al dashboard</a>
<h1>Administración de usuarios</h1>
<div class="sub">Solo accesible para administradores</div>
{% if msg %}<div class="msg {{ msg_type }}">{{ msg }}</div>{% endif %}
<div class="card">
<h3>Crear usuario</h3>
<form method="POST" action="/admin/create"><div class="row">
<div class="field"><label>Usuario</label><input type="text" name="username" required></div>
<div class="field"><label>Contraseña</label><input type="password" name="password" required></div>
<div class="field"><label>Rol</label><select name="role"><option value="viewer">Viewer (RRHH)</option><option value="admin">Admin (IT)</option></select></div>
<div class="field"><button type="submit" class="btn" style="margin-top:16px">Crear</button></div>
</div></form></div>
<div class="card">
<h3>Usuarios registrados</h3>
<table><thead><tr><th>Usuario</th><th>Rol</th><th>Creado</th><th>Último login</th><th></th></tr></thead>
<tbody>{% for u in users %}<tr>
<td style="color:var(--txb);font-weight:600">{{ u.username }}</td>
<td><span class="role {{ u.role }}">{{ u.role }}</span></td>
<td style="font-family:'JetBrains Mono',monospace;font-size:11px">{{ u.created_at or '—' }}</td>
<td style="font-family:'JetBrains Mono',monospace;font-size:11px">{{ u.last_login or 'Nunca' }}</td>
<td>{% if u.role != 'admin' %}<form method="POST" action="/admin/delete" style="display:inline">
<input type="hidden" name="user_id" value="{{ u.id }}">
<button type="submit" class="btn btn-r btn-sm" onclick="return confirm('¿Eliminar {{ u.username }}?')">Eliminar</button>
</form>{% endif %}</td>
</tr>{% endfor %}</tbody></table></div>
<div class="card">
<h3>Cambiar mi contraseña</h3>
<form method="POST" action="/admin/password"><div class="row">
<div class="field"><label>Nueva contraseña</label><input type="password" name="new_password" required></div>
<div class="field"><label>Confirmar</label><input type="password" name="confirm_password" required></div>
<div class="field"><button type="submit" class="btn" style="margin-top:16px">Cambiar</button></div>
</div></form></div>
</div></body></html>'''

    # ── Routes ──

    @app.route("/login", methods=["GET", "POST"])
    def login():
        error = None
        if request.method == "POST":
            import time as _time
            _ip = request.remote_addr
            _now = _time.time()
            _attempts = _login_attempts.get(_ip, [])
            _attempts = [t for t in _attempts if _now - t < WINDOW_SECS]
            if len(_attempts) >= MAX_ATTEMPTS:
                error = f"Demasiados intentos. Esperá {WINDOW_SECS//60} minutos."
            else:
                user = verify_user(request.form["username"], request.form["password"])
                if user:
                    _login_attempts.pop(_ip, None)
                    session.permanent = True
                    session["user"] = user
                    return redirect("/")
                _attempts.append(_now)
                _login_attempts[_ip] = _attempts
                error = "Usuario o contraseña incorrectos"
        return render_template_string(LOGIN_HTML, error=error)

    @app.route("/logout")
    def logout():
        session.clear()
        return redirect(url_for("login"))

    @app.route("/static/logo")
    def serve_logo():
        logo_path = BASE_DIR / "logo_argensun.png"
        if logo_path.exists():
            return send_file(str(logo_path), mimetype="image/png")
        return "", 404

    @app.route("/")
    @login_required
    def dashboard():
        html_path = Path(dashboard_html_path)
        if html_path.exists():
            content = html_path.read_text(encoding="utf-8")
            # Inject user info and logout button into the header
            user_info = f'''<div style="display:flex;align-items:center;gap:10px">
                <span style="font-size:11px;color:#6b7280">{session["user"]["username"]} ({session["user"]["role"]})</span>
                {"<a href='/admin' style='font-size:11px;color:#3b82f6;text-decoration:none'>Admin</a>" if session["user"]["role"]=="admin" else ""}
                <a href="/logout" style="font-size:11px;color:#ef4444;text-decoration:none">Cerrar sesión</a>
            </div>'''
            content = content.replace('</div>\n</div>\n\n<div class="main">', 
                                       f'{user_info}</div></div><div class="main">')
            # Fix API URL to be relative (same server)
            content = content.replace("http://localhost:5555", "")
            content = content.replace('value="http://localhost:5555"', 'value=""')
            return content
        return "Dashboard no encontrado", 404

    @app.route("/admin")
    @admin_required
    def admin_panel():
        return render_template_string(ADMIN_HTML, users=list_users(), msg=request.args.get("msg"), msg_type=request.args.get("t", "ok"))

    @app.route("/admin/create", methods=["POST"])
    @admin_required
    def admin_create():
        username = request.form["username"].strip()
        password = request.form["password"]
        role = request.form.get("role", "viewer")
        if not username or not password:
            return redirect("/admin?msg=Completá todos los campos&t=err")
        if create_user(username, password, role):
            return redirect(f"/admin?msg=Usuario {username} creado&t=ok")
        return redirect(f"/admin?msg=El usuario {username} ya existe&t=err")

    @app.route("/admin/delete", methods=["POST"])
    @admin_required
    def admin_delete():
        delete_user(int(request.form["user_id"]))
        return redirect("/admin?msg=Usuario eliminado&t=ok")

    @app.route("/admin/password", methods=["POST"])
    @admin_required
    def admin_password():
        new = request.form["new_password"]
        confirm = request.form["confirm_password"]
        if new != confirm:
            return redirect("/admin?msg=Las contraseñas no coinciden&t=err")
        change_password(session["user"]["id"], new)
        return redirect("/admin?msg=Contraseña actualizada&t=ok")

    # ── API endpoints (all require login) ──

    @app.route("/api/active")
    @login_required
    def api_active():
        db = get_db(); c = db.cursor()
        c.execute("""SELECT username, service, caller_id, assigned_ip,
            connected_at, uptime_raw, bytes_in, bytes_out, encoding,
            geo_city, geo_region, geo_country, geo_isp
            FROM vpn_sessions WHERE is_active = 1 ORDER BY username""")
        rows = [dict(r) for r in c.fetchall()]
        today = datetime.now().strftime("%Y-%m-%d")
        for row in rows:
            c.execute("SELECT total_seconds, bytes_in, bytes_out, first_seen FROM daily_uptime WHERE username=? AND date=?",
                      (row["username"], today))
            du = c.fetchone()
            row["daily_uptime_seconds"] = du["total_seconds"] if du else 0
            row["daily_bytes_in"] = du["bytes_in"] if du else 0
            row["daily_bytes_out"] = du["bytes_out"] if du else 0
            row["daily_first_seen"] = du["first_seen"] if du else None
        db.close()
        return jsonify(rows)

    @app.route("/api/sessions")
    @login_required
    def api_sessions():
        db = get_db(); c = db.cursor()
        days = int(request.args.get("days", 7))
        user = request.args.get("user")
        since = (datetime.now() - timedelta(days=days)).strftime("%Y-%m-%d")
        q = """SELECT username, service, caller_id, connected_at, disconnected_at,
            bytes_in, bytes_out, geo_city, geo_region, geo_country, geo_isp,
            CASE WHEN disconnected_at IS NOT NULL THEN
                ROUND((julianday(disconnected_at)-julianday(connected_at))*24, 2)
            ELSE ROUND((julianday('now','localtime')-julianday(connected_at))*24, 2)
            END as hours FROM vpn_sessions WHERE connected_at >= ?"""
        b = [since]
        if user: q += " AND username = ?"; b.append(user)
        q += " ORDER BY connected_at DESC LIMIT 1000"
        c.execute(q, b)
        data = [dict(r) for r in c.fetchall()]
        db.close()
        return jsonify(data)

    @app.route("/api/summary")
    @login_required
    def api_summary():
        db = get_db(); c = db.cursor()
        days = int(request.args.get("days", 30))
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
        data = []
        for r in c.fetchall():
            row = dict(r)
            row["sector"] = get_user_sector(row["username"])
            data.append(row)
        db.close()
        return jsonify(data)

    @app.route("/api/daily")
    @login_required
    def api_daily():
        db = get_db(); c = db.cursor()
        days = int(request.args.get("days", 30))
        user = request.args.get("user")
        since = (datetime.now() - timedelta(days=days)).strftime("%Y-%m-%d")
        q = """SELECT username, date, total_seconds, first_seen, last_seen,
            bytes_in, bytes_out FROM daily_uptime WHERE date >= ?"""
        b = [since]
        if user: q += " AND username = ?"; b.append(user)
        q += " ORDER BY date DESC, username"
        c.execute(q, b)
        data = [dict(r) for r in c.fetchall()]
        db.close()
        return jsonify(data)

    @app.route("/api/users")
    @login_required
    def api_users():
        db = get_db(); c = db.cursor()
        c.execute("SELECT DISTINCT username FROM vpn_sessions ORDER BY username")
        data = [r["username"] for r in c.fetchall()]
        db.close()
        return jsonify(data)

    @app.route("/api/stats")
    @login_required
    def api_stats():
        db = get_db(); c = db.cursor()
        c.execute("SELECT COUNT(*) as n FROM vpn_sessions WHERE is_active = 1")
        active = c.fetchone()["n"]
        c.execute("""SELECT COUNT(DISTINCT username) as n FROM vpn_sessions
            WHERE DATE(connected_at) = DATE('now','localtime')""")
        today_users = c.fetchone()["n"]
        today = datetime.now().strftime("%Y-%m-%d")
        c.execute("SELECT SUM(bytes_in+bytes_out) as b FROM daily_uptime WHERE date=?", (today,))
        r = c.fetchone()
        today_bytes = r["b"] if r["b"] else 0
        db.close()
        return jsonify({"active_now": active, "today_users": today_users,
                        "today_traffic_gb": round(today_bytes/1073741824, 2)})

    @app.route("/api/user-report")
    @login_required
    def api_user_report():
        db = get_db(); c = db.cursor()
        user = request.args.get("user")
        days = int(request.args.get("days", 30))
        if not user:
            return jsonify({"error": "user param required"})
        since = (datetime.now() - timedelta(days=days)).strftime("%Y-%m-%d")
        c.execute("""SELECT date, total_seconds, first_seen, last_seen, bytes_in, bytes_out
            FROM daily_uptime WHERE username=? AND date>=? ORDER BY date DESC""", (user, since))
        daily = [dict(r) for r in c.fetchall()]
        c.execute("""SELECT connected_at, disconnected_at, caller_id, bytes_in, bytes_out,
            geo_city, geo_region, geo_country,
            CASE WHEN disconnected_at IS NOT NULL THEN
                ROUND((julianday(disconnected_at)-julianday(connected_at))*24, 2)
            ELSE ROUND((julianday('now','localtime')-julianday(connected_at))*24, 2)
            END as hours FROM vpn_sessions WHERE username=? AND connected_at>=?
            ORDER BY connected_at DESC""", (user, since))
        sessions = [dict(r) for r in c.fetchall()]
        total_seconds = sum(d["total_seconds"] for d in daily)
        total_in = sum(d["bytes_in"] for d in daily)
        total_out = sum(d["bytes_out"] for d in daily)
        c.execute("""SELECT DISTINCT caller_id, geo_city, geo_region, geo_country
            FROM vpn_sessions WHERE username=? AND connected_at>=? AND caller_id != ''
            ORDER BY connected_at DESC""", (user, since))
        locations = [dict(r) for r in c.fetchall()]
        db.close()
        return jsonify({
            "username": user, "days_range": days,
            "total_hours": round(total_seconds/3600, 2),
            "total_mb_in": round(total_in/1048576, 2),
            "total_mb_out": round(total_out/1048576, 2),
            "days_connected": len(daily),
            "daily": daily, "sessions": sessions, "locations": locations
        })

    @app.route("/api/audit")
    @login_required
    def api_audit():
        db = get_db(); c = db.cursor()
        user = request.args.get("user")
        date_from = request.args.get("from")
        date_to = request.args.get("to")
        if not user:
            return jsonify({"error": "user param required"})
        if not date_from: date_from = (datetime.now() - timedelta(days=7)).strftime("%Y-%m-%d")
        if not date_to: date_to = datetime.now().strftime("%Y-%m-%d")
        c.execute("""SELECT date, total_seconds, first_seen, last_seen, bytes_in, bytes_out
            FROM daily_uptime WHERE username=? AND date>=? AND date<=? ORDER BY date""",
            (user, date_from, date_to))
        daily = [dict(r) for r in c.fetchall()]
        c.execute("""SELECT connected_at, disconnected_at, caller_id, bytes_in, bytes_out,
            geo_city, geo_region, geo_country,
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
        db.close()
        return jsonify({
            "username": user, "from": date_from, "to": date_to,
            "total_hours": round(total_secs/3600, 2),
            "total_mb_in": round(total_in/1048576, 2),
            "total_mb_out": round(total_out/1048576, 2),
            "days_connected": len(daily),
            "days_total": (datetime.strptime(date_to, "%Y-%m-%d") - datetime.strptime(date_from, "%Y-%m-%d")).days + 1,
            "daily": daily, "sessions": sessions
        })

    @app.route("/api/export")
    @login_required
    def api_export():
        from vpn_monitor import export_report
        days = int(request.args.get("days", 30))
        f = export_report(days)
        return jsonify({"file": str(f)})

    @app.route("/api/sectors")
    @login_required
    def api_sectors():
        """Retorna lista de sectores únicos."""
        return jsonify(list_sectors())

    @app.route("/api/users-by-sector")
    @login_required
    def api_users_by_sector():
        """Retorna usuarios agrupados por sector con estadísticas."""
        db = get_db(); c = db.cursor()
        days = int(request.args.get("days", 30))
        since = (datetime.now() - timedelta(days=days)).strftime("%Y-%m-%d")

        # Obtener todos los usuarios únicos
        c.execute("SELECT DISTINCT username FROM vpn_sessions ORDER BY username")
        users = [r["username"] for r in c.fetchall()]

        # Agrupar por sector
        sectors_data = {}
        for user in users:
            sector = get_user_sector(user)
            if sector not in sectors_data:
                sectors_data[sector] = {"users": [], "total_hours": 0, "users_count": 0}

            c.execute("""SELECT SUM(CASE WHEN disconnected_at IS NOT NULL THEN
                (julianday(disconnected_at)-julianday(connected_at))*24
            ELSE (julianday('now','localtime')-julianday(connected_at))*24
            END) as hours FROM vpn_sessions WHERE username=? AND connected_at >= ?""",
                (user, since))
            hours = c.fetchone()["hours"] or 0
            sectors_data[sector]["users"].append({"name": user, "hours": round(hours, 2)})
            sectors_data[sector]["total_hours"] += hours
            sectors_data[sector]["users_count"] += 1

        # Formatear respuesta
        result = []
        for sector in sorted(sectors_data.keys()):
            data = sectors_data[sector]
            result.append({
                "sector": sector,
                "users_count": data["users_count"],
                "total_hours": round(data["total_hours"], 2),
                "avg_hours": round(data["total_hours"] / data["users_count"], 2) if data["users_count"] > 0 else 0,
                "users": sorted(data["users"], key=lambda x: x["hours"], reverse=True)
            })
        db.close()
        return jsonify(sorted(result, key=lambda x: x["total_hours"], reverse=True))

    @app.route("/api/set-user-sector", methods=["POST"])
    @admin_required
    def api_set_user_sector():
        """Admin endpoint para asignar sector a usuario."""
        data = request.get_json()
        username = data.get("username")
        sector = data.get("sector")
        if not username or not sector:
            return jsonify({"error": "username y sector requeridos"}), 400
        if set_user_sector(username, sector):
            return jsonify({"ok": True})
        return jsonify({"error": "Error al asignar sector"}), 500

    @app.route("/api/user-sector/<username>")
    @login_required
    def api_get_user_sector(username):
        """Obtiene el sector de un usuario."""
        return jsonify({"username": username, "sector": get_user_sector(username)})

    return app
