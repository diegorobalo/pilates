# COMANDOS EXACTOS PARA MIGRACIÓN
## VPN Monitor: 10.90.0.105 → 10.90.0.47

---

## FASE 1: EN EL NUEVO SERVIDOR (fs02 / 10.90.0.47)

### 1.1 - Verificar Python
```powershell
python --version
```

**Esperado**: `Python 3.x.x`  
**Si falla**: Instalar desde https://python.org (marcar "Add to PATH")

---

### 1.2 - Crear directorio del proyecto
```powershell
mkdir "C:\VPN-Monitor"
cd "C:\VPN-Monitor"
```

---

### 1.3 - Instalar dependencias Python
```powershell
pip install librouteros cryptography requests flask
```

**Esperado**:
```
Successfully installed librouteros-1.x.x cryptography-x.x.x requests-x.x.x flask-x.x.x
```

Si hay error, repetir comando o agregar `--upgrade`:
```powershell
pip install --upgrade librouteros cryptography requests flask
```

---

## FASE 2: COPIAR ARCHIVOS (DESDE SERVIDOR ANTERIOR → fs02)

### 2.1 - Archivos de aplicación
Desde: `C:\Users\diego.robalo\Documents\CLAUDIA\Monitor VPN\VPN MONITOR\`  
Hacia: `C:\VPN-Monitor\` (en fs02)

**Copiar estos archivos:**
```
vpn_monitor.py
web_server.py
dashboard.html
instalar_y_ejecutar.bat
logo_argensun.png
MANUAL_RRHH.md
RESUMEN_EJECUTIVO.md
CASOS_PRACTICOS_RRHH.md
```

**NO copiar:**
```
__pycache__/          (se regenera)
.credentials.enc      (regenerar en nuevo servidor)
.secret.key           (regenerar en nuevo servidor)
config.json           (se crea automático)
*.log                 (logs antiguos, innecesarios)
vpn_monitor_NEW.py    (versión alternativa)
web_server_NEW.py     (versión alternativa)
```

---

### 2.2 - Bases de datos (CRÍTICO - DATOS HISTÓRICOS)
Desde: `C:\Users\diego.robalo\Documents\CLAUDIA\Monitor VPN\VPN MONITOR\`  
Hacia: `C:\VPN-Monitor\` (en fs02)

**DEBE copiar estos archivos:**
```
vpn_sessions.db       ← Historial de conexiones VPN
users.db              ← Usuarios del dashboard
```

**Verificar copia:**
```powershell
# En fs02:
ls "C:\VPN-Monitor\*.db"

# Esperado ver:
# vpn_sessions.db
# users.db
```

---

## FASE 3: REGENERAR CREDENCIALES (EN NUEVO SERVIDOR)

### 3.1 - Ejecutar setup de credenciales
```powershell
# En fs02, en C:\VPN-Monitor:
cd "C:\VPN-Monitor"
python vpn_monitor.py --setup
```

**El sistema pedirá:**

```
==================================================
VPN Monitor Setup
==================================================

Enter MikroTik Host [10.90.0.251]: 
↓ Presionar Enter (usar valor por defecto)

Enter MikroTik User [api_monitor]: 
↓ Presionar Enter (usar valor por defecto)

Enter MikroTik Password: 
↓ Ingresar: [TU_CONTRASEÑA_AQUI]
```

**Esperado después:**
```
[OK] Credentials saved to .credentials.enc
[OK] Encryption key saved to .secret.key
[OK] MikroTik API initialized
```

**Si hay error "Connection failed":**
```
Posibles causas:
1. MikroTik Host no alcanzable
   → Verificar: ping 10.90.0.251
   
2. Credenciales incorrectas
   → Verificar usuario/contraseña en MikroTik
   
3. IP no autorizada en MikroTik
   → Verificar que 10.90.0.47 está en Allowed Addresses
