import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, '..', '..', '..', 'pilates.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
    process.exit(1);
  }
});

console.log('Verifying PILATES Database Schema\n');
console.log('=' .repeat(50));

// Get all tables
db.all("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name", (err, tables) => {
  if (err) {
    console.error('Error reading tables:', err.message);
    process.exit(1);
  }

  console.log('\nTables created:');
  tables.forEach(table => {
    console.log(`  ✓ ${table.name}`);
  });

  // Get column info for each table
  console.log('\n' + '='.repeat(50));
  console.log('Table Schemas:\n');

  let completed = 0;

  tables.forEach(table => {
    db.all(`PRAGMA table_info(${table.name})`, (err, columns) => {
      if (err) {
        console.error(`Error reading columns for ${table.name}:`, err.message);
        return;
      }

      console.log(`\n${table.name}:`);
      columns.forEach(col => {
        const notnull = col.notnull ? ' NOT NULL' : '';
        const pk = col.pk ? ' PRIMARY KEY' : '';
        console.log(`  - ${col.name}: ${col.type}${notnull}${pk}`);
      });

      completed++;
      if (completed === tables.length) {
        // Get indexes
        console.log('\n' + '='.repeat(50));
        console.log('\nIndexes created:');

        db.all("SELECT name FROM sqlite_master WHERE type='index' AND name NOT LIKE 'sqlite_%' ORDER BY name", (err, indexes) => {
          if (err) {
            console.error('Error reading indexes:', err.message);
            process.exit(1);
          }

          indexes.forEach(idx => {
            console.log(`  ✓ ${idx.name}`);
          });

          console.log('\n' + '='.repeat(50));
          console.log('\n✓ Database verification complete!\n');
          db.close();
          process.exit(0);
        });
      }
    });
  });
});
