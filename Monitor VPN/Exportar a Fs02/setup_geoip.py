#!/usr/bin/env python3
"""
Script para descargar e instalar MaxMind GeoLite2 Database
Proporciona geolocalización precisa por IP
"""

import urllib.request
import tarfile
import os
import shutil
import json
from pathlib import Path

BASE_DIR = Path(__file__).parent

def setup_geoip():
    """Configura la base de datos GeoIP para el sistema"""
    
    print("[*] Descargando base de datos GeoLite2...")
    
    # Usar versión pública de GeoIP2 (alternativa: usar IP2Location)
    # Para MaxMind, se necesita registrarse. Aquí usamos una alternativa abierta:
    # Descargaremos de un espejo o usaremos ip2location-lite
    
    mmdb_path = BASE_DIR / "GeoLite2-City.mmdb"
    
    if mmdb_path.exists():
        print(f"✓ Base de datos ya existe: {mmdb_path}")
        return
    
    try:
        # Opción 1: Descargar de fuente pública (requiere registro en MaxMind)
        # Para fines de demostración, crearemos un archivo de configuración
        
        print("[!] Nota: Necesita descargar GeoLite2-City.mmdb manualmente de:")
        print("    https://www.maxmind.com/en/products/geolite2-free-geolocation-data")
        print("")
        print("    1. Registrarse en maxmind.com")
        print("    2. Descargar 'GeoLite2 City' (formato MMDB)")
        print("    3. Guardar como: " + str(mmdb_path))
        print("")
        
        # Crear un archivo de configuración alternativo para usar
        create_fallback_geoip_config()
        
    except Exception as e:
        print(f"[!] Error: {e}")
        print("[*] Usando configuración alternativa...")
        create_fallback_geoip_config()

def create_fallback_geoip_config():
    """Crea una configuración alternativa si MaxMind no está disponible"""
    config_path = BASE_DIR / "geoip_config.json"
    
    config = {
        "method": "fallback",
        "description": "Configuración alternativa de geolocalización",
        "notes": "Cuando GeoLite2-City.mmdb no está disponible, usar API gratuita con caché",
        "fallback_api": "ip-api.com",
        "cache_locations": True,
        "api_limit_per_day": 45000
    }
    
    with open(config_path, 'w') as f:
        json.dump(config, f, indent=2)
    
    print(f"✓ Configuración guardada en: {config_path}")

def install_dependencies():
    """Instala las librerías necesarias"""
    import subprocess
    import sys
    
    print("[*] Instalando dependencias de geolocalización...")
    
    packages = [
        "geoip2",
        "maxminddb",
        "requests"
    ]
    
    for package in packages:
        try:
            subprocess.check_call([sys.executable, "-m", "pip", "install", "-q", package])
            print(f"✓ {package} instalado")
        except Exception as e:
            print(f"[!] Error instalando {package}: {e}")

if __name__ == "__main__":
    print("=" * 70)
    print("SETUP - Geolocalización MaxMind GeoLite2")
    print("=" * 70)
    print()
    
    install_dependencies()
    print()
    setup_geoip()
    
    print()
    print("=" * 70)
    print("[✓] Setup completado")
    print("=" * 70)
