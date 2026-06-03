# PLAN DE MIGRACIÓN - VPN Monitor
## De 10.90.0.105 → 10.90.0.47 (fs02)

**Fecha Preparación**: 12 de Mayo 2026  
**Versión Sistema**: 2.1.0  
**Estado**: Listo para Implementación

---

## 📋 RESUMEN EJECUTIVO

Se migrará el sistema VPN Monitor desde el servidor actual (10.90.0.105) al servidor fs02 (10.90.0.47). 
La migración preservará todos los datos históricos (bases de datos) mientras se regeneran las credenciales 
de seguridad en el nuevo servidor.

**Duración Estimada**: 2-3 horas  
**Tiempo de Downtime**: ~30 minutos  
**Riesgo**: Bajo (datos respaldados, fácil rollback)

---

## 🔍 ANÁLISIS DEL SISTEMA ACTUAL

### Estructura de Archivos
```
vpn_monitor.py              (41 KB) - Script principal de monitoreo
web_server.py               (31 KB) - Servidor Flask del dashboard
vpn_monitor_NEW.py          (41 KB) - Versión alternativa (revisar)
web_server_NEW.py           (31 KB) - Versión alternativa (revisar)
dashboard.html              (69 KB) - Interfaz web del dashboard
instalar_y_ejecutar.bat     (2 KB)  - Script de instalación/ejecución
__pycache__/                        - Caché de Python (NO copiar)
```

### Dependencias Python
```
librouteros    - Conexión a MikroTik API
cryptography   - Encriptación de credenciales
requests       - HTTP requests
flask          - Web framework
```

### Bases de Datos (CRÍTICAS - DEBEN COPIARSE)
```
vpn_sessions.db    - Historial de conexiones VPN (datos históricos)
users.db           - Usuarios del dashboard (contraseñas hash)
```

### Archivos de Seguridad (NO COPIAR - REGENERAR)
```
.credentials.enc   - Credenciales MikroTik encriptadas (NO COPIAR)
.secret.key        - Clave de encriptación (NO COPIAR)
config.json        - Configuración (Regenerar/actualizar)
```

### MikroTik API
```
Host:     10.90.0.251 (o 10.90.0.105 actual)
Puerto:   8728
Usuario:  api_monitor
Grupo:    read
IP Permitidas: 10.90.0.47, 10.90.0.105 ✓ (YA CONFIGURADO)
```

---

## 📐 ARQUITECTURA DE MIGRACIÓN

```
┌─────────────────────┐         ┌─────────────────────┐
│   SERVIDOR ACTUAL   │         │  NUEVO SERVIDOR fs02│
│   10.90.0.105       │         │  10.90.0.47         │
│                     │         │                     │
│  ✓ vpn_monitor.py   │────────▶│  ✓ vpn_monitor.py   │
│  ✓ web_server.py    │────────▶│  ✓ web_server.py    │
│  ✓ dashboard.html   │────────▶│  ✓ dashboard.html   │
│                     │         │                     │
│  ✓ vpn_sessions.db  │◄──────►│  ✓ vpn_sessions.db  │
│  ✓ users.db         │◄──────►│  ✓ users.db         │
│                     │         │                     │
│  ✗ .credentials.enc │   ✗     │  ⚙️ REGENERAR       │
│  ✗ .secret.key      │   ✗     │  ⚙️ REGENERAR       │
│  ~ config.json      │────────▶│  ~ config.json      │
│    (con IP 105)     │  COPIAR  │  (actualizar a 47)  │
│                     │         │                     │
│       Running       │         │    STANDBY          │
└─────────────────────┘         └─────────────────────┘

      MikroTik API (10.90.0.251)
         Puerto 8728
      usuario: api_monitor
      ✓ Autorizado para ambas IPs
```

---

## ✅ PRE-MIGRACIÓN: CHECKLIST

### En el servidor actual (10.90.0.105):
- [ ] **Backup actual**: Copiar `vpn_sessions.db` y `users.db` a ubicación segura
- [ ] **Documentar credenciales**: Anotar usuario/contraseña MikroTik (para referencia si es necesario regenerar)
- [ ] **Verificar conectividad MikroTik**: Ejecutar `python vpn_monitor.py --test`
- [ ] **Estado de datos**: Verificar que las bases de datos están completas
- [ ] **Plan de rollback**: Si falla, volver a ejecutar desde 10.90.0.105

### En el nuevo servidor (10.90.0.47 / fs02):
- [ ] **Acceso remoto confirmado**: Poder conectarse a fs02
- [ ] **Espacio en disco**: Mínimo 500 MB libres
- [ ] **Python disponible**: Versión 3.7+ instalada o lista para instalar
- [ ] **MikroTik acceso**: Verificar que puede alcanzar 10.90.0.251:8728 (ping, telnet)

---

## 🚀 FASES DE MIGRACIÓN

