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
| `index.html` | Textos de la página y el script que pinta el cartel, las tablas y el panel de propuestas | Cambiar textos de "Sobre el ciclo", "Formato" o "Contactar para próximos seminarios" |
| `style.css` | Diseño y colores (variables en `:root`) | Cambios visuales |
| `iconos.js` | Objeto `ICONOS` con trazos SVG (estilo Lucide) y función `ico()` | Añadir un icono nuevo |
| `fuentes/` | Archivos `.woff2` de la tipografía Figtree y su licencia (`OFL.txt`) | Solo si cambia la tipografía |
| `img/` | Logos de TRANSyT (`transyt-circulo.png` en la cabecera, `transyt-logo.png` en el pie), `favicon.png` / `apple-touch-icon.png` y el icono `orcid.svg` | Solo si cambia el logo oficial |
| `PLANTILLA.md` | Plantilla con la que el equipo envía los cambios (nuevo seminario, cambios, diapositivas, aplazar/cancelar, enlace online) | Si cambian los campos de un seminario |
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
  orcid: "0000-0002-1825-0097", // opcional, ORCID del ponente (vale el número o la URL)
  resumen: "Abstract breve.",   // opcional, texto plano
  lugar: "…",                   // opcional, solo si NO es la Biblioteca TRANSyT
  online: "https://...",        // opcional, solo si difiere de ENLACE_ONLINE
  presentacion: "https://...",  // opcional, enlace de SharePoint a las diapositivas
  estado: "aplazado",           // opcional: "aplazado" o "cancelado"
},
```

### El cartel de la cabecera (panel negro)

El panel negro "Próximo seminario" (`#cartel`) **se actualiza solo**: `pintarCartel()` muestra
el seminario con la fecha más cercana igual o posterior a hoy. No lo edites a mano en
`index.html`; para cambiar lo que muestra, cambia los datos en `seminarios.js`.

- El día del seminario sigue en el cartel; al día siguiente pasa a "Seminarios anteriores" y el
  cartel muestra el siguiente.
- El orden de los bloques en `SEMINARIOS` no importa: se ordenan por fecha.
- Si el más cercano está aplazado o cancelado, el cartel lo muestra igualmente con su etiqueta
  y sin botones (decisión tomada: no saltarlo).
- Si no hay ninguno próximo, muestra "Fecha por anunciar" y un enlace a proponer un seminario.
- Después de cada cambio en los seminarios, comprueba que el cartel muestra el seminario y los
  datos (fecha, hora, título, ponente, ORCID, afiliación, lugar) esperados.

### Peticiones con la plantilla

El equipo envía los cambios con los bloques de `PLANTILLA.md`. Tradúcelos así:

| Bloque | Qué hacer en `seminarios.js` |
|--------|------------------------------|
| `NUEVO SEMINARIO` | Añadir un objeto. `Fecha` DD/MM/AAAA → `fecha` "AAAA-MM-DD"; `Hora` → `hora` (si pone "por confirmar", omitir); `Título` → `titulo`; `Ponente(s)` → `ponente`; `Afiliación` → `afiliacion`; `Web del ponente` → `web`; `ORCID` → `orcid`; `Resumen` → `resumen`; `Lugar` → `lugar`; `Enlace online` → `online`. Los campos vacíos se omiten. |
| `CAMBIAR SEMINARIO` | Localizar el seminario por fecha y ponente y cambiar solo los campos indicados. |
| `DIAPOSITIVAS` | Añadir `presentacion` con el enlace de SharePoint al seminario indicado. |
| `APLAZAR / CANCELAR` | Añadir `estado`. Si trae `Nueva fecha`, cambiar `fecha` y quitar `estado`. |
| `ENLACE ONLINE` | Poner el enlace en la constante `ENLACE_ONLINE`. |

Si no encuentras el seminario al que se refiere un bloque, o falta un campo obligatorio
(fecha, título o ponente), pregunta en vez de suponer.

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
- **Correos de contacto:** `daniela.castanoh@upm.es` y `dp.vnaranjo@upm.es`. Están en
  `index.html`: en el texto de `#proponer` y en la lista `CORREOS` del script del panel. Los
  mensajes preparados van a los dos a la vez y cada dirección tiene su botón Copiar. Para
  añadir o quitar un destinatario, cambia el texto y la lista `CORREOS`.
