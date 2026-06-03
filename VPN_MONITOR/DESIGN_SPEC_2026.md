# VPN Monitor - Full-Stack Modernization Design Spec

**Fecha:** 2026-06-01  
**Versión:** 1.0  
**Estado:** Aprobado

---

## Resumen Ejecutivo

Modernizar VPN Monitor con React + D3.js en el frontend, agregar 6 tipos de gráficas interactivas, efectos visuales modernos en conexiones/desconexiones, y mejorar exportación a múltiples formatos (PDF, Excel, JSON, Email).

---

## 1. Scope

### ✅ Incluido
- Refactorización frontend a React + Vite
- 6 gráficas nuevas (tráfico, geo, actividad, diarias, histograma, dashboard)
- Efectos visuales: aparición con glow (conexión) + Back to the Future (desconexión)
- Exportación mejorada: PDF, Excel, JSON, Email
- Backend: nuevos endpoints para gráficas
- Testing y responsividad

### ❌ Excluido
- WebSocket en tiempo real (usar polling 60s actual)
- Refactorizar backend completo
- Cambiar base de datos
- 2FA o seguridad adicional
- Mobile app

---

## 2. Arquitectura

### Frontend (React)

```
src/
├─ components/
│  ├─ Dashboard.jsx              # Layout principal
│  ├─ Charts/
│  │  ├─ TrafficChart.jsx        # Recharts - línea
│  │  ├─ GeoMap.jsx              # D3.js + Leaflet
│  │  ├─ UserActivity.jsx        # Recharts - barras
│  │  ├─ DailyStats.jsx          # Recharts - área
│  │  └─ BandwidthHistogram.jsx  # Recharts - barras horiz
│  ├─ Cards/
│  │  ├─ UserCard.jsx            # Con efectos (conexión/desconexión)
│  │  ├─ StatsCard.jsx           # KPI cards mejoradas
│  │  └─ CardContainer.jsx       # Gestiona efectos
│  ├─ Admin/
│  │  └─ AdminPanel.jsx          # Sin cambios mayores
│  ├─ Login/
│  │  └─ LoginPage.jsx           # Sin cambios mayores
│  └─ Export/
│     └─ ExportModal.jsx         # Nueva UI para exportar
├─ hooks/
│  ├─ useVPNData.js              # Fetch datos API
│  ├─ useCharts.js               # Estado gráficas
│  ├─ useEffects.js              # Animaciones Framer Motion
│  └─ usePolling.js              # Polling 60s
├─ store/
│  ├─ actions.js                 # Redux actions
│  ├─ reducers.js                # Redux reducers
│  └─ store.js                   # Configuración Redux
├─ styles/
│  ├─ animations.css             # Efectos visuales
│  ├─ theme.css                  # Colores, variables
│  ├─ charts.css                 # Estilos gráficas
│  └─ responsive.css             # Mobile-first
├─ utils/
│  ├─ api.js                     # Axios config
│  ├─ formatters.js              # Formato datos
│  └─ animations.js              # Helpers animaciones
├─ App.jsx                        # Componente raíz
└─ main.jsx                       # Entry point
```

### Backend (Python)

**Mantener estructura actual:**
- `vpn_monitor.py` - Sin cambios (polling cada 60s)
- `web_server.py` - Agregar nuevos endpoints
- `dashboard.html` - Será reemplazado por build React

**Nuevos endpoints:**
```python
GET  /api/charts/traffic       # Tráfico por hora (últimos 7 días)
GET  /api/charts/geo           # Datos geolocalización (últimos 30 días)
GET  /api/charts/users         # Top usuarios por horas (últimos 30 días)
GET  /api/charts/daily         # Tendencia diaria (últimos 30 días)
GET  /api/charts/bandwidth     # Top usuarios por MB (últimos 30 días)
POST /api/export/pdf           # Generar PDF con gráficas
POST /api/export/excel         # Generar Excel
POST /api/export/json          # Generar JSON
POST /api/export/email         # Enviar PDF por email
```

---

## 3. Gráficas (6 tipos)

