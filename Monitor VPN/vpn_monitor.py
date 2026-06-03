#!/usr/bin/env python3
"""
VPN Monitor - MikroTik OpenVPN
Monitor de usuarios conectados vía OpenVPN en MikroTik CCR2004 (Argensun)
Conexión vía API MikroTik (puerto 8728)
"""

import tkinter as tk
from tkinter import ttk, messagebox
import socket
import hashlib
import struct
import threading
import time
from datetime import datetime, timedelta

# ─── CONFIGURACIÓN POR DEFECTO ───────────────────────────────────────────────
DEFAULT_HOST = "200.45.20.174"
DEFAULT_PORT = 8728
DEFAULT_USER = "admin"
REFRESH_INTERVAL = 60  # segundos

# ─── COLORES Y ESTILO ─────────────────────────────────────────────────────────
BG_DARK      = "#0d1117"
BG_CARD      = "#161b22"
BG_ROW_ODD   = "#1a2030"
BG_ROW_EVEN  = "#161b22"
BG_HEADER    = "#0d1117"
ACCENT_GREEN = "#39d353"
ACCENT_BLUE  = "#58a6ff"
ACCENT_RED   = "#f85149"
ACCENT_AMBER = "#e3b341"
TEXT_PRIMARY = "#e6edf3"
TEXT_MUTED   = "#7d8590"
BORDER       = "#30363d"
FONT_MONO    = ("Consolas", 10)
FONT_TITLE   = ("Consolas", 18, "bold")
FONT_LABEL   = ("Consolas", 9)
FONT_VALUE   = ("Consolas", 10, "bold")
FONT_HEADER  = ("Consolas", 9, "bold")


# ═══════════════════════════════════════════════════════════════════════════════
#  API MikroTik - implementación mínima del protocolo RouterOS API
# ═══════════════════════════════════════════════════════════════════════════════

class MikroTikAPI:
    def __init__(self, host, port=8728, timeout=10):
        self.host = host
        self.port = port
        self.timeout = timeout
        self.sock = None

    def connect(self):
        self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.sock.settimeout(self.timeout)
        self.sock.connect((self.host, self.port))

    def disconnect(self):
        if self.sock:
            try:
                self.sock.close()
            except Exception:
                pass
            self.sock = None

    def _encode_length(self, length):
        if length < 0x80:
            return bytes([length])
        elif length < 0x4000:
            length |= 0x8000
            return struct.pack("!H", length)
        elif length < 0x200000:
            length |= 0xC00000
            return struct.pack("!I", length)[1:]
        elif length < 0x10000000:
            length |= 0xE0000000
            return struct.pack("!I", length)
        else:
            return bytes([0xF0]) + struct.pack("!I", length)

    def _encode_word(self, word):
        encoded = word.encode("utf-8")
        return self._encode_length(len(encoded)) + encoded

    def _encode_sentence(self, words):
        sentence = b""
        for word in words:
            sentence += self._encode_word(word)
        sentence += self._encode_length(0)
        return sentence

    def _read_length(self):
        b = self.sock.recv(1)
        if not b:
            raise ConnectionError("Conexión cerrada por el router")
        c = b[0]
        if c & 0x80 == 0x00:
            return c
        elif c & 0xC0 == 0x80:
            second = self.sock.recv(1)[0]
            return ((c & ~0x80) << 8) | second
        elif c & 0xE0 == 0xC0:
            rest = self.sock.recv(2)
            return ((c & ~0xC0) << 16) | (rest[0] << 8) | rest[1]
        elif c & 0xF0 == 0xE0:
            rest = self.sock.recv(3)
            return ((c & ~0xE0) << 24) | (rest[0] << 16) | (rest[1] << 8) | rest[2]
        else:
            return struct.unpack("!I", self.sock.recv(4))[0]

    def _read_word(self):
        length = self._read_length()
        if length == 0:
            return ""
        data = b""
        while len(data) < length:
            chunk = self.sock.recv(length - len(data))
            if not chunk:
                raise ConnectionError("Datos incompletos")
            data += chunk
        return data.decode("utf-8")

    def _read_sentence(self):
        sentence = []
        while True:
            word = self._read_word()
            if word == "":
                break
            sentence.append(word)
        return sentence

    def _read_response(self):
        responses = []
        while True:
            sentence = self._read_sentence()
            if not sentence:
                continue
            tag = sentence[0]
            attrs = {}
            for item in sentence[1:]:
                if "=" in item:
                    key, _, value = item.partition("=")
                    attrs[key.lstrip("=")] = value
            responses.append((tag, attrs))
            if tag in ("!done", "!trap", "!fatal"):
                break
        return responses

    def login(self, username, password):
        # RouterOS v6+ y v7: intentar login moderno primero
        self.sock.sendall(self._encode_sentence(["/login", f"=name={username}", f"=password={password}"]))
        response = self._read_response()
        tag, attrs = response[0]
        if tag == "!done":
            return True
        # Fallback: login MD5 (RouterOS < 6.49)
        if tag == "!done" or (tag == "!trap"):
            raise ConnectionError(f"Login fallido: {attrs.get('message', 'credenciales incorrectas')}")
        # Challenge-response MD5
        challenge = attrs.get("ret", "")
        if challenge:
            md5 = hashlib.md5()
            md5.update(b"\x00")
            md5.update(password.encode("utf-8"))
            md5.update(bytes.fromhex(challenge))
            response_hash = "00" + md5.hexdigest()
            self.sock.sendall(self._encode_sentence([
                "/login",
                f"=name={username}",
                f"=response={response_hash}"
            ]))
            resp2 = self._read_response()
            if resp2[0][0] == "!done":
                return True
            raise ConnectionError("Login MD5 fallido")
        raise ConnectionError("Login fallido")

    def command(self, cmd, params=None):
        words = [cmd]
        if params:
            for k, v in params.items():
                words.append(f"={k}={v}")
        self.sock.sendall(self._encode_sentence(words))
        return self._read_response()


