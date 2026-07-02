import { useState, useEffect } from 'react'
import { Search, Eye, Plus } from 'lucide-react'
import StudentPaymentDetail from './StudentPaymentDetail'
import PaymentModal from './PaymentModal'

export default function StudentPayments() {
  const [students, setStudents] = useState([])
  const [studentPayments, setStudentPayments] = useState({})
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredStudents, setFilteredStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  useEffect(() => {
    fetchStudents()
  }, [])

  useEffect(() => {
    const filtered = students.filter((student) =>
      student.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredStudents(filtered)
  }, [searchTerm, students])

  const fetchStudents = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/users?tipo=ALUMNA')
      if (!response.ok) throw new Error('Error fetching students')
      const data = await response.json()
      setStudents(data)

      // Fetch payment data for each student
      const paymentsMap = {}
      for (const student of data) {
        try {
          const paymentResponse = await fetch(
            `/api/payments/alumna/${student.id}`
          )
          if (paymentResponse.ok) {
            const paymentData = await paymentResponse.json()
            paymentsMap[student.id] = paymentData
          }
        } catch (err) {
          console.error(`Error fetching payments for ${student.id}:`, err)
        }
      }
      setStudentPayments(paymentsMap)
    } catch (err) {
      console.error('Error fetching students:', err)
    } finally {
      setLoading(false)
    }
  }

  const getPaymentStatus = (student) => {
    const payments = studentPayments[student.id] || {}
    const status = payments.status || 'PENDIENTE'

    if (status === 'AL_DIA') {
      return {
        label: 'AL DÍA',
        color: 'bg-green-100 text-green-800 border-green-300',
        icon: '✓',
      }
    } else if (status === 'VENCIDA') {
      return {
        label: 'VENCIDA',
        color: 'bg-red-100 text-red-800 border-red-300',
        icon: '⚠️',
      }
    } else {
      return {
        label: 'PENDIENTE',
        color: 'bg-yellow-100 text-yellow-800 border-yellow-300',
        icon: '⏳',
      }
    }
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(value || 0)
  }

  const handleDetailClick = (student) => {
    setSelectedStudent(student)
    setShowDetailModal(true)
  }

  const handlePaymentClick = (student) => {
    setSelectedStudent(student)
    setShowPaymentModal(true)
  }

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false)
    fetchStudents()
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
            placeholder="Buscar por nombre de alumna..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Alumna
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Plan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Monto Debido
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Pagos Recientes
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredStudents.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-8 text-center text-gray-500"
                >
                  {searchTerm
                    ? 'No se encontraron alumnas'
                    : 'No hay alumnas registradas'}
                </td>
              </tr>
            ) : (
              filteredStudents.map((student) => {
                const status = getPaymentStatus(student)
                const payments = studentPayments[student.id] || {}
                const recentPayments = payments.recentPayments || []
                const amountDue = payments.amountDue || 0

                return (
                  <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {student.nombre}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {student.plan || 'Sin plan'}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${status.color}`}
                      >
                        {status.icon} {status.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {formatCurrency(amountDue)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {recentPayments.length > 0
                        ? `${recentPayments.length} pago${
                            recentPayments.length > 1 ? 's' : ''
                          }`
                        : 'Sin pagos'}
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2 flex">
                      <button
                        onClick={() => handleDetailClick(student)}
                        className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded transition-colors text-xs font-medium"
                      >
                        <Eye className="w-4 h-4" />
                        Ver Detalle
                      </button>
                      <button
                        onClick={() => handlePaymentClick(student)}
                        className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 hover:bg-green-200 rounded transition-colors text-xs font-medium"
                      >
                        <Plus className="w-4 h-4" />
                        Registrar Pago
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
      {showDetailModal && selectedStudent && (
        <StudentPaymentDetail
          student={selectedStudent}
          onClose={() => setShowDetailModal(false)}
          onPaymentRegistered={() => {
            setShowDetailModal(false)
            fetchStudents()
          }}
        />
      )}

      {showPaymentModal && selectedStudent && (
        <PaymentModal
          student={selectedStudent}
          onClose={() => setShowPaymentModal(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  )
}
