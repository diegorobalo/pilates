#!/usr/bin/env python3
"""Test Odoo and backend connection"""
import os
import sys
import subprocess
import time

# Add backend to path
backend_path = r"C:\Users\diego.robalo\Documents\CLAUDIA\originamiento-dashboard\backend"
sys.path.insert(0, backend_path)

print("=" * 60)
print("TESTING ODOO CONNECTION AND BACKEND")
print("=" * 60)

# Test 1: Check environment variables
print("\n[1] Checking environment variables...")
from dotenv import load_dotenv
load_dotenv(os.path.join(backend_path, ".env"))

ODOO_URL = os.getenv('ODOO_URL')
ODOO_USER = os.getenv('ODOO_USER')
ODOO_DB = os.getenv('ODOO_DB')

print(f"   ODOO_URL: {ODOO_URL}")
print(f"   ODOO_USER: {ODOO_USER}")
print(f"   ODOO_DB: {ODOO_DB}")

if not all([ODOO_URL, ODOO_USER, ODOO_DB]):
    print("   ❌ Missing environment variables!")
    sys.exit(1)
print("   ✓ Environment variables OK")

# Test 2: Test Odoo XML-RPC connection
print("\n[2] Testing Odoo XML-RPC connection...")
try:
    from odoo_service import get_odoo_service
    odoo = get_odoo_service()
    print(f"   UID: {odoo.uid}")
    if odoo.uid:
        print("   ✓ Odoo authentication successful")
    else:
        print("   ❌ Odoo authentication failed")
        sys.exit(1)
except Exception as e:
    print(f"   ❌ Error: {e}")
    import traceback
    traceback.print_exc()
    sys.exit(1)

# Test 3: Query some data
print("\n[3] Testing Odoo queries...")
try:
    # Test partners
    partners = odoo.search_read('res.partner', [], ['id', 'name'], limit=5)
    print(f"   Partners found: {len(partners)}")
    if partners:
        print(f"   First partner: {partners[0]}")
    
    # Test products
    products = odoo.search_read('product.product', [], ['id', 'name'], limit=5)
    print(f"   Products found: {len(products)}")
    if products:
        print(f"   First product: {products[0]}")
    
    # Test sales orders
    orders = odoo.search_read('sale.order', [], ['id', 'name'], limit=5)
    print(f"   Sales orders found: {len(orders)}")
    
    print("   ✓ Queries executed successfully")
except Exception as e:
    print(f"   ❌ Error querying data: {e}")
    import traceback
    traceback.print_exc()

print("\n[4] Starting FastAPI backend...")
print("   Command: uvicorn main:app --host 0.0.0.0 --port 8000 --reload")
print("   Navigate to: http://localhost:8000/docs")
print("-" * 60)

# Start the FastAPI server
try:
    subprocess.run(
        ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"],
        cwd=backend_path
    )
except KeyboardInterrupt:
    print("\nServer stopped.")
except Exception as e:
    print(f"Error starting server: {e}")
    sys.exit(1)
