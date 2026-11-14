# Examen final — Aseguramiento de la Calidad (Buggy Cars Rating)

Sitio probado: https://buggy.justtestit.org/

## Contenido
- 3 pruebas automatizadas con Playwright + TypeScript (carpeta `tests/`)
- 2 casos manuales con capturas en `evidencias/`
- Tabla de casos de prueba y reporte de defectos en `reportes/`

## Requisitos
- Node.js 22 o superior (probado con v24.19.0)
- npm 11

## Instalación
```bash
npm install
npx playwright install chromium
```

## Ejecución
```bash
npx playwright test                    # las 3 pruebas
npx playwright test --headed           # viendo el navegador
npx playwright show-report             # reporte HTML
```

## Navegador utilizado
Chromium (Playwright). Pruebas manuales en Google Chrome.

## Estructura
```
tests/            pruebas automatizadas (HU-1, HU-2, HU-3)
pages/            Page Objects (RegisterPage, LoginPage, ModelPage)
test-data/        datos de prueba (login único por corrida)
reportes/         Casos_de_Prueba_Examen_Final.xlsx y Reporte_de_Defectos_Examen_Final.docx
evidencias/       capturas de los casos manuales

```

## Notas
Cada corrida crea un usuario con login único, porque el sitio es público y compartido.

## Carpeta de Drive con los entregables
https://drive.google.com/drive/folders/1DWTgaxM64FPoX3KQ5sig4mzDMBB65FeE?usp=sharing
