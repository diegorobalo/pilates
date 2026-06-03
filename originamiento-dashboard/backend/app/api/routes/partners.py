from fastapi import APIRouter, Query
from app.services.odoo_service import odoo_service

router = APIRouter()


@router.get("/")
def get_partners(limit: int = Query(50, ge=1, le=500)):
    """Get partners (transporters/suppliers) from Odoo"""
    try:
        partners = odoo_service.get_partners(limit=limit)
        return {"count": len(partners), "partners": partners}
    except Exception as e:
        return {
            "error": f"Error fetching partners: {str(e)}", 
            "count": 0, 
            "partners": []
        }


@router.get("/{partner_id}")
def get_partner(partner_id: int):
    """Get a single partner from Odoo"""
    try:
        partner = odoo_service.get_partner(partner_id)
        if partner:
            return {"partner": partner}
        return {"error": "Partner not found", "partner": None}
    except Exception as e:
        return {"error": f"Error fetching partner: {str(e)}", "partner": None}


@router.get("/transporters/list")
def get_transporters(limit: int = Query(50, ge=1, le=500)):
    """Get transporters from Odoo"""
    try:
        transporters = odoo_service.get_transporters(limit=limit)
        return {"count": len(transporters), "transporters": transporters}
    except Exception as e:
        return {
            "error": f"Error fetching transporters: {str(e)}", 
            "count": 0, 
            "transporters": []
        }
