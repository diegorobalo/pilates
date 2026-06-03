import { useState, useEffect } from 'react'
import Papa from 'papaparse'
import { differenceInDays, parseISO } from 'date-fns'
import { fetchOSTicketData } from '../services/osTicketAPI'

export interface Ticket {
  // Información básica
  id: string
  numeroTicket: string
  fechaCreacion: Date
  asunto: string
  prioridad: string
  departamento: string
  fuente: string
  estado: string
  ultimaActualizacion: Date
  fechaVencimiento: Date
  atrasado: boolean
  respondio: boolean
  agente: string
  equipo: string

  // Información de cliente y usuario
  cliente: string
  correoCliente: string
  usuarioNombre: string
  usuarioEmail: string

  // Información comercial (custom fields)
  clienteReclamante?: string // Nombre del cliente que reclama
  producto?: string
  especificacion?: string
  numeroContenedor?: string
  toneladas?: number
  grupoProblema?: string
  tipoProblema?: string
  numeroDocumento?: string
  tipoDocumento?: string

  // Metadata
  diasDesdeCreacion: number
  diasHastaVencimiento: number
  responsable?: string
}

export function useTicketData() {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Load data on mount
  useEffect(() => {
    loadInitialData()
  }, [])

  const loadInitialData = async () => {
    setIsLoading(true)
    try {
      // Try to load from osTicket API first
      const apiTickets = await fetchOSTicketData()
      setTickets(apiTickets)
      console.log('✅ Datos cargados desde osTicket API')
    } catch (error) {
      console.warn('⚠️ No se pudo conectar a osTicket API, usando datos de ejemplo')
      loadSampleData()
    } finally {
      setIsLoading(false)
    }
  }

  const loadSampleData = () => {
    // Sample data for testing
    const sampleTickets: Ticket[] = [
      {
        id: '1',
        numeroTicket: '330666',
        fechaCreacion: new Date('2026-05-27'),
        asunto: 'DEMORAS LA BATURRICA',
        cliente: 'Sara Leon',
        correoCliente: 'sara.leon@argensun.com.ar',
        prioridad: 'Normal',
        departamento: 'Reclamos Comerciales',
        tema: 'Reclamos',
        fuente: 'Web',
        estado: 'Open',
        ultimaActualizacion: new Date('2026-05-27'),
        fechaVencimiento: new Date('2026-05-30'),
        atrasado: false,
        respondio: false,
        agente: '',
        equipo: '',
        diasDesdeCreacion: 0,
        diasHastaVencimiento: 3
      },
      {
        id: '2',
        numeroTicket: '859735',
        fechaCreacion: new Date('2026-05-27'),
        asunto: 'Demora en la liberacion',
        cliente: 'Cristian Salcedo',
        correoCliente: 'cristian.salcedo@argensun.com.ar',
        prioridad: 'Normal',
        departamento: 'Reclamos Comerciales',
        tema: 'Reclamos',
        fuente: 'Web',
        estado: 'Open',
        ultimaActualizacion: new Date('2026-05-27'),
        fechaVencimiento: new Date('2026-05-30'),
        atrasado: false,
        respondio: false,
        agente: '',
        equipo: '',
        diasDesdeCreacion: 0,
        diasHastaVencimiento: 3
      }
    ]
    setTickets(sampleTickets)
  }

  const handleFileUpload = (file: File) => {
    setIsLoading(true)

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      delimiter: ';',
      complete: (results: any) => {
        try {
          const parsedTickets = results.data
            .filter((row: any) => row['Número de Ticket']) // Filtrar filas vacías
            .map((row: any, idx: number) => {
              try {
                // Parse dates safely
                const fechaStr = row['Fecha de creación']?.split(' ')[0]
                const vencimientoStr = row['Fecha de Vencimiento']?.split(' ')[0]
                const actualizacionStr = row['Última actualización']?.split(' ')[0]

                const fechaCreacion = fechaStr ? parseISO(fechaStr) : new Date()
                const fechaVencimiento = vencimientoStr ? parseISO(vencimientoStr) : new Date()
                const ultimaActualizacion = actualizacionStr ? parseISO(actualizacionStr) : new Date()

                const now = new Date()

                return {
                  id: idx.toString(),
                  numeroTicket: row['Número de Ticket']?.trim() || '',
                  fechaCreacion,
                  asunto: row['Asunto']?.trim() || 'Sin asunto',
                  cliente: row['De']?.trim() || 'Sin cliente',
                  correoCliente: row['De correo electrónico']?.trim() || '',
                  prioridad: row['Prioridad']?.trim() || 'Normal',
                  departamento: row['Departamento']?.trim() || '',
                  tema: row['Temas de ayuda']?.trim() || 'Sin clasificar',
                  fuente: row['Fuente']?.trim() || 'Web',
                  estado: row['Estado actual']?.trim() || 'Open',
                  ultimaActualizacion,
                  fechaVencimiento,
                  atrasado: row['Atrasado']?.toString().trim() === '1',
                  respondio: row['Respondió']?.toString().trim() === '1',
                  agente: row['Agente asignado']?.trim() || '',
                  equipo: row['Equipo asignado']?.trim() || '',

                  // Custom fields (from enhanced CSV export)
                  clienteReclamante: row['Cliente'] ? row['Cliente'].trim() : undefined,
                  producto: row['Producto'] ? row['Producto'].trim() : undefined,
                  especificacion: row['Especificación'] ? row['Especificación'].trim() : undefined,
                  numeroContenedor: row['Número Contenedor'] ? row['Número Contenedor'].trim() : undefined,
                  toneladas: row['Toneladas Reclamadas'] ? parseFloat(row['Toneladas Reclamadas'].toString()) : undefined,
                  tipoProblema: row['Tipo de Problema'] ? row['Tipo de Problema'].trim() : undefined,
                  grupoProblema: row['Grupo de Problema'] ? row['Grupo de Problema'].trim() : undefined,
                  numeroDocumento: row['Número Documento'] ? row['Número Documento'].trim() : undefined,
                  tipoDocumento: row['Tipo Documento'] ? row['Tipo Documento'].trim() : undefined,
                  responsable: row['Responsable'] ? row['Responsable'].trim() : undefined,
                  usuarioNombre: row['Usuario']?.trim() || '',
                  usuarioEmail: row['Email Usuario']?.trim() || '',

                  diasDesdeCreacion: differenceInDays(now, fechaCreacion),
                  diasHastaVencimiento: differenceInDays(fechaVencimiento, now)
                }
              } catch (rowError) {
                console.warn('Error en fila', idx, rowError)
                return null
              }
            })
            .filter((ticket: any) => ticket !== null)

          console.log('Tickets importados:', parsedTickets.length)
          setTickets(parsedTickets)
        } catch (error) {
          console.error('Error parsing tickets:', error)
          loadSampleData()
        } finally {
          setIsLoading(false)
        }
      },
      error: (error: any) => {
        console.error('CSV Parse Error:', error)
        setIsLoading(false)
        loadSampleData()
      }
    })
  }

  return {
    tickets,
    isLoading,
    handleFileUpload
  }
}
