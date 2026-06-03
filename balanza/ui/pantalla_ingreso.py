"""
ui/pantalla_ingreso.py — Formulario de INGRESO con selectores popup
Mejoras v2.1:
  - Autocompletado inteligente por patente
  - Atajos de teclado (F2=capturar, F5=guardar, F8=nuevo)
  - Nuevo callback de balanza con estado+estabilidad
"""
import customtkinter as ctk
from tkinter import messagebox
from datetime import datetime
import os, sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from db import database as db
from balanza.lector import SimuladorBalanza, ESTADO_OK, ESTADO_INESTABLE, ESTADO_SOBRECARGA
from ui.selector import CampoSelector
from ui.pantalla_egreso import _upper_bind
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


AZUL  = "#1A5FA8"
VERDE = "#2E7D32"
RO    = "#EBEBEB"
FB    = ("Helvetica", 10, "bold")
FN    = ("Helvetica", 11)
FS    = ("Helvetica", 10)


def _now():
    return datetime.now().strftime("%d/%m/%Y %H:%M:%S")


def _sep(parent):
    ctk.CTkFrame(parent, height=1, fg_color="#DDDDDD").pack(
        fill="x", padx=2, pady=3)


def _sec(parent, txt):
    ctk.CTkLabel(parent, text=txt, font=("Helvetica",9,"bold"),
                 text_color=AZUL, anchor="w").pack(
        fill="x", padx=4, pady=(4,0))


def _campo_ro(parent, col, label, bold=False):
    f = ctk.CTkFrame(parent, fg_color="transparent")
    f.columnconfigure(0, weight=1)
    f.grid(row=0, column=col, sticky="nsew",
           padx=(0 if col == 0 else 4, 0))
    ctk.CTkLabel(f, text=label, font=FB, anchor="w").grid(sticky="w")
    e = ctk.CTkEntry(f, height=26,
                     font=("Helvetica",12,"bold") if bold else FN,
                     state="disabled", fg_color=RO)
    e.grid(sticky="ew", pady=(1,0))
    return e


def _campo_rw(parent, col, label):
    f = ctk.CTkFrame(parent, fg_color="transparent")
    f.columnconfigure(0, weight=1)
    f.grid(row=0, column=col, sticky="nsew",
           padx=(0 if col == 0 else 4, 0))
    ctk.CTkLabel(f, text=label, font=FB, anchor="w").grid(sticky="w")
    e = ctk.CTkEntry(f, height=26, font=FN)
    e.grid(sticky="ew", pady=(1,0))
    return e


def _fila(parent, n_cols, pesos=None):
    f = ctk.CTkFrame(parent, fg_color="transparent")
    for i in range(n_cols):
        f.columnconfigure(i, weight=(pesos[i] if pesos else 1))
    return f


