# Parque Informático Dashboard - Plan de Implementación

> **Para ejecución:** Use superpowers:subagent-driven-development o superpowers:executing-plans para implementar paso a paso.

**Objetivo:** Crear un dashboard Excel interactivo que consolide el inventario de 7 sucursales, agregue valores de mercado en USD desde MercadoLibre, y genere visualizaciones.

**Arquitectura:** Script Python que lee el inventario actual, busca precios faltantes en MercadoLibre.com.ar, y construye un archivo Excel con 8 pestañas (1 Dashboard visual + 1 consolidada + 6 por sucursal) usando openpyxl y gráficos dinámicos.

**Tech Stack:** Python 3, pandas (lectura), openpyxl (creación Excel), requests/selenium (web scraping MercadoLibre), matplotlib (gráficos).

---

## Estructura de Archivos

**Se crearán:**
- `scripts/build_dashboard.py` — Script principal orquestador
- `scripts/data_processor.py` — Lectura y transformación de datos
- `scripts/mercadolibre_scraper.py` — Búsqueda de precios en MercadoLibre.com.ar
- `scripts/excel_builder.py` — Construcción del archivo Excel final

**Se modificarán:**
- Ninguno (trabajamos con archivo input descargado)

**Directorio de salida:**
- `output/Parque_Informatico_Dashboard_2026-06-03.xlsx`

---

## Tasks

### Task 1: Leer y analizar estructura del inventario actual

**Archivos:**
- Crear: `scripts/data_processor.py`
- Input: `C:\Users\diego.robalo\Downloads\1. Formulario INVENTARIO para auditar.xlsx`

- [ ] **Step 1: Crear script data_processor.py con función para leer hojas**

```python
import pandas as pd
from pathlib import Path

def read_inventory_file(file_path):
    """Lee todas las hojas del Excel de inventario."""
    excel_file = pd.ExcelFile(file_path)
    sheets = {}
    
    for sheet_name in excel_file.sheet_names:
        df = pd.read_excel(file_path, sheet_name=sheet_name)
        sheets[sheet_name] = df
    
    return sheets

def extract_equipment_rows(sheets_dict):
    """Extrae filas de equipos (descarta encabezados y textos vacíos)."""
    all_equipment = []
    
    for location_name, df in sheets_dict.items():
        # Saltar filas vacías y encabezados
        df_clean = df.dropna(how='all')
        
        # Solo filas con datos reales (ajustar según estructura actual)
        for idx, row in df_clean.iterrows():
            if pd.notna(row.iloc[0]):  # Si hay dato en primera columna
                all_equipment.append({
                    'location': location_name,
                    'raw_data': row.to_dict()
                })
    
    return all_equipment

if __name__ == '__main__':
    file_path = r'C:\Users\diego.robalo\Downloads\1. Formulario INVENTARIO para auditar.xlsx'
    sheets = read_inventory_file(file_path)
    print(f"Hojas encontradas: {list(sheets.keys())}")
    
    equipment = extract_equipment_rows(sheets)
    print(f"Equipos detectados: {len(equipment)}")
```

- [ ] **Step 2: Ejecutar script para verificar lectura**

```bash
cd C:\Users\diego.robalo\Documents\CLAUDIA
python scripts/data_processor.py
```

Expected output:
```
Hojas encontradas: ['Ejemplo', 'Victoria', 'Linera', 'Fabril', 'San Rafael', 'Chivilcoy', 'Robles']
Equipos detectados: [número total]
```

- [ ] **Step 3: Commit**

```bash
git add scripts/data_processor.py
git commit -m "feat: add inventory file reader and data extractor"
```

---

### Task 2: Normalizar columnas de equipos

**Archivos:**
- Modificar: `scripts/data_processor.py`

- [ ] **Step 1: Agregar función para mapear y normalizar columnas**

Reemplazar el contenido de `data_processor.py` con:

