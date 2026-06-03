# Dashboard de Parque Informático - Diseño Técnico

**Fecha**: 2026-06-03  
**Usuario**: Diego Robalo  
**Objetivo**: Crear un dashboard Excel que visualice inventario completo de equipos informáticos con valuación en USD

---

## 1. Visión General

Transformar el inventario actual (7 sucursales) en un dashboard Excel interactivo que permita:
- Visualizar el parque informático consolidado y por sucursal
- Ver valor total en dólares (equipos usados)
- Filtrar por tipo de dispositivo
- Generar resumen visual con gráficos

**Alcance**: Dashboard en Excel. No incluye sincronización automática ni integración con sistemas externos.

---

## 2. Estructura del Archivo Excel

El archivo final tendrá **8 pestañas**:

### 2.1 Pestaña "Dashboard" (Portada Visual)
**Propósito**: Resumen ejecutivo visual del parque.

**Contenidos**:
- **KPIs principales** (valores en celdas destacadas):
  - Cantidad total de equipos
  - Valor total USD (suma de todos)
  - Valor promedio por equipo
  - Cantidad de equipos sin precio (para auditoría)

- **Gráficos**:
  - Pie chart: Cantidad de equipos por tipo (Laptops, Monitores, Periféricos, Servidores, etc.)
  - Bar chart: Valor USD total por sucursal
  - Bar/Column chart: Cantidad de equipos por sucursal
  - (Opcional) Donut chart: Distribución de valor por tipo

- **Navegación**: Hipervínculos a cada sucursal y al consolidado

### 2.2 Pestaña "Inventario Consolidado"
**Propósito**: Tabla maestra con todos los equipos.

**Columnas** (en orden):
1. ID (número secuencial para auditoría)
2. Tipo de Dispositivo (Laptop, Monitor, Mouse, Teclado, Servidor, etc.)
3. Marca
4. Modelo
5. Especificaciones Técnicas (RAM, procesador, tamaño, etc.)
6. Estado (Funcional, En Reparación, Obsoleto)
7. Localidad/Sucursal (Victoria, Linera, Fabril, San Rafael, Chivilcoy, Robles)
8. Fecha de Adquisición
9. Valor USD (valor de mercado, equipos usados)
10. Observaciones
11. Fuente Precio (MercadoLibre, manual, etc.)

**Funcionalidades**:
- Filtros activos por "Tipo de Dispositivo" (dropdown)
- Subtotales por tipo: cantidad y valor USD total
- Ordenable por cualquier columna
- Formato profesional con colores de alternancia de filas

### 2.3-2.8 Pestañas por Sucursal
**Nombres**: Victoria | Linera | Fabril | San Rafael | Chivilcoy | Robles

**Contenido**: Mismo formato que "Inventario Consolidado", pero mostrando solo equipos de esa sucursal.

**Funcionalidades**:
- Encabezado con nombre de sucursal
- Subtotal al pie: cantidad total y valor total USD
- Mismo filtro por tipo (aunque con menos datos)

### 2.9 Pestaña "Precios Buscados"
**Propósito**: Auditoría y registro de búsquedas de mercado.

**Columnas**:
1. Tipo de Dispositivo
2. Marca
3. Modelo
4. Valor Encontrado USD
5. URL MercadoLibre (para validación)
6. Fecha de Búsqueda
7. Notas (ej: "promedio de 5 listados activos")

---

## 3. Proceso de Enriquecimiento de Datos

### 3.1 Identificación
1. Leer archivo Excel actual (7 hojas con inventarios)
2. Extraer todos los equipos a tabla consolidada
3. Identificar equipos CON precio y SIN precio

### 3.2 Búsqueda de Precios
Para equipos sin precio:
1. **Buscar en MercadoLibre.com.ar** por marca + modelo
2. Buscar solo equipos usados (no nuevos)
3. Tomar **promedio de 3-5 listados activos** como referencia
4. Convertir a USD (si está en ARS usar tipo de cambio actual)
5. Registrar URL en hoja "Precios Buscados"

### 3.3 Validación
- Revisar que no haya valores faltantes
- Validar que valores sean razonables para equipos usados
- Flag manual: si hay duda, dejar nota en observaciones

---

## 4. Cálculos y Fórmulas

### 4.1 Dinámicos (se actualizan automáticamente)
- **KPI Total Equipos**: `=COUNTA(Consolidado!A:A)-1` (menos encabezado)
- **KPI Valor Total USD**: `=SUM(Consolidado!I:I)` (columna Valor USD)
- **KPI Promedio**: `=AVERAGE(Consolidado!I:I)`
- **Subtotal por Tipo**: `=SUMIF(Consolidado!B:B, tipo_seleccionado, Consolidado!I:I)`
- **Cantidad por Tipo**: `=COUNTIF(Consolidado!B:B, "Laptop")` (repetir para cada tipo)

### 4.2 Gráficos
- Todos los gráficos apuntan a rangos dinámicos
- Se actualizan automáticamente cuando se agregan/modifican equipos
- Formato: colores profesionales, leyendas claras

---

## 5. Flujo de Uso (Usuario)

1. Abre "Dashboard" → ve resumen visual instantáneo
2. Hace clic en sucursal → ve equipos de esa localidad
3. En cualquier hoja, puede filtrar por tipo de dispositivo
4. Puede ordenar por valor para ver equipos más caros
5. Observa en "Precios Buscados" de dónde vino cada valor

---

## 6. Entregables

**Archivo final**: `Parque_Informatico_Dashboard_[fecha].xlsx`

**Incluye**:
- ✅ 8 pestañas según estructura
- ✅ Todos los equipos con precio en USD
- ✅ Gráficos en Dashboard
- ✅ Filtros funcionales
- ✅ Hoja de auditoría (Precios Buscados)
- ✅ Cero errores de fórmula

---

## 7. Decisiones de Diseño

### Por qué Excel y no una app web
- Usuario pidió "livianito"
- Formato conocido y fácil de compartir
- No requiere servidor ni configuración
- Facilita auditoría offline

### Por qué buscar en MercadoLibre.com.ar
- Mercado local, precios relevantes
- Equipos usados (match con el inventario)
- Amplia oferta para comparar

### Por qué separar por sucursal
- Permite gestión local
- Vista consolidada sin perder detalle geográfico
- Facilita auditorías por localidad

---

## 8. Consideraciones Futuras (fuera de scope)

- Actualización automática de precios (requeriría integración API)
- Control de depreciación (fórmulas de amortización)
- Integración con sistema contable
- Alertas de equipos próximos a obsolescencia

