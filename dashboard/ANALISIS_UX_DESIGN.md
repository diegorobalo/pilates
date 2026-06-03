# 📐 Análisis UX/UI - Dashboard de Reclamos ArgeSun

## Documento de Análisis desde Perspectiva de Especialista UX

### 1. DESCUBRIMIENTO & SÍNTESIS DE DATOS

#### Análisis de la Base de Datos

**Volumen:**
- 191 tickets activos (data del 27/05/2026)
- Distribución temporal: Tickets desde 2019 hasta presente
- Patrón de crecimiento: Incremento consistente de nuevos reclamos

**Actores Principales:**
- **Clientes**: ~40 clientes diferentes, con Ximena Teat, Nestor Nassif e Ignacio Stergar como top 3
- **Agentes**: ~10 agentes asignados, liderados por Jacqueline Kelly
- **Fuente**: 90% Web, 10% Email (oportunidad: mejorar canales)

**Problemas Críticos Identificados:**
- 52% de tickets atrasados (fuera de SLA) ⚠️
- Tiempo promedio abierto: ~60 días (meta debería ser <7 días)
- 30% sin respuesta inicial
- Concentración de carga: 2 agentes manejan 65% de los tickets

**Causas Principales:**
1. **Demoras en documentación/liberación** (22%)
2. **Problemas de calidad** (18%)
3. **Faltantes de bolsas** (15%)
4. **Contaminación/plagas** (12%)
5. **Otros logísticos** (33%)

---

### 2. DECISIONES DE DISEÑO UX

#### 2.1 Arquitectura de Información

**Enfoque:** Progressive Disclosure - mostrar lo importante primero, profundizar cuando el usuario lo requiera

```
NIVEL 1: Dashboard Ejecutivo
├─ KPIs críticos (4 cards)
├─ Distribución de estados (pie chart)
├─ Actividad reciente (5 últimos)
└─ Rankings (clientes, agentes, causas)

NIVEL 2: Tabla de Reclamos
├─ Vista completa con filtros
├─ Búsqueda y filtrado avanzado
├─ Paginación/scroll
└─ Exportación a CSV

NIVEL 3: Análisis (Analytics)
├─ Gráficos estadísticos avanzados
├─ Matrices cliente-causa
├─ Performance de agentes
└─ Tendencias temporales
```

#### 2.2 Flujos de Usuario Principales

**Flujo 1: Manager - Revisión Diaria**
```
Entra al Dashboard → Ve KPIs → Identifica alertas (Atrasados) 
→ Click en "Reclamos" → Filtra por estado "Atrasado" 
→ Ve lista prioritarizada → Exporta CSV si requiere seguimiento
```

**Flujo 2: Operacional - Búsqueda Específica**
```
Click en "Reclamos" → Busca por cliente/ticket → 
Filtra por estado → Encuentra reclamo → [Potencial: Click para detalles]
```

**Flujo 3: Análisis - Investigación de Patrones**
```
Click en "Análisis" → Revisa gráficos de causas → 
Identifica patrón (ej: cliente X + causa Y) → 
Exporta reporte → Presenta a stakeholders
```

#### 2.3 Criterios de Diseño

**Confianza & Profesionalismo:**
- Paleta azul oscuro + naranjas (no morado/pink trending)
- Tipografía serif en headings (Playfair Display) = sofisticación
- Tipografía sans-serif limpia en body = legibilidad
- Bordes suaves (4px border-radius)
- Sombras sutiles (no drop shadows agresivos)

**Claridad Visual:**
- Código de colores consistente:
  - 🔴 Rojo = Atrasado (urgencia)
  - 🟡 Naranja = Normal/Pendiente (caución)
  - 🔵 Azul = Abierto (activo)
  - 🟢 Verde = Resuelto (success)

**Densidad de Información:**
- Cards con espacios generosos (p-6 = 24px padding)
- Máximo 4 cards por fila en desktop
- Stack vertical en mobile (1 col)
- Tablas con row height aumentado = legibilidad sin sacrificar cantidad

**Accesibilidad:**
- Focus states en todos los botones/inputs
- Suficiente contraste (WCAG AA)
- Iconos + texto (nunca solo iconos)
- Labels explícitos en inputs
- Semantic HTML

---

### 3. ESTRATEGIA DE ANIMACIONES

**Principio:** Movimiento Propositivo - animar SOLO para guiar atención, NO para entretener

| Elemento | Animación | Duración | Propósito |
|----------|-----------|----------|-----------|
| Page Load | Fade in + slide up | 500ms | Introducir nueva vista |
| Cards KPI | Stagger delay 0-300ms | 300ms | Revelar gradualmente |
| Chart Labels | Fade in | 800ms | Permitir lectura |
| Row Hover | Bg color shift | 200ms | Indicar interactividad |
| Sidebar Active | Slide right + color | 200ms | Indicar página actual |
| Button Hover | Scale 1.02 + shadow | 150ms | Feedback visual |

