# 📊 Dashboard de Gestión de Reclamos - ArgeSun

Un dashboard profesional, moderno y totalmente responsivo para gestionar y analizar reclamos/tickets provenientes de osTicket.

## ✨ Características Principales

- **Dashboard Ejecutivo**: KPIs en tiempo real, gráficos de distribución y actividad reciente
- **Tabla de Reclamos**: Visualización completa con búsqueda avanzada y filtros dinámicos
- **Análisis & Reportes**: Gráficos estadísticos, performance de agentes, análisis de causas
- **Importar CSV**: Carga fácil de archivos CSV exportados desde osTicket
- **Dark Mode**: Soporte completo para modo oscuro
- **Responsive**: Funciona perfectamente en desktop, tablet y mobile
- **Animaciones Suaves**: Transiciones elegantes y micro-interacciones profesionales

## 🚀 Instalación Rápida

### 1. Clonar o descargar el proyecto
```bash
cd C:\Users\diego.robalo\Documents\CLAUDIA\dashboard
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```

El dashboard estará disponible en: **http://localhost:5173**

## 📦 Estructura del Proyecto

```
dashboard/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Encabezado con búsqueda y controles
│   │   └── Sidebar.tsx         # Barra lateral de navegación
│   ├── pages/
│   │   ├── Dashboard.tsx       # Página principal con KPIs
│   │   ├── TicketsTable.tsx    # Tabla de reclamos con filtros
│   │   └── Analytics.tsx       # Análisis y reportes
│   ├── hooks/
│   │   └── useTicketData.ts    # Hook para manejo de datos
│   ├── App.tsx                 # Componente principal
│   ├── main.tsx                # Entry point
│   └── index.css               # Estilos globales
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 💻 Cómo Usar

### Importar datos desde osTicket

1. **Exportar CSV desde osTicket** (ambos sistemas)
2. **Click en el botón Upload** (arriba a la derecha)
3. El dashboard se actualizará automáticamente con los nuevos datos

### Navegación

- **Dashboard**: Vista general con KPIs y gráficos principales
- **Reclamos**: Tabla completa con todas las opciones de filtrado
- **Análisis**: Reportes detallados y gráficos estadísticos

### Filtros Disponibles

En la sección de Reclamos puedes filtrar por:
- **Estado** (Open, Pendiente Respuesta, Resuelto)
- **Cliente** (seleccionar de la lista)
- **Prioridad** (Alta, Normal, Baja)
- **Solo Atrasados**: Toggle para ver solo tickets fuera de SLA
- **Solo Sin Respuesta**: Toggle para ver tickets sin respuesta

### Exportar Reportes

Haz click en el botón **"Exportar"** en la tabla de reclamos para descargar los datos filtrados en formato CSV.

## 🎨 Diseño & Estilos

**Paleta de Colores:**
- Azul Profesional: #1E3A8A (primario)
- Rojo/Alertas: #DC2626 (urgencia)
- Naranja/Warnings: #F97316 (caución)
- Verde/Success: #16A34A (resuelto)

**Tipografía:**
- Display: Playfair Display (headings)
- Body: Geist (textos)

**Animaciones:**
- Transiciones suaves en 300ms
- Fade-ins en carga de componentes
- Hover states elegantes
- Stagger animations en listas

## 🔧 Tecnologías

- **React 18** - Framework de interfaz
- **TypeScript** - Type safety
- **Vite** - Build tool rápido
- **TailwindCSS** - Estilos utilitarios
- **ApexCharts** - Gráficos interactivos
- **Framer Motion** - Animaciones
- **Lucide Icons** - Iconografía
- **date-fns** - Manejo de fechas
- **PapaParse** - Parseo de CSV

## 📊 Campos CSV Esperados

El CSV debe contener estas columnas (separador: `;`):

```
Número de Ticket
Fecha de creación
Asunto
De
De correo electrónico
Prioridad
Departamento
Temas de ayuda
Fuente
Estado actual
Última actualización
Fecha de Vencimiento
Atrasado
Respondió
Agente asignado
Equipo asignado
Cuenta de hilos
Recuento de datos adjuntos
```

## 🚀 Build para Producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`.

## 🎯 Roadmap Futuro

- [ ] Integración directa con API de osTicket
- [ ] Sistema de usuarios con permisos
- [ ] Notificaciones en tiempo real
- [ ] Exportación a PDF
- [ ] Gráficos personalizables
- [ ] Dashboard colaborativo
- [ ] Historial de cambios
- [ ] Comentarios en tickets
- [ ] Mobile app nativa

## 📝 Licencia

Proyecto personalizado para ArgeSun.

## 🤝 Soporte

Para reportar bugs o solicitar features, contacta al equipo de desarrollo.

---

**Versión:** 1.0.0  
**Última actualización:** Mayo 2026  
**Autor:** ArgeSun Sistemas
