import { useState, useEffect, useCallback } from 'react'
import { UserPlus, Check, X, Loader, RefreshCw, MessageCircle, Save, Trash2, RotateCcw } from 'lucide-react'

const ROLE_LABEL = {
  ALUMNA: 'Alumn@',
  PROFESORA: 'Profe',
  DUEÑA: 'Dueña',
  ADMIN: 'Admin',
}

export default function UserManagement() {
  const [pending, setPending] = useState([])
  const [users, setUsers] = useState([])
  const [allUsers, setAllUsers] = useState([]) // all users (active + inactive)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [roleChoice, setRoleChoice] = useState({}) // pending: id -> role
  const [nameDraft, setNameDraft] = useState({}) // id -> name (pending & active)
  const [busyId, setBusyId] = useState(null)
  const [lastSent, setLastSent] = useState(null) // { phone, code, nombre }
  const [showInactive, setShowInactive] = useState(false) // toggle to show inactive users

  const load = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const [pRes, uRes] = await Promise.all([
        fetch('/api/users/pending'),
        fetch('/api/users?includeInactive=true'),
      ])
      const pData = await pRes.json()
      const uData = await uRes.json()
      if (!pRes.ok) throw new Error(pData.message || pData.error || 'Error al cargar solicitudes')
      const pend = pData.users || []
      const all = (uData.users || []).filter((u) => u.tipo === 'ALUMNA' || u.tipo === 'PROFESORA')
      setAllUsers(all)
      const active = all.filter((u) => u.estado === 'ACTIVA')
      setPending(pend)
      setUsers(active)
      // Seed the name drafts: active users keep their real name (blank if it's the phone placeholder)
      const drafts = {}
      active.forEach((u) => { drafts[u.id] = u.nombre && u.nombre !== u.telefono ? u.nombre : '' })
      setNameDraft((prev) => ({ ...drafts, ...prevOnlyPending(prev, pend) }))
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  // keep any in-progress pending name drafts
  const prevOnlyPending = (prev, pend) => {
    const keep = {}
    pend.forEach((u) => { if (prev[u.id] !== undefined) keep[u.id] = prev[u.id] })
    return keep
  }

  useEffect(() => {
    load()
  }, [load])

  useEffect(() => {
    if (showInactive) {
      setUsers(allUsers)
    } else {
      setUsers(allUsers.filter((u) => u.estado === 'ACTIVA'))
    }
  }, [showInactive, allUsers])

  const approve = async (u) => {
    const tipo = roleChoice[u.id] || 'ALUMNA'
    const nombre = (nameDraft[u.id] || '').trim()
    if (!nombre) {
      setError('Poné un nombre para identificar a la persona antes de aprobar.')
      return
    }
    setBusyId(u.id)
    setError('')
    try {
      const res = await fetch(`/api/users/${u.id}/approve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tipo, nombre }),
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

  const saveName = async (u) => {
    const nombre = (nameDraft[u.id] || '').trim()
    if (!nombre) return
    setBusyId(u.id)
    setError('')
    try {
      const res = await fetch(`/api/users/${u.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || data.error || 'No se pudo guardar el nombre')
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
      setLastSent({ phone: u.telefono, code: data.code, nombre: u.nombre })
      if (data.waLink) window.open(data.waLink, '_blank')
    } catch (e) {
      setError(e.message)
    } finally {
      setBusyId(null)
    }
  }

  const deactivate = async (u) => {
    const label = ROLE_LABEL[u.tipo] || u.tipo
    const who = u.nombre && u.nombre !== u.telefono ? u.nombre : u.telefono
    if (!window.confirm(`¿Dar de baja a ${who} (${label})? Podrá volver a solicitar acceso más adelante.`)) return
    setBusyId(u.id)
    setError('')
    try {
      const res = await fetch(`/api/users/${u.id}`, { method: 'DELETE' })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || data.error || 'No se pudo dar de baja')
      await load()
    } catch (e) {
      setError(e.message)
    } finally {
      setBusyId(null)
    }
  }

  const reactivate = async (u) => {
    setBusyId(u.id)
    setError('')
    try {
      const res = await fetch(`/api/users/${u.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado: 'ACTIVA' }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || data.error || 'No se pudo reactivar')
      await load()
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
        <button onClick={load} className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
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
            Código para <span className="font-semibold">{lastSent.nombre || lastSent.phone}</span> ({lastSent.phone}):{' '}
            <span className="font-mono font-bold text-lg tracking-widest">{lastSent.code}</span>
          </p>
          <p className="text-xs text-green-700 mt-1">
            Se abrió WhatsApp con el mensaje listo para enviar. Si no se abrió, copiá el código y mandáselo vos.
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
              <div key={u.id} className="bg-white rounded-xl shadow p-4">
                <div className="flex items-baseline justify-between mb-3">
                  <p className="font-bold text-gray-900 text-lg">{u.telefono}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(u.fecha_registro).toLocaleString('es-AR')}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:items-end">
                  <div className="flex-1">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Nombre</label>
                    <input
                      type="text"
                      value={nameDraft[u.id] || ''}
                      onChange={(e) => setNameDraft({ ...nameDraft, [u.id]: e.target.value })}
                      placeholder="Nombre y apellido"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Rol</label>
                    <select
                      value={roleChoice[u.id] || 'ALUMNA'}
                      onChange={(e) => setRoleChoice({ ...roleChoice, [u.id]: e.target.value })}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="ALUMNA">Alumn@</option>
                      <option value="PROFESORA">Profe</option>
                    </select>
                  </div>
                  <button
                    onClick={() => approve(u)}
                    disabled={busyId === u.id}
                    className="flex items-center justify-center gap-1 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-50"
                  >
                    <Check className="w-4 h-4" /> Aprobar
                  </button>
                  <button
                    onClick={() => reject(u)}
                    disabled={busyId === u.id}
                    className="flex items-center justify-center gap-1 px-3 py-2 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 disabled:opacity-50"
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
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Usuarios {showInactive ? 'activos e inactivos' : 'activos'} ({users.length})
          </h3>
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={showInactive}
              onChange={(e) => setShowInactive(e.target.checked)}
              className="rounded"
            />
            Mostrar inactivos
          </label>
        </div>
        {users.length === 0 ? (
          <p className="text-gray-500 text-sm">Todavía no hay usuarios aprobados.</p>
        ) : (
          <div className="space-y-3">
            {users.map((u) => {
              const changed = (nameDraft[u.id] || '') !== (u.nombre && u.nombre !== u.telefono ? u.nombre : '')
              return (
                <div key={u.id} className="bg-white rounded-xl shadow p-4">
                  <div className="flex flex-col md:flex-row gap-3 md:items-end">
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-gray-500 mb-1">Nombre</label>
                      <input
                        type="text"
                        value={nameDraft[u.id] || ''}
                        onChange={(e) => setNameDraft({ ...nameDraft, [u.id]: e.target.value })}
                        placeholder="Sin nombre"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">{u.telefono}</span>
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                          u.tipo === 'PROFESORA' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {ROLE_LABEL[u.tipo] || u.tipo}
                      </span>
                      {u.estado === 'INACTIVA' && (
                        <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-200 text-gray-700">
                          Inactivo
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {changed && (
                        <button
                          onClick={() => saveName(u)}
                          disabled={busyId === u.id}
                          className="flex items-center gap-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 disabled:opacity-50"
                        >
                          <Save className="w-4 h-4" /> Guardar
                        </button>
                      )}
                      {u.estado === 'ACTIVA' ? (
                        <>
                          <button
                            onClick={() => sendCode(u)}
                            disabled={busyId === u.id}
                            className="flex items-center justify-center gap-1 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 disabled:opacity-50"
                          >
                            {busyId === u.id ? (
                              <Loader className="w-4 h-4 animate-spin" />
                            ) : (
                              <>
                                <MessageCircle className="w-4 h-4" /> Enviar código por WhatsApp
                              </>
                            )}
                          </button>
                          <button
                            onClick={() => deactivate(u)}
                            disabled={busyId === u.id}
                            title="Dar de baja"
                            className="flex items-center justify-center gap-1 px-3 py-2 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 disabled:opacity-50"
                          >
                            <Trash2 className="w-4 h-4" /> Baja
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => reactivate(u)}
                          disabled={busyId === u.id}
                          title="Reactivar"
                          className="flex items-center justify-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 disabled:opacity-50"
                        >
                          {busyId === u.id ? (
                            <Loader className="w-4 h-4 animate-spin" />
                          ) : (
                            <>
                              <RotateCcw className="w-4 h-4" /> Reactivar
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )
}
