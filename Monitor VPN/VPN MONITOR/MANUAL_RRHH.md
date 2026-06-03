# 📊 VPN Monitor - Manual de Uso para RRHH

**Versión**: 2.1.0  
**Fecha**: 17 de Abril 2026  
**Estado**: Listo para usar

---

## 🏗️ ARQUITECTURA DEL SISTEMA

```
┌─────────────────────────────────────────────────────────────────────┐
│                         NAVEGADOR DEL USUARIO                       │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │           PANEL VPN MONITOR (dashboard.html)                 │  │
│  │                                                              │  │
│  │  ┌────────────────────────────────────────────────────────┐ │  │
│  │  │ ENCABEZADO: Logo, URL API, Selector de días, Botones  │ │  │
│  │  └────────────────────────────────────────────────────────┘ │  │
│  │                                                              │  │
│  │  ┌────────────────────────────────────────────────────────┐ │  │
│  │  │ ESTADÍSTICAS: Conectados ahora, Usuarios hoy, Tráfico  │ │  │
│  │  └────────────────────────────────────────────────────────┘ │  │
│  │                                                              │  │
│  │  ┌────────────────────────────────────────────────────────┐ │  │
│  │  │ PESTAÑAS:                                             │ │  │
│  │  │ • Conectados      • Tabla detalle   • Historial       │ │  │
│  │  │ • Auditoría       • Informe usuario • RRHH / Gestión  │ │  │
│  │  │ • IT / Seguridad                                      │ │  │
│  │  └────────────────────────────────────────────────────────┘ │  │
│  │                                                              │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                           ▲                                         │
│                           │                                         │
│                  (Solicita datos en tiempo real)                   │
│                           │                                         │
└─────────────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    SERVIDOR WEB (web_server.py)                     │
│                      Puerto: 5555 (Flask)                           │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ ENDPOINTS API (REST):                                        │  │
│  │ • /api/active         → Usuarios conectados AHORA            │  │
│  │ • /api/stats          → Estadísticas generales               │  │
│  │ • /api/history        → Historial de sesiones                │  │
│  │ • /api/users          → Lista de TODOS los usuarios          │  │
│  │ • /api/user-report    → Reporte de un usuario específico     │  │
│  │ • /api/summary        → Resumen de uso por usuario           │  │
│  │ • /api/users-by-sector→ Usuarios agrupados por sector        │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                           ▲                                         │
│                           │                                         │
└─────────────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────────┐
│              MONITOR VPN (vpn_monitor.py)                           │
│          Conecta a MikroTik cada 30 segundos                        │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ • Lee usuarios conectados al VPN en TIEMPO REAL              │  │
│  │ • Registra IP asignada, bytes descargados/subidos            │  │
│  │ • Identifica ubicación geográfica (GeoIP)                    │  │
│  │ • Calcula primera conexión del día                           │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                           │                                         │
│                           ▼                                         │
└─────────────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────────┐
│           BASE DE DATOS (vpn_sessions.db - SQLite)                  │
│                                                                     │
│  ┌────────────────────────────────┐  ┌───────────────────────────┐ │
│  │ Tabla: vpn_sessions            │  │ Tabla: daily_uptime       │ │
│  │ • username                     │  │ • username                │ │
│  │ • connected_at (inicio sesión) │  │ • date                    │ │
│  │ • disconnected_at (fin sesión) │  │ • total_seconds (uso)     │ │
│  │ • assigned_ip                  │  │ • bytes_in / bytes_out    │ │
│  │ • bytes_in / bytes_out         │  │ • first_seen (1ª del día) │ │
│  │ • geo_location (ciudad/país)   │  └───────────────────────────┘ │
│  │ • is_active (conectado ahora)  │                                │
│  └────────────────────────────────┘  ┌───────────────────────────┐ │
│                                       │ Tabla: users              │ │
│                                       │ • username                │ │
│                                       │ • sector (departamento)   │ │
│                                       └───────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📱 INTERFAZ DEL USUARIO - LAS 7 PESTAÑAS

### 1️⃣ **CONECTADOS** - ¿Quién está usando VPN AHORA?

```
┌─────────────────────────────────────────────────────┐
│ CONECTADOS (En tiempo real)                         │
├─────────────────────────────────────────────────────┤
│ Usuario  │ IP      │ Ubicación │ Conectado │ 1ª hoy │
├──────────┼─────────┼───────────┼──────────┼────────┤
│ jperez   │ 192.... │ Buenos A. │ 02:15    │ 07:30  │
│ agarcia  │ 192.... │ CABA      │ 01:45    │ 08:15  │
│ mlopez   │ 192.... │ San Isidro│ 00:30    │ 06:45  │
│ ...      │ ...     │ ...       │ ...      │ ...    │
└─────────────────────────────────────────────────────┘

