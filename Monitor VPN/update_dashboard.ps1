$dashboardPath = 'C:\Users\diego.robalo\Documents\CLAUDIA\Monitor VPN\Exportar a Fs02\dashboard.html'

# Leer el archivo
$content = Get-Content $dashboardPath -Raw

# Buscar la sección de "Tabla detalle" 
# Primero vamos a encontrar el botón incompleto y reemplazarlo

# Patrón 1: Reemplazar el texto "Tabla detalle" suelto por un botón completo
$oldButton = 'Tabla detalle'
$newButton = '<button class="tab-btn" onclick="showTab('"'"'resumen'"'"')">Resumen del Día</button>'

if ($content -match $oldButton) {
    Write-Host "Encontrado 'Tabla detalle' - reemplazando..."
    $content = $content -replace [regex]::Escape($oldButton), $newButton
    Write-Host "Botón reemplazado"
} else {
    Write-Host "No se encontró el patrón exacto"
}

# Guardar el archivo modificado
Set-Content $dashboardPath $content -Encoding UTF8
Write-Host "Archivo actualizado: $dashboardPath"
