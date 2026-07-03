import { useState, useEffect } from 'react'
import { Search, Edit, Trash2, AlertCircle } from 'lucide-react'
import PaymentModal from './PaymentModal'

export default function PaymentHistory() {
  const [payments, setPayments] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().toISOString().slice(0, 7)
  )
  const [selectedMethods, setSelectedMethods] = useState({
    EFECTIVO: true,
    TRANSFERENCIA: true,
    OTRO: true,
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [editingPayment, setEditingPayment] = useState(null)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(null)
  const [filteredPayments, setFilteredPayments] = useState([])

  const itemsPerPage = 20

  useEffect(() => {
    fetchPayments()
  }, [selectedMonth])

  useEffect(() => {
    filterPayments()
  }, [searchTerm, selectedMethods, payments, currentPage])

  const fetchPayments = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/payments/month/${selectedMonth}`)
      if (!response.ok) throw new Error('Error fetching payments')
      const data = await response.json()
      setPayments(Array.isArray(data) ? data : data.payments || [])
      setCurrentPage(1)
    } catch (err) {
      console.error('Error fetching payments:', err)
    } finally {
      setLoading(false)
    }
  }

  const filterPayments = () => {
    let filtered = payments.filter((payment) => {
      // Filter by search term
      const matchesSearch =
        !searchTerm ||
        payment.nombreAlumna
          .toLowerCase()
          .includes(searchTerm.toLowerCase())

      // Filter by payment method
      const matchesMethod = selectedMethods[payment.metodo] || false

      return matchesSearch && matchesMethod
    })

    // Sort by date (latest first)
    filtered.sort(
      (a, b) => new Date(b.fecha) - new Date(a.fecha)
    )

    setFilteredPayments(filtered)
  }

  const handleMethodToggle = (method) => {
    setSelectedMethods((prev) => ({
      ...prev,
      [method]: !prev[method],
    }))
    setCurrentPage(1)
  }

  const handleEdit = (payment) => {
    setEditingPayment(payment)
    setShowPaymentModal(true)
  }

  const handleDelete = async (paymentId) => {
    try {
      const response = await fetch(`/api/payments/${paymentId}`, {
        method: 'DELETE',
      })
      if (!response.ok) throw new Error('Error deleting payment')
      fetchPayments()
      setConfirmDelete(null)
    } catch (err) {
      console.error('Error deleting payment:', err)
      alert(`Error: ${err.message}`)
    }
  }

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false)
    setEditingPayment(null)
    fetchPayments()
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(value || 0)
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('es-ES')
  }

  // Pagination
  const totalPages = Math.ceil(filteredPayments.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedPayments = filteredPayments.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  if (loading) {
    return <div className="text-center py-8 text-gray-500">Cargando...</div>
  }

  return (
    <div className="space-y-4">
      {/* Month and Search */}
      <div className="bg-white rounded-lg shadow p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mes
            </label>
            <input
              type="month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
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

        {/* Payment Methods Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Filtrar por Método
          </label>
          <div className="flex flex-wrap gap-3">
            {['EFECTIVO', 'TRANSFERENCIA', 'OTRO'].map((method) => (
              <label key={method} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedMethods[method]}
                  onChange={() => handleMethodToggle(method)}
                  className="w-4 h-4 text-primary rounded focus:ring-2"
                />
                <span className="text-sm text-gray-700">{method}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Alumna
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Monto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Método
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Registrado Por
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedPayments.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-8 text-center text-gray-500"
                >
                  No hay pagos para mostrar
                </td>
              </tr>
            ) : (
              paginatedPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {formatDate(payment.fecha)}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {payment.nombreAlumna}
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">
                    {formatCurrency(payment.monto)}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      {payment.metodo}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {payment.registradoPor || 'Sistema'}
                  </td>
                  <td className="px-6 py-4 text-sm space-x-2">
                    <button
                      onClick={() => handleEdit(payment)}
                      className="px-3 py-1 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded transition-colors text-xs font-medium inline-flex items-center gap-1"
                    >
                      <Edit className="w-3 h-3" />
                      Editar
                    </button>
                    <button
                      onClick={() => setConfirmDelete(payment)}
                      className="px-3 py-1 bg-red-100 text-red-700 hover:bg-red-200 rounded transition-colors text-xs font-medium inline-flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Mostrando {startIndex + 1} a{' '}
            {Math.min(startIndex + itemsPerPage, filteredPayments.length)} de{' '}
            {filteredPayments.length} pagos
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              Anterior
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  currentPage === page
                    ? 'bg-primary text-white'
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              Siguiente
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Eliminar Pago
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              ¿Está seguro que desea eliminar este pago? Esta acción no se puede
              deshacer.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmDelete(null)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleDelete(confirmDelete.id)}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium transition-colors"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal for Editing */}
      {showPaymentModal && editingPayment && (
        <PaymentModal
          student={{
            id: editingPayment.alumnaId,
            nombre: editingPayment.nombreAlumna,
          }}
          initialData={editingPayment}
          onClose={() => {
            setShowPaymentModal(false)
            setEditingPayment(null)
          }}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  )
}
