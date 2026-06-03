# -*- coding: utf-8 -*-
"""
diagnostico_puertos.py — Identifica puertos COM y prueba conexión a balanza
Útil para diagnosticar problemas de conexión serial
"""
import serial
import serial.tools.list_ports
import time

print("="*60)
print("DIAGNOSTICO DE PUERTOS COM")
print("="*60)

# Paso 1: Listar puertos disponibles
print("\n[PASO 1] Puertos COM disponibles en el sistema:")
puertos = serial.tools.list_ports.comports()
if not puertos:
    print("   ADVERTENCIA: NO se encontro ningun puerto COM")
else:
    for puerto in puertos:
        print(f"   OK - {puerto.device:8} - {puerto.description}")

# Paso 2: Probar conexión a cada puerto
print("\n[PASO 2] Intentando conectar a cada puerto (timeout 2 seg)...")
for puerto in puertos:
    device = puerto.device
    print(f"\n   Probando {device}...")
    try:
        ser = serial.Serial(
            port=device,
            baudrate=9600,
            bytesize=8,
            parity='N',
            stopbits=1,
            timeout=2
        )

        # Leer datos por 2 segundos
        print(f"   Esperando datos por 2 segundos...")
        data_recibida = False
        start = time.time()
        while time.time() - start < 2:
            if ser.in_waiting > 0:
                chunk = ser.read(ser.in_waiting)
                try:
                    texto = chunk.decode('ascii', errors='ignore')
                    print(f"   OK - DATOS RECIBIDOS: {repr(texto[:100])}")
                    data_recibida = True
                except:
                    print(f"   OK - DATOS RECIBIDOS (bytes): {chunk}")
                    data_recibida = True
            time.sleep(0.1)

        if not data_recibida:
            print(f"   ADVERTENCIA: No se recibieron datos (probablemente no hay balanza aqui)")

        ser.close()

    except Exception as e:
        print(f"   ERROR: {e}")

# Paso 3: Configuración actual
print("\n" + "="*60)
print("[PASO 3] Configuracion actual en config.ini:")
config_path = "config.ini"
try:
    with open(config_path) as f:
        for line in f:
            if "PUERTO" in line or "BAUD" in line:
                print(f"   {line.strip()}")
except FileNotFoundError:
    print(f"   ADVERTENCIA: Archivo {config_path} no encontrado")

print("\n" + "="*60)
print("INSTRUCCIONES:")
print("1. Asegurate que la balanza esta ENCENDIDA y conectada")
print("2. Verifica en el equipo a que puerto COM esta conectada")
print("3. Abre el programa -> Configuracion -> Balanza RS232")
print("4. Selecciona el puerto correcto y haz clic en 'Conectar'")
print("5. Si muestra 'OK - Conectado', guarda la configuracion")
print("="*60)