```python
import pandas as pd
import re
from pathlib import Path

def read_inventory_file(file_path):
    """Lee todas las hojas del Excel de inventario."""
    excel_file = pd.ExcelFile(file_path)
    sheets = {}
    
    for sheet_name in excel_file.sheet_names:
        df = pd.read_excel(file_path, sheet_name=sheet_name)
        sheets[sheet_name] = df
    
    return sheets

def normalize_equipment_data(sheets_dict):
    """
    Normaliza datos de equipos a estructura estándar.
    Estructura esperada: Tipo | Marca | Modelo | Especificaciones | Estado | Valor USD | Observaciones
    """
    equipment_list = []
    
    for location_name, df in sheets_dict.items():
        if location_name == 'Ejemplo':  # Saltear hoja de ejemplo
            continue
            
        df_clean = df.dropna(how='all')
        
        for idx, row in df_clean.iterrows():
            # Convertir row a dict para buscar columnas por nombre/patrón
            row_dict = row.to_dict()
            
            # Detectar columnas (buscar patrones comunes)
            tipo = None
            marca = None
            modelo = None
            especificaciones = None
            estado = None
            valor_usd = None
            observaciones = None
            
            # Mapear columnas existentes
            for col_name, value in row_dict.items():
                col_lower = str(col_name).lower()
                
                if pd.notna(value) and value != '':
                    if 'tipo' in col_lower or 'dispositivo' in col_lower:
                        tipo = str(value).strip()
                    elif 'marca' in col_lower:
                        marca = str(value).strip()
                    elif 'modelo' in col_lower:
                        modelo = str(value).strip()
                    elif 'especif' in col_lower or 'característica' in col_lower:
                        especificaciones = str(value).strip()
                    elif 'estado' in col_lower:
                        estado = str(value).strip()
                    elif 'valor' in col_lower or 'precio' in col_lower or 'usd' in col_lower:
                        try:
                            valor_usd = float(value)
                        except:
                            valor_usd = None
                    elif 'observ' in col_lower:
                        observaciones = str(value).strip()
            
            # Solo agregar si hay al menos tipo
            if tipo:
                equipment_list.append({
                    'id': len(equipment_list) + 1,
                    'tipo': tipo,
                    'marca': marca or 'N/A',
                    'modelo': modelo or 'N/A',
                    'especificaciones': especificaciones or 'N/A',
                    'estado': estado or 'Funcional',
                    'localidad': location_name,
                    'fecha_adquisicion': 'N/A',  # Ajustar si existe en datos
                    'valor_usd': valor_usd,  # None si no tiene precio
                    'observaciones': observaciones or '',
                    'fuente_precio': 'Manual' if valor_usd else 'Pendiente'
                })
    
    return pd.DataFrame(equipment_list)

if __name__ == '__main__':
    file_path = r'C:\Users\diego.robalo\Downloads\1. Formulario INVENTARIO para auditar.xlsx'
    sheets = read_inventory_file(file_path)
    print(f"Hojas encontradas: {list(sheets.keys())}")
    
    df_normalized = normalize_equipment_data(sheets)
    print(f"\nEquipos normalizados: {len(df_normalized)}")
    print("\nEstructura:")
    print(df_normalized.head())
    print(f"\nEquipos sin precio (a buscar): {df_normalized['valor_usd'].isna().sum()}")
```

- [ ] **Step 2: Ejecutar para validar normalización**

```bash
python scripts/data_processor.py
```

Expected: Ver tabla normalizada con columnas estándar

- [ ] **Step 3: Commit**

```bash
git add scripts/data_processor.py
git commit -m "feat: normalize equipment data to standard structure"
```

---

### Task 3: Crear scraper para MercadoLibre.com.ar

**Archivos:**
- Crear: `scripts/mercadolibre_scraper.py`

- [ ] **Step 1: Crear script de búsqueda en MercadoLibre**

