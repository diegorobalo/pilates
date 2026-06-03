import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import Chart from 'react-apexcharts'
import { Ticket } from '../hooks/useTicketData'

interface AnalyticsProps {
  tickets: Ticket[]
  isLoading: boolean
}

export default function Analytics({ tickets, isLoading }: AnalyticsProps) {
  // Calculate analysis data
  const analysis = useMemo(() => {
    const byTema = {} as Record<string, number>
    const byClient = {} as Record<string, number>
    const byAgent = {} as Record<string, number>
    const byPrioridad = {} as Record<string, number>
    const byProducto = {} as Record<string, number>
    const byClienteReclamante = {} as Record<string, number>
    let totalToneladas = 0

    tickets.forEach(ticket => {
      byTema[ticket.tema] = (byTema[ticket.tema] || 0) + 1
      byClient[ticket.cliente] = (byClient[ticket.cliente] || 0) + 1
      if (ticket.agente) byAgent[ticket.agente] = (byAgent[ticket.agente] || 0) + 1
      byPrioridad[ticket.prioridad] = (byPrioridad[ticket.prioridad] || 0) + 1

      // New custom field analysis
      if (ticket.producto) {
        byProducto[ticket.producto] = (byProducto[ticket.producto] || 0) + 1
      }
      if (ticket.clienteReclamante) {
        byClienteReclamante[ticket.clienteReclamante] = (byClienteReclamante[ticket.clienteReclamante] || 0) + 1
      }
      if (ticket.toneladas) {
        totalToneladas += ticket.toneladas
      }
    })

    return { byTema, byClient, byAgent, byPrioridad, byProducto, byClienteReclamante, totalToneladas }
  }, [tickets])

  // Top causes chart
  const topCausesData = Object.entries(analysis.byTema)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)

  const causesChart = {
    series: [
      {
        name: 'Cantidad',
        data: topCausesData.map(d => d[1])
      }
    ],
    categories: topCausesData.map(d => d[0].substring(0, 20))
  }

  // Priority distribution
  const priorityChart = {
    series: Object.values(analysis.byPrioridad),
    labels: Object.keys(analysis.byPrioridad),
    colors: ['#dc2626', '#f97316', '#16a34a']
  }

  // Agent performance
  const agentPerf = Object.entries(analysis.byAgent)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)

  const agentChart = {
    series: [
      {
        name: 'Reclamos Asignados',
        data: agentPerf.map(d => d[1])
      }
    ],
    categories: agentPerf.map(d => d[0].substring(0, 15))
  }

  // Time to resolve analysis
  const avgDaysOpen = tickets.length > 0
    ? Math.round(
        tickets.reduce((acc, t) => acc + t.diasDesdeCreacion, 0) / tickets.length
      )
    : 0

  const overduePercentage = tickets.length > 0
    ? Math.round(
        (tickets.filter(t => t.atrasado).length / tickets.length) * 100
      )
    : 0

  // Product analysis
  const topProductos = Object.entries(analysis.byProducto)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)

  const productoChart = {
    series: [
      {
        name: 'Reclamos',
        data: topProductos.map(d => d[1])
      }
    ],
    categories: topProductos.map(d => d[0].substring(0, 15))
  }

  // Cliente reclamante analysis
  const topClientesReclamantes = Object.entries(analysis.byClienteReclamante)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)

  const clienteReclamanteChart = {
    series: topClientesReclamantes.map(d => d[1]),
    labels: topClientesReclamantes.map(d => d[0])
  }

  if (isLoading) {
    return (
      <div className="p-8 text-center">
        <div className="inline-block w-8 h-8 border-4 border-primary-300 border-t-primary-700 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Generando análisis...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-display">
          Análisis y Reportes
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Análisis detallado de reclamos y performance
        </p>
      </motion.div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-6"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
            Días Promedio Abierto
          </p>
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">
            {avgDaysOpen}d
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Desde creación del ticket
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card p-6"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
            Tasa de Atraso
          </p>
          <h3 className="text-4xl font-bold text-danger mt-2">
            {overduePercentage}%
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Tickets fuera de SLA
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card p-6"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
            Respuesta Pendiente
          </p>
          <h3 className="text-4xl font-bold text-warning mt-2">
            {tickets.filter(t => !t.respondio).length}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Reclamos sin respuesta
          </p>
        </motion.div>

        {analysis.totalToneladas > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card p-6"
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              Total Toneladas en Reclamo
            </p>
            <h3 className="text-4xl font-bold text-primary-600 mt-2">
              {analysis.totalToneladas.toFixed(1)}t
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Volumen total reclamado
            </p>
          </motion.div>
        )}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Causes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card p-6"
        >
          <h3 className="section-title mb-4">Causas Más Frecuentes</h3>
          <Chart
            options={{
              chart: { type: 'bar' },
              colors: ['#3b82f6'],
              xaxis: { categories: causesChart.categories },
              plotOptions: {
                bar: {
                  borderRadius: 4,
                  columnWidth: '70%'
                }
              }
            }}
            series={causesChart.series}
            type="bar"
            height={300}
          />
        </motion.div>

        {/* Priority Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card p-6"
        >
          <h3 className="section-title mb-4">Distribución por Prioridad</h3>
          <Chart
            options={{
              chart: { type: 'pie' },
              colors: priorityChart.colors,
              labels: priorityChart.labels,
              legend: { position: 'bottom' },
              plotOptions: {
                pie: {
                  donut: {
                    size: '70%'
                  }
                }
              }
            }}
            series={priorityChart.series}
            type="donut"
            height={300}
          />
        </motion.div>

        {/* Agent Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card p-6 lg:col-span-2"
        >
          <h3 className="section-title mb-4">Performance de Agentes</h3>
          <Chart
            options={{
              chart: { type: 'bar' },
              colors: ['#10b981'],
              xaxis: { categories: agentChart.categories },
              plotOptions: {
                bar: {
                  borderRadius: 4,
                  columnWidth: '60%'
                }
              }
            }}
            series={agentChart.series}
            type="bar"
            height={350}
          />
        </motion.div>

        {topProductos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="card p-6"
          >
            <h3 className="section-title mb-4">Productos Más Reclamados</h3>
            <Chart
              options={{
                chart: { type: 'bar' },
                colors: ['#8b5cf6'],
                xaxis: { categories: productoChart.categories },
                plotOptions: {
                  bar: {
                    borderRadius: 4,
                    columnWidth: '70%'
                  }
                }
              }}
              series={productoChart.series}
              type="bar"
              height={300}
            />
          </motion.div>
        )}

        {topClientesReclamantes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="card p-6"
          >
            <h3 className="section-title mb-4">Clientes Reclamantes</h3>
            <Chart
              options={{
                chart: { type: 'pie' },
                colors: ['#f59e0b', '#ec4899', '#6366f1', '#14b8a6', '#f97316', '#06b6d4'],
                labels: clienteReclamanteChart.labels,
                legend: { position: 'bottom' },
                plotOptions: {
                  pie: {
                    donut: {
                      size: '70%'
                    }
                  }
                }
              }}
              series={clienteReclamanteChart.series}
              type="donut"
              height={300}
            />
          </motion.div>
        )}
      </div>

      {/* Detailed Table - Cause by Client Matrix */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="card p-6"
      >
        <h3 className="section-title mb-4">Top Clientes por Causas</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                  Cliente
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                  Causa Principal
                </th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700 dark:text-gray-300">
                  Total
                </th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700 dark:text-gray-300">
                  Atrasados
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(analysis.byClient)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 10)
                .map(([client, count], idx) => {
                  const clientTickets = tickets.filter(t => t.cliente === client)
                  const mainCause = Object.entries(
                    clientTickets.reduce((acc, t) => {
                      acc[t.tema] = (acc[t.tema] || 0) + 1
                      return acc
                    }, {} as Record<string, number>)
                  ).sort((a, b) => b[1] - a[1])[0]

                  const overdue = clientTickets.filter(t => t.atrasado).length

                  return (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                        {client}
                      </td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                        {mainCause?.[0] || '—'}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="badge badge-primary">{count}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        {overdue > 0 ? (
                          <span className="badge badge-danger">{overdue}</span>
                        ) : (
                          <span className="text-gray-500">—</span>
                        )}
                      </td>
                    </motion.tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
