import React from 'react'
import { motion } from 'framer-motion'
import Chart from 'react-apexcharts'
import { AlertCircle, CheckCircle, Clock, Inbox } from 'lucide-react'
import { Ticket } from '../hooks/useTicketData'

interface DashboardProps {
  tickets: Ticket[]
  isLoading: boolean
}

const KPICard = ({
  title,
  value,
  icon: Icon,
  color,
  percentage,
  delay
}: {
  title: string
  value: number
  icon: React.ReactNode
  color: string
  percentage?: string
  delay: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: delay * 0.1 }}
    className="card p-6 hover:shadow-lg transition-shadow"
  >
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{value}</h3>
        {percentage && (
          <p className={`text-xs mt-2 font-semibold ${color}`}>{percentage}</p>
        )}
      </div>
      <div className={`p-3 rounded-lg ${color.replace('text', 'bg')}`}>
        {Icon}
      </div>
    </div>
  </motion.div>
)

export default function Dashboard({ tickets, isLoading }: DashboardProps) {
  // Calculate metrics
  const totalTickets = tickets.length
  const openTickets = tickets.filter(t => t.estado === 'Open').length
  const overdueTickets = tickets.filter(t => t.atrasado).length
  const unresolvedTickets = tickets.filter(t => !t.respondio).length

  // Charts data
  const stateDistribution = {
    series: [openTickets, overdueTickets, totalTickets - openTickets - overdueTickets],
    labels: ['Abiertos', 'Atrasados', 'Resueltos'],
    colors: ['#3b82f6', '#dc2626', '#16a34a']
  }

  const topClients = Object.entries(
    tickets.reduce((acc: Record<string, number>, t) => {
      acc[t.cliente] = (acc[t.cliente] || 0) + 1
      return acc
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)

  const topAgents = Object.entries(
    tickets
      .filter(t => t.agente)
      .reduce((acc: Record<string, number>, t) => {
        acc[t.agente] = (acc[t.agente] || 0) + 1
        return acc
      }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)

  const topCauses = Object.entries(
    tickets.reduce((acc: Record<string, number>, t) => {
      acc[t.tema] = (acc[t.tema] || 0) + 1
      return acc
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-display">
          Dashboard Ejecutivo
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {new Date().toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Total Reclamos"
          value={totalTickets}
          icon={<Inbox className="w-6 h-6 text-blue-600" />}
          color="text-blue-600"
          percentage={`100% del período`}
          delay={0}
        />
        <KPICard
          title="Abiertos"
          value={openTickets}
          icon={<Clock className="w-6 h-6 text-yellow-600" />}
          color="text-yellow-600"
          percentage={`${Math.round((openTickets / totalTickets) * 100)}% pendiente`}
          delay={1}
        />
        <KPICard
          title="Atrasados"
          value={overdueTickets}
          icon={<AlertCircle className="w-6 h-6 text-red-600" />}
          color="text-red-600"
          percentage={`${Math.round((overdueTickets / totalTickets) * 100)}% SLA roto`}
          delay={2}
        />
        <KPICard
          title="Sin Respuesta"
          value={unresolvedTickets}
          icon={<CheckCircle className="w-6 h-6 text-gray-600" />}
          color="text-gray-600"
          percentage={`${Math.round((unresolvedTickets / totalTickets) * 100)}% pendiente`}
          delay={3}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* State Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card p-6"
        >
          <h3 className="section-title mb-4">Distribución por Estado</h3>
          <Chart
            options={{
              chart: { type: 'donut' },
              colors: stateDistribution.colors,
              plotOptions: {
                pie: {
                  donut: {
                    size: '65%'
                  }
                }
              },
              labels: stateDistribution.labels,
              legend: { position: 'bottom' }
            }}
            series={stateDistribution.series}
            type="donut"
            height={300}
          />
        </motion.div>

        {/* Top Clients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card p-6"
        >
          <h3 className="section-title mb-4">Top 5 Clientes</h3>
          <div className="space-y-3">
            {topClients.map(([name, count], idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300 truncate">
                  {name}
                </span>
                <span className="badge badge-primary">{count}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Causes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card p-6"
        >
          <h3 className="section-title mb-4">Top 5 Causas</h3>
          <div className="space-y-3">
            {topCauses.map(([cause, count], idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300 truncate">
                  {cause || 'Sin clasificar'}
                </span>
                <span className="badge badge-warning">{count}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Agents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="card p-6"
        >
          <h3 className="section-title mb-4">Performance de Agentes</h3>
          <div className="space-y-4">
            {topAgents.map(([agent, count], idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {agent.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {agent}
                  </span>
                </div>
                <span className="badge badge-success">{count}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="card p-6"
        >
          <h3 className="section-title mb-4">Actividad Reciente</h3>
          <div className="space-y-3">
            {tickets.slice(0, 5).map((ticket, idx) => (
              <div key={idx} className="flex items-start gap-3 pb-3 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    #{ticket.numeroTicket} - {ticket.cliente}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {ticket.asunto}
                  </p>
                </div>
                <span className={`badge ${
                  ticket.estado === 'Open'
                    ? 'badge-primary'
                    : ticket.atrasado
                    ? 'badge-danger'
                    : 'badge-success'
                }`}>
                  {ticket.estado}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
