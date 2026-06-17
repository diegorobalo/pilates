# PILETERO: Sistema de Gestión para Limpieza de Piscinas

**Documento de Especificación de Diseño**  
Fecha: 17 de Junio de 2026  
Proyecto: PILETERO  
Versión: 1.0

---

## 1. Resumen Ejecutivo

PILETERO es una aplicación web **offline-first** diseñada para que Fede (técnico de limpieza de piscinas) registre su trabajo diario de forma simple e intuitiva, sin depender de conexión constante a internet ni de servidores externos.

**Objetivo:** Que Fede pueda trabajar de forma completamente independiente, cargando datos en el celular mientras está en campo, y sincronizando automáticamente cuando llega a casa.

**Público objetivo:** Una sola persona (Fede) sin experiencia técnica, que necesita una herramienta intuitiva y robusta.

---

## 2. Contexto y Necesidades

### 2.1 Situación Actual
- Fede tiene 10 clientes actualmente (crecerá a 30+ en temporada alta)
- Realiza visitas diarias a diferentes domicilios
- Necesita registrar datos técnicos (parámetros del agua, tareas realizadas, químicos usados, fotos)
- Requiere control de pagos y generación de reportes
- Actualmente sin sistema informatizado

### 2.2 Restricciones y Contexto
- **Presupuesto:** Muy ajustado (0 pesos en herramientas)
- **Timeline:** 3-4 semanas para MVP funcional
- **Usuarios:** Solo Fede (sin empleados por ahora)
- **Independencia:** Fede debe poder usar la app sin ayuda constante
- **Ubicación:** Fede estará en campo (casas de clientes) durante el día, sin acceso a WiFi

### 2.3 Requisitos No-Funcionales
- La app debe funcionar sin conexión a internet en el celular
- Los datos deben sincronizarse automáticamente cuando hay WiFi disponible
- La interfaz debe ser simple (botones grandes, sin jerga técnica)
- Todos los datos deben quedar en la máquina de Fede (privacidad + seguridad)
- Debe ser fácil de mantener y actualizar

---

## 3. Arquitectura del Sistema

### 3.1 Visión General

```
CELULAR (En campo)               COMPUTADORA (Casa)
├─ App Web Responsive    ◄───────► Node.js Server
├─ SQLite/IndexedDB      ◄───┐     ├─ Express API
└─ Offline-first         ◄───┼─────┤ SQLite Database
                             │     └─ Sincronización
                             │
                      [WiFi Sync]
```

### 3.2 Componentes Principales

#### **A. CELULAR: App Offline-First**

**Características:**
- App web responsive (Chrome/Safari en celular)
- Almacenamiento local con SQLite/IndexedDB
- Funciona 100% offline mientras Fede está en campo
- Interfaz optimizada para manos mojadas y reflejo de sol
- Sincronización automática al detectar WiFi

**Módulos:**
1. **Agenda Diaria:** Lista de clientes a visitar hoy con dirección
2. **Registro de Visita:** Checklist, mediciones, fotos, químicos
3. **Almacenamiento Local:** Base de datos offline
4. **Sincronización:** Automática al conectarse a WiFi

#### **B. COMPUTADORA: Panel de Control**

**Características:**
- App web accesible desde navegador (localhost:3000)
- Servidor Node.js ejecutándose en background
- Acceso a datos sincronizados desde celular
- Interfaz para administración y análisis

**Módulos:**
1. **Dashboard:** Resumen del mes, ingresos, últimas visitas
2. **Gestión de Clientes:** CRUD, historial, editar datos
3. **Finanzas:** Control de pagos, gastos de químicos
4. **Reportes:** Visualización de datos, exportar PDF
5. **Servidor Node.js:** Sincronización, API, BD local

#### **C. SINCRONIZACIÓN**

**Flujo:**
1. Fede carga datos en celular (offline)
2. Los datos se guardan en SQLite local
3. Al llegar a casa, se conecta a WiFi
4. App detecta WiFi automáticamente
5. Comienza sincronización (5-10 segundos)
6. Computadora recibe datos nuevos
7. Computadora envía cambios (precios, clientes nuevos)
8. Celular se actualiza

**Tecnología:** Socket.io para sincronización en tiempo real

---

## 4. Flujo de Datos

### 4.1 Flujo Día a Día de Fede

**Noche anterior (30 minutos):**
1. Abre computadora (en casa)
2. Ingresa a PILETERO en navegador (localhost:3000)
3. Planifica clientes para mañana
4. Revisa datos de cada cliente
5. Conecta celular a WiFi
6. App sincroniza automáticamente

**A la mañana:**
1. Abre app en celular
2. Ve agenda completa (datos sincronizados)
3. Se va a trabajar

