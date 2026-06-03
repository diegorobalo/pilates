#!/usr/bin/env python3
"""
Cleanup script to remove Python cache files and start the backend
"""
import os
import shutil
import subprocess
import sys

backend_path = os.path.dirname(os.path.abspath(__file__))

print("🧹 Cleaning up Python cache files...")

# Find and remove all __pycache__ directories
for root, dirs, files in os.walk(backend_path):
    if "__pycache__" in dirs:
        cache_path = os.path.join(root, "__pycache__")
        print(f"  Removing: {cache_path}")
        try:
            shutil.rmtree(cache_path, ignore_errors=True)
        except Exception as e:
            print(f"  Error removing {cache_path}: {e}")

# Find and remove all .pyc files
for root, dirs, files in os.walk(backend_path):
    for file in files:
        if file.endswith(".pyc"):
            pyc_path = os.path.join(root, file)
            print(f"  Removing: {pyc_path}")
            try:
                os.remove(pyc_path)
            except Exception as e:
                print(f"  Error removing {pyc_path}: {e}")

print("✓ Cleanup complete")
print("\n🚀 Starting FastAPI server on port 8083...")
print("=" * 60)

# Start the uvicorn server
try:
    os.chdir(backend_path)
    subprocess.run([
        sys.executable, "-m", "uvicorn",
        "main:app",
        "--host", "0.0.0.0",
        "--port", "8083",
        "--reload"
    ])
except KeyboardInterrupt:
    print("\n⚠ Server stopped")
except Exception as e:
    print(f"\n✗ Error starting server: {e}")
    sys.exit(1)
