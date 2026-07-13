import { useState, useEffect } from 'react'
import { X, AlertCircle, CheckCircle } from 'lucide-react'

export default function TransactionModal({ isOpen, onClose, onSuccess, tipo = null }) {
  const [formData, setFormData] = useState({
    tipo: tipo || 'GASTO',
    categoria: '',
    subcategoria: '',
    monto: '',
    fecha: new Date().toISOString().split('T')[0],
    descripcion: '',
    alumna_id: '',
    instructor_id: '',
    comprobante: ''
  })

  const [categories, setCategories] = useState([])
  const [alumnos, setAlumnos] = useState([])
  const [instructores, setInstructores] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [newCategory, setNewCategory] = useState('')
  const [creatingCategory, setCreatingCategory] = useState(false)
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false)

  // Fetch categories and conditionally fetch users based on tipo
  useEffect(() => {
    if (!isOpen) return

    const fetchData = async () => {
      try {
        // Fetch categories
        const categoriesRes = await fetch('/api/finances/categorias')
        if (categoriesRes.ok) {
          const data = await categoriesRes.json()
          setCategories(data.categorias || [])
        }

        // Fetch alumnos if transaction type requires it
        if (formData.tipo === 'INGRESO_ALUMNA') {
          const alumnosRes = await fetch('/api/users?role=ALUMNA')
          if (alumnosRes.ok) {
            const data = alumnosRes.json()
            setAlumnos(data.usuarios || [])
          }
        }

        // Fetch instructores if transaction type requires it
        if (formData.tipo === 'PAGO_INSTRUCTOR') {
          const instructoresRes = await fetch('/api/users?role=INSTRUCTOR')
          if (instructoresRes.ok) {
            const data = await instructoresRes.json()
            setInstructores(data.usuarios || [])
          }
        }
      } catch (err) {
        console.error('Error fetching data:', err)
      }
    }

    fetchData()
  }, [isOpen, formData.tipo])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCreateCategory = async () => {
    if (!newCategory.trim()) {
      setError('El nombre de la categoría no puede estar vacío')
      return
    }

    setCreatingCategory(true)
    setError(null)

    try {
      const response = await fetch('/api/finances/categorias', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: newCategory,
          descripcion: ''
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Error al crear categoría')
      }

      const data = await response.json()
      setCategories([...categories, data.categoria])
      setFormData((prev) => ({
        ...prev,
        categoria: data.categoria.id.toString()
      }))
      setNewCategory('')
      setShowNewCategoryInput(false)
    } catch (err) {
      setError(err.message)
    } finally {
      setCreatingCategory(false)
    }
  }

  const validateForm = () => {
    if (!formData.tipo) {
      setError('El tipo de transacción es requerido')
      return false
    }
    if (!formData.categoria) {
      setError('La categoría es requerida')
      return false
    }
    if (!formData.monto || parseFloat(formData.monto) <= 0) {
      setError('El monto debe ser mayor a 0')
      return false
    }
    if (!formData.fecha) {
      setError('La fecha es requerida')
      return false
    }
    if (formData.tipo === 'INGRESO_ALUMNA' && !formData.alumna_id) {
      setError('Debe seleccionar una alumna')
      return false
    }
    if (formData.tipo === 'PAGO_INSTRUCTOR' && !formData.instructor_id) {
      setError('Debe seleccionar un instructor')
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

      // Calculate mes_referencia from fecha
      const mes_referencia = formData.fecha.slice(0, 7)

      const response = await fetch('/api/finances/transacciones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tipo: formData.tipo,
          categoria_id: parseInt(formData.categoria),
          subcategoria: formData.subcategoria || null,
          monto: parseFloat(formData.monto),
          fecha: formData.fecha,
          mes_referencia,
          descripcion: formData.descripcion || null,
          alumna_id: formData.alumna_id || null,
          instructor_id: formData.instructor_id || null,
          comprobante: formData.comprobante || null
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || errorData.message || 'Error al registrar la transacción')
      }

      setSuccess(true)
      setFormData({
        tipo: tipo || 'GASTO',
        categoria: '',
        subcategoria: '',
        monto: '',
        fecha: new Date().toISOString().split('T')[0],
        descripcion: '',
        alumna_id: '',
        instructor_id: '',
        comprobante: ''
      })

      // Close modal after success
      setTimeout(() => {
        onSuccess?.()
        onClose?.()
      }, 1500)
    } catch (err) {
      setError(err.message)
      console.error('Error registering transaction:', err)
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 flex items-center justify-between rounded-t-lg flex-shrink-0">
          <h2 className="text-lg font-bold">Nueva Transacción</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 flex-1">
          {/* Success Message */}
          {success && (
            <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-start gap-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
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
            {/* Tipo de Transacción */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Transacción *
              </label>
              <select
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="GASTO">Gasto</option>
                <option value="INGRESO_ALUMNA">Ingreso de Alumna</option>
                <option value="PAGO_INSTRUCTOR">Pago de Instructor</option>
                <option value="INGRESO_OTRO">Otro Ingreso</option>
              </select>
            </div>

            {/* Categoría */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Categoría *
              </label>
              <div className="flex gap-2">
                <select
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Seleccionar categoría</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.nombre}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => setShowNewCategoryInput(!showNewCategoryInput)}
                  className="px-3 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                  disabled={creatingCategory}
                >
                  +
                </button>
              </div>

              {/* New Category Input */}
              {showNewCategoryInput && (
                <div className="mt-2 flex gap-2">
                  <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="Nombre de nueva categoría"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <button
                    type="button"
                    onClick={handleCreateCategory}
                    disabled={creatingCategory || !newCategory.trim()}
                    className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 text-sm"
                  >
                    {creatingCategory ? 'Creando...' : 'Crear'}
                  </button>
                </div>
              )}
            </div>

            {/* Monto */}
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
                  className="w-full pl-7 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Fecha */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fecha *
              </label>
              <input
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Descripción */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descripción (opcional)
              </label>
              <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                placeholder="Detalles adicionales..."
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Alumna Selection - Conditional */}
            {formData.tipo === 'INGRESO_ALUMNA' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alumna *
                </label>
                <select
                  name="alumna_id"
                  value={formData.alumna_id}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Seleccionar alumna</option>
                  {alumnos.map((alumna) => (
                    <option key={alumna.id} value={alumna.id}>
                      {alumna.nombre} {alumna.apellido || ''}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Instructor Selection - Conditional */}
            {formData.tipo === 'PAGO_INSTRUCTOR' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Instructor *
                </label>
                <select
                  name="instructor_id"
                  value={formData.instructor_id}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Seleccionar instructor</option>
                  {instructores.map((instructor) => (
                    <option key={instructor.id} value={instructor.id}>
                      {instructor.nombre} {instructor.apellido || ''}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Subcategoría */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subcategoría (opcional)
              </label>
              <input
                type="text"
                name="subcategoria"
                value={formData.subcategoria}
                onChange={handleChange}
                placeholder="Detalles de categoría..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Comprobante */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Comprobante (opcional)
              </label>
              <input
                type="text"
                name="comprobante"
                value={formData.comprobante}
                onChange={handleChange}
                placeholder="Número de comprobante..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </form>
        </div>

        {/* Footer - Buttons */}
        <div className="border-t border-gray-200 p-6 bg-gray-50 flex gap-3 flex-shrink-0 rounded-b-lg">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-medium disabled:opacity-50"
            disabled={loading}
          >
            Cancelar
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Registrando...' : 'Registrar Transacción'}
          </button>
        </div>
      </div>
    </div>
  )
}
