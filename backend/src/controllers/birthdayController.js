import User from '../models/User.js';

export const getMonthBirthdays = async (req, res) => {
  try {
    const { month, year } = req.query;

    if (!month || !year) {
      return res.status(400).json({
        error: 'Missing parameters',
        message: 'month and year are required (e.g., ?month=7&year=2026)'
      });
    }

    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);

    if (isNaN(monthNum) || isNaN(yearNum) || monthNum < 1 || monthNum > 12) {
      return res.status(400).json({ error: 'Invalid month or year' });
    }

    const users = await User.findAll();
    const birthdays = users
      .filter(u => u.fecha_nacimiento && u.tipo !== 'ADMIN')
      .map(u => {
        const [year, month, day] = u.fecha_nacimiento.split('-').map(Number);
        return {
          id: u.id,
          nombre: `${u.nombre} ${u.apellido || ''}`.trim(),
          fecha_nacimiento: u.fecha_nacimiento,
          dia: day,
          mes: month,
          tipo: u.tipo,
          edad: new Date().getFullYear() - year
        };
      })
      .filter(b => b.mes === monthNum)
      .sort((a, b) => a.dia - b.dia);

    res.json({ birthdays });
  } catch (error) {
    res.status(500).json({
      error: 'Error fetching birthdays',
      message: error.message
    });
  }
};
