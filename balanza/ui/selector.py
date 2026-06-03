"""
ui/selector.py — Popup de búsqueda/selección con filtro en tiempo real.
Incluye opción de CREAR NUEVO registro si no se encuentra en la lista.
Todo el texto se normaliza a MAYÚSCULAS.
"""
import tkinter as tk
from tkinter import ttk, messagebox, simpledialog
import customtkinter as ctk

AZUL   = "#1A5FA8"
VERDE  = "#2E7D32"
NEGRO  = "#1A1A2E"


class SelectorPopup(tk.Toplevel):
    """
    Ventana modal de búsqueda/selección.

    cols       : [(titulo_col, key_dict, ancho_px), ...]
    items      : [dict, ...]
    on_select  : callable(dict) → llamado al confirmar selección
    on_crear   : callable(texto_buscado) → si se presiona "Crear nuevo"
                 debe devolver el dict del nuevo objeto creado, o None.
                 Si es None, no se muestra el botón Crear.
    """
    def __init__(self, master, titulo, cols, items,
                 on_select, on_crear=None):
        super().__init__(master)
        self.cols            = cols
        self.on_select       = on_select
        self.on_crear        = on_crear
        self._todos          = items[:]
        self._items_visibles = items[:]

        self.title(titulo)
        self.resizable(True, True)
        self.geometry("700x500")
        self.configure(bg="#F5F5F5")
        self.grab_set()
        self._build()
        self._centrar(master)
        self.ent_buscar.focus_set()

    def _centrar(self, master):
        self.update_idletasks()
        try:
            x = master.winfo_rootx() + (master.winfo_width()  - 700) // 2
            y = master.winfo_rooty() + (master.winfo_height() - 500) // 2
            self.geometry(f"+{max(0,x)}+{max(0,y)}")
        except Exception:
            pass

    def _build(self):
        # ── Barra de búsqueda ──────────────────────────────────────────
        top = tk.Frame(self, bg=AZUL, padx=10, pady=8)
        top.pack(fill="x")
        tk.Label(top, text="🔍  Buscar:",
                 font=("Helvetica", 11), fg="white", bg=AZUL
                 ).pack(side="left", padx=(0, 6))

        self.ent_buscar = tk.Entry(
            top, font=("Helvetica", 13),
            relief="flat", bd=0,
            bg="white", fg="#222222",
            insertbackground="#222222",
        )
        self.ent_buscar.pack(side="left", fill="x", expand=True,
                              ipady=5, padx=(0, 6))

        self.lbl_cnt = tk.Label(top, text="", font=("Helvetica", 9),
                                 fg="#B3D4F0", bg=AZUL)
        self.lbl_cnt.pack(side="right")

        self.ent_buscar.bind("<KeyRelease>", self._on_key)
        self.ent_buscar.bind("<Return>",     self._confirmar)
        self.ent_buscar.bind("<Escape>",     lambda e: self.destroy())

        # ── Tabla ──────────────────────────────────────────────────────
        frame = tk.Frame(self, bg="#EEEEEE")
        frame.pack(fill="both", expand=True, padx=6, pady=6)
        frame.columnconfigure(0, weight=1)
        frame.rowconfigure(0, weight=1)

        keys = [c[1] for c in self.cols]
        style = ttk.Style()
        style.configure("Sel.Treeview",
                        font=("Helvetica", 11), rowheight=26,
                        background="white", fieldbackground="white")
        style.configure("Sel.Treeview.Heading",
                        font=("Helvetica", 10, "bold"))
        style.map("Sel.Treeview",
                  background=[("selected", AZUL)],
                  foreground=[("selected", "white")])

        self.tree = ttk.Treeview(frame, style="Sel.Treeview",
                                  columns=keys, show="headings",
                                  selectmode="browse")
        vsb = ttk.Scrollbar(frame, orient="vertical",   command=self.tree.yview)
        hsb = ttk.Scrollbar(frame, orient="horizontal", command=self.tree.xview)
        self.tree.configure(yscroll=vsb.set, xscroll=hsb.set)
        self.tree.grid(row=0, column=0, sticky="nsew")
        vsb.grid(row=0, column=1, sticky="ns")
        hsb.grid(row=1, column=0, sticky="ew")

        for titulo, key, ancho in self.cols:
            self.tree.heading(key, text=titulo,
                               command=lambda k=key: self._sort(k))
            self.tree.column(key, width=ancho, minwidth=40)

        self.tree.tag_configure("par",   background="#F5F8FC")
        self.tree.tag_configure("impar", background="white")
        self.tree.bind("<Double-1>", lambda e: self._confirmar())
        self.tree.bind("<Return>",   lambda e: self._confirmar())

        # ── Panel inferior: contador + botones ─────────────────────────
        bot = tk.Frame(self, bg="#F5F5F5", padx=8, pady=6)
        bot.pack(fill="x")

        # Botón Seleccionar
        tk.Button(bot, text="✓  Seleccionar",
                  font=("Helvetica", 11, "bold"),
                  bg=AZUL, fg="white", relief="flat",
                  cursor="hand2", padx=14, pady=5,
                  command=self._confirmar
                  ).pack(side="right", padx=(4, 0))

        # Botón Crear nuevo (solo si se pasó on_crear)
        if self.on_crear:
            self.btn_crear = tk.Button(
                bot, text="✚  Crear nuevo",
                font=("Helvetica", 10, "bold"),
                bg=VERDE, fg="white", relief="flat",
                cursor="hand2", padx=10, pady=5,
                command=self._crear_nuevo,
            )
            self.btn_crear.pack(side="right", padx=(4, 0))

        tk.Button(bot, text="Cancelar",
                  font=("Helvetica", 10),
                  bg="#E0E0E0", fg="#333", relief="flat",
                  cursor="hand2", padx=10, pady=5,
                  command=self.destroy
                  ).pack(side="right")

        # Label "Sin resultados" (se muestra/oculta según filtro)
        self.lbl_sin = tk.Label(bot,
                                 text="",
                                 font=("Helvetica", 9, "italic"),
                                 fg="#888888", bg="#F5F5F5")
        self.lbl_sin.pack(side="left", padx=4)

        self._render(self._todos)

    # ── Filtrado ───────────────────────────────────────────────────────
    def _on_key(self, event=None):
        """Fuerza mayúsculas mientras se escribe y filtra."""
        txt = self.ent_buscar.get().upper()
        pos = self.ent_buscar.index(tk.INSERT)
        self.ent_buscar.delete(0, "end")
        self.ent_buscar.insert(0, txt)
        self.ent_buscar.icursor(pos)
        self._filtrar()

    def _filtrar(self):
        txt = self.ent_buscar.get().strip().upper()
        if not txt:
            self._render(self._todos)
            self.lbl_sin.configure(text="")
            return
        keys = [c[1] for c in self.cols]
        filtrados = [
            obj for obj in self._todos
            if any(txt in str(obj.get(k, "") or "").upper() for k in keys)
        ]
        self._render(filtrados)
        if not filtrados and self.on_crear:
            self.lbl_sin.configure(
                text=f'"{txt}" no encontrado — usá "Crear nuevo" para agregarlo')
        else:
            self.lbl_sin.configure(text="")

    def _render(self, items):
        self.tree.delete(*self.tree.get_children())
        keys = [c[1] for c in self.cols]
        for i, obj in enumerate(items):
            vals = [str(obj.get(k, "") or "").upper() for k in keys]
            tag  = "par" if i % 2 == 0 else "impar"
            self.tree.insert("", "end", iid=str(i), values=vals, tags=(tag,))
        children = self.tree.get_children()
        if children:
            self.tree.selection_set(children[0])
            self.tree.see(children[0])
        self.lbl_cnt.configure(
            text=f"{len(items)} resultado{'s' if len(items) != 1 else ''}")
        self._items_visibles = items

    def _confirmar(self, event=None):
        sel = self.tree.selection()
        if not sel:
            return
        idx = int(sel[0])
        obj = self._items_visibles[idx]
        self.on_select(obj)
        self.destroy()

    def _sort(self, key):
        self._todos = sorted(self._todos,
                              key=lambda x: str(x.get(key, "") or "").upper())
        self._filtrar()

    # ── Crear nuevo ────────────────────────────────────────────────────
    def _crear_nuevo(self):
        texto_actual = self.ent_buscar.get().strip().upper()
        nuevo_obj = self.on_crear(texto_actual)
        if nuevo_obj:
            # Agregar a la lista y seleccionar
            self._todos.append(nuevo_obj)
            self._filtrar()
            # Seleccionarlo automáticamente
            self.on_select(nuevo_obj)
            self.destroy()


