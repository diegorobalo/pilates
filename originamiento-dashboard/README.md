# Originamiento Dashboard

Dashboard interactivo con Agente de IA para Originamiento de Argensun Foods. Integración con Odoo y Claude API.

## 🚀 Características

- **Dashboard interactivo** con métricas en tiempo real
- **Gestión de productos** con seguimiento de stock
- **Seguimiento de transportistas y contactos**
- **Análisis de pedidos** (venta y compra)
- **Agente de IA** (Claude) para responder preguntas sobre los datos
- **Sincronización automática** desde Odoo
- **Autenticación segura** con JWT

## 📋 Requisitos Previos

- Docker y Docker Compose instalados
- Credenciales de Odoo (URL, usuario, contraseña)
- API Key de Claude (Anthropic)

## ⚙️ Configuración

### 1. Copiar variables de entorno

```bash
cd originamiento-dashboard
cp .env.example .env
```

### 2. Completar el archivo .env

```env
# Odoo Configuration
ODOO_URL=https://odoo-originamiento.argensun.com.ar
ODOO_USER=tu_email@example.com
ODOO_PASSWORD=tu_contraseña
ODOO_DB=originamiento

# Claude API
ANTHROPIC_API_KEY=sk-ant-xxx

# PostgreSQL
DATABASE_URL=postgresql://originamiento:password@db:5432/originamiento
DB_USER=originamiento
DB_PASSWORD=password
DB_NAME=originamiento

# Backend
BACKEND_HOST=0.0.0.0
BACKEND_PORT=8000
SECRET_KEY=tu-clave-secreta

# Frontend
VITE_API_URL=http://localhost:8000
```

## 🚀 Ejecución Local

### ⭐ OPCIÓN 1: AUTOMÁTICA (¡MÁS FÁCIL!)

**Windows:**
1. Haz doble-clic en `START_HERE.cmd`
2. El navegador se abrirá automáticamente en http://localhost:3000

**Mac/Linux:**
```bash
chmod +x start.sh
./start.sh
```

### OPCIÓN 2: Manual con Docker Compose

```bash
# Levantar todos los servicios
docker-compose up

# O en background
docker-compose up -d
```

La aplicación estará disponible en:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs
- **Database**: localhost:5432

### Credenciales Demo

- **Usuario**: demo
- **Contraseña**: demo123

### Scripts Disponibles

- `START_HERE.cmd` - **Inicia todo automáticamente** (Windows)
- `setup.bat` - Configura el archivo .env inicialmente (Windows)
- `start.ps1` - Script PowerShell (Windows)
- `start.sh` - Script Bash (Mac/Linux)
- `PRIMEROS_PASOS.txt` - Guía paso a paso
- `QUICK_START.md` - Guía rápida

## 📁 Estructura del Proyecto

```
originamiento-dashboard/
├── backend/                 # API FastAPI
│   ├── app/
│   │   ├── api/            # Rutas API
│   │   ├── models/         # BD y schemas
│   │   ├── services/       # Lógica de negocio
│   │   └── config.py       # Configuración
│   ├── main.py             # Entry point
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/               # Aplicación React
│   ├── src/
│   │   ├── pages/          # Páginas principales
│   │   ├── components/     # Componentes reutilizables
│   │   └── services/       # Llamadas API
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml      # Orquestación
└── .env.example           # Variables de entorno
```

## 🔌 API Endpoints Principales

### Autenticación
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Info usuario actual

### Productos
- `GET /api/products` - Listar productos
- `GET /api/products/{id}` - Detalle producto
- `GET /api/products/low-stock/list` - Productos con stock bajo
- `POST /api/products/sync` - Sincronizar desde Odoo

### Transportistas
- `GET /api/partners` - Listar contactos
- `GET /api/partners/transporters/list` - Solo transportistas
- `POST /api/partners/sync` - Sincronizar desde Odoo

### Pedidos
- `GET /api/orders` - Listar pedidos
- `GET /api/orders/pending/list` - Solo pendientes
- `GET /api/orders/summary/metrics` - Métricas
- `POST /api/orders/sync` - Sincronizar desde Odoo

### Agente IA
- `POST /api/ai/ask` - Hacer pregunta al agente
- `GET /api/ai/conversation/history` - Historial de chat
- `POST /api/ai/conversation/reset` - Resetear conversación
- `POST /api/ai/analyze/products` - Análisis automático de productos
- `POST /api/ai/analyze/orders` - Análisis automático de pedidos

## 🗄️ Base de Datos

Las tablas se crean automáticamente al iniciar el backend. Incluyen:
- **users** - Usuarios del sistema
- **products** - Caché de productos de Odoo
- **partners** - Caché de contactos de Odoo
- **orders** - Caché de pedidos de Odoo
- **chat_history** - Historial de conversaciones con IA

## 🤖 Agente de IA

El agente Claude responde preguntas sobre:
- Cantidad y estado de productos
- Niveles de stock
- Pedidos pendientes y cumplidos
- Transportistas disponibles
- Análisis de tendencias
- Recomendaciones operativas

## 🚢 Migración a Servidor

### Opción 1: Usando Docker Compose (Recomendado)

1. Copiar la carpeta `originamiento-dashboard` al servidor
2. SSH al servidor y navegar a la carpeta
3. Crear archivo `.env` con credenciales del servidor
4. Ejecutar:
   ```bash
   docker-compose up -d
   ```

### Opción 2: Manual

1. Instalar Python 3.11, Node 20, PostgreSQL
2. Backend:
   ```bash
   cd backend
   pip install -r requirements.txt
   uvicorn main:app --host 0.0.0.0 --port 8000
   ```
3. Frontend:
   ```bash
   cd frontend
   npm install
   npm run build
   npm run preview -- --host 0.0.0.0
   ```

## 🔧 Troubleshooting

### Error de conexión a Odoo
- Verificar URL de Odoo, usuario y contraseña en `.env`
- Verificar que la API REST esté habilitada en Odoo

### Error de Claude API
- Verificar que `ANTHROPIC_API_KEY` es válido
- Verificar cuota de API de Claude

### BD no sincroniza
- Ejecutar `POST /api/products/sync` manualmente
- Verificar logs del backend: `docker-compose logs backend`

## 📊 Monitoreo

Ver logs:
```bash
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f db
```

Ver estado de servicios:
```bash
docker-compose ps
```

## 🔐 Seguridad

- Cambiar `SECRET_KEY` en producción
- Usar HTTPS en servidor
- Configurar CORS adecuadamente
- Limitar rate limits en API

## 📝 Licencia

Proyecto propietario de Argensun Foods

## 📧 Soporte

Para problemas o preguntas, contactar al equipo de desarrollo.
