@echo off
echo Creando acceso directo en el Escritorio...
where py >nul 2>&1
if not errorlevel 1 ( py instalar_acceso_directo.py & exit /b )
where python >nul 2>&1
if not errorlevel 1 ( python instalar_acceso_directo.py & exit /b )
echo No se encontro Python. Ejecuta INICIAR.bat primero.
pause