# ═══════════════════════════════════════════════════════════════════════════════
#  Funciones de consulta VPN
# ═══════════════════════════════════════════════════════════════════════════════

def bytes_to_human(b):
    try:
        b = int(b)
    except (ValueError, TypeError):
        return "—"
    for unit in ["B", "KB", "MB", "GB", "TB"]:
        if b < 1024:
            return f"{b:.1f} {unit}"
        b /= 1024
    return f"{b:.1f} PB"

def parse_uptime(uptime_str):
    """Convierte el uptime de MikroTik (e.g. '1d2h3m4s') a string legible."""
    if not uptime_str:
        return "—"
    return uptime_str  # Ya viene en formato legible desde RouterOS

def get_openvpn_users(host, port, username, password):
    """Conecta al MikroTik y obtiene usuarios OpenVPN activos."""
    api = MikroTikAPI(host, port)
    api.connect()
    api.login(username, password)

    response = api.command("/interface/ovpn-server/print", {"stats": ""})
    api.disconnect()

    users = []
    for tag, attrs in response:
        if tag == "!re":
            users.append({
                "name":     attrs.get("name", "—"),
                "user":     attrs.get("user", "—"),
                "address":  attrs.get("remote-address", "—"),
                "local_ip": attrs.get("local-address", "—"),
                "uptime":   parse_uptime(attrs.get("uptime", "—")),
                "rx_bytes": bytes_to_human(attrs.get("rx-byte", 0)),
                "tx_bytes": bytes_to_human(attrs.get("tx-byte", 0)),
                "encoding": attrs.get("encoding", "—"),
                "running":  attrs.get("running", "false"),
            })
    return users


# ═══════════════════════════════════════════════════════════════════════════════
#  GUI Principal
# ═══════════════════════════════════════════════════════════════════════════════

