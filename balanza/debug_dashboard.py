import sqlite3, datetime
db_path = 'datos/balanza.db'
hoy = datetime.datetime.now().strftime('%Y-%m-%d')
print(f'Buscando pesajes de hoy: {hoy}\n')

conn = sqlite3.connect(db_path)
c = conn.cursor()

# Query del dashboard
cerrados = c.execute(
    "SELECT COUNT(*), COALESCE(SUM(peso_neto),0) FROM pesajes WHERE estado='cerrado' AND date(fecha_egreso)=?",
    (hoy,)).fetchone()

print(f'Pesajes cerrados hoy: {cerrados[0]}')
print(f'Toneladas netas hoy: {cerrados[1]/1000:.1f} tn')

# Ver qué fechas tiene en la BD
todas = c.execute(
    "SELECT DISTINCT date(fecha_egreso) FROM pesajes WHERE estado='cerrado' ORDER BY fecha_egreso DESC"
).fetchall()
print(f'\nFechas de egresos cerrados en BD:')
for f in todas:
    print(f'  - {f[0]}')

print(f'\nHoy esperamos: {hoy}')

conn.close()
