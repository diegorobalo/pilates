#!/usr/bin/env python3
"""
Force restart the backend by killing old processes and starting fresh
"""
import os
import shutil
import subprocess
import sys
import time

backend_path = os.path.dirname(os.path.abspath(__file__))

print("=" * 70)
print("🔄 BACKEND RESTART SCRIPT")
print("=" * 70)

# Step 1: Kill existing Python processes that might be running the backend
print("\n1️⃣  Killing old backend processes...")
try:
    # Try to kill any Python processes (this is a brute force approach)
    os.system("taskkill /F /IM python.exe /T 2>nul || echo No Python processes to kill")
    time.sleep(1)
    print("   ✓ Old processes terminated")
except Exception as e:
    print(f"   ⚠ Could not kill processes: {e}")

# Step 2: Clean up Python cache
print("\n2️⃣  Cleaning Python cache...")
for root, dirs, files in os.walk(backend_path):
    # Remove __pycache__ directories
    if "__pycache__" in dirs:
        cache_path = os.path.join(root, "__pycache__")
        print(f"   Removing: {cache_path}")
        try:
            shutil.rmtree(cache_path, ignore_errors=True)
        except Exception as e:
            print(f"   ⚠ Error: {e}")
    
    # Remove .pyc files
    for file in files:
        if file.endswith(".pyc"):
            pyc_path = os.path.join(root, file)
            try:
                os.remove(pyc_path)
            except Exception as e:
                pass

print("   ✓ Cache cleaned")

# Step 3: Start fresh backend
print("\n3️⃣  Starting fresh backend server...")
print("   " + "=" * 60)

os.chdir(backend_path)
time.sleep(1)

try:
    # Start uvicorn with full path to ensure fresh Python interpreter
    cmd = [
        sys.executable, "-m", "uvicorn",
        "main:app",
        "--host", "0.0.0.0",
        "--port", "8083",
        "--reload",
        "--log-level", "info"
    ]
    
    print(f"   Running: {' '.join(cmd)}\n")
    subprocess.run(cmd)
    
except KeyboardInterrupt:
    print("\n\n⚠️  Server stopped by user")
    sys.exit(0)
except Exception as e:
    print(f"\n✗ Error starting server: {e}")
    sys.exit(1)
