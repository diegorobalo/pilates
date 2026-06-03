# 💼 VPN Monitor - CASOS PRÁCTICOS PARA RRHH

---

## 📋 ESCENARIO 1: Control de Asistencia Diaria

### Problema:
"Necesito saber quién no vino a trabajar hoy"

### Solución Paso a Paso:

```
1. Abre: http://localhost:5555
   Ingresa: Usuario: admin | Contraseña: admin

2. Verás el panel principal con estadísticas:
   ✓ Conectados ahora: 42 usuarios
   ✓ Se conectaron hoy: 45 usuarios

3. Ve a pestaña: 📌 AUDITORÍA

4. Mira la sección: "USUARIOS SIN CONECTAR (3+ días)"
   Si alguien está en esa lista hace poco tiempo,
   es probable que esté ausente

5. Para un usuario específico:
   • Escribe su nombre en el buscador
   • Si aparece con "0 horas hoy" → NO vino
   • Si aparece con horas → Sí vino

6. Exporta a Excel:
   Haz clic: [Exportar CSV]
   Archivo descargado: vpn_monitor_export.csv
   Abre en Excel/Calc para tus registros
```

### Resultado esperado:
```
Usuario: jgarcia
Estado: ✗ No se conectó hoy (última conexión: 15/04)
Acción: Revisar si tiene justificativo de inasistencia
```

---

## 📊 ESCENARIO 2: Evaluación de Productividad

### Problema:
"Quiero saber si Juan Pérez está siendo productivo este mes"

### Solución Paso a Paso:

```
1. Abre: http://localhost:5555

2. Ve a pestaña: 📝 INFORME USUARIO

3. Selecciona: [Juan Pérez ▼]

4. Haz clic: [Generar]

5. Analiza los gráficos:

   📈 Gráfico 1: "Horas conectado por día"
   └─ Muestra cada día del mes
   
   Interpreta:
   • Barras altas (7-8h) = Trabajando todo el día ✓
   • Barras bajas (1-2h) = Poco trabajo ⚠️
   • Barras vacías = No se conectó ✗

   📅 Gráfico 2: "Distribución por día de semana"
   └─ Suma de horas por cada día (Lun, Mar, Mié, etc)
   
   Interpreta:
   • Si Lunes es bajo = Empieza lento ⚠️
   • Si Viernes es bajo = Termina lento ⚠️
   • Si todos iguales = Constancia ✓

6. Revisa el RESUMEN:
   • Total de horas: 105.5 horas
   • Promedio por día: 3.5 horas
   • Días activos: 30 de 30 días
   
   ¿Es suficiente?
   - Si promedio es < 3h/día = BAJO ✗
   - Si promedio es 3-5h/día = NORMAL ✓
   - Si promedio es > 5h/día = ALTO ✓✓
```

### Indicadores a revisar:

```
🟢 SEÑAL VERDE (Muy productivo):
   • 5+ horas diarias
   • Activo 25+ días del mes
   • Horas crecientes (mejorando)
   → ACCIÓN: Reconocer el trabajo

🟡 SEÑAL AMARILLA (Normal pero revisar):
   • 3-5 horas diarias
   • Activo 20-24 días
   • Algunas ausencias
   → ACCIÓN: Revisar si hay justificativos

🔴 SEÑAL ROJA (Preocupante):
   • < 3 horas diarias
   • Activo < 20 días
   • Muchas inasistencias
   • Horas decrecientes
   → ACCIÓN: Entrevista con empleado
```

### Ejemplo de conversación:

```
RRHH: "Juan, veo que en el sistema tu promedio es 
      de 2.5 horas por día este mes. ¿Qué pasó?"

JUAN: "Tuve que atender a una cliente importante 
      y trabajé fuera de la oficina algunos días"

RRHH: "Entiendo, pero necesito que registres esas 
      horas en el VPN aunque sea desde tu casa.
      ¿Podés trabajar más horas conectado?"

JUAN: "Sí, a partir de ahora me conecto al llegar
      a la oficina y me desconecto al irme"
```

---

## 🏢 ESCENARIO 3: Análisis por Departamento

