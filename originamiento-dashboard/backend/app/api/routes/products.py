from fastapi import APIRouter, Query
from app.services.odoo_service import odoo_service

router = APIRouter()


@router.get("/")
def get_products(limit: int = Query(50, ge=1, le=500)):
    """Get products from Odoo"""
    try:
        products = odoo_service.get_products(limit=limit)
        return {"count": len(products), "products": products}
    except Exception as e:
        return {
            "error": f"Error fetching products: {str(e)}", 
            "count": 0, 
            "products": []
        }


@router.get("/{product_id}")
def get_product(product_id: int):
    """Get a single product from Odoo"""
    try:
        product = odoo_service.get_product(product_id)
        if product:
            return {"product": product}
        return {"error": "Product not found", "product": None}
    except Exception as e:
        return {"error": f"Error fetching product: {str(e)}", "product": None}


@router.get("/low-stock/list")
def get_low_stock_products(threshold: int = Query(10, ge=1)):
    """Get low stock products"""
    try:
        products = odoo_service.get_low_stock_products(threshold=threshold)
        return {"count": len(products), "products": products}
    except Exception as e:
        return {
            "error": f"Error fetching low stock products: {str(e)}", 
            "count": 0, 
            "products": []
        }


@router.post("/sync")
def sync_products():
    """Sync products from Odoo"""
    try:
        result = odoo_service.sync_products()
        return {"message": "Products synced successfully", "result": result}
    except Exception as e:
        return {"error": f"Error syncing products: {str(e)}"}
