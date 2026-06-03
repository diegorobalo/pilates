#!/usr/bin/env python3
import http.server
import socketserver
import os
import sys

# Change to the Monitor VPN directory
os.chdir("Monitor VPN")

# Use a higher port that's less likely to be restricted
PORT = 9999

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        return super().end_headers()

try:
    with socketserver.TCPServer(("127.0.0.1", PORT), MyHTTPRequestHandler) as httpd:
        print(f"Server started at http://127.0.0.1:{PORT}/index_dashboards.html")
        print(f"Press Ctrl+C to stop the server")
        httpd.serve_forever()
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
