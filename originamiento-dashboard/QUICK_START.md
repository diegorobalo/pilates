# 🚀 Quick Start - Originamiento Dashboard

## Para Windows

### Opción 1: ¡MÁS FÁCIL! (Recomendado)
1. **Abre el archivo `START_HERE.cmd`** (doble-clic)
2. Espera a que se inicie (verás mensajes en la consola)
3. El navegador se abrirá automáticamente en http://localhost:3000

### Opción 2: PowerShell
1. Abre PowerShell
2. Navega a esta carpeta
3. Ejecuta:
   ```powershell
   .\start.ps1
   ```

### Opción 3: Command Prompt (cmd)
1. Abre Command Prompt
2. Navega a esta carpeta
3. Ejecuta:
   ```cmd
   start.bat
   ```

---

## Para Mac / Linux

1. Abre Terminal
2. Navega a esta carpeta
3. Dale permisos al script:
   ```bash
   chmod +x start.sh
   ```
4. Ejecuta:
   ```bash
   ./start.sh
   ```

El navegador se abrirá automáticamente en http://localhost:3000

---

## ⚙️ Antes de ejecutar

✅ **Requiere:**
- Docker Desktop instalado y ejecutándose
- Archivo `.env` configurado (copia `.env.example` a `.env`)

✅ **Completa en `.env`:**
```env
ODOO_URL=https://odoo-originamiento.argensun.com.ar
ODOO_USER=tu_email@example.com
ODOO_PASSWORD=tu_contraseña
ANTHROPIC_API_KEY=sk-ant-xxxxx
```

---

## 👤 Credenciales Demo

- **Usuario:** demo
- **Contraseña:** demo123

---

## 🌐 URLs disponibles

- **Dashboard:** http://localhost:3000
- **API Docs:** http://localhost:8000/docs
- **Database:** localhost:5432

---

## ⏹️ Para detener

Presiona **Ctrl+C** en la ventana de la consola

---

## 🆘 Si hay problemas

### Docker no se encuentra
- Descarga e instala Docker Desktop: https://www.docker.com/products/docker-desktop

### Error de puertos en uso
- Cierra otros servicios que usen puertos 3000, 5432, 8000
- O ejecuta: `docker-compose down`

### .env no encontrado
- Copia el archivo `NEXT` `.env.example` a `.env`
- Completa con tus credenciales

### Ver logs detallados
Abre otra consola en esta carpeta y ejecuta:
```bash
docker-compose logs -f
```

---

## 📚 Documentación completa

Ver `README.md` para más información y configuración avanzada.
