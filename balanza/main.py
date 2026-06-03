"""
main.py — Sistema de Balanza v2.1
Mejoras v2.1:
  - Log con append + timestamp (no sobreescribe)
  - Backup automático al iniciar
  - Forzar cambio de clave admin en primer uso
  - Parche hashlib para compatibilidad con Python < 3.9 (Windows 7)
"""
import sys, os, traceback, datetime

# ── Parche hashlib: Python < 3.9 no acepta usedforsecurity ──────────────────
# Reportlab y otras librerías usan hashlib.md5(usedforsecurity=False)
# que falla en Python 3.8 y anteriores. Este parche lo intercepta.
try:
    import hashlib as _hl
    _hl.md5(usedforsecurity=False)
except TypeError:
    _orig_md5  = _hl.md5
    _orig_sha1 = _hl.sha1
    _orig_sha256 = _hl.sha256

    def _patched_md5(*args, **kwargs):
        kwargs.pop("usedforsecurity", None)
        return _orig_md5(*args, **kwargs)

    def _patched_sha1(*args, **kwargs):
        kwargs.pop("usedforsecurity", None)
        return _orig_sha1(*args, **kwargs)

    def _patched_sha256(*args, **kwargs):
        kwargs.pop("usedforsecurity", None)
        return _orig_sha256(*args, **kwargs)

    _hl.md5    = _patched_md5
    _hl.sha1   = _patched_sha1
    _hl.sha256 = _patched_sha256
except Exception:
    pass

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, BASE_DIR)
LOG = os.path.join(BASE_DIR, "error_log.txt")


def _log_error(msg):
    """Escribe error con timestamp en modo append."""
    ts = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    entry = f"\n{'='*60}\n[{ts}]\n{msg}\n"
    try:
        with open(LOG, "a", encoding="utf-8") as f:
            f.write(entry)
    except Exception:
        pass
    print(msg)
    try:
        import tkinter as tk
        from tkinter import messagebox
        r = tk.Tk(); r.withdraw()
        messagebox.showerror("Error al iniciar", msg[-800:])
        r.destroy()
    except Exception:
        pass


def _crear_icono():
    ico = os.path.join(BASE_DIR, "balanza.ico")
    if os.path.exists(ico):
        return ico
    try:
        from PIL import Image, ImageDraw
        def _camion(size=256):
            img = Image.new("RGBA", (size, size), (0,0,0,0))
            d = ImageDraw.Draw(img); s = size / 256
            def r(x,y,x2,y2,fill,ol=None,rad=0):
                if rad: d.rounded_rectangle([x*s,y*s,x2*s,y2*s],radius=rad*s,fill=fill,outline=ol)
                else:   d.rectangle([x*s,y*s,x2*s,y2*s],fill=fill,outline=ol)
            def c(cx,cy,rd,fill,ol=None):
                d.ellipse([(cx-rd)*s,(cy-rd)*s,(cx+rd)*s,(cy+rd)*s],fill=fill,outline=ol)
            AZ=(26,95,168,255); AO=(15,60,110,255); GR=(180,185,190,255)
            GO=(120,125,130,255); GC=(210,215,220,255); NE=(30,30,30,255)
            AM=(255,200,0,255); RL=(220,50,50,255); BL=(240,245,255,255)
            r(12,138,130,175,GO,NE,3); r(14,95,128,140,GR,NE,4)
            r(14,107,128,115,GC); r(14,124,128,132,GC); r(124,155,152,162,GO)
            for cx in [38,95]: c(cx,178,18,NE); c(cx,178,12,GO); c(cx,178,5,GC)
            r(132,148,244,178,GO,NE,3); r(190,118,244,152,AO,NE,5)
            r(138,88,200,152,AZ,NE,6); r(140,88,198,105,AZ,None,8)
            r(146,94,192,124,BL,NE,4); r(138,110,170,150,AO,NE,3)
            r(142,112,166,132,BL,NE,3); r(148,138,162,142,GC,None,2)
            d.polygon([(210*s,148*s),(244*s,148*s),(244*s,165*s),(205*s,165*s)],fill=AO)
            r(234,155,248,175,GC,NE,3)
            c(240,148,7,AM,NE); c(240,163,5,RL,NE); r(138,118,143,128,RL,NE,2)
            r(195,70,205,120,GO,NE,3); c(200,68,8,GR,NE)
            for cx in [158,172]: c(cx,182,20,NE); c(cx,182,13,GO); c(cx,182,6,GC)
            c(228,180,20,NE); c(228,180,13,GO); c(228,180,6,GC)
            r(175,140,193,148,AM,None,2)
            return img
        imgs = [_camion(sz) for sz in [256,128,64,48,32,16]]
        imgs[0].save(ico, format="ICO",
                     sizes=[(s,s) for s in [256,128,64,48,32,16]],
                     append_images=imgs[1:])
    except Exception:
        pass
    return ico


# ── PASO 1: dependencias ──────────────────────────────────────────────────────
try:
    import customtkinter as ctk
except ImportError:
    _log_error(
        "Falta el modulo 'customtkinter'.\n\n"
        "Ejecuta INICIAR.bat para instalarlo automaticamente."
    )
    sys.exit(1)

# ── PASO 2: modulos propios ───────────────────────────────────────────────────
try:
    from db import database as db
except Exception:
    _log_error("Error al importar modulos:\n\n" + traceback.format_exc())
    sys.exit(1)

# ── PASO 3: BD ────────────────────────────────────────────────────────────────
try:
    ruta_bd = db._db_path()
    # Backup automático antes de cualquier cambio
    bk = db.backup_db(ruta_bd)
    if bk:
        print(f"[backup] {bk}")
    db.init_db()
    db.migrar(ruta_bd)
except Exception:
    _log_error("Error al inicializar la base de datos:\n\n" + traceback.format_exc())
    sys.exit(1)

# ── PASO 4: icono ─────────────────────────────────────────────────────────────
_crear_icono()

# ── PASO 5: login → UI ───────────────────────────────────────────────────────
try:
    from ui.login import pedir_usuario

    def _arrancar(nombre_usuario):
        try:
            ctk.set_appearance_mode("light")
            ctk.set_default_color_theme("blue")
            from ui.app import BalanzaApp
            app = BalanzaApp(usuario=nombre_usuario)
            app.mainloop()
        except Exception:
            _log_error("Error al iniciar la interfaz:\n\n" + traceback.format_exc())
            sys.exit(1)

    pedir_usuario(_arrancar)

except Exception:
    _log_error("Error en el login:\n\n" + traceback.format_exc())
    sys.exit(1)
