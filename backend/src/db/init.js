import fs from 'fs';
import path from 'path';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database file path
const dbPath = path.join(__dirname, '..', '..', '..', 'pilates.db');

// Read schema.sql file
const schemaPath = path.join(__dirname, 'schema.sql');
const schema = fs.readFileSync(schemaPath, 'utf-8');

// Initialize database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
    process.exit(1);
  }
  console.log('Connected to SQLite database at:', dbPath);
});

// Enable foreign keys
db.run('PRAGMA foreign_keys = ON', (err) => {
  if (err) {
    console.error('Error enabling foreign keys:', err.message);
    process.exit(1);
  }
});

// Split schema into individual statements and execute them
// Remove SQL comments first
const cleanSchema = schema
  .split('\n')
  .filter(line => !line.trim().startsWith('--'))
  .join('\n');

const statements = cleanSchema
  .split(';')
  .map(stmt => stmt.trim())
  .filter(stmt => stmt.length > 0);

// Execute statements sequentially using serialized mode
db.serialize(() => {
  statements.forEach((statement, index) => {
    db.run(statement, (err) => {
      if (err) {
        console.error(`Error executing statement ${index + 1}:`, err.message);
        console.error('Statement:', statement.substring(0, 100));
        process.exit(1);
      }
    });
  });

  // After all statements are queued, close the database
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err.message);
      process.exit(1);
    }
    console.log('\n✓ Database schema initialized successfully!');
    console.log(`✓ Executed ${statements.length} SQL statements`);
    console.log('✓ Database file location:', dbPath);
    process.exit(0);
  });
});

// Handle database errors
db.on('error', (err) => {
  console.error('Database error:', err.message);
  process.exit(1);
});
