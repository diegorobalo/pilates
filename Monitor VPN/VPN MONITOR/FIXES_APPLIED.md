# VPN Monitor - Fixes Applied

## Resumen de Correcciones (17 de Abril 2026)

### Problema 1: Gráfico "horas conectado por día" no se rendderizaba
**Ubicación**: `runReport()` función en dashboard.html (línea ~638)
**Causa**: El código intentaba seleccionar el canvas antes de que fuera insertado en el DOM
**Solución**: Envuelto el código de renderización de gráficos en `setTimeout()` y usar `querySelectorAll()` para obtener todos los canvas

```javascript
// Antes (INCORRECTO):
const ctx=document.getElementById(res.querySelector('canvas').id);

// Después (CORRECTO):
setTimeout(()=>{
  const canvases=res.querySelectorAll('canvas');
  if(canvases.length>0){
    new Chart(canvases[0], {...});
  }
}, 50);
```

---

### Problema 2: Error al cargar RRHH / Gestión
**Ubicación**: `loadRRHHDashboard()` función en dashboard.html (línea ~729)
**Causa**: Variable `days` fue redeclarada dentro de una función que ya la tenía como parámetro
**Solución**: Renombrada la variable local a `daysNum`

```javascript
// Antes (INCORRECTO):
async function loadRRHHDashboard(){
  const days=document.getElementById('rrhh-days').value;
  // ...
  const days=parseInt(document.getElementById('rrhh-days').value); // ❌ REDECLARACIÓN!

// Después (CORRECTO):
async function loadRRHHDashboard(){
  const days=document.getElementById('rrhh-days').value;
  // ...
  const daysNum=parseInt(document.getElementById('rrhh-days').value); // ✓ Nombre diferente
```

---

### Problema 3: Gráfico "horas pico" no se rendderizaba
**Ubicación**: `loadITSecurityDashboard()` función en dashboard.html (línea ~920)
**Causa**: Condición verificaba por `window.L` (Leaflet maps) en lugar de `Chart.js`
**Solución**: Cambiar condición a verificar por `typeof Chart !== 'undefined'`

```javascript
// Antes (INCORRECTO):
if(canvas&&window.L){  // ❌ window.L es para mapas, no para gráficos

// Después (CORRECTO):
if(canvas&&typeof Chart!=='undefined'){  // ✓ Verifica que Chart.js esté cargado
```

---

### Problema 4: Tabla detalle faltaba información
**Ubicación**: Tabla "Conectados" - Pestaña "Tabla detalle"
**Causa**: No había columna para mostrar la hora de primera conexión del día
**Solución**: 
1. Agregada columna `daily_first_seen` al endpoint `/api/active`
2. Agregada columna "1ª conexión hoy" a la tabla HTML
3. Mostrar la hora formateada en la tabla

**Backend** (web_server.py):
```python
c.execute("SELECT ... first_seen FROM daily_uptime WHERE ...")
row["daily_first_seen"] = du["first_seen"] if du else None
```

**Frontend** (dashboard.html):
```javascript
const firstConn=c.daily_first_seen?new Date(c.daily_first_seen).toLocaleTimeString('es-AR',{hour:'2-digit',minute:'2-digit'}):'—';
```

---

### Problema 5: Configuración de API URL no era persistente
**Ubicación**: Header - Input de API URL
**Causa**: La URL se perdía al recargar la página
**Solución**: 
1. Agregar auto-detección de URL usando origin del navegador
2. Guardar URL en localStorage
3. Cargar URL guardada al inicializar la página

```javascript
function getDefaultAPI(){
  const proto = window.location.protocol;
  const host = window.location.hostname;
  const port = window.location.port;
  return proto + '//' + host + (port && port!=='80' && port!=='443' ? ':'+port : '');
}

// Cargar en DOMContentLoaded
const savedUrl = localStorage.getItem('vpn-api-url');
if(savedUrl) apiInput.value = savedUrl;

// Guardar al cambiar
apiInput.addEventListener('change', ()=>{
  if(apiInput.value.trim()){
    localStorage.setItem('vpn-api-url', apiInput.value.trim());
  }
});
```

---

### Problema 6: Mejor manejo de errores en asignación de departamentos
**Ubicación**: `setSectorUser()` función
**Solución**: 
1. Agregadas credenciales en fetch (para mantener sesión)
2. Mejor manejo de status code 403 (sin permisos de admin)
3. Mejor mensajes de error

---

## Archivos Modificados