- **Panel "Proponer un seminario":** muestra los correos con botón Copiar y solo dos opciones,
  **Outlook o app de correo** (`mailto:`: abre Outlook en el ordenador y la app de correo en
  el móvil) y **Webmail UPM**
  (`https://www.upm.es/webmail_personal/`, Roundcube). No añadas Gmail ni Outlook web.
- **Formato:** 30 min de presentación + 20 de debate (`DURACION_MIN = 50`) y, al terminar, un café
  (no cuenta en la duración del calendario). Lugar: Biblioteca TRANSyT y
  online. Horario variable según el seminario.
- **Diseño (concepto "señalética de transporte"):** cabecera azul lisa (sin degradados) con
  el logo, el título y el **cartel del próximo seminario** (`#cartel`, panel oscuro con la
  flecha del logo). El cartel lo rellena `pintarCartel()` con el primer seminario próximo; si
  no hay ninguno muestra "Fecha por anunciar". El resto de la página es sobrio: menú blanco
  fijo, bloque "Cómo son nuestros seminarios", tablas con líneas finas y franja azul claro
  para las propuestas. Los pictogramas van en baldosas cuadradas (`.baldosa`). No añadas
  etiquetas en mayúsculas, degradados ni tarjetas decorativas.
- **"Sobre el ciclo":** una introducción de una frase y dos bloques (`.tipo`) que explican los
  dos tipos de sesión: "Investigadores invitados" (icono `mundo`) e "Investigación en
  desarrollo" (icono `matraz`). Mantén los textos breves.
- **"Cómo son nuestros seminarios"** (`.sesion`): línea de tiempo con tres tramos de ancho
  proporcional (`grid-template-columns: 30fr 20fr 16fr`): 30 min de presentación científica,
  20 min de debate abierto y café (intercambio informal); debajo, lugar y horario. Si cambia la
  duración, cambia también las proporciones y `DURACION_MIN`. Los bloques `.tipo` y `.sesion`
  son los únicos con borde de la página.
- **Colores:** salen del logo. `--azul-medio` (#008BD2, azul TRANSyT) para baldosas y acentos;
  `--azul` (#005A8F) para cabecera, enlaces y botones; `--texto` (#1D1D1B, negro del
  logotipo) para texto y cartel; `--azul-claro` (#E9F3FA) para fondos suaves. No uses
  `--azul-medio` para texto sobre blanco: no tiene contraste suficiente.
- **Logos:** el logo circular de TRANSyT va en la cabecera (con aro blanco) y como favicon; el
  logo completo con texto va en el pie. Son los logos oficiales: no los recolorees ni deformes.
- **Tipografía:** Figtree (licencia SIL OFL), alojada en `fuentes/` en tres grosores: 400, 600 y
  700. Se declara con `@font-face` al principio de `style.css`. No la cargues desde Google Fonts
  ni otro CDN. Si hace falta otro grosor, añade su `.woff2` a `fuentes/` y su `@font-face`.
- **Añadir al calendario:** descarga un archivo `.ics` generado en el navegador por
  `archivoICS()` (zona horaria Europe/Madrid, duración `DURACION_MIN`; si no hay hora, evento
  de día completo). Funciona con Outlook, Google Calendar y Apple. No lo cambies por un enlace
  de Google Calendar.
- **ORCID:** si un seminario tiene `orcid`, junto al nombre del ponente (en el cartel y en las
  tablas) aparece el icono oficial de ORCID (`img/orcid.svg`, verde #A6CE39, sin recolorear)
  enlazado a `https://orcid.org/<id>`. Lo genera `enlaceOrcid()`; si el identificador no es
  válido, no se muestra nada. El ORCID del seminario de ejemplo es el de prueba oficial de ORCID.
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
   - el cartel de la cabecera muestra el próximo seminario;
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
