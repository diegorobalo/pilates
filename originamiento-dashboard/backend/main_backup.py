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

# ===== PRODUCTS ENDPOINTS =====
@app.get("/api/products")
def get_products(limit: int = Query(50, ge=1, le=500)):
    """Get products from backend"""
    print(f"[GET /api/products] Called with limit={limit}")
    
    # Mock data for now
    mock_products = [
        {"id": 1, "name": "Product 1", "price": 100.0, "qty": 50},
        {"id": 2, "name": "Product 2", "price": 200.0, "qty": 30},
        {"id": 3, "name": "Product 3", "price": 150.0, "qty": 100},
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
    print(f"[GET /api/products/{product_id}]")
    
    if product_id <= 0:
        raise HTTPException(status_code=400, detail="Invalid product ID")
    
    return {
        "success": True,
        "product": {
            "id": product_id,
            "name": f"Product {product_id}",
            "price": 100.0 * product_id,
            "qty": 50
        },
        "source": "mock_data"
    }

# ===== PARTNERS ENDPOINTS =====
@app.get("/api/partners")
def get_partners(limit: int = Query(50, ge=1, le=500)):
    """Get partners/transportistas"""
    print(f"[GET /api/partners] Called with limit={limit}")
    
    mock_partners = [
        {"id": 1, "name": "Transportista A", "type": "transporter"},
        {"id": 2, "name": "Transportista B", "type": "transporter"},
        {"id": 3, "name": "Proveedor C", "type": "supplier"},
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
    print(f"[GET /api/orders] Called with limit={limit}")
    
    mock_orders = [
        {"id": 1, "name": "SO-001", "customer": "Customer A", "status": "pending", "amount": 1000.0},
        {"id": 2, "name": "SO-002", "customer": "Customer B", "status": "confirmed", "amount": 2000.0},
        {"id": 3, "name": "SO-003", "customer": "Customer C", "status": "delivered", "amount": 1500.0},
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
    print(f"[POST /api/ai/ask] Question: {question}")
    
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
