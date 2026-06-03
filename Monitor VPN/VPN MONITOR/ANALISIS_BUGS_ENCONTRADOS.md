# 🐛 ANÁLISIS DE BUGS Y PROBLEMAS ENCONTRADOS
## VPN Monitor v2.1.0 - PRE-MIGRACIÓN

**Fecha de análisis**: 12 de Mayo 2026  
**Versión analizada**: 2.1.0  
**Total de bugs encontrados**: 5 críticos + 3 menores

---

## 🔴 BUG #1: SESIONES PERÍODO LIMITADO A 1000 (CRÍTICO)

### Problema
El número "SESIONES PERÍODO" muestra máximo 1000, sin importar cuántas sesiones reales haya en el período.

**Lo que ves**: `SESIONES PERÍODO: 1000`  
**Lo que debería ver**: Cantidad REAL de sesiones (podría ser 1500, 2000, etc.)

### Causa
En `web_server.py`, endpoint `/api/history`:
```python
q += " ORDER BY connected_at DESC LIMIT 1000"
```

Este LIMIT hardcodeado restringe a solo 1000 registros máximo, sin importar si hay más.

### Ubicación exacta
```
Archivo: web_server.py
Función: api_history()
Línea: ~850 (aproximadamente)
```

### Impacto
- **Alto**: RRHH piensa que solo hay 1000 sesiones cuando podrían haber más
- Los reportes de "SESIONES PERÍODO" son incorrectos
- Análisis de productividad incompletos
- Decisiones basadas en datos falsos

### Solución
**Opción A: Aumentar límite**
```python
# Cambiar:
q += " ORDER BY connected_at DESC LIMIT 1000"

# Por:
q += " ORDER BY connected_at DESC LIMIT 10000"
```

**Opción B: Hacer parámetro configurable** (MEJOR)
```python
@app.route("/api/history")
@login_required
def api_history():
    # ... código existente ...
    limit = int(request.args.get("limit", 1000))
    q += f" ORDER BY connected_at DESC LIMIT {limit}"
```

Luego en dashboard.html:
```javascript
const data = await api('/api/history?limit=10000', {days: DAYS()});
```

### Severidad
🔴 **CRÍTICO** - Afecta integridad de datos

### Recomendación
Aplicar antes de migración a fs02

---

## 🟡 BUG #2: CONSULTA DE "USUARIOS HOY" PODRÍA SER INEXACTA

### Problema
El contador "USUARIOS HOY" podría no ser exacto si hay sesiones que cruzaron medianoche.

### Causa
En `web_server.py`, endpoint `/api/stats`:
```python
c.execute("""SELECT COUNT(DISTINCT username) as n FROM vpn_sessions
    WHERE DATE(connected_at) = DATE('now','localtime')""")
```

Si un usuario se conectó el día anterior pero sigue conectado pasadas las 00:00, 
esta query solo lo cuenta si su `connected_at` es de hoy.

### Ubicación exacta
```
Archivo: web_server.py
Función: api_stats()
Línea: ~950 (aproximadamente)
```

### Impacto
- **Medio**: Datos de "Usuarios HOY" podrían estar 1-2 personas por debajo de lo real
- No es crítico pero afecta la precisión del monitoreo diario

### Solución
```python
# Cambiar:
c.execute("""SELECT COUNT(DISTINCT username) as n FROM vpn_sessions
    WHERE DATE(connected_at) = DATE('now','localtime')""")

# Por:
c.execute("""SELECT COUNT(DISTINCT username) as n FROM vpn_sessions
    WHERE DATE(connected_at) = DATE('now','localtime') 
    OR (DATE(connected_at) = DATE('now','localtime','-1 day') 
        AND disconnected_at IS NULL)""")
```

### Severidad
🟡 **MEDIO** - Afecta exactitud de un número

---

## 🟡 BUG #3: CÁLCULO DE TRÁFICO "HOY" SOLO DESDE daily_uptime

### Problema
El "TRÁFICO HOY" se calcula solo desde la tabla `daily_uptime`, que se actualiza cada día.
Si hay un bug en la actualización de `daily_uptime`, el tráfico mostrado será incorrecto.

### Causa
En `web_server.py`, endpoint `/api/stats`:
```python
today = datetime.now().strftime("%Y-%m-%d")
c.execute("SELECT SUM(bytes_in+bytes_out) as b FROM daily_uptime WHERE date=?", (today,))
```

Si `daily_uptime` no se actualiza correctamente desde `vpn_sessions`, 
el tráfico será cero o incorrecto.

### Ubicación exacta
```
Archivo: web_server.py
Función: api_stats()
Línea: ~960 (aproximadamente)
```

### Impacto
- **Medio**: El número de "Tráfico HOY" podría ser incorrecto
- Afecta decisiones sobre uso de ancho de banda

### Solución
```python
# Cambiar:
c.execute("SELECT SUM(bytes_in+bytes_out) as b FROM daily_uptime WHERE date=?", (today,))

# Por (fallback si daily_uptime tiene problema):
c.execute("""SELECT SUM(bytes_in+bytes_out) as b FROM vpn_sessions 
    WHERE DATE(connected_at) = ?""", (today,))
```

### Severidad
🟡 **MEDIO** - Datos de tráfico podrían ser incorrectos

---

## 🟡 BUG #4: FALTA VALIDACIÓN DE CREDENCIALES EN SETUP

### Problema
Cuando ejecutas `python vpn_monitor.py --setup`, si ingresas mal las credenciales MikroTik,
el script regenera `.credentials.enc` pero NUNCA verifica que funcione.

