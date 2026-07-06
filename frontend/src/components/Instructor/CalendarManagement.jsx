import { useState, useEffect, useCallback } from 'react'
import { Calendar, Plus, Loader, RefreshCw, Trash2, AlertCircle } from 'lucide-react'

const TIPOS = {
  FERIADO: 'Feriado',
  CERRADO: 'Cerrado',
  ESPECIAL: 'Especial'
}

export default function CalendarManagement() {
  const [exceptions, setExceptions] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [seedingYear, setSeedingYear] = useState(new Date().getFullYear())

  const [formData, setFormData] = useState({
    fecha: '',
    tipo: 'FERIADO',
    descripcion: '',
    afecta_suscripciones: 1
  })

  const loadExceptions = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/calendar')
      const data = await res.json()
      if (res.ok) {
        setExceptions(Array.isArray(data.exceptions) ? data.exceptions : [])
      }
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadExceptions()
  }, [loadExceptions])

  const addException = async (e) => {
    e.preventDefault()
    if (!formData.fecha || !formData.descripcion) {
      setError('Completa fecha y descripción')
      return
    }

    try {
      const res = await fetch('/api/calendar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (res.ok) {
        setShowForm(false)
        setFormData({ fecha: '', tipo: 'FERIADO', descripcion: '', afecta_suscripciones: 1 })
        await loadExceptions()
      } else {
        setError(data.message || 'Error')
      }
    } catch (e) {
      setError(e.message)
    }
  }

  const deleteException = async (id) => {
    if (!window.confirm('¿Eliminar este día?')) return
    try {
      const res = await fetch(`/api/calendar/${id}`, { method: 'DELETE' })
      if (res.ok) {
        await loadExceptions()
      }
    } catch (e) {
      setError(e.message)
    }
  }

  const seedHolidays = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/calendar/seed-holidays', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ year: seedingYear })
      })
      const data = await res.json()
      if (res.ok) {
        alert(`✅ Se cargaron ${data.count} feriados de ${seedingYear}`)
        await loadExceptions()
      }
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading && exceptions.length === 0) {
    return <div className="flex items-center justify-center py-12"><Loader className="w-6 h-6 animate-spin mr-2" /> Cargando...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-bold">Calendario - Feriados y Cierres</h2>
        </div>
        <button onClick={loadExceptions} className="flex items-center gap-2 text-sm text-gray-600">
          <RefreshCw className="w-4 h-4" /> Actualizar
        </button>
      </div>

      {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}

      {/* Seed Holidays Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-blue-900 mb-2">Cargar Feriados Argentinos</p>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                value={seedingYear}
                onChange={(e) => setSeedingYear(parseInt(e.target.value))}
                className="px-3 py-2 border border-blue-300 rounded text-sm"
              />
              <button
                onClick={seedHolidays}
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium disabled:opacity-50"
              >
                Cargar Feriados
              </button>
              <p className="text-xs text-blue-700">Se cargan los feriados oficiales de Argentina para el año seleccionado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Exception Form */}
      <div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium"
        >
          <Plus className="w-4 h-4" /> Agregar Día
        </button>

        {showForm && (
          <form onSubmit={addException} className="bg-white p-4 rounded-lg border mt-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
                <input
                  type="date"
                  value={formData.fecha}
                  onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
                <select
                  value={formData.tipo}
                  onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                >
                  {Object.entries(TIPOS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
              <input
                type="text"
                value={formData.descripcion}
                onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                placeholder="ej: Vacaciones de invierno"
                className="w-full px-3 py-2 border rounded-lg text-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.afecta_suscripciones}
                onChange={(e) => setFormData({ ...formData, afecta_suscripciones: e.target.checked ? 1 : 0 })}
                className="rounded"
              />
              <label className="text-sm text-gray-700">Afecta suscripciones automáticas</label>
            </div>
            <div className="flex gap-2">
              <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">Agregar</button>
              <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium">Cancelar</button>
            </div>
          </form>
        )}
      </div>

      {/* Exceptions Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Fecha</th>
              <th className="px-4 py-3 text-left font-semibold">Descripción</th>
              <th className="px-4 py-3 text-left font-semibold">Tipo</th>
              <th className="px-4 py-3 text-left font-semibold">Afecta Suscripciones</th>
              <th className="px-4 py-3 text-center font-semibold">Acción</th>
            </tr>
          </thead>
          <tbody>
            {exceptions.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-4 py-3 text-center text-gray-500">No hay excepciones cargadas</td>
              </tr>
            ) : (
              exceptions.map(ex => (
                <tr key={ex.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">{new Date(ex.fecha).toLocaleDateString('es-AR')}</td>
                  <td className="px-4 py-3">{ex.descripcion}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      ex.tipo === 'FERIADO' ? 'bg-red-100 text-red-700' :
                      ex.tipo === 'CERRADO' ? 'bg-orange-100 text-orange-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {TIPOS[ex.tipo]}
                    </span>
                  </td>
                  <td className="px-4 py-3">{ex.afecta_suscripciones ? '✅' : '❌'}</td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => deleteException(ex.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
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
