import { useState } from 'react'
import { X } from 'lucide-react'

export default function RejectionModal({ reservation, onSubmit, onClose }) {
  const [reason, setReason] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!reason.trim()) {
      setError('Por favor ingresa una razón para el rechazo')
      return
    }

    setIsSubmitting(true)
    try {
      await onSubmit(reason)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">
            Rechazar Reserva
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Alumna:</span> {reservation?.nombre_alumna}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Fecha:</span>{' '}
              {new Date(reservation?.fecha).toLocaleDateString('es-ES')}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Hora:</span> {reservation?.hora}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Razón del Rechazo *
            </label>
            <textarea
              value={reason}
              onChange={(e) => {
                setReason(e.target.value)
                if (error) setError('')
              }}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none ${
                error ? 'border-red-500' : 'border-gray-300'
              }`}
              rows="4"
              placeholder="Explica por qué se rechaza esta reserva..."
            />
            {error && (
              <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
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
              className="px-4 py-2 bg-danger text-white rounded-lg hover:bg-danger-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Rechazando...' : 'Rechazar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
