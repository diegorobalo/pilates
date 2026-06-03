import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'

const app = express()
const PORT = 3001

// MySQL Database Configuration
const dbConfig = {
  host: '10.0.1.5',
  port: 3306,
  user: 'Claudia',
  password: 'Gira2026sol',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true
}

// osTicket databases to query
const osTicketDatabases = [
  'ost_reclamos',
  'ost_consumomasivo',
  'ost_pipas',
  'ost_reclamos_dev'
]

let connectionPools = {}

// Initialize connection pools for each database
async function initializePools() {
  try {
    for (const dbName of osTicketDatabases) {
      const pool = mysql.createPool({
        ...dbConfig,
        database: dbName
      })
      
      // Test connection immediately
      try {
        const conn = await pool.getConnection()
        console.log(`✅ Conexión al pool MySQL para ${dbName} creada y verificada`)
        conn.release()
      } catch (testError) {
        console.error(`❌ Error verificando conexión a ${dbName}:`, testError.message)
      }
      
      connectionPools[dbName] = pool
    }
  } catch (error) {
    console.error('❌ Error inicializando pools MySQL:', error)
    process.exit(1)
  }
}

// Initialize pools on startup
await initializePools()

// Middleware
app.use(cors())
app.use(express.json())

// Helper function to query a specific database
async function queryDatabase(dbName, sql, values = []) {
  try {
    const pool = connectionPools[dbName]
    if (!pool) {
      throw new Error(`Base de datos no configurada: ${dbName}`)
    }
    
    const connection = await pool.getConnection()
    try {
      const [results] = await connection.execute(sql, values)
      return results
    } finally {
      connection.release()
    }
  } catch (error) {
    console.error(`❌ Error consultando ${dbName}:`, error)
    throw error
  }
}

// Helper function to fetch all tickets from all databases
async function getAllTickets(page = 1, limit = 100) {
  const offset = (page - 1) * limit
  const allTickets = []
  let totalCount = 0

  try {
    for (const dbName of osTicketDatabases) {
      const countSql = `
        SELECT COUNT(*) as total
        FROM ost_ticket
      `
      const countResults = await queryDatabase(dbName, countSql)
      totalCount += countResults[0].total

      const sql = `
        SELECT 
          t.ticket_id as id,
          t.ticket_number as ticketNumber,
          t.subject,
          t.status,
          t.priority,
          t.created,
          t.updated,
          t.closed,
          t.user_id as userId,
          t.staff_id as staffId,
          t.department_id as departmentId,
          u.name as userName,
          u.email as userEmail,
          s.firstname as staffFirstName,
          s.lastname as staffLastName,
          d.name as departmentName,
          '${dbName}' as source
        FROM ost_ticket t
        LEFT JOIN ost_user u ON t.user_id = u.user_id
        LEFT JOIN ost_staff s ON t.staff_id = s.staff_id
        LEFT JOIN ost_department d ON t.department_id = d.dept_id
        ORDER BY t.created DESC
        LIMIT ? OFFSET ?
      `
      
      const tickets = await queryDatabase(dbName, sql, [limit, offset])
      
      // Transform osTicket data to our interface
      const transformedTickets = tickets.map(ticket => ({
        id: ticket.id,
        ticketNumber: ticket.ticketNumber,
        subject: ticket.subject,
        status: mapStatus(ticket.status),
        priority: mapPriority(ticket.priority),
        created: new Date(ticket.created).toISOString(),
        updated: ticket.updated ? new Date(ticket.updated).toISOString() : null,
        closed: ticket.closed ? new Date(ticket.closed).toISOString() : null,
        client: ticket.userName || 'Unknown',
        clientEmail: ticket.userEmail || 'N/A',
        assignedAgent: ticket.staffFirstName && ticket.staffLastName 
          ? `${ticket.staffFirstName} ${ticket.staffLastName}`
          : 'Unassigned',
        department: ticket.departmentName || 'N/A',
        source: ticket.source,
        daysOpen: calculateDaysOpen(ticket.created, ticket.closed)
      }))

      allTickets.push(...transformedTickets)
    }

    return {
      tickets: allTickets,
      total: totalCount,
      page,
      limit,
      pages: Math.ceil(totalCount / limit)
    }
  } catch (error) {
    console.error('❌ Error obteniendo tickets:', error)
    throw error
  }
}

// Helper functions for data transformation
function mapStatus(status) {
  const statusMap = {
    'open': 'open',
    'closed': 'resolved',
    'reopened': 'open',
    'new': 'open'
  }
  return statusMap[status?.toLowerCase()] || status || 'open'
}

function mapPriority(priority) {
  const priorityMap = {
    '0': 'low',
    '1': 'medium',
    '2': 'high',
    '3': 'urgent',
    'low': 'low',
    'medium': 'medium',
    'high': 'high',
    'urgent': 'urgent'
  }
  return priorityMap[String(priority)?.toLowerCase()] || 'medium'
}

