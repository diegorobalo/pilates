import { useState, useEffect } from 'react'
import { X, AlertCircle } from 'lucide-react'

export default function ReservationModal({ schedule, onClose, onSuccess }) {
  const [availableBeds, setAvailableBeds] = useState([])
  const [selectedBed, setSelectedBed] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [currentReservation, setCurrentReservation] = useState(null)

  useEffect(() => {
    fetchAvailableBeds()
  }, [schedule.id])

  const fetchAvailableBeds = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/schedules/${schedule.id}/available-beds`)
      if (response.ok) {
        const data = await response.json()
        // Backend returns { availableBeds, capacidad, ... }
        setAvailableBeds(data.availableBeds || data.beds || [])
        setCurrentReservation(data.currentReservation || null)
      }
    } catch (err) {
      console.error('Error fetching available beds:', err)
      setError('No se pudo cargar las camas disponibles')
    } finally {
      setLoading(false)
    }
  }

  const canCancelReservation = () => {
    if (!currentReservation) return false

    const classDateTime = new Date(`${schedule.fecha}T${schedule.hora}`)
    const now = new Date()
    const oneHourBefore = new Date(classDateTime.getTime() - 60 * 60 * 1000)

    return (
      now < oneHourBefore &&
      (currentReservation.status === 'Confirmada' ||
        currentReservation.status === 'Pendiente' ||
        currentReservation.status === 'Auto (plan)')
    )
  }

  const handleRequestReservation = async () => {
    if (!selectedBed) {
      setError('Por favor selecciona una cama')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          horario_id: schedule.id,
          cama_numero: selectedBed,
        }),
      })

      if (response.ok) {
        setSuccess(true)
        setTimeout(() => {
          onSuccess()
        }, 1500)
      } else {
        const data = await response.json()
        setError(data.message || 'Error al solicitar la reserva')
      }
    } catch (err) {
      console.error('Error requesting reservation:', err)
      setError('Error al solicitar la reserva')
    } finally {
      setLoading(false)
    }
  }

  const handleCancelReservation = async () => {
    if (!currentReservation) return

    if (!window.confirm('¿Estás seguro de que deseas cancelar esta reserva?')) {
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/reservations/${currentReservation.id}/cancel`, {
        method: 'POST',
      })

      if (response.ok) {
        setSuccess(true)
        setCurrentReservation(null)
        setTimeout(() => {
          onSuccess()
        }, 1500)
      } else {
        const data = await response.json()
        setError(data.message || 'Error al cancelar la reserva')
      }
    } catch (err) {
      console.error('Error canceling reservation:', err)
      setError('Error al cancelar la reserva')
    } finally {
      setLoading(false)
    }
  }

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'Confirmada':
        return 'bg-green-100 text-green-800'
      case 'Pendiente':
        return 'bg-yellow-100 text-yellow-800'
      case 'Rechazada':
        return 'bg-red-100 text-red-800'
      case 'Auto (plan)':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
          <h2 className="text-xl font-bold text-gray-900">Reserva de Clase</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 overflow-y-auto flex-1">
          {/* Class info */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <div>
              <p className="text-xs text-gray-500 uppercase">Fecha</p>
              <p className="text-lg font-semibold text-gray-900">{schedule.fecha}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 uppercase">Hora</p>
                <p className="text-lg font-semibold text-gray-900">{schedule.hora}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Instructor</p>
                <p className="text-lg font-semibold text-gray-900">{schedule.instructor}</p>
              </div>
            </div>
          </div>

          {/* Current reservation status */}
          {currentReservation && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm font-medium text-gray-900 mb-2">Tu Reserva Actual</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Cama {currentReservation.bedNumber}</p>
                  <span className={`inline-block text-xs px-2 py-1 rounded mt-1 ${getStatusBadgeColor(currentReservation.status)}`}>
                    {currentReservation.status}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Bed selection */}
          {!currentReservation && (
            <div>
              <p className="text-sm font-medium text-gray-900 mb-3">Selecciona una Cama</p>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((bedNum) => {
                  const isAvailable = availableBeds.includes(bedNum)
                  return (
                    <button
                      key={bedNum}
                      type="button"
                      onClick={() => isAvailable && setSelectedBed(bedNum)}
                      disabled={!isAvailable}
                      className={`p-3 rounded-lg border-2 font-semibold transition-colors select-none touch-manipulation ${
                        selectedBed === bedNum
                          ? 'border-primary bg-primary/10 text-primary'
                          : isAvailable
                          ? 'border-gray-300 bg-white text-gray-900 hover:border-primary'
                          : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Cama {bedNum}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="flex gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          {/* Success message */}
          {success && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-800 font-medium">
                {currentReservation ? 'Reserva cancelada exitosamente' : 'Reserva solicitada exitosamente'}
              </p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="border-t border-gray-200 p-6 bg-gray-50 flex gap-3 justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Cerrar
          </button>

          {currentReservation ? (
            canCancelReservation() && (
              <button
                onClick={handleCancelReservation}
                disabled={loading}
                className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Cancelando...' : 'Cancelar Reserva'}
              </button>
            )
          ) : (
            <button
              onClick={handleRequestReservation}
              disabled={loading || !selectedBed}
              className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Solicitando...' : 'Solicitar Reserva'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
