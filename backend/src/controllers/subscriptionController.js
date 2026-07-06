import AlumnaSubscription from '../models/AlumnaSubscription.js';
import Reservation from '../models/Reservation.js';
import Schedule from '../models/Schedule.js';
import CalendarException from '../models/CalendarException.js';

export const createSubscription = async (req, res) => {
  try {
    const { dia_semana, hora, cama_preferida, fecha_fin, notas } = req.body;
    const alumna_id = req.user.id;

    if (dia_semana === undefined || !hora) {
      return res.status(400).json({ error: 'Missing required fields: dia_semana, hora' });
    }

    const subscription = await AlumnaSubscription.create({
      alumna_id,
      dia_semana,
      hora,
      cama_preferida: cama_preferida || null,
      fecha_fin: fecha_fin || null,
      notas: notas || null
    });

    res.status(201).json({ message: 'Subscription created', subscription });
  } catch (error) {
    res.status(500).json({ error: 'Error creating subscription', message: error.message });
  }
};

export const getMySubscriptions = async (req, res) => {
  try {
    const alumna_id = req.user.id;
    const subscriptions = await AlumnaSubscription.findByAlumna(alumna_id, true);
    res.json({ subscriptions });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching subscriptions', message: error.message });
  }
};

export const getSubscriptions = async (req, res) => {
  try {
    const { alumna_id } = req.query;

    if (alumna_id) {
      const subscriptions = await AlumnaSubscription.findByAlumna(alumna_id);
      return res.json({ subscriptions });
    }

    const subscriptions = await AlumnaSubscription.findActive();
    res.json({ subscriptions });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching subscriptions', message: error.message });
  }
};

export const updateSubscription = async (req, res) => {
  try {
    const { id } = req.params;
    const { hora, cama_preferida, activa, fecha_fin, notas } = req.body;

    const subscription = await AlumnaSubscription.update(id, {
      hora, cama_preferida, activa, fecha_fin, notas
    });

    res.json({ message: 'Subscription updated', subscription });
  } catch (error) {
    res.status(500).json({ error: 'Error updating subscription', message: error.message });
  }
};

export const cancelSubscription = async (req, res) => {
  try {
    const { id } = req.params;

    const subscription = await AlumnaSubscription.update(id, { activa: 0 });

    res.json({ message: 'Subscription cancelled', subscription });
  } catch (error) {
    res.status(500).json({ error: 'Error cancelling subscription', message: error.message });
  }
};

export const deleteSubscription = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await AlumnaSubscription.delete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Subscription not found' });
    }

    res.json({ message: 'Subscription deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting subscription', message: error.message });
  }
};

export const generateReservationsFromSubscriptions = async (req, res) => {
  try {
    const daysAhead = req.body.daysAhead || 28;
    const startDate = new Date();
    const endDate = new Date(startDate.getTime() + daysAhead * 24 * 60 * 60 * 1000);

    const subscriptions = await AlumnaSubscription.findActive();
    let generatedCount = 0;
    const errors = [];

    for (const sub of subscriptions) {
      try {
        const date = new Date(startDate);

        while (date <= endDate) {
          if (date.getDay() === sub.dia_semana) {
            const dateStr = date.toISOString().split('T')[0];

            const isClosed = await CalendarException.isClosed(dateStr);
            if (isClosed) {
              date.setDate(date.getDate() + 7);
              continue;
            }

            const schedule = await Schedule.findByDateAndTime(dateStr, sub.hora);
            if (!schedule) {
              date.setDate(date.getDate() + 7);
              continue;
            }

            const existingReservation = await Reservation.findOne({
              alumna_id: sub.alumna_id,
              horario_id: schedule.id
            });

            if (!existingReservation) {
              const cama = sub.cama_preferida || 1;
              const reservation = await Reservation.create({
                alumna_id: sub.alumna_id,
                horario_id: schedule.id,
                cama_numero: cama,
                estado: 'PENDIENTE'
              });

              await Reservation.linkToSubscription(reservation.id, sub.id);
              generatedCount++;
            }
          }

          date.setDate(date.getDate() + 1);
        }
      } catch (error) {
        errors.push(`Subscription ${sub.id}: ${error.message}`);
      }
    }

    res.json({
      message: `Generated ${generatedCount} reservations from subscriptions`,
      generatedCount,
      errors: errors.length > 0 ? errors : undefined
    });
  } catch (error) {
    res.status(500).json({ error: 'Error generating reservations', message: error.message });
  }
};
