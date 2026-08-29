# Handoff: Portfolio "Mesa de trabajo" — Adrià Carretero

## Overview
Portfolio interactivo con metáfora de mesa de trabajo: seis dosieres (carpetas físicas) arrastrables sobre una mesa, cada uno con páginas que se pasan con animación 3D (flip). Incluye una página separada de formulario de encargo. Objetivo: presentar los proyectos de Adrià Carretero (branding, editorial, motion, producto digital) y captar encargos.

## About the Design Files
Los archivos de este paquete son **referencias de diseño creadas en HTML** — prototipos que muestran el aspecto y comportamiento previstos, no código de producción para copiar tal cual. La tarea es **recrear estos diseños en el entorno del codebase de destino** (React, Vue, Astro, etc.) usando sus patrones y librerías. Si aún no existe un entorno, elige el framework más apropiado (p. ej. React + Vite para una SPA estática de portfolio) e impleméntalos ahí.

Los `.dc.html` usan un runtime propietario (`support.js`): la plantilla vive dentro de `<x-dc>` con huecos `{{ path }}` y la lógica en una clase `Component` (similar a un class component de React) dentro del `<script data-dc-script>` al final del archivo. Léelos como especificación: el markup con estilos inline ES el diseño final; la clase contiene el estado y los handlers.

## Fidelity
**Alta fidelidad (hifi).** Colores, tipografía, espaciados, sombras y microinteracciones son finales. Recrear píxel a píxel.

## Screens / Views

### 1. Mesa de trabajo (`Portfolio Mesa.dc.html`)
- **Propósito**: hub principal. El usuario arrastra dosieres, pasa sus páginas y los maximiza.
- **Layout**: contenedor 100vw × 100vh (min-height 820px), overflow hidden, fondo `#1c3350` + imagen `uploads/Untitled.png` (cover, centrada). Elementos posicionados de forma absoluta.
- **Elementos fijos**:
  - Tira de título centrada arriba (papel `#f7f3e8`, rotate(-1deg), cinta adhesiva en las esquinas): "Adrià Carretero / mesa de trabajo".
  - Nota de ayuda arriba-izquierda (papel `#fbf7ea`, rotate(-3deg), fuente Caveat 20px).
  - Etiqueta "Ordenar/Desordenar" arriba-derecha (toggle que anima los dosieres a una cuadrícula ordenada o a posiciones dispersas).
- **Dosieres (6)**: 300 × 390 px, rotación aleatoria leve, carpeta de color con pestaña superior, hoja interior `#f7f3e8` con inset 10px. Cada uno: portada, páginas interiores (flip 3D `rotateY`, 0.7s `cubic-bezier(0.35,0.9,0.3,1)`, `transform-style:preserve-3d`, `backface-visibility:hidden`), esquinas inferiores como triángulos para pasar página (der: siguiente, izq: anterior), icono ⤢ para maximizar (scale + centrado).
  - 01 Priority Club — branding streetwear Y2K (carpeta `#c99f68`)
  - 02 Severance — rediseño de cartel, Estilo Tipográfico Internacional (`#bfa06f`)
  - 03 Solell Jewelry — contenido Instagram (`#c49f6a`)
  - 04 OCTANE — editorial brutalista (`#ab8f62`)
  - 05 Cafetería — identidad (`#6f81a9`)
  - 06 Ficha personal — habilidades, herramientas, disponibilidad + botón "Abrir formulario →" que enlaza a la página del formulario (`#a3777d`)
- **Interacción drag**: pointerdown captura el dosier (sube z-index, cursor grab), pointermove lo arrastra, pointerup lo suelta. `touch-action:none` y `user-select:none` en el contenedor.

