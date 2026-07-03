import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET_KEY;

/**
 * Authentication middleware - verifies JWT token
 * Attaches user data to req.user
 */
export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        error: 'Missing authorization header',
        message: 'Authorization header is required'
      });
    }

    const token = authHeader.startsWith('Bearer ')
      ? authHeader.slice(7)
      : authHeader;

    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({
          error: 'Token expired',
          message: 'Access token has expired. Please refresh your token'
        });
      }
      return res.status(401).json({
        error: 'Invalid token',
        message: error.message
      });
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).json({
      error: 'Authentication error',
      message: error.message
    });
  }
};

/**
 * Role-based access control middleware
 * Checks if user has required role(s)
 * @param {string|string[]} allowedRoles - Role(s) allowed to access this endpoint
 */
export const requireRole = (allowedRoles) => {
  const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];

  // Build the effective allow-set:
  // - ADMIN is the master account and can access everything.
  // - PROFESORA shares the same privileges as DUEÑA (turnos/alumnas/etc.).
  const effective = new Set(roles);
  effective.add('ADMIN');
  if (effective.has('DUEÑA')) effective.add('PROFESORA');

  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        error: 'Authentication required',
        message: 'Please provide a valid token'
      });
    }

    if (!effective.has(req.user.tipo)) {
      return res.status(403).json({
        error: 'Insufficient permissions',
        message: `This operation requires one of these roles: ${[...effective].join(', ')}`
      });
    }

    next();
  };
};
