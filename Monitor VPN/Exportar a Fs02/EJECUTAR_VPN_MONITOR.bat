@echo off
REM Script para ejecutar VPN Monitor y capturar errores
REM Ejecutar como Administrador

echo.
echo ╔═══════════════════════════════════════════════════════════════╗
echo ║          VPN Monitor - Iniciando...                          ║
echo ╚═══════════════════════════════════════════════════════════════╝
echo.

REM Cambiar a directorio correcto
cd /d "C:\Users\diego.robalo\Documents\CLAUDIA\Monitor VPN\Exportar a Fs02"

echo [*] Directorio: %cd%
echo [*] Buscando Python...

REM Verificar si Python está instalado
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Python no está instalado o no está en PATH
    echo.
    echo Intenta instalar Python o agregar a PATH
    pause
    exit /b 1
)

echo [✓] Python encontrado

REM Verificar si el archivo vpn_monitor.py existe
if not exist "vpn_monitor.py" (
    echo [ERROR] No encontré vpn_monitor.py en el directorio actual
    pause
    exit /b 1
)

echo [✓] vpn_monitor.py encontrado
echo.
echo [*] Iniciando VPN Monitor...
echo.
echo ═══════════════════════════════════════════════════════════════════
echo.

REM Ejecutar con output visible
python vpn_monitor.py

REM Si llegamos aquí, el script terminó
echo.
echo ═══════════════════════════════════════════════════════════════════
echo.
echo [!] VPN Monitor se cerró
echo [!] Si hay errores arriba, revisa el archivo vpn_monitor.log
pause
