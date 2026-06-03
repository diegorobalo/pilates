# Aggressive cleanup and restart script
Write-Host "=== AGGRESSIVE BACKEND CLEANUP AND RESTART ===" -ForegroundColor Cyan

# Step 1: Kill all Python processes
Write-Host "`n[1/5] Killing all Python processes..." -ForegroundColor Yellow
$pythonProcesses = Get-Process python -ErrorAction SilentlyContinue
if ($pythonProcesses) {
    $pythonProcesses | Stop-Process -Force -ErrorAction SilentlyContinue
    Write-Host "  Killed $(($pythonProcesses | Measure-Object).Count) Python process(es)" -ForegroundColor Green
    Start-Sleep -Seconds 2
} else {
    Write-Host "  No Python processes found" -ForegroundColor Green
}

# Step 2: Remove all __pycache__ directories
Write-Host "`n[2/5] Removing __pycache__ directories..." -ForegroundColor Yellow
$backendPath = "C:\Users\diego.robalo\Documents\CLAUDIA\originamiento-dashboard\backend"
Get-ChildItem -Path $backendPath -Directory -Name "__pycache__" -Recurse -ErrorAction SilentlyContinue | ForEach-Object {
    $fullPath = Join-Path -Path $backendPath -ChildPath $_
    Remove-Item -Path $fullPath -Recurse -Force -ErrorAction SilentlyContinue
}
$cacheCount = (Get-ChildItem -Path $backendPath -Directory -Name "__pycache__" -Recurse -ErrorAction SilentlyContinue | Measure-Object).Count
Write-Host "  Removed __pycache__ directories (remaining: $cacheCount)" -ForegroundColor Green

# Step 3: Remove all .pyc files
Write-Host "`n[3/5] Removing .pyc files..." -ForegroundColor Yellow
Get-ChildItem -Path $backendPath -Filter "*.pyc" -Recurse -ErrorAction SilentlyContinue | Remove-Item -Force -ErrorAction SilentlyContinue
$pycCount = (Get-ChildItem -Path $backendPath -Filter "*.pyc" -Recurse -ErrorAction SilentlyContinue | Measure-Object).Count
Write-Host "  Removed .pyc files (remaining: $pycCount)" -ForegroundColor Green

# Step 4: Clear Python's site-packages cache for this project
Write-Host "`n[4/5] Clearing module cache..." -ForegroundColor Yellow
Remove-Item -Path $backendPath\.python_bytecode -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "  Module cache cleared" -ForegroundColor Green

# Step 5: Restart the backend
Write-Host "`n[5/5] Starting backend with fresh Python interpreter..." -ForegroundColor Yellow
cd $backendPath
Write-Host "  Current directory: $(Get-Location)" -ForegroundColor Gray
Write-Host "  Executing: python run.py" -ForegroundColor Gray
Write-Host "`n=== BACKEND STARTING ===" -ForegroundColor Cyan
python run.py
