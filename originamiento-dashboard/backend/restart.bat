@echo off
REM Restart the backend server

echo.
echo ============================================================
echo ORIGINAMIENTO DASHBOARD - BACKEND RESTART
echo ============================================================
echo.

REM Kill any existing Python processes for this project
echo [1/3] Killing existing Python processes...
taskkill /F /IM python.exe /FI "WINDOWTITLE eq*uvicorn*" >nul 2>&1
taskkill /F /IM python.exe >nul 2>&1
timeout /T 2 /NOBREAK

REM Clear Python cache
echo [2/3] Clearing Python cache...
cd /d C:\Users\diego.robalo\Documents\CLAUDIA\originamiento-dashboard\backend

REM Remove __pycache__ directories
for /d /r . %%d in (__pycache__) do (
    echo   Removing %%d
    rmdir /s /q "%%d" >nul 2>&1
)

echo   Cache cleared
timeout /T 1 /NOBREAK

REM Start the backend
echo [3/3] Starting backend...
echo   Current directory: %CD%
echo   Executing: python main.py
echo.
echo ============================================================
echo.

REM Try to run main.py directly
python main.py

if errorlevel 1 (
    echo Error running python main.py
    echo Trying with python.exe explicitly...
    python.exe main.py
)

pause
