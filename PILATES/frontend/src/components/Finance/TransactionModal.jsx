import { useState } from 'react'
import { X, AlertCircle, CheckCircle } from 'lucide-react'

export default function TransactionModal({ isOpen, onClose, onSuccess, tipo = 'INGRESO' }) {
  const [formData, setFormData] = useState({
    monto: '',
    fecha: new Date().toISOString().split('T')[0],
    descripcion: '',
    categoria: '',
    metodo: 'EFECTIVO',
    notas: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const transactionTypes = {
    INGRESO: {
      label: 'Registrar Ingreso',
      categories: ['ALUMNAS', 'OTROS', 'REEMBOLSO'],
      color: 'from-green-600 to-green-700',
      buttonColor: 'bg-green-600 hover:bg-green-700',
    },
    GASTO: {
      label: 'Registrar Gasto',
      categories: ['ALQUILER', 'SERVICIOS', 'MANTENIMIENTO', 'SUMINISTROS', 'OTROS'],
      color: 'from-red-600 to-red-700',
      buttonColor: 'bg-red-600 hover:bg-red-700',
    },
    INGRESO_ALUMNA: {
      label: 'Registrar Pago de Alumna',
      categories: ['PAGO_SUSCRIPCION', 'PAGO_CLASE'],
      color: 'from-blue-600 to-blue-700',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
    },
  }

  const config = transactionTypes[tipo] || transactionTypes.INGRESO

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
    if (!formData.fecha) {
      setError('La fecha es requerida')
      return false
    }
    if (!formData.descripcion.trim()) {
      setError('La descripción es requerida')
      return false
    }
    if (!formData.categoria) {
      setError('La categoría es requerida')
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
      const endpoint = tipo === 'GASTO' ? '/api/finances/gastos' : '/api/finances/ingresos'
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          monto: parseFloat(formData.monto),
          fecha: formData.fecha,
          descripcion: formData.descripcion,
          categoria: formData.categoria,
          metodo: formData.metodo,
          notas: formData.notas || null,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || errorData.message || 'Error al registrar la transacción')
      }

      setSuccess(true)
      setFormData({
        monto: '',
        fecha: new Date().toISOString().split('T')[0],
        descripcion: '',
        categoria: '',
        metodo: 'EFECTIVO',
        notas: '',
      })

      setTimeout(() => {
        onSuccess?.()
        onClose()
      }, 1500)
    } catch (err) {
      setError(err.message)
      console.error('Error registering transaction:', err)
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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        {/* Header */}
        <div className={`bg-gradient-to-r ${config.color} text-white p-6 flex items-center justify-between rounded-t-lg`}>
          <h2 className="text-lg font-bold">{config.label}</h2>
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
            <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              Transacción registrada correctamente
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
                  className="w-full pl-7 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              {formData.monto && (
                <p className="text-xs text-gray-600 mt-1">
                  {formatCurrency(formData.monto)}
                </p>
              )}
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fecha *
              </label>
              <input
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descripción *
              </label>
              <input
                type="text"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                placeholder="Ej: Pago alumna María..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Categoría *
              </label>
              <select
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Seleccionar categoría</option>
                {config.categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
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
                      className="w-4 h-4 text-primary"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                className={`flex-1 px-4 py-2 ${config.buttonColor} text-white rounded-lg transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed`}
                disabled={loading}
              >
                {loading ? 'Registrando...' : 'Registrar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
