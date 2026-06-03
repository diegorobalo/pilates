# ============================================
# Originamiento Dashboard - Start Script
# PowerShell (Windows)
# ============================================

Write-Host ""
Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║   ORIGINAMIENTO DASHBOARD              ║" -ForegroundColor Green
Write-Host "║   Iniciando servicios...               ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""

# Verificar que Docker está instalado
$dockerCheck = docker --version 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ ERROR: Docker no está instalado o no está en el PATH" -ForegroundColor Red
    Write-Host ""
    Write-Host "Descarga Docker desde: https://www.docker.com/products/docker-desktop" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Presiona Enter para salir"
    exit 1
}

Write-Host "✅ Docker encontrado: $dockerCheck" -ForegroundColor Green
Write-Host ""

# Verificar .env
if (-not (Test-Path ".env")) {
    Write-Host "⚠️  ADVERTENCIA: Archivo .env no encontrado" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Por favor, copia .env.example a .env y completa con tus credenciales:" -ForegroundColor Yellow
    Write-Host "  - ODOO_URL" -ForegroundColor Gray
    Write-Host "  - ODOO_USER" -ForegroundColor Gray
    Write-Host "  - ODOO_PASSWORD" -ForegroundColor Gray
    Write-Host "  - ANTHROPIC_API_KEY" -ForegroundColor Gray
    Write-Host ""
    Read-Host "Presiona Enter para salir"
    exit 1
}

Write-Host "✅ Archivo .env detectado" -ForegroundColor Green
Write-Host ""
Write-Host "📦 Iniciando servicios (esto puede tardar 30-60 segundos)..." -ForegroundColor Cyan
Write-Host ""

# Iniciar docker-compose en background
$process = Start-Process -FilePath docker-compose -ArgumentList "up" -PassThru -NoNewWindow

# Esperar a que los servicios estén listos
Write-Host "⏳ Esperando a que los servicios se inicien..." -ForegroundColor Yellow

$maxAttempts = 60  # 60 intentos = 3 minutos
$attempt = 0
$frontendReady = $false

while ($attempt -lt $maxAttempts -and -not $frontendReady) {
    Start-Sleep -Seconds 2
    $attempt++

    # Intentar conectar al frontend
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:3000" -ErrorAction SilentlyContinue
        if ($response.StatusCode -eq 200) {
            $frontendReady = $true
        }
    } catch {
        # Frontend aún no está listo
    }

    # Mostrar progreso
    Write-Host -NoNewline "."
}

Write-Host ""
Write-Host ""

if ($frontendReady) {
    Write-Host "✅ ¡Servicios iniciados correctamente!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📊 Dashboard disponible en: http://localhost:3000" -ForegroundColor Green
    Write-Host "📚 API Docs disponible en: http://localhost:8000/docs" -ForegroundColor Green
    Write-Host ""
    Write-Host "👤 Credenciales Demo:" -ForegroundColor Cyan
    Write-Host "   Usuario: demo" -ForegroundColor Gray
    Write-Host "   Contraseña: demo123" -ForegroundColor Gray
    Write-Host ""

    # Abrir navegador
    Write-Host "🌐 Abriendo navegador..." -ForegroundColor Cyan
    Start-Process "http://localhost:3000"

    Write-Host ""
    Write-Host "ℹ️  Para detener los servicios, presiona Ctrl+C" -ForegroundColor Yellow
    Write-Host ""

    # Mantener la ventana abierta mientras docker-compose se ejecuta
    $process.WaitForExit()
} else {
    Write-Host "❌ ERROR: Los servicios no pudieron iniciar" -ForegroundColor Red
    Write-Host ""
    Write-Host "Verifica lo siguiente:" -ForegroundColor Yellow
    Write-Host "  1. Docker Desktop está ejecutándose" -ForegroundColor Gray
    Write-Host "  2. El archivo .env existe y está correctamente configurado" -ForegroundColor Gray
    Write-Host "  3. No hay otros servicios en los puertos 3000, 5432, 8000" -ForegroundColor Gray
    Write-Host ""
    Write-Host "Para ver logs detallados, ejecuta:" -ForegroundColor Yellow
    Write-Host "  docker-compose logs" -ForegroundColor Gray
    Write-Host ""
    Read-Host "Presiona Enter para salir"
    exit 1
}
