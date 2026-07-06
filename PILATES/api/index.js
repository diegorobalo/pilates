import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let app;

async function loadApp() {
  try {
    console.log('🔍 Loading backend server...');
    console.log('📍 API dir:', __dirname);
    console.log('📍 Backend path:', path.resolve(__dirname, '../backend/src/server.js'));

    const serverPath = path.resolve(__dirname, '../backend/src/server.js');
    const serverModule = await import(serverPath);
    app = serverModule.app;

    if (!app) {
      throw new Error('Server module does not export app');
    }

    console.log('✅ Backend server loaded successfully');
  } catch (error) {
    console.error('❌ Failed to load backend server:', error.message);
    console.error('Stack:', error.stack);

    // Fallback: simple error handler
    import('express').then(expressModule => {
      const express = expressModule.default;
      app = express();
      app.get('/api/health', (req, res) => {
        res.status(500).json({
          status: 'error',
          message: 'Backend initialization failed',
          error: error.message
        });
      });
    });
  }
}

await loadApp();
export default app;