### 1. **dashboard.html**
- Línea 354-358: Mejorada función API() con auto-detección y localStorage
- Línea 172: Input de API URL ahora tiene placeholder "auto"
- Línea 214-224: Agregada columna "1ª conexión hoy" a tabla
- Línea 420-421: Mostrar hora de primera conexión en tabla
- Línea 635-646: Mejorado renderización de gráficos en runReport()
- Línea 750: Variable renombrada a daysNum en loadRRHHDashboard()
- Línea 900-902: Canvas renderizado correctamente
- Línea 941-944: Condición corregida en loadITSecurityDashboard()
- Línea 959-981: Mejorado manejo de errores en setSectorUser()
- Línea 961-979: Agregada persistencia de API URL en localStorage

### 2. **web_server.py**
- Línea 410-418: Endpoint /api/active ahora retorna daily_first_seen

---

## Checklist de Prueba

- [ ] **Conectarse al dashboard**
  - [ ] Verificar que la página carga sin errores
  - [ ] Confirmar que la barra superior (header) se ve correctamente
  
- [ ] **API URL Configuration**
  - [ ] Ingresar una URL en el campo API (ej: http://localhost:5555)
  - [ ] Recargar la página y verificar que la URL se mantiene
  - [ ] Si dejas el campo vacío, debe usar auto-detección

- [ ] **Tabla Detalle (Conectados)**
  - [ ] Hacer clic en pestaña "Tabla detalle"
  - [ ] Verificar que aparece la columna "1ª conexión hoy"
  - [ ] Confirmar que muestra la hora correcta (ej: "09:30")

- [ ] **Informe Usuario**
  - [ ] Ir a pestaña "Informe usuario"
  - [ ] Seleccionar un usuario
  - [ ] Hacer clic en "Generar"
  - [ ] Verificar que aparecen los dos gráficos:
    - [ ] Gráfico "📈 Horas conectado por día"
    - [ ] Gráfico "📅 Distribución por día de semana"

- [ ] **RRHH / Gestión**
  - [ ] Ir a pestaña "RRHH / Gestión"
  - [ ] Hacer clic en "Cargar"
  - [ ] Verificar que se cargan sin errores:
    - [ ] Top 10 usuarios
    - [ ] Resumen por sector
    - [ ] Heatmap mensual
    - [ ] Ausencias (usuarios sin conectar 3+ días)

- [ ] **IT / Seguridad**
  - [ ] Ir a pestaña "IT / Seguridad"
  - [ ] Hacer clic en "Cargar"
  - [ ] Verificar que aparece el gráfico "⏰ Horas pico de conexión"
  - [ ] Confirmar que muestra el horario pico (ej: "09:00hs")

- [ ] **Asignación de Departamentos**
  - [ ] En pestaña RRHH, seleccionar un usuario del dropdown
  - [ ] Seleccionar un departamento
  - [ ] Hacer clic en "Guardar"
  - [ ] Verificar el mensaje de confirmación (✓ Usuario asignado a Sector)

---

## Notas Técnicas

### Variable Redeclaration Fix
El error de `const days=parseInt...` dentro de una función que ya tenía `const days=...` 
causar un "Identifier 'days' has already been declared" error. Esto ha sido arreglado 
renombrando la variable local a `daysNum` para evitar conflictos.

### Canvas Selection Timing
Chart.js necesita que el canvas esté presente en el DOM cuando se inicializa. Por eso 
el código ahora:
1. Primero inserta el HTML con el canvas
2. Usa setTimeout para permitir que el DOM se actualice
3. Luego inicializa Chart.js

### API URL Auto-Detection
Cuando dejas el campo vacío, el dashboard detecta automáticamente:
- Protocolo (http/https) del navegador
- Hostname del servidor
- Puerto (si no es 80 ni 443)

Esto funciona mejor para deployment en la misma máquina.

---

## Cambios Futuros Sugeridos

1. **PC Name**: Actualmente mostramos "1ª conexión hoy" pero no el nombre de la PC.
   Para agregar esto, se necesitaría capturar el hostname del cliente VPN en MikroTik.

2. **Better Error Messages**: Agregar más detalles a los mensajes de error cuando 
   la API falla.

3. **Offline Mode**: Mostrar datos cacheados si la API no está disponible.

4. **Dark Mode Toggle**: Agregar botón para cambiar entre temas claro/oscuro.

---

**Última actualización**: 2026-04-17
**Status**: ✅ LISTO PARA PRUEBAS

