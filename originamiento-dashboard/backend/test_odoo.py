#!/usr/bin/env python3
"""
Test script to verify Odoo connection
"""
import xmlrpc.client
import ssl
from dotenv import load_dotenv
import os

load_dotenv()

ODOO_URL = os.getenv('ODOO_URL', 'https://odoo-originamiento.argensun.com.ar')
ODOO_USER = os.getenv('ODOO_USER', 'demo@example.com')
ODOO_PASSWORD = os.getenv('ODOO_PASSWORD', 'demo')
ODOO_DB = os.getenv('ODOO_DB', 'originamiento')

print("=" * 60)
print("ODOO CONNECTION TEST")
print("=" * 60)
print(f"URL: {ODOO_URL}")
print(f"Database: {ODOO_DB}")
print(f"User: {ODOO_USER}")
print("=" * 60)

# Disable SSL certificate verification for testing
context = ssl.create_default_context()
context.check_hostname = False
context.verify_mode = ssl.CERT_NONE

try:
    print("\n1. Testing common endpoint...")
    common = xmlrpc.client.ServerProxy(
        f'{ODOO_URL}/xmlrpc/2/common',
        context=context,
        allow_none=True
    )
    
    print("   Attempting authentication...")
    uid = common.authenticate(ODOO_DB, ODOO_USER, ODOO_PASSWORD, {})
    
    if uid:
        print(f"   ✓ Authentication successful! UID: {uid}")
    else:
        print(f"   ✗ Authentication failed - returned {uid}")
        exit(1)
    
    print("\n2. Testing models endpoint...")
    models = xmlrpc.client.ServerProxy(
        f'{ODOO_URL}/xmlrpc/2/object',
        context=context,
        allow_none=True
    )
    
    print("   Searching for partners...")
    partner_ids = models.execute_kw(
        ODOO_DB, uid, ODOO_PASSWORD,
        'res.partner', 'search',
        [[]],
        {'limit': 5}
    )
    print(f"   ✓ Found {len(partner_ids)} partners: {partner_ids}")
    
    if partner_ids:
        print("\n3. Reading partner details...")
        partners = models.execute_kw(
            ODOO_DB, uid, ODOO_PASSWORD,
            'res.partner', 'read',
            [partner_ids],
            {'fields': ['id', 'name', 'email', 'phone']}
        )
        print(f"   ✓ Successfully read {len(partners)} partners")
        for partner in partners[:3]:
            print(f"     - {partner.get('name')} ({partner.get('email')})")
    
    print("\n4. Searching for products...")
    product_ids = models.execute_kw(
        ODOO_DB, uid, ODOO_PASSWORD,
        'product.product', 'search',
        [[]],
        {'limit': 5}
    )
    print(f"   ✓ Found {len(product_ids)} products: {product_ids[:5]}")
    
    print("\n" + "=" * 60)
    print("✓ ALL TESTS PASSED - Odoo connection is working!")
    print("=" * 60)

except Exception as e:
    print(f"\n✗ ERROR: {type(e).__name__}")
    print(f"  Message: {str(e)}")
    print("\n" + "=" * 60)
    print("CONNECTION FAILED")
    print("=" * 60)
    import traceback
    traceback.print_exc()