**En campo (sin WiFi, sin datos móviles):**
1. Llega a primera piscina
2. Abre app en celular (modo offline)
3. Carga datos de la visita:
   - Checklist: qué tareas hizo
   - Mediciones: pH y cloro
   - Químicos: cantidades usadas
   - Fotos: antes y después
4. Presiona "Terminar Visita"
5. App guarda datos localmente
6. Repite para cada cliente

**Llega a casa (WiFi disponible):**
1. Se conecta a WiFi automáticamente
2. App detecta conexión
3. Sincronización comienza automáticamente
4. Datos se envían a servidor (computadora)
5. Computadora se actualiza con toda la información
6. Fede ve todo listo para mañana

---

## 5. Especificación de Módulos

### 5.1 CELULAR - Agenda Diaria

**Pantalla:** Lista de clientes planificados para hoy

**Elementos:**
- Nombre del cliente
- Dirección (vinculada a Google Maps)
- Hora de visita planificada
- Estado (pendiente, en progreso, completado)
- Botón: "Comenzar visita" → abre formulario

**Interfaz:**
- Botones grandes (mínimo 44x44px)
- Texto grande y legible
- Icono visual para estado (✓, ⏳, ⌛)
- Botón flotante: "Ver todas las rutas"
- Botón flotante: "Siguiente cliente" (abre Maps)

**Comportamiento:**
- Al llegar a cada cliente, Fede toca "Comenzar visita"
- Se abre pantalla de registro

### 5.2 CELULAR - Registro de Visita

**Pantalla:** Formulario para registrar datos de la visita

**Secciones:**

#### A. Tareas Realizadas (Checklist)
- [ ] Pasado de limpiafondo
- [ ] Cepillado de paredes y fondo
- [ ] Limpieza de superficie (sacar hojas)
- [ ] Limpieza del canasto y skimmer
- [ ] Retrolavado y enjuague del filtro

#### B. Mediciones del Agua
- **Cloro (ppm):** Campo numérico
- **pH:** Campo numérico

#### C. Químicos Utilizados
- Cantidad de cloro (ml o gr)
- Cantidad de ácido (ml)
- Otros (si aplica)

#### D. Evidencia
- Botón: Tomar foto "Antes"
- Botón: Tomar foto "Después"
- Galería de fotos capturadas

#### E. Observaciones
- Campo de texto libre (opcional)
- Ejemplos: "Agua cristalina", "Mucha hoja por tormenta", "Filtro necesita revisión"

**Botones de acción:**
- ✅ "Terminar Visita" → Guarda todo localmente
- ← "Volver" → Vuelve a agenda sin guardar

**Comportamiento:**
- Fecha y hora se registran automáticamente
- Las fotos se guardan localmente (no se envían hasta sincronizar)
- Los datos se almacenan en SQLite local
- Todos los campos son obligatorios excepto observaciones

### 5.3 CELULAR - Almacenamiento Local

**Tecnología:** SQLite.js o IndexedDB

**Esquema:**
```
CLIENTES
├─ id
├─ nombre
├─ direccion
├─ telefono
├─ volumen_litros
├─ tipo_construccion
└─ notas_acceso

VISITAS
├─ id
├─ cliente_id
├─ fecha
├─ hora_inicio
├─ hora_fin
├─ tareas (JSON array)
├─ cloro (número)
├─ ph (número)
├─ quimicos_usados (JSON)
├─ observaciones
└─ fotos (referencias a archivos)

FOTOS
├─ id
├─ visita_id
├─ tipo (antes/despues)
├─ datos (base64 o blob)
└─ fecha
```

### 5.4 CELULAR - Sincronización

**Activador:** Conexión a WiFi (automático)

**Proceso:**
1. App detecta WiFi disponible
2. Se intenta conectar a servidor local (computadora)
3. Si conecta:
   - Envía todos los datos nuevos (visitas + fotos)
   - Descarga cambios (clientes nuevos, precios actualizados)
   - Guarda cambios localmente
   - Marca datos como "sincronizados"
4. Si no conecta:
   - Sigue funcionando offline
   - Reintenta cada 30 segundos

**Tiempo estimado:** 5-10 segundos (depende de cantidad de fotos)

---

## 6. Especificación Computadora

### 6.1 Dashboard

**Pantalla:** Resumen visual del mes

**Componentes:**

#### Cards de KPIs
- Total de ingresos del mes
- Dinero pagado
- Dinero pendiente de cobro
- Visitas realizadas

#### Tabla de Clientes por Cobrar
- Nombre cliente
- Monto adeudado
- Estado (Pagado, Pendiente, Parcial)
- Botón: "Marcar pagado"

#### Gráfico: Últimas Visitas (5 días)
- Gráfico de barras horizontal
- X: Nombre cliente
- Y: Cantidad visitas

#### Acciones Rápidas
- Botón: "Gestionar Clientes"
- Botón: "Ver Reportes"
- Botón: "Ajustar Precios"