### Causa
En `vpn_monitor.py`, función `setup()`:
```python
def setup():
    host = input("Enter MikroTik Host [10.90.0.251]: ")
    user = input("Enter MikroTik User [api_monitor]: ")
    password = getpass.getpass("Enter MikroTik Password: ")
    
    save_credentials(user, password)  # ← Guarda sin verificar
    # ... pero NO verifica que la conexión funciona
```

### Ubicación exacta
```
Archivo: vpn_monitor.py
Función: setup()
Línea: ~200 (aproximadamente)
```

### Impacto
- **Medio**: Puedes hacer setup con credenciales incorrectas sin saberlo
- Recién lo descubrirás cuando intentes `--test`
- Pérdida de tiempo en troubleshooting

### Solución
```python
def setup():
    host = input("Enter MikroTik Host [10.90.0.251]: ") or "10.90.0.251"
    user = input("Enter MikroTik User [api_monitor]: ") or "api_monitor"
    password = getpass.getpass("Enter MikroTik Password: ")
    
    # GUARDAR credenciales
    save_credentials(user, password)
    
    # VERIFICAR QUE FUNCIONAN
    try:
        logger.info("Testing MikroTik connection...")
        test_connection()  # Llamar función de prueba
        logger.info("[OK] Connection successful!")
    except Exception as e:
        logger.error(f"[ERROR] Connection failed: {e}")
        logger.warning("Credentials saved anyway, but test FAILED")
        return False
    
    return True
```

### Severidad
🟡 **MEDIO** - Afecta experiencia de setup

---

## 🟠 BUG #5: NO HAY LÍMITE DE FRECUENCIA EN /api/active

### Problema
El endpoint `/api/active` (conexiones actuales) se puede llamar sin límite.
Si el dashboard hace muchas llamadas rápidas, podría sobrecargar la BD.

### Causa
```python
@app.route("/api/active")
@login_required
def api_active():
    db = get_db()
    c = db.cursor()
    c.execute("""SELECT username, service, caller_id, ...
        FROM vpn_sessions WHERE is_active = 1 ORDER BY username""")
```

No hay rate limiting en este endpoint.

### Ubicación exacta
```
Archivo: web_server.py
Función: api_active()
Línea: ~800 (aproximadamente)
```

### Impacto
- **Bajo**: En producción normal no hay problema
- **Crítico si**: Alguien intenta DOS (denial of service) haciendo llamadas rápidas

### Solución (Implementar rate limiting)
```python
from functools import wraps
from time import time

def rate_limit(max_per_minute=60):
    def decorator(f):
        request_times = {}
        def wrapper(*args, **kwargs):
            ip = request.remote_addr
            now = time()
            if ip not in request_times:
                request_times[ip] = []
            # Limpiar requests antiguos (> 1 minuto)
            request_times[ip] = [t for t in request_times[ip] if now - t < 60]
            if len(request_times[ip]) >= max_per_minute:
                return jsonify({"error": "Rate limit exceeded"}), 429
            request_times[ip].append(now)
            return f(*args, **kwargs)
        return wrapper
    return decorator

@app.route("/api/active")
@login_required
@rate_limit(max_per_minute=120)  # Max 120 por minuto
def api_active():
    # ... código existente ...
```

### Severidad
🟠 **BAJO/MEDIO** - Problema de seguridad

---

## 📋 RESUMEN DE BUGS

| # | Nombre | Severidad | Impacto | Solución |
|---|--------|-----------|---------|----------|
| 1 | LIMIT 1000 en sesiones | 🔴 CRÍTICO | Datos incorrectos | Aumentar LIMIT o hacerlo configurable |
| 2 | Usuarios HOY inexacto | 🟡 MEDIO | Conteo incorrecto | Mejorar query de usuarios conectados |
| 3 | Tráfico HOY solo desde daily_uptime | 🟡 MEDIO | Datos de tráfico incorrectos | Fallback a vpn_sessions si es necesario |
| 4 | No verifica credenciales en setup | 🟡 MEDIO | Setup sin validación | Agregar test de conexión en setup |
| 5 | Sin rate limiting en API | 🟠 BAJO | Posible DOS | Implementar rate limiting |

---

## 🎯 RECOMENDACIONES

### Antes de migrar a fs02:
1. **MUST FIX**: Bug #1 (LIMIT 1000) - Es crítico
2. **SHOULD FIX**: Bug #4 (validación setup) - Mejora UX
3. **NICE TO FIX**: Bug #2 y #3 - Mejoran exactitud

### Después de migración:
- [ ] Implementar Bug #5 (rate limiting)
- [ ] Agregar tests unitarios
- [ ] Crear endpoint `/api/health` para monitoreo
- [ ] Documentar todos los endpoints API

---

## 🔧 ARCHIVOS A MODIFICAR

```
CRÍTICOS:
✓ web_server.py - Línea ~850 (LIMIT 1000)
✓ vpn_monitor.py - Función setup()

MENORES:
○ web_server.py - Línea ~960 (Tráfico HOY)
○ web_server.py - Función api_active() (rate limiting)
```

---

## ✅ SIGUIENTE PASO

¿Quieres que:
1. **Corrija los bugs ANTES de migrar** (recomendado)
2. **Migre el sistema como está** y corrija después
3. **Analice más a fondo** otros posibles problemas

---

**Análisis completado**: 12 de Mayo 2026, 14:45  
**Estado**: Listo para correcciones