class PantallaIngreso(ctk.CTkFrame):
    def __init__(self, master, db_path=None, usuario="OPERADOR",
                 usar_sim=True, on_ingreso_guardado=None):
        super().__init__(master, fg_color="transparent")
        self.db_path      = db_path
        self.usuario      = usuario
        self.usar_sim     = usar_sim
        self._on_guardado = on_ingreso_guardado
        self._peso_live   = 0.0
        self._estable     = False
        self._sim         = None
        self._build()
        self._nuevo()
        self._start_balanza()
        self._bind_atajos()

    def _bind_atajos(self):
        """Atajos de teclado globales."""
        top = self.winfo_toplevel()
        top.bind("<F2>", lambda e: self._capturar())
        top.bind("<F5>", lambda e: self._guardar())
        top.bind("<F8>", lambda e: self._nuevo())

    # ── Build UI ──────────────────────────────────────────────────────────
    def _build(self):
        self.columnconfigure(0, weight=1)
        self.rowconfigure(0, weight=1)

        wrap = ctk.CTkFrame(self, fg_color="transparent")
        wrap.grid(row=0, column=0, sticky="nsew")
        wrap.columnconfigure(0, weight=1)

        # ── Indicador de peso ──
        top = ctk.CTkFrame(wrap, fg_color=AZUL, corner_radius=8, height=54)
        top.pack(fill="x", pady=(0,4))
        top.pack_propagate(False)
        self.lbl_peso = ctk.CTkLabel(top, text="0,0",
                                      font=("Helvetica",30,"bold"),
                                      text_color="white")
        self.lbl_peso.place(relx=0.5, rely=0.33, anchor="center")
        self.lbl_sub = ctk.CTkLabel(top, text="kg  —  sin conexion   |   F2=Capturar  F5=Guardar  F8=Nuevo",
                                     font=("Helvetica",9),
                                     text_color="#B3D4F0")
        self.lbl_sub.place(relx=0.5, rely=0.76, anchor="center")

        _sep(wrap)

        # ── Fila 1: Nro Doc / Tipo / Exportador ──
        _sec(wrap, "Documento  —  Exportador")
        f1 = _fila(wrap, 4, pesos=[1,1,3,3])
        f1.pack(fill="x", padx=2, pady=1)

        nro_f = ctk.CTkFrame(f1, fg_color="transparent")
        nro_f.columnconfigure(0, weight=1)
        nro_f.grid(row=0, column=0, sticky="nsew", padx=(0,4))
        ctk.CTkLabel(nro_f, text="Nro. Documento", font=FB, anchor="w").grid(sticky="w")
        self.ent_nro = ctk.CTkEntry(nro_f, height=26,
                                     font=("Helvetica",12,"bold"),
                                     state="disabled", fg_color=RO)
        self.ent_nro.grid(sticky="ew", pady=(1,0))

        tipo_f = ctk.CTkFrame(f1, fg_color="transparent")
        tipo_f.columnconfigure(0, weight=1)
        tipo_f.grid(row=0, column=1, sticky="nsew", padx=(0,4))
        ctk.CTkLabel(tipo_f, text="Tipo", font=FB, anchor="w").grid(sticky="w")
        self.cmb_tipo = ctk.CTkComboBox(tipo_f, height=26, font=FN,
                                         values=["Camion","Acoplado","Contenedor"])
        self.cmb_tipo.set("Camion")
        self.cmb_tipo.grid(sticky="ew", pady=(1,0))

        exp_wrap = ctk.CTkFrame(f1, fg_color="transparent")
        exp_wrap.columnconfigure(0, weight=1)
        f1.columnconfigure(2, weight=3)
        exp_wrap.grid(row=0, column=2, columnspan=2, sticky="nsew", padx=(0,0))
        self.sel_exp = CampoSelector(
            exp_wrap, label="Exportador",
            titulo_popup="Seleccionar Exportador",
            cols=[("CUIT","cuit",180),("Razon Social","razon_social",340)],
            loader=lambda: db.list_exportadores(self.db_path),
            campos_display=["cuit","razon_social"],
            on_crear=self._crear_exportador,
        )
        self.sel_exp.pack(fill="x")

        _sep(wrap)

        # ── Fila 2: Transportista ──
        _sec(wrap, "Transportista")
        self.sel_trans = CampoSelector(
            wrap, label="Transportista",
            titulo_popup="Seleccionar Transportista",
            cols=[("CUIT","cuit",180),("Razon Social","razon_social",340)],
            loader=lambda: db.list_transportistas(self.db_path),
            campos_display=["cuit","razon_social"],
            on_crear=self._crear_transportista,
        )
        self.sel_trans.pack(fill="x", padx=2, pady=1)

        _sep(wrap)

        # ── Fila 3: Camion + Acoplado + Fecha ingreso ──
        _sec(wrap, "Vehiculo")
        f3 = _fila(wrap, 3, pesos=[2,1,1])
        f3.pack(fill="x", padx=2, pady=1)

        cam_wrap = ctk.CTkFrame(f3, fg_color="transparent")
        cam_wrap.columnconfigure(0, weight=1)
        f3.columnconfigure(0, weight=2)
        cam_wrap.grid(row=0, column=0, sticky="nsew", padx=(0,4))
        self.sel_cam = CampoSelector(
            cam_wrap, label="Camion",
            titulo_popup="Seleccionar Camion",
            cols=[("Patente","patente",120),
                  ("Descripcion","descripcion",220),
                  ("Transportista","transportista",200)],
            loader=lambda: db.list_camiones(self.db_path),
            campos_display=["patente","descripcion"],
            on_crear=self._crear_camion,
            on_select=self._on_camion_seleccionado,
        )
        self.sel_cam.pack(fill="x")

        self.ent_acop = _campo_rw(f3, 1, "Patente acoplado")
        _upper_bind(self.ent_acop)
        self.ent_fing = _campo_ro(f3, 2, "Fecha ingreso")

        _sep(wrap)

        # ── Fila 4: Chofer ──
        _sec(wrap, "Chofer")
        f4 = _fila(wrap, 4, pesos=[2,1,1,1])
        f4.pack(fill="x", padx=2, pady=1)

        ch_wrap = ctk.CTkFrame(f4, fg_color="transparent")
        ch_wrap.columnconfigure(0, weight=1)
        f4.columnconfigure(0, weight=2)
        ch_wrap.grid(row=0, column=0, sticky="nsew", padx=(0,4))
        self.sel_ch = CampoSelector(
            ch_wrap, label="Chofer",
            titulo_popup="Seleccionar Chofer",
            cols=[("Nro. Doc","nro_doc",110),
                  ("Nombre","nombre",240),
                  ("Tipo","tipo_doc",60),
                  ("Nacionalidad","nacionalidad",100)],
            loader=lambda: db.list_choferes(self.db_path),
            campos_display=["nombre","nro_doc"],
            on_select=self._on_chofer,
            on_crear=self._crear_chofer,
        )
        self.sel_ch.pack(fill="x")

        td_f = ctk.CTkFrame(f4, fg_color="transparent")
        td_f.columnconfigure(0, weight=1)
        td_f.grid(row=0, column=1, sticky="nsew", padx=(0,4))
        ctk.CTkLabel(td_f, text="Tipo doc", font=FB, anchor="w").grid(sticky="w")
        self.cmb_tdoc = ctk.CTkComboBox(td_f, height=26, font=FN,
                                         values=["DNI","LC","LE","PASAPORTE","CI"])
        self.cmb_tdoc.set("DNI")
        self.cmb_tdoc.grid(sticky="ew", pady=(1,0))

        self.ent_nacion = _campo_rw(f4, 2, "Nacionalidad")
        _upper_bind(self.ent_nacion)
        self.ent_tara   = _campo_rw(f4, 3, "Peso tara (kg)")

        _sep(wrap)

        # ── Fila 5: Contenedor ──
        _sec(wrap, "Identificacion")
        f5 = _fila(wrap, 1)
        f5.pack(fill="x", padx=2, pady=1)
        self.ent_cont = _campo_rw(f5, 0, "Nro. Contenedor")
        _upper_bind(self.ent_cont)

        _sep(wrap)

        # ── Botones ──
        bf = ctk.CTkFrame(wrap, fg_color="transparent")
        bf.pack(fill="x", padx=2, pady=(4,2))
        bf.columnconfigure((0,1,2), weight=1)

        ctk.CTkButton(bf, text="F8  Limpiar / Nuevo",
                      command=self._nuevo, height=34,
                      fg_color="#6B7280", text_color="white",
                      hover_color="#4B5563", font=FB
                      ).grid(row=0, column=0, sticky="ew", padx=(0,4))
        ctk.CTkButton(bf, text="F2  Capturar peso tara",
                      command=self._capturar, height=34,
                      fg_color="#2563EB", text_color="white",
                      hover_color="#1D4ED8", font=FB
                      ).grid(row=0, column=1, sticky="ew", padx=(0,4))
        ctk.CTkButton(bf, text="F5  Registrar INGRESO",
                      command=self._guardar, height=34,
                      fg_color=VERDE, text_color="white", font=FB
                      ).grid(row=0, column=2, sticky="ew")

        bf2 = ctk.CTkFrame(wrap, fg_color="transparent")
        bf2.pack(fill="x", padx=2, pady=(0, 4))
        bf2.columnconfigure(0, weight=1)
        ctk.CTkButton(bf2, text="Imprimir comprobante de ingreso",
                      command=self._imprimir_ingreso, height=30,
                      fg_color="#444444", text_color="white", font=FS
                      ).grid(row=0, column=0, sticky="ew")

    # ── Balanza ───────────────────────────────────────────────────────────
    def _start_balanza(self):
        if self.usar_sim:
            self._sim = SimuladorBalanza(base=16680)
            self._sim.iniciar(self._cb_peso)

    def _cb_peso(self, p, estado, estable):
        self._peso_live = p
        self._estable = estable
        txt = f"{p:,.1f}".replace(",","X").replace(".",",").replace("X",".")
        if estado == ESTADO_OK:
            sub = f"kg  —  {'ESTABLE' if estable else 'estabilizando...'}"
        elif estado == ESTADO_INESTABLE:
            sub = "kg  —  INESTABLE"
        elif estado == ESTADO_SOBRECARGA:
            sub = "kg  —  SOBRECARGA"
        else:
            sub = "kg  —  sin conexion"
        sub += "   |   F2=Capturar  F5=Guardar  F8=Nuevo"
        try:
            self.after(0, lambda t=txt, s=sub: self._upd(t, s))
        except RuntimeError:
            pass

    def _upd(self, t, s):
        try:
            self.lbl_peso.configure(text=t)
            self.lbl_sub.configure(text=s)
        except Exception:
            pass

    # ── Autocompletado por patente ────────────────────────────────────────
    def _on_camion_seleccionado(self, obj):
        """Cuando se selecciona un camión, autocompletar datos relacionados.
        Prioridad: datos del camión (id_transportista) > último pesaje cerrado."""
        patente = obj.get("patente", "")
        if not patente:
            return

        # 1) Autocompletar transportista desde el camión directamente
        transportista_ok = False
        if obj.get("id_transportista"):
            transportistas = db.list_transportistas(self.db_path)
            for t in transportistas:
                if t["id"] == obj["id_transportista"]:
                    self.sel_trans.set_obj(t)
                    transportista_ok = True
                    break

        # 2) Buscar último pesaje cerrado para completar chofer, acoplado, exportador
        ultimo = db.ultimo_pesaje_por_patente(patente, self.db_path)
        if not ultimo:
            return

        # Autocompletar transportista desde pesaje si no se encontró en el camión
        if not transportista_ok and ultimo.get("id_transportista"):
            transportistas = db.list_transportistas(self.db_path)
            for t in transportistas:
                if t["id"] == ultimo["id_transportista"]:
                    self.sel_trans.set_obj(t)
                    break

        # Autocompletar chofer
        if ultimo.get("id_chofer"):
            choferes = db.list_choferes(self.db_path)
            for ch in choferes:
                if ch["id"] == ultimo["id_chofer"]:
                    self.sel_ch.set_obj(ch)
                    self._on_chofer(ch)
                    break
        # Autocompletar acoplado
        if ultimo.get("patente_acoplado"):
            self._set(self.ent_acop, ultimo["patente_acoplado"])
        # Autocompletar exportador
        if ultimo.get("id_exportador"):
            exportadores = db.list_exportadores(self.db_path)
            for ex in exportadores:
                if ex["id"] == ultimo["id_exportador"]:
                    self.sel_exp.set_obj(ex)
                    break

    # ── Callbacks ─────────────────────────────────────────────────────────
    def _on_chofer(self, obj):
        self.cmb_tdoc.set(obj.get("tipo_doc","DNI"))
        self._set(self.ent_nacion, obj.get("nacionalidad","ARGENTINO"))

    def _capturar(self):
        self._set(self.ent_tara, f"{self._peso_live:.1f}")

    # ── Nuevo ──────────────────────────────────────────────────────────────
    def _nuevo(self):
        self._set(self.ent_nro, str(db.next_nro_doc(self.db_path)))
        self.cmb_tipo.set("Camion")
        for s in (self.sel_exp, self.sel_trans, self.sel_cam, self.sel_ch):
            s.limpiar()
        for w in (self.ent_acop, self.ent_tara, self.ent_fing, self.ent_cont):
            self._set(w, "")
        self._set(self.ent_nacion, "ARGENTINO")
        self.cmb_tdoc.set("DNI")

    # ── Guardar ingreso ────────────────────────────────────────────────────
    def _guardar(self):
        tara_s = self._get(self.ent_tara)
        if not tara_s:
            messagebox.showerror("Falta peso","Captura el peso tara primero (F2).")
            return
        try:
            tara = float(tara_s.replace(",","."))
        except ValueError:
            messagebox.showerror("Error","Peso tara invalido.")
            return

        ch  = self.sel_ch.get_obj() or {}
        cam = self.sel_cam.get_obj() or {}
        exp = self.sel_exp.get_obj() or {}
        tr  = self.sel_trans.get_obj() or {}

        fecha = _now()
        self._set(self.ent_fing, fecha)

        data = dict(
            nro_doc=int(self._get(self.ent_nro) or 0),
            tipo_pesaje=self.cmb_tipo.get(),
            id_exportador=exp.get("id"),
            cuit_exportador=exp.get("cuit",""),
            exportador=exp.get("razon_social",""),
            id_transportista=tr.get("id"),
            cuit_transportista=tr.get("cuit",""),
            transportista=tr.get("razon_social",""),
            id_camion=cam.get("id"),
            patente_camion=cam.get("patente",""),
            desc_camion=cam.get("descripcion",""),
            patente_acoplado=self._get(self.ent_acop),
            id_chofer=ch.get("id"),
            chofer=ch.get("nombre",""),
            tipo_doc_chofer=self.cmb_tdoc.get(),
            nro_doc_chofer=ch.get("nro_doc",""),
            nacionalidad_chofer=self._get(self.ent_nacion),
            fecha_ingreso=fecha,
            peso_tara=tara,
            usuario_ingreso=self.usuario,
            id_contenedor=self._get(self.ent_cont),
        )
        nro = data["nro_doc"]
        db.save_ingreso(data, self.db_path)
        messagebox.showinfo("Ingreso registrado",
                            f"Nro. {nro}  |  Tara: {tara:,.1f} kg\n"
                            "El camion queda en 'Cargas abiertas'.")
        if self._on_guardado:
            self._on_guardado()
        self._nuevo()

    # ── Helpers ───────────────────────────────────────────────────────────
    def _get(self, w):
        try:
            s = w.cget("state")
            if s == "disabled":
                w.configure(state="normal"); v = w.get(); w.configure(state="disabled")
                return v.strip()
            return w.get().strip()
        except Exception:
            return ""

    def _set(self, w, v):
        try:
            s = w.cget("state")
            if s == "disabled": w.configure(state="normal")
            w.delete(0,"end"); w.insert(0,str(v))
            if s == "disabled": w.configure(state="disabled")
        except Exception:
            pass

    # ── Creación de maestros desde el selector ────────────────────────────
    def _crear_exportador(self, texto):
        from tkinter.simpledialog import askstring
        rs = askstring("Nuevo Exportador",
                       f"Razon social (texto buscado: {texto or 'vacio'}):",
                       initialvalue=texto)
        if not rs: return None
        rs = rs.strip().upper()
        cuit = askstring("Nuevo Exportador", "CUIT (opcional):", initialvalue="")
        cuit = (cuit or "").strip()
        d = {"cuit": cuit or "00-00000000-0", "razon_social": rs}
        try:
            db.save_exportador(d, self.db_path)
            for obj in db.list_exportadores(self.db_path):
                if obj["razon_social"].upper() == rs.upper():
                    return obj
        except Exception as ex:
            messagebox.showerror("Error", str(ex))
        return None

    def _crear_transportista(self, texto):
        from tkinter.simpledialog import askstring
        rs = askstring("Nuevo Transportista",
                       f"Razon social (texto buscado: {texto or 'vacio'}):",
                       initialvalue=texto)
        if not rs: return None
        rs = rs.strip().upper()
        cuit = askstring("Nuevo Transportista", "CUIT (opcional):", initialvalue="")
        cuit = (cuit or "").strip()
        d = {"cuit": cuit or "00-00000000-0", "razon_social": rs}
        try:
            db.save_transportista(d, self.db_path)
            for obj in db.list_transportistas(self.db_path):
                if obj["razon_social"].upper() == rs.upper():
                    return obj
        except Exception as ex:
            messagebox.showerror("Error", str(ex))
        return None

    def _crear_camion(self, texto):
        from tkinter.simpledialog import askstring
        pat = askstring("Nuevo Camion",
                        f"Patente (texto buscado: {texto or 'vacio'}):",
                        initialvalue=texto)
        if not pat: return None
        pat = pat.strip().upper()
        desc = askstring("Nuevo Camion", "Marca / Descripcion:", initialvalue="")
        desc = (desc or pat).strip().upper()
        d = {"patente": pat, "descripcion": desc}
        try:
            db.save_camion(d, self.db_path)
            for obj in db.list_camiones(self.db_path):
                if obj["patente"].upper() == pat.upper():
                    return obj
        except Exception as ex:
            messagebox.showerror("Error", str(ex))
        return None

    def _crear_chofer(self, texto):
        from tkinter.simpledialog import askstring
        nombre = askstring("Nuevo Chofer",
                           f"Nombre (texto buscado: {texto or 'vacio'}):",
                           initialvalue=texto)
        if not nombre: return None
        nombre = nombre.strip().upper()
        nro_doc = askstring("Nuevo Chofer", "Nro. de documento:", initialvalue="")
        nro_doc = (nro_doc or "").strip()
        d = {"nombre": nombre, "tipo_doc": "DNI", "nro_doc": nro_doc, "nacionalidad": "ARGENTINO"}
        try:
            db.save_chofer(d, self.db_path)
            for obj in db.list_choferes(self.db_path):
                if obj["nombre"].upper() == nombre.upper():
                    return obj
        except Exception as ex:
            messagebox.showerror("Error", str(ex))
        return None

    def _imprimir_ingreso(self):
        from tkinter import filedialog
        abiertos = db.list_abiertos(self.db_path)
        if not abiertos:
            messagebox.showinfo("Sin datos", "No hay ningun ingreso registrado aun.")
            return
        pesaje  = abiertos[-1]
        empresa = db.get_empresa(self.db_path)
        cert    = db.get_certificado(self.db_path)
        ruta = filedialog.asksaveasfilename(
            defaultextension=".pdf",
            initialfile=f"ingreso_{pesaje['nro_doc']}.pdf",
            filetypes=[("PDF", "*.pdf")],
            title="Guardar comprobante de ingreso",
        )
        if not ruta:
            return
        try:
            generar_ticket(pesaje, empresa, ruta, cert, tipo="ingreso")
            if sys.platform == "win32":
                os.startfile(ruta)
            messagebox.showinfo("Listo", "Comprobante de ingreso generado.")
        except Exception as ex:
            messagebox.showerror("Error", str(ex))

    def recargar(self):
        self._nuevo()
