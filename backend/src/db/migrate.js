import { createClient } from '@libsql/client';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config({ path: '../../../.env.local' });

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const migrate = async () => {
  const databaseUrl = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!databaseUrl) {
    console.error('❌ TURSO_DATABASE_URL not set');
    process.exit(1);
  }

  try {
    const client = createClient({
      url: databaseUrl,
      authToken: authToken,
    });

    const migrationPath = path.join(__dirname, '../../migration_2026_07_03.sql');
    const migrationSql = fs.readFileSync(migrationPath, 'utf8');

    console.log('🚀 Running migration on Turso...');
    const statements = migrationSql
      .split(';')
      .map(s => s.trim())
      .filter(s => s && !s.startsWith('--'));

    for (const stmt of statements) {
      console.log(`  ↳ ${stmt.substring(0, 60)}...`);
      await client.execute(stmt);
    }

    console.log('✅ Migration completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  }
};

migrate();
