import CalendarException from '../models/CalendarException.js';

export const createException = async (req, res) => {
  try {
    const { fecha, tipo, descripcion, afecta_suscripciones } = req.body;

    if (!fecha || !tipo || !descripcion) {
      return res.status(400).json({ error: 'Missing required fields: fecha, tipo, descripcion' });
    }

    const exception = await CalendarException.create({
      fecha, tipo, descripcion, afecta_suscripciones: afecta_suscripciones ?? 1
    });

    res.status(201).json({ message: 'Exception created', exception });
  } catch (error) {
    res.status(500).json({ error: 'Error creating exception', message: error.message });
  }
};

export const getExceptions = async (req, res) => {
  try {
    const { tipo, fecha_desde, fecha_hasta } = req.query;

    const filters = {};
    if (tipo) filters.tipo = tipo;
    if (fecha_desde) filters.fecha_desde = fecha_desde;
    if (fecha_hasta) filters.fecha_hasta = fecha_hasta;

    const exceptions = await CalendarException.findAll(filters);
    res.json({ exceptions });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching exceptions', message: error.message });
  }
};

export const updateException = async (req, res) => {
  try {
    const { id } = req.params;
    const { tipo, descripcion, afecta_suscripciones } = req.body;

    const exception = await CalendarException.update(id, {
      tipo, descripcion, afecta_suscripciones
    });

    res.json({ message: 'Exception updated', exception });
  } catch (error) {
    res.status(500).json({ error: 'Error updating exception', message: error.message });
  }
};

export const deleteException = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await CalendarException.delete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Exception not found' });
    }

    res.json({ message: 'Exception deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting exception', message: error.message });
  }
};

export const seedArgentineHolidays = async (req, res) => {
  try {
    const year = req.body.year || new Date().getFullYear();

    const holidays = [
      { fecha: `${year}-01-01`, descripcion: 'Año Nuevo' },
      { fecha: `${year}-02-12`, descripcion: 'Carnaval' },
      { fecha: `${year}-03-24`, descripcion: 'Día de la Memoria' },
      // Viernes Santo (se calcula, por ahora fijo)
      { fecha: `${year}-04-18`, descripcion: 'Viernes Santo' },
      { fecha: `${year}-04-02`, descripcion: 'Día del Veterano' },
      { fecha: `${year}-05-01`, descripcion: 'Día del Trabajo' },
      { fecha: `${year}-06-17`, descripcion: 'Guemes' },
      { fecha: `${year}-07-09`, descripcion: 'Día de la Independencia' },
      { fecha: `${year}-08-17`, descripcion: 'Muerte del Gral San Martín' },
      { fecha: `${year}-10-12`, descripcion: 'Descubrimiento de América' },
      { fecha: `${year}-11-20`, descripcion: 'Día Nacional de la Soberanía' },
      { fecha: `${year}-12-08`, descripcion: 'Inmaculada Concepción' },
      { fecha: `${year}-12-25`, descripcion: 'Navidad' }
    ];

    let count = 0;
    for (const holiday of holidays) {
      try {
        const existing = await CalendarException.findByDate(holiday.fecha);
        if (!existing) {
          await CalendarException.create({
            fecha: holiday.fecha,
            tipo: 'FERIADO',
            descripcion: holiday.descripcion,
            afecta_suscripciones: 1
          });
          count++;
        }
      } catch (e) {
        // Already exists, skip
      }
    }

    res.json({ message: `Seeded ${count} holidays for ${year}`, count });
  } catch (error) {
    res.status(500).json({ error: 'Error seeding holidays', message: error.message });
  }
};