```python
import requests
from urllib.parse import quote
import time
from typing import Optional
import re

def search_mercadolibre_price(marca: str, modelo: str, tipo: str) -> Optional[dict]:
    """
    Busca precio de equipos usados en MercadoLibre.com.ar.
    Retorna: {'price': float, 'currency': str, 'url': str, 'condition': str}
    """
    
    # Construir query de búsqueda
    query = f"{marca} {modelo} {tipo}".strip()
    query_encoded = quote(query)
    
    # URL de búsqueda en MercadoLibre Argentina
    search_url = f"https://listado.mercadolibre.com.ar/{query_encoded}_Ordenamiento_PRICE_USED_DESC"
    
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        
        response = requests.get(search_url, headers=headers, timeout=10)
        response.raise_for_status()
        
        # Extraer precios de la HTML (búsqueda simple de patrones)
        # Patrón: buscar "$" seguido de números
        prices = re.findall(r'\$[\s\d.,]+', response.text)
        
        if prices:
            # Tomar el primer precio (suele ser el más barato)
            price_str = prices[0].replace('$', '').replace('.', '').replace(',', '.')
            try:
                price_ars = float(price_str)
                price_usd = price_ars / 45  # Conversión ARS a USD (aproximada)
                
                return {
                    'price_usd': round(price_usd, 2),
                    'price_ars': round(price_ars, 2),
                    'url': search_url,
                    'found': True
                }
            except ValueError:
                return None
        else:
            return {
                'price_usd': None,
                'price_ars': None,
                'url': search_url,
                'found': False
            }
    
    except requests.RequestException as e:
        print(f"Error buscando {query}: {e}")
        return None

def batch_search_prices(equipment_df, max_searches=50):
    """
    Busca precios para equipos sin valor USD.
    max_searches: limitar búsquedas para no sobrecargar MercadoLibre
    """
    
    missing_price = equipment_df[equipment_df['valor_usd'].isna()].copy()
    print(f"Buscando precios para {len(missing_price)} equipos...")
    
    results = []
    for idx, (i, row) in enumerate(missing_price.iterrows()):
        if idx >= max_searches:
            print(f"Límite de búsquedas alcanzado ({max_searches})")
            break
        
        print(f"[{idx+1}] Buscando: {row['marca']} {row['modelo']} ({row['tipo']})...", end=' ')
        
        result = search_mercadolibre_price(
            row['marca'],
            row['modelo'],
            row['tipo']
        )
        
        if result and result.get('found'):
            print(f"Encontrado: ${result['price_usd']} USD")
            results.append({
                'id': row['id'],
                'tipo': row['tipo'],
                'marca': row['marca'],
                'modelo': row['modelo'],
                'valor_usd': result['price_usd'],
                'valor_ars': result['price_ars'],
                'url': result['url'],
                'fecha_busqueda': pd.Timestamp.now().date()
            })
        else:
            print("No encontrado")
        
        time.sleep(2)  # Respetar servidor
    
    return results

if __name__ == '__main__':
    import pandas as pd
    from data_processor import read_inventory_file, normalize_equipment_data
    
    file_path = r'C:\Users\diego.robalo\Downloads\1. Formulario INVENTARIO para auditar.xlsx'
    sheets = read_inventory_file(file_path)
    df = normalize_equipment_data(sheets)
    
    results = batch_search_prices(df, max_searches=5)  # Test con 5 búsquedas
    
    if results:
        df_prices = pd.DataFrame(results)
        print("\n=== Precios encontrados ===")
        print(df_prices)
```

- [ ] **Step 2: Instalar dependencias**

```bash
pip install requests pandas openpyxl -q
```

- [ ] **Step 3: Ejecutar scraper (test con 5 búsquedas)**

```bash
python scripts/mercadolibre_scraper.py
```

Expected: Ver búsquedas y precios encontrados (o "No encontrado" si no hay datos de precio)

- [ ] **Step 4: Commit**

```bash
git add scripts/mercadolibre_scraper.py
git commit -m "feat: add MercadoLibre.com.ar price scraper for used equipment"
```

---

### Task 4: Enriquecer datos con precios buscados

**Archivos:**
- Crear: `scripts/data_enricher.py`

- [ ] **Step 1: Crear script que fusiona precios encontrados**

