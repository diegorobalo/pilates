import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const STATUS_OPTIONS = [
  { value: 'ABIERTA', label: 'Abierta' },
  { value: 'CERRADA', label: 'Cerrada' },
  { value: 'CANCELADA', label: 'Cancelada' },
]

// getDay(): 0=Domingo .. 6=Sábado. El local cierra sábados y domingos,
// así que no se ofrecen como días de clase.
const WEEKDAYS = [
  { value: 1, label: 'Lun' },
  { value: 2, label: 'Mar' },
  { value: 3, label: 'Mié' },
  { value: 4, label: 'Jue' },
  { value: 5, label: 'Vie' },
]

const isWeekend = (isoDate) => {
  const day = new Date(`${isoDate}T12:00:00`).getDay()
  return day === 0 || day === 6
}

// Build "YYYY-MM-DD" without timezone drift
const toISODate = (d) => {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export default function ScheduleModal({ schedule, onSave, onClose }) {
  const isEditing = Boolean(schedule)
  const [defaultCapacity, setDefaultCapacity] = useState(6)
  // 'single' = un día concreto | 'multi' = varios días por rango + días de semana
  const [mode, setMode] = useState('single')
  const [formData, setFormData] = useState({
    fecha: '',
    hora: '09:00',
    capacidad: 6,
    estado: 'ABIERTA',
  })
  // Multi-day state
  const [rangeStart, setRangeStart] = useState('')
  const [rangeEnd, setRangeEnd] = useState('')
  const [selectedWeekdays, setSelectedWeekdays] = useState([])
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/api/config/CAPACIDAD_CAMAS')
        if (response.ok) {
          const data = await response.json()
          setDefaultCapacity(data.value || 6)
        }
      } catch (err) {
        console.error('Error fetching config:', err)
      }
    }
    fetchConfig()
  }, [])

  useEffect(() => {
    if (schedule) {
      setFormData({
        fecha: schedule.fecha || '',
        hora: schedule.hora || '09:00',
        capacidad: schedule.capacidad || defaultCapacity,
        estado: schedule.estado || 'ABIERTA',
      })
    } else {
      const today = new Date().toISOString().split('T')[0]
      setFormData((prev) => ({ ...prev, fecha: today, capacidad: defaultCapacity }))
      setRangeStart(today)
    }
  }, [schedule, defaultCapacity])

  const toggleWeekday = (value) => {
    setSelectedWeekdays((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
    if (errors.weekdays) setErrors((p) => ({ ...p, weekdays: '' }))
  }

  // Compute all dates that match selected weekdays within [rangeStart, rangeEnd]
  const computeDates = () => {
    if (!rangeStart || !rangeEnd || selectedWeekdays.length === 0) return []
    const start = new Date(`${rangeStart}T12:00:00`)
    const end = new Date(`${rangeEnd}T12:00:00`)
    if (end < start) return []
    const dates = []
    const cursor = new Date(start)
    while (cursor <= end) {
      if (selectedWeekdays.includes(cursor.getDay())) {
        dates.push(toISODate(cursor))
      }
      cursor.setDate(cursor.getDate() + 1)
    }
    return dates
  }

  const previewDates = mode === 'multi' ? computeDates() : []

  const validateForm = () => {
    const newErrors = {}

    if (!formData.hora.trim()) {
      newErrors.hora = 'La hora es requerida'
    } else if (!/^\d{2}:\d{2}$/.test(formData.hora)) {
      newErrors.hora = 'La hora debe estar en formato HH:MM'
    }

    if (formData.capacidad < 1 || formData.capacidad > 20) {
      newErrors.capacidad = 'La capacidad debe estar entre 1 y 20'
    }

    if (mode === 'single') {
      if (!formData.fecha.trim()) {
        newErrors.fecha = 'La fecha es requerida'
      } else if (isWeekend(formData.fecha)) {
        newErrors.fecha = 'El local no abre sábados ni domingos'
      } else if (!schedule) {
        const selectedDate = new Date(`${formData.fecha}T12:00:00`)
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        if (selectedDate < today) {
          newErrors.fecha = 'La fecha debe ser hoy o en el futuro'
        }
      }
    } else {
      if (!rangeStart) newErrors.rangeStart = 'Elegí la fecha de inicio'
      if (!rangeEnd) newErrors.rangeEnd = 'Elegí la fecha de fin'
      if (selectedWeekdays.length === 0) newErrors.weekdays = 'Elegí al menos un día'
      if (rangeStart && rangeEnd && previewDates.length === 0) {
        newErrors.weekdays = 'Ningún día coincide en ese rango'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      if (mode === 'single') {
        await onSave({
          fecha: formData.fecha,
          hora: formData.hora,
          capacidad: formData.capacidad,
          estado: formData.estado,
        })
      } else {
        const batch = previewDates.map((fecha) => ({
          fecha,
          hora: formData.hora,
          capacidad: formData.capacidad,
          estado: formData.estado,
        }))
        await onSave(batch)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'capacidad' ? parseInt(value) : value,
    }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const generateTimeOptions = () => {
    const times = []
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        times.push(`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`)
      }
    }
    return times
  }
  const timeOptions = generateTimeOptions()
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
          <h2 className="text-xl font-bold text-gray-900">
            {isEditing ? 'Editar Horario' : 'Nuevo Horario'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto flex-1">
          {/* Mode selector (only when creating) */}
          {!isEditing && (
            <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-lg">
              <button
                type="button"
                onClick={() => setMode('single')}
                className={`py-2 rounded-md text-sm font-medium transition-colors ${
                  mode === 'single' ? 'bg-white shadow text-gray-900' : 'text-gray-500'
                }`}
              >
                Un día
              </button>
              <button
                type="button"
                onClick={() => setMode('multi')}
                className={`py-2 rounded-md text-sm font-medium transition-colors ${
                  mode === 'multi' ? 'bg-white shadow text-gray-900' : 'text-gray-500'
                }`}
              >
                Varios días
              </button>
            </div>
          )}

          {/* Single day */}
          {mode === 'single' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fecha *</label>
              <input
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleInputChange}
                min={today}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.fecha ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.fecha && <p className="mt-1 text-sm text-red-600">{errors.fecha}</p>}
            </div>
          )}

          {/* Multiple days */}
          {mode === 'multi' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Desde *</label>
                  <input
                    type="date"
                    value={rangeStart}
                    min={today}
                    onChange={(e) => { setRangeStart(e.target.value); if (errors.rangeStart) setErrors((p) => ({ ...p, rangeStart: '' })) }}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.rangeStart ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.rangeStart && <p className="mt-1 text-xs text-red-600">{errors.rangeStart}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Hasta *</label>
                  <input
                    type="date"
                    value={rangeEnd}
                    min={rangeStart || today}
                    onChange={(e) => { setRangeEnd(e.target.value); if (errors.rangeEnd) setErrors((p) => ({ ...p, rangeEnd: '' })) }}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.rangeEnd ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.rangeEnd && <p className="mt-1 text-xs text-red-600">{errors.rangeEnd}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Días de la semana *</label>
                <div className="flex flex-wrap gap-2">
                  {WEEKDAYS.map((wd) => (
                    <button
                      key={wd.value}
                      type="button"
                      onClick={() => toggleWeekday(wd.value)}
                      className={`w-11 h-11 rounded-lg text-sm font-semibold transition-colors ${
                        selectedWeekdays.includes(wd.value)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {wd.label}
                    </button>
                  ))}
                </div>
                {errors.weekdays && <p className="mt-1 text-sm text-red-600">{errors.weekdays}</p>}
              </div>

              {previewDates.length > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-sm text-blue-800">
                  Se crearán <strong>{previewDates.length}</strong> clase{previewDates.length !== 1 ? 's' : ''} a las {formData.hora}.
                </div>
              )}
            </div>
          )}

          {/* Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hora *</label>
            <select
              name="hora"
              value={formData.hora}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.hora ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              {timeOptions.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
            {errors.hora && <p className="mt-1 text-sm text-red-600">{errors.hora}</p>}
          </div>

          {/* Capacity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Capacidad (Camas)</label>
            <input
              type="number"
              name="capacidad"
              value={formData.capacidad}
              onChange={handleInputChange}
              min="1"
              max="20"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.capacidad ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.capacidad && <p className="mt-1 text-sm text-red-600">{errors.capacidad}</p>}
            <p className="mt-1 text-xs text-gray-500">Por defecto: {defaultCapacity} camas. Rango: 1-20</p>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
            <select
              name="estado"
              value={formData.estado}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {STATUS_OPTIONS.map((status) => (
                <option key={status.value} value={status.value}>{status.label}</option>
              ))}
            </select>
          </div>
        </form>

        {/* Footer */}
        <div className="flex gap-3 justify-end p-6 border-t border-gray-200 flex-shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors font-medium"
          >
            Cancelar
          </button>
          <button
            type="button"
            disabled={isSubmitting}
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting
              ? 'Guardando...'
              : mode === 'multi' && previewDates.length > 0
                ? `Crear ${previewDates.length} clases`
                : 'Aceptar'}
          </button>
        </div>
      </div>
    </div>
  )
}
