import { useState, useEffect, useCallback } from 'react'
import { UserPlus, Check, X, Send, Loader, RefreshCw, MessageCircle } from 'lucide-react'

const ROLE_LABEL = {
  ALUMNA: 'Alumna',
  PROFESORA: 'Profesora',
  DUEÑA: 'Dueña',
  ADMIN: 'Admin',
}

export default function UserManagement() {
  const [pending, setPending] = useState([])
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [roleChoice, setRoleChoice] = useState({}) // { [userId]: 'ALUMNA' | 'PROFESORA' }
  const [busyId, setBusyId] = useState(null)
  const [lastSent, setLastSent] = useState(null) // { phone, code }

  const load = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const [pRes, uRes] = await Promise.all([
        fetch('/api/users/pending'),
        fetch('/api/users'),
      ])
      const pData = await pRes.json()
      const uData = await uRes.json()
      if (!pRes.ok) throw new Error(pData.message || pData.error || 'Error al cargar solicitudes')
      setPending(pData.users || [])
      const active = (uData.users || []).filter(
        (u) => u.estado === 'ACTIVA' && (u.tipo === 'ALUMNA' || u.tipo === 'PROFESORA')
      )
      setUsers(active)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const approve = async (u) => {
    const tipo = roleChoice[u.id] || 'ALUMNA'
    setBusyId(u.id)
    setError('')
    try {
      const res = await fetch(`/api/users/${u.id}/approve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tipo }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || data.error || 'No se pudo aprobar')
      await load()
    } catch (e) {
      setError(e.message)
    } finally {
      setBusyId(null)
    }
  }

  const reject = async (u) => {
    if (!window.confirm(`¿Rechazar la solicitud del número ${u.telefono}?`)) return
    setBusyId(u.id)
    setError('')
    try {
      const res = await fetch(`/api/users/${u.id}/reject`, { method: 'POST' })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || data.error || 'No se pudo rechazar')
      await load()
    } catch (e) {
      setError(e.message)
    } finally {
      setBusyId(null)
    }
  }

  const sendCode = async (u) => {
    setBusyId(u.id)
    setError('')
    try {
      const res = await fetch(`/api/users/${u.id}/send-code`, { method: 'POST' })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || data.error || 'No se pudo generar el código')
      setLastSent({ phone: u.telefono, code: data.code })
      if (data.waLink) window.open(data.waLink, '_blank')
    } catch (e) {
      setError(e.message)
    } finally {
      setBusyId(null)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12 text-gray-500">
        <Loader className="w-6 h-6 animate-spin mr-2" /> Cargando...
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <UserPlus className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-bold text-gray-900">Usuarios y solicitudes</h2>
        </div>
        <button
          onClick={load}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <RefreshCw className="w-4 h-4" /> Actualizar
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-danger font-medium">
          {error}
        </div>
      )}

      {lastSent && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-800">
            Código para <span className="font-semibold">{lastSent.phone}</span>:{' '}
            <span className="font-mono font-bold text-lg tracking-widest">{lastSent.code}</span>
          </p>
          <p className="text-xs text-green-700 mt-1">
            Se abrió WhatsApp con el mensaje listo para enviar. Si no se abrió, copiá el código y
            mandáselo vos.
          </p>
        </div>
      )}

      {/* Pending requests */}
      <section>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
          Solicitudes pendientes {pending.length > 0 && `(${pending.length})`}
        </h3>
        {pending.length === 0 ? (
          <p className="text-gray-500 text-sm">No hay solicitudes nuevas.</p>
        ) : (
          <div className="space-y-3">
            {pending.map((u) => (
              <div
                key={u.id}
                className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between"
              >
                <div>
                  <p className="font-bold text-gray-900">{u.telefono}</p>
                  <p className="text-xs text-gray-400">
                    Solicitó el {new Date(u.fecha_registro).toLocaleString('es-AR')}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <select
                    value={roleChoice[u.id] || 'ALUMNA'}
                    onChange={(e) => setRoleChoice({ ...roleChoice, [u.id]: e.target.value })}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="ALUMNA">Alumna</option>
                    <option value="PROFESORA">Profesora</option>
                  </select>
                  <button
                    onClick={() => approve(u)}
                    disabled={busyId === u.id}
                    className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-50"
                  >
                    <Check className="w-4 h-4" /> Aprobar
                  </button>
                  <button
                    onClick={() => reject(u)}
                    disabled={busyId === u.id}
                    className="flex items-center gap-1 px-3 py-2 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 disabled:opacity-50"
                  >
                    <X className="w-4 h-4" /> Rechazar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Active users */}
      <section>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
          Usuarios activos ({users.length})
        </h3>
        {users.length === 0 ? (
          <p className="text-gray-500 text-sm">Todavía no hay usuarios aprobados.</p>
        ) : (
          <div className="overflow-x-auto bg-white rounded-xl shadow">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-100">
                  <th className="px-4 py-3 font-medium">Nombre</th>
                  <th className="px-4 py-3 font-medium">Teléfono</th>
                  <th className="px-4 py-3 font-medium">Rol</th>
                  <th className="px-4 py-3 font-medium text-right">Acceso</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {u.nombre === u.telefono ? '—' : u.nombre}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{u.telefono}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                          u.tipo === 'PROFESORA'
                            ? 'bg-purple-100 text-purple-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {ROLE_LABEL[u.tipo] || u.tipo}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => sendCode(u)}
                        disabled={busyId === u.id}
                        className="inline-flex items-center gap-1 px-3 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark disabled:opacity-50"
                      >
                        {busyId === u.id ? (
                          <Loader className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            <MessageCircle className="w-4 h-4" /> Enviar código
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  )
}
