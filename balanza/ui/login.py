"""
ui/login.py — Login con usuario y contraseña
Mejoras v2.1:
  - Hash PBKDF2 con salt (más seguro)
  - Compatible con hashes viejos SHA-256 (migración transparente)
  - Forzar cambio de clave admin en primer uso
"""
import tkinter as tk
import hashlib, os, secrets

AZUL  = "#1A5FA8"
NEGRO = "#0D1B2A"
ROJO  = "#EF5350"
VERDE = "#2E7D32"
CFG   = os.path.join(os.path.dirname(__file__), "..", "config.ini")

_HASH_ADMIN_DEFAULT = hashlib.sha256(b"admin123").hexdigest()


def _leer_cfg():
    cfg = {}
    if os.path.exists(CFG):
        with open(CFG, encoding="utf-8", errors="ignore") as f:
            for line in f:
                line = line.strip()
                if "=" in line:
                    k, v = line.split("=", 1)
                    cfg[k.strip()] = v.strip()
    return cfg


def _guardar_cfg(cfg):
    with open(CFG, "w", encoding="utf-8") as f:
        for k, v in cfg.items():
            f.write(f"{k}={v}\n")


def _hash_legacy(s):
    """Hash SHA-256 viejo (para compatibilidad)."""
    return hashlib.sha256(s.encode()).hexdigest()


def _hash_nuevo(s, salt=None):
    """Hash PBKDF2 con salt. Devuelve 'salt:hash'."""
    if salt is None:
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
        return _hash_legacy(clave) == stored


def _validar(usuario, clave):
    cfg = _leer_cfg()
    usu = usuario.strip().upper()
    if usu == "ADMIN":
        hash_correcto = cfg.get("ADMIN_HASH", _HASH_ADMIN_DEFAULT)
        return _verificar_hash(clave, hash_correcto)
    key = f"USR_{usu}"
    if key in cfg:
        return _verificar_hash(clave, cfg[key])
    return False


def _es_clave_default():
    """True si la clave admin es la default (admin123)."""
    cfg = _leer_cfg()
    stored = cfg.get("ADMIN_HASH", _HASH_ADMIN_DEFAULT)
    return _verificar_hash("admin123", stored)


def _hay_usuarios_cargados():
    cfg = _leer_cfg()
    return any(k.startswith("USR_") for k in cfg)


def _forzar_cambio_clave(parent_win, on_done):
    """Ventana que fuerza el cambio de la clave admin."""
    win = tk.Toplevel(parent_win)
    win.title("Cambiar clave de administrador")
    win.resizable(False, False)
    win.configure(bg=NEGRO)
    win.geometry("420x320")
    win.grab_set()
    win.update_idletasks()
    x = (win.winfo_screenwidth()  - 420) // 2
    y = (win.winfo_screenheight() - 320) // 2
    win.geometry(f"+{x}+{y}")
    win.protocol("WM_DELETE_WINDOW", lambda: None)

    tk.Label(win, text="Cambio de clave obligatorio",
             font=("Helvetica", 14, "bold"),
             fg="white", bg=NEGRO).pack(pady=(20, 4))
    tk.Label(win, text="La clave por defecto no es segura.\nPor favor, establecé una nueva clave.",
             font=("Helvetica", 10),
             fg="#B3D4F0", bg=NEGRO, justify="center").pack(pady=(0, 16))

    tk.Label(win, text="Nueva clave (mínimo 6 caracteres):",
             font=("Helvetica", 10), fg="#B3D4F0", bg=NEGRO, anchor="w"
             ).pack(fill="x", padx=50, pady=(0, 2))
    ent_new = tk.Entry(win, show="●", font=("Helvetica", 13),
                       bg="#0D2137", fg="white", insertbackground="white",
                       relief="flat", bd=0, width=22, justify="center")
    ent_new.pack(ipady=7, padx=50)

    tk.Label(win, text="Confirmar nueva clave:",
             font=("Helvetica", 10), fg="#B3D4F0", bg=NEGRO, anchor="w"
             ).pack(fill="x", padx=50, pady=(10, 2))
    ent_conf = tk.Entry(win, show="●", font=("Helvetica", 13),
                        bg="#0D2137", fg="white", insertbackground="white",
                        relief="flat", bd=0, width=22, justify="center")
    ent_conf.pack(ipady=7, padx=50)

    lbl_err = tk.Label(win, text="", font=("Helvetica", 9), fg=ROJO, bg=NEGRO)
    lbl_err.pack(pady=(6, 0))

    def cambiar(event=None):
        n = ent_new.get()
        c = ent_conf.get()
        if len(n) < 6:
            lbl_err.configure(text="La clave debe tener al menos 6 caracteres.")
            return
        if n != c:
            lbl_err.configure(text="Las claves no coinciden.")
            return
        if n == "admin123":
            lbl_err.configure(text="Elegí una clave diferente a la default.")
            return
        cfg = _leer_cfg()
        cfg["ADMIN_HASH"] = _hash_nuevo(n)
        _guardar_cfg(cfg)
        win.destroy()
        on_done()

    tk.Button(win, text="Guardar nueva clave",
              font=("Helvetica", 11, "bold"),
              bg=VERDE, fg="white", relief="flat",
              activebackground="#166534", cursor="hand2", bd=0,
              command=cambiar).pack(ipadx=20, ipady=7, pady=(8, 0))

    ent_new.focus_set()
    ent_conf.bind("<Return>", cambiar)


