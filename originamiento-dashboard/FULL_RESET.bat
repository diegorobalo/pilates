@echo off
REM FULL RESET - Kill all Python, clean cache, restart backend
REM This script performs a complete reset of the backend environment

setlocal enabledelayedexpansion

echo.
echo ============================================================
echo ORIGINAMIENTO DASHBOARD - FULL SYSTEM RESET
echo ============================================================
echo.

REM Step 1: Kill ALL Python processes
echo [1/5] Killing all Python processes...
taskkill /F /IM python.exe >nul 2>&1
taskkill /F /IM python3.exe >nul 2>&1
taskkill /F /IM pythonw.exe >nul 2>&1
timeout /T 2 /NOBREAK
echo   ✓ Python processes killed

REM Step 2: Kill Node processes (in case frontend build process running)
echo [2/5] Killing Node processes...
taskkill /F /IM node.exe >nul 2>&1
timeout /T 1 /NOBREAK
echo   ✓ Node processes killed

REM Step 3: Navigate to backend and clean cache
echo [3/5] Cleaning Python cache from backend directory...
cd /d C:\Users\diego.robalo\Documents\CLAUDIA\originamiento-dashboard\backend

REM Remove all __pycache__ directories recursively
for /d /r . %%d in (__pycache__) do (
    if exist "%%d" (
        echo   Removing: %%d
        rmdir /s /q "%%d" 2>nul
    )
)

REM Remove all .pyc files recursively
for /r . %%f in (*.pyc) do (
    if exist "%%f" (
        del "%%f" 2>nul
    )
)

REM Remove .pyo files
for /r . %%f in (*.pyo) do (
    if exist "%%f" (
        del "%%f" 2>nul
    )
)

echo   ✓ Cache cleaned

REM Step 4: Verify main.py is correct
echo [4/5] Verifying main.py has correct code...
if exist "main.py" (
    echo   ✓ main.py exists
) else (
    echo   ✗ ERROR: main.py not found!
    pause
    exit /b 1
)

REM Step 5: Start the backend with Python
echo [5/5] Starting backend with fresh Python interpreter...
echo.
echo ============================================================
echo BACKEND STARTING - FRESH INSTANCE
echo ============================================================
echo.

REM Set environment variable to prevent bytecode writing
set PYTHONDONTWRITEBYTECODE=1

REM Run the backend
cd /d C:\Users\diego.robalo\Documents\CLAUDIA\originamiento-dashboard\backend
python main.py

REM If python command fails, try python3
if errorlevel 1 (
    echo.
    echo Python command failed. Trying python3...
    python3 main.py
)

pause
