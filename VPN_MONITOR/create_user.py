import sqlite3
from werkzeug.security import generate_password_hash

db = sqlite3.connect('data/users.db')
c = db.cursor()

c.execute("""CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT DEFAULT 'user'
)""")

c.execute("DELETE FROM users WHERE username=?", ('admin',))
c.execute("INSERT INTO users (username, password_hash, role) VALUES (?, ?, ?)",
          ('admin', generate_password_hash('admin123'), 'admin'))

db.commit()
db.close()
print('OK - Usuario admin creado')
