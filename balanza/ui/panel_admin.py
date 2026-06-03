"""
ui/panel_admin.py — Panel de administracion completo
Accesible con clave desde el easter egg.
"""
import customtkinter as ctk
import tkinter as tk
from tkinter import ttk, messagebox
import hashlib, os, sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from db import database as db

AZUL  = "#1A5FA8"
ROJO  = "#C62828"
VERDE = "#2E7D32"
NEGRO = "#1A1A2E"

_CFG          = os.path.join(os.path.dirname(__file__), "..", "config.ini")
_HASH_DEFAULT = hashlib.sha256(b"admin123").hexdigest()


def _leer_cfg():
    cfg = {}
    if os.path.exists(_CFG):
        with open(_CFG) as f:
            for line in f:
                if "=" in line:
                    k, v = line.strip().split("=", 1)
                    cfg[k] = v
    return cfg


def _guardar_cfg(cfg):
    with open(_CFG, "w") as f:
        for k, v in cfg.items():
            f.write(f"{k}={v}\n")


def _hash(s):
    """Hash PBKDF2 con salt para nuevas claves."""
    import secrets
    salt = secrets.token_hex(16)
    h = hashlib.pbkdf2_hmac("sha256", s.encode(), salt.encode(), 100000).hex()
    return f"{salt}:{h}"


def _verificar_hash(clave, stored):
    """Verifica contra hash nuevo (salt:hash) o viejo (sha256)."""
    if ":" in stored:
        salt, h = stored.split(":", 1)
        check = hashlib.pbkdf2_hmac("sha256", clave.encode(), salt.encode(), 100000).hex()
        return check == h
    else:
        return hashlib.sha256(clave.encode()).hexdigest() == stored


def _clave_ok(ingresada):
    return _verificar_hash(ingresada, _leer_cfg().get("ADMIN_HASH", _HASH_DEFAULT))


# ─────────────────────────────────────────────────────────────────────────────
# Login
# ─────────────────────────────────────────────────────────────────────────────
class LoginAdmin(tk.Toplevel):
    def __init__(self, master, db_path=None):
        super().__init__(master)
        self.db_path   = db_path
        self._intentos = 0
        self.title("")
        self.resizable(False, False)
        self.configure(bg=NEGRO)
        self.geometry("340x260")
        self.grab_set()
        self._build()
        self.update_idletasks()
        x = master.winfo_x() + (master.winfo_width()  - 340) // 2
        y = master.winfo_y() + (master.winfo_height() - 260) // 2
        self.geometry(f"+{x}+{y}")

    def _build(self):
        tk.Label(self, text="🔐", font=("Helvetica",32),
                 fg="#4A9EDB", bg=NEGRO).pack(pady=(22,4))
        tk.Label(self, text="Acceso Administrador",
                 font=("Helvetica",13,"bold"),
                 fg="#E8F4FD", bg=NEGRO).pack()
        tk.Label(self, text="Ingresa la clave de administrador",
                 font=("Helvetica",9), fg="#4A6A8A", bg=NEGRO).pack(pady=(2,10))

        self._ent = tk.Entry(self, show="●", font=("Helvetica",13),
                              bg="#0D2137", fg="white",
                              insertbackground="white",
                              relief="flat", bd=0, width=22)
        self._ent.pack(ipady=8, padx=40)
        self._ent.focus_set()
        self._ent.bind("<Return>", lambda e: self._ingresar())

        self._lbl_err = tk.Label(self, text="", font=("Helvetica",9),
                                  fg="#EF5350", bg=NEGRO)
        self._lbl_err.pack(pady=4)

        tk.Button(self, text="Ingresar",
                  font=("Helvetica",11,"bold"),
                  bg=AZUL, fg="white", relief="flat",
                  activebackground="#143F75",
                  cursor="hand2", bd=0,
                  command=self._ingresar
                  ).pack(ipadx=20, ipady=6)

        tk.Button(self, text="cancelar",
                  font=("Helvetica",9), fg="#4A6A8A",
                  bg=NEGRO, relief="flat", cursor="hand2",
                  command=self.destroy).pack(pady=(8,0))

    def _ingresar(self):
        clave = self._ent.get()
        if _clave_ok(clave):
            self.destroy()
            PanelAdmin(self.master, self.db_path)
        else:
            self._intentos += 1
            self._lbl_err.configure(
                text=f"Clave incorrecta  ({self._intentos} intento{'s' if self._intentos>1 else ''})")
            self._ent.delete(0, "end")
            if self._intentos >= 5:
                messagebox.showwarning("Bloqueado",
                    "Demasiados intentos fallidos.")
                self.destroy()


