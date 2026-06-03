import os
import xmlrpc.client
import ssl
from typing import List, Dict, Any
import logging

logger = logging.getLogger(__name__)

# Disable SSL certificate verification
ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

class OdooService:
    def __init__(self):
        self.url = os.getenv('ODOO_URL', 'https://odoo-originamiento.argensun.com.ar')
        self.user = os.getenv('ODOO_USER', 'diego.robalo@argensun.com.ar')
        self.password = os.getenv('ODOO_PASSWORD', 'Arge1205')
        self.db = os.getenv('ODOO_DB', 'originamiento')
        
        # Remove trailing slashes
        self.url = self.url.rstrip('/')
        
        self.uid = None
        self.authenticate()

    def authenticate(self) -> bool:
        """Authenticate with Odoo using XML-RPC"""
        try:
            logger.info(f"Attempting to authenticate with Odoo at {self.url}")
            logger.info(f"Database: {self.db}, User: {self.user}")
            
            common = xmlrpc.client.ServerProxy(
                f'{self.url}/xmlrpc/2/common',
                context=ssl_context,
                allow_none=True
            )
            
            self.uid = common.authenticate(self.db, self.user, self.password, {})
            
            if self.uid:
                logger.info(f"✓ Successfully authenticated with Odoo as {self.user} (uid: {self.uid})")
                return True
            else:
                logger.warning("✗ Authentication returned no UID - credentials may be invalid")
                return False
        except Exception as e:
            logger.error(f"✗ Odoo authentication failed: {type(e).__name__}: {str(e)}")
            return False

    def search_read(self, model: str, domain: List = None, fields: List = None, limit: int = None) -> List[Dict]:
        """
        Search and read records from Odoo using XML-RPC
        """
        try:
            if not self.uid:
                logger.warning(f"Not authenticated with Odoo - cannot search {model}")
                return []
            
            if domain is None:
                domain = []
            if fields is None:
                fields = []

            models = xmlrpc.client.ServerProxy(
                f'{self.url}/xmlrpc/2/object',
                context=ssl_context,
                allow_none=True
            )
            
            # Search for record IDs
            search_kwargs = {}
            if limit:
                search_kwargs['limit'] = limit
            
            ids = models.execute_kw(
                self.db, self.uid, self.password,
                model, 'search',
                [domain],
                search_kwargs
            )
            
            if not ids:
                logger.debug(f"No records found for {model} with domain {domain}")
                return []
            
            # Read the records
            read_kwargs = {}
            if fields:
                read_kwargs['fields'] = fields
            
            records = models.execute_kw(
                self.db, self.uid, self.password,
                model, 'read',
                [ids],
                read_kwargs
            )
            
            logger.debug(f"Retrieved {len(records)} records from {model}")
            return records if records else []
        except Exception as e:
            logger.error(f"Error searching {model}: {type(e).__name__}: {str(e)}")
            return []

    def get_establecimientos(self) -> List[Dict]:
        """Get all establishments"""
        try:
            logger.info("Fetching establecimientos...")
            domain = [['is_company', '=', True]]
            fields = ['id', 'name', 'city', 'phone', 'email', 'type']
            records = self.search_read('res.partner', domain, fields, limit=100)
            logger.info(f"Retrieved {len(records)} establecimientos")
            return records
        except Exception as e:
            logger.error(f"Error fetching establecimientos: {str(e)}")
            return []

    def get_productos(self) -> List[Dict]:
        """Get all products"""
        try:
            logger.info("Fetching productos...")
            fields = ['id', 'name', 'default_code', 'list_price', 'qty_available']
            records = self.search_read('product.product', [], fields, limit=100)
            logger.info(f"Retrieved {len(records)} productos")
            return records
        except Exception as e:
            logger.error(f"Error fetching productos: {str(e)}")
            return []

    def get_contactos(self) -> List[Dict]:
        """Get all contacts"""
        try:
            logger.info("Fetching contactos...")
            domain = [['is_company', '=', False]]
            fields = ['id', 'name', 'email', 'phone', 'function']
            records = self.search_read('res.partner', domain, fields, limit=100)
            logger.info(f"Retrieved {len(records)} contactos")
            return records
        except Exception as e:
            logger.error(f"Error fetching contactos: {str(e)}")
            return []

    def get_oportunidades(self) -> List[Dict]:
        """Get all opportunities"""
        try:
            logger.info("Fetching oportunidades...")
            fields = ['id', 'name', 'partner_id', 'probability', 'expected_revenue']
            records = self.search_read('crm.lead', [], fields, limit=100)
            logger.info(f"Retrieved {len(records)} oportunidades")
            return records
        except Exception as e:
            logger.warning(f"CRM module may not be installed: {str(e)}")
            return []

    def get_ordenes_venta(self) -> List[Dict]:
        """Get all sales orders"""
        try:
            logger.info("Fetching ordenes de venta...")
            fields = ['id', 'name', 'partner_id', 'state', 'amount_total', 'date_order']
            records = self.search_read('sale.order', [], fields, limit=100)
            logger.info(f"Retrieved {len(records)} ordenes de venta")
            return records
        except Exception as e:
            logger.error(f"Error fetching ordenes de venta: {str(e)}")
            return []

    def get_ordenes_compra(self) -> List[Dict]:
        """Get all purchase orders"""
        try:
            logger.info("Fetching ordenes de compra...")
            fields = ['id', 'name', 'partner_id', 'state', 'amount_total', 'date_order']
            records = self.search_read('purchase.order', [], fields, limit=100)
            logger.info(f"Retrieved {len(records)} ordenes de compra")
            return records
        except Exception as e:
            logger.error(f"Error fetching ordenes de compra: {str(e)}")
            return []

    def get_lotes(self) -> List[Dict]:
        """Get all batches/lots"""
        try:
            logger.info("Fetching lotes...")
            fields = ['id', 'name', 'product_id', 'quantity']
            records = self.search_read('stock.production.lot', [], fields, limit=100)
            logger.info(f"Retrieved {len(records)} lotes")
            return records
        except Exception as e:
            logger.warning(f"Error fetching lotes: {str(e)}")
            return []

# Create a singleton instance
_odoo_service = None

def get_odoo_service() -> OdooService:
    """Get or create the Odoo service instance"""
    global _odoo_service
    if _odoo_service is None:
        _odoo_service = OdooService()
    return _odoo_service
