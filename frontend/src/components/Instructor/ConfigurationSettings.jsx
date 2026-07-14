import { useState, useEffect } from 'react'
import { Settings, Save, AlertCircle, CheckCircle } from 'lucide-react'

export default function ConfigurationSettings() {
  const [config, setConfig] = useState({
    CAPACIDAD_CAMAS: 6,
    CLASE_DURACION_MINUTOS: 60,
    MONEDA: 'ARS'
  })
  const [original, setOriginal] = useState({ ...config })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    fetchConfig()
  }, [])

  const fetchConfig = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/config')
      if (!response.ok) throw new Error('Error loading configuration')
      const data = await response.json()
      setConfig(data.config)
      setOriginal(data.config)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (key, value) => {
    setConfig(prev => ({
      ...prev,
      [key]: key === 'CAPACIDAD_CAMAS' || key === 'CLASE_DURACION_MINUTOS'
        ? parseInt(value)
        : value
    }))
    setSuccess(null)
  }

  const handleSave = async () => {
    try {
      setSaving(true)
      setError(null)
      setSuccess(null)

      // Save each changed value
      for (const [key, value] of Object.entries(config)) {
        if (original[key] !== value) {
          const response = await fetch(`/api/config/${key}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ valor: value.toString() })
          })

          if (!response.ok) {
            throw new Error(`Error updating ${key}`)
          }
        }
      }

      setOriginal({ ...config })
      setSuccess('Configuración guardada exitosamente')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const hasChanges = JSON.stringify(config) !== JSON.stringify(original)

  if (loading) {
    return <div className="text-center py-8 text-gray-500">Cargando configuración...</div>
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Settings className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-bold text-gray-900">Configuración del Sistema</h2>
      </div>

      {/* Messages */}
      {error && (
        <div className="flex gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {success && (
        <div className="flex gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-green-700">{success}</p>
        </div>
      )}

      {/* Configuration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Capacidad de Camas */}
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Capacidad de Camas por Clase
            </h3>
            <p className="text-sm text-gray-600">
              Define cuántas personas máximo pueden asistir a una clase
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Número de Camas
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={config.CAPACIDAD_CAMAS}
                  onChange={(e) => handleChange('CAPACIDAD_CAMAS', e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <span className="text-sm text-gray-600 font-medium">camas/clase</span>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Rango: 1 - 20 camas. Este valor se usará para todas las nuevas clases.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-3">
              <p className="text-sm text-blue-800">
                <strong>Impacto:</strong> Afecta a las nuevas clases creadas. Las clases existentes mantendrán su capacidad actual.
              </p>
            </div>
          </div>
        </div>

        {/* Duración de Clase */}
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Duración Estándar de Clase
            </h3>
            <p className="text-sm text-gray-600">
              Duración promedio de una clase (informativo)
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minutos
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="15"
                  max="180"
                  step="15"
                  value={config.CLASE_DURACION_MINUTOS}
                  onChange={(e) => handleChange('CLASE_DURACION_MINUTOS', e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <span className="text-sm text-gray-600 font-medium">min</span>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Rango: 15 - 180 minutos (pasos de 15 min)
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded p-3">
              <p className="text-sm text-purple-800">
                <strong>Uso:</strong> Referencia para visualización y cálculos de horarios.
              </p>
            </div>
          </div>
        </div>

        {/* Moneda */}
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Moneda del Sistema
            </h3>
            <p className="text-sm text-gray-600">
              Moneda utilizada para pagos y finanzas
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Código de Moneda
              </label>
              <select
                value={config.MONEDA}
                onChange={(e) => handleChange('MONEDA', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="ARS">ARS - Peso Argentino</option>
                <option value="USD">USD - Dólar Estadounidense</option>
                <option value="EUR">EUR - Euro</option>
                <option value="UYU">UYU - Peso Uruguayo</option>
              </select>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-3">
              <p className="text-sm text-green-800">
                <strong>Actual:</strong> {config.MONEDA}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Resumen de Configuración</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded p-3 border border-gray-200">
            <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Capacidad</p>
            <p className="text-2xl font-bold text-blue-600">{config.CAPACIDAD_CAMAS}</p>
            <p className="text-xs text-gray-500 mt-1">camas por clase</p>
          </div>
          <div className="bg-white rounded p-3 border border-gray-200">
            <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Duración</p>
            <p className="text-2xl font-bold text-purple-600">{config.CLASE_DURACION_MINUTOS}</p>
            <p className="text-xs text-gray-500 mt-1">minutos</p>
          </div>
          <div className="bg-white rounded p-3 border border-gray-200">
            <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Moneda</p>
            <p className="text-2xl font-bold text-green-600">{config.MONEDA}</p>
            <p className="text-xs text-gray-500 mt-1">del sistema</p>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex gap-3">
        {hasChanges && (
          <>
            <button
              onClick={fetchConfig}
              disabled={saving}
              className="px-4 py-2 bg-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-300 transition-colors disabled:opacity-50"
            >
              Descartar Cambios
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {saving ? 'Guardando...' : 'Guardar Configuración'}
            </button>
          </>
        )}
        {!hasChanges && !success && (
          <p className="text-sm text-gray-600">Sin cambios</p>
        )}
      </div>
    </div>
  )
}
