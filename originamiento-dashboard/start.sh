#!/bin/bash

# ============================================
# Originamiento Dashboard - Start Script
# Bash (Linux/macOS)
# ============================================

echo ""
echo "╔════════════════════════════════════════╗"
echo "║   ORIGINAMIENTO DASHBOARD              ║"
echo "║   Iniciando servicios...               ║"
echo "╚════════════════════════════════════════╝"
echo ""

# Verificar que Docker está instalado
if ! command -v docker &> /dev/null; then
    echo "❌ ERROR: Docker no está instalado"
    echo ""
    echo "Descarga Docker desde: https://www.docker.com/products/docker-desktop"
    exit 1
fi

DOCKER_VERSION=$(docker --version)
echo "✅ Docker encontrado: $DOCKER_VERSION"
echo ""

# Verificar que docker-compose está instalado
if ! command -v docker-compose &> /dev/null; then
    echo "❌ ERROR: docker-compose no está instalado"
    exit 1
fi

echo "✅ docker-compose encontrado"
echo ""

# Verificar .env
if [ ! -f ".env" ]; then
    echo "⚠️  ADVERTENCIA: Archivo .env no encontrado"
    echo ""
    echo "Por favor, copia .env.example a .env y completa con tus credenciales:"
    echo "  - ODOO_URL"
    echo "  - ODOO_USER"
    echo "  - ODOO_PASSWORD"
    echo "  - ANTHROPIC_API_KEY"
    echo ""
    exit 1
fi

echo "✅ Archivo .env detectado"
echo ""
echo "📦 Iniciando servicios (esto puede tardar 30-60 segundos)..."
echo ""

# Iniciar docker-compose en background
docker-compose up -d

# Esperar a que los servicios estén listos
echo "⏳ Esperando a que los servicios se inicien..."

max_attempts=60  # 60 intentos = 3 minutos
attempt=0
frontend_ready=false

while [ $attempt -lt $max_attempts ] && [ "$frontend_ready" = false ]; do
    sleep 2
    attempt=$((attempt + 1))

    # Intentar conectar al frontend
    if curl -s http://localhost:3000 > /dev/null 2>&1; then
        frontend_ready=true
    fi

    echo -n "."
done

echo ""
echo ""

if [ "$frontend_ready" = true ]; then
    echo "✅ ¡Servicios iniciados correctamente!"
    echo ""
    echo "📊 Dashboard disponible en: http://localhost:3000"
    echo "📚 API Docs disponible en: http://localhost:8000/docs"
    echo ""
    echo "👤 Credenciales Demo:"
    echo "   Usuario: demo"
    echo "   Contraseña: demo123"
    echo ""

    # Abrir navegador (macOS y Linux)
    echo "🌐 Abriendo navegador..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        open http://localhost:3000
    else
        # Linux
        if command -v xdg-open &> /dev/null; then
            xdg-open http://localhost:3000
        elif command -v gnome-open &> /dev/null; then
            gnome-open http://localhost:3000
        fi
    fi

    echo ""
    echo "ℹ️  Para detener los servicios, presiona Ctrl+C"
    echo ""
    echo "Ver logs:"
    echo "  docker-compose logs -f"
    echo ""

    # Mantener script en ejecución
    while true; do
        sleep 1
    done
else
    echo "❌ ERROR: Los servicios no pudieron iniciar"
    echo ""
    echo "Verifica lo siguiente:"
    echo "  1. Docker está ejecutándose"
    echo "  2. El archivo .env existe y está correctamente configurado"
    echo "  3. No hay otros servicios en los puertos 3000, 5432, 8000"
    echo ""
    echo "Para ver logs detallados, ejecuta:"
    echo "  docker-compose logs"
    echo ""
    exit 1
fi
