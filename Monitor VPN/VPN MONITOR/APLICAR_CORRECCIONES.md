# 🔧 APLICAR CORRECCIONES PRE-MIGRACIÓN
## VPN Monitor v2.1.0

**Objetivo**: Corregir bugs ANTES de migrar a fs02  
**Tiempo estimado**: 15 minutos  
**Riesgo**: Bajo  
**Backup recomendado**: Sí

---

## 📋 CAMBIOS A APLICAR

### CAMBIO #1: web_server.py - LIMIT 1000 → Configurable
**Ubicación**: Línea ~850, función `api_history()`  
**Archivo**: `web_server.py`

**COPIAR ESTA SECCIÓN Y REEMPLAZAR**:

```python
# ANTES - Buscar y reemplazar desde aquí:
    @app.route("/api/history")
    @login_required
    def api_history():
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

# DESPUÉS - Reemplazar por esto:
    @app.route("/api/history")
    @login_required
    def api_history():
        db = get_db(); c = db.cursor()
        days = int(request.args.get("days", 7))
        user = request.args.get("user")
        limit = int(request.args.get("limit", 5000))  # ← NUEVO: default 5000
        since = (datetime.now() - timedelta(days=days)).strftime("%Y-%m-%d")
        q = """SELECT username, service, caller_id, connected_at, disconnected_at,
            bytes_in, bytes_out, geo_city, geo_region, geo_country, geo_isp,
            CASE WHEN disconnected_at IS NOT NULL THEN
                ROUND((julianday(disconnected_at)-julianday(connected_at))*24, 2)
            ELSE ROUND((julianday('now','localtime')-julianday(connected_at))*24, 2)
            END as hours FROM vpn_sessions WHERE connected_at >= ?"""
        b = [since]
        if user: q += " AND username = ?"; b.append(user)
        q += f" ORDER BY connected_at DESC LIMIT {limit}"  # ← CORREGIDO
        c.execute(q, b)
        data = [dict(r) for r in c.fetchall()]
        db.close()
        return jsonify(data)
```

---

### CAMBIO #2: vpn_monitor.py - Validar credenciales en setup()
**Ubicación**: Línea ~200, función `setup()`  
**Archivo**: `vpn_monitor.py`

**BUSCAR ESTA SECCIÓN**:
```python
def setup():
    from cryptography.fernet import Fernet
    host = input("Enter MikroTik Host [10.90.0.251]: ") or "10.90.0.251"
    user = input("Enter MikroTik User [api_monitor]: ") or "api_monitor"
    password = getpass.getpass("Enter MikroTik Password: ")
    
    save_credentials(user, password)
    logger.info("Credentials saved")
```

**REEMPLAZAR POR**:
```python
def setup():
    from cryptography.fernet import Fernet
    host = input("Enter MikroTik Host [10.90.0.251]: ") or "10.90.0.251"
    user = input("Enter MikroTik User [api_monitor]: ") or "api_monitor"
    password = getpass.getpass("Enter MikroTik Password: ")
    
    save_credentials(user, password)
    logger.info("Credentials saved")
    
    # NUEVO: Verificar que las credenciales funcionan
    logger.info("Testing MikroTik connection...")
    try:
        api = librouteros.Api(username=user, password=password, 
                             host=host, port=8728, use_ssl=False)
        conns = api.get_all(command="/ip/firewall/nat/print")
        logger.info("[OK] Connection successful! Credentials verified.")
        api.close()
    except Exception as e:
        logger.error(f"[ERROR] Connection FAILED: {e}")
        logger.warning("[WARNING] Credentials saved, but TEST FAILED!")
        logger.info("Please check your credentials and try --test")
```

---

### CAMBIO #3: vpn_monitor.py - Preservar first_seen en UPDATE
**Ubicación**: Línea ~320, función `update_daily_uptime()`  
**Archivo**: `vpn_monitor.py`

**BUSCAR ESTA SECCIÓN**:
```python
    if row:
        acc_closed = row[1] or 0
        total_seconds = acc_closed + current_session_today_secs
        c.execute("""UPDATE daily_uptime SET
            total_seconds = ?,
            last_seen = ?,
            bytes_in = bytes_in + ?,
            bytes_out = bytes_out + ?
            WHERE id = ?""",
            (total_seconds, now_time, bytes_in_delta, bytes_out_delta, row[0]))
```

**REEMPLAZAR POR**:
```python
    if row:
        acc_closed = row[1] or 0
        existing_first_seen = row[2]  # Obtener first_seen existente
        total_seconds = acc_closed + current_session_today_secs
        
        # NUEVO: Preservar first_seen si ya existe
        final_first_seen = existing_first_seen or first_seen_time
        
        c.execute("""UPDATE daily_uptime SET
            total_seconds = ?,
            last_seen = ?,
            first_seen = ?,
            bytes_in = bytes_in + ?,
            bytes_out = bytes_out + ?
            WHERE id = ?""",
            (total_seconds, now_time, final_first_seen, bytes_in_delta, bytes_out_delta, row[0]))
```

---

