"""
ui/pantalla_egreso.py — Cargas abiertas + Egreso
Mejoras v2.1:
  - Alertas de peso fuera de rango por producto
  - Callback on_egreso_guardado para notificar al app
  - Nuevo callback de balanza con estado+estabilidad
"""
import customtkinter as ctk
import tkinter as tk
from tkinter import ttk, messagebox, filedialog
from datetime import datetime
import os, sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from db import database as db
from balanza.lector import SimuladorBalanza, ESTADO_OK, ESTADO_INESTABLE, ESTADO_SOBRECARGA
from exports.ticket import generar_ticket


def _tickets_path():
    cfg_file = os.path.join(os.path.dirname(__file__), "..", "config.ini")
    if os.path.exists(cfg_file):
        with open(cfg_file) as f:
            for line in f:
                if line.startswith("TICKETS_PATH="):
                    ruta = line.strip().split("=", 1)[1].strip()
                    if ruta:
                        os.makedirs(ruta, exist_ok=True)
                        return ruta
    default = os.path.join(os.path.expanduser("~"), "Documents", "Tickets_Balanza")
    os.makedirs(default, exist_ok=True)
    return default


from ui.selector import SelectorPopup

AZUL   = "#1A5FA8"
VERDE  = "#2E7D32"
ROJO   = "#C62828"
GRIS   = "#6B7280"
AZUL2  = "#2563EB"
RO     = "#EBEBEB"
FONT   = ("Helvetica", 11)
FONT_B = ("Helvetica", 10, "bold")
FONT_S = ("Helvetica", 10)


def _now():
    return datetime.now().strftime("%d/%m/%Y %H:%M:%S")


def _parse_dt(s):
    try:
        return datetime.strptime(s.strip(), "%d/%m/%Y %H:%M:%S")
    except Exception:
        return None


def _upper_bind(entry):
    def _on_key(event):
        try:
            val = entry.get()
            up  = val.upper()
            if val != up:
                pos = entry.index(tk.INSERT)
                entry.delete(0, "end")
                entry.insert(0, up)
                try:
                    entry.icursor(pos)
                except Exception:
                    pass
        except Exception:
            pass
    entry.bind("<KeyRelease>", _on_key)