### 3.1 Tráfico en Tiempo Real
- **Tipo:** Gráfico de línea (Recharts)
- **Datos:** Bytes in/out por hora, últimos 7 días
- **Actualización:** Cada 60s (polling actual)
- **Interacción:** Hover → tooltip con valores exactos
- **Ejes:** X=Hora, Y=Bytes (escala automática)

### 3.2 Mapa Geográfico
- **Tipo:** Mapa interactivo (D3.js + Leaflet)
- **Datos:** Puntos por país/ciudad (últimos 30 días)
- **Actualización:** Cada 60s
- **Interacción:** Click → detalles usuario, hover → tooltip
- **Colores:** Intensidad = actividad (gradient)

### 3.3 Actividad por Usuario
- **Tipo:** Gráfico de barras (Recharts)
- **Datos:** Top 10 usuarios, horas de conexión acumuladas
- **Actualización:** Cada 60s
- **Interacción:** Ordenable, filtrable por rango
- **Ejes:** X=Usuario, Y=Horas

### 3.4 Estadísticas Diarias
- **Tipo:** Gráfico de área (Recharts)
- **Datos:** Tendencia conexiones/desconexiones (últimos 30 días)
- **Actualización:** Cada 60s
- **Interacción:** Hover → valores exactos
- **Ejes:** X=Fecha, Y=Conexiones

### 3.5 Histograma de Tráfico
- **Tipo:** Gráfico de barras horizontal (Recharts)
- **Datos:** Top usuarios por MB (in + out)
- **Actualización:** Cada 60s
- **Interacción:** Hover → detalle, click → ir a usuario
- **Colores:** Rojo=salida, Azul=entrada (stacked)

### 3.6 Dashboard Principal (Cards)
- **Métricas:** Conexiones activas, usuarios hoy, tráfico GB, hora primera conexión
- **Actualización:** Cada 60s
- **Efectos:** 
  - Nueva conexión → card aparece con glow
  - Desconexión → card desaparece con Back-to-Future
  - Valores que cambian → fade + slide

---

## 4. Efectos Visuales

