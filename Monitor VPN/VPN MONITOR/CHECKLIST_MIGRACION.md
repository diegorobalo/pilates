# ✅ CHECKLIST INTERACTIVA - MIGRACIÓN VPN MONITOR
## De 10.90.0.105 → 10.90.0.47

**Fecha de inicio**: ________________  
**Persona a cargo**: ________________  
**Hora estimada**: 2-3 horas

---

## PRE-MIGRACIÓN: VERIFICACIONES INICIALES

### En el servidor actual (10.90.0.105):
- [ ] **Backup de bases de datos**
  - [ ] Ubicación del backup: ________________________
  - [ ] vpn_sessions.db copiada: SI / NO
  - [ ] users.db copiada: SI / NO
  
- [ ] **Documentar credenciales**
  - [ ] MikroTik Host: 10.90.0.251
  - [ ] MikroTik User: api_monitor
  - [ ] Contraseña MikroTik: [GUARDADA EN LUGAR SEGURO]
  
- [ ] **Verificar conectividad MikroTik**
  ```
  Comando: python vpn_monitor.py --test
  Resultado: ✓ OK / ✗ FALLA
  ```
  
- [ ] **Estado actual del sistema**
  - [ ] Conexiones VPN activas: _______ (cantidad)
  - [ ] Usuarios en dashboard: _______ (cantidad)
  - [ ] Últimas entradas en base de datos: [FECHA/HORA]

- [ ] **Plan de rollback documentado**
  - [ ] Si falla, volvemos a 10.90.0.105: SI / NO
  - [ ] Tiempo máximo permitido offline: _______ minutos

---

## FASE 1: PREPARACIÓN NUEVO SERVIDOR (fs02)

**Responsable**: ________________  
**Fecha/Hora inicio**: ________________

### 1.1 - Acceso y validación inicial
- [ ] Puedo conectarme a fs02 (10.90.0.47): SI / NO
- [ ] Puedo abrir PowerShell en fs02: SI / NO
- [ ] Tengo permisos de administrador: SI / NO

### 1.2 - Verificar Python
```
Ejecutar: python --version
```
- [ ] Python está instalado: SI / NO
- [ ] Versión: ________________ (mínimo 3.7)
- [ ] Ubicación: ________________________

**Si Python no está:**
- [ ] Descargar desde https://python.org
- [ ] Ejecutar installer
- [ ] Marcar "Add Python to PATH"
- [ ] Reiniciar PowerShell
- [ ] Verificar nuevamente: python --version

### 1.3 - Crear directorio del proyecto
```
Ejecutar: mkdir "C:\VPN-Monitor"
          cd "C:\VPN-Monitor"
```
- [ ] Directorio creado: SI / NO
- [ ] Ubicación: C:\VPN-Monitor
- [ ] Permiso de escritura: SI / NO

### 1.4 - Instalar dependencias
```
Ejecutar: pip install librouteros cryptography requests flask
```
- [ ] librouteros instalada: SI / NO
- [ ] cryptography instalada: SI / NO
- [ ] requests instalada: SI / NO
- [ ] flask instalada: SI / NO

**Nota**: Si alguno falla, ejecutar:
```
pip install --upgrade [nombre_paquete]
```

**Resultado de instalación**:
```
[COPIAR AQUÍ EL OUTPUT]



```

---

## FASE 2: COPIAR ARCHIVOS

**Responsable**: ________________  
**Fecha/Hora inicio**: ________________

### 2.1 - Copiar archivos de aplicación
**Desde**: C:\Users\diego.robalo\Documents\CLAUDIA\Monitor VPN\VPN MONITOR\  
**Hacia**: C:\VPN-Monitor\ (en fs02)

Archivos a copiar:
- [ ] vpn_monitor.py (41 KB)
- [ ] web_server.py (31 KB)
- [ ] dashboard.html (69 KB)
- [ ] instalar_y_ejecutar.bat (2 KB)
- [ ] logo_argensun.png
- [ ] MANUAL_RRHH.md
- [ ] RESUMEN_EJECUTIVO.md
- [ ] CASOS_PRACTICOS_RRHH.md

Método de copia: ________________________
(ej: Explorer, robocopy, SCP, etc)

Verificación (en fs02):
```
Ejecutar: ls "C:\VPN-Monitor\"
```
- [ ] Todos los archivos presentes: SI / NO
- [ ] Tamaño total: ________________________
- [ ] Hora de copia: ________________

### 2.2 - Copiar bases de datos (CRÍTICO)
**Desde**: C:\Users\diego.robalo\Documents\CLAUDIA\Monitor VPN\VPN MONITOR\  
**Hacia**: C:\VPN-Monitor\ (en fs02)

- [ ] vpn_sessions.db copiada
  - [ ] Tamaño: ________________________
  - [ ] Hora copia: ________________
  - [ ] Integridad verificada: SI / NO

- [ ] users.db copiada
  - [ ] Tamaño: ________________________
  - [ ] Hora copia: ________________
  - [ ] Integridad verificada: SI / NO

