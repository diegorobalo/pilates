import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Download, Filter, X } from 'lucide-react'
import { Ticket } from '../hooks/useTicketData'
import Papa from 'papaparse'

interface TicketsTableProps {
  tickets: Ticket[]
  isLoading: boolean
  onFileUpload: (file: File) => void
}

export default function TicketsTable({ tickets, isLoading, onFileUpload }: TicketsTableProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    estado: 'todos',
    cliente: 'todos',
    prioridad: 'todos',
    onlyOverdue: false,
    onlyUnresponded: false
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  // Unique values for filters
  const uniqueClientes = ['todos', ...new Set(tickets.map(t => t.cliente))]
  const uniqueEstados = ['todos', ...new Set(tickets.map(t => t.estado))]
  const uniquePrioridades = ['todos', ...new Set(tickets.map(t => t.prioridad))]

  // Filter tickets
  const filteredTickets = useMemo(() => {
    return tickets.filter(ticket => {
      const matchSearch =
        ticket.numeroTicket.includes(searchTerm) ||
        ticket.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.asunto.toLowerCase().includes(searchTerm.toLowerCase())

      const matchEstado = filters.estado === 'todos' || ticket.estado === filters.estado
      const matchCliente = filters.cliente === 'todos' || ticket.cliente === filters.cliente
      const matchPrioridad =
        filters.prioridad === 'todos' || ticket.prioridad === filters.prioridad
      const matchOverdue = !filters.onlyOverdue || ticket.atrasado
      const matchUnresponded = !filters.onlyUnresponded || !ticket.respondio

      return (
        matchSearch &&
        matchEstado &&
        matchCliente &&
        matchPrioridad &&
        matchOverdue &&
        matchUnresponded
      )
    })
  }, [tickets, searchTerm, filters])

  // Pagination
  const totalPages = Math.ceil(filteredTickets.length / pageSize)
  const paginatedTickets = filteredTickets.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  // Export to CSV
  const handleExport = () => {
    const csv = Papa.unparse(
      filteredTickets.map(t => ({
        'Número de Ticket': t.numeroTicket,
        'Cliente': t.cliente,
        'Cliente Reclamante': t.clienteReclamante || '',
        'Asunto': t.asunto,
        'Producto': t.producto || '',
        'Especificación': t.especificacion || '',
        'Número Contenedor': t.numeroContenedor || '',
        'Toneladas': t.toneladas || '',
        'Tipo Problema': t.tipoProblema || '',
        'Grupo Problema': t.grupoProblema || '',
        'Estado': t.estado,
        'Prioridad': t.prioridad,
        'Agente': t.agente || 'Sin asignar',
        'Responsable': t.responsable || '',
        'Fecha Creación': t.fechaCreacion.toISOString(),
        'Días Desde Creación': t.diasDesdeCreacion,
        'Atrasado': t.atrasado ? 'Sí' : 'No'
      }))
    )

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `reclamos-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  const getStatusBadge = (estado: string, atrasado: boolean) => {
    if (atrasado) return <span className="badge badge-danger">Atrasado</span>
    if (estado === 'Open') return <span className="badge badge-primary">Abierto</span>
    return <span className="badge badge-success">Resuelto</span>
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-display">
          Reclamos
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Total: {filteredTickets.length} reclamos
        </p>
      </motion.div>

      {/* Search and Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card p-4"
      >
        <div className="flex flex-col gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por número, cliente o asunto..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
              className="input pl-10 w-full"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <select
              value={filters.estado}
              onChange={(e) => {
                setFilters({ ...filters, estado: e.target.value })
                setCurrentPage(1)
              }}
              className="input text-sm"
            >
              {uniqueEstados.map(estado => (
                <option key={estado} value={estado}>
                  {estado === 'todos' ? 'Todos los estados' : estado}
                </option>
              ))}
            </select>

            <select
              value={filters.cliente}
              onChange={(e) => {
                setFilters({ ...filters, cliente: e.target.value })
                setCurrentPage(1)
              }}
              className="input text-sm"
            >
              {uniqueClientes.slice(0, 10).map(cliente => (
                <option key={cliente} value={cliente}>
                  {cliente === 'todos' ? 'Todos los clientes' : cliente.substring(0, 15) + '...'}
                </option>
              ))}
            </select>

            <select
              value={filters.prioridad}
              onChange={(e) => {
                setFilters({ ...filters, prioridad: e.target.value })
                setCurrentPage(1)
              }}
              className="input text-sm"
            >
              {uniquePrioridades.map(prioridad => (
                <option key={prioridad} value={prioridad}>
                  {prioridad === 'todos' ? 'Prioridad' : prioridad}
                </option>
              ))}
            </select>

            <label className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer">
              <input
                type="checkbox"
                checked={filters.onlyOverdue}
                onChange={(e) => {
                  setFilters({ ...filters, onlyOverdue: e.target.checked })
                  setCurrentPage(1)
                }}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Atrasados</span>
            </label>

            <label className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer">
              <input
                type="checkbox"
                checked={filters.onlyUnresponded}
                onChange={(e) => {
                  setFilters({ ...filters, onlyUnresponded: e.target.checked })
                  setCurrentPage(1)
                }}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Sin respuesta</span>
            </label>

            <button
              onClick={handleExport}
              className="btn btn-secondary flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Exportar</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card overflow-hidden"
      >
        {isLoading ? (
          <div className="p-8 text-center">
            <div className="inline-block w-8 h-8 border-4 border-primary-300 border-t-primary-700 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Cargando reclamos...</p>
          </div>
        ) : paginatedTickets.length === 0 ? (
          <div className="p-8 text-center">
            <Filter className="w-12 h-12 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">No hay reclamos que coincidan con los filtros</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">
                      #Ticket
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Cliente
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Asunto
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Producto
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Contenedor
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Ton.
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Estado
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Agente
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Días
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTickets.map((ticket, idx) => (
                    <motion.tr
                      key={ticket.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <td className="px-4 py-3 text-xs font-semibold text-primary-600 dark:text-primary-400">
                        {ticket.numeroTicket}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-900 dark:text-gray-100 max-w-xs truncate">
                        {ticket.clienteReclamante || ticket.cliente}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-700 dark:text-gray-300 max-w-xs truncate" title={ticket.asunto}>
                        {ticket.asunto}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-700 dark:text-gray-300">
                        {ticket.producto || '—'}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-700 dark:text-gray-300 font-mono">
                        {ticket.numeroContenedor || '—'}
                      </td>
                      <td className="px-4 py-3 text-xs text-right font-semibold text-gray-900 dark:text-gray-100">
                        {ticket.toneladas ? `${ticket.toneladas}t` : '—'}
                      </td>
                      <td className="px-4 py-3">
                        {getStatusBadge(ticket.estado, ticket.atrasado)}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-700 dark:text-gray-300">
                        {ticket.agente || '—'}
                      </td>
                      <td className="px-4 py-3 text-xs font-medium text-right text-gray-900 dark:text-gray-100">
                        {ticket.diasDesdeCreacion}d
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Página {currentPage} de {totalPages}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="btn btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Anterior
                </button>
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="btn btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  )
}
