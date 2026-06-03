@echo off
REM ============================================
REM Originamiento Dashboard - Start Script
REM Windows Batch
REM ============================================

echo.
echo ╔════════════════════════════════════════╗
echo ║   ORIGINAMIENTO DASHBOARD              ║
echo ║   Iniciando servicios...               ║
echo ╚════════════════════════════════════════╝
echo.

REM Verificar que Docker está instalado
docker --version >nul 2>&1
if errorlevel 1 (
    echo ❌ ERROR: Docker no está instalado o no está en el PATH
    echo.
    echo Descarga Docker desde: https://www.docker.com/products/docker-desktop
    pause
    exit /b 1
)

echo ✅ Docker encontrado
echo.

REM Verificar .env
if not exist ".env" (
    echo ⚠️  ADVERTENCIA: Archivo .env no encontrado
    echo.
    echo Por favor, copia .env.example a .env y completa con tus credenciales:
    echo   - ODOO_URL
    echo   - ODOO_USER
    echo   - ODOO_PASSWORD
    echo   - ANTHROPIC_API_KEY
    echo.
    pause
    exit /b 1
)

echo ✅ Archivo .env detectado
echo.
echo 📦 Iniciando servicios (esto puede tardar unos minutos)...
echo.

REM Ejecutar docker-compose
docker-compose up

REM Nota: Este script se mantiene ejecutando mientras docker-compose está activo
REM Para detener: presiona Ctrl+C en esta ventana
