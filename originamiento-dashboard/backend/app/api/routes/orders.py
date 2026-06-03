from fastapi import APIRouter, Query
from app.services.odoo_service import odoo_service

router = APIRouter()


@router.get("/")
def get_orders(limit: int = Query(50, ge=1, le=500)):
    """Get sales orders from Odoo"""
    try:
        orders = odoo_service.get_orders(limit=limit)
        return {"count": len(orders), "orders": orders}
    except Exception as e:
        return {
            "error": f"Error fetching orders: {str(e)}", 
            "count": 0, 
            "orders": []
        }


@router.get("/{order_id}")
def get_order(order_id: int):
    """Get a single sales order from Odoo"""
    try:
        order = odoo_service.get_order(order_id)
        if order:
            return {"order": order}
        return {"error": "Order not found", "order": None}
    except Exception as e:
        return {"error": f"Error fetching order: {str(e)}", "order": None}


@router.get("/by-status/{status}")
def get_orders_by_status(
    status: str,
    limit: int = Query(50, ge=1, le=500)
):
    """Get orders filtered by status"""
    try:
        orders = odoo_service.get_orders_by_status(status, limit=limit)
        return {"count": len(orders), "orders": orders, "status": status}
    except Exception as e:
        return {
            "error": f"Error fetching orders: {str(e)}", 
            "count": 0, 
            "orders": [],
            "status": status
        }