¿Qué vemos?
• Usuario: Nombre de persona/empleado
• IP: Dirección Internet asignada al conectarse
• Ubicación: Ciudad/País desde donde se conecta
• Conectado desde: Hora actual de uso (ej: 2h 15 min)
• 1ª conexión hoy: Primera vez que se conectó hoy
```

---

### 2️⃣ **TABLA DETALLE** - Listado completo con más información

```
┌──────────────────────────────────────────────────────────────┐
│ TABLA DETALLE - Todos los conectados AHORA                   │
├──────────────────────────────────────────────────────────────┤
│ Usuario  │ IP Asignada │ ID Llamada │ Bytes Descargados   │
│ jperez   │ 192.168...  │ PC-01      │ 245.8 MB            │
│ agarcia  │ 192.168...  │ PC-02      │ 128.3 MB            │
│ mlopez   │ 192.168...  │ MÓVIL      │ 89.2 MB             │
└──────────────────────────────────────────────────────────────┘

¿Qué vemos?
• ID Llamada: Identifica la computadora o dispositivo (MÓVIL, PC-01, etc)
• Bytes: Cantidad de datos descargados durante esta sesión
• Información detallada de cada conexión activa
```

---

### 3️⃣ **HISTORIAL** - Todo lo que pasó en los últimos días

```
┌────────────────────────────────────────────────────────────┐
│ HISTORIAL - Últimas 30 días (configurable)                 │
├────────────────────────────────────────────────────────────┤
│ Fecha/Hora      │ Usuario  │ Conectó a │ Desconectó a │ Horas│
├─────────────────┼──────────┼──────────┼──────────────┼──────┤
│ 17/04 09:30     │ jperez   │ 09:30    │ 13:45        │ 4.25 │
│ 17/04 14:00     │ jperez   │ 14:00    │ 18:20        │ 4.33 │
│ 17/04 09:15     │ agarcia  │ 09:15    │ 12:00        │ 2.75 │
│ 17/04 13:30     │ agarcia  │ 13:30    │ 17:45        │ 4.25 │
│ ...             │ ...      │ ...      │ ...          │ ...  │
└────────────────────────────────────────────────────────────┘

¿Qué vemos?
• Cada fila = una sesión VPN completada
• Horas: Tiempo total de conexión en esa sesión
• Permite ver patrones de uso y ausencias
```

---

### 4️⃣ **AUDITORÍA** - Verificar cumplimiento y ausentismo

```
┌──────────────────────────────────────────────────────────┐
│ AUDITORÍA - Cumplimiento y Ausentismo                    │
├──────────────────────────────────────────────────────────┤
│ Últimos 30 días                                          │
│                                                          │
│ USUARIOS SIN CONECTAR (3+ días):                         │
│ • jgarcia (5 días sin usar VPN) ⚠️                       │
│ • rcabrera (4 días sin usar VPN) ⚠️                      │
│                                                          │
│ BUSCADOR:                                                │
│ [Usuario: ______________] [Buscar]                      │
│                                                          │
│ Selecciona un usuario para ver:                          │
│ • Fechas que se conectó                                 │
│ • Fechas que NO se conectó                              │
│ • Patrones de ausentismo                                │
└──────────────────────────────────────────────────────────┘

¿Para qué sirve?
• Identificar empleados que no están usando el VPN
• Detectar quién falta a trabajar
• Generar reportes de asistencia
```

---

### 5️⃣ **INFORME USUARIO** - Reporte detallado de una persona

```
┌──────────────────────────────────────────────────────────┐
│ INFORME USUARIO - Selecciona un usuario y haz clic       │
│ "Generar"                                                │
├──────────────────────────────────────────────────────────┤
│ Usuario: [jperez ▼]  [Generar]                           │
│                                                          │
│ RESULTADOS PARA: jperez (Últimos 30 días)               │
│                                                          │
│ 📊 Gráfico 1: Horas conectado por día                   │
│    [Gráfico de barras mostrando uso diario]              │
│                                                          │
│ 📅 Gráfico 2: Distribución por día de semana            │
│    Lun: 22h | Mar: 20h | Mié: 23h | Jue: 21h | Vie:19h │
│                                                          │
│ 📈 RESUMEN:                                              │
│ • Total de horas: 105.5 horas                            │
│ • Promedio por día: 3.5 horas                            │
│ • Días activos: 30 de 30 días ✓                          │
│ • Máxima conexión: 8.2 horas (15/04)                     │
│ • Mínima conexión: 0.5 horas (03/04)                     │
└──────────────────────────────────────────────────────────┘

