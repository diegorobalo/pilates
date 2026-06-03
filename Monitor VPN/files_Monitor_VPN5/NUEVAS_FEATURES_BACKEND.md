# Nuevas Features del Dashboard - Referencia de Endpoints Backend

## 1. Panel RRHH / Gestión

### GET /api/summary
Retorna array de usuarios ordenados por horas totales (descendente)

**Parámetros:**
- `days` (int): período en días

**Respuesta esperada:**
```json
[
  {
    "username": "juan_gomez",
    "sector": "Ventas",
    "total_hours": 156.5,
    "last_seen": "2026-04-17T14:30:00",
    "daily_data": [
      {"date": "2026-04-17", "total_seconds": 28800},
      {"date": "2026-04-16", "total_seconds": 25200}
    ]
  },
  ...
]
```

### GET /api/users-by-sector
Retorna resumen agrupado por sector

**Parámetros:**
- `days` (int): período en días

**Respuesta esperada:**
```json
[
  {
    "sector": "Ventas",
    "users_count": 12,
    "total_hours": 1240,
    "avg_hours": 103.33
  },
  ...
]
```

### Visualizaciones generadas:
- **Ranking Top 10**: Lista numerada con username, sector, horas totales
- **Heatmap mensual**: Grilla de 7 columnas (días semana), últimos 30 días
  - Colores: blanco (0h) → cyan (24+ h)
  - Tooltip al hover: fecha y horas
- **Alertas de ausencia**: Usuarios sin conectar 3+ días
- **Descargar PDF**: Exporta todo como PDF A4 horizontal

---

## 2. Panel IT / Seguridad

### GET /api/sessions
Retorna todas las sesiones en el período

**Parámetros:**
- `days` (int): período en días

**Respuesta esperada:**
```json
[
  {
    "username": "maria_rodriguez",
    "connected_at": "2026-04-17 03:30:00",
    "caller_id": "203.0.113.45",
    "geo_city": "Buenos Aires",
    "geo_region": "CABA",
    "geo_country": "Argentina"
  },
  ...
]
```

### Análisis automáticos:

1. **Conexiones fuera de horario (22h-6h)**
   - Filtra sesiones entre las 22:00 y 06:00
   - Muestra: usuario, hora, ciudad, IP
   - Estilo: badge rojo crítico

2. **Múltiples IPs mismo día**
   - Agrupa por fecha y usuario
   - Detecta sesiones desde IPs diferentes
   - Muestra: usuario, fecha, cantidad de IPs

3. **Mapa de ubicaciones**
   - Usa Leaflet.js para mapa interactivo
   - Ciclos en ubicaciones (ciudad, país)
   - Marcadores con círculos (tamaño = cantidad conexiones)
   - Tabla debajo con top 15 ubicaciones

---

## 3. Export PDF

**Función:** `downloadPDF()`

- Toma contenido de `#rrhh-result`
- Convierte a PDF con html2pdf.js
- Formato: A4 horizontal (landscape)
- Nombre: `vpn_monitor_rrhh.pdf`
- Estilos de impresión: oculta headers, tabs, formularios

---

## Notas de Implementación

1. Las funciones esperan endpoints que devuelven JSON válido
2. Si un endpoint no existe, la función mostrará "Error: ..." en el panel
3. El heatmap es CSS grid (no requiere librería extra)
4. Leaflet.js carga mapas de OpenStreetMap (libre, sin API key)
5. Los datos de geo_* son aproximados; para producción considerar geocoding real

## Prueba rápida
Para probar sin backend completo, las funciones esperan:
- `loadRRHHDashboard()`: llama `/api/summary` y `/api/users-by-sector`
- `loadITSecurityDashboard()`: llama `/api/sessions`

Si el backend actual no tiene estos endpoints, implementar o adaptar las llamadas a los existentes.
