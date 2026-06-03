# AGREGAR ESTO AL FINAL DE web_server.py, ANTES DE app.run()

@app.route('/api/unassigned-users', methods=['GET'])
@login_required
def get_unassigned_users():
    try:
        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()
        cursor.execute("""
            SELECT username, sessions, total_hours, mb_in, first_seen, last_seen
            FROM users WHERE sector IS NULL OR sector = '' ORDER BY last_seen DESC
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
    try:
        data = request.get_json()
        username = data.get('username')
        sector = data.get('sector')
        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()
        cursor.execute('UPDATE users SET sector = ? WHERE username = ?', (sector, username))
        conn.commit()
        conn.close()
        return jsonify({'success': True, 'message': f'Usuario {username} asignado a {sector}'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/monthly-activity', methods=['GET'])
@login_required
def get_monthly_activity():
    try:
        from datetime import datetime, timedelta
        conn = sqlite3.connect('vpn_sessions.db')
        cursor = conn.cursor()
        today = datetime.now()
        thirty_days_ago = today - timedelta(days=30)
        cursor.execute("""
            SELECT DATE(connection_time) as fecha,
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
        conn.close()
        return jsonify({
            'period': 'Últimos 30 días',
            'daily': daily,
            'summary': {
                'days_with_activity': len(daily),
                'unique_users': len(daily),
                'total_hours': float(total_hours),
                'total_gb': float(total_gb)
            }
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500
