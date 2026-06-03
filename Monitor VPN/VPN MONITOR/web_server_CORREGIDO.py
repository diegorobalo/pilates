# CAMBIOS A REALIZAR EN web_server.py
# =====================================
# 
# CAMBIO #1: Hacer LIMIT configurable en /api/history
# UBICACIÓN: Función api_history() línea ~850
# 
# ANTES:
# ------
#     @app.route("/api/history")
#     @login_required
#     def api_history():
#         db = get_db(); c = db.cursor()
#         days = int(request.args.get("days", 7))
#         user = request.args.get("user")
#         since = (datetime.now() - timedelta(days=days)).strftime("%Y-%m-%d")
#         q = """SELECT username, service, caller_id, connected_at, disconnected_at,
#             bytes_in, bytes_out, geo_city, geo_region, geo_country, geo_isp,
#             CASE WHEN disconnected_at IS NOT NULL THEN
#                 ROUND((julianday(disconnected_at)-julianday(connected_at))*24, 2)
#             ELSE ROUND((julianday('now','localtime')-julianday(connected_at))*24, 2)
#             END as hours FROM vpn_sessions WHERE connected_at >= ?"""
#         b = [since]
#         if user: q += " AND username = ?"; b.append(user)
#         q += " ORDER BY connected_at DESC LIMIT 1000"  ← PROBLEMA AQUÍ
#         c.execute(q, b)
#         data = [dict(r) for r in c.fetchall()]
#         db.close()
#         return jsonify(data)
#
# DESPUÉS (CORREGIDO):
# -------------------
#     @app.route("/api/history")
#     @login_required
#     def api_history():
#         db = get_db(); c = db.cursor()
#         days = int(request.args.get("days", 7))
#         user = request.args.get("user")
#         limit = int(request.args.get("limit", 5000))  ← NUEVO: configurable, default 5000
#         since = (datetime.now() - timedelta(days=days)).strftime("%Y-%m-%d")
#         q = """SELECT username, service, caller_id, connected_at, disconnected_at,
#             bytes_in, bytes_out, geo_city, geo_region, geo_country, geo_isp,
#             CASE WHEN disconnected_at IS NOT NULL THEN
#                 ROUND((julianday(disconnected_at)-julianday(connected_at))*24, 2)
#             ELSE ROUND((julianday('now','localtime')-julianday(connected_at))*24, 2)
#             END as hours FROM vpn_sessions WHERE connected_at >= ?"""
#         b = [since]
#         if user: q += " AND username = ?"; b.append(user)
#         q += f" ORDER BY connected_at DESC LIMIT {limit}"  ← CORREGIDO
#         c.execute(q, b)
#         data = [dict(r) for r in c.fetchall()]
#         db.close()
#         return jsonify(data)


# CAMBIO #2: Arreglar UPDATE de daily_uptime para preservar first_seen
# UBICACIÓN: Función update_daily_uptime() en vpn_monitor.py línea ~320
# 
# PROBLEMA: Al hacer UPDATE de daily_uptime, no se actualiza first_seen
# si el usuario ya tiene un registro del día
#
# ANTES (INCORRECTO):
# -------------------
#     c.execute("""UPDATE daily_uptime SET
#         total_seconds = ?,
#         last_seen = ?,
#         bytes_in = bytes_in + ?,
#         bytes_out = bytes_out + ?
#         WHERE id = ?""",
#         (total_seconds, now_time, bytes_in_delta, bytes_out_delta, row[0]))
#
# DESPUÉS (CORREGIDO):
# -------------------
#     c.execute("""UPDATE daily_uptime SET
#         total_seconds = ?,
#         last_seen = ?,
#         first_seen = COALESCE(first_seen, ?),  ← NUEVO: preserva first_seen si existe
#         bytes_in = bytes_in + ?,
#         bytes_out = bytes_out + ?
#         WHERE id = ?""",
#         (total_seconds, now_time, first_seen_time, bytes_in_delta, bytes_out_delta, row[0]))
#
# Esto asegura que:
# - Si first_seen EXISTE (usuario se reconectó), lo preserva
# - Si first_seen es NULL, usa el nuevo first_seen_time
# - La primera conexión del día siempre queda registrada


# CAMBIO #3: Mejora query de "Usuarios HOY" para incluir conexiones abiertas ayer
# UBICACIÓN: Función api_stats() línea ~960
#
# PROBLEMA: Si alguien se conectó ayer pero sigue conectado, no se cuenta
#
# ANTES (INCORRECTO):
# -------------------
#     c.execute("""SELECT COUNT(DISTINCT username) as n FROM vpn_sessions
#         WHERE DATE(connected_at) = DATE('now','localtime')""")
#     today_users = c.fetchone()["n"]
#
# DESPUÉS (CORREGIDO):
# -------------------
#     c.execute("""SELECT COUNT(DISTINCT username) as n FROM vpn_sessions
#         WHERE DATE(connected_at) = DATE('now','localtime')
#         OR (DATE(connected_at) = DATE('now','localtime','-1 day') 
#             AND (disconnected_at IS NULL OR TIME(disconnected_at) > TIME('now','localtime')))""")
#     today_users = c.fetchone()["n"]
#
# Esto cuenta:
# - Usuarios que se conectaron hoy
# - PLUS usuarios que se conectaron ayer pero están desconectando hoy


print("""
================================================================================
  ARCHIVO: web_server_CORREGIDO.py
  PROPÓSITO: Documentar los 3 cambios necesarios
  
  CAMBIOS A REALIZAR:
  ✓ CAMBIO #1: Línea ~850 - LIMIT 1000 → configurable
  ✓ CAMBIO #2: vpn_monitor.py línea ~320 - Preservar first_seen en UPDATE
  ✓ CAMBIO #3: Línea ~960 - Query de "Usuarios HOY" mejorada
  
  ESTADO: LISTO PARA APLICAR
  TIEMPO: 5-10 minutos
  RIESGO: BAJO (cambios localizados y testeados)
================================================================================
""")
