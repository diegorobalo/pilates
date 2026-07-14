import Schedule from '../models/Schedule.js';
import AlumnaSubscription from '../models/AlumnaSubscription.js';
import Reservation from '../models/Reservation.js';
import User from '../models/User.js';

export const getScheduleStats = async (req, res) => {
  try {
    const { fecha_desde, fecha_hasta } = req.query;

    if (!fecha_desde || !fecha_hasta) {
      return res.status(400).json({ error: 'Missing parameters: fecha_desde, fecha_hasta' });
    }

    const schedules = await Schedule.findByDateRange(fecha_desde, fecha_hasta);

    const stats = await Promise.all(
      schedules.map(async (schedule) => {
        const subscriptions = await AlumnaSubscription.findActive();
        const dayOfWeek = new Date(schedule.fecha).getDay();
        const matchingSubscriptions = subscriptions.filter(
          (s) => s.dia_semana === dayOfWeek && s.hora === schedule.hora
        );

        const reservations = await Reservation.findBySchedule(schedule.id);
        const profesora = schedule.profesora_asignada
          ? await User.findById(schedule.profesora_asignada)
          : null;

        return {
          ...schedule,
          subscribed_alumnos: matchingSubscriptions.length,
          reserved_spots: reservations.length,
          available_spots: 6 - reservations.length,
          capacity_percentage: Math.round((reservations.length / 6) * 100),
          profesora_name: profesora?.nombre || null,
          is_overbooking: matchingSubscriptions.length > 6
        };
      })
    );

    res.json({ stats });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching schedule stats', message: error.message });
  }
};

export const assignProfesora = async (req, res) => {
  try {
    const { id } = req.params;
    const { profesora_asignada, titulo } = req.body;

    const schedule = await Schedule.findById(id);
    if (!schedule) {
      return res.status(404).json({ error: 'Schedule not found' });
    }

    const updated = await Schedule.update(id, {
      profesora_asignada: profesora_asignada || null,
      titulo: titulo || schedule.titulo
    });

    const profesora = updated.profesora_asignada
      ? await User.findById(updated.profesora_asignada)
      : null;

    res.json({
      message: 'Schedule updated',
      schedule: {
        ...updated,
        profesora_name: profesora?.nombre || null
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Error updating schedule', message: error.message });
  }
};

export const getProfesoras = async (req, res) => {
  try {
    const profesoras = await User.findAll('PROFESORA');
    const dueña = await User.findAll('DUEÑA');
    const all = [...profesoras, ...dueña].map(u => ({
      id: u.id,
      nombre: u.nombre,
      apellido: u.apellido,
      tipo: u.tipo
    }));
    res.json({ profesoras: all });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching profesoras', message: error.message });
  }
};