class PantallaEgreso(ctk.CTkFrame):
    def __init__(self, master, db_path=None, usuario="OPERADOR",
                 usar_sim=True, on_egreso_guardado=None):
        super().__init__(master, fg_color="transparent")
        self.db_path         = db_path
        self.usuario         = usuario
        self.usar_sim        = usar_sim
        self._on_guardado    = on_egreso_guardado
        self._peso_live      = 0.0
        self._estable        = False
        self._sim            = None
        self._pesaje_id      = None
        self._productos_sel  = []
        self._build()
        self._cargar_abiertos()
        self._start_balanza()

    # ── Build ─────────────────────────────────────────────────────────────
    def _build(self):
        self.columnconfigure(0, weight=0)
        self.columnconfigure(1, weight=1)
        self.rowconfigure(0, weight=1)

        # ══ IZQUIERDO: lista angosta ══════════════════════════════════════
        izq = ctk.CTkFrame(self, fg_color="transparent", width=230)
        izq.grid(row=0, column=0, sticky="nsew", padx=(0, 6))
        izq.grid_propagate(False)
        izq.columnconfigure(0, weight=1)
        izq.rowconfigure(1, weight=1)

        ctk.CTkLabel(izq, text="Cargas abiertas",
                     font=("Helvetica", 11, "bold"),
                     text_color=AZUL, anchor="w"
                     ).grid(row=0, column=0, sticky="w", padx=2, pady=(0, 4))

        ft = tk.Frame(izq, bg="#CCCCCC")
        ft.grid(row=1, column=0, sticky="nsew")
        ft.columnconfigure(0, weight=1)
        ft.rowconfigure(0, weight=1)

        style = ttk.Style()
        style.configure("Ab.Treeview",
                        font=("Helvetica", 10), rowheight=24,
                        background="white", fieldbackground="white")
        style.configure("Ab.Treeview.Heading",
                        font=("Helvetica", 9, "bold"))
        style.map("Ab.Treeview",
                  background=[("selected", AZUL)],
                  foreground=[("selected", "white")])

        cols = [("Nro", 45), ("Patente", 72), ("Tara", 58)]
        self.tree = ttk.Treeview(ft, style="Ab.Treeview",
                                  columns=[c[0] for c in cols],
                                  show="headings", selectmode="browse")
        vsb = ttk.Scrollbar(ft, orient="vertical", command=self.tree.yview)
        self.tree.configure(yscroll=vsb.set)
        self.tree.grid(row=0, column=0, sticky="nsew")
        vsb.grid(row=0, column=1, sticky="ns")

        for col, w in cols:
            self.tree.heading(col, text=col)
            self.tree.column(col, width=w, minwidth=30, anchor="center")

        self.tree.tag_configure("par",   background="#F5F8FC")
        self.tree.tag_configure("impar", background="white")
        self.tree.bind("<<TreeviewSelect>>", self._on_select)

        ctk.CTkButton(izq, text="Actualizar", height=26,
                      command=self._cargar_abiertos,
                      fg_color=GRIS, text_color="white",
                      hover_color="#4B5563", font=FONT_S
                      ).grid(row=2, column=0, sticky="ew", padx=2, pady=(4, 0))

        # ══ DERECHO: formulario compacto ══════════════════════════════════
        der = ctk.CTkFrame(self, fg_color="transparent")
        der.grid(row=0, column=1, sticky="nsew")
        der.columnconfigure(0, weight=1)
        der.rowconfigure(0, weight=0)
        der.rowconfigure(1, weight=0)
        der.rowconfigure(2, weight=0)
        der.rowconfigure(3, weight=0)
        der.rowconfigure(4, weight=1)
        der.rowconfigure(5, weight=0)
        der.rowconfigure(6, weight=0)

        # ── Indicador de peso ──
        top = ctk.CTkFrame(der, fg_color=AZUL, corner_radius=6, height=48)
        top.grid(row=0, column=0, sticky="ew", pady=(0, 3))
        top.grid_propagate(False)
        top.columnconfigure(0, weight=1)
        self.lbl_peso = ctk.CTkLabel(top, text="0,0",
                                      font=("Helvetica", 26, "bold"),
                                      text_color="white")
        self.lbl_peso.place(relx=0.5, rely=0.32, anchor="center")
        self.lbl_sub = ctk.CTkLabel(top, text="kg  —  sin conexion",
                                     font=("Helvetica", 8),
                                     text_color="#B3D4F0")
        self.lbl_sub.place(relx=0.5, rely=0.74, anchor="center")

        # ── Resumen ingreso ──
        self._frm_res = ctk.CTkFrame(der, fg_color="#EBF3FF",
                                      corner_radius=4, height=28)
        self._frm_res.grid(row=1, column=0, sticky="ew", pady=(0, 3))
        self._frm_res.grid_propagate(False)
        self.lbl_res = ctk.CTkLabel(
            self._frm_res,
            text="Selecciona un ticket de la lista",
            font=("Helvetica", 9), text_color="#888888",
            anchor="w")
        self.lbl_res.place(relx=0, rely=0.5, anchor="w", x=8)

        # ── Fecha egreso + Peso bruto ──
        row_eg = ctk.CTkFrame(der, fg_color="transparent")
        row_eg.grid(row=2, column=0, sticky="ew", pady=(0, 3))
        row_eg.columnconfigure((0, 1), weight=1)

        def campo_row(parent, col, label, ro=False):
            f = ctk.CTkFrame(parent, fg_color="transparent")
            f.columnconfigure(0, weight=1)
            f.grid(row=0, column=col, sticky="ew",
                   padx=(0 if col == 0 else 4, 0))
            ctk.CTkLabel(f, text=label, font=FONT_B, anchor="w"
                         ).grid(row=0, column=0, sticky="w")
            e = ctk.CTkEntry(f, height=24, font=FONT,
                              state="disabled" if ro else "normal",
                              fg_color=RO if ro else None)
            e.grid(row=1, column=0, sticky="ew", pady=(1, 0))
            return e

        self.ent_feg   = campo_row(row_eg, 0, "Fecha egreso", ro=True)
        self.ent_bruto = campo_row(row_eg, 1, "Peso bruto (kg)")
        self.ent_bruto.bind("<KeyRelease>", lambda e: self._calc_neto())

        # ── Productos ──
        prod_f = ctk.CTkFrame(der, fg_color="transparent")
        prod_f.grid(row=3, column=0, sticky="ew", pady=(0, 3))
        prod_f.columnconfigure(0, weight=1)

        ctk.CTkLabel(prod_f, text="Productos",
                     font=FONT_B, anchor="w"
                     ).grid(row=0, column=0, sticky="w")

        lista_frame = tk.Frame(prod_f, bg="#DDDDDD", height=52)
        lista_frame.grid(row=1, column=0, sticky="ew", pady=(1, 0))
        lista_frame.columnconfigure(0, weight=1)
        lista_frame.rowconfigure(0, weight=1)
        lista_frame.grid_propagate(False)

        self.lista_prods = ttk.Treeview(
            lista_frame, columns=["cod", "desc"],
            show="headings", height=2, selectmode="browse")
        self.lista_prods.heading("cod",  text="Cod")
        self.lista_prods.heading("desc", text="Descripcion")
        self.lista_prods.column("cod",   width=50, anchor="center")
        self.lista_prods.column("desc",  width=180)
        self.lista_prods.grid(row=0, column=0, sticky="nsew")

        btp = ctk.CTkFrame(prod_f, fg_color="transparent")
        btp.grid(row=2, column=0, sticky="ew", pady=(2, 0))
        btp.columnconfigure((0, 1), weight=1)
        ctk.CTkButton(btp, text="+ Agregar producto",
                      command=self._agregar_producto, height=26,
                      fg_color=AZUL2, text_color="white",
                      hover_color="#1D4ED8", font=FONT_S
                      ).grid(row=0, column=0, sticky="ew", padx=(0, 3))
        ctk.CTkButton(btp, text="Quitar",
                      command=self._quitar_producto, height=26,
                      fg_color=ROJO, text_color="white",
                      hover_color="#991B1B", font=FONT_S
                      ).grid(row=0, column=1, sticky="ew")

        # ── Aduana + Observaciones ──
        mid_f = ctk.CTkFrame(der, fg_color="transparent")
        mid_f.grid(row=4, column=0, sticky="nsew", pady=(0, 3))
        mid_f.columnconfigure((0, 1), weight=1)

        def campo_grid(parent, row, col, label, ro=False):
            f = ctk.CTkFrame(parent, fg_color="transparent")
            f.columnconfigure(0, weight=1)
            f.grid(row=row, column=col, sticky="nsew",
                   padx=(0 if col == 0 else 4, 0),
                   pady=(0 if row == 0 else 3, 0))
            ctk.CTkLabel(f, text=label, font=FONT_B, anchor="w"
                         ).grid(row=0, column=0, sticky="w")
            e = ctk.CTkEntry(f, height=24, font=FONT,
                              state="disabled" if ro else "normal",
                              fg_color=RO if ro else None)
            e.grid(row=1, column=0, sticky="ew", pady=(1, 0))
            if not ro:
                _upper_bind(e)
            return e

        self.ent_dest  = campo_grid(mid_f, 0, 0, "Dest. aduanera")
        self.ent_bulto = campo_grid(mid_f, 0, 1, "Bulto")
        self.ent_prec  = campo_grid(mid_f, 1, 0, "Precintos")
        self.ent_obs   = campo_grid(mid_f, 1, 1, "Observaciones")

        # ── Peso neto destacado ──
        neto_f = ctk.CTkFrame(der, fg_color=AZUL, corner_radius=6, height=44)
        neto_f.grid(row=5, column=0, sticky="ew", pady=(0, 3))
        neto_f.grid_propagate(False)
        ctk.CTkLabel(neto_f, text="PESO NETO",
                     font=("Helvetica", 8, "bold"),
                     text_color="#B3D4F0"
                     ).place(relx=0.5, rely=0.20, anchor="center")
        self.lbl_neto = ctk.CTkLabel(neto_f,
                                      text="— seleccionar ticket —",
                                      font=("Helvetica", 15, "bold"),
                                      text_color="white")
        self.lbl_neto.place(relx=0.5, rely=0.65, anchor="center")

        # ── Botones ──
        bf = ctk.CTkFrame(der, fg_color="transparent")
        bf.grid(row=6, column=0, sticky="ew")
        bf.columnconfigure((0, 1, 2), weight=1)

        ctk.CTkButton(bf, text="F2 Capturar bruto",
                      command=self._capturar, height=34,
                      fg_color=AZUL2, text_color="white",
                      hover_color="#1D4ED8", font=FONT_B
                      ).grid(row=0, column=0, sticky="ew", padx=(0, 3))
        ctk.CTkButton(bf, text="F5 Guardar EGRESO",
                      command=self._guardar, height=34,
                      fg_color=VERDE, text_color="white",
                      hover_color="#166534", font=FONT_B
                      ).grid(row=0, column=1, sticky="ew", padx=(0, 3))
        ctk.CTkButton(bf, text="Imprimir",
                      command=self._imprimir, height=34,
                      fg_color="#444444", text_color="white",
                      hover_color="#222222", font=FONT_B
                      ).grid(row=0, column=2, sticky="ew")

    # ── Cargas abiertas ───────────────────────────────────────────────────
    def _cargar_abiertos(self):
        self.tree.delete(*self.tree.get_children())
        for i, p in enumerate(db.list_abiertos(self.db_path)):
            tara = f"{p.get('peso_tara', 0):,.0f}"
            tag  = "par" if i % 2 == 0 else "impar"
            self.tree.insert("", "end", iid=str(p["id"]),
                             values=[p.get("nro_doc", ""),
                                     p.get("patente_camion", ""),
                                     tara],
                             tags=(tag,))

    def _on_select(self, event):
        sel = self.tree.selection()
        if not sel:
            return
        self._pesaje_id = int(sel[0])
        p = db.get_pesaje(self._pesaje_id, self.db_path)
        if not p:
            return

        cont = p.get("id_contenedor", "") or ""
        resumen = (
            f"N°{p.get('nro_doc','')}  |  "
            f"{p.get('patente_camion','')}  |  "
            f"{p.get('chofer','')}  |  "
            f"Tara: {p.get('peso_tara',0):,.0f} kg"
            + (f"  |  Cont: {cont}" if cont else "")
        )
        self.lbl_res.configure(text=resumen, text_color="#1A3A5A")

        for w in (self.ent_feg, self.ent_bruto,
                  self.ent_dest, self.ent_bulto,
                  self.ent_prec, self.ent_obs):
            self._set(w, "")
        self._productos_sel = []
        self.lista_prods.delete(*self.lista_prods.get_children())
        self.lbl_neto.configure(text="captura el peso bruto")

    # ── Productos ─────────────────────────────────────────────────────────
    def _agregar_producto(self):
        if not self._pesaje_id:
            messagebox.showwarning("Atencion", "Selecciona un ticket primero.")
            return
        ya = {p["id"] for p in self._productos_sel}
        disponibles = [p for p in db.list_productos(self.db_path)
                       if p["id"] not in ya]
        if not disponibles:
            messagebox.showinfo("Info", "Ya agregaste todos los productos.")
            return
        SelectorPopup(
            self.winfo_toplevel(),
            "Seleccionar Producto",
            [("Codigo", "codigo", 80), ("Descripcion", "descripcion", 300)],
            disponibles,
            self._on_prod_elegido,
        )

    def _on_prod_elegido(self, obj):
        self._productos_sel.append(obj)
        self.lista_prods.insert("", "end",
                                 iid=str(obj["id"]),
                                 values=[obj.get("codigo", ""),
                                         obj.get("descripcion", "").upper()])

    def _quitar_producto(self):
        sel = self.lista_prods.selection()
        if not sel:
            return
        pid = int(sel[0])
        self._productos_sel = [p for p in self._productos_sel if p["id"] != pid]
        self.lista_prods.delete(sel[0])

    # ── Balanza ───────────────────────────────────────────────────────────
    def _start_balanza(self):
        if self.usar_sim:
            self._sim = SimuladorBalanza(base=39500)
            self._sim.iniciar(self._cb_peso)

    def _cb_peso(self, p, estado, estable):
        self._peso_live = p
        self._estable = estable
        txt = f"{p:,.1f}".replace(",", "X").replace(".", ",").replace("X", ".")
        if estado == ESTADO_OK:
            sub = f"kg  —  {'ESTABLE' if estable else 'estabilizando...'}"
        elif estado == ESTADO_INESTABLE:
            sub = "kg  —  INESTABLE"
        elif estado == ESTADO_SOBRECARGA:
            sub = "kg  —  SOBRECARGA"
        else:
            sub = "kg  —  sin conexion"
        try:
            self.after(0, lambda t=txt, s=sub: (
                self.lbl_peso.configure(text=t),
                self.lbl_sub.configure(text=s)
            ))
        except RuntimeError:
            pass

    def _capturar(self):
        self._set(self.ent_bruto, f"{self._peso_live:.1f}")
        self._set(self.ent_feg, _now())
        self._calc_neto()

    def _calc_neto(self):
        if not self._pesaje_id:
            return
        p = db.get_pesaje(self._pesaje_id, self.db_path)
        if not p:
            return
        try:
            tara  = float(p.get("peso_tara") or 0)
            bruto = float(self._get(self.ent_bruto).replace(",", ".") or 0)
            neto  = bruto - tara
            txt = f"{neto:,.1f}".replace(",", "X").replace(".", ",").replace("X", ".") + " kg"
            self.lbl_neto.configure(text=txt)
        except ValueError:
            pass

    # ── Validar peso contra rango de producto ─────────────────────────────
    def _validar_rango_peso(self, neto):
        """Verifica si el peso neto está dentro del rango del producto. Devuelve warning o None."""
        if not self._productos_sel:
            return None
        warnings = []
        for prod in self._productos_sel:
            p_min = float(prod.get("peso_min") or 0)
            p_max = float(prod.get("peso_max") or 0)
            if p_min <= 0 and p_max <= 0:
                continue
            nombre = prod.get("descripcion", "?")
            if p_min > 0 and neto < p_min:
                warnings.append(f"{nombre}: peso neto {neto:,.0f} kg es MENOR al minimo ({p_min:,.0f} kg)")
            if p_max > 0 and neto > p_max:
                warnings.append(f"{nombre}: peso neto {neto:,.0f} kg EXCEDE el maximo ({p_max:,.0f} kg)")
        return "\n".join(warnings) if warnings else None

    # ── Guardar egreso ────────────────────────────────────────────────────
    def _guardar(self):
        if not self._pesaje_id:
            messagebox.showwarning("Atencion", "Selecciona un ticket.")
            return
        bruto_s = self._get(self.ent_bruto)
        if not bruto_s:
            messagebox.showerror("Falta peso", "Captura el peso bruto primero (F2).")
            return
        try:
            bruto = float(bruto_s.replace(",", "."))
        except ValueError:
            messagebox.showerror("Error", "Peso bruto invalido.")
            return

        p    = db.get_pesaje(self._pesaje_id, self.db_path)
        tara = float(p.get("peso_tara") or 0)
        neto = bruto - tara

        feg_str = self._get(self.ent_feg) or _now()
        fing_dt = _parse_dt(p.get("fecha_ingreso", ""))
        feg_dt  = _parse_dt(feg_str)
        if fing_dt and feg_dt and feg_dt <= fing_dt:
            messagebox.showerror("Fecha invalida",
                f"El egreso debe ser posterior al ingreso.\n"
                f"Ingreso: {p.get('fecha_ingreso','')}\nEgreso:  {feg_str}")
            return

        # ── Alerta de peso fuera de rango ──
        warning_rango = self._validar_rango_peso(neto)
        if warning_rango:
            if not messagebox.askyesno(
                "Peso fuera de rango",
                f"ATENCION — El peso neto esta fuera del rango esperado:\n\n"
                f"{warning_rango}\n\n"
                f"¿Guardar de todas formas?"
            ):
                return

        prod_nom = " / ".join(p2["descripcion"].upper()
                              for p2 in self._productos_sel)
        id_prod  = self._productos_sel[0]["id"] if self._productos_sel else None

        d = dict(
            id_producto=id_prod,
            producto=prod_nom,
            id_bulto=self._get(self.ent_bulto).upper(),
            precintos=self._get(self.ent_prec).upper(),
            destinacion_aduanera=self._get(self.ent_dest).upper(),
            observaciones=self._get(self.ent_obs).upper(),
            fecha_egreso=feg_str,
            peso_bruto=bruto,
            peso_neto=neto,
            usuario_egreso=self.usuario,
        )
        try:
            db.cerrar_egreso(self._pesaje_id, d, self.db_path)
        except Exception as ex:
            messagebox.showerror("Error al guardar", str(ex))
            return

        messagebox.showinfo("Egreso guardado",
                            f"Ticket N° {p.get('nro_doc','')}  |  "
                            f"Peso neto: {neto:,.1f} kg")
        if self._on_guardado:
            self._on_guardado()
        self._cargar_abiertos()
        self.lbl_res.configure(
            text="Selecciona un ticket de la lista",
            text_color="#888888")
        self.lbl_neto.configure(text="— seleccionar ticket —")
        self._pesaje_id = None

    # ── Imprimir ──────────────────────────────────────────────────────────
    def _imprimir(self):
        if not self._pesaje_id:
            messagebox.showwarning("Atencion", "Selecciona un ticket primero.")
            return
        pesaje = db.get_pesaje(self._pesaje_id, self.db_path)
        if not pesaje:
            return
        if pesaje.get("estado") != "cerrado":
            messagebox.showwarning("Atencion",
                "Guarda el egreso antes de imprimir.")
            return
        empresa = db.get_empresa(self.db_path)
        cert    = db.get_certificado(self.db_path)
        carpeta_default = _tickets_path()
        ruta = filedialog.asksaveasfilename(
            defaultextension=".pdf",
            initialfile=f"ticket_{pesaje['nro_doc']}.pdf",
            initialdir=carpeta_default,
            filetypes=[("PDF", "*.pdf")],
            title="Guardar ticket")
        if not ruta:
            return
        try:
            generar_ticket(pesaje, empresa, ruta, cert, tipo="egreso")
            if sys.platform == "win32":
                os.startfile(ruta)
            messagebox.showinfo("Ticket", "Ticket generado correctamente.")
        except Exception as ex:
            messagebox.showerror("Error", str(ex))

    def recargar(self):
        self._cargar_abiertos()

    # ── Helpers ───────────────────────────────────────────────────────────
    def _get(self, w):
        try:
            s = w.cget("state")
            if s == "disabled":
                w.configure(state="normal")
                v = w.get()
                w.configure(state="disabled")
                return v.strip()
            return w.get().strip()
        except Exception:
            return ""

    def _set(self, w, v):
        try:
            s = w.cget("state")
            if s == "disabled":
                w.configure(state="normal")
            w.delete(0, "end")
            w.insert(0, str(v))
            if s == "disabled":
                w.configure(state="disabled")
        except Exception:
            pass