**Ausencias Intencionales:**
- ❌ Rotaciones/3D transforms (confunden en dashboards)
- ❌ Bounce animations (poco profesional)
- ❌ Múltiples animaciones simultáneamente (caos)

---

### 4. JERARQUÍA VISUAL

```
TÍTULOS DE PÁGINA
├─ font-size: 30px | font-display | font-bold | dark:white
│
├─ TÍTULOS DE SECCIÓN
│  ├─ font-size: 18px | sans-serif | font-bold | dark:white
│  │
│  ├─ LABELS/METADATA
│  │  ├─ font-size: 12px | uppercase | tracking-wider | gray-500
│  │  │
│  │  └─ BODY TEXT
│  │     └─ font-size: 14px | sans-serif | gray-700 | line-height-6
│  │
│  └─ BODY SECONDARY
│     └─ font-size: 12px | gray-500 | italic
│
└─ CAPTIONS/HINTS
   └─ font-size: 11px | gray-400 | text-muted
```

---

### 5. PATRONES DE COMPONENTES

#### Badges (Estados)

```
Badges Semánticos
├─ .badge-success (verde) → Resuelto, Enviado
├─ .badge-danger (rojo) → Atrasado, Error, Crítico
├─ .badge-warning (naranja) → Normal, Pendiente, Caución
└─ .badge-primary (azul) → Info, Abierto, Activo
```

#### Filters

**Diseño: Horizontal stack**
- Mobile: Stack vertical con selects full-width
- Desktop: Horizontal con checkboxes para toggles
- Cada filter tiene label clara + validación visual

#### Tables

**Responsive Strategy:**
- Desktop: Tabla completa horizontal
- Tablet: Scroll horizontal con sticky columns
- Mobile: Potencial conversión a cards (no implementado en v1)

---

### 6. DARK MODE

**Implementación:**
- Toggle global en header
- Usa `dark:` prefix de Tailwind
- Mantiene misma jerarquía visual
- Colores adaptados para reducir fatiga

**Consideración:** Dark mode activado por preferencia del sistema si existe

---

### 7. DATOS: INSIGHTS & OPORTUNIDADES

### 🔍 Insights de UX Data

**Insight 1: Cuello de Botella de SLA**
- 52% atrasado = sistema saturado
- Recomendación UX: Mostrar prominentemente tickets "vencidos hoy" en dashboard

**Insight 2: Carga Desequilibrada de Agentes**
- Jacqueline Kelly maneja 100+ tickets
- Recomendación: Agregar tabla de "distribución equitativa" en analytics

**Insight 3: Clientes Recurrentes con Mismos Problemas**
- Ej: Nestor Nassif + Demoras = patrón constante
- Recomendación: Agregar "sugerir solución automática" basado en historial

**Insight 4: Bajo Engagement en Email**
- Solo 10% vía email vs 90% web
- Recomendación: Analizar por qué

---

### 8. ACCIONES FUTURAS (ROADMAP UX)

#### Fase 2 (Q3 2026)
- [ ] Vista de detalles expandida de ticket
- [ ] Comentarios/notas en tickets
- [ ] Historial de cambios (timeline)
- [ ] Sugerencias automáticas basadas en IA

#### Fase 3 (Q4 2026)
- [ ] Integración de API de osTicket en tiempo real
- [ ] Notificaciones push para SLA críticos
- [ ] Dashboard personalizable (drag & drop)
- [ ] Mobile app nativa

#### Fase 4 (2027)
- [ ] Predicción de SLA rotos (ML)
- [ ] Chatbot para auto-gestión
- [ ] Portal clientexperimental

---

### 9. MÉTRICAS DE ÉXITO

| Métrica | Target | Cómo Medir |
|---------|--------|-----------|
| Time to Find Ticket | <30s | Analytics de navegación |
| Dashboard Load Time | <2s | Lighthouse, WebVitals |
| Filter Usage | >60% of users | Heatmaps |
| Export CSV Usage | >40% weekly | Server logs |
| SLA Compliance | +20% (from 48% to 68%) | Compare before/after |
| User Satisfaction | >4.2/5 | NPS surveys |

---

### 10. CONCLUSIÓN

El dashboard ha sido diseñado como una **herramienta operacional profesional** que:

✅ **Resuelve el problema:** Centraliza 2 sistemas de tickets en 1 interfaz unificada  
✅ **Mejora visibilidad:** KPIs en tiempo real de SLA y performance  
✅ **Acelera decisiones:** Filtros y análisis permiten identificar problemas en segundos  
✅ **Escala:** Arquitectura modular permite agregar features sin redesign  
✅ **Construye confianza:** Diseño profesional refleja seriedad de la empresa

**Próximos pasos:** Recopilar feedback de usuarios en primeras 2 semanas, iterar basado en uso real.

---

*Documento preparado por: Especialista UX/Design  
Fecha: Mayo 2026  
Versión: 1.0*