# ─────────────────────────────────────────────────────────────────────────────
# Panel principal
# ─────────────────────────────────────────────────────────────────────────────
class PanelAdmin(tk.Toplevel):
    def __init__(self, master, db_path=None):
        super().__init__(master)
        self.db_path = db_path
        self.title("Panel de Administración")
        self.geometry("960x640")
        self.minsize(800, 520)
        self.configure(bg="#F0F0F0")
        self.grab_set()
        self._build()
        self.update_idletasks()
        x = master.winfo_x() + max(0,(master.winfo_width()-960)//2)
        y = master.winfo_y() + max(0,(master.winfo_height()-640)//2)
        self.geometry(f"+{x}+{y}")

    def _build(self):
        bar = tk.Frame(self, bg=NEGRO, height=46)
        bar.pack(fill="x")
        bar.pack_propagate(False)
        tk.Label(bar, text="  🔐  Panel de Administración",
                 font=("Helvetica",13,"bold"),
                 fg="white", bg=NEGRO).pack(side="left", padx=8, pady=10)
        tk.Label(bar, text="Solo administradores autorizados",
                 font=("Helvetica",9), fg="#4A6A8A", bg=NEGRO
                 ).pack(side="left", padx=4)

        nb = ttk.Notebook(self)
        nb.pack(fill="both", expand=True, padx=8, pady=8)

        tabs = [
            ("  Productos  ",        self._tab_productos),
            ("  Transportistas  ",   self._tab_transportistas),
            ("  Camiones  ",         self._tab_camiones),
            ("  Choferes  ",         self._tab_choferes),
            ("  Exportadores  ",     self._tab_exportadores),
            ("  Empresa  ",          self._tab_empresa),
            ("  Cert. Balanza  ",    self._tab_certificado),
            ("  Nro. Ticket  ",      self._tab_nro_ticket),
            ("  Usuarios  ",         self._tab_usuarios),
            ("  Cambiar clave  ",    self._tab_clave),
        ]
        for nombre, builder in tabs:
            frame = ttk.Frame(nb)
            nb.add(frame, text=nombre)
            builder(frame)

    # ── ABM genérico ─────────────────────────────────────────────────────
    def _abm(self, parent, cols, keys, lister, campos, saver, deleter=None):
        parent.columnconfigure(0, weight=3)
        parent.columnconfigure(1, weight=1)
        parent.rowconfigure(0, weight=1)

        ft = tk.Frame(parent, bg="#DDDDDD")
        ft.grid(row=0, column=0, sticky="nsew", padx=(6,3), pady=6)
        ft.columnconfigure(0, weight=1); ft.rowconfigure(0, weight=1)

        tree = ttk.Treeview(ft, columns=[c[0] for c in cols],
                             show="headings", selectmode="browse")
        vsb  = ttk.Scrollbar(ft, orient="vertical", command=tree.yview)
        tree.configure(yscroll=vsb.set)
        tree.grid(row=0, column=0, sticky="nsew")
        vsb.grid(row=0, column=1, sticky="ns")

        for col, w in cols:
            tree.heading(col, text=col)
            tree.column(col, width=w, minwidth=30, anchor="w")

        tree.tag_configure("par",   background="#F5F8FC")
        tree.tag_configure("impar", background="white")

        form  = tk.Frame(parent, bg="#F0F0F0")
        form.grid(row=0, column=1, sticky="nsew", padx=(3,6), pady=6)
        form.columnconfigure(0, weight=1)

        tk.Label(form, text="Datos", font=("Helvetica",11,"bold"),
                 fg=AZUL, bg="#F0F0F0"
                 ).grid(row=0, column=0, sticky="w", padx=6, pady=(6,8))

        entries  = {}
        editando = [None]

        for i, (label, key) in enumerate(campos, 1):
            tk.Label(form, text=label, font=("Helvetica",10),
                     bg="#F0F0F0", anchor="w"
                     ).grid(row=i*2-1, column=0, sticky="w", padx=6, pady=(4,0))
            e = tk.Entry(form, font=("Helvetica",11), relief="solid", bd=1)
            e.grid(row=i*2, column=0, sticky="ew", padx=6, pady=2)
            entries[key] = e

        n = len(campos)

        def cargar():
            tree.delete(*tree.get_children())
            for i, row in enumerate(lister(self.db_path)):
                vals = [str(row.get(k,"") or "") for k in keys]
                tree.insert("","end", iid=str(row["id"]), values=vals,
                            tags=("par" if i%2==0 else "impar",))

        def on_sel(event):
            sel = tree.selection()
            if not sel: return
            editando[0] = int(sel[0])
            vals = tree.item(sel[0],"values")
            for (_, key), val in zip(campos, vals[1:]):
                entries[key].delete(0,"end")
                entries[key].insert(0, val)

        def nuevo():
            editando[0] = None
            for e in entries.values(): e.delete(0,"end")
            tree.selection_remove(tree.selection())

        def guardar():
            data = {k: e.get().strip() for k,e in entries.items()}
            if editando[0]: data["id"] = editando[0]
            try:
                saver(data, self.db_path)
                cargar(); nuevo()
                messagebox.showinfo("Guardado","Registro guardado.")
            except Exception as ex:
                messagebox.showerror("Error", str(ex))

        def eliminar():
            if not editando[0]:
                messagebox.showwarning("Atencion","Selecciona un registro primero."); return
            if not deleter:
                messagebox.showinfo("No disponible",
                    "Este tipo de registro no se puede eliminar\n"
                    "para preservar el historial de pesajes."); return
            nom = " / ".join(list(entries.values())[0].get() for _ in range(1))
            if messagebox.askyesno("Confirmar","¿Eliminar este registro?\nNo se puede deshacer."):
                deleter(editando[0], self.db_path)
                cargar(); nuevo()

        tree.bind("<<TreeviewSelect>>", on_sel)

        bf = tk.Frame(form, bg="#F0F0F0")
        bf.grid(row=n*2+1, column=0, sticky="ew", padx=6, pady=(12,4))
        bf.columnconfigure((0,1), weight=1)

        tk.Button(bf, text="💾  Guardar", font=("Helvetica",10,"bold"),
                  bg=AZUL, fg="white", relief="flat",
                  command=guardar, cursor="hand2"
                  ).grid(row=0, column=0, sticky="ew", padx=(0,3), ipady=5)
        tk.Button(bf, text="Nuevo", font=("Helvetica",10),
                  bg="#E0E0E0", fg="#333", relief="flat",
                  command=nuevo, cursor="hand2"
                  ).grid(row=0, column=1, sticky="ew", padx=(3,0), ipady=5)
        tk.Button(form, text="🗑  Eliminar", font=("Helvetica",10),
                  bg=ROJO, fg="white", relief="flat",
                  command=eliminar, cursor="hand2"
                  ).grid(row=n*2+2, column=0, sticky="ew", padx=6, pady=(4,0), ipady=5)

        cargar()

    # ── Tabs ─────────────────────────────────────────────────────────────
    def _tab_productos(self, f):
        self._abm(f,
            cols   =[("ID",40),("Codigo",80),("Descripcion",180),("Min kg",70),("Max kg",70)],
            keys   =["id","codigo","descripcion","peso_min","peso_max"],
            lister =db.list_productos,
            campos =[("Codigo","codigo"),("Descripcion","descripcion"),
                     ("Peso minimo (kg)","peso_min"),("Peso maximo (kg)","peso_max")],
            saver  =db.save_producto,
            deleter=db.del_producto,
        )

    def _tab_transportistas(self, f):
        self._abm(f,
            cols   =[("ID",40),("CUIT",140),("Razon Social",240)],
            keys   =["id","cuit","razon_social"],
            lister =db.list_transportistas,
            campos =[("CUIT","cuit"),("Razon Social","razon_social")],
            saver  =db.save_transportista,
            deleter=db.del_transportista,
        )

    def _tab_camiones(self, f):
        self._abm(f,
            cols   =[("ID",40),("Patente",90),("Descripcion",160),("Transportista",160)],
            keys   =["id","patente","descripcion","transportista"],
            lister =db.list_camiones,
            campos =[("Patente","patente"),("Descripcion","descripcion"),
                     ("ID Transportista","id_transportista")],
            saver  =db.save_camion,
            deleter=db.del_camion,
        )

    def _tab_choferes(self, f):
        self._abm(f,
            cols   =[("ID",40),("Nombre",180),("Tipo Doc",70),("Nro Doc",100),("Nacionalidad",100)],
            keys   =["id","nombre","tipo_doc","nro_doc","nacionalidad"],
            lister =db.list_choferes,
            campos =[("Nombre completo","nombre"),("Tipo Doc","tipo_doc"),
                     ("Nro. Documento","nro_doc"),("Nacionalidad","nacionalidad")],
            saver  =db.save_chofer,
            deleter=db.del_chofer,
        )

    def _tab_exportadores(self, f):
        self._abm(f,
            cols   =[("ID",40),("CUIT",140),("Razon Social",240)],
            keys   =["id","cuit","razon_social"],
            lister =db.list_exportadores,
            campos =[("CUIT","cuit"),("Razon Social","razon_social")],
            saver  =db.save_exportador,
            deleter=None,
        )

    def _tab_certificado(self, f):
        """Datos del certificado de la bascula — aparecen en el ticket."""
        f.columnconfigure(0, weight=1)
        from db import database as db

        cert = db.get_certificado(self.db_path)

        campos = [
            ("Descripcion de la balanza",   "descripcion"),
            ("Nro. Certificado bascula",     "nro_certificado"),
            ("Nro. Certificado (OT)",        "nro_certificado_ot"),
            ("Vencimiento certificado",      "vencimiento"),
            ("Puerto",                       "puerto"),
            ("DataBits",                     "databits"),
            ("StopBits",                     "stopbits"),
            ("Paridad",                      "paridad"),
            ("HandShake",                    "handshake"),
            ("BaudRate",                     "baud_rate"),
            ("Caracter Corte",               "caracter_corte"),
        ]
        entries = {}
        for i, (lbl, key) in enumerate(campos):
            tk.Label(f, text=lbl, font=("Helvetica",10), anchor="w"
                     ).grid(row=i*2, column=0, sticky="w", padx=10, pady=(6,0))
            e = tk.Entry(f, font=("Helvetica",11), relief="solid", bd=1)
            e.insert(0, str(cert.get(key,"") or ""))
            e.grid(row=i*2+1, column=0, sticky="ew", padx=10, pady=2)
            entries[key] = e

        nota = tk.Label(f,
            text="  Nro. Certificado y Vencimiento aparecen en el recuadro del ticket.",
            font=("Helvetica",9), fg="#888888", anchor="w")
        nota.grid(row=len(campos)*2, column=0, sticky="w", padx=10, pady=(8,0))

        def guardar():
            data = {k: e.get().strip() for k, e in entries.items()}
            db.save_certificado(data, self.db_path)
            messagebox.showinfo("Guardado","Certificado de balanza guardado.")

        tk.Button(f, text="💾  Guardar certificado",
                  bg=AZUL, fg="white", relief="flat",
                  font=("Helvetica",11,"bold"),
                  command=guardar, cursor="hand2"
                  ).grid(row=len(campos)*2+1, column=0,
                         sticky="ew", padx=10, pady=16, ipady=6)

    def _tab_empresa(self, f):
        f.columnconfigure(0, weight=1)
        emp = db.get_empresa(self.db_path)
        campos = [("Nombre","nombre"),("CUIT","cuit"),("Cod. Aduana","cod_aduana"),
                  ("Cod. LOT","cod_lot"),("Direccion","direccion"),("Telefono","telefono")]
        entries = {}
        for i,(lbl,key) in enumerate(campos):
            tk.Label(f, text=lbl, font=("Helvetica",10), anchor="w"
                     ).grid(row=i*2, column=0, sticky="w", padx=10, pady=(6,0))
            e = tk.Entry(f, font=("Helvetica",11), relief="solid", bd=1)
            e.insert(0, emp.get(key,""))
            e.grid(row=i*2+1, column=0, sticky="ew", padx=10, pady=2)
            entries[key] = e

        def guardar():
            db.save_empresa({k:e.get().strip() for k,e in entries.items()}, self.db_path)
            messagebox.showinfo("Guardado","Datos de empresa actualizados.")

        tk.Button(f, text="💾  Guardar", bg=AZUL, fg="white", relief="flat",
                  font=("Helvetica",11,"bold"), command=guardar, cursor="hand2"
                  ).grid(row=len(campos)*2+1, column=0, sticky="ew",
                         padx=10, pady=16, ipady=6)

    def _tab_nro_ticket(self, f):
        """Permite configurar desde qué número arranca la secuencia de tickets."""
        f.columnconfigure(0, weight=1)

        tk.Label(f, text="Numero inicial de ticket",
                 font=("Helvetica",12,"bold"), fg=AZUL
                 ).grid(row=0, column=0, sticky="w", padx=12, pady=(16,4))
        tk.Label(f,
                 text="El próximo pesaje tomará este número + 1.\n"
                      "Útil para continuar desde un número específico al migrar datos.",
                 font=("Helvetica",10), fg="#555555", justify="left"
                 ).grid(row=1, column=0, sticky="w", padx=12, pady=(0,12))

        # Mostrar el último nro registrado
        ultimo = (db.next_nro_doc(self.db_path) - 1)
        tk.Label(f, text=f"Último ticket registrado en la BD: {ultimo}",
                 font=("Helvetica",10,"bold"), fg="#333"
                 ).grid(row=2, column=0, sticky="w", padx=12, pady=(0,8))

        fr = tk.Frame(f, bg="#F0F0F0")
        fr.grid(row=3, column=0, sticky="w", padx=12)

        tk.Label(fr, text="Establecer próximo número en:  ",
                 font=("Helvetica",11)).grid(row=0, column=0)
        ent_nro = tk.Entry(fr, font=("Helvetica",13,"bold"),
                            width=10, relief="solid", bd=1, justify="center")
        ent_nro.insert(0, str(ultimo))
        ent_nro.grid(row=0, column=1, ipady=4)

        lbl_ok = tk.Label(f, text="", font=("Helvetica",10))
        lbl_ok.grid(row=4, column=0, sticky="w", padx=12, pady=4)

        def aplicar():
            try:
                nuevo_nro = int(ent_nro.get().strip())
                if nuevo_nro < 1:
                    raise ValueError("Debe ser mayor a 0")
                # Insertar un pesaje "fantasma" con ese nro si hace falta
                # o simplemente guardar en config para que next_nro_doc lo use
                cfg = _leer_cfg()
                cfg["NRO_DOC_BASE"] = str(nuevo_nro)
                _guardar_cfg(cfg)
                lbl_ok.configure(
                    text=f"✓ El próximo ticket será el Nro. {nuevo_nro + 1}",
                    fg=VERDE)
            except ValueError as e:
                lbl_ok.configure(text=f"Error: {e}", fg=ROJO)

        tk.Button(fr, text="Aplicar", bg=AZUL, fg="white", relief="flat",
                  font=("Helvetica",11,"bold"), cursor="hand2",
                  command=aplicar
                  ).grid(row=0, column=2, padx=(8,0), ipady=4, ipadx=8)

    def _tab_usuarios(self, f):
        f.columnconfigure(0, weight=1); f.rowconfigure(1, weight=1)
        tk.Label(f, text="Operadores del sistema",
                 font=("Helvetica",11,"bold"), fg=AZUL
                 ).grid(row=0, column=0, sticky="w", padx=8, pady=(8,4))

        ft = tk.Frame(f, bg="#DDDDDD")
        ft.grid(row=1, column=0, sticky="nsew", padx=8, pady=4)
        ft.columnconfigure(0, weight=1); ft.rowconfigure(0, weight=1)

        tree = ttk.Treeview(ft, columns=["Usuario","Rol"],
                             show="headings", height=8)
        tree.heading("Usuario", text="Usuario")
        tree.heading("Rol",     text="Rol")
        tree.column("Usuario", width=200); tree.column("Rol", width=120)
        tree.grid(row=0, column=0, sticky="nsew")

        def cargar():
            tree.delete(*tree.get_children())
            cfg = _leer_cfg()
            tree.insert("","end", values=["admin","Administrador"])
            for k,v in cfg.items():
                if k.startswith("USR_"):
                    tree.insert("","end", values=[k[4:],"Operador"])

        cargar()

        form = tk.LabelFrame(f, text="  Nuevo operador  ",
                              font=("Helvetica",10), fg=AZUL)
        form.grid(row=2, column=0, sticky="ew", padx=8, pady=8)
        form.columnconfigure((1,3), weight=1)

        tk.Label(form, text="Nombre:").grid(row=0,column=0,padx=6,pady=6,sticky="w")
        ent_n = tk.Entry(form, font=("Helvetica",11), relief="solid", bd=1)
        ent_n.grid(row=0, column=1, sticky="ew", padx=4, pady=6)
        tk.Label(form, text="Clave:").grid(row=0, column=2, padx=6, pady=6, sticky="w")
        ent_c = tk.Entry(form, show="●", font=("Helvetica",11), relief="solid", bd=1)
        ent_c.grid(row=0, column=3, sticky="ew", padx=4, pady=6)

        def agregar():
            nom = ent_n.get().strip().upper()
            cl  = ent_c.get().strip()
            if not nom or not cl:
                messagebox.showwarning("Atencion","Completa nombre y clave."); return
            cfg = _leer_cfg(); cfg[f"USR_{nom}"] = _hash(cl); _guardar_cfg(cfg)
            cargar(); ent_n.delete(0,"end"); ent_c.delete(0,"end")
            messagebox.showinfo("OK",f"Operador '{nom}' creado.")

        def eliminar():
            sel = tree.selection()
            if not sel: return
            nom = tree.item(sel[0],"values")[0]
            if nom == "admin":
                messagebox.showwarning("No permitido","El admin no se puede eliminar."); return
            cfg = _leer_cfg(); cfg.pop(f"USR_{nom}",None); _guardar_cfg(cfg)
            cargar()

        tk.Button(form, text="Agregar", bg=VERDE, fg="white", relief="flat",
                  command=agregar, cursor="hand2"
                  ).grid(row=0, column=4, padx=6, ipady=4)
        tk.Button(f, text="🗑  Eliminar operador seleccionado",
                  bg=ROJO, fg="white", relief="flat",
                  command=eliminar, cursor="hand2"
                  ).grid(row=3, column=0, sticky="w", padx=8, pady=(0,8), ipady=4)

    def _tab_clave(self, f):
        f.columnconfigure(0, weight=1)
        tk.Label(f, text="Cambiar clave de administrador",
                 font=("Helvetica",12,"bold"), fg=AZUL
                 ).grid(row=0, column=0, sticky="w", padx=12, pady=(16,8))

        self._ea = self._ea2 = self._ea3 = None
        for i,(lbl,attr) in enumerate([
            ("Clave actual","_ea"), ("Nueva clave","_ea2"),
            ("Confirmar nueva clave","_ea3")
        ],1):
            tk.Label(f, text=lbl, font=("Helvetica",10), anchor="w"
                     ).grid(row=i*2-1, column=0, sticky="w", padx=12, pady=(6,0))
            e = tk.Entry(f, show="●", font=("Helvetica",12),
                          relief="solid", bd=1, width=32)
            e.grid(row=i*2, column=0, sticky="w", padx=12, pady=2)
            setattr(self, attr, e)

        lbl_m = tk.Label(f, text="", font=("Helvetica",10))
        lbl_m.grid(row=7, column=0, sticky="w", padx=12, pady=4)

        def cambiar():
            if not _clave_ok(self._ea.get()):
                lbl_m.configure(text="Clave actual incorrecta.", fg=ROJO); return
            n = self._ea2.get()
            if len(n) < 6:
                lbl_m.configure(text="Minimo 6 caracteres.", fg=ROJO); return
            if n != self._ea3.get():
                lbl_m.configure(text="Las claves nuevas no coinciden.", fg=ROJO); return
            cfg = _leer_cfg(); cfg["ADMIN_HASH"] = _hash(n); _guardar_cfg(cfg)
            for e in (self._ea, self._ea2, self._ea3): e.delete(0,"end")
            lbl_m.configure(text="✓ Clave cambiada correctamente.", fg=VERDE)

        tk.Button(f, text="Cambiar clave", bg=AZUL, fg="white", relief="flat",
                  font=("Helvetica",11,"bold"), command=cambiar, cursor="hand2"
                  ).grid(row=8, column=0, sticky="w", padx=12, pady=12, ipady=6, ipadx=12)
        tk.Label(f, text="Clave por defecto:  admin123",
                 font=("Helvetica",9), fg="#888888"
                 ).grid(row=9, column=0, sticky="w", padx=12)
