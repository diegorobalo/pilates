import os
from fastapi import FastAPI, Request, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from datetime import datetime
from dotenv import load_dotenv
import uvicorn
import logging
from odoo_service import get_odoo_service

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Originamiento Dashboard API")

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============ MODELS ============
class LoginRequest(BaseModel):
    username: str
    password: str

# ============ HEALTH ============
@app.get("/health")
def health_check():
    odoo = get_odoo_service()
    return {
        "status": "healthy",
        "service": "originamiento-dashboard-api",
        "version": "2.0.0",
        "timestamp": datetime.now().isoformat(),
        "odoo_connected": odoo.uid is not None
    }

# ============ AUTH ENDPOINTS ============
@app.post("/api/auth/login")
def login(request: LoginRequest):
    """
    Login endpoint - accepts JSON body with username and password
    Demo credentials: username="demo", password="demo123"
    """
    if request.username == "demo" and request.password == "demo123":
        return {
            "success": True,
            "token": "demo-token-12345",
            "user": {
                "id": 1,
                "username": "demo",
                "name": "Demo User",
                "email": "demo@argensun.com.ar"
            },
            "timestamp": datetime.now().isoformat()
        }
    else:
        return JSONResponse(
            status_code=401,
            content={
                "success": False,
                "message": "Credenciales inválidas"
            }
        )

@app.get("/api/auth/me")
def get_current_user(token: str = None):
    """Get current user info from token"""
    if token == "demo-token-12345":
        return {
            "success": True,
            "user": {
                "id": 1,
                "username": "demo",
                "name": "Demo User",
                "email": "demo@argensun.com.ar"
            }
        }
    return JSONResponse(status_code=401, content={"success": False, "message": "Token inválido"})

# ============ ESTABLECIMIENTOS (PARTNERS) ============
@app.get("/api/establecimientos")
def get_establecimientos():
    """Get all establishments from Odoo"""
    try:
        odoo = get_odoo_service()
        # Get ALL partners first to see what we have
        establecimientos = odoo.search_read(
            'res.partner', 
            [],  # No filter - get all
            ['id', 'name', 'city', 'phone', 'email', 'type', 'is_company'],
            limit=100
        )
        return {
            "success": True,
            "count": len(establecimientos),
            "data": establecimientos,
            "timestamp": datetime.now().isoformat()
        }
    except Exception as e:
        logger.error(f"Error getting establecimientos: {str(e)}")
        return JSONResponse(
            status_code=500,
            content={"success": False, "message": str(e)}
        )

# ============ PRODUCTS ============
@app.get("/api/products")
def get_products(limit: int = Query(None), skip: int = Query(0)):
    """Get all products from Odoo with optional pagination"""
    try:
        odoo = get_odoo_service()
        productos = odoo.search_read('product.product', [], ['id', 'name', 'default_code', 'list_price', 'qty_available'], limit=100)
        
        # Apply pagination
        data = productos[skip:]
        if limit:
            data = data[:limit]
        
        return {
            "success": True,
            "count": len(productos),
            "data": data,
            "timestamp": datetime.now().isoformat()
        }
    except Exception as e:
        logger.error(f"Error getting products: {str(e)}")
        return JSONResponse(
            status_code=500,
            content={"success": False, "message": str(e)}
        )

@app.get("/api/products/{product_id}")
def get_product(product_id: int):
    """Get a specific product by ID"""
    try:
        odoo = get_odoo_service()
        productos = odoo.search_read('product.product', [['id', '=', product_id]], ['id', 'name', 'default_code', 'list_price', 'qty_available'], limit=1)
        if productos:
            return {"success": True, "data": productos[0]}
        return JSONResponse(status_code=404, content={"success": False, "message": "Producto no encontrado"})
    except Exception as e:
        logger.error(f"Error getting product: {str(e)}")
        return JSONResponse(status_code=500, content={"success": False, "message": str(e)})