Verificación en fs02:
```
Ejecutar: ls "C:\VPN-Monitor\*.db"
```
Resultado:
```
[COPIAR AQUÍ]



```

---

## FASE 3: REGENERAR CREDENCIALES

**Responsable**: ________________  
**Fecha/Hora inicio**: ________________

### 3.1 - Setup de credenciales
```
Ejecutar en fs02: python vpn_monitor.py --setup
```

Responder las preguntas:

1. **MikroTik Host**
   - Ingresar: 10.90.0.251 (o Enter para default)
   - [ ] Aceptado

2. **MikroTik User**
   - Ingresar: api_monitor (o Enter para default)
   - [ ] Aceptado

3. **MikroTik Password**
   - Ingresar: [TU_CONTRASEÑA]
   - [ ] Aceptado

**Resultado esperado**:
```
[OK] Credentials saved to .credentials.enc
[OK] Encryption key saved to .secret.key
[OK] MikroTik API initialized
```

- [ ] Setup completado exitosamente: SI / NO
- [ ] .credentials.enc creado: SI / NO
- [ ] .secret.key creado: SI / NO

**Si hay error**:
```
Error recibido: _________________________________

Causas posibles:
- [ ] MikroTik no alcanzable (ping 10.90.0.251)
- [ ] Credenciales incorrectas
- [ ] IP no autorizada en MikroTik
- [ ] Puerto 8728 bloqueado

Acción tomada: ________________________________
```

### 3.2 - Verificar conectividad MikroTik
```
Ejecutar en fs02: python vpn_monitor.py --test
```

Resultado esperado:
```
[OK] Connection successful!
[OK] Testing API endpoints...
[OK] Found X active PPP connections
[OK] All tests passed!
```

- [ ] Conectividad exitosa: SI / NO
- [ ] Conexiones encontradas: _______ (cantidad)
- [ ] Hora de prueba: ________________

**Si falla**:
```
Error: _________________________________

Solución aplicada: ________________________________
```

---

## FASE 4: VALIDACIÓN EN NUEVO SERVIDOR

**Responsable**: ________________  
**Fecha/Hora inicio**: ________________

### 4.1 - Iniciar VPN Monitor
```
Ejecutar en fs02: python vpn_monitor.py
```

Resultado esperado (en consola):
```
2026-05-12 14:30:00 [INFO] VPN Monitor Started
2026-05-12 14:30:00 [INFO] Connected to MikroTik 10.90.0.251:8728
2026-05-12 14:30:00 [INFO] Dashboard available at http://localhost:5555
```

- [ ] Aplicación iniciada: SI / NO
- [ ] MikroTik conectado: SI / NO
- [ ] Dashboard disponible: SI / NO
- [ ] Hora de inicio: ________________
- [ ] PID del proceso: ________________

### 4.2 - Acceder al dashboard web
```
Abrir navegador: http://10.90.0.47:5555
```

- [ ] Página carga: SI / NO
- [ ] Interfaz visible: SI / NO
- [ ] Tiempo de carga: ________________ segundos

### 4.3 - Login al dashboard
```
Usuario: admin
Contraseña: admin
```

- [ ] Login exitoso: SI / NO
- [ ] Dashboard accesible: SI / NO
- [ ] Hora de acceso: ________________

### 4.4 - Verificar datos históricos

**Pestaña "Conectados"**:
- [ ] Se muestran usuarios actuales: SI / NO
- [ ] Cantidad de usuarios: _______
- [ ] Hora de actualización: ________________

**Pestaña "Historial"**:
- [ ] Se muestran datos antiguos: SI / NO
- [ ] Cantidad de registros: _______
- [ ] Fecha más antigua: ________________
- [ ] Datos de vpn_sessions.db presente: SI / NO

**Pestaña "RRHH / Gestión"**:
- [ ] Carga sin error: SI / NO
- [ ] Usuarios presentes: _______
- [ ] Datos históricos visibles: SI / NO
- [ ] Datos de users.db presente: SI / NO

**Pestaña "Auditoría"**:
- [ ] Funciona búsqueda: SI / NO
- [ ] Busqueda de usuario: _______
- [ ] Resultado correcto: SI / NO

### 4.5 - Verificar gráficos y reportes
- [ ] Gráficos se renderizan: SI / NO
- [ ] Reportes generan sin error: SI / NO
- [ ] Exportación a PDF funciona: SI / NO
- [ ] API responde (/api/active): SI / NO

### 4.6 - Revisar logs
```
Ver: C:\VPN-Monitor\vpn_monitor.log
```

```
[COPIAR ÚLTIMAS 10 LÍNEAS AQUÍ]




```

- [ ] Logs limpios (sin errores): SI / NO
- [ ] Conexiones exitosas registradas: SI / NO
- [ ] Monitoreo activo: SI / NO

---

## FASE 5: DESACTIVACIÓN SERVIDOR ANTERIOR