### Problema:
"El sector Ventas está muy poco productivo comparado con Logística"

### Solución Paso a Paso:

```
1. Ve a pestaña: 🏢 RRHH / GESTIÓN

2. Haz clic: [Cargar]

3. Mira la sección: "RESUMEN POR SECTOR"

   Tabla:
   ┌─────────────────────┬─────────┬──────────┐
   │ Sector              │ Usuarios│ Horas    │
   ├─────────────────────┼─────────┼──────────┤
   │ Logística           │   28    │ 1,950 h  │
   │ Administración      │   12    │   890 h  │
   │ Ventas              │   45    │ 1,250 h  │
   │ Operaciones         │   15    │ 1,100 h  │
   └─────────────────────┴─────────┴──────────┘

4. Análisis:
   
   Calcula: Horas / Usuarios = Promedio por persona
   
   • Logística:  1,950 / 28 = 69.6 horas/persona ✓✓
   • Admin:      890 / 12 = 74.2 horas/persona ✓✓
   • Ventas:     1,250 / 45 = 27.8 horas/persona ✗
   • Operaciones:1,100 / 15 = 73.3 horas/persona ✓✓

5. Conclusión:
   PROBLEMA: Ventas tiene 27.8 h/persona vs 69 h en otros
   
   Posibles causas:
   ✓ Trabajan de forma local (visitando clientes)
   ✓ No usan VPN (usan wifi del cliente)
   ✓ Realmente trabajan menos
   ✓ Problema técnico con el VPN
   
6. Acción recomendada:
   → Entrevistar al gerente de Ventas
   → Revisar si es normal su modelo de trabajo
   → Si no es normal, capacitar sobre uso del VPN
```

### Heatmap Mensual - Cómo interpretarlo:

```
El gráfico de HEATMAP muestra:

   ┌──────────────────────────────────────────┐
   │ INTENSIDAD DE USO POR DÍA               │
   ├──────────────────────────────────────────┤
   │ 🟢 Verde oscuro = Máxima actividad      │
   │ 🟢 Verde claro  = Actividad normal      │
   │ 🟡 Amarillo     = Poca actividad        │
   │ 🔴 Rojo         = Sin actividad / Feriado│
   └──────────────────────────────────────────┘

Patrón normal:
   • Lunes-Viernes: 🟢 Verde (trabajo)
   • Sábado-Domingo: 🔴 Rojo (descanso)
   • Feriados: 🔴 Rojo (feriado)

Patrones anormales:
   • 🔴 Rojo entre semana = Alguien no trabajó
   • 🟡 Amarillo siempre = Departamento poco activo
   • 🟢 Verde el fin de semana = Trabajo extra
```

---

## ⚠️ ESCENARIO 4: Detección de Ausencias Injustificadas

### Problema:
"María no se conectó el lunes, martes y miércoles de esta semana"

### Solución Paso a Paso:

```
1. Ve a pestaña: 📌 AUDITORÍA

2. Busca: María García

3. Mira la información:
   • 13/04 (Viernes): 7.5 horas ✓
   • 14/04 (Sábado): Descanso ✓
   • 15/04 (Domingo): Descanso ✓
   • 16/04 (Lunes): 0 horas ✗
   • 17/04 (Martes): 0 horas ✗
   • 18/04 (Miércoles): 0 horas ✗
   • 19/04 (Jueves): 6.2 horas ✓

4. Conclusión:
   3 días ausentes SIN conexión a VPN
   Esto indica probablemente:
   ✗ Ausencia física (enfermedad/problema)
   ✗ No se conectó (muy sospechoso)

5. Acciones a tomar:
   
   Paso 1: Revisar si tiene justificativo
   → Llamar a María
   → Preguntar si estuvo de licencia
   → Revisar solicitudes aprobadas
   
   Paso 2: Si NO hay justificativo
   → Es AUSENCIA INJUSTIFICADA
   → Registrar en legajo
   → Tomar medidas disciplinarias si corresponde
   
   Paso 3: Si HAY justificativo
   → Registrar el motivo
   → Cerrar el caso
   → IMPORTANTE: Pedir a María que justifique
     por escrito en el sistema
```