```

---

### 3.2 - Prueba de conectividad
```powershell
# En fs02:
python vpn_monitor.py --test
```

**Esperado:**
```
[OK] Connection successful!
[OK] Testing API endpoints...
[OK] Found X active PPP connections
[OK] All tests passed!
```

**Si falla:**
```
[ERROR] Connection failed...
```

Soluciones:
```powershell
# Verificar que MikroTik está alcanzable:
ping 10.90.0.251

# Verificar puerto 8728:
# (Si ping funciona, puerto probablemente está abierto)

# Ver logs de error:
type vpn_monitor.log
```

---

## FASE 4: INICIAR MONITOREO EN NUEVO SERVIDOR

### 4.1 - Opción A: Ejecutar directamente (testing)
```powershell
# En fs02:
python vpn_monitor.py
```

**Esperado:**
```
2026-05-12 14:30:00 [INFO] VPN Monitor Started
2026-05-12 14:30:00 [INFO] Connected to MikroTik 10.90.0.251:8728
2026-05-12 14:30:00 [INFO] Dashboard available at http://localhost:5555
2026-05-12 14:30:01 [INFO] Monitoring 5 active connections...
2026-05-12 14:30:02 [INFO] Poll complete (3 changes detected)
```

Presionar **Ctrl+C** para detener (testing).

---

### 4.2 - Opción B: Ejecutar con batch file (producción)
```powershell
# En fs02:
.\instalar_y_ejecutar.bat
```

Esto:
1. Verifica Python
2. Instala dependencias (si no están)
3. Inicia vpn_monitor.py
4. Muestra: `Dashboard: http://localhost:5555`

---

## FASE 5: VALIDAR DASHBOARD WEB

### 5.1 - Acceder al dashboard
Abrir navegador y acceder a:
```
http://fs02:5555/
o
http://10.90.0.47:5555/
o
http://localhost:5555/  (si accedes desde fs02)
```

**Esperado:** Interfaz web carga

---

### 5.2 - Login al dashboard
```
Usuario: admin
Contraseña: admin
```

**Esperado:** Acceso exitoso

---

### 5.3 - Verificar datos históricos
Ir a pestaña **"Historial"**:
```
Debería ver conexiones antiguas (de antes de migración)
Si ve datos → vpn_sessions.db fue copiada correctamente ✓
```

Ir a pestaña **"RRHH / Gestión"**:
```
Debería cargar y mostrar datos históricos
Si carga sin error → users.db fue copiada correctamente ✓
```

---

## FASE 6: DESACTIVAR SERVIDOR ANTERIOR

### 6.1 - Detener VPN Monitor en 10.90.0.105
```powershell
# En servidor antiguo (10.90.0.105):
# Presionar Ctrl+C en la ventana de Python
```

O cerrar la ventana de PowerShell/CMD.

---

### 6.2 - Actualizar MikroTik (opcional)
Si quieres limpiar el acceso antiguo en MikroTik:

En MikroTik Console:
```
/system/users/edit api_monitor
Allowed Address: 10.90.0.47
(remover 10.90.0.105)
```

---

## VERIFICACIÓN FINAL

### Checklist de datos:
```powershell
# En fs02, verificar archivos:
ls "C:\VPN-Monitor\"

# Esperado ver:
# - vpn_monitor.py
# - web_server.py
# - dashboard.html
# - vpn_sessions.db          ← Base de datos (IMPORTANTE)
# - users.db                 ← Base de datos (IMPORTANTE)
# - .credentials.enc         ← Credenciales regeneradas
# - .secret.key              ← Clave regenerada
# - vpn_monitor.log          ← Logs de ejecución
```

---

### Verificar bases de datos con SQLite:
```powershell
# Instalar sqlite3 (si no está):
pip install sqlite3

# O usar comando directo de Windows:
# (La mayoría de sistemas Windows tienen sqlite3.exe disponible)

# Verificar vpn_sessions.db:
sqlite3 "C:\VPN-Monitor\vpn_sessions.db" "SELECT COUNT(*) as total_records FROM sessions;"

# Esperado: número > 0

# Verificar users.db:
sqlite3 "C:\VPN-Monitor\users.db" "SELECT username, role FROM users;"

# Esperado: ver usuarios (admin, etc)
```

