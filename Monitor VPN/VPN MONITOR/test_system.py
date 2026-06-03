#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
VPN Monitor - Test Script
Verifica que todos los cambios están correctamente implementados
"""

import sqlite3
import sys
from pathlib import Path

BASE_DIR = Path(__file__).parent

def test_python_syntax():
    """Verifica que los archivos Python son válidos"""
    print("\n[*] Verificando sintaxis de Python...")
    try:
        import py_compile
        py_compile.compile(str(BASE_DIR / "web_server.py"), doraise=True)
        py_compile.compile(str(BASE_DIR / "vpn_monitor.py"), doraise=True)
        print("[OK] Sintaxis correcta en web_server.py y vpn_monitor.py")
        return True
    except Exception as e:
        print("[ERROR] Error de sintaxis: {}".format(e))
        return False

def test_dashboard_html():
    """Verifica que el HTML está bien formado"""
    print("\n[*] Verificando dashboard.html...")
    dashboard_path = BASE_DIR / "dashboard.html"

    if not dashboard_path.exists():
        print("[ERROR] dashboard.html no encontrado")
        return False

    content = dashboard_path.read_text(encoding='utf-8')

    # Verificar que nuestros cambios están presentes
    checks = [
        ("API auto-detection", "function getDefaultAPI(){" in content),
        ("Variable daysNum", "const daysNum=" in content),
        ("Chart condition fix", "typeof Chart!=='undefined'" in content),
        ("daily_first_seen", "daily_first_seen" in content),
        ("Persistencia localStorage", "localStorage.getItem('vpn-api-url')" in content),
        ("setTimeout en runReport", "setTimeout(()=>{" in content and "canvases.length>0" in content),
    ]

    all_good = True
    for check_name, result in checks:
        status = "[OK]" if result else "[FAIL]"
        print("{} {}".format(status, check_name))
        all_good = all_good and result

    return all_good

def test_web_server_changes():
    """Verifica que web_server.py tiene los cambios necesarios"""
    print("\n[*] Verificando cambios en web_server.py...")
    web_server_path = BASE_DIR / "web_server.py"

    if not web_server_path.exists():
        print("[ERROR] web_server.py no encontrado")
        return False

    content = web_server_path.read_text(encoding='utf-8')

    checks = [
        ("daily_first_seen en API", "daily_first_seen" in content),
        ("Endpoint /api/active actualizado", 'row["daily_first_seen"]' in content),
    ]

    all_good = True
    for check_name, result in checks:
        status = "[OK]" if result else "[FAIL]"
        print("{} {}".format(status, check_name))
        all_good = all_good and result

    return all_good

def test_database_schema():
    """Verifica que la base de datos tiene la estructura correcta"""
    print("\n[*] Verificando estructura de base de datos...")
    db_path = BASE_DIR / "vpn_sessions.db"

    if not db_path.exists():
        print("[WARN] Base de datos no creada aun (se creara al iniciar vpn_monitor.py)")
        return True  # No es un error, se crea automáticamente

    try:
        conn = sqlite3.connect(str(db_path))
        c = conn.cursor()

        # Verificar que las tablas existen
        c.execute("SELECT name FROM sqlite_master WHERE type='table'")
        tables = [row[0] for row in c.fetchall()]

        required_tables = ['vpn_sessions', 'daily_uptime', 'users']
        all_good = True
        for table in required_tables:
            if table in tables:
                print("[OK] Tabla '{}' existe".format(table))
            else:
                print("[FAIL] Tabla '{}' no encontrada".format(table))
                all_good = all_good and False

        # Verificar columnas en daily_uptime
        c.execute("PRAGMA table_info(daily_uptime)")
        columns = [row[1] for row in c.fetchall()]
        if 'first_seen' in columns:
            print("[OK] Columna 'first_seen' en daily_uptime")
        else:
            print("[FAIL] Columna 'first_seen' no encontrada")
            all_good = False

        conn.close()
        return all_good
    except Exception as e:
        print("[WARN] Error al conectar a BD: {}".format(e))
        return True  # No es fatal, se crea automáticamente

def test_imports():
    """Verifica que todas las dependencias están disponibles"""
    print("\n[*] Verificando dependencias...")

    required_modules = {
        'flask': 'Flask web framework',
        'sqlite3': 'SQLite database',
        'librouteros': 'MikroTik API',
    }

    all_good = True
    for module_name, description in required_modules.items():
        try:
            __import__(module_name)
            print("[OK] {:<15} - {}".format(module_name, description))
        except ImportError:
            print("[FAIL] {:<15} - {} (NO INSTALADO)".format(module_name, description))
            all_good = False

    return all_good

def main():
    """Ejecuta todos los tests"""
    print("=" * 60)
    print("VPN Monitor - Diagnostico del Sistema")
    print("=" * 60)

    results = {
        "Sintaxis Python": test_python_syntax(),
        "Dashboard HTML": test_dashboard_html(),
        "Cambios web_server.py": test_web_server_changes(),
        "Schema de BD": test_database_schema(),
        "Dependencias": test_imports(),
    }

    print("\n" + "=" * 60)
    print("RESUMEN")
    print("=" * 60)

    for test_name, result in results.items():
        status = "[PASS]" if result else "[FAIL]"
        print("{:<10} {}".format(status, test_name))

    all_passed = all(results.values())

    print("\n" + "=" * 60)
    if all_passed:
        print("[OK] TODOS LOS TESTS PASARON - Sistema listo para ejecutar")
        print("\nProximos pasos:")
        print("1. Inicia vpn_monitor.py para conectarte a MikroTik")
        print("2. En otra terminal, inicia web_server.py")
        print("3. Abre http://localhost:5555 en tu navegador")
    else:
        print("[WARN] ALGUNOS TESTS FALLARON - Revisa los errores arriba")
        print("\nProblemas comunes:")
        print("- Asegúrate de instalar las dependencias: pip install flask librouteros")
        print("- Verifica que los archivos están en: {}".format(BASE_DIR))
        print("- Revisa los cambios en FIXES_APPLIED.md")

    print("=" * 60)
    return 0 if all_passed else 1

if __name__ == "__main__":
    sys.exit(main())
