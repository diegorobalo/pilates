import { useState } from 'react'
import { X, AlertCircle, CheckCircle } from 'lucide-react'

export default function PaymentModal({ student, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    alumnaId: student.id,
    monto: '',
    fechaPago: new Date().toISOString().split('T')[0],
    mesReferencia: new Date().toISOString().slice(0, 7),
    metodo: 'EFECTIVO',
    notas: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    if (!formData.monto || parseFloat(formData.monto) <= 0) {
      setError('El monto debe ser mayor a 0')
      return false
    }
    if (!formData.fechaPago) {
      setError('La fecha de pago es requerida')
      return false
    }
    if (!formData.metodo) {
      setError('El método de pago es requerido')
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    if (!validateForm()) {
      return
    }

    try {
      setLoading(true)
      const response = await fetch(`/api/legajo/${student.id}/pagar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          monto: parseFloat(formData.monto),
          metodo: formData.metodo,
          notas: formData.notas || null,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || errorData.message || 'Error al registrar el pago')
      }

      setSuccess(true)
      setFormData({
        alumnaId: student.id,
        monto: '',
        fechaPago: new Date().toISOString().split('T')[0],
        mesReferencia: new Date().toISOString().slice(0, 7),
        metodo: 'EFECTIVO',
        notas: '',
      })

      // Close modal after success
      setTimeout(() => {
        onSuccess?.()
      }, 1500)
    } catch (err) {
      setError(err.message)
      console.error('Error registering payment:', err)
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 flex items-center justify-between rounded-t-lg">
          <h2 className="text-lg font-bold">Registrar Pago</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Success Message */}
          {success && (
            <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-gap-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mr-2" />
              Pago registrado correctamente
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Student Name Display */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">
                Alumna
              </p>
              <p className="text-sm font-semibold text-blue-900">
                {student.nombre}
              </p>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Monto *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-600">$</span>
                <input
                  type="number"
                  name="monto"
                  value={formData.monto}
                  onChange={handleChange}
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  className="w-full pl-7 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              {formData.monto && (
                <p className="text-xs text-gray-600 mt-1">
                  {formatCurrency(formData.monto)}
                </p>
              )}
            </div>

            {/* Payment Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fecha de Pago *
              </label>
              <input
                type="date"
                name="fechaPago"
                value={formData.fechaPago}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Reference Month */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mes de Referencia *
              </label>
              <input
                type="month"
                name="mesReferencia"
                value={formData.mesReferencia}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Método de Pago *
              </label>
              <div className="space-y-2">
                {['EFECTIVO', 'TRANSFERENCIA', 'OTRO'].map((method) => (
                  <label
                    key={method}
                    className="flex items-center gap-3 p-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <input
                      type="radio"
                      name="metodo"
                      value={method}
                      checked={formData.metodo === method}
                      onChange={handleChange}
                      className="w-4 h-4 text-green-600"
                    />
                    <span className="text-sm text-gray-700">{method}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notas (opcional)
              </label>
              <textarea
                name="notas"
                value={formData.notas}
                onChange={handleChange}
                placeholder="Añadir nota..."
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                disabled={loading}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? 'Registrando...' : 'Registrar Pago'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
