"""
ui/app.py — Ventana principal Sistema de Balanza v2.1
Mejoras v2.1:
  - Dashboard diario como pantalla de inicio
  - Singleton de balanza (una instancia compartida)
  - Badge por eventos (no polling)
  - Confirmación al cerrar con cargas abiertas
"""
import customtkinter as ctk
import tkinter as tk
from tkinter import messagebox
import os, sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from db import database as db
from balanza.lector import LectorSerial
from ui.pantalla_ingreso   import PantallaIngreso
from ui.pantalla_egreso    import PantallaEgreso
from ui.pantalla_historial import PantallaHistorial
from ui.pantalla_maestros  import PantallaMaestros
from ui.pantalla_config    import PantallaConfig
from ui.pantalla_dashboard import PantallaDashboard

CARBON      = "#141414"
DORADO      = "#F59E0B"
AZUL        = "#1A5FA8"
SIDEBAR_W   = 200
VERSION     = "2.1"

# Singleton de balanza — compartido entre pantallas
_lector_balanza = None

def get_lector():
    """Retorna la instancia única de LectorSerial."""
    global _lector_balanza
    if _lector_balanza is None:
        _lector_balanza = LectorSerial(umbral_estabilidad=20.0, lecturas_estabilidad=5)
    return _lector_balanza


def _cfg_get(key):
    f = os.path.join(os.path.dirname(__file__), "..", "config.ini")
    if os.path.exists(f):
        with open(f) as fh:
            for line in fh:
                if line.startswith(key + "="):
                    return line.strip().split("=", 1)[1]
    return None


def _logo_path():
    base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    return os.path.join(base, "argensun_logo.png")


