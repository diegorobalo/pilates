#!/usr/bin/env python3
"""
Test MaxMind GeoLite2 contra las IPs
"""
import geoip2.database

# Ruta a la BD
db_path = r"C:\Users\diego.robalo\Documents\CLAUDIA\Monitor VPN\GeoLite2-City.mmdb"

# IPs a testear
ips = {
    "181.117.10.228": "Tu IP (debería ser Escobar)",
    "152.168.90.26": "Otra IP (debería ser Rosario/Funes)"
}

try:
    reader = geoip2.database.Reader(db_path)
    
    print("=" * 70)
    print("MAXMIND GEOLITE2 - TEST DE UBICACIÓN")
    print("=" * 70)
    
    for ip, description in ips.items():
        print(f"\n📍 {description}")
        print(f"   IP: {ip}")
        try:
            response = reader.city(ip)
            ciudad = response.city.name or "Desconocida"
            region = response.subdivisions[0].name if response.subdivisions else "Desconocida"
            pais = response.country.name
            lat = response.location.latitude
            lng = response.location.longitude
            
            print(f"   Ciudad: {ciudad}")
            print(f"   Región/Provincia: {region}")
            print(f"   País: {pais}")
            print(f"   Coordenadas: ({lat}, {lng})")
        except Exception as e:
            print(f"   ❌ Error: {e}")
    
    reader.close()
    print("\n" + "=" * 70)
    
except Exception as e:
    print(f"❌ Error al abrir BD: {e}")
    print("¿Está instalada la librería geoip2?")
    print("Instala con: pip install geoip2")