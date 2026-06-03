import sqlite3
db_path = 'datos/balanza.db'
conn = sqlite3.connect(db_path)
c = conn.cursor()

print("=== Estado actual ===")
c.execute('SELECT id, nro_doc, fecha_egreso, typeof(fecha_egreso) FROM pesajes WHERE estado="cerrado" ORDER BY id DESC LIMIT 3')
for row in c.fetchall():
    print(f'ID:{row[0]} | Doc:{row[1]} | fecha_egreso:{repr(row[2])} | type:{row[3]}')

print("\n=== Actualizando egresos sin fecha ===")
# Actualizar egresos sin fecha usando fecha_ingreso + 5 minutos
c.execute('''UPDATE pesajes
            SET fecha_egreso = datetime(substr(fecha_ingreso, 7, 4) || '-' || substr(fecha_ingreso, 4, 2) || '-' || substr(fecha_ingreso, 1, 2) || ' ' || substr(fecha_ingreso, 12), '+5 minutes')
            WHERE estado='cerrado' AND (fecha_egreso IS NULL OR fecha_egreso = '')''')

affected = c.rowcount
print(f'Registros actualizados: {affected}')

print("\n=== Estado despues ===")
c.execute('SELECT id, nro_doc, fecha_egreso FROM pesajes WHERE estado="cerrado" ORDER BY id DESC LIMIT 3')
for row in c.fetchall():
    print(f'ID:{row[0]} | Doc:{row[1]} | fecha_egreso:{repr(row[2])}')

conn.commit()
conn.close()

print("\n=== Verificando dashboard query ===")
import datetime
hoy = datetime.datetime.now().strftime('%Y-%m-%d')
print(f'Buscando para hoy: {hoy}')

conn = sqlite3.connect(db_path)
c = conn.cursor()
cerrados = c.execute(
    "SELECT COUNT(*), COALESCE(SUM(peso_neto),0) FROM pesajes WHERE estado='cerrado' AND date(fecha_egreso)=?",
    (hoy,)).fetchone()
print(f'Pesajes cerrados hoy: {cerrados[0]}')
print(f'Toneladas netas: {cerrados[1]/1000:.1f} tn')
conn.close()