### 6.2 Gestión de Clientes

**Pantalla:** CRUD completo de clientes

**Funcionalidades:**
- **Ver:** Tabla de todos los clientes con datos principales
- **Crear:** Formulario para nuevo cliente
- **Editar:** Actualizar datos existentes
- **Eliminar:** Dar de baja cliente (soft delete)
- **Historial:** Ver todas las visitas del cliente

**Datos de Cliente:**
- Nombre
- Dirección
- Teléfono
- Volumen piscina (litros)
- Tipo construcción (fibra, material, pintada)
- Equipamiento (con/sin filtro)
- Modelo de filtro
- Tipo de abono (Mano de obra / Todo incluido)
- Precio abono mensual
- Días de visita programados
- Notas de acceso

### 6.3 Finanzas

**Pantalla:** Control de pagos y análisis de ingresos/gastos

**Componentes:**

#### Resumen Financiero Mensual
- Total facturado
- Total pagado
- Total pendiente
- Gastos en químicos
- Ganancia neta

#### Control de Pagos por Cliente
- Tabla: Cliente | Monto | Estado | Fecha última visita
- Botón: "Marcar pagado"
- Botón: "Cobro parcial"

#### Análisis de Insumos
- Cloro total usado (mes)
- Ácido total usado (mes)
- Otros químicos
- Costo estimado de insumos

### 6.4 Reportes

**Pantalla:** Visualización e exportación de datos

**Vistas:**
1. **Reporte Mensual General**
   - Total visitas
   - Clientes atendidos
   - Ingresos vs gastos
   - Gráficos

2. **Reporte por Cliente**
   - Últimas visitas
   - Fotos (antes/después)
   - Parámetros registrados
   - Químicos usados
   - Historial de pagos

3. **Reporte de Insumos**
   - Consumo mensual por producto
   - Costo estimado
   - Comparativa mes anterior

**Exportación:**
- Descargar como PDF
- Descargar como Excel

---

## 7. Especificación de Datos

### 7.1 Modelo de Base de Datos

**Tabla: CLIENTES**
```sql
CREATE TABLE clientes (
  id INTEGER PRIMARY KEY,
  nombre TEXT NOT NULL,
  direccion TEXT NOT NULL,
  telefono TEXT,
  volumen_litros INTEGER,
  tipo_construccion TEXT,
  equipamiento TEXT,
  modelo_filtro TEXT,
  tipo_abono TEXT,
  precio_abono REAL,
  dias_visita TEXT,
  notas_acceso TEXT,
  activo BOOLEAN DEFAULT TRUE,
  created_at DATETIME,
  updated_at DATETIME
);
```

**Tabla: VISITAS**
```sql
CREATE TABLE visitas (
  id INTEGER PRIMARY KEY,
  cliente_id INTEGER NOT NULL,
  fecha DATE NOT NULL,
  hora_inicio DATETIME,
  hora_fin DATETIME,
  tareas_realizadas JSON,
  cloro_ppm REAL,
  ph REAL,
  quimicos_usados JSON,
  observaciones TEXT,
  sincronizada BOOLEAN DEFAULT FALSE,
  created_at DATETIME,
  updated_at DATETIME,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);
```

**Tabla: FOTOS**
```sql
CREATE TABLE fotos (
  id INTEGER PRIMARY KEY,
  visita_id INTEGER NOT NULL,
  tipo TEXT,
  ruta_archivo TEXT,
  uploaded_at DATETIME,
  FOREIGN KEY (visita_id) REFERENCES visitas(id)
);
```

**Tabla: PAGOS**
```sql
CREATE TABLE pagos (
  id INTEGER PRIMARY KEY,
  cliente_id INTEGER NOT NULL,
  monto REAL NOT NULL,
  fecha DATETIME,
  estado TEXT,
  metodo_pago TEXT,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);
```

### 7.2 Almacenamiento de Fotos

