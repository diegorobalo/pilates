"""
ui/pantalla_dashboard.py — Dashboard diario con métricas del día
Mejoras v2.1: pantalla de inicio con resumen operativo
"""
import customtkinter as ctk
import tkinter as tk
from datetime import datetime
import os, sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from db import database as db

AZUL = "#1A5FA8"
DORADO = "#F59E0B"
VERDE = "#2E7D32"
GRIS = "#6B7280"


class PantallaDashboard(ctk.CTkFrame):
    def __init__(self, master, db_path=None):
        super().__init__(master, fg_color="transparent")
        self.db_path = db_path
        self._actualizar_id = None
        self._build()
        self.recargar()
        self._programar_actualizacion()

    def _build(self):
        self.columnconfigure(0, weight=1)
        self.rowconfigure(1, weight=1)

        # Título
        header = ctk.CTkFrame(self, fg_color="transparent")
        header.grid(row=0, column=0, sticky="ew", pady=(0, 8))
        header.columnconfigure(0, weight=1)

        hoy = datetime.now().strftime("%A %d/%m/%Y").capitalize()
        ctk.CTkLabel(header, text=f"Resumen del dia  —  {hoy}",
                     font=("Helvetica", 14, "bold"),
                     text_color=AZUL, anchor="w"
                     ).grid(row=0, column=0, sticky="w")

        ctk.CTkButton(header, text="Actualizar", width=90,
                      command=self.recargar,
                      fg_color="transparent", border_width=1,
                      border_color="#CCCCCC", font=("Helvetica", 10)
                      ).grid(row=0, column=1)

        # Limpiar actualización automática al destruir
        self.bind("<Destroy>", lambda e: self._limpiar())

        # Contenido
        content = ctk.CTkFrame(self, fg_color="transparent")
        content.grid(row=1, column=0, sticky="nsew")
        content.columnconfigure((0, 1, 2, 3), weight=1)
        content.rowconfigure(1, weight=1)
        self._content = content

        # Fila de cards métricas
        self._cards = {}
        cards_data = [
            ("cerrados", "Pesajes cerrados hoy", "0", AZUL),
            ("neto", "Toneladas netas hoy", "0,0 tn", VERDE),
            ("abiertos", "Cargas abiertas", "0", DORADO),
            ("ultimo", "Ultimo camion", "—", GRIS),
        ]
        for i, (key, label, default, color) in enumerate(cards_data):
            card = ctk.CTkFrame(content, fg_color="white",
                                corner_radius=10, border_width=1,
                                border_color="#E5E7EB")
            card.grid(row=0, column=i, sticky="nsew", padx=4, pady=(0, 8))
            card.columnconfigure(0, weight=1)

            ctk.CTkLabel(card, text=label,
                         font=("Helvetica", 10),
                         text_color=GRIS, anchor="w"
                         ).grid(row=0, column=0, sticky="w", padx=14, pady=(12, 0))

            lbl_val = ctk.CTkLabel(card, text=default,
                                   font=("Helvetica", 22, "bold"),
                                   text_color=color, anchor="w")
            lbl_val.grid(row=1, column=0, sticky="w", padx=14, pady=(2, 12))
            self._cards[key] = lbl_val

        # Tabla de productos del día
        prod_frame = ctk.CTkFrame(content, fg_color="white",
                                  corner_radius=10, border_width=1,
                                  border_color="#E5E7EB")
        prod_frame.grid(row=1, column=0, columnspan=4, sticky="nsew", padx=4, pady=(0, 4))
        prod_frame.columnconfigure(0, weight=1)
        prod_frame.rowconfigure(1, weight=1)

        ctk.CTkLabel(prod_frame, text="Productos pesados hoy",
                     font=("Helvetica", 12, "bold"),
                     text_color=AZUL, anchor="w"
                     ).grid(row=0, column=0, sticky="w", padx=14, pady=(12, 4))

        self._prod_container = ctk.CTkFrame(prod_frame, fg_color="transparent")
        self._prod_container.grid(row=1, column=0, sticky="nsew", padx=14, pady=(0, 12))
        self._prod_container.columnconfigure(0, weight=1)

    def _programar_actualizacion(self):
        """Actualiza el dashboard cada 10 segundos si está visible."""
        self._actualizar_id = self.after(10000, self._actualizar_auto)

    def _actualizar_auto(self):
        """Recarga datos y reprograma la próxima actualización."""
        if self.winfo_viewable():
            self.recargar()
        self._programar_actualizacion()

    def _limpiar(self):
        """Cancela la actualización automática."""
        if self._actualizar_id:
            self.after_cancel(self._actualizar_id)
            self._actualizar_id = None

    def recargar(self):
        try:
            stats = db.stats_hoy(self.db_path)
        except Exception:
            return

        self._cards["cerrados"].configure(text=str(stats["cerrados_hoy"]))

        neto_tn = stats["neto_hoy"] / 1000.0
        neto_txt = f"{neto_tn:,.1f} tn".replace(",", "X").replace(".", ",").replace("X", ".")
        self._cards["neto"].configure(text=neto_txt)

        n_ab = stats["abiertos"]
        self._cards["abiertos"].configure(text=str(n_ab))
        color_ab = "#C62828" if n_ab > 5 else (DORADO if n_ab > 0 else VERDE)
        self._cards["abiertos"].configure(text_color=color_ab)

        ult = stats.get("ultimo")
        if ult:
            self._cards["ultimo"].configure(
                text=f"{ult.get('patente_camion', '')}",
                text_color=AZUL)
        else:
            self._cards["ultimo"].configure(text="—", text_color=GRIS)

        # Limpiar tabla de productos
        for w in self._prod_container.winfo_children():
            w.destroy()

        prods = stats.get("top_productos", [])
        if not prods:
            ctk.CTkLabel(self._prod_container,
                         text="Sin pesajes cerrados hoy",
                         font=("Helvetica", 11),
                         text_color="#AAAAAA"
                         ).grid(row=0, column=0, pady=20)
            return

        # Header
        hdr = ctk.CTkFrame(self._prod_container, fg_color="#F5F8FC",
                           corner_radius=6)
        hdr.grid(row=0, column=0, sticky="ew", pady=(0, 4))
        hdr.columnconfigure((0, 1, 2), weight=1)
        for j, txt in enumerate(["Producto", "Cantidad", "Total neto (tn)"]):
            ctk.CTkLabel(hdr, text=txt, font=("Helvetica", 10, "bold"),
                         text_color=AZUL, anchor="center"
                         ).grid(row=0, column=j, padx=8, pady=6)

        for i, p in enumerate(prods):
            row_f = ctk.CTkFrame(self._prod_container, fg_color="transparent")
            row_f.grid(row=i + 1, column=0, sticky="ew")
            row_f.columnconfigure((0, 1, 2), weight=1)

            nombre = p.get("producto", "Sin producto") or "Sin producto"
            cant = p.get("cant", 0)
            total = (p.get("total", 0) or 0) / 1000.0
            total_txt = f"{total:,.1f}".replace(",", "X").replace(".", ",").replace("X", ".")

            ctk.CTkLabel(row_f, text=nombre,
                         font=("Helvetica", 11, "bold"),
                         anchor="center"
                         ).grid(row=0, column=0, padx=8, pady=3)
            ctk.CTkLabel(row_f, text=str(cant),
                         font=("Helvetica", 11),
                         anchor="center"
                         ).grid(row=0, column=1, padx=8, pady=3)
            ctk.CTkLabel(row_f, text=f"{total_txt} tn",
                         font=("Helvetica", 11, "bold"),
                         text_color=VERDE, anchor="center"
                         ).grid(row=0, column=2, padx=8, pady=3)

            if i < len(prods) - 1:
                ctk.CTkFrame(self._prod_container, height=1,
                             fg_color="#EEEEEE"
                             ).grid(row=100 + i, column=0, sticky="ew")