### FASE 1: PREPARACIÓN DEL NUEVO SERVIDOR (fs02)
**Tiempo estimado**: 45 minutos  
**Acciones**: Instalar Python, dependencias

#### Paso 1.1: Verificar Python
```powershell
# En fs02, abrir PowerShell y ejecutar:
python --version
# Esperado: Python 3.7+
```

Si Python no está instalado:
```powershell
# Descargar installer desde https://python.org
# Ejecutar installer con opción "Add Python to PATH"
```

#### Paso 1.2: Crear directorio del proyecto
```powershell
# En fs02:
mkdir "C:\VPN-Monitor"
cd "C:\VPN-Monitor"
```

#### Paso 1.3: Instalar dependencias Python
```powershell
# En fs02, ejecutar:
pip install librouteros cryptography requests flask

# Esperado: Successfully installed ...
```

---

### FASE 2: COPIAR ARCHIVOS DESDE SERVIDOR ANTERIOR
**Tiempo estimado**: 10 minutos  
**Acciones**: Copiar archivos de aplicación y datos

#### Paso 2.1: Copiar archivos de aplicación
Copiar DESDE `C:\Users\diego.robalo\Documents\CLAUDIA\Monitor VPN\VPN MONITOR` 
HACIA `C:\VPN-Monitor` en fs02:

**Archivos a copiar:**
```
✓ vpn_monitor.py
✓ web_server.py
✓ dashboard.html
✓ instalar_y_ejecutar.bat
✓ logo_argensun.png
✓ Documentación (*.md, *.txt)
```

**Archivos a IGNORAR:**
```
✗ __pycache__/           (caché, se regenera)
✗ .credentials.enc       (regenerar en nuevo servidor)
✗ .secret.key           (regenerar en nuevo servidor)
```

#### Paso 2.2: Copiar bases de datos (CRÍTICO)
Copiar DESDE servidor antiguo HACIA fs02:

```
✓ vpn_sessions.db       → C:\VPN-Monitor\vpn_sessions.db
✓ users.db              → C:\VPN-Monitor\users.db
```

**IMPORTANTE**: Sin estas bases de datos, se pierden todos los datos históricos.

#### Paso 2.3: Copiar y actualizar config.json (si existe)
Si hay `config.json` en servidor antiguo:
```json
{
    "mikrotik_host": "10.90.0.251",  // Mantener igual
    "mikrotik_port": 8728,            // Mantener igual
    "mikrotik_user": "api_monitor",   // Mantener igual
    "poll_interval_seconds": 60,      // Mantener igual
    "dashboard_port": 5555,           // Puede cambiar si necesario
    "dashboard_bind": "0.0.0.0",      // Mantener
    "service_filter": "ovpn",         // Mantener
    "log_level": "INFO"               // Mantener
}
```

Si no existe, se creará automáticamente al ejecutar.

---

### FASE 3: REGENERAR CREDENCIALES EN NUEVO SERVIDOR
**Tiempo estimado**: 15 minutos  
**Acciones**: Setup de credenciales MikroTik

#### Paso 3.1: Ejecutar setup en fs02
```powershell
# En fs02, en C:\VPN-Monitor, ejecutar:
python vpn_monitor.py --setup

# Se pedirá:
#   1. MikroTik Host: 10.90.0.251
#   2. MikroTik User: api_monitor
#   3. MikroTik Password: [Tu contraseña]
```

Esto generará:
```
✓ .credentials.enc   (nuevo archivo encriptado)
✓ .secret.key        (nueva clave de encriptación)
```

#### Paso 3.2: Prueba de conectividad
```powershell
# En fs02:
python vpn_monitor.py --test

# Esperado:
#   [OK] Connection successful!
#   [OK] Found X active PPP connections
```

Si falla:
- Verificar IP MikroTik es alcanzable: `ping 10.90.0.251`
- Verificar puerto 8728 es accesible: `telnet 10.90.0.251 8728`
- Verificar credenciales de api_monitor en MikroTik

---

### FASE 4: VALIDACIÓN EN NUEVO SERVIDOR
**Tiempo estimado**: 15 minutos  
**Acciones**: Pruebas funcionales

#### Paso 4.1: Iniciar VPN Monitor en fs02
```powershell
# En fs02, ejecutar:
instalar_y_ejecutar.bat

# O directamente:
python vpn_monitor.py

# Esperado:
#   [OK] Conectado a MikroTik 10.90.0.251:8728
#   [OK] Dashboard disponible en http://localhost:5555
```

#### Paso 4.2: Verificar dashboard web
```
Abrir navegador:  http://fs02:5555/
o               http://10.90.0.47:5555/
o              http://localhost:5555/  (si accedes desde fs02)

Esperado:
  ✓ Interfaz web carga
  ✓ Puedo hacer login (usuario: admin, contraseña: admin)
  ✓ Veo datos históricos (gracias a vpn_sessions.db copiada)
  ✓ Veo usuarios del dashboard (gracias a users.db copiada)
```