### Plantilla para registrar:

```
REPORTE DE AUSENCIA DETECTADA:

Empleado: María García
Período: 16-18 de Abril 2026 (3 días)
Detectado por: VPN Monitor (sin conexiones)
Estado: ⚠️ REQUIERE ACCIÓN

☐ OPCIÓN A: Ausencia Justificada
  Motivo: _______________________
  Documentación: ✓ Adjuntada
  Acciones: Archivo
  
☐ OPCIÓN B: Ausencia Injustificada
  Acción: Descuento de días
  Observaciones: _______________
  Firma Jefe: ________________
```

---

## 🎯 ESCENARIO 5: Detección de Anomalías

### Problema:
"Alguien se conectó a las 3 de la mañana desde otro país"

### Solución Paso a Paso:

```
1. Ve a pestaña: 🔒 IT / SEGURIDAD

2. Mira: "UBICACIONES DE CONEXIÓN"
   
   Ejemplo:
   • Buenos Aires: 580 conexiones (87%) ✓
   • La Plata: 65 conexiones (9%) ✓
   • Rosario: 25 conexiones (3%) ✓
   • Panamá: 2 conexiones (0.3%) ⚠️ ALERTA

3. Si ves un país extraño:
   → Haz clic en esa ubicación
   → Ve a pestaña HISTORIAL
   → Busca conexiones de ese país
   → Identifica al usuario
   → Verifica si trabajaba desde viaje

4. Preguntas a hacerse:
   ✓ ¿Estaba de viaje de negocios?
   ✓ ¿Le autorizaron trabajar desde allá?
   ✓ ¿Es un cliente externo?
   ✗ ¿Es robo de credenciales?
   
5. Si es sospechoso:
   → Contactar al usuario
   → Verificar si fue él
   → Si NO: Cambiar contraseña inmediatamente
   → Revisar qué datos accedió
```

---

## 💡 ESCENARIO 6: Optimización de Recursos

### Problema:
"Gastamos mucho ancho de banda pero no sabemos de dónde"

### Solución Paso a Paso:

```
1. Ve a pestaña: 🏢 RRHH / GESTIÓN

2. Revisa el TOP 10 USUARIOS:
   
   Usuario      Horas   Datos (MB)
   jperez       105.5   4,250 MB ⬆️ ALTO
   agarcia      98.2    2,120 MB
   mlopez       87.5    3,890 MB ⬆️ ALTO
   rcabrera     76.3    890 MB
   ...

3. Observaciones:
   • jperez usa 4GB en 105 horas = 40MB/hora
   • agarcia usa 2GB en 98 horas = 22MB/hora
   • mlopez usa 3.8GB en 87 horas = 43MB/hora
   
   Promedio normal: 15-20 MB/hora
   
   ALERTA: jperez y mlopez usan el doble

4. Investigación:
   → Preguntar si descargan videos/archivos grandes
   → Revisar si tienen repositorios de datos
   → Verificar si hay descargas P2P
   → Revisar aplicaciones instaladas
   
5. Posibles soluciones:
   ✓ Implementar límites de ancho de banda
   ✓ Prohibir ciertos tipos de descargas
   ✓ Optimizar servidores de archivo
   ✓ Usar VPN de mejor velocidad
```

---

## 📈 ESCENARIO 7: Preparar Reporte Mensual

### Problema:
"Necesito un reporte de productividad para mostrar a la Dirección"

### Solución Paso a Paso:

