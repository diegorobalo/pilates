import { getAsync, allAsync, runAsync } from '../db/connection.js';
import { v4 as uuidv4 } from 'uuid';

/**
 * Get all configuration values
 * GET /api/config
 */
export const getConfig = async (req, res, next) => {
  try {
    const configs = await allAsync('SELECT * FROM configuracion ORDER BY clave ASC');

    // Convert to object for easier access
    const configObj = {};
    configs.forEach(config => {
      let value = config.valor;
      if (config.tipo === 'number') {
        value = parseInt(value);
      } else if (config.tipo === 'boolean') {
        value = config.valor === 'true';
      } else if (config.tipo === 'json') {
        try {
          value = JSON.parse(config.valor);
        } catch (e) {
          value = config.valor;
        }
      }
      configObj[config.clave] = value;
    });

    res.json({ config: configObj, raw: configs });
  } catch (error) {
    next(error);
  }
};

/**
 * Get specific configuration value
 * GET /api/config/:clave
 */
export const getConfigValue = async (req, res, next) => {
  try {
    const { clave } = req.params;
    const config = await getAsync('SELECT * FROM configuracion WHERE clave = ?', [clave]);

    if (!config) {
      return res.status(404).json({ error: 'Configuration not found' });
    }

    let value = config.valor;
    if (config.tipo === 'number') {
      value = parseInt(value);
    } else if (config.tipo === 'boolean') {
      value = config.valor === 'true';
    } else if (config.tipo === 'json') {
      try {
        value = JSON.parse(config.valor);
      } catch (e) {
        value = config.valor;
      }
    }

    res.json({ clave: config.clave, value, tipo: config.tipo });
  } catch (error) {
    next(error);
  }
};

/**
 * Update configuration value
 * PUT /api/config/:clave
 * Body: { valor, descripcion? }
 * Only ADMIN can update configuration
 */
export const updateConfigValue = async (req, res, next) => {
  try {
    const { clave } = req.params;
    const { valor, descripcion } = req.body;

    if (!valor) {
      return res.status(400).json({ error: 'valor is required' });
    }

    // Check if exists
    const existing = await getAsync('SELECT * FROM configuracion WHERE clave = ?', [clave]);

    if (!existing) {
      return res.status(404).json({ error: 'Configuration not found' });
    }

    // Update
    await runAsync(
      `UPDATE configuracion SET valor = ?, descripcion = ?, fecha_actualizacion = CURRENT_TIMESTAMP, actualizado_por = ?
       WHERE clave = ?`,
      [valor, descripcion || existing.descripcion, req.user.userId, clave]
    );

    const updated = await getAsync('SELECT * FROM configuracion WHERE clave = ?', [clave]);
    res.json({ message: 'Configuration updated', config: updated });
  } catch (error) {
    next(error);
  }
};

/**
 * Initialize default configuration
 * POST /api/config/init
 * Only ADMIN can initialize
 */
export const initializeConfig = async (req, res, next) => {
  try {
    const defaults = [
      {
        clave: 'CAPACIDAD_CAMAS',
        valor: '6',
        descripcion: 'Número máximo de camas (estudiantes) por clase',
        tipo: 'number'
      },
      {
        clave: 'CLASE_DURACION_MINUTOS',
        valor: '60',
        descripcion: 'Duración estándar de una clase en minutos',
        tipo: 'number'
      },
      {
        clave: 'MONEDA',
        valor: 'ARS',
        descripcion: 'Moneda utilizada en el sistema',
        tipo: 'string'
      }
    ];

    for (const config of defaults) {
      const existing = await getAsync(
        'SELECT * FROM configuracion WHERE clave = ?',
        [config.clave]
      );

      if (!existing) {
        await runAsync(
          `INSERT INTO configuracion (id, clave, valor, descripcion, tipo, actualizado_por)
           VALUES (?, ?, ?, ?, ?, ?)`,
          [uuidv4(), config.clave, config.valor, config.descripcion, config.tipo, req.user.userId]
        );
      }
    }

    const configs = await allAsync('SELECT * FROM configuracion ORDER BY clave ASC');
    res.json({ message: 'Configuration initialized', configs });
  } catch (error) {
    next(error);
  }
};
