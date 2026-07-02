import { useState, useEffect } from 'react'
import { X, Plus, Phone, CheckCircle } from 'lucide-react'
import PaymentModal from './PaymentModal'

export default function StudentPaymentDetail({
  student,
  onClose,
  onPaymentRegistered,
}) {
  const [payments, setPayments] = useState([])
  const [loading, setLoading] = useState(true)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [status, setStatus] = useState('PENDIENTE')
  const [totalReceived, setTotalReceived] = useState(0)
  const [pendingBalance, setPendingBalance] = useState(0)

  useEffect(() => {
    fetchPaymentDetail()
  }, [student.id])

  const fetchPaymentDetail = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/payments/alumna/${student.id}`)
      if (!response.ok) throw new Error('Error fetching payment details')
      const data = await response.json()

      setPayments(data.paymentHistory || [])
      setStatus(data.status || 'PENDIENTE')
      setTotalReceived(data.totalReceived || 0)
      setPendingBalance(data.pendingBalance || 0)
    } catch (err) {
      console.error('Error fetching payment details:', err)
    } finally {
      setLoading(false)
    }
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(value || 0)
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getStatusColor = () => {
    switch (status) {
      case 'AL_DIA':
        return 'bg-green-100 text-green-800 border-green-300'
      case 'VENCIDA':
        return 'bg-red-100 text-red-800 border-red-300'
      default:
        return 'bg-yellow-100 text-yellow-800 border-yellow-300'
    }
  }

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false)
    fetchPaymentDetail()
    onPaymentRegistered?.()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            Historial de Pagos - {student.nombre}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {loading ? (
          <div className="p-6 text-center text-gray-500">Cargando...</div>
        ) : (
          <div className="p-6 space-y-6">
            {/* Student Info */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider">
                    Nombre
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {student.nombre}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider">
                    Teléfono
                  </p>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-600" />
                    <p className="text-lg font-semibold text-gray-900">
                      {student.telefono || 'No disponible'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status and Balance */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">
                  Estado Actual
                </p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor()}`}>
                  {status === 'AL_DIA'
                    ? '✓ Al Día'
                    : status === 'VENCIDA'
                    ? '⚠️ Vencida'
                    : '⏳ Pendiente'}
                </span>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">
                  Recibido
                </p>
                <p className="text-lg font-bold text-green-600">
                  {formatCurrency(totalReceived)}
                </p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">
                  Pendiente
                </p>
                <p className="text-lg font-bold text-yellow-600">
                  {formatCurrency(pendingBalance)}
                </p>
              </div>
            </div>

            {/* Payment History */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Historial de Pagos
              </h3>
              {payments.length === 0 ? (
                <p className="text-center text-gray-500 py-4">
                  Sin pagos registrados
                </p>
              ) : (
                <div className="space-y-2">
                  {payments.map((payment, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {formatDate(payment.fecha)}
                        </p>
                        <p className="text-xs text-gray-600">
                          Método: {payment.metodo || 'No especificado'}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-gray-900">
                          {formatCurrency(payment.monto)}
                        </p>
                        <p className="text-xs text-gray-600">
                          {payment.registradoPor || 'Sistema'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Timeline Summary */}
            {payments.length > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">
                      Último pago registrado
                    </p>
                    <p className="text-xs text-blue-700 mt-1">
                      {formatDate(
                        payments[0].fecha
                      )} - {formatCurrency(payments[0].monto)}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={() => setShowPaymentModal(true)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                <Plus className="w-5 h-5" />
                Registrar Pago
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <PaymentModal
          student={student}
          onClose={() => setShowPaymentModal(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  )
}