```python
import pandas as pd
from mercadolibre_scraper import batch_search_prices
from data_processor import read_inventory_file, normalize_equipment_data

def enrich_equipment_prices(equipment_df, search_results_df):
    """Fusiona precios encontrados en MercadoLibre con datos de equipos."""
    
    df_enriched = equipment_df.copy()
    
    # Actualizar valores USD de equipos encontrados
    for _, result in search_results_df.iterrows():
        mask = df_enriched['id'] == result['id']
        df_enriched.loc[mask, 'valor_usd'] = result['valor_usd']
        df_enriched.loc[mask, 'fuente_precio'] = 'MercadoLibre.com.ar'
    
    return df_enriched, search_results_df

def assign_default_prices(equipment_df):
    """
    Asigna precios por defecto a equipos sin precio encontrado.
    Basado en categoría (valores típicos de equipos usados).
    """
    
    default_prices = {
        'Laptop': 350,
        'Monitor': 100,
        'Teclado': 20,
        'Mouse': 15,
        'Mousepad': 10,
        'Servidor': 800,
        'Switch': 150,
        'Router': 75,
        'Impresora': 200,
        'Scanner': 100,
        'Webcam': 30,
        'Micrófono': 25,
        'Audífonos': 35,
        'Cable': 5,
        'Adaptador': 10,
        'Fuente': 40,
        'Memoria RAM': 30,
        'Disco SSD': 60,
        'Disco HDD': 40,
    }
    
    df = equipment_df.copy()
    
    # Aplicar precios por defecto donde falta
    for tipo, precio in default_prices.items():
        mask = (df['valor_usd'].isna()) & (df['tipo'].str.contains(tipo, case=False, na=False))
        df.loc[mask, 'valor_usd'] = precio
        df.loc[mask, 'fuente_precio'] = 'Estándar (sin búsqueda)'
    
    # Equipos aún sin precio: asignar $50 por defecto
    remaining_na = df['valor_usd'].isna()
    df.loc[remaining_na, 'valor_usd'] = 50
    df.loc[remaining_na, 'fuente_precio'] = 'Defecto'
    
    return df

def main():
    # Leer datos
    file_path = r'C:\Users\diego.robalo\Downloads\1. Formulario INVENTARIO para auditar.xlsx'
    sheets = read_inventory_file(file_path)
    df_equipment = normalize_equipment_data(sheets)
    
    print(f"Equipos leídos: {len(df_equipment)}")
    print(f"Sin precio inicial: {df_equipment['valor_usd'].isna().sum()}")
    
    # Buscar precios en MercadoLibre
    search_results = batch_search_prices(df_equipment, max_searches=100)
    df_search_results = pd.DataFrame(search_results) if search_results else pd.DataFrame()
    
    # Enriquecer con resultados
    if len(df_search_results) > 0:
        df_enriched, df_prices_found = enrich_equipment_prices(df_equipment, df_search_results)
    else:
        df_enriched = df_equipment
        df_prices_found = pd.DataFrame()
    
    print(f"Precios encontrados en MercadoLibre: {len(df_search_results)}")
    
    # Asignar precios por defecto
    df_final = assign_default_prices(df_enriched)
    
    print(f"Sin precio tras búsqueda: {df_final['valor_usd'].isna().sum()}")
    print(f"Valor total del parque: ${df_final['valor_usd'].sum():.2f} USD")
    
    # Exportar
    df_final.to_csv('output/inventario_enriquecido.csv', index=False)
    df_prices_found.to_csv('output/precios_buscados.csv', index=False)
    
    return df_final, df_prices_found

if __name__ == '__main__':
    import os
    os.makedirs('output', exist_ok=True)
    
    df_final, df_prices = main()
```

- [ ] **Step 2: Ejecutar enriquecimiento**

```bash
python scripts/data_enricher.py
```

Expected: Ver equipos con precios (algunos de MercadoLibre, otros por defecto)

- [ ] **Step 3: Commit**

```bash
git add scripts/data_enricher.py
git commit -m "feat: enrich equipment data with prices from MercadoLibre and defaults"
```

---

### Task 5: Crear estructura del archivo Excel

**Archivos:**
- Crear: `scripts/excel_builder.py`

- [ ] **Step 1: Crear script constructor del Excel**

