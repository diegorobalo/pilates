"""
Originamiento Dashboard API
Fresh restart with inline route definitions to bypass module caching
"""
from fastapi import FastAPI, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

print("=" * 60)
print("BACKEND STARTING - INLINE ROUTES (FRESH START)")
print("=" * 60)

app = FastAPI(
    title="Originamiento Dashboard API",
    description="API for Originamiento Dashboard with Odoo integration and AI agent",
    version="1.0.0"
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
        "version": "1.0.0",
        "docs": "/docs",
        "status": "operational",
        "timestamp": datetime.now().isoformat(),
        "fresh_start": True
    }

# ===== HEALTH ENDPOINT =====
@app.get("/health")
def health():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "originamiento-dashboard-api",
        "version": "1.0.0",
        "timestamp": datetime.now().isoformat()
    }

# ===== AUTHENTICATION ENDPOINTS =====
@app.post("/api/auth/login")
def login(username: str = Query(...), password: str = Query(...)):
    """Login endpoint - accepts demo/demo123"""
    if username == "demo" and password == "demo123":
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
        raise HTTPException(status_code=401, detail="Credenciales inválidas. Intenta con demo/demo123")

@app.get("/api/auth/me")
def get_current_user(token: str = Query(None)):
    """Get current user info"""
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
    raise HTTPException(status_code=401, detail="Invalid token")

# ===== PRODUCTS ENDPOINTS =====
@app.get("/api/products")
def get_products(limit: int = Query(50, ge=1, le=500)):
    """Get products from backend"""
    mock_products = [
        {"id": 1, "name": "Maíz Premium", "price": 250.0, "qty": 500, "sku": "CORN-001"},
        {"id": 2, "name": "Trigo Candeal", "price": 180.0, "qty": 300, "sku": "WHEAT-001"},
        {"id": 3, "name": "Soja Transgénica", "price": 380.0, "qty": 150, "sku": "SOJA-001"},
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
        {"id": 1, "name": "SO-2026-001", "customer": "Molino San José", "status": "pending", "amount": 45000.0},
        {"id": 2, "name": "SO-2026-002", "customer": "Export Trading SA", "status": "confirmed", "amount": 78500.0},
        {"id": 3, "name": "SO-2026-003", "customer": "Alimentos Regionales", "status": "delivered", "amount": 52300.0},
    ]
    
    return {
        "success": True,
        "count": len(mock_orders),
        "orders": mock_orders[:limit],
        "source": "mock_data",
        "timestamp": datetime.now().isoformat()
    }

# ===== AI AGENT ENDPOINTS =====
@app.post("/api/ai/ask")
def ask_ai_agent(question: str = Query(...)):
    """Ask AI agent a question about data"""
    return {
        "success": True,
        "question": question,
        "answer": f"Respuesta IA sobre: {question[:50]}...",
        "source": "mock_ai",
        "timestamp": datetime.now().isoformat()
    }

# ===== STARTUP =====
@app.on_event("startup")
async def startup_event():
    """Startup event"""
    print("[STARTUP] API initialized successfully")
    print("[STARTUP] All inline routes registered")
    print("[STARTUP] Ready to accept requests on port 8083\n")

if __name__ == "__main__":
    import uvicorn
    print("Starting uvicorn server...")
    uvicorn.run(app, host="0.0.0.0", port=8083)
