import { Ticket } from '../hooks/useTicketData'
import { differenceInDays, parseISO } from 'date-fns'

const BACKEND_URL = 'http://localhost:3001/api/tickets'

interface OSTicketTicket {
  id: string
  ticket_number: string
  subject: string
  status: string
  priority: string
  created: string
  updated: string
  due_date: string
  user: {
    name: string
    email: string
  }
  staff: {
    name?: string
  } | null
  department: {
    name: string
  }
  source: string
  isoverdue: boolean
  isanswered: boolean
  custom_fields?: Record<string, any>
  [key: string]: any
}

export async function fetchOSTicketData(): Promise<Ticket[]> {
  try {
    console.log('📡 Conectando al backend en:', BACKEND_URL)

    const response = await fetch(BACKEND_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`Backend error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()

    if (!data.tickets || !Array.isArray(data.tickets)) {
      throw new Error('Invalid response format from backend')
    }

    // Transform API response to Ticket interface
    const parsedTickets = data.tickets.map((apiTicket: OSTicketTicket, idx: number) => {
      const fechaCreacion = parseISO(apiTicket.created)
      const fechaVencimiento = apiTicket.due_date ? parseISO(apiTicket.due_date) : new Date()
      const ultimaActualizacion = parseISO(apiTicket.updated)
      const now = new Date()

      return {
        id: apiTicket.id,
        numeroTicket: apiTicket.ticket_number,
        fechaCreacion,
        asunto: apiTicket.subject,
        cliente: apiTicket.user?.name || 'Sin cliente',
        correoCliente: apiTicket.user?.email || '',
        prioridad: apiTicket.priority || 'Normal',
        departamento: apiTicket.department?.name || '',
        tema: 'Reclamos',
        fuente: apiTicket.source || 'Web',
        estado: apiTicket.status,
        ultimaActualizacion,
        fechaVencimiento,
        atrasado: apiTicket.isoverdue,
        respondio: apiTicket.isanswered,
        agente: apiTicket.staff?.name || '',
        equipo: '',

        // Custom fields - attempt to extract from various possible field names
        clienteReclamante:
          apiTicket.custom_fields?.cliente_reclamante ||
          apiTicket.custom_fields?.['Cliente Reclamante'] ||
          apiTicket.custom_fields?.cliente ||
          undefined,

        producto:
          apiTicket.custom_fields?.producto ||
          apiTicket.custom_fields?.['Producto'] ||
          undefined,

        especificacion:
          apiTicket.custom_fields?.especificacion ||
          apiTicket.custom_fields?.['Especificación'] ||
          undefined,

        numeroContenedor:
          apiTicket.custom_fields?.numero_contenedor ||
          apiTicket.custom_fields?.['Número Contenedor'] ||
          apiTicket.custom_fields?.contenedor ||
          apiTicket.custom_fields?.['Contenedor'] ||
          undefined,

        toneladas: (() => {
          const val =
            apiTicket.custom_fields?.toneladas ||
            apiTicket.custom_fields?.['Toneladas Reclamadas'] ||
            apiTicket.custom_fields?.['Toneladas']
          return val ? parseFloat(val.toString()) : undefined
        })(),

        tipoProblema:
          apiTicket.custom_fields?.tipo_problema ||
          apiTicket.custom_fields?.['Tipo de Problema'] ||
          apiTicket.custom_fields?.['Tipo Problema'] ||
          undefined,

        grupoProblema:
          apiTicket.custom_fields?.grupo_problema ||
          apiTicket.custom_fields?.['Grupo de Problema'] ||
          apiTicket.custom_fields?.['Grupo Problema'] ||
          undefined,

        numeroDocumento:
          apiTicket.custom_fields?.numero_documento ||
          apiTicket.custom_fields?.['Número Documento'] ||
          undefined,

        tipoDocumento:
          apiTicket.custom_fields?.tipo_documento ||
          apiTicket.custom_fields?.['Tipo Documento'] ||
          undefined,

        responsable:
          apiTicket.custom_fields?.responsable ||
          apiTicket.custom_fields?.['Responsable'] ||
          undefined,

        usuarioNombre: apiTicket.user?.name || '',
        usuarioEmail: apiTicket.user?.email || '',

        diasDesdeCreacion: differenceInDays(now, fechaCreacion),
        diasHastaVencimiento: differenceInDays(fechaVencimiento, now)
      }
    })

    console.log(`✅ ${parsedTickets.length} tickets descargados desde osTicket API`)
    return parsedTickets
  } catch (error) {
    console.error('❌ Error conectando a backend:', error)
    throw error
  }
}