**Ubicación:** Carpeta local en computadora de Fede  
Ruta: `C:\Users\[usuario]\PILETERO\fotos\`

**Nomenclatura:** `[cliente_id]_[visita_id]_[tipo_antes_despues]_[timestamp].jpg`

**Tamaño:** Se comprimen automáticamente a 1024x768 para ahorrar espacio

---

## 8. Fases de Desarrollo

### 8.1 MVP (Semanas 1-3)

**Objetivo:** Funcionalidad básica operativa

**Celular:**
- ✅ Agenda diaria
- ✅ Registro de visita (checklist + mediciones + foto)
- ✅ Almacenamiento offline SQLite
- ✅ Sincronización WiFi básica

**Computadora:**
- ✅ Dashboard simple
- ✅ Gestión de clientes (CRUD)
- ✅ Ver datos sincronizados
- ✅ Control pagos simple (sí/no)
- ✅ Servidor Node.js con API básica

**No incluido (Fase 2):**
- Google Maps
- Botón "En camino" (WhatsApp)
- Cálculos automáticos de dosis
- Reportes detallados
- Gráficos avanzados

### 8.2 Fase 2 (Semanas 4-5+)

**Objetivo:** Profesionalización y automatizaciones

**Celular:**
- 🔵 Google Maps integrado
- 🔵 Botón "En camino" → envía WhatsApp automático
- 🔵 Cálculo automático de dosis (basado en volumen + pH)
- 🔵 Reportes automáticos al cliente

**Computadora:**
- 🔵 Dashboard con gráficos (Chart.js)
- 🔵 Análisis de gastos vs ingresos
- 🔵 Reportes detallados PDF/Excel
- 🔵 Historial de aumentos de precios
- 🔵 Alertas de mantenimiento preventivo

---

## 9. Tecnología y Stack

### 9.1 Frontend

- **React 18+** (framework principal)
- **Vite** (empaquetador, muy rápido)
- **Tailwind CSS** (diseño responsive)
- **React Router** (navegación)
- **Axios** (comunicación HTTP)
- **SQLite.js** o **PouchDB** (almacenamiento offline celular)

### 9.2 Backend

- **Node.js 18+**
- **Express.js** (servidor HTTP)
- **SQLite3** o **PostgreSQL** (base de datos)
- **Socket.io** (sincronización tiempo real)
- **Multer** (manejo de archivos/fotos)
- **JWT** (autenticación local, solo Fede)

### 9.3 Instalación para Fede

**Proceso:**
1. Ejecuta instalador `.exe` (preparado previamente)
2. Instala Node.js si no lo tiene (automático)
3. Copia app a carpeta `C:\PILETERO\`
4. Crea shortcut en Desktop
5. Instrucción: "Abre PILETERO.exe y listo"

**Actualizaciones:**
- Fede descarga archivo ZIP con nuevas versiones
- Reemplaza archivos en `C:\PILETERO\`
- Sus datos (SQLite) permanecen intactos

---

## 10. Requisitos No-Funcionales

### 10.1 Performance

- **Carga inicial app celular:** < 2 segundos
- **Registro visita:** < 1 segundo
- **Sincronización (10-30 fotos):** 5-10 segundos
- **Capacidad almacenamiento:**
  - 10 clientes = ~50-100 MB
  - 30 clientes (temporada) = ~300 MB

### 10.2 Usabilidad

- Interfaz mobile-first (botones mínimo 44x44px)
- Lenguaje simple (sin jerga técnica)
- Máximo 2 taps para llegar a función principal
- Flujo offline 100% transparente para usuario

### 10.3 Seguridad

- JWT simple para acceso local (solo Fede)
- Datos nunca salen de máquina local
- Fotos guardadas en carpeta local
- Sin conexión a servidores externos

### 10.4 Confiabilidad

- App debe funcionar 100% offline en celular
- Sincronización debe ser idempotente (sin duplicados)
- Manejo de pérdida de conexión (reintento automático)
- Backup automático de datos (copia en carpeta)

---

## 11. Criterios de Aceptación

### MVP Completado cuando:

**Celular:**
- ✅ Puedo ver agenda del día sin internet
- ✅ Puedo registrar una visita completa (tareas + mediciones + foto)
- ✅ Los datos se guardan localmente
- ✅ Al conectarme a WiFi, sincroniza automáticamente
- ✅ La interfaz es intuitiva (sin instrucciones externas)

**Computadora:**
- ✅ Veo todos los datos sincronizados desde celular
- ✅ Puedo crear/editar clientes
- ✅ Puedo marcar pagos
- ✅ Veo un resumen básico del mes
- ✅ El servidor corre en background sin intervención

**Integración:**
- ✅ Datos sincronizados correctamente en ambas direcciones
- ✅ No hay pérdida de datos
- ✅ Fede puede usar sin asistencia técnica

---

## 12. Restricciones y Supuestos

### Restricciones

1. **Una sola persona usa la app** (Fede)
2. **Computadora siempre está en mismo lugar** (casa)
3. **Datos históricos:** Últimos 3 meses (no indefinido)
4. **Fotos:** Máximo 5 MB por foto
5. **Idioma:** Español

### Supuestos

1. Fede tiene acceso a WiFi en casa (para sincronización)
2. Fede tiene celular con datos móviles (para consultas puntuales si las necesita)
3. La computadora tiene Windows 10+
4. Fede aceptará una interfaz "simple" sin ser super sofisticada visualmente

---

## 13. Siguiente Fase

1. **Escribir Plan de Implementación** con tareas específicas
2. **Comenzar desarrollo** del MVP
3. **Testing** con datos reales
4. **Ajustes** basados en feedback de Fede
5. **Fase 2** con features avanzadas

---

**Fin del Documento de Especificación**
