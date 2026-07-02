# 🧘 PILATES - Sistema de Reserva de Camas

**Aplicación web full-stack para gestión de reservas de camas en clases de pilates.**

---

## 📂 Estructura del Proyecto

```
PILATES/
├── docs/
│   └── DESIGN_SPEC.md          # Especificación completa del proyecto
├── mockups/
│   └── vista-camas.html         # Prototipo visual de la vista de camas
├── frontend/                     # (Por crear) React app
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/                      # (Por crear) Node.js API
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── package.json
└── README.md                     # Este archivo
```

---

## 🎯 Objetivo

Crear una plataforma que permita:

### 👤 Para Alumnas:
- ✅ Login simple por teléfono
- ✅ Ver calendario de clases disponibles
- ✅ Reservar/cancelar camas
- ✅ Ver estado de reservas (Confirmada, Pendiente, Rechazada)
- ✅ Ver historial de asistencias

### 👑 Para la Dueña:
- ✅ Gestionar alumnas (crear, editar, eliminar)
- ✅ Configurar planes semanales de cada alumna
- ✅ Crear/editar horarios de clases (máx 6 camas)
- ✅ Validar solicitudes de reserva (Confirmar/Rechazar)
- ✅ Marcar asistencia en clase (Presente/Ausente)
- ✅ Control de finanzas (pagos, al día, vencidos)

---

## 🏗️ Stack Tecnológico

| Componente | Tecnología |
|------------|-----------|
| Frontend | React / Vue.js |
| Backend | Node.js + Express |
| Database | Turso (SQLite) / PostgreSQL |
| Auth | JWT + SMS |
| Hosting | Vercel (frontend) + Railway/Heroku (backend) |

---

## 🎨 Características Visuales

### Dashboard de Dueña
- **Vista de Camas:** 6 camas visuales con estado en tiempo real
  - 🟢 Verde = Presente
  - 🔴 Rojo = Ausente
  - ⚪ Gris = Vacía
- **Notificaciones:** Banner rojo para solicitudes pendientes
- **Finanzas:** Tabla de alumnas con estado de pago

### Portal de Alumnas
- **Calendario:** Próximas 30 días con clases disponibles
- **Estados:** ✓ Confirmada | ⏳ Pendiente | ✕ Rechazada
- **Acciones:** Reservar/Cancelar (hasta 1h antes)

---

## 📋 Flujo de Reserva

```
1. Alumna solicita clase → ⏳ PENDIENTE
        ↓
2. Dueña ve notificación → lista de solicitudes
        ↓
3. Dueña confirma/rechaza → ✓ CONFIRMADA o ✕ RECHAZADA
        ↓
4. Alumna ve estado actualizado
        ↓
5. Durante clase: dueña marca asistencia
        ↓
6. Historial registrado para seguros
```

---

## 💾 Estructura de Datos (Resumida)

### Usuarios
- `id`, `nombre`, `teléfono`, `DNI`
- `datos_emergencia`, `alergias`, `restricciones_médicas`
- `tipo` (ALUMNA, DUEÑA)

### Planes Semanales
- `alumna_id`, `día_semana`, `hora`

### Reservas
- `alumna_id`, `horario_id`, `estado` (PENDIENTE, CONFIRMADA, RECHAZADA)

### Asistencia
- `alumna_id`, `horario_id`, `presente` (boolean)

### Pagos
- `alumna_id`, `monto`, `fecha_pago`, `mes_referencia`

---

## 🚀 Próximos Pasos

1. **Brainstorming:** ✅ COMPLETADO
2. **Design Spec:** ✅ COMPLETADO
3. **Mockups:** ✅ COMPLETADO
4. **Implementación Frontend:** ✅ COMPLETADO
5. **Implementación Backend:** ✅ COMPLETADO
6. **Testing & QA:** ✅ COMPLETADO
7. **Deployment Configuration:** ✅ COMPLETADO

---

## 📦 Deployment

The application is configured for deployment across multiple platforms:

- **Frontend**: Vercel (automatic deployment from GitHub)
- **Backend**: Railway (Node.js hosting)
- **Database**: Turso (SQLite Cloud)

### Quick Start Deployment

See [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for complete deployment instructions including:
- Database setup with Turso
- Backend deployment to Railway
- Frontend deployment to Vercel
- Environment configuration
- Troubleshooting guide

### Environment Setup

Create environment files:

**Backend** (`.env.production`):
```
NODE_ENV=production
PORT=5000
DATABASE_URL=libsql://YOUR_ACCOUNT.turso.io/PILATES-DB?authToken=YOUR_TOKEN
JWT_SECRET=your_very_strong_random_secret_here
JWT_EXPIRE=7d
PHONE_VERIFICATION_ENABLED=false
```

**Frontend** (`.env.production`):
```
VITE_API_URL=https://pilates-backend.railway.app/api
VITE_APP_NAME=PILATES
VITE_PUBLIC_URL=https://pilates-app.vercel.app
```

See `.env.production.example` files for more options.

---

## 📱 Responsiveness

- ✅ Desktop (1920px+)
- ✅ Laptop (1024px+)
- ✅ Tablet (768px+)
- ✅ Mobile (< 768px)

---

## 🔒 Seguridad

- JWT authentication con refresh tokens
- Datos médicos encriptados
- Row-level security (usuarios solo ven sus datos)
- Auditoría de acciones (quién marcó asistencia, etc.)

---

## 📞 Contacto & Notas

**Desarrollado por:** Diego Robalo  
**Última actualización:** 02 Julio 2026  
**Estado:** 🟢 Diseño Aprobado - Listo para Desarrollo

---

## 📖 Documentación

- **[DESIGN_SPEC.md](./docs/DESIGN_SPEC.md)** — Especificación técnica completa
- **[vista-camas.html](./mockups/vista-camas.html)** — Prototipo visual

