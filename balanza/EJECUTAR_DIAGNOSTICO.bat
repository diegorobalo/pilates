@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo Ejecutando diagnostico de puertos COM...
echo.
python diagnostico_puertos.py
echo.
echo Presiona cualquier tecla para cerrar...
pause >nul