```python
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
import pandas as pd

def create_excel_dashboard(df_equipment, df_prices_found):
    """Crea archivo Excel con estructura de dashboard."""
    
    wb = Workbook()
    wb.remove(wb.active)  # Eliminar hoja por defecto
    
    # Definir estilos
    header_fill = PatternFill(start_color='4472C4', end_color='4472C4', fill_type='solid')
    header_font = Font(bold=True, color='FFFFFF', size=11)
    border = Border(
        left=Side(style='thin'),
        right=Side(style='thin'),
        top=Side(style='thin'),
        bottom=Side(style='thin')
    )
    
    # 1. Crear hoja Dashboard
    ws_dashboard = wb.create_sheet('Dashboard', 0)
    ws_dashboard['A1'] = 'PARQUE INFORMÁTICO - DASHBOARD'
    ws_dashboard['A1'].font = Font(bold=True, size=16, color='4472C4')
    ws_dashboard.merge_cells('A1:D1')
    
    ws_dashboard['A3'] = 'RESUMEN EJECUTIVO'
    ws_dashboard['A3'].font = Font(bold=True, size=12)
    
    # KPIs
    ws_dashboard['A5'] = 'Cantidad Total de Equipos'
    ws_dashboard['B5'] = f'=COUNTA(\'Inventario Consolidado\'!A:A)-1'
    ws_dashboard['A6'] = 'Valor Total USD'
    ws_dashboard['B6'] = f'=SUM(\'Inventario Consolidado\'!I:I)'
    ws_dashboard['A7'] = 'Valor Promedio por Equipo'
    ws_dashboard['B7'] = f'=AVERAGE(\'Inventario Consolidado\'!I:I)'
    
    for cell in ['B5', 'B6', 'B7']:
        ws_dashboard[cell].font = Font(bold=True, size=12, color='4472C4')
    
    ws_dashboard.column_dimensions['A'].width = 35
    ws_dashboard.column_dimensions['B'].width = 20
    
    # 2. Crear hoja Inventario Consolidado
    ws_consolidado = wb.create_sheet('Inventario Consolidado', 1)
    
    columns = ['ID', 'Tipo', 'Marca', 'Modelo', 'Especificaciones', 'Estado', 
               'Localidad', 'Fecha Adquisición', 'Valor USD', 'Observaciones', 'Fuente Precio']
    
    # Escribir encabezados
    for col_num, col_name in enumerate(columns, 1):
        cell = ws_consolidado.cell(row=1, column=col_num)
        cell.value = col_name
        cell.font = header_font
        cell.fill = header_fill
        cell.border = border
    
    # Escribir datos
    for row_num, (_, row) in enumerate(df_equipment.iterrows(), 2):
        ws_consolidado.cell(row=row_num, column=1).value = row['id']
        ws_consolidado.cell(row=row_num, column=2).value = row['tipo']
        ws_consolidado.cell(row=row_num, column=3).value = row['marca']
        ws_consolidado.cell(row=row_num, column=4).value = row['modelo']
        ws_consolidado.cell(row=row_num, column=5).value = row['especificaciones']
        ws_consolidado.cell(row=row_num, column=6).value = row['estado']
        ws_consolidado.cell(row=row_num, column=7).value = row['localidad']
        ws_consolidado.cell(row=row_num, column=8).value = row['fecha_adquisicion']
        ws_consolidado.cell(row=row_num, column=9).value = row['valor_usd']
        ws_consolidado.cell(row=row_num, column=10).value = row['observaciones']
        ws_consolidado.cell(row=row_num, column=11).value = row['fuente_precio']
        
        # Formato USD para columna 9
        ws_consolidado.cell(row=row_num, column=9).number_format = '$#,##0.00'
    
    # Ajustar ancho de columnas
    for col_num in range(1, len(columns) + 1):
        ws_consolidado.column_dimensions[get_column_letter(col_num)].width = 18
    
    # 3. Crear hoja Precios Buscados
    if len(df_prices_found) > 0:
        ws_prices = wb.create_sheet('Precios Buscados', -1)
        
        price_cols = ['Tipo', 'Marca', 'Modelo', 'Valor USD', 'Valor ARS', 'URL MercadoLibre', 'Fecha Búsqueda']
        
        for col_num, col_name in enumerate(price_cols, 1):
            cell = ws_prices.cell(row=1, column=col_num)
            cell.value = col_name
            cell.font = header_font
            cell.fill = header_fill
        
        for row_num, (_, row) in enumerate(df_prices_found.iterrows(), 2):
            ws_prices.cell(row=row_num, column=1).value = row['tipo']
            ws_prices.cell(row=row_num, column=2).value = row['marca']
            ws_prices.cell(row=row_num, column=3).value = row['modelo']
            ws_prices.cell(row=row_num, column=4).value = row['valor_usd']
            ws_prices.cell(row=row_num, column=5).value = row['valor_ars']
            ws_prices.cell(row=row_num, column=6).value = row['url']
            ws_prices.cell(row=row_num, column=7).value = row['fecha_busqueda']
        
        for col_num in range(1, len(price_cols) + 1):
            ws_prices.column_dimensions[get_column_letter(col_num)].width = 20
    
    return wb

if __name__ == '__main__':
    from data_enricher import main as enrich_main
    
    df_final, df_prices = enrich_main()
    
    wb = create_excel_dashboard(df_final, df_prices)
    wb.save('output/Parque_Informatico_Dashboard_2026-06-03.xlsx')
    
    print("✓ Excel creado: output/Parque_Informatico_Dashboard_2026-06-03.xlsx")
```

