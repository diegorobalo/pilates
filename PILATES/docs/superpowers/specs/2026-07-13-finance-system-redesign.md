# Redesign: Sistema Financiero Pilates

**Fecha:** 2026-07-13  
**Estado:** Aprobado  
**Objetivo:** Reemplazar el sistema financiero actual con un sistema centralizado, confiable y fácil de usar para gestionar ingresos, gastos y pagos.

---

## Problema Actual

El sistema financiero existente tiene issues críticos:
- No suma correctamente (transacciones duplicadas/faltantes)
- No se actualiza en tiempo real
- Información desorganizada (pagos, gastos, instructores en tablas separadas)
- Difícil de auditar
- No hay reportes claros

---

## Solución: Sistema Transaccional Centralizado

### Arquitectura

**Una tabla central `transacciones`** que registra TODOS los movimientos financieros:
- Pagos de alumnos
- Gastos operacionales
- Pagos a instructores
- Otros ingresos

Cada transacción tiene un `tipo`, `categoría`, `monto`, `fecha`, y metadata para auditoría.

---

## Especificación Técnica

### Base de Datos: Tabla `transacciones`

```sql
CREATE TABLE transacciones (
  id TEXT PRIMARY KEY,
  tipo TEXT NOT NULL, -- 'INGRESO_ALUMNA' | 'GASTO' | 'PAGO_INSTRUCTOR' | 'INGRESO_OTRO'
  categoria TEXT NOT NULL, -- 'Empleados', 'Servicios', 'Mantenimiento', etc.
  subcategoria TEXT, -- opcional: 'Luz', 'Agua', etc.
  monto DECIMAL NOT NULL, -- siempre positivo
  fecha TEXT NOT NULL, -- YYYY-MM-DD
  mes_referencia TEXT NOT NULL, -- YYYY-MM para reportes
  
  -- Foreign keys opcionales
  alumna_id TEXT, -- si tipo = 'INGRESO_ALUMNA'
  instructor_id TEXT, -- si tipo = 'PAGO_INSTRUCTOR'
  
  -- Metadata
  descripcion TEXT,
  registrada_por TEXT NOT NULL, -- UUID del usuario (DUEÑA/ADMIN)
  comprobante TEXT, -- referencia a archivo/comprobante
  estado TEXT DEFAULT 'REGISTRADA', -- 'REGISTRADA' | 'PENDIENTE' | 'CANCELADA'
  
  created_at TEXT,
  updated_at TEXT
);

CREATE INDEX idx_transacciones_mes ON transacciones(mes_referencia);
CREATE INDEX idx_transacciones_tipo ON transacciones(tipo);
CREATE INDEX idx_transacciones_categoria ON transacciones(categoria);
CREATE INDEX idx_transacciones_alumna ON transacciones(alumna_id);
CREATE INDEX idx_transacciones_instructor ON transacciones(instructor_id);
```

### Categorías Estándar

Prefabricadas en la app:
- Empleados/Sueldos
- Servicios (luz, agua, internet, teléfono)
- Mantenimiento (equipos, limpieza, reparaciones)
- Materiales
- Otros

**Categorías Custom:** DUEÑA y ADMIN pueden crear nuevas.

### Tabla `categorias`

```sql
CREATE TABLE categorias (
  id TEXT PRIMARY KEY,
  nombre TEXT NOT NULL UNIQUE,
  tipo TEXT, -- opcional, para agrupar
  es_predefinida BOOLEAN DEFAULT 0,
  creada_por TEXT,
  created_at TEXT
);
```

---

## Frontend: Vistas

### 1. **Dashboard Resumen Financiero Mensual**

**Componente:** `FinanceDashboard.jsx`

Muestra KPIs para el mes seleccionado:
- **Ingresos totales** (alumnos + otros)
- **Gastos totales** (desglosado por categoría)
- **Balance** (Ingresos - Gastos)
- Selector de mes/año
- Botón: "Registrar Transacción"

**Layout:**
```
┌─────────────────────────────────────────┐
│ Mes: [Oct 2026] [< >]                   │
├─────────────────────────────────────────┤
│ INGRESOS        │ GASTOS      │ BALANCE │
│ $15,500         │ $11,500     │ +$4,000 │
│ (alumnos)       │ (operaciones)         │
└─────────────────────────────────────────┘
```

### 2. **Estado de Pagos de Alumnos**

**Componente:** `PaymentStatus.jsx`

Tabla con:
- Nombre alumna
- Monto que debe / pagó este mes
- Estado: "Al día" ✅ / "Debe $XXX" ❌ / "Pagó en exceso" ➕
- Últimos 3 pagos (fechas y montos)
- Botón por fila: "Registrar pago"

Filtros:
- Por estado (Al día / Debe / En exceso)
- Búsqueda por nombre
- Mes seleccionado

### 3. **Gastos por Categoría**

**Componente:** `ExpenseBreakdown.jsx`

Muestra:
- Tabla: Categoría | Monto | Porcentaje del total
- Gráfico de pastel (colorido, responsivo)
- Click en categoría → expandir y ver transacciones individuales
- Editar/eliminar transacciones individuales

