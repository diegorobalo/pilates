@echo off
cd /d "%~dp0"

where py >nul 2>&1
if not errorlevel 1 ( set PYTHON=py & goto :found )
where python >nul 2>&1
if not errorlevel 1 ( set PYTHON=python & goto :found )
where python3 >nul 2>&1
if not errorlevel 1 ( set PYTHON=python3 & goto :found )
echo ERROR: Python no encontrado.
pause
exit /b 1

:found
:: Instalar dependencias
%PYTHON% -m pip install customtkinter pyserial reportlab openpyxl pillow --quiet --no-warn-script-location 2>nul

:: Crear acceso directo en el Escritorio
%PYTHON% _crear_acceso_directo.py 2>nul

:: Iniciar SIN ventana CMD (pythonw en vez de python)
:: Buscar pythonw en el mismo lugar que python
for /f "delims=" %%i in ('where %PYTHON% 2^>nul') do set PYPATH=%%i
set PYWPATH=%PYPATH:python.exe=pythonw.exe%
set PYWPATH=%PYWPATH:py.exe=pythonw.exe%

if exist "%PYWPATH%" (
    start "" "%PYWPATH%" main.py
) else (
    :: fallback: python normal con ventana minimizada
    start /min "" %PYTHON% main.py
)
