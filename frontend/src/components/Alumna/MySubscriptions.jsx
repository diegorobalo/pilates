import { useState, useEffect, useCallback } from 'react'
import { RefreshCw, Plus, Loader, Trash2, AlertCircle } from 'lucide-react'

const DIAS = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado'
}

export default function MySubscriptions() {
  const [subscriptions, setSubscriptions] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)

  const [formData, setFormData] = useState({
    dia_semana: 1,
    hora: '10:00',
    cama_preferida: '',
    notas: ''
  })

  const loadSubscriptions = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/subscriptions/mine')
      const data = await res.json()
      if (res.ok) {
        setSubscriptions(Array.isArray(data.subscriptions) ? data.subscriptions : [])
      } else {
        setError(data.message || 'Error')
      }
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadSubscriptions()
  }, [loadSubscriptions])

  const addSubscription = async (e) => {
    e.preventDefault()
    if (!formData.dia_semana || !formData.hora) {
      setError('Completa día y hora')
      return
    }

    try {
      const res = await fetch('/api/subscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dia_semana: parseInt(formData.dia_semana),
          hora: formData.hora,
          cama_preferida: formData.cama_preferida ? parseInt(formData.cama_preferida) : null,
          notas: formData.notas || null
        })
      })
      const data = await res.json()
      if (res.ok) {
        setShowForm(false)
        setFormData({ dia_semana: 1, hora: '10:00', cama_preferida: '', notas: '' })
        await loadSubscriptions()
      } else {
        setError(data.message || 'Error')
      }
    } catch (e) {
      setError(e.message)
    }
  }

  const cancelSubscription = async (id) => {
    if (!window.confirm('¿Cancelar esta suscripción?')) return
    try {
      const res = await fetch(`/api/subscriptions/${id}/cancel`, { method: 'POST' })
      if (res.ok) {
        await loadSubscriptions()
      }
    } catch (e) {
      setError(e.message)
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center py-12"><Loader className="w-6 h-6 animate-spin mr-2" /> Cargando...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Mis Suscripciones</h2>
        <button onClick={loadSubscriptions} className="flex items-center gap-2 text-sm text-gray-600">
          <RefreshCw className="w-4 h-4" /> Actualizar
        </button>
      </div>

      {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
        <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-blue-900">
          <p className="font-semibold mb-1">¿Cómo funciona?</p>
          <p>Suscríbete a un día y horario fijo. El sistema creará automáticamente reservas pendientes cada semana para los próximos 28 días. ¡Es mucho más fácil que reservar todos los días!</p>
        </div>
      </div>

      {/* Add Subscription Form */}
      <div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium"
        >
          <Plus className="w-4 h-4" /> Nueva Suscripción
        </button>

        {showForm && (
          <form onSubmit={addSubscription} className="bg-white p-4 rounded-lg border mt-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Día</label>
                <select
                  value={formData.dia_semana}
                  onChange={(e) => setFormData({ ...formData, dia_semana: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                >
                  {Object.entries(DIAS).map(([num, name]) => (
                    <option key={num} value={num}>{name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hora</label>
                <input
                  type="time"
                  value={formData.hora}
                  onChange={(e) => setFormData({ ...formData, hora: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cama Preferida (1-6)</label>
                <select
                  value={formData.cama_preferida}
                  onChange={(e) => setFormData({ ...formData, cama_preferida: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                >
                  <option value="">Sin preferencia</option>
                  {[1, 2, 3, 4, 5, 6].map(n => (
                    <option key={n} value={n}>Cama {n}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-2">
              <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">Crear</button>
              <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium">Cancelar</button>
            </div>
          </form>
        )}
      </div>

      {/* Subscriptions List */}
      {subscriptions.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-600">Aún no tienes suscripciones</p>
          <p className="text-sm text-gray-500 mt-1">Crea una suscripción para que el sistema reserve automáticamente tu lugar cada semana</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {subscriptions.map(sub => (
            <div key={sub.id} className="bg-white rounded-lg border p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <p className="font-semibold text-lg text-gray-900">
                    {DIAS[sub.dia_semana]} a las {sub.hora}
                  </p>
                  {sub.cama_preferida && (
                    <p className="text-sm text-gray-600">Cama preferida: {sub.cama_preferida}</p>
                  )}
                  {sub.notas && (
                    <p className="text-sm text-gray-500 mt-1">Notas: {sub.notas}</p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    sub.activa ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {sub.activa ? '✅ Activa' : '❌ Cancelada'}
                  </span>
                  {sub.activa && (
                    <button
                      onClick={() => cancelSubscription(sub.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
              <p className="text-xs text-gray-400">
                Desde: {new Date(sub.fecha_inicio).toLocaleDateString('es-AR')}
                {sub.fecha_fin && ` · Hasta: ${new Date(sub.fecha_fin).toLocaleDateString('es-AR')}`}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
