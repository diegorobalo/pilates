#!/usr/bin/env python3
"""
Script para procesar fichadas desde CrossChex
Lee ZIP de la carpeta de fichadas, mapea a usuarios VPN, y guarda datos
"""

import zipfile
import csv
import os
import json
from datetime import datetime
from pathlib import Path
from collections import defaultdict

# CONFIGURACIÓN
FICHADAS_PATH = r"\\10.0.1.10\Argensun\RRHH\Fichadas\Procesados"
CURRENT_MONTH = "202605"  # Cambiar según mes (202605, 202604, etc)
OUTPUT_FILE = r"C:\VPN_MONITOR\fichadas_data.json"
USUARIOS_MAPEO = r"C:\VPN_MONITOR\usuarios_mapeo.csv"

# Lugares de interés
LUGARES = {
    "12": "Oficinas Victoria",
    "50": "Planta Linera"
}

def cargar_mapeo_usuarios():
    """Carga el mapeo de legajo -> usuario_vpn desde CSV"""
    mapeo = {}
    try:
        with open(USUARIOS_MAPEO, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                legajo = str(row['Legajo']).strip()
                usuario_vpn = row['Usuario VPN'].strip().lower()
                mapeo[legajo] = usuario_vpn
        print(f"✅ Cargado mapeo de {len(mapeo)} usuarios")
        return mapeo
    except Exception as e:
        print(f"❌ Error cargando mapeo: {e}")
        return {}

def procesar_fichadas(mapeo):
    """Procesa los archivos ZIP de fichadas"""
    resultado = {}
    mes_path = os.path.join(FICHADAS_PATH, CURRENT_MONTH)

    if not os.path.exists(mes_path):
        print(f"❌ Carpeta no encontrada: {mes_path}")
        return resultado

    print(f"📁 Leyendo carpeta: {mes_path}")

    # Buscar todos los ZIP en la carpeta
    zip_files = [f for f in os.listdir(mes_path) if f.endswith('.zip')]
    print(f"📦 Encontrados {len(zip_files)} archivos ZIP")

    for zip_file in zip_files:
        zip_path = os.path.join(mes_path, zip_file)
        print(f"\n📂 Procesando: {zip_file}")

        try:
            with zipfile.ZipFile(zip_path, 'r') as zip_ref:
                # Buscar archivo CSV dentro del ZIP
                csv_files = [f for f in zip_ref.namelist() if f.endswith('.csv')]

                for csv_file in csv_files:
                    with zip_ref.open(csv_file) as f:
                        # Decodificar como latin-1 (encoding típico de sistemas legacy)
                        content = f.read().decode('latin-1')
                        lines = content.strip().split('\n')

                        # Parsear líneas (no tiene headers)
                        for line in lines:
                            if not line.strip():
                                continue

                            parts = line.split(',')
                            if len(parts) < 3:
                                continue

                            try:
                                legajo = parts[0].strip()
                                datetime_str = ' '.join([parts[1].strip(), parts[2].strip()])
                                lugar = parts[3].strip() if len(parts) > 3 else None

                                # Filtrar por lugar
                                if lugar not in LUGARES:
                                    continue

                                # Filtrar por usuarios en mapeo
                                if legajo not in mapeo:
                                    continue

                                usuario_vpn = mapeo[legajo]

                                # Parsear fecha y hora
                                try:
                                    dt = datetime.strptime(datetime_str, "%Y-%m-%d %H:%M:%S")
                                    fecha = dt.strftime("%Y-%m-%d")
                                    hora = dt.strftime("%H:%M")
                                except:
                                    continue

                                # Agrupar por usuario y fecha
                                key = f"{usuario_vpn}_{fecha}"
                                if key not in resultado:
                                    resultado[key] = {
                                        "usuario_vpn": usuario_vpn,
                                        "legajo": legajo,
                                        "fecha": fecha,
                                        "lugar": lugar,
                                        "ubicacion": LUGARES[lugar],
                                        "entrada": None,
                                        "salida": None,
                                        "registros": []
                                    }

                                # Guardar todas las horas para determinar entrada/salida
                                resultado[key]["registros"].append(hora)

                            except Exception as e:
                                continue

        except Exception as e:
            print(f"⚠️  Error procesando {zip_file}: {e}")

    # Post-procesamiento: determinar entrada (primer registro) y salida (último)
    for key in resultado:
        if resultado[key]["registros"]:
            resultado[key]["registros"].sort()
            resultado[key]["entrada"] = resultado[key]["registros"][0]
            resultado[key]["salida"] = resultado[key]["registros"][-1]
            del resultado[key]["registros"]  # Eliminar detalles

    return resultado

def guardar_datos(datos):
    """Guarda los datos en JSON"""
    try:
        # Convertir diccionario a lista para JSON
        lista_datos = list(datos.values())

        # Estructurar por usuario
        usuarios = defaultdict(list)
        for registro in lista_datos:
            usuarios[registro["usuario_vpn"]].append({
                "fecha": registro["fecha"],
                "entrada": registro["entrada"],
                "salida": registro["salida"],
                "ubicacion": registro["ubicacion"],
                "legajo": registro["legajo"]
            })

        salida = {
            "timestamp": datetime.now().isoformat(),
            "mes": CURRENT_MONTH,
            "total_registros": len(lista_datos),
            "usuarios": dict(usuarios)
        }

        # Guardar JSON
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            json.dump(salida, f, ensure_ascii=False, indent=2)

        print(f"\n✅ Datos guardados en: {OUTPUT_FILE}")
        print(f"   Total registros: {len(lista_datos)}")
        print(f"   Usuarios únicos: {len(usuarios)}")
        return True
    except Exception as e:
        print(f"❌ Error guardando datos: {e}")
        return False

def main():
    print("=" * 60)
    print("🔄 PROCESADOR DE FICHADAS - CrossChex")
    print("=" * 60)

    # Cargar mapeo de usuarios
    mapeo = cargar_mapeo_usuarios()
    if not mapeo:
        print("❌ No se pudo cargar el mapeo de usuarios")
        return False

    # Procesar fichadas
    datos = procesar_fichadas(mapeo)
    if not datos:
        print("⚠️  No se encontraron registros de fichadas")
        return False

    # Guardar datos
    if guardar_datos(datos):
        print("\n✅ Proceso completado exitosamente")
        return True
    else:
        print("\n❌ Error en el proceso")
        return False

if __name__ == "__main__":
    main()
