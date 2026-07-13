import { useState, useEffect } from 'react'
import { AlertCircle, CheckCircle, Plus } from 'lucide-react'

export default function PaymentStatusTable({ mes, onAddPayment }) {
  const [alumnos, setAlumnos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPaymentStatus()
  }, [mes])

  const fetchPaymentStatus = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(
        `/api/finances/pagos-alumnos?mes_referencia=${mes}`
      )
      if (!response.ok) throw new Error('Error fetching payment status')
      const data = await response.json()
      setAlumnos(Array.isArray(data.alumnos) ? data.alumnos : [])
    } catch (err) {
      console.error('Error fetching payment status:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'ARS',
    }).format(value || 0)
  }

  const getStatusBadge = (estado) => {
    switch (estado) {
      case 'AL_DIA':
        return {
          label: 'Al Día',
          color: 'bg-green-100 text-green-800 border-green-300',
          icon: <CheckCircle className="w-4 h-4" />,
        }
      case 'DEBE':
        return {
          label: 'Debe',
          color: 'bg-red-100 text-red-800 border-red-300',
          icon: <AlertCircle className="w-4 h-4" />,
        }
      case 'EXCESO':
        return {
          label: 'Exceso',
          color: 'bg-blue-100 text-blue-800 border-blue-300',
          icon: <Plus className="w-4 h-4" />,
        }
      default:
        return {
          label: estado,
          color: 'bg-gray-100 text-gray-800 border-gray-300',
          icon: null,
        }
    }
  }

  if (loading) {
    return <div className="text-center py-8 text-gray-500">Cargando...</div>
  }

  return (
    <div className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>{error}</div>
        </div>
      )}

      {/* Header with Title and Button */}
      <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Estado de Pagos de Alumnas
        </h2>
        <button
          onClick={() => onAddPayment('INGRESO_ALUMNA')}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg transition-colors font-medium"
        >
          <Plus className="w-4 h-4" />
          Registrar Pago
        </button>
      </div>

      {/* Payment Status Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Debe Pagar
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Pagó
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Falta
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Estado
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {alumnos.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-8 text-center text-gray-500"
                >
                  No hay alumnas registradas
                </td>
              </tr>
            ) : (
              alumnos.map((alumna) => {
                const statusBadge = getStatusBadge(alumna.estado)
                return (
                  <tr key={alumna.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {alumna.nombre}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {formatCurrency(alumna.debe_pagar)}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-green-600">
                      {formatCurrency(alumna.pagado)}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-red-600">
                      {formatCurrency(alumna.debe)}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${statusBadge.color}`}
                      >
                        {statusBadge.icon}
                        {statusBadge.label}
                      </span>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
