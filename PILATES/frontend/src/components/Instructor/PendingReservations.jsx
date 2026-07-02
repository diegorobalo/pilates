import { useState, useEffect } from 'react'
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import RejectionModal from './RejectionModal'

export default function PendingReservations({ onCountChange }) {
  const [reservations, setReservations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedReservation, setSelectedReservation] = useState(null)
  const [showRejectionModal, setShowRejectionModal] = useState(false)
  const [processingId, setProcessingId] = useState(null)

  useEffect(() => {
    fetchPendingReservations()
    // Auto-refresh every 5 seconds
    const interval = setInterval(fetchPendingReservations, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Update parent with count
    if (onCountChange) {
      onCountChange(reservations.length)
    }
  }, [reservations, onCountChange])

  const fetchPendingReservations = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/reservations/pending')
      if (!response.ok) throw new Error('Error fetching reservations')
      const data = await response.json()
      setReservations(data || [])
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleConfirm = async (reservationId) => {
    setProcessingId(reservationId)
    try {
      const response = await fetch(
        `/api/reservations/${reservationId}/confirm`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }
      )

      if (!response.ok) throw new Error('Error confirming reservation')

      setReservations((prev) =>
        prev.filter((r) => r.id !== reservationId)
      )
    } catch (err) {
      alert(`Error: ${err.message}`)
    } finally {
      setProcessingId(null)
    }
  }

  const handleRejectClick = (reservation) => {
    setSelectedReservation(reservation)
    setShowRejectionModal(true)
  }

  const handleRejectSubmit = async (reason) => {
    try {
      const response = await fetch(
        `/api/reservations/${selectedReservation.id}/reject`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ razon_rechazo: reason }),
        }
      )

      if (!response.ok) throw new Error('Error rejecting reservation')

      setReservations((prev) =>
        prev.filter((r) => r.id !== selectedReservation.id)
      )
      setShowRejectionModal(false)
      setSelectedReservation(null)
    } catch (err) {
      alert(`Error: ${err.message}`)
    }
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="space-y-4">
      {/* Banner for pending count */}
      {reservations.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="w-6 h-6 text-yellow-600" />
          <div>
            <h3 className="font-semibold text-yellow-900">
              {reservations.length} Reserva{reservations.length !== 1 ? 's' : ''} Pendiente{reservations.length !== 1 ? 's' : ''}
            </h3>
            <p className="text-sm text-yellow-700">
              Por favor revisa y confirma o rechaza estas reservaciones
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Pending Reservations Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Alumna
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Hora
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Cama
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                  Cargando...
                </td>
              </tr>
            ) : reservations.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                  No hay reservas pendientes
                </td>
              </tr>
            ) : (
              reservations.map((reservation) => (
                <tr key={reservation.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {reservation.nombre_alumna}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {formatDate(reservation.fecha)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {reservation.hora}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Cama {reservation.numero_cama}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      {reservation.estado}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm space-x-2 flex">
                    <button
                      onClick={() => handleConfirm(reservation.id)}
                      disabled={processingId === reservation.id}
                      className="px-3 py-1 flex items-center gap-1 bg-green-100 text-green-700 hover:bg-green-200 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Confirmar
                    </button>
                    <button
                      onClick={() => handleRejectClick(reservation)}
                      disabled={processingId === reservation.id}
                      className="px-3 py-1 flex items-center gap-1 bg-red-100 text-red-700 hover:bg-red-200 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <XCircle className="w-4 h-4" />
                      Rechazar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {showRejectionModal && (
        <RejectionModal
          reservation={selectedReservation}
          onSubmit={handleRejectSubmit}
          onClose={() => {
            setShowRejectionModal(false)
            setSelectedReservation(null)
          }}
        />
      )}
    </div>
  )
}