#### Paso 4.3: Verificar datos históricos
En la pestaña "Conectados" o "Historial":
- [ ] Se muestran conexiones antiguas (de antes de la migración)
- [ ] Los datos de vpn_sessions.db fueron importados correctamente
- [ ] Los usuarios del sistema están presentes

---

### FASE 5: DESACTIVACIÓN DEL SERVIDOR ANTERIOR
**Tiempo estimado**: 5 minutos  
**Acciones**: Parar monitoreo antiguo, actualizar documentación

#### Paso 5.1: Detener VPN Monitor en 10.90.0.105
```powershell
# En servidor anterior:
# Presionar Ctrl+C en la ventana de VPN Monitor
# O cerrar PowerShell/CMD
```

#### Paso 5.2: Actualizar acceso a MikroTik (OPCIONAL)
Si quieres remover la IP antigua de MikroTik:
```
En MikroTik, usuario api_monitor:
Allowed Addresses: 10.90.0.47  (remover 10.90.0.105)
```

#### Paso 5.3: Documentación
```
Crear archivo en C:\VPN-Monitor\MIGRACION_COMPLETADA.txt:

MIGRACIÓN COMPLETADA
Fecha: [fecha actual]
De: 10.90.0.105
A: 10.90.0.47 (fs02)

Servidor antiguo: DESACTIVADO
Servidor nuevo: ACTIVO ✓

Dashboard: http://10.90.0.47:5555
Datos históricos: PRESERVADOS ✓
Credenciales: REGENERADAS ✓

Próximos pasos:
- Actualizar bookmarks/accesos a http://10.90.0.47:5555
- Comunicar cambio a equipo RRHH
- Monitoreo continuo en nuevamente servidor
```

---

## 🔄 ROLLBACK (Si algo falla)

Si la migración falla y necesitas volver a 10.90.0.105:

#### Opción 1: Recuperación rápida (datos preservados)
```powershell
# En 10.90.0.105:
# 1. Copiar vpn_sessions.db y users.db desde respaldo
# 2. Ejecutar: python vpn_monitor.py
# 3. Sistema vuelve a funcionar con todos los datos
```

#### Opción 2: Mantener ambos servidores (testing)
```
10.90.0.105 - Continúa ejecutándose (producción vieja)
10.90.0.47  - Nuevo servidor (testing)

Cambiar en MikroTik Allowed Addresses para controlar quién se ejecuta
```

---

## 📊 VALIDACIÓN POST-MIGRACIÓN

### Checklist funcional:
- [ ] Dashboard accesible desde http://10.90.0.47:5555
- [ ] Login funciona (admin / admin)
- [ ] Pestaña "Conectados" muestra usuarios actuales
- [ ] Pestaña "Historial" muestra datos antiguos
- [ ] Pestaña "Auditoría" funciona
- [ ] Pestaña "RRHH/Gestión" muestra datos históricos
- [ ] Gráficos se renderizan correctamente
- [ ] Puede exportar a PDF
- [ ] API responde (GET http://10.90.0.47:5555/api/active)

### Checklist técnico:
- [ ] vpn_sessions.db tiene datos históricos (verificar con sqlite3)
- [ ] users.db tiene usuarios (login funciona)
- [ ] .credentials.enc existe y tiene credenciales MikroTik
- [ ] .secret.key existe y es diferente a servidor anterior
- [ ] MikroTik API conecta exitosamente
- [ ] Logs muestran conexiones exitosas

### Checklist de datos:
- [ ] Comparar cantidad de registros antes/después
- [ ] Verificar que no se perdieron datos
- [ ] Confirmar últimas conexiones registradas
- [ ] Validar gráficos y reportes generan datos correctos

---

## 🎯 PRÓXIMOS PASOS

### Inmediatamente después de migración:
1. Comunicar a equipo RRHH sobre cambio de URL
2. Actualizar bookmarks/accesos
3. Monitorear logs en fs02 por 24 horas

### Mejoras futuras (después de migración):
1. Integración con base de datos de fichadas de personas
2. Optimización de queries de base de datos
3. Backup automático de vpn_sessions.db
4. Alertas automáticas de ausencias

---

## 📞 CONTACTO / SOPORTE

**Si algo falla:**
1. Revisar logs: `vpn_monitor.log` en C:\VPN-Monitor\
2. Verificar conectividad MikroTik: `ping 10.90.0.251`
3. Revisar errores en consola Python
4. Opción de rollback disponible (volver a 10.90.0.105)

---

**Documento Preparado**: 12 de Mayo 2026  
**Sistema**: VPN Monitor v2.1.0  
**Estado**: ✓ LISTO PARA MIGRACIÓN

