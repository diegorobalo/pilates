import { useState, useEffect } from 'react'
import { Trash2, AlertCircle } from 'lucide-react'

export default function MyReservations() {
  const [reservations, setReservations] = useState([])
  const [filter, setFilter] = useState('todas')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [deleteConfirm, setDeleteConfirm] = useState(null)

  useEffect(() => {
    fetchReservations()
  }, [])

  const fetchReservations = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/reservations')
      if (response.ok) {
        const data = await response.json()
        setReservations(Array.isArray(data) ? data : data.reservations || [])
      }
    } catch (err) {
      console.error('Error fetching reservations:', err)
      setError('Error al cargar las reservas')
    } finally {
      setLoading(false)
    }
  }

  const handleCancelReservation = async (reservationId) => {
    try {
      const response = await fetch(`/api/reservations/${reservationId}/cancel`, {
        method: 'POST',
      })

      if (response.ok) {
        setReservations((prev) =>
          prev.map((res) =>
            res.id === reservationId ? { ...res, status: 'Cancelada' } : res
          )
        )
        setDeleteConfirm(null)
      } else {
        const data = await response.json()
        setError(data.message || 'Error al cancelar la reserva')
      }
    } catch (err) {
      console.error('Error canceling reservation:', err)
      setError('Error al cancelar la reserva')
    }
  }

  const getFilteredReservations = () => {
    if (filter === 'todas') return reservations
    if (filter === 'confirmadas') return reservations.filter((r) => r.status === 'Confirmada')
    if (filter === 'pendientes') return reservations.filter((r) => r.status === 'Pendiente')
    if (filter === 'canceladas') return reservations.filter((r) => r.status === 'Cancelada')
    return reservations
  }

  const canCancelReservation = (reservation) => {
    const classDateTime = new Date(`${reservation.fecha}T${reservation.hora}`)
    const now = new Date()
    const oneHourBefore = new Date(classDateTime.getTime() - 60 * 60 * 1000)

    return (
      now < oneHourBefore &&
      (reservation.status === 'Confirmada' || reservation.status === 'Pendiente')
    )
  }

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'Confirmada':
        return 'bg-green-100 text-green-800'
      case 'Pendiente':
        return 'bg-yellow-100 text-yellow-800'
      case 'Cancelada':
        return 'bg-gray-100 text-gray-800'
      case 'Rechazada':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredReservations = getFilteredReservations()

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex gap-2 flex-wrap">
          {['todas', 'confirmadas', 'pendientes', 'canceladas'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                filter === f
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {f === 'todas' ? 'Todas' : f === 'confirmadas' ? 'Confirmadas' : f === 'pendientes' ? 'Pendientes' : 'Canceladas'}
            </button>
          ))}
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="flex gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="inline-block animate-spin">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
            </div>
          </div>
        ) : filteredReservations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay reservas para mostrar</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Fecha
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Hora
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Instructor
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
                {filteredReservations.map((reservation) => (
                  <tr
                    key={reservation.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(reservation.fecha).toLocaleDateString('es-ES')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {reservation.hora}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {reservation.instructor}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      Cama {reservation.bedNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(
                          reservation.status
                        )}`}
                      >
                        {reservation.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {canCancelReservation(reservation) && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => setDeleteConfirm(reservation.id)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span>Cancelar</span>
                          </button>
                        </div>
                      )}
                      {!canCancelReservation(reservation) && (
                        <span className="text-gray-400 text-xs">
                          {reservation.status === 'Cancelada' ? 'Cancelada' : 'No se puede cancelar'}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete confirmation modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Confirmar cancelación</h3>
            <p className="text-gray-600 mb-6">
              ¿Estás seguro de que deseas cancelar esta reserva?
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  handleCancelReservation(deleteConfirm)
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Sí, cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