**Responsable**: ________________  
**Fecha/Hora inicio**: ________________

### 5.1 - Verificación de transferencia
- [ ] Todos los datos migraron exitosamente: SI / NO
- [ ] Dashboard en fs02 funciona correctamente: SI / NO
- [ ] Datos históricos están presentes: SI / NO

### 5.2 - Detener VPN Monitor en 10.90.0.105
```
En servidor anterior: Presionar Ctrl+C en PowerShell
```

- [ ] Proceso detenido: SI / NO
- [ ] Hora de parada: ________________
- [ ] Confirmación visual de parada: SI / NO

### 5.3 - Actualizar MikroTik (Opcional)
```
En MikroTik:
System > Users > api_monitor
Allowed Addresses: cambiar a 10.90.0.47 (quitar 10.90.0.105)
```

- [ ] MikroTik actualizado: SI / NO
- [ ] IP antigua removida: SI / NO
- [ ] IP nueva autorizada: SI / NO

### 5.4 - Documentación de cierre
```
Crear archivo: C:\VPN-Monitor\MIGRACION_COMPLETADA.txt
```

Contenido:
```
MIGRACIÓN COMPLETADA
====================

Fecha: [FECHA ACTUAL]
Responsable: [TU NOMBRE]

De: 10.90.0.105
A: 10.90.0.47 (fs02)

Servidor antiguo: DESACTIVADO ✓
Servidor nuevo: ACTIVO ✓

Dashboard URL: http://10.90.0.47:5555

Tiempo total: [HORAS] horas [MINUTOS] minutos
Downtime: [MINUTOS] minutos
Problemas encontrados: [NINGUNO / LISTAR]

Próximos pasos:
- Comunicar a equipo RRHH sobre nueva URL
- Actualizar bookmarks/accesos
- Monitoreo continuo por 24 horas
```

- [ ] Archivo de cierre creado: SI / NO
- [ ] Información documentada: SI / NO

---

## VALIDACIÓN FINAL

**Responsable**: ________________  
**Fecha/Hora**: ________________

### Validación de Datos
- [ ] Bases de datos copiadas correctamente: SI / NO
- [ ] Cantidad de registros (antes vs después): IGUAL
- [ ] Último dato registrado: ________________
- [ ] Integridad verificada: SI / NO

### Validación de Funcionalidad
- [ ] Dashboard accesible: SI / NO
- [ ] Login funciona: SI / NO
- [ ] Todas las pestañas operacionales: SI / NO
- [ ] Gráficos generan correctamente: SI / NO
- [ ] Reportes exportan a PDF: SI / NO
- [ ] API responde correctamente: SI / NO

### Validación Técnica
- [ ] MikroTik conectado: SI / NO
- [ ] Credenciales regeneradas: SI / NO
- [ ] Logs sin errores: SI / NO
- [ ] Monitoreo activo: SI / NO
- [ ] Archivos en lugar correcto: SI / NO

### Validación de Seguridad
- [ ] .credentials.enc regenerado (no copiado): SI / NO
- [ ] .secret.key regenerado (no copiado): SI / NO
- [ ] Usuarios del dashboard presentes: SI / NO
- [ ] Login con credenciales funciona: SI / NO

---

## COMUNICACIÓN A EQUIPO

### Notificación a RRHH
- [ ] Email/mensaje enviado sobre cambio
- [ ] Nueva URL comunicada: http://10.90.0.47:5555
- [ ] Hora de transición comunicada: ________________
- [ ] Confirmación de recepción: SI / NO

### Actualización de Bookmarks
- [ ] Actualizado en browsers: SI / NO
- [ ] Actualizado en documentación: SI / NO
- [ ] Actualizado en procedimientos: SI / NO

---

## POST-MIGRACIÓN (24 HORAS)

**Responsable**: ________________  
**Fecha/Hora**: ________________

### Monitoreo 24h después
- [ ] Sistema sigue ejecutándose: SI / NO
- [ ] Datos se siguen registrando: SI / NO
- [ ] No hay errores en logs: SI / NO
- [ ] Dashboard accesible: SI / NO
- [ ] Usuarios reportan funcionamiento normal: SI / NO

### Optimizaciones posteriores
- [ ] Configurar backup automático: SI / NO
- [ ] Configurar alertas: SI / NO
- [ ] Documentar procedimientos: SI / NO

---

## RESUMEN EJECUTIVO

**Fecha migración**: ________________  
**Hora inicio**: ________________  
**Hora finalización**: ________________  
**Tiempo total**: ________________  
**Downtime real**: ________________

**Resultado**: ✓ EXITOSO / ✗ ROLLBACK / ⚠ PARCIAL

**Problemas encontrados**:
```




```

**Soluciones aplicadas**:
```




```

**Observaciones finales**:
```




```

**Aprobación**:

Responsable técnico: ________________________ Fecha: ________

Responsable administrativo: _________________ Fecha: ________

---

**Documento completado**: ________________  
**Estado final**: ✓ MIGRACIÓN COMPLETADA

