# PILATES - Sistema de Reserva de Camas
## Design Specification v1.0

**Fecha:** 02 Julio 2026  
**Proyecto:** Aplicación de Reserva de Camas para Clases de Pilates  
**Dueño:** Instructor/Dueña de Local de Pilates  

---

## 📋 Resumen Ejecutivo

Sistema web full-stack que permite:
- **Alumnas:** Reservar/cancelar camas en clases de pilates
- **Dueña:** Gestionar reservas, confirmarlas, y controlar finanzas & asistencia

Con flujo de validación de reservas y control completo de asistencia para seguros.

---

## 🎯 Requerimientos Funcionales

### A. PORTAL DE ALUMNAS

#### 1. Autenticación
- Login por **número telefónico** (vinculado por la dueña)
- Sin contraseña (acceso simple y rápido)
- Sistema de verificación vía SMS o código

#### 2. Visualización de Clases
- Calendario mensual de clases disponibles
- Horarios variables por día (no fijos)
- Ver próximas 30 días

#### 3. Planes Semanales
- Clases automáticas según plan (ej: "Lunes y Miércoles 17:00")
- Mostradas como **confirmadas automáticamente**
- Pueden cancelarse hasta **1 hora antes**

#### 4. Reserva de Clases Adicionales
- Solicitar reserva en clases no incluidas en su plan
- Estado: **⏳ Pendiente** hasta que dueña confirme
- Puede cancelar hasta 1h antes (incluso en estado pendiente)

#### 5. Estados de Reserva (Alumna)
- ✓ **Confirmada** — puede asistir
- ⏳ **Pendiente** — esperando validación de dueña
- ✕ **Rechazada** — dueña no permitió acceso
- 📊 Historial de asistencias pasadas

---

### B. DASHBOARD DE DUEÑA

#### 1. Gestión de Alumnas
- CRUD: crear, editar, eliminar alumnas
- Datos: nombre, teléfono, DNI, datos emergencia, alergias, restricciones médicas
- Asignar/modificar plan semanal de cada alumna

#### 2. Gestión de Horarios
- Crear horarios de clases por día
- Horarios variables (no recurrentes automáticos)
- Máximo 6 camas por clase

#### 3. Reservas Pendientes
- Notificación roja cuando hay solicitudes nuevas
- Lista de pedidos con botones "Confirmar" / "Rechazar"
- Update en tiempo real

#### 4. Vista de Camas en Vivo (Clase)
- **6 camas visuales** con estado en tiempo real
- Para cada cama: nombre alumna, plan, estado (Presente/Ausente/Vacía)
- **Un click** para marcar Presente/Ausente
- Resumen automático: presentes, ausentes, pendientes, vacías

#### 5. Asistencia
- Marcar presentes/ausentes durante/después de clase
- Historial completo por alumna
- Registro para seguros

#### 6. Módulo Finanzas
- Listado de alumnas con estado de pago
- Estados: ✓ Al Día | ⚠️ Vencida | ⏳ Pendiente
- Registrar pagos manualmente
- Historial de pagos por alumna
- KPIs: Total cobrado, al día, vencidas, pendiente
- Opción: enviar recordatorios (SMS/notificación)

---

## 🏗️ Arquitectura

### Stack Tecnológico
- **Frontend:** React / Vue.js (responsive, mobile-first)
- **Backend:** Node.js + Express
- **Database:** Turso (SQLite) / PostgreSQL
- **Auth:** Token-based (JWT)
- **Hosting:** Vercel (frontend) + Heroku/Railway (backend)

### Estructura de Datos

#### Usuarios
```
- id (PK)
- nombre
- telefono (único, vinculado)
- dni
- tipo (ALUMNA, DUEÑA, ADMIN)
- estado (ACTIVA, INACTIVA)
- datos_emergencia (nombre, telefono)
- alergias (texto)
- restricciones_medicas (texto)
- fecha_registro
```

#### Planes Semanales
```
- id (PK)
- alumna_id (FK)
- dia_semana (0-6, lunes=0)
- hora (HH:MM)
- activo (boolean)
```

#### Horarios de Clase
```
- id (PK)
- fecha (YYYY-MM-DD)
- hora (HH:MM)
- capacidad (6)
- estado (ABIERTA, CERRADA, CANCELADA)
```

