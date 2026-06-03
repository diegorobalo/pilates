@echo off
REM Find Python and run the backend server
REM This script tries multiple Python locations

setlocal enabledelayedexpansion

echo Searching for Python...
echo.

REM Try different Python locations
set PYTHON_PATHS=^
  C:\Python311\python.exe^
  C:\Python310\python.exe^
  C:\Python312\python.exe^
  C:\Users\%USERNAME%\AppData\Local\Programs\Python\Python311\python.exe^
  C:\Users\%USERNAME%\AppData\Local\Programs\Python\Python310\python.exe^
  C:\Program Files\Python311\python.exe^
  C:\Program Files\Python310\python.exe

set PYTHON_EXE=

for %%P in (%PYTHON_PATHS%) do (
    if exist "%%P" (
        set PYTHON_EXE=%%P
        echo Found Python at: %%P
        goto :found
    )
)

REM Try using where command if python is in PATH
where python >nul 2>&1
if !errorlevel! equ 0 (
    for /f "delims=" %%P in ('where python') do (
        set PYTHON_EXE=%%P
        echo Found Python in PATH: %%P
        goto :found
    )
)

REM If still not found, try py.exe launcher
where py.exe >nul 2>&1
if !errorlevel! equ 0 (
    set PYTHON_EXE=py.exe
    echo Found Python launcher: py.exe
    goto :found
)

echo ERROR: Python not found!
echo Please install Python 3.9+ or add it to PATH
pause
exit /b 1

:found
echo.
echo Starting backend server...
echo Python: !PYTHON_EXE!
echo Port: 8083
echo.

cd /d "C:\Users\diego.robalo\Documents\CLAUDIA\originamiento-dashboard\backend"
"!PYTHON_EXE!" main.py

pause
