import { useState } from 'react'
import { UserCheck, Loader } from 'lucide-react'

const MESES = [
  { value: '01', label: 'Enero' },
  { value: '02', label: 'Febrero' },
  { value: '03', label: 'Marzo' },
  { value: '04', label: 'Abril' },
  { value: '05', label: 'Mayo' },
  { value: '06', label: 'Junio' },
  { value: '07', label: 'Julio' },
  { value: '08', label: 'Agosto' },
  { value: '09', label: 'Septiembre' },
  { value: '10', label: 'Octubre' },
  { value: '11', label: 'Noviembre' },
  { value: '12', label: 'Diciembre' },
]

const CURRENT_YEAR = new Date().getFullYear()
// Descending years, from this year back 100 years — fast to scroll for any age.
const ANIOS = Array.from({ length: 101 }, (_, i) => String(CURRENT_YEAR - i))
const DIAS = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'))

export default function AlumnaOnboarding({ userId, onComplete }) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    direccion: '',
    ciudad: ''
  })
  // Separate parts for the day/month/year selectors
  const [dob, setDob] = useState({ dia: '', mes: '', anio: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleDobChange = (part, value) => {
    const next = { ...dob, [part]: value }
    setDob(next)
    // Compose YYYY-MM-DD only when all three are chosen
    const composed = next.anio && next.mes && next.dia
      ? `${next.anio}-${next.mes}-${next.dia}`
      : ''
    setFormData(prev => ({ ...prev, fecha_nacimiento: composed }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!formData.nombre || !formData.apellido || !formData.fecha_nacimiento) {
      setError('Nombre, apellido y fecha de nacimiento son obligatorios.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`/api/onboarding/${userId}/complete`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.message || data.error || 'Error al completar perfil')

      onComplete(data.user)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-primary/10 p-3 rounded-full">
            <UserCheck className="w-6 h-6 text-primary" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-2">Completá tu perfil</h2>
        <p className="text-gray-600 text-center text-sm mb-6">
          Necesitamos algunos datos para terminar tu registro.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Apellido *</label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              placeholder="Tu apellido"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de nacimiento *</label>
            <div className="grid grid-cols-3 gap-2">
              <select
                value={dob.dia}
                onChange={(e) => handleDobChange('dia', e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
              >
                <option value="">Día</option>
                {DIAS.map((d) => (
                  <option key={d} value={d}>{parseInt(d)}</option>
                ))}
              </select>
              <select
                value={dob.mes}
                onChange={(e) => handleDobChange('mes', e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
              >
                <option value="">Mes</option>
                {MESES.map((m) => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>
              <select
                value={dob.anio}
                onChange={(e) => handleDobChange('anio', e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
              >
                <option value="">Año</option>
                {ANIOS.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              placeholder="Tu dirección"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad</label>
            <input
              type="text"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              placeholder="Tu ciudad"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full btn btn-primary font-bold py-3 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" /> Guardando...
              </>
            ) : (
              <>
                <UserCheck className="w-5 h-5" /> Completar perfil
              </>
            )}
          </button>

          <p className="text-xs text-gray-500 text-center">
            * Campos obligatorios
          </p>
        </form>
      </div>
    </div>
  )
}