class BalanzaApp(ctk.CTk):
    def __init__(self, usuario=None):
        super().__init__()
        db_path = _cfg_get("DB_PATH")
        usuario = usuario or _cfg_get("USUARIO") or "OPERADOR"
        db.init_db(db_path)
        self.title(f"Sistema de Balanza v{VERSION}")
        self.geometry("1180x740")
        self.minsize(980, 640)
        self.configure(fg_color="#F0F0F0")
        self._db_path = db_path
        self._usuario = usuario
        self._badge_canvas = None
        self._build(db_path, usuario)
        # Confirmación al cerrar con cargas abiertas
        self.protocol("WM_DELETE_WINDOW", self._on_cerrar)

    def _on_cerrar(self):
        n = len(db.list_abiertos(self._db_path))
        if n > 0:
            if not messagebox.askyesno(
                "Cargas abiertas",
                f"Hay {n} carga{'s' if n > 1 else ''} abierta{'s' if n > 1 else ''}.\n"
                "¿Cerrar de todas formas?\n\n"
                "Los camiones quedarán en 'Cargas abiertas' para cuando vuelvas a abrir."
            ):
                return
        self.destroy()

    def _build(self, db_path, usuario):
        self.columnconfigure(1, weight=1)
        self.rowconfigure(0, weight=1)

        # ── Sidebar — fondo negro carbón ─────────────────────────────────
        sidebar = tk.Frame(self, bg=CARBON, width=SIDEBAR_W)
        sidebar.grid(row=0, column=0, sticky="nsew")
        sidebar.grid_propagate(False)
        sidebar.columnconfigure(0, weight=1)

        # ── Bloque superior: logo ─────────────────────────────────────────
        top_block = tk.Frame(sidebar, bg=CARBON)
        top_block.grid(row=0, column=0, sticky="ew")
        top_block.columnconfigure(0, weight=1)

        logo_path = _logo_path()
        self._logo_img = None
        if os.path.exists(logo_path):
            try:
                from PIL import Image, ImageTk
                pil_img  = Image.open(logo_path).convert("RGBA")
                bg_img   = Image.new("RGBA", pil_img.size, (20, 20, 20, 255))
                bg_img.paste(pil_img, mask=pil_img.split()[3])
                final    = bg_img.convert("RGB")
                target_w = SIDEBAR_W - 24
                ratio    = target_w / final.width
                target_h = int(final.height * ratio)
                final    = final.resize((target_w, target_h), Image.LANCZOS)
                self._logo_img = ImageTk.PhotoImage(final)
                lbl_logo = tk.Label(top_block, image=self._logo_img,
                                     bg=CARBON, cursor="hand2")
                lbl_logo.grid(row=0, column=0, pady=(18, 6), padx=12)
                lbl_logo.bind("<Double-Button-1>", self._easter_egg)
            except Exception:
                self._logo_text(top_block)
        else:
            self._logo_text(top_block)

        tk.Frame(top_block, bg=DORADO, height=2).grid(
            row=1, column=0, sticky="ew", padx=12, pady=(4, 0))
        tk.Label(top_block, text="SISTEMA DE BALANZA",
                 font=("Helvetica", 10, "bold"),
                 fg="white", bg=CARBON
                 ).grid(row=2, column=0, pady=(8, 1))
        tk.Label(top_block, text=f"v{VERSION}  —  ARGENSUN S.A.",
                 font=("Helvetica", 8),
                 fg="#555555", bg=CARBON
                 ).grid(row=3, column=0, pady=(0, 12))

        # ── Navegación ────────────────────────────────────────────────────
        self._nav_btns = {}
        self._nav_frs  = {}
        nav = [
            ("Dashboard",       "dashboard"),
            ("Ingreso",         "ingreso"),
            ("Cargas abiertas", "egreso"),
            ("Historial",       "historial"),
            ("Maestros",        "maestros"),
            ("Configuracion",   "config"),
        ]
        nav_container = tk.Frame(sidebar, bg=CARBON)
        nav_container.grid(row=1, column=0, sticky="ew")
        nav_container.columnconfigure(0, weight=1)

        for i, (label, key) in enumerate(nav):
            row_f = tk.Frame(nav_container, bg=CARBON)
            row_f.grid(row=i, column=0, sticky="ew")

            ind = tk.Frame(row_f, bg=CARBON, width=3)
            ind.pack(side="left", fill="y")
            self._nav_frs[key] = ind

            btn = tk.Button(
                row_f, text=label,
                font=("Helvetica", 12),
                fg="#888888", bg=CARBON,
                activeforeground="white",
                activebackground=CARBON,
                relief="flat", bd=0,
                anchor="w", padx=12,
                cursor="hand2",
                command=lambda k=key: self._navegar(k),
            )
            btn.pack(side="left", fill="x", expand=True, ipady=9)
            self._nav_btns[key] = btn

            if key == "egreso":
                self._badge_canvas = tk.Canvas(
                    row_f, width=22, height=22,
                    bg=CARBON, highlightthickness=0)
                self._badge_canvas.pack(side="right", padx=(0, 10))

        sidebar.rowconfigure(3, weight=1)

        # ── Usuario en pie ────────────────────────────────────────────────
        pie_frame = tk.Frame(sidebar, bg="#1A1A1A")
        pie_frame.grid(row=4, column=0, sticky="ew")
        pie_frame.columnconfigure(0, weight=1)
        av_frame = tk.Frame(pie_frame, bg="#1A1A1A")
        av_frame.grid(row=0, column=0, sticky="ew", padx=12, pady=10)
        avatar_canvas = tk.Canvas(av_frame, width=30, height=30,
                                   bg="#1A1A1A", highlightthickness=0)
        avatar_canvas.pack(side="left")
        avatar_canvas.create_oval(2, 2, 28, 28, fill="#2A1F08",
                                   outline=DORADO, width=1)
        initials = usuario[:2].upper() if usuario else "??"
        avatar_canvas.create_text(15, 15, text=initials,
                                   font=("Helvetica", 9, "bold"),
                                   fill=DORADO)
        user_info = tk.Frame(av_frame, bg="#1A1A1A")
        user_info.pack(side="left", padx=8)
        tk.Label(user_info, text=usuario,
                 font=("Helvetica", 10, "bold"),
                 fg="white", bg="#1A1A1A").pack(anchor="w")
        tk.Label(user_info, text="Operador",
                 font=("Helvetica", 8),
                 fg="#444444", bg="#1A1A1A").pack(anchor="w")

        # ── Área principal ────────────────────────────────────────────────
        self._main = ctk.CTkFrame(self, fg_color="#F0F0F0", corner_radius=0)
        self._main.grid(row=0, column=1, sticky="nsew")
        self._main.columnconfigure(0, weight=1)
        self._main.rowconfigure(1, weight=1)

        topbar = ctk.CTkFrame(self._main, fg_color="white",
                               height=44, corner_radius=0)
        topbar.grid(row=0, column=0, sticky="ew")
        topbar.columnconfigure(0, weight=1)
        topbar.grid_propagate(False)
        self.lbl_sec = ctk.CTkLabel(topbar, text="Dashboard",
                                     font=("Helvetica", 15, "bold"),
                                     text_color=AZUL, anchor="w")
        self.lbl_sec.grid(row=0, column=0, sticky="w", padx=14, pady=10)

        cont = ctk.CTkFrame(self._main, fg_color="transparent")
        cont.grid(row=1, column=0, sticky="nsew", padx=10, pady=10)
        cont.columnconfigure(0, weight=1)
        cont.rowconfigure(0, weight=1)

        self._pant = {}
        egreso_pant  = PantallaEgreso(cont, db_path=db_path,
                                       usuario=usuario, usar_sim=True,
                                       on_egreso_guardado=self._on_cambio_pesaje)
        ingreso_pant = PantallaIngreso(cont, db_path=db_path,
                                        usuario=usuario, usar_sim=True,
                                        on_ingreso_guardado=self._on_cambio_pesaje)
        self._pant["dashboard"] = PantallaDashboard(cont, db_path=db_path)
        self._pant["ingreso"]   = ingreso_pant
        self._pant["egreso"]    = egreso_pant
        self._pant["historial"] = PantallaHistorial(cont, db_path=db_path)
        self._pant["maestros"]  = PantallaMaestros(cont, db_path=db_path)
        self._pant["config"]    = PantallaConfig(cont, db_path=db_path)

        for p in self._pant.values():
            p.grid(row=0, column=0, sticky="nsew")

        self._navegar("dashboard")
        self.after(300, self._actualizar_badge)
        self.after(500, self._conectar_balanza_auto)

    def _logo_text(self, parent):
        lbl = tk.Label(parent, text="Argensun\nFOODS",
                        font=("Helvetica", 14, "bold"),
                        fg="white", bg=CARBON, cursor="hand2")
        lbl.grid(row=0, column=0, pady=(18, 6))
        lbl.bind("<Double-Button-1>", self._easter_egg)

    # ── Navegación ──────────────────────────────────────────────────────
    _NOMBRES = {
        "dashboard": "Dashboard  —  Resumen del dia",
        "ingreso":   "Ingreso de camion",
        "egreso":    "Cargas abiertas  —  Egreso",
        "historial": "Historial de pesajes",
        "maestros":  "Maestros",
        "config":    "Configuracion",
    }

    def _navegar(self, key):
        for k, btn in self._nav_btns.items():
            activo = (k == key)
            btn.configure(
                fg="white" if activo else "#666666",
                bg="#1E1E1E" if activo else CARBON,
            )
            self._nav_frs[k].configure(
                bg=DORADO if activo else CARBON)
        self._pant[key].tkraise()
        self.lbl_sec.configure(text=self._NOMBRES.get(key, key))
        if key == "historial":
            self._pant["historial"]._buscar()
        if key == "egreso":
            self._pant["egreso"].recargar()
            self._actualizar_badge()
        if key == "dashboard":
            self._pant["dashboard"].recargar()

    def _on_cambio_pesaje(self):
        """Callback cuando se guarda ingreso o egreso — actualiza badge y dashboard."""
        self._actualizar_badge()
        try:
            self._pant["dashboard"].recargar()
        except Exception:
            pass

    def _dibujar_badge(self, n):
        if not self._badge_canvas:
            return
        self._badge_canvas.delete("all")
        if n > 0:
            self._badge_canvas.create_oval(2, 2, 18, 18,
                                            fill=DORADO, outline="")
            txt_num = str(n) if n < 100 else "99+"
            self._badge_canvas.create_text(10, 10, text=txt_num,
                                            font=("Helvetica", 8, "bold"),
                                            fill="#141414")

    def _actualizar_badge(self):
        n = len(db.list_abiertos(self._db_path))
        self._dibujar_badge(n)

    def _conectar_balanza_auto(self):
        """Intenta conectarse automáticamente a la balanza si hay puerto guardado."""
        puerto = _cfg_get("PUERTO")
        baud = _cfg_get("BAUD")
        if not puerto:
            return
        try:
            baud = int(baud) if baud else 9600
            lector = get_lector()
            if not lector.is_conectada():
                lector.conectar(puerto, baud)
                print(f"[Auto-conexión] Intentando conectar a {puerto}@{baud} baud")
        except Exception as e:
            print(f"[Auto-conexión] Error: {e}")

    # ── Easter egg / Administración ────────────────────────────────────
    def _easter_egg(self, event=None):
        from ui.panel_admin import LoginAdmin
        win = tk.Toplevel(self)
        win.title("")
        win.resizable(False, False)
        win.configure(bg="#0D1B2A")
        win.geometry("380x260")
        win.grab_set()
        win.update_idletasks()
        x = self.winfo_x() + (self.winfo_width()  - 380) // 2
        y = self.winfo_y() + (self.winfo_height() - 260) // 2
        win.geometry(f"+{x}+{y}")

        tk.Label(win, text="✦",
                 font=("Helvetica", 26), fg=DORADO, bg="#0D1B2A"
                 ).pack(pady=(22, 4))
        tk.Label(win,
                 text="Sistema creado y desarrollado",
                 font=("Helvetica", 11, "italic"),
                 fg="#E8F4FD", bg="#0D1B2A").pack()
        tk.Label(win,
                 text="por y para Argensun Foods",
                 font=("Helvetica", 11, "italic"),
                 fg=DORADO, bg="#0D1B2A").pack(pady=(0, 4))
        tk.Frame(win, bg="#1A3A5A", height=1).pack(fill="x", padx=30, pady=(6, 0))
        tk.Label(win,
                 text=f"Sistema de Balanza v{VERSION}",
                 font=("Helvetica", 8),
                 fg="#2A4A6A", bg="#0D1B2A").pack(pady=(4, 0))

        def abrir_admin():
            win.destroy()
            LoginAdmin(self, db_path=self._db_path)

        tk.Button(win, text="⚙  Administración",
                  font=("Helvetica", 10), fg="#4A9EDB", bg="#0D1B2A",
                  relief="flat", cursor="hand2",
                  activeforeground="white", activebackground="#0D1B2A",
                  bd=0, command=abrir_admin).pack(pady=(12, 2))
        tk.Button(win, text="cerrar",
                  font=("Helvetica", 9), fg="#2A4A6A", bg="#0D1B2A",
                  relief="flat", cursor="hand2",
                  command=win.destroy).pack(pady=(0, 14))
