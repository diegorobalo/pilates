# 📋 Guía: Obtener MÁS INFORMACIÓN de osTicket

## Problema
El CSV básico solo contiene ~18 campos. osTicket tiene **custom fields** adicionales como:
- ✅ Cliente/Reclamante
- ✅ Producto & Especificación
- ✅ Número de Contenedor
- ✅ Toneladas Reclamadas
- ✅ Tipo de Problema
- ✅ Grupo de Problemas

## Solución: 2 Opciones

---

## 🔷 OPCIÓN 1: Usar API de osTicket (RECOMENDADO)

### Ventajas:
- ✅ Datos en tiempo real
- ✅ Todos los custom fields automáticamente
- ✅ Auto-actualización

### Pasos:

#### 1. Habilitar API en osTicket
```
Admin → Settings → API → Enable API
→ Copiar API Key
```

#### 2. Crear token/credenciales
```
Admin → Staff → [Tu Usuario] → API Key
Generar y copiar la clave
```

#### 3. Compartir credenciales conmigo
```
- URL osTicket: https://[tu-dominio]/support/
- API Key: [copiar aquí]
- Email admin: [tu email]
```

#### 4. Yo implemento la integración
- Conecto directamente a osTicket
- Descargo TODOS los tickets con custom fields
- Dashboard se actualiza automáticamente

---

## 🔶 OPCIÓN 2: Exportar CSV Mejorado (Rápido)

Si no quieres exponer la API:

### Pasos en osTicket:

#### 1. Ir a Tickets → Tickets Abiertos
#### 2. Seleccionar todos los tickets
#### 3. Acciones en lote → Exportar
#### 4. **Personalizar columnas:**

Incluir:
```
✓ Número de Ticket
✓ Asunto
✓ Estado
✓ Prioridad
✓ Departamento
✓ Usuario (que creó)
✓ Email Usuario
✓ Agente Asignado
✓ Fecha Creación
✓ Fecha Vencimiento
✓ [CUSTOM] Cliente
✓ [CUSTOM] Producto
✓ [CUSTOM] Especificación
✓ [CUSTOM] Número Contenedor
✓ [CUSTOM] Toneladas Reclamadas
✓ [CUSTOM] Tipo de Problema
✓ [CUSTOM] Grupo de Problema
✓ [CUSTOM] Responsable
```

#### 5. Exportar como CSV (delimitado por `;`)
#### 6. Importar en el Dashboard

---

## 🔷 OPCIÓN 3: Ambos sistemas (HÍBRIDO)

- **Diario**: API osTicket (automático)
- **Respaldo**: CSV manual (si API falla)

---

## 📊 Estructura de datos mejorada que el Dashboard soportará:

```json
{
  "numeroTicket": "330666",
  "asunto": "DEMORAS LA BATURRICA",
  "cliente": "Sara Leon",
  "clienteReclamante": "BATURRICA",
  "producto": "Inshell",
  "especificacion": "Inshell LIN-MKT-EPT-003 v1",
  "numeroContenedor": "MRSU6320243",
  "toneladas": 37,
  "tipoProblema": "Demora embarque",
  "grupoProblema": "Fuerza de Especificacion",
  "numeroDocumento": "2800",
  "tipoDocumento": "Minuta de Venta (TeamDesk)",
  "estado": "Open",
  "prioridad": "Normal",
  "agente": "Sin asignar",
  "responsable": "SARA LEON",
  "fechaCreacion": "2026-05-27",
  "fechaVencimiento": "2026-05-30"
}
```

---

## 🎯 Mi Recomendación:

### **PASO 1 (Hoy):** 
Proporciona la URL de osTicket + API Key → Yo conecto la API

### **PASO 2 (Mañana):**
Dashboard se actualiza automáticamente con todos los datos

### **PASO 3 (Futuro):**
- Gráficos por Producto
- Análisis por Cliente Reclamante
- Distribución de Toneladas
- Performance por Tipo de Problema
- Dashboard de Contenedores

---

## ❓ ¿Qué necesito de ti?

Escoge una opción:

```
[ ] OPCIÓN 1: Dame acceso API osTicket (más fácil)
    Proporcionaré:
    - URL: _________________
    - API Key: _________________

[ ] OPCIÓN 2: Voy a exportar CSV mejorado (manual pero funciona)
    Lo cargaré cuando esté listo

[ ] OPCIÓN 3: Ambas (hybrid)
```

---

## 🔒 Seguridad

- API Key se guardará solo en `.env.local` (no en git)
- Nunca se expone en el frontend
- Solo lectura (no modificamos osTicket desde dashboard)

---

*Déjame saber cuál opción prefieres y continuamos!*