```
1. Abre el VPN Monitor

2. Selector de días: Cambia a [30]

3. Ve a cada pestaña y recopila datos:

   PESTAÑA 1 - CONECTADOS:
   └─ Captura de pantalla: "Usuarios activos ahora"
   
   PESTAÑA 2 - ESTADÍSTICAS:
   └─ Anota:
      • Total usuarios: ___
      • Promedio conectados/día: ___
      • Tráfico total/día: ___ GB
   
   PESTAÑA 3 - RRHH/GESTIÓN:
   └─ Anota:
      • Top 5 usuarios
      • Horas por sector
      • Ausencias detectadas
   
   PESTAÑA 4 - AUDITORÍA:
   └─ Anota:
      • % asistencia general
      • Usuarios con 3+ días sin conectar

4. Crea documento en Word/Calc:

   ┌─────────────────────────────────┐
   │ REPORTE DE ACTIVIDAD VPN        │
   │ Mes: Abril 2026                 │
   │ Período: 1-30 de Abril          │
   ├─────────────────────────────────┤
   │ RESUMEN EJECUTIVO:              │
   │ • Usuarios promedio/día: 42     │
   │ • Asistencia: 96%               │
   │ • Tráfico total: 450 GB         │
   │ • Productividad: Estable ✓      │
   ├─────────────────────────────────┤
   │ TOP 5 USUARIOS (horas)          │
   │ 1. jperez - 105.5h              │
   │ 2. agarcia - 98.2h              │
   │ 3. mlopez - 87.5h               │
   │ 4. rcabrera - 76.3h             │
   │ 5. vrodriguez - 72.1h           │
   ├─────────────────────────────────┤
   │ PRODUCTIVIDAD POR SECTOR        │
   │ Ventas: 27.8 h/persona ⚠️       │
   │ Logística: 69.6 h/persona ✓     │
   │ Admin: 74.2 h/persona ✓         │
   │ Operaciones: 73.3 h/persona ✓   │
   ├─────────────────────────────────┤
   │ ALERTAS:                        │
   │ • Ventas bajo de productividad  │
   │ • jgarcia sin conectar 5 días   │
   │ • rcabrera sin conectar 4 días  │
   ├─────────────────────────────────┤
   │ RECOMENDACIONES:                │
   │ 1. Revisar modelo de trabajo    │
   │    en Ventas                    │
   │ 2. Investigar ausencias sin     │
   │    justificativo                │
   │ 3. Optimizar ancho de banda     │
   │    (usuarios usan 40MB/h)       │
   └─────────────────────────────────┘

5. Exporta datos:
   • Haz clic: [Exportar CSV]
   • Abre en Excel
   • Copia tablas al documento Word
   • Agrega gráficos
```

---

## 🚀 CHECKLIST MENSUAL PARA RRHH

```
☐ SEMANA 1 (Primeros 7 días del mes):
  ☐ Verificar asistencia de esta semana
  ☐ Revisar ausencias sin justificar
  ☐ Revisar si nuevos empleados están configurados
  
☐ SEMANA 2-3 (Del día 8 al 21):
  ☐ Control de productividad intermedio
  ☐ Revisar si hay anomalías técnicas
  ☐ Contactar empleados con bajo uso
  
☐ SEMANA 4 (Final del mes):
  ☐ Generar reportes por empleado
  ☐ Generar reportes por sector
  ☐ Identificar mejores empleados (reconocimiento)
  ☐ Identificar problemas persistentes
  ☐ Preparar reporte ejecutivo para Dirección
  
☐ FIN DE MES:
  ☐ Archivar reportes en carpeta de RRHH
  ☐ Hacer seguimiento de acciones correctivas
  ☐ Capacitar nuevamente si hay problemas
  ☐ Reunión con Gerentes de Área
```

---

## 🎓 TABLA DE REFERENCIA RÁPIDA

| Necesito... | Voy a... | Y hago... |
|---|---|---|
| Saber quién no vino | Auditoría | Busco el nombre |
| Evaluar a un empleado | Informe Usuario | Selecciono y genero |
| Ver por departamento | RRHH/Gestión | Hago clic en Cargar |
| Control de seguridad | IT/Seguridad | Analizo ubicaciones |
| Ver historial completo | Historial | Filtro por fecha |
| Tabla de conectados ahora | Tabla Detalle | Veo detalles técnicos |
| Gráficos de actividad | Conectados | Veo el dashboard |
| Exportar datos | Cualquiera | Clic en Exportar CSV |

---

**Versión**: 2.1.0  
**Fecha**: 17 de Abril 2026  
**Listo para usar por RRHH**: ✅ SÍ
