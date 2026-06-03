$ProgressPreference = 'SilentlyContinue'
Write-Output "Deteniendo web_server.py..."
Stop-Process -Name python -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 3
Write-Output "Iniciando web_server.py desde C:\VPN_MONITOR..."
Set-Location C:\VPN_MONITOR
& python.exe web_server.py
