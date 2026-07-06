export default async (req, res) => {
  if (req.method === 'GET' && req.url === '/api/health') {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).end(JSON.stringify({
      status: 'ok',
      timestamp: new Date().toISOString()
    }));
  } else {
    res.status(404).end('Not Found');
  }
};
