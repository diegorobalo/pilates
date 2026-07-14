import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const DAYS_OF_WEEK = [
  { value: 'LUNES', label: 'Lunes' },
  { value: 'MARTES', label: 'Martes' },
  { value: 'MIERCOLES', label: 'Miércoles' },
  { value: 'JUEVES', label: 'Jueves' },
  { value: 'VIERNES', label: 'Viernes' },
  { value: 'SABADO', label: 'Sábado' },
  { value: 'DOMINGO', label: 'Domingo' },
]

export default function PlanModal({ student, onSave, onClose }) {
  const [formData, setFormData] = useState({
    dia_semana: 'LUNES',
    hora: '09:00',
    activo: true,
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.dia_semana.trim()) {
      newErrors.dia_semana = 'El día es requerido'
    }

    if (!formData.hora.trim()) {
      newErrors.hora = 'La hora es requerida'
    } else if (!/^\d{2}:\d{2}$/.test(formData.hora)) {
      newErrors.hora = 'La hora debe estar en formato HH:MM'
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
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">
            Asignar Plan Semanal - {student?.nombre}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Day of Week */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Día de la Semana *
            </label>
            <select
              name="dia_semana"
              value={formData.dia_semana}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.dia_semana ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              {DAYS_OF_WEEK.map((day) => (
                <option key={day.value} value={day.value}>
                  {day.label}
                </option>
              ))}
            </select>
            {errors.dia_semana && (
              <p className="mt-1 text-sm text-red-600">{errors.dia_semana}</p>
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

          {/* Active Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="activo"
              name="activo"
              checked={formData.activo}
              onChange={handleInputChange}
              className="w-4 h-4 text-primary rounded focus:ring-2 focus:ring-primary"
            />
            <label htmlFor="activo" className="text-sm font-medium text-gray-700">
              Plan Activo
            </label>
          </div>

          {/* Footer */}
          <div className="flex gap-3 justify-end pt-4 border-t">
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
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Guardando...' : 'Asignar Plan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
