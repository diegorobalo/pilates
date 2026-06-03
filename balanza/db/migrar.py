"""
db/migrar.py — Migración de base de datos
Agrega columnas/tablas nuevas sin perder datos.
"""
import sqlite3, os


def migrar(path):
    if not os.path.exists(path):
        return
    try:
        c = sqlite3.connect(path)

        # Columnas nuevas en pesajes
        cols_pesajes = [
            ("estado",        "TEXT DEFAULT 'cerrado'"),
            ("id_contenedor", "TEXT"),
        ]
        existentes = [r[1] for r in c.execute("PRAGMA table_info(pesajes)").fetchall()]
        for col, defn in cols_pesajes:
            if col not in existentes:
                c.execute(f"ALTER TABLE pesajes ADD COLUMN {col} {defn}")

        # Normalizar estado en registros viejos
        c.execute("UPDATE pesajes SET estado='cerrado' WHERE (estado IS NULL OR estado='') AND fecha_egreso IS NOT NULL")
        c.execute("UPDATE pesajes SET estado='abierto'  WHERE (estado IS NULL OR estado='') AND fecha_egreso IS NULL")

        # Crear tabla certificado_balanza si no existe
        c.execute("""CREATE TABLE IF NOT EXISTS certificado_balanza (
            id INTEGER PRIMARY KEY,
            nro_certificado TEXT,
            vencimiento TEXT,
            descripcion TEXT,
            puerto TEXT DEFAULT 'COM1',
            databits INTEGER DEFAULT 8,
            stopbits INTEGER DEFAULT 1,
            paridad INTEGER DEFAULT 0,
            handshake INTEGER DEFAULT 0,
            baud_rate INTEGER DEFAULT 9600,
            caracter_corte INTEGER DEFAULT 13,
            nro_certificado_ot TEXT
        )""")

        # Columnas nuevas en productos (v2.1)
        cols_prod = [r[1] for r in c.execute("PRAGMA table_info(productos)").fetchall()]
        if "peso_min" not in cols_prod:
            c.execute("ALTER TABLE productos ADD COLUMN peso_min REAL DEFAULT 0")
        if "peso_max" not in cols_prod:
            c.execute("ALTER TABLE productos ADD COLUMN peso_max REAL DEFAULT 0")

        c.commit()
        c.close()
        print("[migrar] OK")
    except Exception as e:
        print(f"[migrar] {e}")