- [ ] **Step 2: Ejecutar constructor**

```bash
python scripts/excel_builder.py
```

Expected: Archivo Excel creado en `output/Parque_Informatico_Dashboard_2026-06-03.xlsx`

- [ ] **Step 3: Commit**

```bash
git add scripts/excel_builder.py
git commit -m "feat: create Excel dashboard with consolidated and location-specific sheets"
```

---

### Task 6: Agregar hojas por sucursal

**Archivos:**
- Modificar: `scripts/excel_builder.py`

- [ ] **Step 1: Agregar función para crear hojas por localidad**

Modificar `excel_builder.py` - agregar esta función antes de `create_excel_dashboard`:

```python
def add_location_sheets(wb, df_equipment, columns):
    """Crea hojas separadas para cada sucursal."""
    
    locations = df_equipment['localidad'].unique()
    header_fill = PatternFill(start_color='4472C4', end_color='4472C4', fill_type='solid')
    header_font = Font(bold=True, color='FFFFFF', size=11)
    border = Border(
        left=Side(style='thin'),
        right=Side(style='thin'),
        top=Side(style='thin'),
        bottom=Side(style='thin')
    )
    
    for location in locations:
        df_location = df_equipment[df_equipment['localidad'] == location]
        
        ws = wb.create_sheet(location)
        
        # Encabezado con nombre de sucursal
        ws['A1'] = f"INVENTARIO - {location.upper()}"
        ws['A1'].font = Font(bold=True, size=12, color='4472C4')
        ws.merge_cells('A1:K1')
        
        # Escribir encabezados de columnas
        for col_num, col_name in enumerate(columns, 1):
            cell = ws.cell(row=3, column=col_num)
            cell.value = col_name
            cell.font = header_font
            cell.fill = header_fill
            cell.border = border
        
        # Escribir datos
        for row_num, (_, row) in enumerate(df_location.iterrows(), 4):
            ws.cell(row=row_num, column=1).value = row['id']
            ws.cell(row=row_num, column=2).value = row['tipo']
            ws.cell(row=row_num, column=3).value = row['marca']
            ws.cell(row=row_num, column=4).value = row['modelo']
            ws.cell(row=row_num, column=5).value = row['especificaciones']
            ws.cell(row=row_num, column=6).value = row['estado']
            ws.cell(row=row_num, column=7).value = row['localidad']
            ws.cell(row=row_num, column=8).value = row['fecha_adquisicion']
            ws.cell(row=row_num, column=9).value = row['valor_usd']
            ws.cell(row=row_num, column=10).value = row['observaciones']
            ws.cell(row=row_num, column=11).value = row['fuente_precio']
            
            ws.cell(row=row_num, column=9).number_format = '$#,##0.00'
        
        # Subtotal
        last_row = 3 + len(df_location)
        ws[f'A{last_row + 2}'] = 'SUBTOTAL'
        ws[f'A{last_row + 2}'].font = Font(bold=True)
        ws[f'B{last_row + 2}'] = f'=COUNTA(B4:B{last_row})'
        ws[f'I{last_row + 2}'] = f'=SUM(I4:I{last_row})'
        ws[f'I{last_row + 2}'].number_format = '$#,##0.00'
        
        # Ajustar ancho
        for col_num in range(1, 12):
            ws.column_dimensions[get_column_letter(col_num)].width = 18
```

- [ ] **Step 2: Modificar create_excel_dashboard para usar la nueva función**

En `create_excel_dashboard`, después de crear `ws_consolidado`, agregar:

```python
    # Crear hojas por localidad
    add_location_sheets(wb, df_equipment, columns)
```

- [ ] **Step 3: Ejecutar nuevamente**

```bash
python scripts/excel_builder.py
```

Expected: Excel con 8 hojas (Dashboard, Consolidado, 6 sucursales, Precios Buscados)

- [ ] **Step 4: Commit**

```bash
git add scripts/excel_builder.py
git commit -m "feat: add location-specific inventory sheets for each facility"
```

---

### Task 7: Agregar gráficos al Dashboard

**Archivos:**
- Modificar: `scripts/excel_builder.py`

- [ ] **Step 1: Importar y usar BarChart, PieChart**

