@echo off
REM ============================================
REM Originamiento Dashboard - Quick Start
REM Archivo principal para ejecutar
REM ============================================

REM Ejecutar el script PowerShell con policy bypass
powershell -ExecutionPolicy Bypass -File "%~dp0start.ps1"

REM Si PowerShell no funciona, fallback a batch
REM (comentado por defecto, descomentar si es necesario)
REM if errorlevel 1 (
REM     call "%~dp0start.bat"
REM )
