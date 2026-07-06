import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const STATUS_OPTIONS = [
  { value: 'ABIERTA', label: 'Abierta' },
  { value: 'CERRADA', label: 'Cerrada' },
  { value: 'CANCELADA', label: 'Cancelada' },
]

export default function ScheduleModal({ schedule, onSave, onClose }) {
  const [defaultCapacity, setDefaultCapacity] = useState(6)
  const [formData, setFormData] = useState({
    fecha: '',
    hora: '09:00',
    capacidad: 6,
    estado: 'ABIERTA',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Fetch default capacity from config
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
      // Set today's date as minimum
      const today = new Date().toISOString().split('T')[0]
      setFormData((prev) => ({
        ...prev,
        fecha: today,
        capacidad: defaultCapacity,
      }))
    }
  }, [schedule, defaultCapacity])

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fecha.trim()) {
      newErrors.fecha = 'La fecha es requerida'
    } else {
      const selectedDate = new Date(formData.fecha)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today && !schedule) {
        newErrors.fecha = 'La fecha debe ser hoy o en el futuro'
      }
    }

    if (!formData.hora.trim()) {
      newErrors.hora = 'La hora es requerida'
    } else if (!/^\d{2}:\d{2}$/.test(formData.hora)) {
      newErrors.hora = 'La hora debe estar en formato HH:MM'
    }

    if (formData.capacidad < 1 || formData.capacidad > 20) {
      newErrors.capacidad = 'La capacidad debe estar entre 1 y 20'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    try {
      await onSave(formData)
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
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  // Generate time options (24-hour format, every 15 minutes)
  const generateTimeOptions = () => {
    const times = []
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const timeStr = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
        times.push(timeStr)
      }
    }
    return times
  }

  const timeOptions = generateTimeOptions()

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
          <h2 className="text-xl font-bold text-gray-900">
            {schedule ? 'Editar Horario' : 'Nuevo Horario'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto flex-1">
          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fecha *
            </label>
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleInputChange}
              min={today}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.fecha ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.fecha && (
              <p className="mt-1 text-sm text-red-600">{errors.fecha}</p>
            )}
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hora *
            </label>
            <select
              name="hora"
              value={formData.hora}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.hora ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.hora && (
              <p className="mt-1 text-sm text-red-600">{errors.hora}</p>
            )}
          </div>

          {/* Capacity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Capacidad (Camas)
            </label>
            <input
              type="number"
              name="capacidad"
              value={formData.capacidad}
              onChange={handleInputChange}
              min="1"
              max="20"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.capacidad ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.capacidad && (
              <p className="mt-1 text-sm text-red-600">{errors.capacidad}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">
              Por defecto: {defaultCapacity} camas. Rango: 1-20
            </p>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Estado
            </label>
            <select
              name="estado"
              value={formData.estado}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {STATUS_OPTIONS.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>
          </div>

        </form>

        {/* Footer */}
        <div className="flex gap-3 justify-end p-6 border-t border-gray-200 flex-shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Guardando...' : 'Aceptar'}
          </button>
        </div>
      </div>
    </div>
  )
}