### 4.1 Conexión (Card aparece)
```css
/* Aproximado con CSS */
@keyframes connectionAppear {
  from {
    transform: scale(0.8);
    opacity: 0;
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
  }
  50% {
    box-shadow: 0 0 20px 10px rgba(34, 197, 94, 0.3);
  }
  to {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
}
```
- **Duración:** 0.6s
- **Easing:** ease-out
- **Color glow:** Verde (#22c55e)
- **Implementar con:** Framer Motion

### 4.2 Desconexión (Card desaparece - Back to the Future)
```css
@keyframes backToFutureDisappear {
  0% {
    opacity: 1;
    filter: brightness(1);
    transform: scale(1);
  }
  50% {
    filter: brightness(1.8) blur(2px);
  }
  100% {
    opacity: 0;
    filter: brightness(2) blur(4px);
    transform: scale(0.95);
  }
}
```
- **Duración:** 0.8s
- **Easing:** ease-in
- **Efecto:** Resplandor + desvanecimiento
- **Sparkle:** Partículas opcionales con CSS/SVG

### 4.3 Actualización de Valores
- **Cambio de número:** Fade (0.3s) + slide pequeño (5px)
- **Nueva fila:** Slide-in desde arriba (0.4s)
- **Eliminación:** Slide-out hacia abajo (0.3s)

---

## 5. Exportación Mejorada

### 5.1 Formatos soportados

**CSV**
- Mantener actual
- Agregar opción de incluir gráficas como imágenes (PNG inline)

**PDF** (NUEVO)
- Logo Argensun Foods arriba
- Fecha de generación
- Tabla con datos
- Gráficas como imágenes
- Página por gráfica (si es muy largo)
- Tamaño: A4, portrait

**Excel** (NUEVO)
- Multi-sheet:
  - Sheet 1: Resumen (KPIs)
  - Sheet 2: Datos detallados
  - Sheet 3: Gráficas (como imagen)
- Formato: .xlsx
- Colores y bordes aplicados

**JSON** (NUEVO)
- Estructura anidada
- Metadatos (fecha, usuario, rango)
- Array de datos

**Email** (NUEVO)
- Enviar PDF automático
- A: correo del usuario logueado
- Asunto: "Reporte VPN Monitor - [fecha]"
- Body: resumen en HTML

### 5.2 UI de Exportación

```
Modal "Exportar Reporte"
├─ Rango de fechas (date picker)
├─ Checkboxes:
│  ☑ Incluir gráficas
│  ☑ Incluir datos detallados
│  ☑ Incluir usuarios sin asignar
├─ Formato:
│  ◉ PDF
│  ○ Excel
│  ○ CSV
│  ○ JSON
├─ Acción:
│  ○ Descargar
│  ○ Enviar por email
└─ Botón: "Exportar"
```

---

## 6. Dependencias Nuevas

### Frontend
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "recharts": "^2.10.0",
  "d3": "^7.8.0",
  "leaflet": "^1.9.4",
  "react-leaflet": "^4.2.0",
  "framer-motion": "^10.16.0",
  "axios": "^1.6.0",
  "redux": "^4.2.0",
  "react-redux": "^8.1.0",
  "vite": "^5.0.0"
}
```

### Backend
```python
# En requirements.txt agregar:
pdfkit==1.0.0          # Generación PDF
openpyxl==3.10.0      # Excel
python-dotenv==1.0.0  # Variables de entorno
```

---

## 7. Plan de Implementación

### Fase 1: Setup (1-2 días)
- [ ] Crear proyecto React con Vite
- [ ] Configurar estructura de carpetas
- [ ] Instalar dependencias
- [ ] Conectar con APIs existentes
- [ ] Configurar Redux/Context

### Fase 2: Gráficas (3-5 días)
- [ ] TrafficChart (Recharts)
- [ ] GeoMap (D3 + Leaflet)
- [ ] UserActivity (Recharts)
- [ ] DailyStats (Recharts)
- [ ] BandwidthHistogram (Recharts)
- [ ] Integrar con backend
- [ ] Testing datos

### Fase 3: Efectos Visuales (2-3 días)
- [ ] Animación conexión (glow)
- [ ] Animación desconexión (Back to Future)
- [ ] Actualización valores con fade
- [ ] Polish con Framer Motion
- [ ] Timing y easing

### Fase 4: Exportación (2-3 días)
- [ ] Endpoint PDF (pdfkit)
- [ ] Endpoint Excel (openpyxl)
- [ ] Endpoint JSON
- [ ] Endpoint Email
- [ ] UI Modal exportar
- [ ] Testing formatos

### Fase 5: Polish (1-2 días)
- [ ] Responsividad (mobile/tablet)
- [ ] Performance optimization
- [ ] Testing completo
- [ ] Documentación
- [ ] Deploy

---

## 8. Testing

### Unit Tests
- Formatters (datos)
- API calls
- Redux reducers

### Integration Tests
- Gráficas con datos reales
- Exportación completa
- Efectos visuales timing

### E2E Tests
- Flow completo: login → ver gráficas → exportar

---

## 9. Métricas de Éxito

✅ 6 gráficas funcionando en tiempo real  
✅ Efectos visuales suaves (60 FPS)  
✅ Exportación a 4 formatos  
✅ Responsivo (mobile, tablet, desktop)  
✅ Cero breaking changes en backend  
✅ Performance: <2s en carga inicial  

---

## 10. Riesgos y Mitigación

| Riesgo | Probabilidad | Mitigación |
|--------|-------------|-----------|
| D3.js curva de aprendizaje | Media | Usar Leaflet pre-hecho, tutoriales D3 |
| Performance gráficas con datos grandes | Media | Lazy loading, virtualización, caché |
| Incompatibilidad navegadores | Baja | Polyfills, testing cross-browser |
| Datos inconsistentes backend | Baja | Validación API, tests |

---

## Aprobación

- **Aprobado por:** Usuario (2026-06-01)
- **Estado:** Listo para implementación
- **Próximo paso:** Plan detallado de implementación (writing-plans)
