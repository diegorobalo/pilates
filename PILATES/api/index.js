import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let app = null;
let loadPromise = null;
let loadError = null;

async function loadBackendApp() {
  if (app) return app;
  if (loadError) throw loadError;

  try {
    console.log('🔍 Loading backend server...');
    const serverPath = path.resolve(__dirname, '../backend/src/server.js');
    console.log('📍 Backend path:', serverPath);

    const serverModule = await import(serverPath);
    app = serverModule.app;

    if (!app) {
      throw new Error('Server module does not export app');
    }

    console.log('✅ Backend server loaded successfully');
    return app;
  } catch (error) {
    console.error('❌ Failed to load backend server:', error.message);
    console.error('Stack:', error.stack);
    loadError = error;
    throw error;
  }
}

// Create a handler that dynamically loads and uses the real app
export default async (req, res) => {
  try {
    // Load app on first request if needed
    if (!loadPromise) {
      loadPromise = loadBackendApp();
    }

    const backendApp = await loadPromise;
    backendApp(req, res);
  } catch (error) {
    console.error('Request error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Backend initialization failed',
      error: error.message
    });
  }
};