function calculateDaysOpen(created, closed) {
  const startDate = new Date(created)
  const endDate = closed ? new Date(closed) : new Date()
  const diffTime = Math.abs(endDate - startDate)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

// API Endpoint: Get all tickets
app.get('/api/tickets', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 100
    const database = req.query.db || null // opcional: filtrar por base de datos específica

    console.log(`🔄 Obteniendo tickets - Página: ${page}, Límite: ${limit}`)

    const result = await getAllTickets(page, limit)

    console.log(`✅ ${result.tickets.length} tickets obtenidos de MySQL (Total: ${result.total})`)

    res.json({
      success: true,
      tickets: result.tickets,
      total: result.total,
      page: result.page,
      limit: result.limit,
      pages: result.pages,
      timestamp: new Date().toISOString(),
      source: 'MySQL - osTicket Databases'
    })
  } catch (error) {
    console.error('❌ Error en /api/tickets:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to fetch tickets from MySQL',
      details: error.message
    })
  }
})

// API Endpoint: Get tickets from specific database
app.get('/api/tickets/:database', async (req, res) => {
  try {
    const { database } = req.params
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 100

    if (!osTicketDatabases.includes(database)) {
      return res.status(400).json({
        success: false,
        error: `Database not found: ${database}`,
        availableDatabases: osTicketDatabases
      })
    }

    console.log(`🔄 Obteniendo tickets de ${database} - Página: ${page}`)

    const offset = (page - 1) * limit

    const countSql = `SELECT COUNT(*) as total FROM ost_ticket`
    const countResults = await queryDatabase(database, countSql)
    const total = countResults[0].total

    const sql = `
      SELECT 
        t.ticket_id as id,
        t.ticket_number as ticketNumber,
        t.subject,
        t.status,
        t.priority,
        t.created,
        t.updated,
        t.closed,
        u.name as userName,
        u.email as userEmail,
        s.firstname as staffFirstName,
        s.lastname as staffLastName,
        d.name as departmentName
      FROM ost_ticket t
      LEFT JOIN ost_user u ON t.user_id = u.user_id
      LEFT JOIN ost_staff s ON t.staff_id = s.staff_id
      LEFT JOIN ost_department d ON t.department_id = d.dept_id
      ORDER BY t.created DESC
      LIMIT ? OFFSET ?
    `

    const tickets = await queryDatabase(database, sql, [limit, offset])

    const transformedTickets = tickets.map(ticket => ({
      id: ticket.id,
      ticketNumber: ticket.ticketNumber,
      subject: ticket.subject,
      status: mapStatus(ticket.status),
      priority: mapPriority(ticket.priority),
      created: new Date(ticket.created).toISOString(),
      updated: ticket.updated ? new Date(ticket.updated).toISOString() : null,
      closed: ticket.closed ? new Date(ticket.closed).toISOString() : null,
      client: ticket.userName || 'Unknown',
      clientEmail: ticket.userEmail || 'N/A',
      assignedAgent: ticket.staffFirstName && ticket.staffLastName 
        ? `${ticket.staffFirstName} ${ticket.staffLastName}`
        : 'Unassigned',
      department: ticket.departmentName || 'N/A',
      source: database,
      daysOpen: calculateDaysOpen(ticket.created, ticket.closed)
    }))

    console.log(`✅ ${transformedTickets.length} tickets obtenidos de ${database}`)

    res.json({
      success: true,
      tickets: transformedTickets,
      total: total,
      page: page,
      limit: limit,
      pages: Math.ceil(total / limit),
      database: database,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error(`❌ Error obteniendo tickets de ${req.params.database}:`, error)
    res.status(500).json({
      success: false,
      error: 'Failed to fetch tickets from database',
      details: error.message,
      database: req.params.database
    })
  }
})

// API Endpoint: Get database statistics
app.get('/api/stats', async (req, res) => {
  try {
    const stats = {}

    for (const dbName of osTicketDatabases) {
      try {
        const sql = `
          SELECT 
            COUNT(*) as total,
            SUM(CASE WHEN status = 'open' THEN 1 ELSE 0 END) as openCount,
            SUM(CASE WHEN status = 'closed' THEN 1 ELSE 0 END) as closedCount
          FROM ost_ticket
        `
        const results = await queryDatabase(dbName, sql)
        stats[dbName] = results[0]
      } catch (error) {
        console.error(`Error getting stats for ${dbName}:`, error)
        stats[dbName] = { error: error.message }
      }
    }

    res.json({
      success: true,
      databases: osTicketDatabases,
      stats: stats,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('❌ Error en /api/stats:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to fetch statistics',
      details: error.message
    })
  }
})

// Health check endpoint
app.get('/health', async (req, res) => {
  try {
    // Test connection to all pools
    const poolTests = {}
    
    for (const dbName of osTicketDatabases) {
      try {
        const connection = await connectionPools[dbName].getConnection()
        await connection.ping()
        connection.release()
        poolTests[dbName] = 'OK'
      } catch (error) {
        poolTests[dbName] = error.message
      }
    }

    res.json({
      status: 'OK',
      databases: poolTests,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    res.status(500).json({
      status: 'ERROR',
      error: error.message,
      timestamp: new Date().toISOString()
    })
  }
})

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Backend servidor iniciado en http://localhost:${PORT}`)
  console.log(`📍 Endpoint API: http://localhost:${PORT}/api/tickets`)
  console.log(`📊 Estadísticas: http://localhost:${PORT}/api/stats`)
  console.log(`🏥 Health Check: http://localhost:${PORT}/health`)
  console.log(`\n✅ Conectado a MySQL con usuario: Claudia`)
  console.log(`📚 Bases de datos: ${osTicketDatabases.join(', ')}\n`)
})

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Cerrando servidor...')
  for (const pool of Object.values(connectionPools)) {
    await pool.end()
  }
  process.exit(0)
})