# ── Campo con botón de búsqueda ───────────────────────────────────────────────

class CampoSelector(ctk.CTkFrame):
    """
    Widget compacto: label + campo de texto (readonly) + botón lupa.
    Al hacer clic abre SelectorPopup con opción de crear nuevo si
    se pasa on_crear.

    on_crear: callable(texto_buscado) → dict del nuevo objeto, o None
    """
    def __init__(self, master, label, titulo_popup, cols,
                 loader, campos_display,
                 on_select=None, on_crear=None, **kw):
        super().__init__(master, fg_color="transparent", **kw)
        self.titulo_popup   = titulo_popup
        self.cols           = cols
        self.loader         = loader
        self.campos_display = campos_display
        self._on_select     = on_select
        self._on_crear      = on_crear
        self._obj           = None
        self.columnconfigure(0, weight=1)

        ctk.CTkLabel(self, text=label,
                     font=("Helvetica", 10, "bold"), anchor="w"
                     ).grid(row=0, column=0, columnspan=2, sticky="w")

        self.ent = ctk.CTkEntry(
            self, height=26, font=("Helvetica", 11),
            state="disabled", fg_color="#F0F0F0",
            placeholder_text="clic para buscar o crear...",
        )
        self.ent.grid(row=1, column=0, sticky="ew", padx=(0, 2), pady=(1, 0))

        btn = ctk.CTkButton(
            self, text="🔍", width=30, height=26,
            font=("Helvetica", 12),
            fg_color=AZUL, hover_color="#143F75",
            command=self._abrir,
        )
        btn.grid(row=1, column=1, pady=(1, 0))

        self.ent.bind("<Double-Button-1>", lambda e: self._abrir())

    def _abrir(self):
        items = self.loader()
        SelectorPopup(
            self.winfo_toplevel(),
            self.titulo_popup,
            self.cols,
            items,
            self._on_elegido,
            on_crear=self._on_crear,
        )

    def _on_elegido(self, obj):
        self._obj = obj
        # Mostrar valores en MAYÚSCULAS
        partes = [str(obj.get(k, "") or "").upper() for k in self.campos_display]
        texto  = "  —  ".join(p for p in partes if p)
        self.ent.configure(state="normal")
        self.ent.delete(0, "end")
        self.ent.insert(0, texto)
        self.ent.configure(state="disabled")
        if self._on_select:
            self._on_select(obj)

    def get_obj(self):
        return self._obj

    def limpiar(self):
        self._obj = None
        self.ent.configure(state="normal")
        self.ent.delete(0, "end")
        self.ent.configure(state="disabled")

    def set_obj(self, obj):
        self._on_elegido(obj)
