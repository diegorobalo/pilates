import { useState, useEffect } from 'react'
import { BarChart3, Calendar, CheckCircle, TrendingUp, AlertCircle, CreditCard } from 'lucide-react'

export default function AlumnaStats() {
  const [stats, setStats] = useState({
    total_attended: 0,
    total_confirmed: 0,
    upcoming_classes: [],
    active_subscriptions: 0,
    payment_status: 'PENDIENTE'
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    setLoading(true)
    setError('')
    try {
      const [attendanceRes, reservasRes, subsRes, paymentRes] = await Promise.all([
        fetch('/api/attendance/alumna/mine'),
        fetch('/api/reservations/mine?status=CONFIRMADA'),
        fetch('/api/subscriptions/mine'),
        fetch('/api/payments/alumna/me')
      ])

      let attended = 0
      let confirmed = 0
      let upcoming = []
      let active = 0
      let paymentStatus = 'PENDIENTE'

      if (attendanceRes.ok) {
        const data = await attendanceRes.json()
        const records = Array.isArray(data) ? data : data.attendance || []
        attended = records.filter(r => r.presente === 1).length
      }

      if (reservasRes.ok) {
        const data = await reservasRes.json()
        const reservas = Array.isArray(data) ? data : data.reservaciones || []
        confirmed = reservas.length
        upcoming = reservas
          .filter(r => new Date(r.horario?.fecha || r.fecha) >= new Date())
          .slice(0, 5)
      }

      if (subsRes.ok) {
        const data = await subsRes.json()
        const subs = Array.isArray(data) ? data : data.suscripciones || []
        active = subs.filter(s => s.activa).length
      }

      if (paymentRes.ok) {
        const data = await paymentRes.json()
        const payments = Array.isArray(data) ? data : data.payments || []
        const currentMonth = new Date().toLocaleDateString('en-CA').slice(0, 7)
        if (payments.some(p => p.mes_referencia === currentMonth)) {
          paymentStatus = 'AL_DIA'
        }
      }

      setStats({
        total_attended: attended,
        total_confirmed: confirmed,
        upcoming_classes: upcoming,
        active_subscriptions: active,
        payment_status: paymentStatus
      })
    } catch (e) {
      setError('Error loading statistics')
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="text-center py-8">Cargando estadísticas...</div>
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Classes Attended */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-green-700 font-medium">Clases Asistidas</p>
              <p className="text-3xl font-bold text-green-900 mt-2">{stats.total_attended}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600 opacity-20" />
          </div>
        </div>

        {/* Confirmed Classes */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-blue-700 font-medium">Clases Confirmadas</p>
              <p className="text-3xl font-bold text-blue-900 mt-2">{stats.total_confirmed}</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-600 opacity-20" />
          </div>
        </div>

        {/* Active Subscriptions */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-purple-700 font-medium">Suscripciones</p>
              <p className="text-3xl font-bold text-purple-900 mt-2">{stats.active_subscriptions}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-600 opacity-20" />
          </div>
        </div>

        {/* Attendance Rate */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-orange-700 font-medium">Tasa de Asistencia</p>
              <p className="text-3xl font-bold text-orange-900 mt-2">
                {stats.total_confirmed > 0
                  ? Math.round((stats.total_attended / stats.total_confirmed) * 100)
                  : 0}%
              </p>
            </div>
            <BarChart3 className="w-8 h-8 text-orange-600 opacity-20" />
          </div>
        </div>

        {/* Payment Status */}
        <div className={`bg-gradient-to-br border rounded-lg p-4 ${
          stats.payment_status === 'AL_DIA'
            ? 'from-emerald-50 to-emerald-100 border-emerald-200'
            : 'from-yellow-50 to-yellow-100 border-yellow-200'
        }`}>
          <div className="flex items-start justify-between">
            <div>
              <p className={`text-sm font-medium ${
                stats.payment_status === 'AL_DIA'
                  ? 'text-emerald-700'
                  : 'text-yellow-700'
              }`}>Estado de Pago</p>
              <p className={`text-3xl font-bold mt-2 ${
                stats.payment_status === 'AL_DIA'
                  ? 'text-emerald-900'
                  : 'text-yellow-900'
              }`}>{stats.payment_status === 'AL_DIA' ? '✅' : '⏳'}</p>
              <p className={`text-xs mt-1 ${
                stats.payment_status === 'AL_DIA'
                  ? 'text-emerald-600'
                  : 'text-yellow-600'
              }`}>{stats.payment_status === 'AL_DIA' ? 'Al día' : 'Pendiente'}</p>
            </div>
            <CreditCard className={`w-8 h-8 opacity-20 ${
              stats.payment_status === 'AL_DIA'
                ? 'text-emerald-600'
                : 'text-yellow-600'
            }`} />
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Upcoming Classes */}
      {stats.upcoming_classes.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Próximas Clases</h3>
          <div className="space-y-3">
            {stats.upcoming_classes.map((clase) => {
              const fecha = clase.horario?.fecha || clase.fecha
              const hora = clase.horario?.hora || clase.hora
              const fechaObj = new Date(fecha)
              const fechaStr = fechaObj.toLocaleDateString('es-AR')

              return (
                <div
                  key={clase.id}
                  className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-gray-900">{fechaStr}</p>
                    <p className="text-sm text-gray-600">{hora}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      Confirmada
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