def pedir_usuario(on_ok):
    win = tk.Tk()
    win.title("Sistema de Balanza v2.1")
    win.resizable(False, False)
    win.configure(bg=NEGRO)
    win.geometry("400x340")
    win.update_idletasks()
    x = (win.winfo_screenwidth()  - 400) // 2
    y = (win.winfo_screenheight() - 340) // 2
    win.geometry(f"+{x}+{y}")

    tk.Label(win, text="SISTEMA DE BALANZA",
             font=("Helvetica", 16, "bold"),
             fg="white", bg=NEGRO).pack(pady=(26, 2))
    tk.Label(win, text="v2.1  —  ARGENSUN S.A.",
             font=("Helvetica", 9),
             fg="#4A6A8A", bg=NEGRO).pack(pady=(0, 16))
    tk.Frame(win, bg="#1A3A5A", height=1).pack(fill="x", padx=30)

    tk.Label(win, text="Usuario:",
             font=("Helvetica", 10),
             fg="#B3D4F0", bg=NEGRO, anchor="w").pack(
                 fill="x", padx=50, pady=(16, 2))
    ent_u = tk.Entry(win, font=("Helvetica", 13),
                      bg="#0D2137", fg="white",
                      insertbackground="white",
                      relief="flat", bd=0, width=22,
                      justify="center")
    ent_u.pack(ipady=7, padx=50)

    tk.Label(win, text="Contraseña:",
             font=("Helvetica", 10),
             fg="#B3D4F0", bg=NEGRO, anchor="w").pack(
                 fill="x", padx=50, pady=(10, 2))
    ent_c = tk.Entry(win, font=("Helvetica", 13),
                      bg="#0D2137", fg="white",
                      insertbackground="white",
                      relief="flat", bd=0, width=22,
                      justify="center", show="●")
    ent_c.pack(ipady=7, padx=50)

    lbl_err = tk.Label(win, text="",
                        font=("Helvetica", 9),
                        fg=ROJO, bg=NEGRO)
    lbl_err.pack(pady=(6, 0))

    cfg_actual = _leer_cfg()
    ultimo = cfg_actual.get("ULTIMO_USUARIO", "")
    if ultimo:
        ent_u.insert(0, ultimo)
        ent_c.focus_set()
    else:
        ent_u.focus_set()

    def confirmar(event=None):
        usuario = ent_u.get().strip().upper()
        clave   = ent_c.get().strip()

        if not usuario:
            lbl_err.configure(text="Ingresá el usuario.")
            ent_u.focus_set()
            return
        if not clave:
            lbl_err.configure(text="Ingresá la contraseña.")
            ent_c.focus_set()
            return

        if _validar(usuario, clave):
            cfg2 = _leer_cfg()
            cfg2["ULTIMO_USUARIO"] = usuario
            _guardar_cfg(cfg2)

            # Migrar hash viejo a nuevo si es SHA-256 plano
            if usuario == "ADMIN":
                stored = cfg2.get("ADMIN_HASH", _HASH_ADMIN_DEFAULT)
                if ":" not in stored:
                    cfg2["ADMIN_HASH"] = _hash_nuevo(clave)
                    _guardar_cfg(cfg2)
            else:
                key = f"USR_{usuario}"
                if key in cfg2 and ":" not in cfg2[key]:
                    cfg2[key] = _hash_nuevo(clave)
                    _guardar_cfg(cfg2)

            # Si es admin con clave default, forzar cambio
            if usuario == "ADMIN" and _es_clave_default():
                def after_change():
                    win.destroy()
                    on_ok(usuario)
                _forzar_cambio_clave(win, after_change)
            else:
                win.destroy()
                on_ok(usuario)
        else:
            lbl_err.configure(text="Usuario o contraseña incorrectos.")
            ent_c.delete(0, "end")
            ent_c.focus_set()

    tk.Button(win, text="Ingresar al sistema",
              font=("Helvetica", 11, "bold"),
              bg=AZUL, fg="white", relief="flat",
              activebackground="#143F75",
              cursor="hand2", bd=0,
              command=confirmar).pack(ipadx=20, ipady=7, pady=(6, 0))

    if not _hay_usuarios_cargados():
        tk.Label(win,
                 text="Primer uso: usuario ADMIN / clave admin123",
                 font=("Helvetica", 8), fg="#2A4A6A", bg=NEGRO
                 ).pack(pady=(8, 0))

    ent_u.bind("<Return>", lambda e: ent_c.focus_set())
    ent_c.bind("<Return>", confirmar)
    win.protocol("WM_DELETE_WINDOW", lambda: None)
    win.mainloop()