---

## TROUBLESHOOTING

### Problema: "Python no reconocido"
```powershell
# Solución 1: Instalar Python (descargar desde python.org)
# Solución 2: Usar ruta completa a Python
C:\Python39\python.exe vpn_monitor.py --test
```

---

### Problema: "librouteros not found"
```powershell
# Solución: Reinstalar dependencias
pip install --upgrade librouteros cryptography requests flask
```

---

### Problema: "Connection failed to MikroTik"
```powershell
# Paso 1: Verificar MikroTik alcanzable
ping 10.90.0.251

# Paso 2: Verificar puerto (telnet no necesario, pero puedes intentar)
telnet 10.90.0.251 8728

# Paso 3: Verificar credenciales en MikroTik
# (Abrir MikroTik, System > Users, verificar api_monitor)

# Paso 4: Verificar IP autorizada
# (Abrir MikroTik, System > Users > api_monitor, verificar Allowed Addresses)
# Debe incluir: 10.90.0.47
```

---

### Problema: "Dashboard no carga"
```powershell
# Paso 1: Verificar que vpn_monitor.py sigue ejecutándose
# (Debería ver logs con [INFO] messages)

# Paso 2: Verificar puerto 5555 está disponible
# (Otro programa podría estar usando puerto 5555)

# Paso 3: Intentar acceder desde localhost
http://localhost:5555

# Paso 4: Ver logs
type "C:\VPN-Monitor\vpn_monitor.log"
```

---

### Problema: "Datos históricos no aparecen"
```powershell
# Verificar que vpn_sessions.db fue copiada:
ls "C:\VPN-Monitor\vpn_sessions.db"

# Si no existe:
# → Volver a copiar desde servidor anterior

# Si existe pero no hay datos:
# → Verificar tamaño del archivo (debe ser > 100 KB típicamente)
# → Verificar que fue copiada completa (no corrupta)
```

---

## COMANDOS ÚTILES DESPUÉS DE MIGRACIÓN

### Ver logs en tiempo real:
```powershell
# En fs02:
Get-Content "C:\VPN-Monitor\vpn_monitor.log" -Wait

# Presionar Ctrl+C para salir
```

---

### Crear respaldo diario:
```powershell
# Crear script de backup automático:
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
Copy-Item "C:\VPN-Monitor\vpn_sessions.db" "C:\Backups\vpn_sessions_$timestamp.db"
Copy-Item "C:\VPN-Monitor\users.db" "C:\Backups\users_$timestamp.db"
```

---

### Detener/Reiniciar servicio:
```powershell
# Encontrar proceso Python:
Get-Process python | Where-Object {$_.MainWindowTitle -like "*VPN Monitor*"}

# Detener:
Stop-Process -Name python

# Reiniciar:
python vpn_monitor.py
```

---

## RESUMEN RÁPIDO

Si todo está en orden y quieres hacerlo rápido:

```powershell
# 1. En fs02, crear directorio:
mkdir "C:\VPN-Monitor"
cd "C:\VPN-Monitor"

# 2. Instalar Python y dependencias:
pip install librouteros cryptography requests flask

# 3. Copiar archivos desde servidor anterior:
# (Usar Windows Explorer o comandos copy)

# 4. Regenerar credenciales:
python vpn_monitor.py --setup
# (Ingresar contraseña MikroTik)

# 5. Probar:
python vpn_monitor.py --test

# 6. Ejecutar:
python vpn_monitor.py
# (Abrir http://localhost:5555 en navegador)
```

---

**Última actualización**: 12 de Mayo 2026  
**Versión**: 2.1.0  
**Estado**: ✓ LISTO

