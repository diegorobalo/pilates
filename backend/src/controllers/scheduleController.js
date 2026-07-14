import Schedule from '../models/Schedule.js';
import AlumnaSubscription from '../models/AlumnaSubscription.js';
import Reservation from '../models/Reservation.js';
import User from '../models/User.js';

/**
 * When a class schedule is created, auto-create PENDIENTE reservations for every
 * alumna subscribed to that weekday + time, so subscriptions are "set once and
 * forget" (staff still confirms each one). Returns how many were generated.
 */
async function generateReservationsForSchedule(schedule) {
  const weekday = new Date(`${schedule.fecha}T12:00:00`).getDay();
  const subs = await AlumnaSubscription.findActiveByDayAndTime(weekday, schedule.hora);
  let count = 0;

  for (const sub of subs) {
    const existing = await Reservation.findOne({
      alumna_id: sub.alumna_id,
      horario_id: schedule.id
    });
    if (existing) continue;

    const available = await Schedule.getAvailableBeds(schedule.id);
    if (available.length === 0) break; // class is full

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

    try {
      await Reservation.linkToSubscription(reservation.id, sub.id);
    } catch (linkErr) {
      console.error('linkToSubscription failed (non-fatal):', linkErr.message);
    }
  }
  return count;
}

/**
 * Create a new class schedule
 * POST /api/schedules
 * Only DUEÑA can create schedules
 */
