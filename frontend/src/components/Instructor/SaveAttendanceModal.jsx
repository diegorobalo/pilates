import { useState } from 'react'
import { Save, AlertCircle, Check, Loader } from 'lucide-react'

export default function SaveAttendanceModal({
  isOpen = false,
  changes = [], // Array of { reservationId, present: boolean }
  onConfirm = () => {},
  onCancel = () => {},
  classInfo = {},
}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleConfirm = async () => {
    try {
      setLoading(true)
      setError(null)

      // POST all changes to the API
      for (const change of changes) {
        const endpoint = change.present
          ? `/api/attendance/${change.reservationId}/present`
          : `/api/attendance/${change.reservationId}/absent`

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        })

        if (!response.ok) {
          throw new Error(`Error guardando asistencia para reserva ${change.reservationId}`)
        }
      }

      setSuccess(true)

      // Wait 1.5 seconds before calling onConfirm (to show success message)
      setTimeout(() => {
        onConfirm()
      }, 1500)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8">
        {success ? (
          // Success state
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 rounded-full p-3">
                <Check className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Asistencia Guardada
            </h2>
            <p className="text-gray-600">
              Los cambios de asistencia han sido registrados exitosamente.
            </p>
          </div>
        ) : (
          // Confirmation state
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-primary" />
              Confirmar Cambios
            </h2>

            {/* Class info */}
            {classInfo.fecha && (
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600 mb-2">Clase del:</p>
                <p className="font-semibold text-gray-900">{classInfo.fecha}</p>
                {classInfo.hora && (
                  <p className="text-sm text-gray-600">a las {classInfo.hora}</p>
                )}
              </div>
            )}

            {/* Changes summary */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                Cambios a guardar ({changes.length})
              </h3>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {changes.map((change, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-sm text-gray-600"
                  >
                    <span>Reserva ID: {change.reservationId}</span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        change.present
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {change.present ? 'Presente' : 'Ausente'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 text-sm font-medium">{error}</p>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex gap-3">
              <button
                onClick={onCancel}
                disabled={loading}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirm}
                disabled={loading || changes.length === 0}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Guardando...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    Guardar Asistencia
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