class VPNMonitor(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("VPN Monitor — Argensun")
        self.geometry("1100x680")
        self.minsize(900, 500)
        self.configure(bg=BG_DARK)
        self.resizable(True, True)

        self._host     = tk.StringVar(value=DEFAULT_HOST)
        self._port     = tk.StringVar(value=str(DEFAULT_PORT))
        self._user     = tk.StringVar(value=DEFAULT_USER)
        self._password = tk.StringVar(value="")
        self._status   = tk.StringVar(value="Desconectado")
        self._last_upd = tk.StringVar(value="—")
        self._count    = tk.IntVar(value=0)
        self._running  = False
        self._timer    = None
        self._users    = []

        self._build_ui()
        self._apply_styles()

    # ── Construcción UI ──────────────────────────────────────────────────────

    def _build_ui(self):
        # ── Barra superior ──
        header = tk.Frame(self, bg=BG_DARK, pady=12, padx=20)
        header.pack(fill="x")

        tk.Label(header, text="◈ VPN MONITOR", font=FONT_TITLE,
                 bg=BG_DARK, fg=ACCENT_GREEN).pack(side="left")

        tk.Label(header, text="MikroTik CCR2004-16G-2S+  ·  Argensun",
                 font=FONT_LABEL, bg=BG_DARK, fg=TEXT_MUTED).pack(side="left", padx=16)

        # Contador
        count_frame = tk.Frame(header, bg=BG_CARD, padx=12, pady=4,
                               highlightbackground=BORDER, highlightthickness=1)
        count_frame.pack(side="right", padx=8)
        tk.Label(count_frame, text="CONECTADOS", font=FONT_LABEL,
                 bg=BG_CARD, fg=TEXT_MUTED).pack(side="left", padx=(0, 6))
        tk.Label(count_frame, textvariable=self._count, font=FONT_VALUE,
                 bg=BG_CARD, fg=ACCENT_GREEN).pack(side="left")

        # ── Separador ──
        tk.Frame(self, bg=BORDER, height=1).pack(fill="x")

        # ── Panel de conexión ──
        conn_frame = tk.Frame(self, bg=BG_CARD, padx=16, pady=10)
        conn_frame.pack(fill="x")

        fields = [
            ("HOST",     self._host,     22),
            ("PUERTO",   self._port,     7),
            ("USUARIO",  self._user,     14),
            ("PASSWORD", self._password, 18),
        ]
        for label, var, width in fields:
            tk.Label(conn_frame, text=label, font=FONT_LABEL,
                     bg=BG_CARD, fg=TEXT_MUTED).pack(side="left", padx=(0, 4))
            show = "*" if label == "PASSWORD" else None
            e = tk.Entry(conn_frame, textvariable=var, width=width,
                         bg=BG_DARK, fg=TEXT_PRIMARY, insertbackground=TEXT_PRIMARY,
                         relief="flat", font=FONT_MONO,
                         highlightbackground=BORDER, highlightthickness=1,
                         show=show)
            e.pack(side="left", padx=(0, 14))

        self._btn_connect = tk.Button(
            conn_frame, text="▶  CONECTAR", command=self._toggle_monitor,
            bg=ACCENT_GREEN, fg=BG_DARK, font=("Consolas", 10, "bold"),
            relief="flat", cursor="hand2", padx=14, pady=4,
            activebackground="#2fb344", activeforeground=BG_DARK)
        self._btn_connect.pack(side="left", padx=6)

        tk.Button(conn_frame, text="⟳  ACTUALIZAR", command=self._manual_refresh,
                  bg=BG_DARK, fg=ACCENT_BLUE, font=("Consolas", 10),
                  relief="flat", cursor="hand2", padx=12, pady=4,
                  highlightbackground=BORDER, highlightthickness=1,
                  activebackground=BG_CARD, activeforeground=ACCENT_BLUE
                  ).pack(side="left", padx=4)

        # Status + última actualización
        status_frame = tk.Frame(conn_frame, bg=BG_CARD)
        status_frame.pack(side="right", padx=8)
        tk.Label(status_frame, textvariable=self._status, font=FONT_LABEL,
                 bg=BG_CARD, fg=ACCENT_AMBER).pack(anchor="e")
        tk.Label(status_frame, textvariable=self._last_upd, font=FONT_LABEL,
                 bg=BG_CARD, fg=TEXT_MUTED).pack(anchor="e")

        # ── Separador ──
        tk.Frame(self, bg=BORDER, height=1).pack(fill="x")

        # ── Tabla ──
        table_frame = tk.Frame(self, bg=BG_DARK, padx=16, pady=12)
        table_frame.pack(fill="both", expand=True)

        columns = ("user", "remote_ip", "local_ip", "uptime", "rx", "tx")
        col_conf = {
            "user":      ("USUARIO",         160, "w"),
            "remote_ip": ("IP ORIGEN",        140, "center"),
            "local_ip":  ("IP ASIGNADA",      130, "center"),
            "uptime":    ("TIEMPO CONECTADO", 130, "center"),
            "rx":        ("RECIBIDO",          90, "e"),
            "tx":        ("ENVIADO",           90, "e"),
        }

        style = ttk.Style(self)
        style.theme_use("clam")
        style.configure("VPN.Treeview",
                         background=BG_ROW_EVEN,
                         foreground=TEXT_PRIMARY,
                         fieldbackground=BG_ROW_EVEN,
                         rowheight=28,
                         font=FONT_MONO,
                         borderwidth=0,
                         relief="flat")
        style.configure("VPN.Treeview.Heading",
                         background=BG_HEADER,
                         foreground=TEXT_MUTED,
                         font=FONT_HEADER,
                         borderwidth=0,
                         relief="flat",
                         padding=(8, 6))
        style.map("VPN.Treeview",
                  background=[("selected", "#1f3d5c")],
                  foreground=[("selected", ACCENT_BLUE)])
        style.map("VPN.Treeview.Heading",
                  background=[("active", BG_CARD)])

        self._tree = ttk.Treeview(table_frame, columns=columns,
                                   show="headings", style="VPN.Treeview",
                                   selectmode="browse")

        for col, (heading, width, anchor) in col_conf.items():
            self._tree.heading(col, text=heading)
            self._tree.column(col, width=width, anchor=anchor, minwidth=60)

        self._tree.tag_configure("odd",  background=BG_ROW_ODD)
        self._tree.tag_configure("even", background=BG_ROW_EVEN)
        self._tree.tag_configure("up",   foreground=ACCENT_GREEN)

        # Scrollbars
        vsb = ttk.Scrollbar(table_frame, orient="vertical",
                            command=self._tree.yview)
        hsb = ttk.Scrollbar(table_frame, orient="horizontal",
                            command=self._tree.xview)
        self._tree.configure(yscrollcommand=vsb.set,
                              xscrollcommand=hsb.set)
        style.configure("Vertical.TScrollbar",
                        background=BG_CARD, troughcolor=BG_DARK,
                        borderwidth=0, arrowcolor=TEXT_MUTED)

        self._tree.grid(row=0, column=0, sticky="nsew")
        vsb.grid(row=0, column=1, sticky="ns")
        hsb.grid(row=1, column=0, sticky="ew")
        table_frame.rowconfigure(0, weight=1)
        table_frame.columnconfigure(0, weight=1)

        # ── Barra inferior ──
        footer = tk.Frame(self, bg=BG_CARD, padx=16, pady=6,
                          highlightbackground=BORDER, highlightthickness=1)
        footer.pack(fill="x", side="bottom")

        tk.Label(footer,
                 text=f"Auto-refresh: {REFRESH_INTERVAL}s  ·  RouterOS v7  ·  API puerto {DEFAULT_PORT}",
                 font=FONT_LABEL, bg=BG_CARD, fg=TEXT_MUTED).pack(side="left")

        self._progress = tk.Label(footer, text="", font=FONT_LABEL,
                                   bg=BG_CARD, fg=ACCENT_BLUE)
        self._progress.pack(side="right")

    def _apply_styles(self):
        self.option_add("*TCombobox*Listbox.background", BG_CARD)

    # ── Lógica de conexión y refresco ─────────────────────────────────────────

    def _toggle_monitor(self):
        if not self._running:
            self._start_monitor()
        else:
            self._stop_monitor()

    def _start_monitor(self):
        self._running = True
        self._btn_connect.config(text="■  DETENER", bg=ACCENT_RED,
                                  activebackground="#c93d37")
        self._status.set("● Conectando...")
        self._fetch_data()

    def _stop_monitor(self):
        self._running = False
        if self._timer:
            self.after_cancel(self._timer)
            self._timer = None
        self._btn_connect.config(text="▶  CONECTAR", bg=ACCENT_GREEN,
                                  activebackground="#2fb344")
        self._status.set("Detenido")
        self._progress.config(text="")

    def _manual_refresh(self):
        if self._timer:
            self.after_cancel(self._timer)
        self._status.set("● Actualizando...")
        self._fetch_data_async()

    def _fetch_data(self):
        self._fetch_data_async()

    def _fetch_data_async(self):
        self._progress.config(text="⟳ consultando router...")
        thread = threading.Thread(target=self._worker, daemon=True)
        thread.start()

    def _worker(self):
        try:
            host     = self._host.get().strip()
            port     = int(self._port.get().strip())
            username = self._user.get().strip()
            password = self._password.get()
            users = get_openvpn_users(host, port, username, password)
            self.after(0, self._update_table, users, None)
        except Exception as e:
            self.after(0, self._update_table, [], str(e))

    def _update_table(self, users, error):
        # Limpiar tabla
        for item in self._tree.get_children():
            self._tree.delete(item)

        if error:
            self._status.set(f"✗ Error")
            self._progress.config(text=f"Error: {error[:80]}")
            messagebox.showerror("Error de conexión", str(error))
        else:
            now = datetime.now().strftime("%H:%M:%S")
            self._status.set(f"● Activo")
            self._last_upd.set(f"Última actualización: {now}")
            self._progress.config(text=f"OK — {now}")
            self._count.set(len(users))

            for i, u in enumerate(users):
                tag = "odd" if i % 2 else "even"
                self._tree.insert("", "end", tags=(tag, "up"),
                    values=(
                        u["user"],
                        u["address"],
                        u["local_ip"],
                        u["uptime"],
                        u["rx_bytes"],
                        u["tx_bytes"],
                    ))

        # Reprogramar si sigue activo
        if self._running:
            self._timer = self.after(REFRESH_INTERVAL * 1000, self._fetch_data)


# ═══════════════════════════════════════════════════════════════════════════════
#  Entry point
# ═══════════════════════════════════════════════════════════════════════════════

if __name__ == "__main__":
    app = VPNMonitor()
    app.mainloop()
