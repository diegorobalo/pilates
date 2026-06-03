#!/usr/bin/env python3
"""
Script para agregar las 3 mejoras al web_server.py
- Mejora 1: Primera conexión con hora exacta
- Mejora 2: Usuarios sin asignar con asignación rápida
- Mejora 3: Actividad mensual con visualización
"""

import os
import re

web_server_path = 'web_server.py'

# Leer el contenido actual
with open(web_server_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Verificar si ya tiene las mejoras
if 'unassigned-users' in content:
    print("✅ Las mejoras ya están agregadas.")
    exit(0)

# Buscar la última línea de la aplicación Flask (antes de if __name__)
last_route_idx = content.rfind('@app.route')
if last_route_idx == -1:
    print("❌ No se encontraron rutas en web_server.py")
    exit(1)

# Encontrar el final de esa función
end_of_function = content.find('\n\n@', last_route_idx)
if end_of_function == -1:
    end_of_function = content.find('\nif __name__', last_route_idx)

# Código para agregar - ENDPOINTS DE MEJORAS
new_endpoints = '''

# ============= MEJORAS INTEGRADAS =============

@app.route('/api/usuarios', methods=['GET'])
@login_required
def get_usuarios():
    """Devuelve lista de usuarios con primera conexión"""
    try:
        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()
        
        cursor.execute("""
            SELECT 
                username, 
                sector,
                first_seen,
                last_seen,
                sessions,
                total_hours,
                mb_in
            FROM users
            ORDER BY last_seen DESC
            LIMIT 50
        """)
        
        usuarios = []
        for row in cursor.fetchall():
            # Extraer hora de first_seen
            first_conn = row[2]
            if first_conn:
                try:
                    from datetime import datetime
                    dt = datetime.strptime(first_conn, '%Y-%m-%d %H:%M:%S')
                    first_time = dt.strftime('%I:%M %p')
                except:
                    first_time = 'N/A'
            else:
                first_time = 'N/A'
            
            usuarios.append({
                'username': row[0],
                'sector': row[1],
                'first_seen': row[2],
                'last_seen': row[3],
                'sessions': row[4],
                'total_hours': row[5],
                'mb_in': row[6],
                'first_connection': first_time
            })
        
        conn.close()
        return jsonify({'usuarios': usuarios})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/unassigned-users', methods=['GET'])
@login_required
def get_unassigned_users():
    """Devuelve usuarios sin sector asignado"""
    try:
        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()
        
        cursor.execute("""
            SELECT 
                username,
                sessions,
                total_hours,
                mb_in,
                first_seen,
                last_seen
            FROM users
            WHERE sector IS NULL OR sector = ''
            ORDER BY last_seen DESC
        """)
        
        users = []
        for row in cursor.fetchall():
            users.append({
                'username': row[0],
                'sessions': row[1],
                'total_hours': float(row[2]) if row[2] else 0,
                'mb_in': float(row[3]) if row[3] else 0,
                'first_seen': row[4],
                'last_seen': row[5]
            })
        
        conn.close()
        return jsonify({'count': len(users), 'users': users})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/set-user-sector', methods=['POST'])
@login_required
def set_user_sector():
    """Asigna un usuario a un sector/departamento"""
    try:
        data = request.get_json()
        username = data.get('username')
        sector = data.get('sector')
        
        if not username or not sector:
            return jsonify({'error': 'Faltan parámetros'}), 400
        
        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()
        
        cursor.execute(
            'UPDATE users SET sector = ? WHERE username = ?',
            (sector, username)
        )
        conn.commit()
        conn.close()
        
        return jsonify({'success': True, 'message': f'Usuario {username} asignado a {sector}'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/monthly-activity', methods=['GET'])
@login_required
def get_monthly_activity():
    """Devuelve actividad mensual para gráfico"""
    try:
        from datetime import datetime, timedelta
        
        conn = sqlite3.connect('vpn_sessions.db')
        cursor = conn.cursor()
        
        # Últimos 30 días
        today = datetime.now()
        thirty_days_ago = today - timedelta(days=30)
        
        cursor.execute("""
            SELECT 
                DATE(connection_time) as fecha,
                COUNT(DISTINCT username) as active_users,
                SUM(CAST((julianday(disconnection_time) - julianday(connection_time)) * 24 AS INTEGER)) as total_hours,
                SUM(CAST(data_downloaded / 1024.0 / 1024.0 / 1024.0 AS FLOAT)) as total_gb
            FROM sessions
            WHERE connection_time >= ?
            GROUP BY DATE(connection_time)
            ORDER BY fecha DESC
        """, (thirty_days_ago.strftime('%Y-%m-%d'),))
        
        daily = []
        total_hours = 0
        total_gb = 0
        days_active = 0
        unique_users = set()
        
        for row in cursor.fetchall():
            hours = row[2] if row[2] else 0
            gb = row[3] if row[3] else 0
            
            daily.append({
                'date': row[0],
                'active_users': row[1],
                'total_hours': float(hours),
                'total_gb': float(gb)
            })
            
            total_hours += hours
            total_gb += gb
            days_active += 1
        
        conn.close()
        
        return jsonify({
            'period': 'Últimos 30 días',
            'daily': daily,
            'summary': {
                'days_with_activity': days_active,
                'unique_users': len(daily),
                'total_hours': float(total_hours),
                'total_gb': float(total_gb)
            }
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500
'''

# Insertar antes del "if __name__"
insert_pos = content.rfind('if __name__')
if insert_pos == -1:
    insert_pos = len(content)

# Insertar el código
new_content = content[:insert_pos] + new_endpoints + '\n\n' + content[insert_pos:]

# Guardar
with open(web_server_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("✅ Mejoras agregadas exitosamente a web_server.py")
print("   - Endpoint /api/usuarios")
print("   - Endpoint /api/unassigned-users")
print("   - Endpoint /api/set-user-sector")
print("   - Endpoint /api/monthly-activity")