### 2. Formulario de encargo (`Formulario Encargo.dc.html`)
- **Propósito**: captar encargos; abre el correo del visitante con el mensaje redactado (mailto).
- **Layout**: misma mesa de fondo, hoja de papel centrada 460px (rotate(-0.8deg), papel `#f7f3e8`, sombra `0 24px 60px rgba(0,0,0,0.45)`, cinta superior), enlace "← Volver a la mesa" arriba-izquierda.
- **Campos**: nombre, email (fila de 2), select tipo de proyecto (Branding / Editorial-cartel / Motion / Producto digital / Otro), textarea mensaje (5 filas), botón "Enviar →" (`#1e2733`, hover más claro), hint de estado.
- **Comportamiento enviar**: construye `mailto:adria.carreteromunoz@gmail.com` con subject `Encargo · {tipo} — {nombre}` y body con el mensaje; después muestra hint "Se ha abierto tu correo…".
- **Props tweakables** (implementar como props/config): `accentColor` (#1e2733 def.), `paperTilt` (-0.8deg), `bgFit` (cover/contain/estirado), `showAvailability` (bool).

## Interactions & Behavior
- Drag & drop de dosieres (pointer events, sin librerías).
- Paso de página: flip 3D 0.7s `cubic-bezier(0.35,0.9,0.3,1)` sobre `rotateY`, origen `left center`.
- Maximizar: el dosier escala y se centra; segundo clic restaura.
- Ordenar/Desordenar: transición animada de posiciones/rotaciones.
- Hover en flechas de página: `scale(1.1)`; en maximizar: `scale(1.15)`.
- Formulario: envío por `mailto:`; sin backend.

## State Management
- Por dosier: `x, y, z (z-index), r (rotación), s (escala), flipA/flipB (grados de giro de cada hoja), página actual, maximizado`.
- Global: `tidy` (ordenado/disperso), contador global de z-index para traer al frente.
- Formulario: refs de inputs + flag `sent`.

## Design Tokens
- **Fondo mesa**: `#1c3350` + foto de mesa (`uploads/Untitled.png`)
- **Papel**: `#f7f3e8` (hoja), `#f3eedf` (dorso), `#fbf7ea` (notas), `#fffdf6` (inputs)
- **Tinta**: `#1e2733` (titulares), `#3a4250` (cuerpo), `#31435c` (azul tinta), `#5c6572` (secundario)
- **Ocre/metadata**: `#8a7c5e`, `#a89a78`; bordes `#ddd3ba`, `#cbbf9e`, barras `#e6dcc3`
- **Carpetas**: `#c99f68 #bfa06f #c49f6a #ab8f62 #6f81a9 #a3777d` (dorsos ~8% más oscuros)
- **Acento disponible**: `#5d9e6d` · Selección: `oklch(65% 0.13 75)`
- **Tipografía**: sistema (-apple-system / Helvetica Neue); Caveat 500-700 (Google Fonts) para anotaciones manuscritas; ui-monospace/'SF Mono' 9.5-10px letter-spacing 0.14em para etiquetas KICKER.
- **Titulares**: 800, uppercase, letter-spacing -0.02em, 32-42px, line-height 0.92-1.
- **Sombras**: dosier `0 18px 40px rgba(0,0,0,0.4)`; hoja volteada `-14px 18px 40px rgba(0,0,0,0.35)`; papeles `0 10px 24px rgba(0,0,0,0.35)`.
- **Radios**: carpetas 5px, hojas 2px, inputs/botones 3px.

## Assets
Todo en `uploads/` (imágenes de proyectos del autor, foto de mesa, mockups, vídeo de logo). `bcn-app/` contiene un prototipo de app iOS (componentes React + CSS exportados de Figma) que se muestra dentro del dosier de producto digital. Dos archivos fueron renombrados sin acentos para portabilidad: `Ilustracion_sin_titulo.webp`, `Sin titulo-2_page-0001.webp` (las rutas del HTML ya están actualizadas).

## Files
- `Portfolio Mesa.dc.html` — mesa de trabajo (pantalla principal)
- `Formulario Encargo.dc.html` — formulario de encargo
- `support.js` — runtime de los .dc.html (solo para abrir los prototipos en un navegador)
- `bcn-app/` — componentes del prototipo de app iOS + CSS de Figma
- `uploads/` — imágenes y vídeo usados por el diseño
