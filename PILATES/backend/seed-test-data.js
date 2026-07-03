import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, '..', 'pilates.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
    process.exit(1);
  }
  console.log('Connected to database');
});

db.serialize(() => {
  // Insert DUEÑA user
  db.run(
    `INSERT OR IGNORE INTO users (id, nombre, telefono, tipo, estado, fecha_registro)
     VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
    ['dueña-001', 'Claudia Piletero', '5551111111', 'DUEÑA', 'ACTIVA'],
    function(err) {
      if (err) {
        console.error('Error inserting DUEÑA:', err.message);
      } else {
        console.log('✓ DUEÑA user created: 5551111111');
      }
    }
  );

  // Insert ALUMNA user 1
  db.run(
    `INSERT OR IGNORE INTO users (id, nombre, telefono, tipo, estado, fecha_registro)
     VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
    ['alumna-001', 'María García', '5552222222', 'ALUMNA', 'ACTIVA'],
    function(err) {
      if (err) {
        console.error('Error inserting ALUMNA 1:', err.message);
      } else {
        console.log('✓ ALUMNA user 1 created: 5552222222');
      }
    }
  );

  // Insert ALUMNA user 2
  db.run(
    `INSERT OR IGNORE INTO users (id, nombre, telefono, tipo, estado, fecha_registro)
     VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
    ['alumna-002', 'Ana Rodríguez', '5553333333', 'ALUMNA', 'ACTIVA'],
    function(err) {
      if (err) {
        console.error('Error inserting ALUMNA 2:', err.message);
      } else {
        console.log('✓ ALUMNA user 2 created: 5553333333');
      }
    }
  );

  // Verify insertion
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
      console.error('Error reading users:', err.message);
    } else {
      console.log('\n✓ Test data inserted successfully!');
      console.log(`Total users in database: ${rows.length}`);
      rows.forEach(row => {
        console.log(`  - ${row.nombre} (${row.telefono}) - ${row.tipo}`);
      });
    }

    db.close((err) => {
      if (err) {
        console.error('Error closing database:', err.message);
      }
      process.exit(0);
    });
  });
});
