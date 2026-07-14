# Diseño: Mostrar Camas Disponibles en Modal de Reserva

**Fecha:** 2026-07-13  
**Autor:** Claude  
**Estado:** Aprobado

## Resumen

Mejorar la visualización de camas disponibles en el modal de reserva para que los estudiantes vean claramente:
- Cuántas camas están disponibles vs ocupadas
- Quién ocupa cada cama (si está ocupada)
- Quién es la instructora de la clase (o si está pendiente de asignar)
- Con diseño moderno (gradientes, hover effects) pero con detalles claros

## Problema actual

El modal de ReservationModal.jsx actualmente:
- Solo muestra un grid de 6 botones
- Las camas ocupadas están deshabilitadas (gris)
- No muestra quién ocupa cada cama
- No hay contador visual de disponibles
- La instructora está en el header pero poco destacada

Resultado: Poco claro cuántas opciones hay y quién reservó qué.

## Solución propuesta

### 1. Header de clase mejorado
- **Fecha y hora:** Destacadas en grande
- **Instructor:** Nueva sección con fondo diferenciado
  - Mostrar nombre si está asignada
  - Mostrar "Pendiente de asignar" en gris si no hay instructora
  - Icono visual (👩‍🏫 o ❌)

### 2. Contador de disponibles
- Mostrar "✅ X camas disponibles de 6"
- En caja azul con información clara
- Aparece debajo del header

### 3. Grid de camas mejorado (3 columnas)
Cada cama muestra:

**Si está disponible:**
- Número grande (Cama 1, 2, 3...)
- Gradiente verde
- Badge "Disponible"
- Hover effect (levanta y aumenta sombra)
- Clickeable

**Si está ocupada:**
- Número grande (Cama 1, 2, 3...)
- Fondo gris degradado
- Badge "Ocupada"
- Nombre de quién la reservó (en pequeño, itálica)
- No clickeable (cursor no-allowed)
- Opacidad reducida

### 4. Estilos visuales
- **Disponible:** Gradiente verde (#66bb6a a #43a047)
- **Ocupada:** Gradiente gris (#f5f5f5 a #eeeeee)
- **Hover:** Traslación Y (-4px) + sombra mayor
- **Bordes:** Redondeados (border-radius: 10px)
- **Badges:** Pequeños, uppercase, texto blanco/gris

## Cambios en componentes

### Frontend: ReservationModal.jsx

**Estado adicional:**
- Ya tenemos `availableBeds` del endpoint
- Mostrar la información de instructor (si viene del backend)

**Cambios en render:**
1. Mejorar la sección de clase info
2. Agregar sección destacada de instructor
3. Agregar contador de disponibles
4. Actualizar grid de camas con:
   - Gradientes en botones
   - Badge de estado
   - Nombre de quien ocupa (si aplica)
   - Estilos hover mejorados

### Backend: Validar endpoint

El endpoint `/api/schedules/${schedule.id}/available-beds` debe retornar:
```json
{
  "availableBeds": [1, 3, 4],
  "capacidad": 6,
  "reservations": [
    { "cama_numero": 2, "alumna_id": "...", "nombre_alumna": "María López" },
    { "cama_numero": 5, "alumna_id": "...", "nombre_alumna": "Laura García" },
    { "cama_numero": 6, "alumna_id": "...", "nombre_alumna": "Paula M." }
  ],
  "instructor": {
    "nombre": "Jacqueline Martínez",
    "id": "..."
  }
}
```

Si no hay instructor, retornar `"instructor": null`.

## Comportamiento

1. **Al abrir modal:** Fetch a `/api/schedules/{id}/available-beds`
2. **Renderizado:** Mostrar camas disponibles en verde, ocupadas en gris
3. **Interacción:**
   - Click en cama disponible → selecciona y cambia color
   - Click en cama ocupada → no hace nada (disabled)
   - Botón "Solicitar Reserva" → solo habilitado si hay cama seleccionada
4. **Si no hay instructora:** Mostrar "Pendiente de asignar"

## Datos necesarios

El backend debe retornar en la respuesta de `available-beds`:
- `availableBeds`: array de números (camas disponibles)
- `reservations`: array con objeto de cada reserva (número cama + nombre alumna)
- `instructor`: objeto con nombre de instructora (o null si no asignada)
- `capacidad`: número (siempre 6)

## Testing

**Casos a verificar:**
1. Clase con instructora asignada y camas disponibles
2. Clase sin instructora asignada y camas disponibles
3. Clase con todas las camas ocupadas (no debería permitir reservar)
4. Clase con 1 sola cama disponible
5. Nombres largos de alumnas no se corten (salto de línea)
6. Hover effects funcionan en mobile y desktop
7. Selección de cama actualiza visual correctamente

## Notas

- El diseño prioriza claridad visual
- Los gradientes son sutiles, no distraen
- La información está en orden de importancia (fecha/hora → instructor → disponibilidad → camas)
- Compatible con mobile (grid de 3 columnas se ajusta bien en pantallas pequeñas)
- No requiere cambios en la API de reserva, solo en lo que devuelve available-beds