## ✅ CHECKLIST DE APLICACIÓN

### Paso 1: Backup de archivos originales
```powershell
# En C:\Users\diego.robalo\Documents\CLAUDIA\Monitor VPN\VPN MONITOR\

# Hacer backup
Copy-Item "vpn_monitor.py" "vpn_monitor.py.backup"
Copy-Item "web_server.py" "web_server.py.backup"

# Verificar
ls *.backup
```

- [ ] vpn_monitor.py.backup creado
- [ ] web_server.py.backup creado

### Paso 2: Aplicar CAMBIO #1 (web_server.py)
- [ ] Abierto archivo web_server.py
- [ ] Ubicada función `api_history()` línea ~850
- [ ] Reemplazada sección completa con nueva versión
- [ ] Guardado archivo
- [ ] Verificado que cambio está aplicado (Ctrl+F "LIMIT {limit}")

### Paso 3: Aplicar CAMBIO #2 (vpn_monitor.py)
- [ ] Abierto archivo vpn_monitor.py
- [ ] Ubicada función `setup()` línea ~200
- [ ] Agregadas líneas de validación de conexión
- [ ] Guardado archivo
- [ ] Verificado que cambio está aplicado

### Paso 4: Aplicar CAMBIO #3 (vpn_monitor.py)
- [ ] Abierto archivo vpn_monitor.py
- [ ] Ubicada función `update_daily_uptime()` línea ~320
- [ ] Reemplazada sección de UPDATE
- [ ] Guardado archivo
- [ ] Verificado que `final_first_seen` se usa en UPDATE

### Paso 5: Prueba de sintaxis
```powershell
# En C:\Users\diego.robalo\Documents\CLAUDIA\Monitor VPN\VPN MONITOR\

# Verificar que Python puede cargar los archivos sin errores
python -m py_compile vpn_monitor.py
python -m py_compile web_server.py

# Si ambos commands terminan sin error → OK ✓
```

- [ ] vpn_monitor.py sintaxis correcta
- [ ] web_server.py sintaxis correcta

### Paso 6: Comparación de cambios (opcional pero recomendado)
```powershell
# Verificar que los cambios están correctamente aplicados
# Buscar el nuevo código:

# En vpn_monitor.py:
Select-String -Path "vpn_monitor.py" -Pattern "final_first_seen" 
# Debe mostrar líneas con "final_first_seen"

# En web_server.py:
Select-String -Path "web_server.py" -Pattern "LIMIT {limit}"
# Debe mostrar la línea con "LIMIT {limit}"
```

- [ ] Cambio #1 aplicado correctamente
- [ ] Cambio #2 aplicado correctamente
- [ ] Cambio #3 aplicado correctamente

---

## 🧪 VALIDACIÓN DE CAMBIOS

Después de aplicar, ejecutar una prueba rápida:

```powershell
# En C:\Users\diego.robalo\Documents\CLAUDIA\Monitor VPN\VPN MONITOR\

# Prueba 1: Syntax check
python -m py_compile vpn_monitor.py
python -m py_compile web_server.py

# Prueba 2: Verificar que las funciones modificadas siguen siendo válidas
# (Necesitas tener credenciales MikroTik válidas)

python vpn_monitor.py --test
```

**Resultado esperado**:
```
[OK] Connection successful!
[OK] All tests passed!
```

---

## 📋 RESUMEN DE CAMBIOS

| Cambio | Archivo | Línea | Impacto | Riesgo |
|--------|---------|-------|---------|--------|
| #1: LIMIT configurable | web_server.py | ~850 | Sesiones > 1000 | Bajo |
| #2: Validación setup | vpn_monitor.py | ~200 | Credenciales verificadas | Bajo |
| #3: Preservar first_seen | vpn_monitor.py | ~320 | Primera conexión correcta | Bajo |

**Tiempo total**: 15 minutos  
**Complejidad**: Baja  
**Reversible**: Sí (tienes backups)

---

## 🚨 SI ALGO SALE MAL

**Opción 1: Revertir cambios**
```powershell
# Restaurar desde backup
Copy-Item "vpn_monitor.py.backup" "vpn_monitor.py" -Force
Copy-Item "web_server.py.backup" "web_server.py" -Force
```

**Opción 2: Contactar soporte**
Si hay algún error, revisar:
1. La sintaxis de Python (`python -m py_compile`)
2. Los cambios se aplicaron exactamente como se mostró
3. Que no hay caracteres ocultos o encodings extraños

---

## ✨ BENEFICIOS DESPUÉS DE CORRECCIONES

```
✓ SESIONES PERÍODO mostrará números > 1000 (si existen)
✓ Setup validará credenciales MikroTik inmediatamente
✓ PRIMERA CONEXIÓN del día siempre será exacta
✓ Sistema es más confiable para migrar a fs02
✓ RRHH tendrá datos correctos desde día 1 en nuevo servidor
```

---

**Estado**: Listo para aplicar correcciones  
**Fecha**: 12 de Mayo 2026  
**Documentos**: Dentro de 5-10 minutos estarás listo para migrar

