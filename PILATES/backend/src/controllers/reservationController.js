import Reservation from '../models/Reservation.js';
import Schedule from '../models/Schedule.js';

/**
 * Request a new reservation
 * POST /api/reservations
 * ALUMNA submits a reservation request
 */
export const requestReservation = async (req, res, next) => {
  try {
    const { horario_id, cama_numero } = req.body;

    // Validate required fields
    if (!horario_id || cama_numero === undefined) {
      return res.status(400).json({
        error: 'Missing required fields: horario_id, cama_numero'
      });
    }

    // Validate cama_numero
    if (typeof cama_numero !== 'number' || cama_numero < 1 || cama_numero > 6) {
      return res.status(400).json({
        error: 'Invalid cama_numero. Must be a number between 1 and 6'
      });
    }

    const reservation = await Reservation.create({
      alumna_id: req.user.userId,
      horario_id,
      cama_numero,
      estado: 'PENDIENTE'
    });

    res.status(201).json({
      message: 'Reservation requested successfully',
      reservation
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all reservations (for admin/dueña)
 * GET /api/reservations
 * Optional query params: ?estado=PENDIENTE&horario_id=xxx&alumna_id=xxx
 */
export const listReservations = async (req, res, next) => {
  try {
    const { estado, horario_id, alumna_id } = req.query;

    let reservations = [];

    if (horario_id) {
      // Get reservations for a specific schedule
      reservations = await Reservation.findBySchedule(horario_id);
    } else if (alumna_id) {
      // Get reservations for a specific student
      reservations = await Reservation.findByAlumna(alumna_id);
    } else if (estado) {
      // Get reservations by status
      if (estado === 'PENDIENTE') {
        reservations = await Reservation.findPending();
      } else {
        // For other estados, we need to query by status
        // This would require adding a new method to Reservation model
        // For now, we'll get all and filter
        reservations = await Reservation.findAll();
        reservations = reservations.filter(r => r.estado === estado);
      }
    } else {
      // Get all reservations
      reservations = await Reservation.findAll();
    }

    res.json({
      total: reservations.length,
      reservations
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get a specific reservation by ID
 * GET /api/reservations/:id
 */
export const getReservationById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const reservation = await Reservation.findById(id);
    if (!reservation) {
      return res.status(404).json({
        error: 'Reservation not found'
      });
    }

    res.json({
      reservation
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Confirm a pending reservation
 * POST /api/reservations/:id/confirm
 * Only DUEÑA can confirm reservations
 */
export const confirmReservation = async (req, res, next) => {
  try {
    const { id } = req.params;

    const reservation = await Reservation.findById(id);
    if (!reservation) {
      return res.status(404).json({
        error: 'Reservation not found'
      });
    }

    if (reservation.estado !== 'PENDIENTE') {
      return res.status(400).json({
        error: 'Cannot confirm a reservation that is not pending',
        currentStatus: reservation.estado
      });
    }

    const updatedReservation = await Reservation.confirm(id, req.user.userId);

    res.json({
      message: 'Reservation confirmed successfully',
      reservation: updatedReservation
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Reject a pending reservation
 * POST /api/reservations/:id/reject
 * Only DUEÑA can reject reservations
 * Body: { razonRechazo } - optional reason for rejection
 */
export const rejectReservation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { razonRechazo } = req.body;

    const reservation = await Reservation.findById(id);
    if (!reservation) {
      return res.status(404).json({
        error: 'Reservation not found'
      });
    }

    if (reservation.estado !== 'PENDIENTE') {
      return res.status(400).json({
        error: 'Cannot reject a reservation that is not pending',
        currentStatus: reservation.estado
      });
    }

    const updatedReservation = await Reservation.reject(
      id,
      req.user.userId,
      razonRechazo || 'No reason provided'
    );

    res.json({
      message: 'Reservation rejected successfully',
      reservation: updatedReservation
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Cancel a confirmed or pending reservation
 * POST /api/reservations/:id/cancel
 * ALUMNA can cancel their own reservations, DUEÑA can cancel any
 */
export const cancelReservation = async (req, res, next) => {
  try {
    const { id } = req.params;

    const reservation = await Reservation.findById(id);
    if (!reservation) {
      return res.status(404).json({
        error: 'Reservation not found'
      });
    }

    // Check authorization: ALUMNA can only cancel their own, DUEÑA can cancel any
    if (req.user.tipo === 'ALUMNA' && reservation.alumna_id !== req.user.userId) {
      return res.status(403).json({
        error: 'Insufficient permissions',
        message: 'You can only cancel your own reservations'
      });
    }

    if (reservation.estado === 'CANCELADA') {
      return res.status(400).json({
        error: 'Reservation is already cancelled'
      });
    }

    if (reservation.estado === 'RECHAZADA') {
      return res.status(400).json({
        error: 'Cannot cancel a rejected reservation'
      });
    }

    const updatedReservation = await Reservation.cancel(id);

    res.json({
      message: 'Reservation cancelled successfully',
      reservation: updatedReservation
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all pending reservations
 * GET /api/reservations/pending
 * Only DUEÑA can view pending reservations
 */
export const getPendingReservations = async (req, res, next) => {
  try {
    const reservations = await Reservation.findPending();

    res.json({
      total: reservations.length,
      reservations
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get current user's reservations with full schedule details
 * GET /api/reservations/mine?status=CONFIRMADA
 * ALUMNA views their own reservations
 * Optional query param: status (PENDIENTE, CONFIRMADA, RECHAZADA, CANCELADA)
 */
export const getMyReservations = async (req, res, next) => {
  try {
    const { status } = req.query;
    const alumnaId = req.user.userId;

    let reservations = await Reservation.findByAlumna(alumnaId);

    // Filter by status if provided
    if (status) {
      reservations = reservations.filter(r => r.estado === status);
    }

    // Enrich with schedule details (profesora name, titulo)
    const enriched = await Promise.all(
      reservations.map(async (r) => {
        const schedule = await Schedule.findById(r.horario_id);
        return {
          ...r,
          horario: schedule || {
            id: r.horario_id,
            fecha: null,
            hora: null
          }
        };
      })
    );

    res.json({
      total: enriched.length,
      reservations: enriched
    });
  } catch (error) {
    next(error);
  }
};
