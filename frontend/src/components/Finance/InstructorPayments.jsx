import { useState, useEffect } from 'react'
import { Search, Plus, DollarSign } from 'lucide-react'
import InstructorPaymentModal from './InstructorPaymentModal'

export default function InstructorPayments() {
  const [instructors, setInstructors] = useState([])
  const [instructorPayments, setInstructorPayments] = useState({})
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredInstructors, setFilteredInstructors] = useState([])
  const [selectedInstructor, setSelectedInstructor] = useState(null)
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  useEffect(() => {
    fetchInstructors()
  }, [])

  useEffect(() => {
    const filtered = instructors.filter((instructor) =>
      `${instructor.nombre} ${instructor.apellido}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    setFilteredInstructors(filtered)
  }, [searchTerm, instructors])

  const fetchInstructors = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/users?tipo=PROFESORA')
      if (!response.ok) throw new Error('Error fetching instructors')
      const data = await response.json()
      const list = Array.isArray(data) ? data : data.users || []
      setInstructors(list)

      // Fetch payment data for each instructor
      const paymentsMap = {}
      for (const instructor of list) {
        try {
          const paymentResponse = await fetch(
            `/api/payments/instructor/${instructor.id}`
          )
          if (paymentResponse.ok) {
            const paymentData = await paymentResponse.json()
            paymentsMap[instructor.id] = paymentData
          }
        } catch (err) {
          console.error(`Error fetching payments for ${instructor.id}:`, err)
        }
      }
      setInstructorPayments(paymentsMap)
    } catch (err) {
      console.error('Error fetching instructors:', err)
    } finally {
      setLoading(false)
    }
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
    }).format(value || 0)
  }

  const handlePaymentClick = (instructor) => {
    setSelectedInstructor(instructor)
    setShowPaymentModal(true)
  }

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false)
    fetchInstructors()
  }

  if (loading) {
    return <div className="text-center py-8 text-gray-500">Cargando...</div>
  }

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por nombre de instructora..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      {/* Instructors Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Instructora
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Teléfono
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Total Pagado (Este Mes)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Último Pago
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredInstructors.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-8 text-center text-gray-500"
                >
                  {searchTerm
                    ? 'No se encontraron instructoras'
                    : 'No hay instructoras registradas'}
                </td>
              </tr>
            ) : (
              filteredInstructors.map((instructor) => {
                const payments = instructorPayments[instructor.id] || {}
                const totalThisMonth = payments.totalThisMonth || 0
                const lastPayment = payments.lastPayment

                return (
                  <tr key={instructor.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {instructor.nombre} {instructor.apellido}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {instructor.telefono}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        {formatCurrency(totalThisMonth)}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {lastPayment
                        ? new Date(lastPayment.fecha_pago).toLocaleDateString(
                            'es-AR'
                          )
                        : 'Sin pagos'}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button
                        onClick={() => handlePaymentClick(instructor)}
                        className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 hover:bg-green-200 rounded transition-colors text-xs font-medium"
                      >
                        <Plus className="w-4 h-4" />
                        Pagar
                      </button>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {showPaymentModal && selectedInstructor && (
        <InstructorPaymentModal
          instructor={selectedInstructor}
          onClose={() => setShowPaymentModal(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  )
}
