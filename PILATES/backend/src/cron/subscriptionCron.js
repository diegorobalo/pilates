import cron from 'node-cron';
import AlumnaSubscription from '../models/AlumnaSubscription.js';
import Schedule from '../models/Schedule.js';
import Reservation from '../models/Reservation.js';
import CalendarException from '../models/CalendarException.js';

/**
 * Auto-generate reservations from active subscriptions
 * Runs daily at 02:00 AM
 * Creates reservations for the next 30 days, respecting calendar exceptions
 */
export function initSubscriptionCronJobs() {
  // Run every day at 2 AM
  cron.schedule('0 2 * * *', async () => {
    console.log('🔄 [CRON] Starting subscription reservation generation...');
    try {
      await generateReservationsFromSubscriptions();
      console.log('✅ [CRON] Subscription reservation generation completed');
    } catch (error) {
      console.error('❌ [CRON] Error generating reservations:', error);
    }
  });
}

/**
 * Generate reservations from all active subscriptions
 * @returns {Promise<number>} Count of reservations created
 */
async function generateReservationsFromSubscriptions() {
  const activeSubscriptions = await AlumnaSubscription.findActive();
  if (!activeSubscriptions || activeSubscriptions.length === 0) {
    console.log('ℹ️  [CRON] No active subscriptions found');
    return 0;
  }

  let createdCount = 0;
  const today = new Date();
  const endDate = new Date(today);
  endDate.setDate(endDate.getDate() + 30); // Generate for next 30 days

  for (const subscription of activeSubscriptions) {
    try {
      // Generate date for the next 30 days
      const currentDate = new Date(today);

      while (currentDate <= endDate) {
        // Get day of week (0=Sunday, 6=Saturday)
        const dayOfWeek = currentDate.getDay();

        // Check if this subscription matches this day of week
        if (dayOfWeek === parseInt(subscription.dia_semana)) {
          const fechaStr = currentDate.toISOString().split('T')[0];

          // Check if this date is a calendar exception (holiday, closed, etc.)
          const exception = await CalendarException.isClosed(fechaStr);
          if (exception && exception.afecta_suscripciones) {
            currentDate.setDate(currentDate.getDate() + 1);
            continue; // Skip this date
          }

          // Find schedule for this date and time
          const schedule = await Schedule.findByDateAndTime(fechaStr, subscription.hora);
          if (!schedule) {
            currentDate.setDate(currentDate.getDate() + 1);
            continue; // No schedule for this time
          }

          // Check if reservation already exists
          const existingRes = await Reservation.findOne({
            alumna_id: subscription.alumna_id,
            horario_id: schedule.id
          });

          if (!existingRes) {
            // Create new reservation
            const reservation = await Reservation.create({
              alumna_id: subscription.alumna_id,
              horario_id: schedule.id,
              cama_numero: subscription.cama_preferida || 1,
              estado: 'PENDIENTE'
            });

            // Link to subscription
            await Reservation.linkToSubscription(reservation.id, subscription.id);
            createdCount++;
          }
        }

        currentDate.setDate(currentDate.getDate() + 1);
      }
    } catch (error) {
      console.error(`❌ [CRON] Error processing subscription ${subscription.id}:`, error.message);
      continue;
    }
  }

  console.log(`✅ [CRON] Created ${createdCount} new reservations from subscriptions`);
  return createdCount;
}

export default { initSubscriptionCronJobs };
