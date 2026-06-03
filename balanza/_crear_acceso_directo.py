"""
_crear_acceso_directo.py
Crea icono de Balanza v2 en el Escritorio de Windows.
Llamado automaticamente por INICIAR.bat
"""
import os, sys, subprocess, pathlib

def main():
    carpeta = pathlib.Path(sys.argv[0]).parent.resolve()
    # Si se llama desde el BAT con cd /d, usar cwd
    if not (carpeta / "main.py").exists():
        carpeta = pathlib.Path.cwd().resolve()

    bat = carpeta / "INICIAR.bat"
    ico = carpeta / "balanza.ico"

    # Buscar escritorio (varios lugares posibles en Windows)
    for cand in [
        pathlib.Path.home() / "Desktop",
        pathlib.Path.home() / "Escritorio",
        pathlib.Path.home() / "OneDrive" / "Escritorio",
        pathlib.Path.home() / "OneDrive" / "Desktop",
        pathlib.Path(os.environ.get("USERPROFILE", "")) / "Desktop",
        pathlib.Path(os.environ.get("USERPROFILE", "")) / "Escritorio",
    ]:
        if cand.exists():
            escritorio = cand
            break
    else:
        escritorio = pathlib.Path.home() / "Desktop"
        escritorio.mkdir(parents=True, exist_ok=True)

    acceso = str(escritorio / "Balanza v2.lnk")

    # Construir VBScript
    lineas = [
        'Set oWS  = WScript.CreateObject("WScript.Shell")',
        f'Set oLnk = oWS.CreateShortcut("{acceso}")',
        f'oLnk.TargetPath       = "{bat}"',
        f'oLnk.WorkingDirectory = "{carpeta}"',
        'oLnk.Description      = "Sistema de Balanza v2.0"',
        'oLnk.WindowStyle      = 1',
    ]
    if ico.exists():
        lineas.append(f'oLnk.IconLocation = "{ico}, 0"')
    lineas.append("oLnk.Save")

    tmp = carpeta / "_tmp_lnk.vbs"
    tmp.write_text("\n".join(lineas), encoding="utf-8")

    try:
        subprocess.run(
            ["cscript", "//nologo", str(tmp)],
            capture_output=True, timeout=10
        )
    except Exception as e:
        print(f"[acceso directo] {e}")
    finally:
        try: tmp.unlink()
        except: pass

if __name__ == "__main__":
    main()
