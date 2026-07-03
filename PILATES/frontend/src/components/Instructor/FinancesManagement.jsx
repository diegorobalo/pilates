import { useState, useEffect } from 'react'
import { DollarSign, TrendingUp, Calendar, Search } from 'lucide-react'

export default function FinancesManagement() {
  const [payments, setPayments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filterMonth, setFilterMonth] = useState(
    new Date().toISOString().slice(0, 7)
  )
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPayments, setFilteredPayments] = useState([])
  const [stats, setStats] = useState({
    totalIncome: 0,
    totalPending: 0,
    totalCollected: 0,
  })

  useEffect(() => {
    fetchPayments()
  }, [filterMonth])

  useEffect(() => {
    const filtered = payments.filter((payment) =>
      payment.nombre_alumna.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredPayments(filtered)

    // Calculate stats
    const collected = filtered
      .filter((p) => p.estado === 'PAGADO')
      .reduce((sum, p) => sum + (p.monto || 0), 0)
    const pending = filtered
      .filter((p) => p.estado === 'PENDIENTE')
      .reduce((sum, p) => sum + (p.monto || 0), 0)
    const total = filtered.reduce((sum, p) => sum + (p.monto || 0), 0)

    setStats({
      totalIncome: total,
      totalPending: pending,
      totalCollected: collected,
    })
  }, [searchTerm, payments])

  const fetchPayments = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        `/api/payments?month=${filterMonth}`
      )
      if (!response.ok) throw new Error('Error fetching payments')
      const data = await response.json()
      setPayments(Array.isArray(data) ? data : data.payments || [])
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleMarkAsPaid = async (paymentId) => {
    try {
      const response = await fetch(`/api/payments/${paymentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado: 'PAGADO' }),
      })

      if (!response.ok) throw new Error('Error updating payment')

      setPayments((prev) =>
        prev.map((p) =>
          p.id === paymentId ? { ...p, estado: 'PAGADO' } : p
        )
      )
    } catch (err) {
      alert(`Error: ${err.message}`)
    }
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(value)
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('es-ES')
  }

  if (loading) {
    return <div className="text-center py-8 text-gray-500">Cargando...</div>
  }

  return (
    <div className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Ingresos Totales</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(stats.totalIncome)}
              </p>
            </div>
            <DollarSign className="w-12 h-12 text-primary opacity-20" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pagos Recibidos</p>
              <p className="text-2xl font-bold text-green-600">
                {formatCurrency(stats.totalCollected)}
              </p>
            </div>
            <TrendingUp className="w-12 h-12 text-green-500 opacity-20" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pagos Pendientes</p>
              <p className="text-2xl font-bold text-yellow-600">
                {formatCurrency(stats.totalPending)}
              </p>
            </div>
            <Calendar className="w-12 h-12 text-yellow-500 opacity-20" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Calendar className="w-4 h-4 inline mr-1" />
              Mes
            </label>
            <input
              type="month"
              value={filterMonth}
              onChange={(e) => setFilterMonth(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Search className="w-4 h-4 inline mr-1" />
              Buscar Alumna
            </label>
            <input
              type="text"
              placeholder="Nombre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Alumna
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Concepto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Monto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Fecha
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
            {filteredPayments.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-8 text-center text-gray-500"
                >
                  No hay pagos para mostrar
                </td>
              </tr>
            ) : (
              filteredPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {payment.nombre_alumna}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {payment.concepto}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {formatCurrency(payment.monto)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {formatDate(payment.fecha)}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        payment.estado === 'PAGADO'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {payment.estado}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {payment.estado === 'PENDIENTE' && (
                      <button
                        onClick={() => handleMarkAsPaid(payment.id)}
                        className="px-3 py-1 bg-green-100 text-green-700 hover:bg-green-200 rounded transition-colors text-xs font-medium"
                      >
                        Marcar Pagado
                      </button>
                    )}
                    {payment.estado === 'PAGADO' && (
                      <span className="text-green-600 text-xs font-medium">
                        ✓ Pagado
                      </span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
