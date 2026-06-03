#!/usr/bin/env powershell
# Remove Python cache files

$backend_path = "C:\Users\diego.robalo\Documents\CLAUDIA\originamiento-dashboard\backend"

# Find and remove all __pycache__ directories
Get-ChildItem -Path $backend_path -Recurse -Directory -Name "__pycache__" -ErrorAction SilentlyContinue | ForEach-Object {
    $cache_path = Join-Path -Path $backend_path -ChildPath $_
    Write-Host "Removing cache: $cache_path"
    Remove-Item -Path $cache_path -Recurse -Force -ErrorAction SilentlyContinue
}

# Find and remove all .pyc files
Get-ChildItem -Path $backend_path -Recurse -Filter "*.pyc" -ErrorAction SilentlyContinue | ForEach-Object {
    Write-Host "Removing bytecode: $($_.FullName)"
    Remove-Item -Path $_.FullName -Force -ErrorAction SilentlyContinue
}

Write-Host "Cache cleanup complete"
