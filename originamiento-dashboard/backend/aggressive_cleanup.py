#!/usr/bin/env python3
"""
Aggressive cleanup and restart script for backend
Removes Python bytecode cache and restarts fresh
"""
import os
import sys
import shutil
import subprocess
import time

print("=" * 60)
print("AGGRESSIVE BACKEND CLEANUP AND RESTART")
print("=" * 60)

backend_path = r"C:\Users\diego.robalo\Documents\CLAUDIA\originamiento-dashboard\backend"

# Step 1: Try to kill all Python processes using taskkill
print("\n[1/5] Killing all Python processes...")
try:
    result = subprocess.run(["taskkill", "/F", "/IM", "python.exe"], 
                          capture_output=True, text=True)
    if "successfully" in result.stdout.lower() or "SUCCESS" in result.stdout:
        print(f"  Processes killed: {result.stdout}")
    time.sleep(2)
except Exception as e:
    print(f"  No processes to kill or already killed: {e}")

# Step 2: Remove all __pycache__ directories
print("\n[2/5] Removing __pycache__ directories...")
cache_removed = 0
for root, dirs, files in os.walk(backend_path):
    if "__pycache__" in dirs:
        cache_path = os.path.join(root, "__pycache__")
        try:
            shutil.rmtree(cache_path, ignore_errors=True)
            cache_removed += 1
            print(f"  Removed: {cache_path}")
        except Exception as e:
            print(f"  Error removing {cache_path}: {e}")
print(f"  Total removed: {cache_removed}")

# Step 3: Remove all .pyc files
print("\n[3/5] Removing .pyc files...")
pyc_removed = 0
for root, dirs, files in os.walk(backend_path):
    for file in files:
        if file.endswith('.pyc'):
            pyc_path = os.path.join(root, file)
            try:
                os.remove(pyc_path)
                pyc_removed += 1
            except Exception as e:
                print(f"  Error removing {pyc_path}: {e}")
print(f"  Total removed: {pyc_removed}")

# Step 4: Clear environment variables that might cache imports
print("\n[4/5] Clearing Python environment...")
for key in ['PYTHONDONTWRITEBYTECODE', 'PYTHONHASHSEED', 'PYTHONUNBUFFERED']:
    if key in os.environ:
        del os.environ[key]
print("  Environment cleared")

# Step 5: Restart the backend
print("\n[5/5] Starting backend with fresh Python interpreter...")
print("=" * 60)
os.chdir(backend_path)
print(f"Current directory: {os.getcwd()}")
print(f"Executing: python run.py")
print("=" * 60)
print()

# Run the backend process
result = subprocess.run([sys.executable, "run.py"])
sys.exit(result.returncode)