# ============ CONTACTOS ============
@app.get("/api/contactos")
def get_contactos():
    """Get all contacts from Odoo"""
    try:
        odoo = get_odoo_service()
        domain = [['is_company', '=', False]]
        contactos = odoo.search_read('res.partner', domain, ['id', 'name', 'email', 'phone', 'function'], limit=100)
        return {
            "success": True,
            "count": len(contactos),
            "data": contactos,
            "timestamp": datetime.now().isoformat()
        }
    except Exception as e:
        logger.error(f"Error getting contactos: {str(e)}")
        return JSONResponse(
            status_code=500,
            content={"success": False, "message": str(e)}
        )

# ============ OPORTUNIDADES ============
@app.get("/api/oportunidades")
def get_oportunidades():
    """Get all opportunities from Odoo"""
    try:
        odoo = get_odoo_service()
        oportunidades = odoo.search_read('crm.lead', [], ['id', 'name', 'partner_id', 'probability', 'expected_revenue'], limit=100)
        return {
            "success": True,
            "count": len(oportunidades),
            "data": oportunidades,
            "timestamp": datetime.now().isoformat()
        }
    except Exception as e:
        logger.error(f"Error getting oportunidades: {str(e)}")
        return JSONResponse(
            status_code=500,
            content={"success": False, "message": str(e)}
        )

# ============ PARTNERS (for compatibility) ============
@app.get("/api/partners")
def get_partners(limit: int = Query(None), skip: int = Query(0)):
    """Get all partners from Odoo with optional pagination"""
    try:
        odoo = get_odoo_service()
        partners = odoo.search_read('res.partner', [], ['id', 'name', 'city', 'phone', 'email'], limit=100)
        
        # Apply pagination
        data = partners[skip:]
        if limit:
            data = data[:limit]
        
        return {
            "success": True,
            "count": len(partners),
            "data": data,
            "timestamp": datetime.now().isoformat()
        }
    except Exception as e:
        logger.error(f"Error getting partners: {str(e)}")
        return JSONResponse(
            status_code=500,
            content={"success": False, "message": str(e)}
        )

# ============ ORDERS ============
@app.get("/api/orders")
def get_orders(limit: int = Query(None), skip: int = Query(0)):
    """Get all sales orders from Odoo with optional pagination"""
    try:
        odoo = get_odoo_service()
        ordenes = odoo.search_read('sale.order', [], ['id', 'name', 'partner_id', 'state', 'amount_total', 'date_order'], limit=100)
        
        # Apply pagination
        data = ordenes[skip:]
        if limit:
            data = data[:limit]
        
        return {
            "success": True,
            "count": len(ordenes),
            "data": data,
            "timestamp": datetime.now().isoformat()
        }
    except Exception as e:
        logger.error(f"Error getting orders: {str(e)}")
        return JSONResponse(
            status_code=500,
            content={"success": False, "message": str(e)}
        )

@app.get("/api/orders/summary/metrics")
def get_orders_summary():
    """Get orders summary metrics for dashboard"""
    try:
        odoo = get_odoo_service()
        ordenes = odoo.search_read('sale.order', [], ['id', 'state', 'amount_total'], limit=200)
        
        # Basic metrics calculation
        total_orders = len(ordenes)
        completed = len([o for o in ordenes if o.get('state') in ['done', 'sale']])
        pending = len([o for o in ordenes if o.get('state') in ['draft', 'sent']])
        
        total_sales = sum(float(o.get('amount_total', 0)) for o in ordenes)
        pending_sales = sum(float(o.get('amount_total', 0)) for o in ordenes if o.get('state') in ['draft', 'sent'])
        
        return {
            "success": True,
            "total_orders": total_orders,
            "completed_orders": completed,
            "pending_orders": pending,
            "in_transit_orders": total_orders - completed - pending,
            "total_sales_amount": total_sales,
            "pending_sales": pending,
            "pending_sales_amount": pending_sales,
            "timestamp": datetime.now().isoformat()
        }
    except Exception as e:
        logger.error(f"Error getting orders summary: {str(e)}")
        return JSONResponse(
            status_code=500,
            content={"success": False, "message": str(e)}
        )

