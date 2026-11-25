# Instrucciones para asistentes de IA

Este archivo explica a cualquier asistente de IA (Claude, ChatGPT/Codex, Copilot, Gemini,
Cursor…) cómo está hecha esta web y cómo actualizarla sin romperla. Léelo entero antes de
hacer cambios.

## Qué es este proyecto

Web del **Ciclo de Seminarios TRANSyT**, del Centro de Investigación del Transporte de la
Universidad Politécnica de Madrid.

- URL pública: https://seminariostransyt.github.io
- Repositorio: `seminariostransyt/seminariostransyt.github.io`
- Publicación: GitHub Pages desde la rama `main`, carpeta raíz. Cada commit a `main` se
  publica en 1–2 minutos. **No hay paso de compilación.**
- Idioma de la web: **español**. Todo el texto visible debe estar en español.

## Archivos

| Archivo | Qué contiene | Cuándo tocarlo |
|---------|--------------|----------------|
| `seminarios.js` | Lista `SEMINARIOS` y constantes `DURACION_MIN`, `LUGAR_POR_DEFECTO`, `ENLACE_ONLINE` | **Casi todas las actualizaciones**: añadir, editar o anular seminarios; poner enlaces |
| `index.html` | Textos de la página y el script que pinta las tablas y el panel de propuestas | Cambiar textos de "Sobre el ciclo", "Formato" o "Contactar para próximos seminarios" |
| `style.css` | Diseño y colores (variables en `:root`) | Cambios visuales |
| `iconos.js` | Objeto `ICONOS` con trazos SVG (estilo Lucide) y función `ico()` | Añadir un icono nuevo |
| `README.md` | Guía para personas | Actualizarlo si cambia cómo se edita la web |
| `AGENTS.md` | Este archivo | Actualizarlo si cambian las reglas o la estructura |

## Tarea más habitual: añadir o editar un seminario

Edita **solo** `seminarios.js`, dentro del array `SEMINARIOS`. La página ordena por fecha y
separa sola en "Próximos seminarios" (fecha ≥ hoy) y "Seminarios anteriores". No muevas
bloques de sitio ni crees listas separadas.

```js
{
  fecha: "2027-02-11",          // obligatorio, "AAAA-MM-DD"
  hora: "12:00",                // opcional, "HH:MM" hora de Madrid; si falta: "hora por confirmar"
  titulo: "Título",             // obligatorio
  ponente: "Nombre Apellido",   // obligatorio; varios ponentes: "Nombre A, Nombre B"
  afiliacion: "Universidad",    // opcional
  web: "https://...",           // opcional, web del ponente
  resumen: "Abstract breve.",   // opcional, texto plano
  lugar: "…",                   // opcional, solo si NO es la Biblioteca TRANSyT
  online: "https://...",        // opcional, solo si difiere de ENLACE_ONLINE
  presentacion: "https://...",  // opcional, enlace de SharePoint a las diapositivas
  estado: "aplazado",           // opcional: "aplazado" o "cancelado"
},
```

Reglas para los datos:

- Usa exactamente estos nombres de campo, sin tildes. Un campo con otro nombre se ignora.
- Las fechas siempre en formato `"AAAA-MM-DD"` y las horas en `"HH:MM"` (24 h).
- No inventes datos. Si falta la hora, omite `hora`. Si falta la afiliación, omite `afiliacion`.
- Los textos son texto plano: la página escapa el HTML, así que no metas etiquetas.
- Cuida las comas entre bloques y las comillas: un error de sintaxis deja la página sin
  tablas.
- Los bloques marcados como `EJEMPLOS` son de relleno. Al añadir los primeros seminarios
  reales, elimina los ejemplos y el comentario que los marca.
- Para un seminario aplazado o cancelado, añade `estado` en vez de borrarlo.

## Decisiones ya tomadas (no las cambies sin que te lo pidan)

- **Diapositivas:** se guardan en SharePoint. El campo `presentacion` lleva el enlace de
  SharePoint. No se suben PDFs al repositorio y no hay carpeta `presentaciones/`.
- **Sin vídeos:** no se guardan grabaciones. No añadas un campo ni un botón de vídeo.
- **Sin etiquetas de tipo de sesión:** el ciclo combina ponentes invitados y trabajo en curso,
  pero los seminarios **no** se marcan como "invitado" / "trabajo en curso".
- **Dos tablas:** "Próximos seminarios" y "Seminarios anteriores". Mantenlas.
- **Sin sección "Contacto":** se eliminó. El único contacto es la sección
  "Contactar para próximos seminarios" (`#proponer`).
- **Correo de contacto:** `daniela.castanoh@upm.es`. Está en `index.html`: en el texto de
  `#proponer` y en la constante `CORREO` del script del panel.
- **Panel "Proponer un seminario":** muestra el correo con botón Copiar y solo dos opciones,
  **Outlook (escritorio)** (`mailto:`) y **Webmail UPM**
  (`https://www.upm.es/webmail_personal/`, Roundcube). No añadas Gmail ni Outlook web.
- **Formato:** 30 min de presentación + 20 de debate (`DURACION_MIN = 50`). Lugar: Biblioteca
  TRANSyT y online. Horario variable según el seminario.
- **Enlace de la llamada online:** se pone una sola vez en `ENLACE_ONLINE`. Mientras esté
  vacío, el botón "Unirse online" no aparece.

## Reglas técnicas

- Web estática: HTML, CSS y JavaScript sin frameworks, sin dependencias externas, sin CDNs,
  sin paso de compilación ni Jekyll. Mantenlo así.
- Los scripts se cargan en este orden al final de `index.html`: `seminarios.js`,
  `iconos.js`, script en línea. No cambies el orden.
- Iconos: en HTML estático usa `<span data-i="nombre"></span>`; en el JavaScript usa
  `ico("nombre")`. Para un icono nuevo, añade sus trazos SVG (viewBox 24×24, sin `<svg>`
  exterior) al objeto `ICONOS` de `iconos.js`.
- Colores: usa las variables CSS de `:root` (`--azul`, `--azul-medio`, `--azul-claro`,
  `--texto`, `--gris`, `--borde`) en vez de colores sueltos.
- Todo lo que venga de `seminarios.js` y se inserte en HTML debe pasar por la función `esc()`.
- El diseño debe seguir funcionando en móvil (hay una regla `@media (max-width: 640px)`).

## Cómo comprobar los cambios

1. Comprueba que `seminarios.js` es JavaScript válido, por ejemplo con `node --check seminarios.js`.
2. Abre `index.html` en un navegador, o con un navegador sin interfaz como Playwright, y
   verifica que:
   - no hay errores en la consola;
   - las dos tablas muestran los seminarios esperados en el orden correcto;
   - los enlaces nuevos (diapositivas, web del ponente) apuntan a donde deben.
3. Si cambias el panel de propuestas, pulsa "Proponer un seminario" y revisa los enlaces
   generados.

## Commits

- Haz commits pequeños en `main` con mensajes en español que digan qué cambió, por ejemplo:
  `Añadir seminario de 11 de febrero (Nombre Apellido)`.
- Si cambias cómo se edita la web, actualiza también `README.md` y este archivo.
- Ante una petición ambigua (por ejemplo, datos incompletos de un seminario), pregunta a la
  persona antes de inventar nada.
