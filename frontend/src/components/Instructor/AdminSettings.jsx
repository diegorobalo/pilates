import { useState, useEffect } from 'react'
import { ShieldCheck, Save, Loader } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

export default function AdminSettings() {
  const { accessToken } = useAuth()

  const [currentUsername, setCurrentUsername] = useState('')
  const [currentEmail, setCurrentEmail] = useState('')
  const [loadingMe, setLoadingMe] = useState(true)

  const [currentPassword, setCurrentPassword] = useState('')
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [email, setEmail] = useState('')

  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const authHeaders = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  }

  useEffect(() => {
    const loadMe = async () => {
      try {
        const res = await fetch('/api/admin/me', { headers: authHeaders })
        const data = await res.json()
        if (res.ok) {
          setCurrentUsername(data.username || '')
          setCurrentEmail(data.email || '')
          setNewUsername(data.username || '')
          setEmail(data.email || '')
        }
      } catch (e) {
        setError('No se pudo cargar la configuración')
      } finally {
        setLoadingMe(false)
      }
    }
    loadMe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    if (!currentPassword) {
      setError('Ingresá tu contraseña actual para confirmar los cambios.')
      return
    }
    setSaving(true)
    try {
      const res = await fetch('/api/admin/credentials', {
        method: 'PUT',
        headers: authHeaders,
        body: JSON.stringify({
          currentPassword,
          newUsername: newUsername || undefined,
          newPassword: newPassword || undefined,
          email,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'No se pudo actualizar')
      setSuccess('Cambios guardados correctamente.')
      setCurrentUsername(data.username)
      setCurrentEmail(data.email || '')
      setCurrentPassword('')
      setNewPassword('')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  if (loadingMe) {
    return (
      <div className="flex items-center justify-center py-12 text-gray-500">
        <Loader className="w-6 h-6 animate-spin mr-2" /> Cargando...
      </div>
    )
  }

  return (
    <div className="max-w-xl">
      <div className="flex items-center gap-2 mb-1">
        <ShieldCheck className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-bold text-gray-900">Configuración de Administrador</h2>
      </div>
      <p className="text-gray-600 mb-6 text-sm">
        Solo vos (el admin) ves esta sección. Cambiá tu usuario, contraseña y el email de recuperación.
      </p>

      <div className="bg-white rounded-xl shadow p-6">
        <div className="mb-4 text-sm text-gray-500">
          Usuario actual: <span className="font-semibold text-gray-800">{currentUsername}</span>
          {currentEmail && (
            <>
              {' · '}Email: <span className="font-semibold text-gray-800">{currentEmail}</span>
            </>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nuevo usuario</label>
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email de recuperación
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu-email@gmail.com"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            />
            <p className="text-xs text-gray-400 mt-1">
              A este email llega el código si olvidás la contraseña.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nueva contraseña <span className="text-gray-400">(dejá vacío para no cambiar)</span>
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              autoComplete="new-password"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            />
          </div>

          <div className="pt-2 border-t border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña actual <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              autoComplete="current-password"
              placeholder="Confirmá con tu contraseña actual"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            />
          </div>

          {error && <p className="text-sm text-danger font-medium">{error}</p>}
          {success && <p className="text-sm text-green-600 font-medium">{success}</p>}

          <button
            type="submit"
            disabled={saving}
            className="w-full btn btn-primary disabled:opacity-50 font-bold py-3 flex items-center justify-center gap-2"
          >
            {saving ? (
              <>
                <Loader className="w-5 h-5 animate-spin" /> Guardando...
              </>
            ) : (
              <>
                <Save className="w-5 h-5" /> Guardar cambios
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
