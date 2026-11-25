# Ciclo de Seminarios TRANSyT

Web del Ciclo de Seminarios del Centro de Investigación del Transporte (TRANSyT) de la
Universidad Politécnica de Madrid.

🌐 **https://seminariostransyt.github.io**

La página es HTML estático publicado con GitHub Pages desde la rama `main`. No necesita
instalar nada: cada cambio que se guarda en el repositorio aparece en la web en 1–2 minutos.

---

## Enviar cambios con la plantilla

En [`PLANTILLA.md`](PLANTILLA.md) hay un bloque para cada tipo de cambio: nuevo seminario,
cambiar datos, añadir diapositivas, aplazar o cancelar, y enlace online. Rellénalo y envíalo a
quien mantenga la web o a un asistente de IA. Los asistentes saben interpretarlo gracias a
`AGENTS.md`.

## Añadir o editar un seminario

Todos los seminarios están en **`seminarios.js`**. La página los ordena por fecha, muestra el siguiente en el
cartel de la cabecera y los coloca sola en **Próximos seminarios** o **Seminarios anteriores**, así que no hace falta
moverlos cuando pasa la fecha.

1. Abre `seminarios.js` en GitHub y pulsa el lápiz ✏️ para editar.
2. Copia un bloque `{ ... },` dentro de la lista `SEMINARIOS` y cambia los datos.
3. Pulsa **Commit changes**.

Ejemplo:

```js
{
  fecha: "2027-02-11",
  hora: "12:00",
  titulo: "Título de la presentación",
  ponente: "Nombre Apellido",
  afiliacion: "Universidad",
  web: "https://web-del-ponente.com",
  resumen: "Breve resumen de la charla.",
},
```

| Campo          | Obligatorio | Descripción |
|----------------|:-----------:|-------------|
| `fecha`        | Sí | Formato `"AAAA-MM-DD"` |
| `titulo`       | Sí | Título de la presentación |
| `ponente`      | Sí | Nombre del ponente |
| `hora`         | No | `"HH:MM"`, hora de Madrid. Si falta, aparece "hora por confirmar" |
| `afiliacion`   | No | Universidad o centro |
| `web`          | No | Enlace a la web del ponente (su nombre se vuelve un enlace) |
| `resumen`      | No | Se despliega al pulsar el título |
| `lugar`        | No | Solo si es distinto de la Biblioteca TRANSyT |
| `online`       | No | Solo si ese seminario usa un enlace distinto del general |
| `presentacion` | No | Enlace de SharePoint a las diapositivas |
| `estado`       | No | `"aplazado"` o `"cancelado"` (el título aparece tachado) |

## Añadir al calendario

En los próximos seminarios, el botón **Añadir al calendario** (en el cartel) y **Calendario (.ics)**
(en la tabla) descargan un archivo `.ics` que se abre con Outlook, Google Calendar o el
calendario de Apple. Se genera solo con los datos de `seminarios.js`: fecha, hora, 50 minutos de
duración, lugar, ponente, resumen y enlace online.

## Enlace de la llamada online

Al principio de `seminarios.js`:

```js
const ENLACE_ONLINE = "";
```

Pon ahí el enlace de la llamada una sola vez y el botón **Unirse online** aparecerá en
todos los próximos seminarios. Mientras esté vacío, el botón no se muestra.

## Diapositivas

Las presentaciones se guardan en SharePoint. Copia el enlace para compartir del archivo
y añádelo al seminario:

```js
presentacion: "https://...sharepoint.com/...",
```

En **Seminarios anteriores** aparecerá el botón **Diapositivas** con ese enlace.
Comprueba que el enlace de SharePoint permite el acceso a quien quieras que lo vea.

## Qué hay en cada archivo

| Archivo | Contenido |
|---------|-----------|
| `index.html`      | Textos de la página: descripción del ciclo, formato y propuestas de seminarios |
| `seminarios.js`   | Lista de seminarios, lugar por defecto y enlace de la llamada online |
| `style.css`       | Colores y diseño |
| `AGENTS.md`       | Instrucciones para asistentes de IA (Claude, ChatGPT, Copilot, Gemini…) |
| `fuentes/`        | Tipografía Figtree (licencia libre SIL OFL) |
| `img/`            | Logos de TRANSyT y favicon |
| `iconos.js`       | Iconos de la página (trazos basados en [Lucide](https://lucide.dev), licencia ISC) |

## Datos actuales del ciclo

- **Formato:** 30 minutos de presentación + 20 de debate
- **Lugar:** Biblioteca TRANSyT (ETSI Caminos, Canales y Puertos) y online
- **Horario:** según el seminario
- **Propuestas de seminarios:** daniela.castanoh@upm.es

Para cambiar estos textos, edita `index.html`. El lugar que aparece en el calendario se
cambia en `LUGAR_POR_DEFECTO` y la duración en `DURACION_MIN`, ambos en `seminarios.js`.

## Si un cambio no se ve

- Recarga la página sin caché con **Ctrl+F5**.
- En la pestaña **Actions** del repositorio, comprueba que la publicación
  *pages build and deployment* terminó con ✔ verde.
