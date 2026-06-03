@echo off
REM ============================================
REM Originamiento Dashboard - Setup
REM Copia .env.example a .env
REM ============================================

echo.
echo ╔════════════════════════════════════════╗
echo ║   ORIGINAMIENTO DASHBOARD              ║
echo ║   Configuración Inicial                ║
echo ╚════════════════════════════════════════╝
echo.

REM Verificar si .env ya existe
if exist ".env" (
    echo ✅ El archivo .env ya existe
    echo.
    echo Por si necesitas reiniciar desde cero, puedes:
    echo  1. Eliminar manualmente .env
    echo  2. Ejecutar este script nuevamente
    echo.
    pause
    exit /b 0
)

REM Verificar si .env.example existe
if not exist ".env.example" (
    echo ❌ ERROR: No se encontró .env.example
    echo.
    pause
    exit /b 1
)

REM Copiar .env.example a .env
copy ".env.example" ".env"

echo.
echo ✅ Archivo .env creado correctamente
echo.
echo 📝 IMPORTANTE: Ahora debes editar el archivo .env con tus credenciales:
echo.
echo   1. Abre el archivo .env en tu editor de texto favorito
echo   2. Completa los siguientes campos:
echo      - ODOO_URL
echo      - ODOO_USER
echo      - ODOO_PASSWORD
echo      - ANTHROPIC_API_KEY
echo.
echo   3. Guarda el archivo
echo.
echo 🚀 Una vez configurado, ejecuta START_HERE.cmd
echo.
pause
