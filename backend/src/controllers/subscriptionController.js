import AlumnaSubscription from '../models/AlumnaSubscription.js';
import Reservation from '../models/Reservation.js';
import Schedule from '../models/Schedule.js';
import CalendarException from '../models/CalendarException.js';

// Timezone-safe YYYY-MM-DD (avoids UTC off-by-one from toISOString)
const toISODate = (d) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

/**
 * Create PENDIENTE reservations for a single subscription across the next
 * `daysAhead` days, for every matching class schedule that exists.
 * Picks the preferred bed if free, otherwise the first available one.
 * Returns how many reservations were generated.
 */
async function generateForSubscription(sub, daysAhead = 28) {
  const start = new Date();
  const end = new Date(start.getTime() + daysAhead * 24 * 60 * 60 * 1000);
  let count = 0;
  const cursor = new Date(start);

  while (cursor <= end) {
    if (cursor.getDay() === sub.dia_semana) {
      const dateStr = toISODate(cursor);
      const isClosed = await CalendarException.isClosed(dateStr);
      if (!isClosed) {
        const schedule = await Schedule.findByDateAndTime(dateStr, sub.hora);
        if (schedule) {
          const existing = await Reservation.findOne({
            alumna_id: sub.alumna_id,
            horario_id: schedule.id
          });
          if (!existing) {
            const available = await Schedule.getAvailableBeds(schedule.id);
            if (available.length > 0) {
              const cama =
                sub.cama_preferida && available.includes(sub.cama_preferida)
                  ? sub.cama_preferida
                  : available[0];
              const reservation = await Reservation.create({
                alumna_id: sub.alumna_id,
                horario_id: schedule.id,
                cama_numero: cama,
                estado: 'PENDIENTE'
              });
              count++;
              // Linking is metadata only — never let it abort generation.
              try {
                await Reservation.linkToSubscription(reservation.id, sub.id);
              } catch (linkErr) {
                console.error('linkToSubscription failed (non-fatal):', linkErr.message);
              }
            }
          }
        }
      }
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return count;
}

export const createSubscription = async (req, res) => {
  try {
    const { dia_semana, hora, cama_preferida, fecha_fin, notas } = req.body;
    const alumna_id = req.user.userId;

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

    // Immediately generate pending reservations so they show up for staff to
    // authorize (there is no background cron on the hosting platform).
    let generatedReservations = 0;
    try {
      generatedReservations = await generateForSubscription(subscription);
    } catch (genErr) {
      console.error('Error generating reservations for subscription:', genErr.message);
    }

    res.status(201).json({
      message: 'Subscription created',
      subscription,
      generatedReservations
    });
  } catch (error) {
    // Duplicate day+time subscription for the same alumna
    if (/UNIQUE constraint/i.test(error.message)) {
      return res.status(409).json({
        error: 'Duplicate subscription',
        message: 'Ya tenés una suscripción para ese día y horario.'
      });
    }
    res.status(500).json({ error: 'Error creating subscription', message: error.message });
  }
};

export const getMySubscriptions = async (req, res) => {
  try {
    const alumna_id = req.user.userId;
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
    const subscriptions = await AlumnaSubscription.findActive();
    let generatedCount = 0;
    const errors = [];

    for (const sub of subscriptions) {
      try {
        generatedCount += await generateForSubscription(sub, daysAhead);
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
