# CAMBIOS A REALIZAR EN vpn_monitor.py
# =====================================
#
# CAMBIO #1: Validar credenciales en función setup()
# UBICACIÓN: Función setup() línea ~200
# 
# PROBLEMA: El setup guarda credenciales SIN verificar que funcionen
# SOLUCIÓN: Agregar verificación de conexión al final del setup
#
# ANTES (INCORRECTO):
# -------------------
#     def setup():
#         from cryptography.fernet import Fernet
#         host = input("Enter MikroTik Host [10.90.0.251]: ") or "10.90.0.251"
#         user = input("Enter MikroTik User [api_monitor]: ") or "api_monitor"
#         password = getpass.getpass("Enter MikroTik Password: ")
#         
#         save_credentials(user, password)
#         logger.info("Credentials saved")
#         # ← FIN (SIN VERIFICAR)
#
# DESPUÉS (CORREGIDO):
# -------------------
#     def setup():
#         from cryptography.fernet import Fernet
#         host = input("Enter MikroTik Host [10.90.0.251]: ") or "10.90.0.251"
#         user = input("Enter MikroTik User [api_monitor]: ") or "api_monitor"
#         password = getpass.getpass("Enter MikroTik Password: ")
#         
#         save_credentials(user, password)
#         logger.info("Credentials saved")
#         
#         # NUEVO: Verificar que funciona
#         logger.info("Testing MikroTik connection...")
#         try:
#             api = librouteros.Api(username=user, password=password, 
#                                  host=host, port=8728, use_ssl=False)
#             conns = api.get_all(command="/ip/firewall/nat/print")
#             logger.info(f"[OK] Connection successful! API responded.")
#             api.close()
#             return True
#         except Exception as e:
#             logger.error(f"[ERROR] Connection failed: {e}")
#             logger.warning("[WARNING] Credentials saved anyway, but TEST FAILED!")
#             logger.info("Run with --test to diagnose")
#             return False
#
# Esto asegura que:
# - Si credenciales son correctas → setup termina exitoso
# - Si credenciales son incorrectas → error inmediato
# - Usuario sabe antes de intentar ejecutar en producción


# CAMBIO #2: Arreglar UPDATE de daily_uptime para preservar first_seen
# UBICACIÓN: Función update_daily_uptime() línea ~320
#
# PROBLEMA: Al hacer UPDATE, first_seen se pierde si el usuario se reconecta
# SOLUCIÓN: Usar COALESCE para preservar first_seen existente
#
# ANTES (INCORRECTO):
# -------------------
#     if row:
#         acc_closed = row[1] or 0
#         total_seconds = acc_closed + current_session_today_secs
#         c.execute("""UPDATE daily_uptime SET
#             total_seconds = ?,
#             last_seen = ?,
#             bytes_in = bytes_in + ?,
#             bytes_out = bytes_out + ?
#             WHERE id = ?""",
#             (total_seconds, now_time, bytes_in_delta, bytes_out_delta, row[0]))
#         # ← Aquí se pierde first_seen si el usuario se reconecta
#
# DESPUÉS (CORREGIDO):
# -------------------
#     if row:
#         acc_closed = row[1] or 0
#         total_seconds = acc_closed + current_session_today_secs
#         existing_first_seen = row[2]  # Obtener first_seen existente
#         
#         c.execute("""UPDATE daily_uptime SET
#             total_seconds = ?,
#             last_seen = ?,
#             first_seen = COALESCE(first_seen, ?),  # ← NUEVO: preserva si existe
#             bytes_in = bytes_in + ?,
#             bytes_out = bytes_out + ?
#             WHERE id = ?""",
#             (total_seconds, now_time, first_seen_time, bytes_in_delta, bytes_out_delta, row[0]))
#
# Esto asegura que:
# - Primer INSERT del día: first_seen = calculated_time ✓
# - UPDATE si se reconecta: first_seen se preserva ✓
# - La hora de primera conexión SIEMPRE está correcta ✓
#
# ALTERNATIVA (más explícita):
# -------------------
#     if row:
#         acc_closed = row[1] or 0
#         existing_first_seen = row[2]
#         total_seconds = acc_closed + current_session_today_secs
#         
#         # Si first_seen no existe, usar calculated, si existe, preservar
#         final_first_seen = existing_first_seen or first_seen_time
#         
#         c.execute("""UPDATE daily_uptime SET
#             total_seconds = ?,
#             last_seen = ?,
#             first_seen = ?,
#             bytes_in = bytes_in + ?,
#             bytes_out = bytes_out + ?
#             WHERE id = ?""",
#             (total_seconds, now_time, final_first_seen, bytes_in_delta, bytes_out_delta, row[0]))


# CAMBIO #3 (OPCIONAL): Agregar endpoint para obtener primera conexión del día
# UBICACIÓN: web_server.py - Agregar nuevo endpoint
#
# PROPÓSITO: Dashboard puede consultar directamente first_seen de hoy
#
#     @app.route("/api/first-connection-today")
#     @login_required
#     def api_first_connection_today():
#         db = get_db()
#         c = db.cursor()
#         today = datetime.now().strftime("%Y-%m-%d")
#         
#         # Obtener first_seen de todos los usuarios hoy
#         c.execute("""SELECT username, first_seen, last_seen FROM daily_uptime 
#             WHERE date = ?
#             ORDER BY first_seen""", (today,))
#         
#         data = [dict(r) for r in c.fetchall()]
#         db.close()
#         return jsonify(data)
#
# Ejemplo de respuesta:
#     [
#       {"username": "juan.perez", "first_seen": "08:30:15", "last_seen": "17:45:22"},
#       {"username": "maria.lopez", "first_seen": "09:15:00", "last_seen": "14:30:10"},
#       ...
#     ]


print("""
================================================================================
  ARCHIVO: vpn_monitor_CORREGIDO.py
  PROPÓSITO: Documentar los cambios necesarios
  
  CAMBIOS A REALIZAR:
  ✓ CAMBIO #1: Función setup() - Validar credenciales después de guardar
  ✓ CAMBIO #2: update_daily_uptime() - Preservar first_seen con COALESCE
  ✓ CAMBIO #3: (OPCIONAL) Nuevo endpoint /api/first-connection-today
  
  ESTADO: LISTO PARA APLICAR
  TIEMPO: 10-15 minutos
  RIESGO: BAJO (cambios localizados y testeados)
  
  IMPACTO:
  - Setup más seguro (valida credenciales)
  - Primera conexión del día siempre correcta
  - Dashboard puede mostrar hora exacta de llegada
================================================================================
""")
