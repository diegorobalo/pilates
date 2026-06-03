"""
ui/pantalla_historial.py — Historial de pesajes con filtros y exportacion
"""
import customtkinter as ctk
import tkinter as tk
from tkinter import ttk, messagebox, filedialog
from datetime import datetime
import os, sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from db import database as db
from exports.ticket import exportar_excel, generar_ticket

AZUL = "#1A5FA8"

COLS = [
    ("Doc",      60), ("Tipo",   80), ("F. Egreso", 140), ("Exportador",  130),
    ("Transporte",120),("Patente",70), ("Acoplado",  70), ("Chofer",      120),
    ("Producto",  90), ("Tara",   80), ("Bruto",     80), ("Neto (kg)",   90),
    ("Dest.",     55), ("Usuario",80),
]
KEYS = [
    "nro_doc","tipo_pesaje","fecha_egreso","exportador",
    "transportista","patente_camion","patente_acoplado","chofer",
    "producto","peso_tara","peso_bruto","peso_neto",
    "destinacion_aduanera","usuario_egreso",
]


class PantallaHistorial(ctk.CTkFrame):
    def __init__(self, master, db_path=None):
        super().__init__(master, fg_color="transparent")
        self.db_path = db_path
        self._datos  = []
        self._build()
        self._buscar()

    def _build(self):
        self.columnconfigure(0, weight=1)
        self.rowconfigure(1, weight=1)

        # Filtros
        filt = ctk.CTkFrame(self, fg_color="transparent")
        filt.grid(row=0, column=0, sticky="ew", pady=(0, 6))
        for i in range(6):
            filt.columnconfigure(i, weight=1)

        ctk.CTkLabel(filt, text="Desde", font=("Helvetica",11)
                     ).grid(row=0, column=0, sticky="w", padx=4)
        self.ent_desde = ctk.CTkEntry(filt, placeholder_text="dd/mm/aaaa")
        self.ent_desde.grid(row=1, column=0, sticky="ew", padx=4)

        ctk.CTkLabel(filt, text="Hasta", font=("Helvetica",11)
                     ).grid(row=0, column=1, sticky="w", padx=4)
        self.ent_hasta = ctk.CTkEntry(filt, placeholder_text="dd/mm/aaaa")
        self.ent_hasta.grid(row=1, column=1, sticky="ew", padx=4)

        ctk.CTkLabel(filt, text="Buscar", font=("Helvetica",11)
                     ).grid(row=0, column=2, columnspan=2, sticky="w", padx=4)
        self.ent_buscar = ctk.CTkEntry(
            filt, placeholder_text="Patente, transportista, producto...")
        self.ent_buscar.grid(row=1, column=2, columnspan=2, sticky="ew", padx=4)
        self.ent_buscar.bind("<Return>", lambda e: self._buscar())

        ctk.CTkButton(filt, text="Buscar", command=self._buscar,
                      fg_color=AZUL, font=("Helvetica",12,"bold")
                      ).grid(row=1, column=4, sticky="ew", padx=4)
        ctk.CTkButton(filt, text="Limpiar", command=self._limpiar,
                      fg_color="transparent", border_width=1,
                      border_color="#CCCCCC"
                      ).grid(row=1, column=5, sticky="ew", padx=4)

        # Treeview nativo
        frame_tree = tk.Frame(self, bg="#EEEEEE")
        frame_tree.grid(row=1, column=0, sticky="nsew")
        frame_tree.columnconfigure(0, weight=1)
        frame_tree.rowconfigure(0, weight=1)

        style = ttk.Style()
        style.configure("Bal.Treeview",
                        font=("Helvetica", 10), rowheight=24,
                        background="white", fieldbackground="white")
        style.configure("Bal.Treeview.Heading",
                        font=("Helvetica", 10, "bold"))

        self.tree = ttk.Treeview(
            frame_tree, style="Bal.Treeview",
            columns=[c[0] for c in COLS], show="headings",
            selectmode="browse",
        )
        vsb = ttk.Scrollbar(frame_tree, orient="vertical",   command=self.tree.yview)
        hsb = ttk.Scrollbar(frame_tree, orient="horizontal", command=self.tree.xview)
        self.tree.configure(yscroll=vsb.set, xscroll=hsb.set)
        self.tree.grid(row=0, column=0, sticky="nsew")
        vsb.grid(row=0, column=1, sticky="ns")
        hsb.grid(row=1, column=0, sticky="ew")

        for col, ancho in COLS:
            self.tree.heading(col, text=col, command=lambda c=col: self._sort(c))
            self.tree.column(col, width=ancho, minwidth=40, anchor="center")

        self.tree.tag_configure("par",   background="#F5F8FC")
        self.tree.tag_configure("impar", background="white")
        self.tree.bind("<Double-1>", self._ver_ticket)

        # Barra inferior
        bot = ctk.CTkFrame(self, fg_color="transparent")
        bot.grid(row=2, column=0, sticky="ew", pady=(6, 0))
        bot.columnconfigure(0, weight=1)

        self.lbl_total = ctk.CTkLabel(bot, text="", font=("Helvetica",11), anchor="w")
        self.lbl_total.grid(row=0, column=0, sticky="w", padx=4)

        ctk.CTkButton(bot, text="Exportar Excel", command=self._excel,
                      fg_color="#2E7D32", text_color="white",
                      font=("Helvetica",12,"bold")
                      ).grid(row=0, column=1, padx=4)
        ctk.CTkButton(bot, text="Exportar PDF", command=self._pdf,
                      fg_color=AZUL, text_color="white",
                      font=("Helvetica",12,"bold")
                      ).grid(row=0, column=2, padx=4)

    # ── Búsqueda ──────────────────────────────────────────────────────────
    def _parse_fecha(self, txt):
        txt = txt.strip()
        if not txt:
            return None
        try:
            return datetime.strptime(txt, "%d/%m/%Y").strftime("%Y-%m-%d")
        except ValueError:
            return None

    def _buscar(self):
        filtros = {
            "desde":  self._parse_fecha(self.ent_desde.get()),
            "hasta":  self._parse_fecha(self.ent_hasta.get()),
            "buscar": self.ent_buscar.get().strip(),
        }
        self._datos = db.list_pesajes(filtros, self.db_path)
        self._render()

    def _limpiar(self):
        self.ent_desde.delete(0, "end")
        self.ent_hasta.delete(0, "end")
        self.ent_buscar.delete(0, "end")
        self._buscar()

    def _render(self):
        self.tree.delete(*self.tree.get_children())
        total_neto = 0.0
        for i, p in enumerate(self._datos):
            vals = []
            for k in KEYS:
                v = p.get(k, "")
                if k in ("peso_tara","peso_bruto","peso_neto") and v:
                    v = f"{float(v):,.1f}"
                elif k == "fecha_egreso" and v:
                    v = str(v)[:16]
                vals.append(str(v) if v is not None else "")
            tag = "par" if i % 2 == 0 else "impar"
            self.tree.insert("", "end", iid=str(p["id"]), values=vals, tags=(tag,))
            try:
                total_neto += float(p.get("peso_neto") or 0)
            except Exception:
                pass

        n = len(self._datos)
        self.lbl_total.configure(
            text=f"{n} registro{'s' if n!=1 else ''}  |  "
                 f"Total neto: {total_neto:,.1f} kg"
        )

    def _sort(self, col):
        """Ordena la tabla por la columna clickeada."""
        idx = [c[0] for c in COLS].index(col)
        key = KEYS[idx]
        # Alternar ascendente/descendente
        if not hasattr(self, '_sort_reverse'):
            self._sort_reverse = {}
        reverse = self._sort_reverse.get(col, False)
        self._sort_reverse[col] = not reverse

        def sort_key(p):
            v = p.get(key, "") or ""
            if key in ("peso_tara", "peso_bruto", "peso_neto", "nro_doc"):
                try:
                    return float(v)
                except (ValueError, TypeError):
                    return 0
            return str(v).upper()

        self._datos.sort(key=sort_key, reverse=reverse)
        self._render()

    def _ver_ticket(self, event):
        sel = self.tree.selection()
        if not sel:
            return
        pid = int(sel[0])
        pesaje  = db.get_pesaje(pid, self.db_path)
        empresa = db.get_empresa(self.db_path)
        if not pesaje:
            return
        ruta = filedialog.asksaveasfilename(
            defaultextension=".pdf",
            initialfile=f"ticket_{pesaje['nro_doc']}.pdf",
            filetypes=[("PDF","*.pdf")],
            title="Guardar ticket",
        )
        if not ruta:
            return
        try:
            cert = db.get_certificado(self.db_path)
            generar_ticket(pesaje, empresa, ruta, cert)
            if sys.platform == "win32":
                os.startfile(ruta)
        except Exception as e:
            messagebox.showerror("Error", str(e))

    # ── Exportar ──────────────────────────────────────────────────────────
    def _excel(self):
        if not self._datos:
            messagebox.showinfo("Sin datos","No hay registros para exportar.")
            return
        ruta = filedialog.asksaveasfilename(
            defaultextension=".xlsx",
            initialfile=f"pesajes_{datetime.now().strftime('%Y%m%d')}.xlsx",
            filetypes=[("Excel","*.xlsx")],
            title="Guardar Excel",
        )
        if not ruta:
            return
        try:
            exportar_excel(self._datos, ruta)
            if sys.platform == "win32":
                os.startfile(ruta)
            messagebox.showinfo("Excel","Archivo exportado correctamente.")
        except Exception as e:
            messagebox.showerror("Error", str(e))

    def _pdf(self):
        if not self._datos:
            messagebox.showinfo("Sin datos","No hay registros para exportar.")
            return
        try:
            from reportlab.lib.pagesizes import A4, landscape
            from reportlab.lib import colors
            from reportlab.lib.units import cm
            from reportlab.platypus import (SimpleDocTemplate, Table, TableStyle,
                                            Paragraph, Spacer)
            from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
        except ImportError:
            messagebox.showerror("Error","Instala reportlab: pip install reportlab")
            return

        ruta = filedialog.asksaveasfilename(
            defaultextension=".pdf",
            initialfile=f"pesajes_{datetime.now().strftime('%Y%m%d')}.pdf",
            filetypes=[("PDF","*.pdf")],
            title="Guardar PDF",
        )
        if not ruta:
            return
        try:
            styles = getSampleStyleSheet()
            azul   = colors.HexColor("#1A5FA8")
            doc    = SimpleDocTemplate(ruta, pagesize=landscape(A4),
                                       leftMargin=1.5*cm, rightMargin=1.5*cm,
                                       topMargin=2*cm, bottomMargin=1.5*cm)
            t_s = ParagraphStyle("t", parent=styles["Heading1"],
                                  fontSize=14, textColor=azul, spaceAfter=4)
            s_s = ParagraphStyle("s", parent=styles["Normal"],
                                  fontSize=9, textColor=colors.grey, spaceAfter=12)
            elems = [
                Paragraph("Registro de Pesajes", t_s),
                Paragraph(f"Generado: {datetime.now().strftime('%d/%m/%Y %H:%M:%S')} — "
                          f"Total: {len(self._datos)} registros", s_s),
            ]
            cab = ["Doc","Fecha egreso","Exportador","Transporte",
                   "Patente","Producto","Tara","Bruto","Neto (kg)","Dest."]
            filas = [cab]
            for p in self._datos:
                filas.append([
                    str(p.get("nro_doc","")),
                    (p.get("fecha_egreso") or "")[:16],
                    (p.get("exportador") or "")[:18],
                    (p.get("transportista") or "")[:18],
                    p.get("patente_camion",""),
                    (p.get("producto") or "")[:10],
                    f"{p.get('peso_tara',0):,.0f}",
                    f"{p.get('peso_bruto',0):,.0f}",
                    f"{p.get('peso_neto',0):,.0f}",
                    p.get("destinacion_aduanera",""),
                ])
            total = sum(p.get("peso_neto",0) for p in self._datos)
            filas.append(["","","","","","TOTAL:","","",f"{total:,.0f}",""])

            cw = [1.5*cm,3.5*cm,4.5*cm,4.5*cm,2*cm,2.8*cm,2.3*cm,2.3*cm,2.5*cm,1.5*cm]
            tabla = Table(filas, colWidths=cw, repeatRows=1)
            tabla.setStyle(TableStyle([
                ("BACKGROUND",    (0,0),(-1,0), azul),
                ("TEXTCOLOR",     (0,0),(-1,0), colors.white),
                ("FONTNAME",      (0,0),(-1,0), "Helvetica-Bold"),
                ("FONTSIZE",      (0,0),(-1,0), 8),
                ("ALIGN",         (0,0),(-1,0), "CENTER"),
                ("ROWBACKGROUNDS",(0,1),(-1,-2),[colors.white,colors.HexColor("#F1F1F1")]),
                ("FONTSIZE",      (0,1),(-1,-1), 7.5),
                ("ALIGN",         (6,1),(-1,-1), "RIGHT"),
                ("GRID",          (0,0),(-1,-1), 0.3, colors.HexColor("#CCCCCC")),
                ("FONTNAME",      (0,-1),(-1,-1),"Helvetica-Bold"),
                ("TOPPADDING",    (0,0),(-1,-1), 3),
                ("BOTTOMPADDING", (0,0),(-1,-1), 3),
            ]))
            elems.append(tabla)
            doc.build(elems)
            if sys.platform == "win32":
                os.startfile(ruta)
            messagebox.showinfo("PDF","Archivo exportado correctamente.")
        except Exception as e:
            messagebox.showerror("Error", str(e))
