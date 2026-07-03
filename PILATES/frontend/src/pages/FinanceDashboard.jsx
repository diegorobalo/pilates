import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  TrendingUp,
  Users,
  FileText,
  Clock,
  UserCheck,
} from 'lucide-react'
import FinanceSummary from '../components/Finance/FinanceSummary'
import StudentPayments from '../components/Finance/StudentPayments'
import InstructorPayments from '../components/Finance/InstructorPayments'
import PaymentHistory from '../components/Finance/PaymentHistory'
import Reports from '../components/Finance/Reports'

export default function FinanceDashboard() {
  const [activeTab, setActiveTab] = useState('resumen')
  const navigate = useNavigate()

  const tabs = [
    { id: 'resumen', label: 'Resumen', icon: TrendingUp },
    { id: 'alumnas', label: 'Cobrar a Alumnas', icon: Users },
    { id: 'instructoras', label: 'Pagar a Instructoras', icon: UserCheck },
    { id: 'pagos', label: 'Historial', icon: Clock },
    { id: 'reportes', label: 'Reportes', icon: FileText },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/instructor')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Volver al Dashboard"
              >
                <ArrowLeft className="w-6 h-6 text-gray-600" />
              </button>
              <h1 className="text-2xl font-bold text-gray-900">
                Dashboard Financiero
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8" role="tablist">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {activeTab === 'resumen' && <FinanceSummary />}
        {activeTab === 'alumnas' && <StudentPayments />}
        {activeTab === 'instructoras' && <InstructorPayments />}
        {activeTab === 'pagos' && <PaymentHistory />}
        {activeTab === 'reportes' && <Reports />}
      </main>
    </div>
  )
}
