# Portfolio — Adrià Carretero

Mesa de trabajo interactiva: dosieres arrastrables, hojeables, con los manuales de marca en PDF renderizados página a página.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (público).
2. Sube **todo el contenido de esta carpeta** a la raíz del repo (arrastrar y soltar en la web de GitHub funciona).
3. En el repo: **Settings → Pages**.
4. En *Source* elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`. Guarda.
5. En 1–2 minutos la web estará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Estructura

- `index.html` — la web (copia de `Portfolio Mesa v2.dc.html`)
- `support.js` — runtime necesario
- `uploads/` — imágenes, vídeo y PDFs de los proyectos
- `publica/pclub-manual.pdf` — manual de P.Club que se hojea en el dosier 01
- `.nojekyll` — evita que GitHub procese los archivos

## Notas

- Requiere conexión a internet la primera carga (tipografías de Google y las librerías de hojeo/PDF vienen de CDN).
- Si editas `Portfolio Mesa v2.dc.html`, vuelve a copiarlo sobre `index.html` antes de subir.