# ============ ORDENES DE COMPRA ============
@app.get("/api/purchase-orders")
def get_purchase_orders():
    """Get all purchase orders from Odoo"""
    try:
        odoo = get_odoo_service()
        ordenes = odoo.search_read('purchase.order', [], ['id', 'name', 'partner_id', 'state', 'amount_total', 'date_order'], limit=100)
        return {
            "success": True,
            "count": len(ordenes),
            "data": ordenes,
            "timestamp": datetime.now().isoformat()
        }
    except Exception as e:
        logger.error(f"Error getting purchase orders: {str(e)}")
        return JSONResponse(
            status_code=500,
            content={"success": False, "message": str(e)}
        )

# ============ LOTES ============
@app.get("/api/lotes")
def get_lotes():
    """Get all lots/batches from Odoo"""
    try:
        odoo = get_odoo_service()
        lotes = odoo.search_read('stock.production.lot', [], ['id', 'name', 'product_id', 'quantity'], limit=100)
        return {
            "success": True,
            "count": len(lotes),
            "data": lotes,
            "timestamp": datetime.now().isoformat()
        }
    except Exception as e:
        logger.error(f"Error getting lotes: {str(e)}")
        return JSONResponse(
            status_code=500,
            content={"success": False, "message": str(e)}
        )

# ============ AI AGENT ENDPOINT ============
@app.post("/api/ai/ask")
async def ask_ai(request: Request):
    """
    AI Agent endpoint - accepts questions about the data
    Returns insights and analysis
    """
    try:
        body = await request.json()
        question = body.get("question", "")
        
        if not question:
            return JSONResponse(
                status_code=400,
                content={"success": False, "message": "Pregunta requerida"}
            )
        
        # Get data from Odoo for context
        odoo = get_odoo_service()
        productos_count = len(odoo.search_read('product.product', [], ['id'], limit=1000))
        contactos_count = len(odoo.search_read('res.partner', [['is_company', '=', False]], ['id'], limit=1000))
        establecimientos_count = len(odoo.search_read('res.partner', [['is_company', '=', True]], ['id'], limit=1000))
        ordenes_count = len(odoo.search_read('sale.order', [], ['id'], limit=1000))
        
        # Simple response based on keywords
        question_lower = question.lower()
        
        if "producto" in question_lower:
            answer = f"Tienes {productos_count} productos registrados en Odoo"
        elif "contacto" in question_lower or "cliente" in question_lower:
            answer = f"Hay {contactos_count} contactos en el sistema"
        elif "establecimiento" in question_lower or "partner" in question_lower:
            answer = f"Tienes {establecimientos_count} establecimientos"
        elif "orden" in question_lower or "venta" in question_lower:
            answer = f"Hay {ordenes_count} órdenes de venta registradas"
        else:
            answer = f"Datos disponibles: {productos_count} productos, {contactos_count} contactos, {establecimientos_count} establecimientos, {ordenes_count} órdenes de venta."
        
        return {
            "success": True,
            "question": question,
            "answer": answer,
            "timestamp": datetime.now().isoformat()
        }
    except Exception as e:
        logger.error(f"Error in AI agent: {str(e)}")
        return JSONResponse(
            status_code=500,
            content={"success": False, "message": str(e)}
        )

# ============ ROOT ENDPOINT ============
@app.get("/")
def root():
    odoo = get_odoo_service()
    return {
        "service": "Originamiento Dashboard API",
        "version": "2.0.0",
        "status": "connected" if odoo.uid else "disconnected",
        "odoo_connected": odoo.uid is not None,
        "endpoints": {
            "health": "/health",
            "auth": "/api/auth/login",
            "establecimientos": "/api/establecimientos",
            "productos": "/api/products",
            "contactos": "/api/contactos",
            "oportunidades": "/api/oportunidades",
            "partners": "/api/partners",
            "ordenes_venta": "/api/orders",
            "ordenes_compra": "/api/purchase-orders",
            "lotes": "/api/lotes",
            "ai": "/api/ai/ask"
        }
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8083)