Agregar imports al inicio de `excel_builder.py`:

```python
from openpyxl.chart import PieChart, BarChart, Reference, DoughnutChart
```

- [ ] **Step 2: Agregar función para crear gráficos**

```python
def add_dashboard_charts(ws_dashboard, df_equipment):
    """Agrega gráficos visuales al dashboard."""
    
    # Gráfico 1: Pie chart - Cantidad por tipo
    equipment_by_type = df_equipment['tipo'].value_counts()
    
    ws_chart1 = ws_dashboard.parent.create_sheet('ChartData1')
    ws_chart1['A1'] = 'Tipo'
    ws_chart1['B1'] = 'Cantidad'
    
    for idx, (tipo, count) in enumerate(equipment_by_type.items(), 2):
        ws_chart1[f'A{idx}'] = tipo
        ws_chart1[f'B{idx}'] = count
    
    pie = PieChart()
    pie.title = 'Equipos por Tipo'
    pie.style = 10
    labels = Reference(ws_chart1, min_col=1, min_row=2, max_row=len(equipment_by_type)+1)
    data = Reference(ws_chart1, min_col=2, min_row=1, max_row=len(equipment_by_type)+1)
    pie.add_data(data, titles_from_data=True)
    pie.set_categories(labels)
    
    ws_dashboard.add_chart(pie, 'A10')
    
    # Gráfico 2: Bar chart - Valor por localidad
    value_by_location = df_equipment.groupby('localidad')['valor_usd'].sum()
    
    ws_chart2 = ws_dashboard.parent.create_sheet('ChartData2')
    ws_chart2['A1'] = 'Localidad'
    ws_chart2['B1'] = 'Valor USD'
    
    for idx, (localidad, valor) in enumerate(value_by_location.items(), 2):
        ws_chart2[f'A{idx}'] = localidad
        ws_chart2[f'B{idx}'] = valor
    
    bar = BarChart()
    bar.type = 'col'
    bar.title = 'Valor Total por Sucursal (USD)'
    bar.y_axis.title = 'Valor USD'
    bar.x_axis.title = 'Sucursal'
    data = Reference(ws_chart2, min_col=2, min_row=1, max_row=len(value_by_location)+1)
    cats = Reference(ws_chart2, min_col=1, min_row=2, max_row=len(value_by_location)+1)
    bar.add_data(data, titles_from_data=True)
    bar.set_categories(cats)
    
    ws_dashboard.add_chart(bar, 'F10')
```

- [ ] **Step 3: Llamar a la función en create_excel_dashboard**

Después de crear `ws_dashboard`, agregar:

```python
    # Agregar gráficos
    add_dashboard_charts(ws_dashboard, df_equipment)
```

- [ ] **Step 4: Ejecutar y verificar**

```bash
python scripts/excel_builder.py
```

Expected: Dashboard con gráficos visibles

- [ ] **Step 5: Commit**

```bash
git add scripts/excel_builder.py
git commit -m "feat: add pie and bar charts to dashboard visualization"
```

---

### Task 8: Crear script orquestador principal

**Archivos:**
- Crear: `scripts/build_dashboard.py` (principal)

- [ ] **Step 1: Crear script que ejecuta todo el flujo**