### 4. **Registrar Transacción (Modal)**

**Componente:** `TransactionModal.jsx`

Formulario dinámico según tipo:

**Campos comunes:**
- Tipo: Dropdown (Ingreso Alumna / Gasto / Pago Instructor / Otro Ingreso)
- Categoría: Dropdown (estándar + crear nueva)
- Monto: Input número
- Fecha: Date picker
- Descripción: Textarea
- Comprobante: Upload (opcional)

**Campos condicionales:**
- Si Tipo = "INGRESO_ALUMNA" → Selector de alumna
- Si Tipo = "PAGO_INSTRUCTOR" → Selector de instructor + auto-calc monto (horas × tarifa)

Validaciones:
- Monto > 0
- Fecha no futura
- Categoría requerida

---

## Backend: Endpoints

### Transacciones

```
POST   /api/finances/transacciones
       Body: { tipo, categoria, monto, fecha, descripcion, alumna_id?, instructor_id?, comprobante? }
       Response: { id, ...transaccion }

GET    /api/finances/transacciones
       Query: ?mes=YYYY-MM&tipo=INGRESO_ALUMNA&categoria=Servicios&skip=0&limit=50
       Response: { total, transacciones: [...] }

PUT    /api/finances/transacciones/:id
       Body: { categoria, monto, fecha, descripcion }
       Response: { ...transaccion }

DELETE /api/finances/transacciones/:id
       Response: { success: true }
```

### Reportes

```
GET    /api/finances/resumen?mes=YYYY-MM
       Response: {
         mes: "2026-10",
         ingresos: { alumnos: 15000, otros: 500, total: 15500 },
         gastos: { total: 11500, por_categoria: {...} },
         balance: 4000
       }

GET    /api/finances/pagos-alumnos?mes=YYYY-MM
       Response: {
         mes: "2026-10",
         alumnos: [
           { id, nombre, debe: 5000, pago: 0, estado: 'DEBE' },
           ...
         ]
       }

GET    /api/finances/gastos-por-categoria?mes=YYYY-MM
       Response: {
         mes: "2026-10",
         categorias: [
           { nombre: 'Empleados', monto: 3000, porcentaje: 26 },
           ...
         ]
       }
```

### Categorías

```
POST   /api/finances/categorias
       Body: { nombre }
       Response: { id, nombre }

GET    /api/finances/categorias
       Response: { predefinidas: [...], custom: [...] }
```

---

## Flujos de Usuario

### Flujo 1: Registrar Pago de Alumna

1. DUEÑA/ADMIN abre Dashboard
2. Click "Registrar Transacción"
3. Tipo: "INGRESO_ALUMNA"
4. Selecciona alumna
5. Ingresa monto
6. Selecciona fecha
7. Guarda
8. → Transacción se crea, balance se actualiza al instante

### Flujo 2: Registrar Gasto

1. Click "Registrar Transacción"
2. Tipo: "GASTO"
3. Categoría: Selecciona o crea nueva
4. Ingresa monto, fecha, descripción
5. Guarda
6. → Balance y gastos por categoría se actualizan

### Flujo 3: Ver Estado de Pagos

1. Click "Estado de Pagos"
2. Ve tabla de alumnos con estado
3. Puede ver historial de cada una
4. Click "Registrar pago" en fila → abre modal de transacción

### Flujo 4: Analizar Gastos

1. Click "Desglose de Gastos"
2. Ve gráfico y tabla de categorías
3. Click en categoría → ve detalles de transacciones
4. Puede editar/eliminar transacciones individuales

---

## Seguridad & Auditoría

- Solo DUEÑA y ADMIN pueden ver/registrar transacciones
- Cada transacción registra `registrada_por` (usuario que la creó)
- Historial completo: `created_at`, `updated_at`, `estado`
- Soft delete: transacciones nunca se eliminan, se marcan como `CANCELADA`
- Validaciones: monto > 0, categoría válida, fecha no futura

---

## Testing

**Casos a verificar:**
1. Crear transacción → balance se actualiza correctamente
2. Editar monto → se recalcula balance y porcentajes
3. Eliminar transacción → balance regresa al estado anterior
4. Múltiples transacciones en un mes → sumas correctas
5. Filtros (mes, tipo, categoría) retornan datos correctos
6. Crear categoría custom → aparece en dropdowns
7. Solo DUEÑA/ADMIN ven datos (test auth)
8. Reportes JSON coinciden con cálculos manuales

---

## Mejoras Futuras (Out of Scope)

- Exportar reportes a PDF/Excel
- Proyecciones de flujo de caja
- Alertas automáticas (gasto alto, alumna mora, etc.)
- Integración con sistema bancario
- Facturación electrónica

---

## Beneficios vs. Sistema Anterior

| Aspecto | Antes | Ahora |
|---------|-------|-------|
| Fuente de verdad | Múltiples tablas | Una tabla centralizada |
| Sumas | Inconsistentes | Automáticas y correctas |
| Actualización | Manual | En tiempo real |
| Auditoría | Difícil | Completa (quién, cuándo, qué) |
| Reportes | Ninguno | 3 vistas principales |
| Errores | Comunes | Prevenidos por validaciones |
