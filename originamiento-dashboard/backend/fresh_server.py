#!/usr/bin/env python3
"""
Fresh FastAPI server with inline routes - starts on port 8084
This bypasses all caching issues by using inline route definitions
"""
from fastapi import FastAPI, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
import json

print("\n" + "="*70)
print("FRESH BACKEND SERVER - PORT 8084 - INLINE ROUTES")
print("="*70 + "\n")

app = FastAPI(
    title="Originamiento Dashboard API - Fresh",
    description="Fresh API with inline routes",
    version="2.0.0-fresh"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ===== ROOT ENDPOINT =====
@app.get("/")
def root():
    """Root endpoint"""
    return {
        "message": "Originamiento Dashboard API",
        "version": "2.0.0-fresh",
        "docs": "/docs",
        "status": "operational",
        "timestamp": datetime.now().isoformat(),
        "data_source": "mock",
        "port": 8084,
        "note": "Fresh server with inline routes"
    }

# ===== HEALTH ENDPOINT =====
@app.get("/health")
def health():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "originamiento-dashboard-api-fresh",
        "version": "2.0.0-fresh",
        "timestamp": datetime.now().isoformat()
    }

# ===== PRODUCTS ENDPOINTS =====
@app.get("/api/products")
def get_products(limit: int = Query(50, ge=1, le=500)):
    """Get products - Mock data"""
    mock_products = [
        {"id": 1, "name": "Maíz Premium", "price": 250.0, "qty": 500, "sku": "CORN-001"},
        {"id": 2, "name": "Trigo Candeal", "price": 180.0, "qty": 300, "sku": "WHEAT-001"},
        {"id": 3, "name": "Soja Transgénica", "price": 380.0, "qty": 150, "sku": "SOJA-001"},
        {"id": 4, "name": "Cebada Cervecera", "price": 160.0, "qty": 200, "sku": "BARLEY-001"},
        {"id": 5, "name": "Girasol Alto Oleico", "price": 320.0, "qty": 100, "sku": "SUNFLOWER-001"},
    ]
    
    return {
        "success": True,
        "count": len(mock_products),
        "products": mock_products[:limit],
        "source": "mock_data",
        "timestamp": datetime.now().isoformat()
    }

@app.get("/api/products/{product_id}")
def get_product(product_id: int):
    """Get single product by ID"""
    if product_id <= 0:
        raise HTTPException(status_code=400, detail="Invalid product ID")
    
    return {
        "success": True,
        "product": {
            "id": product_id,
            "name": f"Producto {product_id}",
            "price": 100.0 * product_id,
            "qty": 50 + product_id * 10
        },
        "source": "mock_data"
    }

# ===== PARTNERS ENDPOINTS =====
@app.get("/api/partners")
def get_partners(limit: int = Query(50, ge=1, le=500)):
    """Get partners/transportistas"""
    mock_partners = [
        {"id": 1, "name": "Transportes ArgensunLogistics", "type": "transporter", "capacity": 50000},
        {"id": 2, "name": "Logística Regional SRL", "type": "transporter", "capacity": 30000},
        {"id": 3, "name": "Proveedor Agrícola Central", "type": "supplier", "capacity": 100000},
        {"id": 4, "name": "Distribuidora Nacional", "type": "distributor", "capacity": 75000},
        {"id": 5, "name": "Transportes del Sur", "type": "transporter", "capacity": 40000},
    ]
    
    return {
        "success": True,
        "count": len(mock_partners),
        "partners": mock_partners[:limit],
        "source": "mock_data",
        "timestamp": datetime.now().isoformat()
    }

# ===== ORDERS ENDPOINTS =====
@app.get("/api/orders")
def get_orders(limit: int = Query(50, ge=1, le=500)):
    """Get sales orders"""
    mock_orders = [
        {"id": 1, "name": "SO-2026-001", "customer": "Molino San José", "status": "pending", "amount": 45000.0, "date": "2026-05-10"},
        {"id": 2, "name": "SO-2026-002", "customer": "Export Trading SA", "status": "confirmed", "amount": 78500.0, "date": "2026-05-09"},
        {"id": 3, "name": "SO-2026-003", "customer": "Alimentos Regionales", "status": "delivered", "amount": 52300.0, "date": "2026-05-08"},
        {"id": 4, "name": "SO-2026-004", "customer": "Cooperativa Agraria", "status": "pending", "amount": 95000.0, "date": "2026-05-07"},
        {"id": 5, "name": "SO-2026-005", "customer": "Industria Aceitera", "status": "in_transit", "amount": 125000.0, "date": "2026-05-06"},
    ]
    
    return {
        "success": True,
        "count": len(mock_orders),
        "orders": mock_orders[:limit],
        "source": "mock_data",
        "timestamp": datetime.now().isoformat()
    }

@app.get("/api/orders/by-status/{status}")
def get_orders_by_status(status: str, limit: int = Query(50, ge=1, le=500)):
    """Get orders by status"""
    all_orders = [
        {"id": 1, "name": "SO-2026-001", "customer": "Molino San José", "status": "pending", "amount": 45000.0},
        {"id": 2, "name": "SO-2026-002", "customer": "Export Trading SA", "status": "confirmed", "amount": 78500.0},
        {"id": 3, "name": "SO-2026-003", "customer": "Alimentos Regionales", "status": "delivered", "amount": 52300.0},
        {"id": 4, "name": "SO-2026-004", "customer": "Cooperativa Agraria", "status": "pending", "amount": 95000.0},
    ]
    
    filtered = [o for o in all_orders if o["status"] == status]
    
    return {
        "success": True,
        "count": len(filtered),
        "orders": filtered[:limit],
        "status_filter": status,
        "source": "mock_data"
    }

# ===== AI AGENT ENDPOINTS =====
@app.post("/api/ai/ask")
def ask_ai_agent(question: str = Query(...)):
    """Ask AI agent a question about data"""
    
    responses = {
        "productos": "Tenemos 5 productos principales: Maíz (500 unidades), Trigo (300), Soja (150), Cebada (200) y Girasol (100).",
        "pedidos": "Hay 5 pedidos en total. 2 están pendientes, 1 confirmado, 1 en tránsito y 1 entregado.",
        "transportistas": "Contamos con 5 transportistas y partners logísticos en nuestra red.",
        "ventas": "El monto total de ventas pendientes es de $395,800.00",
        "default": f"Respuesta IA sobre: '{question[:60]}...' - Esta es una respuesta de demostración."
    }
    
    # Simple keyword matching
    question_lower = question.lower()
    answer = responses.get("default")
    
    for key, value in responses.items():
        if key in question_lower:
            answer = value
            break
    
    return {
        "success": True,
        "question": question,
        "answer": answer,
        "source": "mock_ai",
        "timestamp": datetime.now().isoformat()
    }

@app.get("/api/ai/conversation/history")
def get_conversation_history():
    """Get conversation history"""
    return {
        "success": True,
        "history": [],
        "message": "No conversation history yet"
    }

# ===== STARTUP =====
@app.on_event("startup")
async def startup_event():
    """Startup event"""
    print("[STARTUP] Fresh API initialized successfully")
    print("[STARTUP] All inline routes registered")
    print("[STARTUP] Ready to accept requests on port 8084")
    print("[STARTUP] Using mock data source\n")

if __name__ == "__main__":
    import uvicorn
    print("Starting fresh uvicorn server on port 8084...\n")
    uvicorn.run(app, host="0.0.0.0", port=8084)