export const createSchedule = async (req, res, next) => {
  try {
    const { fecha, hora, capacidad } = req.body;

    // Validate required fields
    if (!fecha || !hora) {
      return res.status(400).json({
        error: 'Missing required fields: fecha, hora'
      });
    }

    // Validate fecha format (YYYY-MM-DD)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
      return res.status(400).json({
        error: 'Invalid fecha format. Must be YYYY-MM-DD'
      });
    }

    // Validate hora format (HH:MM)
    if (!/^\d{2}:\d{2}$/.test(hora)) {
      return res.status(400).json({
        error: 'Invalid hora format. Must be HH:MM'
      });
    }

    // Validate capacidad if provided
    if (capacidad && (typeof capacidad !== 'number' || capacidad < 1)) {
      return res.status(400).json({
        error: 'Capacidad must be a positive number'
      });
    }

    const schedule = await Schedule.create({
      fecha,
      hora,
      capacidad: capacidad || 6,
      creada_por: req.user.userId
    });

    // Auto-generate reservations for alumnas subscribed to this weekday+time
    let generatedReservations = 0;
    try {
      generatedReservations = await generateReservationsForSchedule(schedule);
    } catch (genErr) {
      console.error('Error generating subscription reservations:', genErr.message);
    }

    res.status(201).json({
      message: 'Schedule created successfully',
      schedule,
      generatedReservations
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all schedules with optional date range filter
 * GET /api/schedules?fechaInicio=YYYY-MM-DD&fechaFin=YYYY-MM-DD
 */
export const getAllSchedules = async (req, res, next) => {
  try {
    const { fechaInicio, fechaFin } = req.query;

    let schedules;

    if (fechaInicio && fechaFin) {
      // Validate date format
      if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaInicio) || !/^\d{4}-\d{2}-\d{2}$/.test(fechaFin)) {
        return res.status(400).json({
          error: 'Invalid date format. Must be YYYY-MM-DD'
        });
      }

      // Fetch schedules for date range
      schedules = await Schedule.findByDateRange(fechaInicio, fechaFin);
    } else if (fechaInicio || fechaFin) {
      return res.status(400).json({
        error: 'Both fechaInicio and fechaFin are required for date range filter'
      });
    } else {
      // Get all schedules (no filter)
      schedules = await Schedule.findAll();
    }

    res.json({
      total: schedules.length,
      schedules
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get a single schedule by ID
 * GET /api/schedules/:id
 */
export const getScheduleById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const schedule = await Schedule.findById(id);
    if (!schedule) {
      return res.status(404).json({
        error: 'Schedule not found'
      });
    }

    res.json({
      schedule
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update schedule status
 * PUT /api/schedules/:id
 * Only DUEÑA can update schedules
 * Body: { estado } - ABIERTA, CERRADA, or CANCELADA
 */
export const updateScheduleStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { estado, ...otherData } = req.body;

    // Check if schedule exists
    const schedule = await Schedule.findById(id);
    if (!schedule) {
      return res.status(404).json({
        error: 'Schedule not found'
      });
    }

    // If estado is provided, validate it
    if (estado) {
      const validEstados = ['ABIERTA', 'CERRADA', 'CANCELADA'];
      if (!validEstados.includes(estado)) {
        return res.status(400).json({
          error: 'Invalid estado. Must be one of: ABIERTA, CERRADA, CANCELADA'
        });
      }
    }

    // Prepare update data
    const updateData = {};
    if (estado) {
      updateData.estado = estado;
    }

    // Allow updates to other fields as well
    const validFields = ['fecha', 'hora', 'capacidad', 'profesora_asignada', 'titulo'];
    for (const field of validFields) {
      if (otherData[field] !== undefined) {
        updateData[field] = otherData[field];
      }
    }

    // Validate fecha and hora formats if provided
    if (updateData.fecha && !/^\d{4}-\d{2}-\d{2}$/.test(updateData.fecha)) {
      return res.status(400).json({
        error: 'Invalid fecha format. Must be YYYY-MM-DD'
      });
    }

    if (updateData.hora && !/^\d{2}:\d{2}$/.test(updateData.hora)) {
      return res.status(400).json({
        error: 'Invalid hora format. Must be HH:MM'
      });
    }

    if (updateData.capacidad && (typeof updateData.capacidad !== 'number' || updateData.capacidad < 1)) {
      return res.status(400).json({
        error: 'Capacidad must be a positive number'
      });
    }

    const updatedSchedule = await Schedule.update(id, updateData);

    res.json({
      message: 'Schedule updated successfully',
      schedule: updatedSchedule
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete a schedule
 * DELETE /api/schedules/:id
 * Only DUEÑA can delete schedules
 */
export const deleteSchedule = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check if schedule exists
    const schedule = await Schedule.findById(id);
    if (!schedule) {
      return res.status(404).json({
        error: 'Schedule not found'
      });
    }

    const deleted = await Schedule.delete(id);

    if (!deleted) {
      return res.status(500).json({
        error: 'Failed to delete schedule'
      });
    }

    res.json({
      message: 'Schedule deleted successfully',
      deletedId: id
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get available bed numbers for a schedule
 * GET /api/schedules/:id/available-beds
 */
export const getAvailableBeds = async (req, res, next) => {
  try {
    const { id } = req.params;
    const alumnaId = req.user?.userId;

    // Check if schedule exists
    const schedule = await Schedule.findById(id);
    if (!schedule) {
      return res.status(404).json({
        error: 'Schedule not found'
      });
    }

    const availableBeds = await Schedule.getAvailableBeds(id);

    // Get instructor info if assigned
    let instructor = null;
    if (schedule.profesora_asignada) {
      instructor = await User.findById(schedule.profesora_asignada);
    }

    // Get current reservation for this student (if any)
    let currentReservation = null;
    if (alumnaId) {
      const reservas = await Reservation.findBySchedule(id);
      const myReserva = reservas.find(r => r.alumna_id === alumnaId);
      if (myReserva) {
        currentReservation = {
          id: myReserva.id,
          cama_numero: myReserva.cama_numero,
          estado: myReserva.estado,
          bedNumber: myReserva.cama_numero
        };
      }
    }

    // Get all reservations with student names (for showing who occupies each bed)
    const reservas = await Reservation.findBySchedule(id);
    const reservationsByBed = {};
    reservas.forEach(r => {
      reservationsByBed[r.cama_numero] = {
        alumnaId: r.alumna_id,
        nombre: r.nombre_alumna,
        estado: r.estado
      };
    });

    res.json({
      scheduleId: id,
      capacidad: schedule.capacidad,
      availableBeds,
      totalAvailable: availableBeds.length,
      totalReserved: schedule.capacidad - availableBeds.length,
      instructor: instructor ? {
        id: instructor.id,
        nombre: instructor.nombre,
        apellido: instructor.apellido
      } : null,
      currentReservation,
      reservationsByBed
    });
  } catch (error) {
    next(error);
  }
};
