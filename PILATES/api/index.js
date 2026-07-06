// Vercel serverless function
// Dynamic import of the backend app

let appInstance = null;
let appError = null;

async function getApp() {
  if (appInstance) return appInstance;
  if (appError) throw appError;

  try {
    // Import the backend server
    const { app } = await import('../backend/src/server.js');
    appInstance = app;
    return app;
  } catch (error) {
    appError = error;
    console.error('Failed to load backend app:', error);
    throw error;
  }
}

export default async (req, res) => {
  try {
    const app = await getApp();
    app(req, res);
  } catch (error) {
    console.error('Handler error:', error);
    res.status(500).json({
      error: 'Backend failed to initialize',
      message: error.message,
    });
  }
};
