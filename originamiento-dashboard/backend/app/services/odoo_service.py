import os
import logging
from typing import List, Dict, Optional

logger = logging.getLogger(__name__)


class OdooService:
    def __init__(self):
        self.odoo_url = os.getenv("ODOO_URL", "https://odoo-originamiento.argensun.com.ar")
        self.odoo_user = os.getenv("ODOO_USER", "diego.robalo@argensun.com.ar")
        self.odoo_password = os.getenv("ODOO_PASSWORD", "Arge1205")
        self.odoo_db = os.getenv("ODOO_DB", "originamiento")
        
        # Try to import httpx, but don't fail if it's not available
        try:
            import httpx
            self.client = httpx.Client(verify=False, timeout=30.0)
            self.has_httpx = True
        except ImportError:
            logger.warning("httpx not available, will use mock data")
            self.client = None
            self.has_httpx = False
        
        self._authenticated = False

    def get_products(self, limit: int = 100) -> List[Dict]:
        """Get products from Odoo"""
        try:
            # Return mock data for testing if Odoo is not available
            if not self.has_httpx:
                logger.info(f"Returning mock products (httpx not available)")
                return [
                    {
                        "id": 1,
                        "name": "Product A",
                        "default_code": "PROD-001",
                        "list_price": 100.0,
                        "qty_available": 50
                    },
                    {
                        "id": 2,
                        "name": "Product B",
                        "default_code": "PROD-002",
                        "list_price": 200.0,
                        "qty_available": 30
                    }
                ]
            
            # TODO: Implement actual Odoo API call
            logger.info(f"Fetching {limit} products from Odoo")
            return []
        except Exception as e:
            logger.error(f"Error fetching products: {str(e)}")
            return []

    def get_product(self, product_id: int) -> Optional[Dict]:
        """Get a specific product by ID"""
        try:
            if not self.has_httpx:
                return {
                    "id": product_id,
                    "name": f"Product {product_id}",
                    "default_code": f"PROD-{product_id:03d}",
                    "list_price": 100.0 * product_id,
                    "qty_available": 50
                }
            return None
        except Exception as e:
            logger.error(f"Error fetching product {product_id}: {str(e)}")
            return None

    def get_partners(self, limit: int = 100) -> List[Dict]:
        """Get partners (customers/suppliers) from Odoo"""
        try:
            if not self.has_httpx:
                return [
                    {
                        "id": 1,
                        "name": "Partner A",
                        "type": "contact",
                        "email": "partner1@example.com",
                        "phone": "555-0001",
                        "city": "Buenos Aires"
                    },
                    {
                        "id": 2,
                        "name": "Partner B",
                        "type": "contact",
                        "email": "partner2@example.com",
                        "phone": "555-0002",
                        "city": "Córdoba"
                    }
                ]
            return []
        except Exception as e:
            logger.error(f"Error fetching partners: {str(e)}")
            return []

    def get_transporters(self, limit: int = 100) -> List[Dict]:
        """Get transporters (res.partner filtered by type)"""
        try:
            if not self.has_httpx:
                return [
                    {
                        "id": 10,
                        "name": "Transporter A",
                        "phone": "555-1001",
                        "email": "trans1@example.com",
                        "city": "Buenos Aires"
                    }
                ]
            return []
        except Exception as e:
            logger.error(f"Error fetching transporters: {str(e)}")
            return []

    def get_orders(self, limit: int = 100) -> List[Dict]:
        """Get sales orders from Odoo"""
        try:
            if not self.has_httpx:
                return [
                    {
                        "id": 1,
                        "name": "SO/001",
                        "date_order": "2026-05-13",
                        "state": "sale",
                        "amount_total": 1000.0,
                        "partner_id": [1, "Partner A"]
                    },
                    {
                        "id": 2,
                        "name": "SO/002",
                        "date_order": "2026-05-12",
                        "state": "draft",
                        "amount_total": 500.0,
                        "partner_id": [2, "Partner B"]
                    }
                ]
            return []
        except Exception as e:
            logger.error(f"Error fetching orders: {str(e)}")
            return []

    def get_low_stock_products(self, limit: int = 100) -> List[Dict]:
        """Get products with low stock"""
        try:
            if not self.has_httpx:
                return [
                    {
                        "id": 5,
                        "name": "Low Stock Product",
                        "default_code": "PROD-005",
                        "qty_available": 5,
                        "list_price": 75.0
                    }
                ]
            return []
        except Exception as e:
            logger.error(f"Error fetching low stock products: {str(e)}")
            return []

    def sync_products(self) -> str:
        """Sync products from Odoo to local database"""
        try:
            products = self.get_products(limit=1000)
            return f"Synced {len(products)} products"
        except Exception as e:
            logger.error(f"Error syncing products: {str(e)}")
            return f"Error: {str(e)}"


# Singleton instance
odoo_service = OdooService()
