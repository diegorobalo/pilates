import { useState, useEffect, useCallback } from 'react'
import { DollarSign, Plus, Loader, RefreshCw, Trash2 } from 'lucide-react'

const CATEGORIES = {
  'MANTENIMIENTO': 'Mantenimiento',
  'SUPPLIES': 'Supplies',
  'SERVICIOS': 'Servicios',
  'OTRO': 'Otro'
}

export default function FinancesManagement() {
  const [activeTab, setActiveTab] = useState('summary')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [summary, setSummary] = useState(null)
  const [studentPayments, setStudentPayments] = useState([])
  const [teacherPayments, setTeacherPayments] = useState([])
  const [expenses, setExpenses] = useState([])
  const [alumnos, setAlumnos] = useState([])
  const [profesoras, setProfesoras] = useState([])

  const [showStudentPaymentForm, setShowStudentPaymentForm] = useState(false)
  const [showTeacherPaymentForm, setShowTeacherPaymentForm] = useState(false)
  const [showExpenseForm, setShowExpenseForm] = useState(false)

  const [studentPaymentForm, setStudentPaymentForm] = useState({
    alumna_id: '', monto: '', fecha_pago: new Date().toISOString().split('T')[0],
    mes_referencia: new Date().toISOString().slice(0, 7), metodo: 'EFECTIVO', notas: ''
  })

  const [teacherPaymentForm, setTeacherPaymentForm] = useState({
    profesora_id: '', monto: '', fecha_pago: new Date().toISOString().split('T')[0],
    mes_referencia: new Date().toISOString().slice(0, 7), metodo: 'EFECTIVO', notas: ''
  })

  const [expenseForm, setExpenseForm] = useState({
    descripcion: '', monto: '', categoria: 'OTRO', fecha_gasto: new Date().toISOString().split('T')[0], notas: ''
  })

  const loadSummary = useCallback(async () => {
    try {
      const res = await fetch('/api/finances/summary')
      const data = await res.json()
      if (res.ok) setSummary(data.summary)
    } catch (e) {
      setError(e.message)
    }
  }, [])

  const loadStudentPayments = useCallback(async () => {
    try {
      const res = await fetch('/api/finances/payments/student')
      const data = await res.json()
      if (res.ok) setStudentPayments(Array.isArray(data.payments) ? data.payments : [])
    } catch (e) {
      setError(e.message)
    }
  }, [])

  const loadTeacherPayments = useCallback(async () => {
    try {
      const res = await fetch('/api/finances/payments/teacher')
      const data = await res.json()
      if (res.ok) setTeacherPayments(Array.isArray(data.payments) ? data.payments : [])
    } catch (e) {
      setError(e.message)
    }
  }, [])

  const loadExpenses = useCallback(async () => {
    try {
      const res = await fetch('/api/finances/expenses')
      const data = await res.json()
      if (res.ok) setExpenses(Array.isArray(data.expenses) ? data.expenses : [])
    } catch (e) {
      setError(e.message)
    }
  }, [])

  const loadUsers = useCallback(async () => {
    try {
      const res = await fetch('/api/users')
      const data = await res.json()
      if (res.ok) {
        const users = Array.isArray(data.users) ? data.users : []
        setAlumnos(users.filter(u => u.tipo === 'ALUMNA'))
        setProfesoras(users.filter(u => u.tipo === 'PROFESORA'))
      }
    } catch (e) {
      setError(e.message)
    }
  }, [])

  useEffect(() => {
    setLoading(true)
    Promise.all([loadSummary(), loadUsers(), loadStudentPayments(), loadTeacherPayments(), loadExpenses()]).finally(() => setLoading(false))
  }, [loadSummary, loadUsers, loadStudentPayments, loadTeacherPayments, loadExpenses])

  const addStudentPayment = async (e) => {
    e.preventDefault()
    if (!studentPaymentForm.alumna_id || !studentPaymentForm.monto) {
      setError('Completa alumna e monto')
      return
    }
    try {
      const res = await fetch('/api/finances/payments/student', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentPaymentForm)
      })
      if (res.ok) {
        setShowStudentPaymentForm(false)
        setStudentPaymentForm({ alumna_id: '', monto: '', fecha_pago: new Date().toISOString().split('T')[0], mes_referencia: new Date().toISOString().slice(0, 7), metodo: 'EFECTIVO', notas: '' })
        await loadStudentPayments()
        await loadSummary()
      } else {
        const data = await res.json()
        setError(data.message || 'Error')
      }
    } catch (e) {
      setError(e.message)
    }
  }

  const addTeacherPayment = async (e) => {
    e.preventDefault()
    if (!teacherPaymentForm.profesora_id || !teacherPaymentForm.monto) {
      setError('Completa profesora e monto')
      return
    }
    try {
      const res = await fetch('/api/finances/payments/teacher', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(teacherPaymentForm)
      })
      if (res.ok) {
        setShowTeacherPaymentForm(false)
        setTeacherPaymentForm({ profesora_id: '', monto: '', fecha_pago: new Date().toISOString().split('T')[0], mes_referencia: new Date().toISOString().slice(0, 7), metodo: 'EFECTIVO', notas: '' })
        await loadTeacherPayments()
        await loadSummary()
      } else {
        const data = await res.json()
        setError(data.message || 'Error')
      }
    } catch (e) {
      setError(e.message)
    }
  }

  const addExpense = async (e) => {
    e.preventDefault()
    if (!expenseForm.descripcion || !expenseForm.monto) {
      setError('Completa descripción y monto')
      return
    }
    try {
      const res = await fetch('/api/finances/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(expenseForm)
      })
      if (res.ok) {
        setShowExpenseForm(false)
        setExpenseForm({ descripcion: '', monto: '', categoria: 'OTRO', fecha_gasto: new Date().toISOString().split('T')[0], notas: '' })
        await loadExpenses()
        await loadSummary()
      } else {
        const data = await res.json()
        setError(data.message || 'Error')
      }
    } catch (e) {
      setError(e.message)
    }
  }

  const deleteExpense = async (id) => {
    if (!window.confirm('¿Eliminar este gasto?')) return
    try {
      const res = await fetch(`/api/finances/expenses/${id}`, { method: 'DELETE' })
      if (res.ok) {
        await loadExpenses()
        await loadSummary()
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
        <div className="flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-bold">Finanzas (ARS)</h2>
        </div>
        <button onClick={() => { loadSummary(); loadStudentPayments(); loadTeacherPayments(); loadExpenses() }} className="flex items-center gap-2 text-sm text-gray-600">
          <RefreshCw className="w-4 h-4" /> Actualizar
        </button>
      </div>

      {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}

      <div className="flex gap-2 border-b border-gray-200">
        {['summary', 'students', 'teachers', 'expenses'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 font-medium text-sm border-b-2 ${activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-gray-600'}`}>
            {tab === 'summary' && 'Resumen'} {tab === 'students' && 'Alumnos'} {tab === 'teachers' && 'Profesoras'} {tab === 'expenses' && 'Gastos'}
          </button>
        ))}
      </div>

      {activeTab === 'summary' && summary && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
            <p className="text-sm text-green-700 font-medium">Ingresos (Alumnos)</p>
            <p className="text-3xl font-bold text-green-900">$ {summary.totalIncome.toFixed(2)}</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 border border-red-200">
            <p className="text-sm text-red-700 font-medium">Egresos</p>
            <p className="text-3xl font-bold text-red-900">$ {summary.totalExpense.toFixed(2)}</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
            <p className="text-sm text-blue-700 font-medium">Profesoras</p>
            <p className="text-2xl font-bold text-blue-900">$ {summary.totalTeacherExpense.toFixed(2)}</p>
          </div>
          <div className={`bg-gradient-to-br ${summary.balance >= 0 ? 'from-emerald-50 to-emerald-100' : 'from-orange-50 to-orange-100'} rounded-lg p-6 border ${summary.balance >= 0 ? 'border-emerald-200' : 'border-orange-200'}`}>
            <p className={`text-sm font-medium ${summary.balance >= 0 ? 'text-emerald-700' : 'text-orange-700'}`}>Balance</p>
            <p className={`text-3xl font-bold ${summary.balance >= 0 ? 'text-emerald-900' : 'text-orange-900'}`}>$ {summary.balance.toFixed(2)}</p>
          </div>
        </div>
      )}

      {activeTab === 'students' && (
        <div className="space-y-4">
          <button onClick={() => setShowStudentPaymentForm(!showStudentPaymentForm)} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">
            <Plus className="w-4 h-4" /> Registrar Pago
          </button>
          {showStudentPaymentForm && (
            <form onSubmit={addStudentPayment} className="bg-white p-4 rounded-lg border space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <select value={studentPaymentForm.alumna_id} onChange={e => setStudentPaymentForm({...studentPaymentForm, alumna_id: e.target.value})} className="px-3 py-2 border rounded-lg text-sm">
                  <option value="">Selecciona alumna</option>
                  {alumnos.map(a => <option key={a.id} value={a.id}>{a.nombre} {a.apellido}</option>)}
                </select>
                <input type="number" step="0.01" placeholder="Monto (ARS)" value={studentPaymentForm.monto} onChange={e => setStudentPaymentForm({...studentPaymentForm, monto: e.target.value})} className="px-3 py-2 border rounded-lg text-sm" />
              </div>
              <div className="flex gap-2">
                <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">Registrar</button>
                <button type="button" onClick={() => setShowStudentPaymentForm(false)} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium">Cancelar</button>
              </div>
            </form>
          )}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Alumna</th>
                  <th className="px-4 py-3 text-right font-semibold">Monto</th>
                  <th className="px-4 py-3 text-left font-semibold">Mes</th>
                  <th className="px-4 py-3 text-left font-semibold">Fecha</th>
                  <th className="px-4 py-3 text-left font-semibold">Método</th>
                </tr>
              </thead>
              <tbody>
                {studentPayments.map(p => (
                  <tr key={p.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{p.nombre || 'Sin nombre'}</td>
                    <td className="px-4 py-3 text-right font-semibold">$ {parseFloat(p.monto).toFixed(2)}</td>
                    <td className="px-4 py-3">{p.mes_referencia}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{new Date(p.fecha_pago).toLocaleDateString('es-AR')}</td>
                    <td className="px-4 py-3">{p.metodo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'teachers' && (
        <div className="space-y-4">
          <button onClick={() => setShowTeacherPaymentForm(!showTeacherPaymentForm)} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">
            <Plus className="w-4 h-4" /> Registrar Pago
          </button>
          {showTeacherPaymentForm && (
            <form onSubmit={addTeacherPayment} className="bg-white p-4 rounded-lg border space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <select value={teacherPaymentForm.profesora_id} onChange={e => setTeacherPaymentForm({...teacherPaymentForm, profesora_id: e.target.value})} className="px-3 py-2 border rounded-lg text-sm">
                  <option value="">Selecciona profesora</option>
                  {profesoras.map(p => <option key={p.id} value={p.id}>{p.nombre} {p.apellido}</option>)}
                </select>
                <input type="number" step="0.01" placeholder="Monto (ARS)" value={teacherPaymentForm.monto} onChange={e => setTeacherPaymentForm({...teacherPaymentForm, monto: e.target.value})} className="px-3 py-2 border rounded-lg text-sm" />
              </div>
              <div className="flex gap-2">
                <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">Registrar</button>
                <button type="button" onClick={() => setShowTeacherPaymentForm(false)} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium">Cancelar</button>
              </div>
            </form>
          )}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Profesora</th>
                  <th className="px-4 py-3 text-right font-semibold">Monto</th>
                  <th className="px-4 py-3 text-left font-semibold">Mes</th>
                  <th className="px-4 py-3 text-left font-semibold">Método</th>
                </tr>
              </thead>
              <tbody>
                {teacherPayments.map(p => (
                  <tr key={p.id} className="border-b">
                    <td className="px-4 py-3">{p.nombre || 'Sin nombre'}</td>
                    <td className="px-4 py-3 text-right font-semibold">$ {parseFloat(p.monto).toFixed(2)}</td>
                    <td className="px-4 py-3">{p.mes_referencia}</td>
                    <td className="px-4 py-3">{p.metodo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'expenses' && (
        <div className="space-y-4">
          <button onClick={() => setShowExpenseForm(!showExpenseForm)} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">
            <Plus className="w-4 h-4" /> Agregar Gasto
          </button>
          {showExpenseForm && (
            <form onSubmit={addExpense} className="bg-white p-4 rounded-lg border space-y-3">
              <input type="text" placeholder="Descripción" value={expenseForm.descripcion} onChange={e => setExpenseForm({...expenseForm, descripcion: e.target.value})} className="w-full px-3 py-2 border rounded-lg text-sm" />
              <div className="grid grid-cols-2 gap-3">
                <input type="number" step="0.01" placeholder="Monto (ARS)" value={expenseForm.monto} onChange={e => setExpenseForm({...expenseForm, monto: e.target.value})} className="px-3 py-2 border rounded-lg text-sm" />
                <select value={expenseForm.categoria} onChange={e => setExpenseForm({...expenseForm, categoria: e.target.value})} className="px-3 py-2 border rounded-lg text-sm">
                  {Object.entries(CATEGORIES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                </select>
              </div>
              <input type="date" value={expenseForm.fecha_gasto} onChange={e => setExpenseForm({...expenseForm, fecha_gasto: e.target.value})} className="w-full px-3 py-2 border rounded-lg text-sm" />
              <div className="flex gap-2">
                <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">Agregar</button>
                <button type="button" onClick={() => setShowExpenseForm(false)} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium">Cancelar</button>
              </div>
            </form>
          )}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Descripción</th>
                  <th className="px-4 py-3 text-right font-semibold">Monto</th>
                  <th className="px-4 py-3 text-left font-semibold">Categoría</th>
                  <th className="px-4 py-3 text-left font-semibold">Fecha</th>
                  <th className="px-4 py-3 text-center font-semibold">Acción</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map(e => (
                  <tr key={e.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{e.descripcion}</td>
                    <td className="px-4 py-3 text-right font-semibold">$ {parseFloat(e.monto).toFixed(2)}</td>
                    <td className="px-4 py-3">{CATEGORIES[e.categoria]}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{new Date(e.fecha_gasto).toLocaleDateString('es-AR')}</td>
                    <td className="px-4 py-3 text-center"><button onClick={() => deleteExpense(e.id)} className="text-red-600 hover:text-red-700"><Trash2 className="w-4 h-4" /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