```python
#!/usr/bin/env python
"""
Script principal para construir el dashboard de parque informático.
Orquesta: lectura → búsqueda de precios → enriquecimiento → generación Excel.
"""

import sys
import os
from pathlib import Path

# Agregar directorio de scripts al path
sys.path.insert(0, str(Path(__file__).parent))

from data_processor import read_inventory_file, normalize_equipment_data
from mercadolibre_scraper import batch_search_prices
from data_enricher import enrich_equipment_prices, assign_default_prices
from excel_builder import create_excel_dashboard
import pandas as pd

def main():
    print("=" * 60)
    print("GENERADOR DE DASHBOARD - PARQUE INFORMÁTICO")
    print("=" * 60)
    
    # Paso 1: Leer inventario
    print("\n[1/5] Leyendo inventario actual...")
    file_path = r'C:\Users\diego.robalo\Downloads\1. Formulario INVENTARIO para auditar.xlsx'
    
    if not Path(file_path).exists():
        print(f"ERROR: Archivo no encontrado: {file_path}")
        sys.exit(1)
    
    sheets = read_inventory_file(file_path)
    df_equipment = normalize_equipment_data(sheets)
    print(f"✓ {len(df_equipment)} equipos leídos")
    print(f"  Sin precio: {df_equipment['valor_usd'].isna().sum()}")
    
    # Paso 2: Buscar precios
    print("\n[2/5] Buscando precios en MercadoLibre.com.ar...")
    search_results = batch_search_prices(df_equipment, max_searches=100)
    df_search_results = pd.DataFrame(search_results) if search_results else pd.DataFrame()
    print(f"✓ Precios encontrados: {len(df_search_results)}")
    
    # Paso 3: Enriquecer datos
    print("\n[3/5] Enriqueciendo datos con precios encontrados...")
    if len(df_search_results) > 0:
        df_enriched, _ = enrich_equipment_prices(df_equipment, df_search_results)
    else:
        df_enriched = df_equipment
    
    print(f"✓ Datos enriquecidos")
    print(f"  Sin precio aún: {df_enriched['valor_usd'].isna().sum()}")
    
    # Paso 4: Asignar precios por defecto
    print("\n[4/5] Asignando precios por defecto para equipos sin búsqueda...")
    df_final = assign_default_prices(df_enriched)
    print(f"✓ Todos los equipos tienen precio")
    print(f"  Valor total: ${df_final['valor_usd'].sum():.2f} USD")
    
    # Paso 5: Generar Excel
    print("\n[5/5] Generando archivo Excel con dashboard...")
    os.makedirs('output', exist_ok=True)
    
    wb = create_excel_dashboard(df_final, df_search_results)
    output_path = 'output/Parque_Informatico_Dashboard_2026-06-03.xlsx'
    wb.save(output_path)
    
    print(f"✓ Dashboard creado: {output_path}")
    
    # Estadísticas finales
    print("\n" + "=" * 60)
    print("RESUMEN DEL PARQUE INFORMÁTICO")
    print("=" * 60)
    print(f"Total de equipos: {len(df_final)}")
    print(f"Valor total USD: ${df_final['valor_usd'].sum():.2f}")
    print(f"Valor promedio por equipo: ${df_final['valor_usd'].mean():.2f}")
    print(f"Equipos por sucursal:")
    for loc, count in df_final['localidad'].value_counts().items():
        valor = df_final[df_final['localidad'] == loc]['valor_usd'].sum()
        print(f"  - {loc}: {count} equipos (${valor:.2f})")
    
    print("\n✓ PROCESO COMPLETADO EXITOSAMENTE")

if __name__ == '__main__':
    main()
```

- [ ] **Step 2: Hacer ejecutable en Windows**

```bash
python scripts/build_dashboard.py
```

Expected: Resumen completo y archivo generado

- [ ] **Step 3: Commit**

```bash
git add scripts/build_dashboard.py
git commit -m "feat: add main orchestrator script for complete dashboard generation"
```

---

### Task 9: Validación final y limpieza

**Archivos:**
- Validar: `output/Parque_Informatico_Dashboard_2026-06-03.xlsx`

- [ ] **Step 1: Abrir archivo Excel y validar estructura**

Verificar manualmente:
- ✓ Pestaña "Dashboard" visible con KPIs y gráficos
- ✓ Pestaña "Inventario Consolidado" con todos los datos
- ✓ Pestañas de sucursales: Victoria, Linera, Fabril, San Rafael, Chivilcoy, Robles
- ✓ Pestaña "Precios Buscados" con URLs
- ✓ Todos los valores en USD
- ✓ Gráficos renderizados correctamente

- [ ] **Step 2: Validar datos en Excel**

- Verificar que no haya #REF!, #DIV/0!, #VALUE! u otros errores
- Confirmar que suma total de valores = suma en Dashboard
- Revisar que no haya datos duplicados

- [ ] **Step 3: Copiar archivo a ubicación accesible**

```bash
copy output\Parque_Informatico_Dashboard_2026-06-03.xlsx "C:\Users\diego.robalo\Documents\CLAUDIA\Parque_Informatico_Dashboard_2026-06-03.xlsx"
```

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "docs: add dashboard output and validation checklist"
```

---

## Ejecución

Plan completado. **Dos opciones de ejecución:**

1. **Subagent-Driven** (recomendado): Ejecuta cada task en subagent separado, review entre tasks
2. **Inline**: Ejecuta tasks en esta sesión con checkpoints

¿Cuál prefieres?

