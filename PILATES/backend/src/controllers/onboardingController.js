import User from '../models/User.js';

export const completeProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, fecha_nacimiento, direccion, ciudad } = req.body;

    if (!nombre || !apellido || !fecha_nacimiento) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'nombre, apellido, and fecha_nacimiento are required'
      });
    }

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.tipo !== 'ALUMNA') {
      return res.status(403).json({
        error: 'Forbidden',
        message: 'Only ALUMNA users can complete their profile'
      });
    }

    const updated = await User.update(id, {
      nombre,
      apellido,
      fecha_nacimiento,
      direccion: direccion || user.direccion,
      ciudad: ciudad || user.ciudad,
      datos_completados: 1
    });

    res.json({
      message: 'Profile completed successfully',
      user: updated
    });
  } catch (error) {
    res.status(500).json({
      error: 'Error completing profile',
      message: error.message
    });
  }
};

export const getAlumnaProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.tipo !== 'ALUMNA') {
      return res.status(403).json({ error: 'Only ALUMNA users can view their profile' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({
      error: 'Error fetching profile',
      message: error.message
    });
  }
};
