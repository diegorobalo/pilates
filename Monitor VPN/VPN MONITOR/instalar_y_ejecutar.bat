@echo off
chcp 65001 >nul
title VPN Monitor - Argensun Foods

echo.
echo  ══════════════════════════════════════════
echo     VPN Monitor v2 - Argensun Foods
echo  ══════════════════════════════════════════
echo.

python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo  [ERROR] Python no encontrado.
    echo  Descargalo de https://python.org
    pause
    exit /b 1
)
echo  [OK] Python encontrado.
echo  Instalando dependencias...
pip install librouteros cryptography requests flask >nul 2>&1
echo  [OK] Dependencias instaladas.
echo.

if not exist ".credentials.enc" (
    echo  Primera vez - configurando credenciales.
    echo.
    python vpn_monitor.py --setup
    echo.
    echo  Probando conexion:
    echo.
    python vpn_monitor.py --test
    echo.
    echo  Si fue exitosa, ejecuta este .bat de nuevo.
    pause
    exit /b 0
)

echo  [OK] Credenciales encontradas.
echo.
echo  Iniciando VPN Monitor v2...
echo  - Dashboard: http://localhost:5555
echo  - Abrir dashboard.html en el navegador
echo  - Ctrl+C para detener
echo.

python vpn_monitor.py
pause
