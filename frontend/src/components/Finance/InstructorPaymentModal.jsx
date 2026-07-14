import { useState } from 'react'
import { AlertCircle } from 'lucide-react'

export default function InstructorPaymentModal({ instructor, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    monto: '',
    metodo: 'TRANSFERENCIA',
    notas: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!formData.monto || parseFloat(formData.monto) <= 0) {
      setError('El monto debe ser mayor a 0')
      return
    }

    setLoading(true)
    try {
      const response = await fetch(
        `/api/legajo/${instructor.id}/pagar`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            monto: parseFloat(formData.monto),
            metodo: formData.metodo,
            notas: formData.notas || null
          })
        }
      )

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Error al registrar el pago')
      }

      setFormData({ monto: '', metodo: 'TRANSFERENCIA', notas: '' })
      onSuccess()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Registrar Pago - {instructor.nombre} {instructor.apellido}
        </h2>

        {error && (
          <div className="flex gap-3 bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Monto */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monto *
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-600">$</span>
              <input
                type="number"
                name="monto"
                value={formData.monto}
                onChange={handleChange}
                placeholder="0.00"
                step="0.01"
                min="0"
                required
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Método de Pago */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Método de Pago *
            </label>
            <select
              name="metodo"
              value={formData.metodo}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="TRANSFERENCIA">Transferencia</option>
              <option value="EFECTIVO">Efectivo</option>
              <option value="OTRO">Otro</option>
            </select>
          </div>

          {/* Notas */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notas (opcional)
            </label>
            <textarea
              name="notas"
              value={formData.notas}
              onChange={handleChange}
              placeholder="Ej: Pago por clases de la semana..."
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-300 transition-colors disabled:opacity-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Guardando...' : 'Registrar Pago'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
