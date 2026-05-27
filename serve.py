#!/usr/bin/env python3
"""
FULIMA - Servidor local para pruebas multi-dispositivo
Sirve la landing page en la red local para probar en múltiples dispositivos.
"""

import http.server
import socket
import sys

PORT = 8000

class CORSHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Handler con CORS habilitado y caché desactivado para desarrollo."""
    
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()
    
    def log_message(self, format, *args):
        """Log con IP real del cliente."""
        super().log_message(format, *args)


def get_local_ip():
    """Obtiene la IP local de la máquina en la red."""
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"


def main():
    local_ip = get_local_ip()
    
    handler = CORSHTTPRequestHandler
    
    # Intentar el puerto 8000, si está ocupado probar 8001, 8002...
    port = PORT
    while True:
        try:
            server = http.server.HTTPServer(("0.0.0.0", port), handler)
            break
        except OSError:
            port += 1
            if port > PORT + 10:
                print("[ERROR] No se encontró un puerto libre.")
                sys.exit(1)
    
    print("=" * 55)
    print("   FULIMA - Servidor Local Multi-Dispositivo")
    print("=" * 55)
    print(f"")
    print(f"   Servidor corriendo en:")
    print(f"")
    print(f"   LOCAL:    http://localhost:{port}")
    print(f"   RED:      http://{local_ip}:{port}")
    print(f"")
    print("   Para probar en otros dispositivos:")
    print(f"   1. Conecta el otro dispositivo a la MISMA red WiFi")
    print(f"   2. Abre el navegador y visita:")
    print(f"      http://{local_ip}:{port}")
    print(f"")
    print("   Presiona CTRL+C para detener el servidor")
    print("=" * 55)
    
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n\n[OK] Servidor detenido.")
        server.server_close()


if __name__ == "__main__":
    main()