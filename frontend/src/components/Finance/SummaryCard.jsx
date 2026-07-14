import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react'

export default function SummaryCard({ mes, ingresos, gastos, balance }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
    }).format(value || 0)
  }

  const cards = [
    {
      id: 'ingresos',
      title: 'INGRESOS',
      value: ingresos,
      icon: TrendingUp,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-700',
      iconColor: 'text-green-600',
      subtext: `Mes: ${mes}`,
    },
    {
      id: 'gastos',
      title: 'GASTOS',
      value: gastos,
      icon: TrendingDown,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-700',
      iconColor: 'text-red-600',
      subtext: `Mes: ${mes}`,
    },
    {
      id: 'balance',
      title: 'BALANCE',
      value: balance,
      icon: DollarSign,
      bgColor: balance >= 0 ? 'bg-blue-50' : 'bg-orange-50',
      borderColor: balance >= 0 ? 'border-blue-200' : 'border-orange-200',
      textColor: balance >= 0 ? 'text-blue-700' : 'text-orange-700',
      iconColor: balance >= 0 ? 'text-blue-600' : 'text-orange-600',
      subtext: balance >= 0 ? 'Superávit' : 'Déficit',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card) => {
        const Icon = card.icon
        return (
          <div
            key={card.id}
            className={`${card.bgColor} border ${card.borderColor} rounded-lg p-6 transition-transform hover:scale-105`}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                {card.title}
              </h3>
              <Icon className={`w-6 h-6 ${card.iconColor} opacity-60`} />
            </div>

            <p className={`text-3xl font-bold ${card.textColor} mb-2`}>
              {formatCurrency(card.value)}
            </p>

            <p className="text-xs text-gray-500">
              {card.subtext}
            </p>
          </div>
        )
      })}
    </div>
  )
}
