"""
ui/pantalla_maestros.py — Vista de solo lectura para operadores.
La edicion completa esta en panel_admin.py (acceso con clave).
"""
import customtkinter as ctk
import tkinter as tk
from tkinter import ttk
import os, sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from db import database as db

AZUL = "#1A5FA8"

VISTAS = [
    ("Transportistas",
     [("CUIT",140),("Razon Social",280)],
     ["cuit","razon_social"],
     db.list_transportistas),
    ("Camiones",
     [("Patente",90),("Descripcion",200),("Transportista",180)],
     ["patente","descripcion","transportista"],
     db.list_camiones),
    ("Choferes",
     [("Nombre",200),("Tipo Doc",70),("Nro Doc",110),("Nacionalidad",110)],
     ["nombre","tipo_doc","nro_doc","nacionalidad"],
     db.list_choferes),
    ("Productos",
     [("Codigo",80),("Descripcion",280)],
     ["codigo","descripcion"],
     db.list_productos),
    ("Exportadores",
     [("CUIT",140),("Razon Social",280)],
     ["cuit","razon_social"],
     db.list_exportadores),
]


class PantallaMaestros(ctk.CTkFrame):
    def __init__(self, master, db_path=None):
        super().__init__(master, fg_color="transparent")
        self.db_path = db_path
        self._build()

    def _build(self):
        self.columnconfigure(0, weight=1)
        self.rowconfigure(1, weight=1)

        # Aviso de solo lectura
        av = ctk.CTkFrame(self, fg_color="#FFF8E1", corner_radius=8)
        av.grid(row=0, column=0, sticky="ew", padx=4, pady=(0,8))
        ctk.CTkLabel(av,
                     text="🔒  Solo lectura  —  Para modificar datos: doble clic en el logo BALANZA → Administración",
                     font=("Helvetica",11), text_color="#7B5800"
                     ).pack(pady=8, padx=12, anchor="w")

        tabs = ctk.CTkTabview(self, anchor="nw")
        tabs.grid(row=1, column=0, sticky="nsew")

        for nombre, cols, keys, lister in VISTAS:
            tabs.add(nombre)
            tab = tabs.tab(nombre)
            tab.columnconfigure(0, weight=1)
            tab.rowconfigure(0, weight=1)
            self._tabla(tab, cols, keys, lister)

    def _tabla(self, parent, cols, keys, lister):
        ft = tk.Frame(parent, bg="#EEEEEE")
        ft.grid(row=0, column=0, sticky="nsew")
        ft.columnconfigure(0, weight=1); ft.rowconfigure(0, weight=1)

        tree = ttk.Treeview(ft, columns=[c[0] for c in cols],
                             show="headings", selectmode="browse")
        vsb  = ttk.Scrollbar(ft, orient="vertical", command=tree.yview)
        tree.configure(yscroll=vsb.set)
        tree.grid(row=0, column=0, sticky="nsew")
        vsb.grid(row=0, column=1, sticky="ns")

        for col, w in cols:
            tree.heading(col, text=col)
            tree.column(col, width=w, minwidth=40, anchor="w")

        tree.tag_configure("par",   background="#F5F8FC")
        tree.tag_configure("impar", background="white")

        for i, row in enumerate(lister(self.db_path)):
            vals = [str(row.get(k,"") or "") for k in keys]
            tree.insert("","end", values=vals,
                        tags=("par" if i%2==0 else "impar",))