¿Para qué sirve?
• Evaluar productividad individual
• Ver tendencias de trabajo
• Identificar cambios en patrones de uso
• Preparar reportes de desempeño
```

---

### 6️⃣ **RRHH / GESTIÓN** - Panel de recursos humanos

```
┌──────────────────────────────────────────────────────────┐
│ RRHH / GESTIÓN                                           │
├──────────────────────────────────────────────────────────┤
│ [Cargar] Datos de los últimos 30 días                    │
│                                                          │
│ 🏆 TOP 10 USUARIOS (más horas de trabajo)               │
│    1. jperez      - 105.5 horas  ████████                │
│    2. agarcia     - 98.2 horas   ███████                 │
│    3. mlopez      - 87.5 horas   ██████                  │
│    ...                                                   │
│                                                          │
│ 🏢 RESUMEN POR SECTOR:                                   │
│    Ventas:          45 usuarios, 2,350 horas             │
│    Administración:  12 usuarios, 890 horas               │
│    Logística:       28 usuarios, 1,950 horas             │
│    ...                                                   │
│                                                          │
│ 📅 HEATMAP MENSUAL (Uso por día):                       │
│    [Mapa de calor mostrando intensidad diaria]          │
│                                                          │
│ ⚠️ AUSENCIAS (sin conectar 3+ días):                     │
│    • jgarcia - 5 días sin conectar                       │
│    • rcabrera - 4 días sin conectar                      │
│                                                          │
│ ┌─────────────────────────────────────────┐             │
│ │ ASIGNAR DEPARTAMENTO                    │             │
│ │ Usuario: [jperez ▼]                     │             │
│ │ Departamento: [Ventas ▼]                │             │
│ │ [Guardar] ✓ Usuario asignado a Sector  │             │
│ └─────────────────────────────────────────┘             │
└──────────────────────────────────────────────────────────┘

¿Para qué sirve?
• Ver tendencias globales de uso por sector
• Identificar departamentos menos productivos
• Detectar ausencias prolongadas
• Asignar usuarios a sectores/departamentos
• Tomar decisiones de recursos humanos
```

---

### 7️⃣ **IT / SEGURIDAD** - Monitoreo técnico

```
┌──────────────────────────────────────────────────────────┐
│ IT / SEGURIDAD                                           │
├──────────────────────────────────────────────────────────┤
│ [Cargar] Análisis de últimos 30 días                     │
│                                                          │
│ ⏰ HORAS PICO DE CONEXIÓN:                               │
│    09:00 hs - Máxima actividad (45 usuarios)             │
│    08:30-09:30: PICO CRÍTICO ⚠️                          │
│    12:00-13:00: Descenso (almuerzo)                      │
│    14:00-15:00: Repunte                                  │
│    17:30+: Desciende (fin jornada)                       │
│                                                          │
│    [Gráfico mostrando horas del día vs cantidad usuarios]│
│                                                          │
│ 🌍 UBICACIONES DE CONEXIÓN:                              │
│    Buenos Aires:      580 conexiones (87%)               │
│    La Plata:          65 conexiones (9%)                 │
│    Rosario:           25 conexiones (3%)                 │
│    Otras:             5 conexiones (1%)                  │
│                                                          │
│ 🔒 ALERTAS DE SEGURIDAD:                                 │
│    ✓ Todas las conexiones legítimas                      │
│    ✓ No hay conexiones desde países bloqueados           │
│    ✓ Ancho de banda dentro de parámetros                │
└──────────────────────────────────────────────────────────┘

¿Para qué sirve?
• Identificar sobrecargas de ancho de banda
• Planificar infraestructura
• Detectar conexiones anormales
• Monitoreo de seguridad
```

---

## 🎯 GUÍA RÁPIDA DE USO PARA RRHH

### Caso 1: "Necesito saber quién falta hoy"

```
1. Abre: http://localhost:5555
2. Ve a pestaña: AUDITORÍA
3. Busca: Nombre del empleado
4. Verás: ✓ Se conectó hoy → Presente
         ✗ No se conectó → Ausente
```

---

### Caso 2: "Necesito un reporte de productividad de Juan"

```
1. Ve a pestaña: INFORME USUARIO
2. Selecciona: Juan Pérez
3. Haz clic: [Generar]
4. Verás: 
   • Horas de trabajo cada día
   • Gráficos de distribución
   • Promedio de horas diarias
   • Tendencias