#### Reservas
```
- id (PK)
- alumna_id (FK)
- horario_id (FK)
- cama_numero (1-6)
- estado (PENDIENTE, CONFIRMADA, RECHAZADA, CANCELADA)
- fecha_solicitud
- fecha_confirmacion
- confirmada_por (dueña_id)
- razon_rechazo (opcional)
```

#### Asistencia
```
- id (PK)
- alumna_id (FK)
- horario_id (FK)
- presente (boolean)
- fecha_registro
- registrada_por (dueña_id)
```

#### Pagos
```
- id (PK)
- alumna_id (FK)
- monto
- fecha_pago
- mes_referencia (YYYY-MM)
- metodo (EFECTIVO, TRANSFERENCIA, OTRO)
- registrada_por (dueña_id)
```

---

## 🎨 Diseño Visual

### Colores
- **Primario:** Púrpura/Azul (`#667eea`, `#764ba2`)
- **Éxito/Presente:** Verde (`#10b981`, `#059669`)
- **Error/Ausente:** Rojo (`#ef4444`, `#dc2626`)
- **Neutral/Vacío:** Gris (`#9ca3af`, `#d1d5db`)

### Componentes Clave

#### Cama Card (Portal Dueña)
- Tarjeta independiente (6 en grid 3x2)
- Gradiente de color según estado
- Contenido completo adentro:
  - Número de cama
  - Estado badge
  - Icono 🛏️
  - Nombre alumna
  - Plan/horario
  - Botón de acción (Marcar Presente/Ausente)
- Animaciones suaves, hover effects

#### Tabla de Alumnas (Finanzas)
- Listado completo con info
- Filtros por estado (Al Día, Vencida, Pendiente)
- Acciones rápidas: Registrar Pago, Ver Detalle, Enviar Recordatorio

#### Notificaciones
- Banner rojo en dashboard: "X Solicitudes Pendientes"
- Lista de pedidos con botones Confirmar/Rechazar

---

## 📱 Responsiveness

- **Desktop (1920px+):** Full layout
- **Laptop (1024px+):** 3 camas por fila
- **Tablet (768px+):** 2 camas por fila
- **Mobile (<768px):** 1 cama por fila, stacked layout

---

## 🔒 Seguridad & Datos

1. **Autenticación:** JWT con refresh tokens
2. **Contraseñas:** Hashed (bcrypt)
3. **Datos Médicos:** Almacenados encriptados
4. **Acceso:** Row-level security (alumna solo ve sus datos)
5. **Auditoría:** Registro de quién marcó asistencia, quién registró pago

---

## 📊 Flujo de Reserva (Completo)

1. **Alumna solicita** clase adicional → estado: **⏳ Pendiente**
2. **Dueña recibe notificación** → lista de solicitudes
3. **Dueña confirma/rechaza** → estado: **✓ Confirmada** o **✕ Rechazada**
4. **Alumna ve estado actualizado** en su calendario
5. **Hasta 1h antes:** alumna puede cancelar (incluso si pendiente)
6. **Durante clase:** dueña marca asistencia (Presente/Ausente)
7. **Historial:** registrado para seguros

---

## 📈 MVP (Mínimo Viable)

**Fase 1 - Core:**
- ✅ Login por teléfono
- ✅ Ver calendarios (dueña y alumna)
- ✅ Reservar/cancelar
- ✅ Confirmar/rechazar (dueña)
- ✅ Marcar asistencia
- ✅ Vista de 6 camas

**Fase 2 - Finanzas:**
- ✅ Control de pagos
- ✅ Estados de pago
- ✅ Recordatorios

**Fase 3 - Enhancements:**
- Notificaciones push
- SMS recordatorios
- Reportes
- Dashboard analytics

---

## ✅ Criterios de Éxito

- [ ] Sistema en producción y accesible
- [ ] Dueña puede crear/editar alumnas y horarios
- [ ] Alumnas pueden reservar y ver estado
- [ ] Vista de camas funcional y visual
- [ ] Asistencia registrada correctamente
- [ ] Control de finanzas operativo
- [ ] Responsivo en móvil y desktop
- [ ] Notificaciones en tiempo real

---

**Estado:** 🟢 Diseño Aprobado — Listo para Implementación
