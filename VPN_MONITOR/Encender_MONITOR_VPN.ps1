# Script para ejecutar VPN Monitor con manejo de errores
# Ejecutar como Administrador en PowerShell

Write-Host "`n+---------------------------------------------------------------+" -ForegroundColor Cyan
Write-Host "¦          VPN Monitor - Iniciando...                          ¦" -ForegroundColor Cyan
Write-Host "+---------------------------------------------------------------+`n" -ForegroundColor Cyan

$Path = "C:\Users\diego.robalo\Documents\CLAUDIA\Monitor VPN\Exportar a Fs02"
Set-Location $Path

Write-Host "[*] Directorio: $pwd"

# Verificar Python
Write-Host "[*] Buscando Python..."
$pythonCheck = python --version 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "[?] Python encontrado: $pythonCheck" -ForegroundColor Green
} else {
    Write-Host "[ERROR] Python no encontrado" -ForegroundColor Red
    Read-Host "Presiona Enter para salir"
    exit
}

# Verificar archivo
if (-not (Test-Path "vpn_monitor.py")) {
    Write-Host "[ERROR] No encontré vpn_monitor.py" -ForegroundColor Red
    Read-Host "Presiona Enter para salir"
    exit
}

Write-Host "[?] vpn_monitor.py encontrado" -ForegroundColor Green
Write-Host "[*] Iniciando VPN Monitor...`n" -ForegroundColor Yellow

Write-Host "-------------------------------------------------------------------`n" -ForegroundColor Cyan

# Ejecutar
try {
    python vpn_monitor.py
} catch {
    Write-Host "`n[ERROR] Excepción: $_" -ForegroundColor Red
}

Write-Host "`n-------------------------------------------------------------------`n" -ForegroundColor Cyan
Write-Host "[!] VPN Monitor se cerró" -ForegroundColor Yellow
Write-Host "[!] Ver errores en: vpn_monitor.log" -ForegroundColor Yellow
Read-Host "Presiona Enter para salir"