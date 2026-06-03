import sqlite3
import datetime

db_path = 'datos/balanza.db'
conn = sqlite3.connect(db_path)
c = conn.cursor()

print("=== Convirtiendo fechas de DD/MM/YYYY a YYYY-MM-DD ===\n")

# Obtener todos los pesajes con fecha_egreso
c.execute('SELECT id, fecha_egreso FROM pesajes WHERE fecha_egreso IS NOT NULL ORDER BY id DESC LIMIT 10')
rows = c.fetchall()

for pid, fecha_old in rows:
    if not fecha_old or '/' not in fecha_old:
        continue

    try:
        # Convertir de DD/MM/YYYY HH:MM:SS a YYYY-MM-DD HH:MM:SS
        dt_obj = datetime.datetime.strptime(fecha_old, "%d/%m/%Y %H:%M:%S")
        fecha_new = dt_obj.strftime("%Y-%m-%d %H:%M:%S")
        c.execute('UPDATE pesajes SET fecha_egreso=? WHERE id=?', (fecha_new, pid))
        print(f'ID {pid}: {fecha_old} -> {fecha_new}')
    except ValueError as e:
        print(f'ID {pid}: ERROR - {e}')

conn.commit()
affected = c.rowcount
print(f'\nTotal actualizados: {affected}')

print("\n=== Verificando dashboard ===")
hoy = datetime.datetime.now().strftime('%Y-%m-%d')
print(f'Buscando pesajes de hoy: {hoy}\n')

c.execute(
    "SELECT COUNT(*), COALESCE(SUM(peso_neto),0) FROM pesajes WHERE estado='cerrado' AND date(fecha_egreso)=?",
    (hoy,))
result = c.fetchone()
print(f'Pesajes cerrados hoy: {result[0]}')
print(f'Toneladas netas hoy: {result[1]/1000:.1f} tn')

conn.close()