```

---

### Caso 3: "Quiero ver qué sectores trabajan más"

```
1. Ve a pestaña: RRHH / GESTIÓN
2. Haz clic: [Cargar]
3. Verás:
   • Top 10 usuarios más productivos
   • Horas por sector
   • Ausencias (3+ días sin conectar)
   • Tabla de calor de actividad
```

---

### Caso 4: "Necesito asignar un usuario a Ventas"

```
1. Ve a pestaña: RRHH / GESTIÓN
2. Scrollea hasta: "ASIGNAR DEPARTAMENTO"
3. Selecciona:
   • Usuario: [Juan Pérez]
   • Departamento: [Ventas]
4. Haz clic: [Guardar]
5. Verás: ✓ Usuario asignado a Sector VENTAS
```

---

### Caso 5: "¿Por qué baja la productividad a las 12?"

```
1. Ve a pestaña: IT / SEGURIDAD
2. Haz clic: [Cargar]
3. Mira: "HORAS PICO DE CONEXIÓN"
4. Verás: El gráfico muestra que a las 12-13 horas
         baja la actividad (ALMUERZO/DESCANSO)
         ✓ Comportamiento normal
```

---

## ⚙️ CONFIGURACIÓN IMPORTANTE

### En la barra superior, tienes:

```
┌──────────────────────────────────────────┐
│ API: [http://localhost:5555]             │
│ Días: [30 ▼]                             │
│ [Actualizar] [Exportar CSV]              │
└──────────────────────────────────────────┘
```

**API**: Dirección del servidor VPN Monitor  
- Por defecto se detecta automáticamente
- Si cambias, se guarda en tu navegador

**Días**: Cambia el rango de datos a analizar
- 7 días: Última semana
- 15 días: 2 semanas
- 30 días: Último mes (predeterminado)
- 60 días: 2 meses

**Actualizar**: Recarga todos los datos en tiempo real

**Exportar CSV**: Descarga los datos a Excel/Calc

---

## 📊 CÓMO INTERPRETAR LOS DATOS

### Colores en el panel:
```
🟢 Verde   = Activo / Conectado / Normal
🔴 Rojo    = Ausente / Inactivo / Alerta
🟡 Amarillo = Advertencia / Revisar
🔵 Azul    = Información
```

### Unidades:
```
MB  = Megabytes (datos descargados)
GB  = Gigabytes (datos descargados)
h   = Horas de uso
min = Minutos de uso
```

---

## 🔐 SEGURIDAD Y PRIVACIDAD

✓ **Solo se registra**:
- Cuándo se conectó/desconectó
- Desde dónde (ubicación aproximada)
- Cuántos datos utilizó
- NUNCA: Lo que hizo, qué sitios visitó, contraseñas

✓ **Acceso**:
- Solo con usuario y contraseña
- Usuario: `admin`
- Contraseña: `admin` (cambiar si es necesario)

---

## ❓ PREGUNTAS FRECUENTES

**P: ¿Qué significan "Bytes in" y "Bytes out"?**  
R: Datos descargados (in) y subidos (out) a internet durante la sesión VPN.

**P: ¿Por qué un usuario aparece con 0 horas algunas veces?**  
R: Se conectó pero se desconectó en menos de 1 minuto, o hay un retraso en la actualización.

**P: ¿Se puede saber en qué trabajó cada persona?**  
R: No. El VPN Monitor SOLO ve conexiones/desconexiones, no el contenido del trabajo.

**P: ¿Cada cuánto se actualiza la información?**  
R: En tiempo real (cada 30 segundos aprox), puedes hacer clic en "Actualizar" para forzar una actualización.

**P: ¿Puedo ver información de meses anteriores?**  
R: Sí, cambiar el selector de "Días" a 60 días, y los datos se guardan indefinidamente en la base de datos.

---

## 🚀 PRÓXIMOS PASOS

1. **Familiarizarse**: Explorar todas las pestañas
2. **Asignar usuarios**: Ir a RRHH/Gestión y asignar cada usuario a su sector
3. **Crear reportes**: Usar Excel para exportar datos (botón "Exportar CSV")
4. **Monitoreo diario**: Revisar auditoría cada mañana para ausentismo
5. **Análisis mensual**: Generar reporte de productividad por sector

---

## 📞 SOPORTE TÉCNICO

Si algo no funciona:

1. Recarga la página (F5)
2. Verifica que URL API está correcta
3. Abre la consola del navegador (F12 → Console) para ver errores
4. Si persiste, reinicia los servicios:
   - `python vpn_monitor.py`
   - `python web_server.py`

---

**Versión**: 2.1.0  
**Última actualización**: 17 de Abril 2026  
**Estado**: ✅ Listo para producción
