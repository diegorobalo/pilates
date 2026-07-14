import { useState, useEffect } from "react"
import { Calendar } from "lucide-react"
import SummaryCard from "../components/Finance/SummaryCard"
import PaymentStatusTable from "../components/Finance/PaymentStatusTable"
import ExpenseBreakdown from "../components/Finance/ExpenseBreakdown"
import TransactionModal from "../components/Finance/TransactionModal"

export default function FinancePage() {
  const [mes, setMes] = useState(() => {
    return new Date().toISOString().slice(0, 7)
  })
  const [summary, setSummary] = useState({
    ingresos: 0,
    gastos: 0,
    balance: 0,
  })
  const [loading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState("INGRESO")

  // Fetch summary data
  const fetchSummary = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/finances/resumen?mes_referencia=${mes}`)
      if (!response.ok) throw new Error("Error fetching summary")
      const data = await response.json()
      setSummary({
        ingresos: data.ingresos || 0,
        gastos: data.gastos || 0,
        balance: (data.ingresos || 0) - (data.gastos || 0),
      })
    } catch (err) {
      console.error("Error fetching summary:", err)
      setSummary({
        ingresos: 0,
        gastos: 0,
        balance: 0,
      })
    } finally {
      setLoading(false)
    }
  }

  // Fetch summary when month changes
  useEffect(() => {
    fetchSummary()
  }, [mes])

  // Handle month navigation
  const handleMonthChange = (direction) => {
    const [year, month] = mes.split("-").map(Number)
    let newYear = year
    let newMonth = month + direction

    if (newMonth > 12) {
      newMonth = 1
      newYear++
    } else if (newMonth < 1) {
      newMonth = 12
      newYear--
    }

    const newMes = `${newYear}-${String(newMonth).padStart(2, "0")}`
    setMes(newMes)
  }

  // Open modal with transaction type
  const openModal = (tipo) => {
    setModalType(tipo)
    setModalOpen(true)
  }

  // Handle successful transaction
  const onSuccess = () => {
    fetchSummary()
  }

  // Format month for display (Spanish Argentina locale)
  const getFormattedMonth = () => {
    const [year, month] = mes.split("-")
    const date = new Date(year, parseInt(month) - 1)
    return date.toLocaleDateString("es-AR", {
      month: "long",
      year: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Gestión Financiera
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-1">
              Seguimiento de ingresos, gastos y pagos
            </p>
          </div>

          {/* Month Selector */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleMonthChange(-1)}
                className="px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium text-sm sm:text-base"
              >
                ← Anterior
              </button>

              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg min-w-fit">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                <span className="text-gray-900 font-medium capitalize text-sm sm:text-base">
                  {getFormattedMonth()}
                </span>
              </div>

              <button
                onClick={() => handleMonthChange(1)}
                className="px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium text-sm sm:text-base"
              >
                Siguiente →
              </button>
            </div>

            {/* Register Transaction Button */}
            <button
              onClick={() => openModal("INGRESO")}
              className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm sm:text-base"
            >
              Registrar Transacción
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="mb-8">
          <SummaryCard
            mes={mes}
            ingresos={summary.ingresos}
            gastos={summary.gastos}
            balance={summary.balance}
          />
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Status Table */}
          <div className="bg-white rounded-lg shadow">
            <PaymentStatusTable mes={mes} onAddPayment={openModal} />
          </div>

          {/* Expense Breakdown */}
          <div className="bg-white rounded-lg shadow">
            <ExpenseBreakdown mes={mes} />
          </div>
        </div>
      </main>

      {/* Transaction Modal */}
      <TransactionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={onSuccess}
        tipo={modalType}
      />
    </div>
  )
}
