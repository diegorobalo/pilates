# Sistema de Balanza v2.1
**Creado para ARGENSUN S.A.**

---

## Novedades v2.1

- **Dashboard diario** al iniciar: pesajes del dia, toneladas, productos
- **Autocompletado inteligente**: al seleccionar un camion, autocompleta transportista, chofer y acoplado del ultimo pesaje
- **Alertas de peso fuera de rango**: configurable por producto (peso minimo/maximo)
- **Backup automatico**: copia de la BD al iniciar (carpeta backups/, retiene 10 copias)
- **Seguridad mejorada**: hash PBKDF2 con salt, cambio de clave obligatorio en primer uso
- **Atajos de teclado**: F2=Capturar peso, F5=Guardar, F8=Nuevo
- **Confirmacion al cerrar** con cargas abiertas
- **Validacion de estabilidad** del peso antes de capturar
- **Ordenamiento de columnas** en el historial
- **Log de errores mejorado**: append con timestamp (no sobreescribe)

---

## Instalacion rapida (primera vez)

1. Instalar Python 3.11+ desde https://www.python.org/downloads/
   - TILDAR "Add Python to PATH"
2. Doble clic en **INICIAR.bat** — instala dependencias y abre el programa
3. Doble clic en **INSTALAR_ACCESO_DIRECTO.bat** — crea el icono en el Escritorio

**Las proximas veces: doble clic en "Balanza v2" desde el Escritorio.**

---

## Acceso de administrador

El operador comun puede registrar pesajes e imprimir tickets, pero NO puede
modificar los datos maestros (productos, camiones, transportistas, etc.).

Para acceder al modo administrador:
1. Doble clic en el logo **BALANZA** del menu lateral izquierdo
2. Clic en **"Administracion"**
3. Ingresar la clave

**IMPORTANTE**: En el primer inicio, el sistema pedira cambiar la clave
de administrador por seguridad.

---

## Configurar alertas de peso

Para que el sistema avise cuando un peso neto esta fuera de rango:
1. Ir a **Administracion > Productos**
2. Seleccionar un producto
3. Completar **Peso minimo (kg)** y **Peso maximo (kg)**
4. Guardar

Al cerrar un egreso, si el peso neto esta fuera de esos limites,
el sistema mostrara un aviso antes de guardar.

---

## Atajos de teclado

| Atajo | Accion |
|-------|--------|
| F2    | Capturar peso |
| F5    | Guardar ingreso/egreso |
| F8    | Limpiar / Nuevo |

---

## Backups

La base de datos se respalda automaticamente cada vez que se inicia
el programa. Los backups se guardan en la carpeta `datos/backups/`
y se retienen las ultimas 10 copias.

