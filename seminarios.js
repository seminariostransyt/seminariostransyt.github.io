// =====================================================================
//  LISTA DE SEMINARIOS
//  Para añadir uno nuevo, copia un bloque { ... } y cambia los datos.
//  La página los ordena sola y los separa en "Próximos" y "Anteriores"
//  según la fecha, así que no hace falta moverlos de sitio.
//
//  Campos:
//    fecha        "AAAA-MM-DD"                (obligatorio)
//    hora         "HH:MM"  (hora de Madrid)   (opcional; si falta aparece "hora por confirmar")
//    titulo       texto                       (obligatorio)
//    ponente      nombre                      (obligatorio)
//    web          enlace a la web del ponente (opcional)
//    afiliacion   institución                 (opcional)
//    resumen      abstract breve              (opcional; se despliega al pulsar)
//    lugar        sala / online               (opcional; si falta se usa LUGAR_POR_DEFECTO)
//    online       enlace de la llamada        (opcional; si falta se usa ENLACE_ONLINE)
//    presentacion ruta o enlace al PDF        (opcional; p. ej. "presentaciones/2026-12-10.pdf")
//    video        enlace a la grabación       (opcional)
//    estado       "aplazado" o "cancelado"    (opcional)
// =====================================================================

const DURACION_MIN = 50;   // 30 min de presentación + 20 de debate
const LUGAR_POR_DEFECTO = "Biblioteca TRANSyT · ETSI Caminos, Canales y Puertos (UPM)";

// Enlace de la llamada online. Ponlo aquí una vez y saldrá en todos los
// próximos seminarios. Mientras esté vacío, el botón "Unirse online" no aparece.
const ENLACE_ONLINE = "";

const SEMINARIOS = [
  // ---- EJEMPLOS: sustitúyelos por los seminarios reales ----
  {
    fecha: "2026-12-10",
    titulo: "Título de ejemplo de un seminario próximo",
    ponente: "Nombre Apellido",
    afiliacion: "Universidad de ejemplo",
    web: "",
    hora: "12:00",
    resumen: "Breve resumen de la charla. Aparece desplegable al pulsar sobre el título.",
  },
  {
    fecha: "2027-01-21",
    titulo: "Otro seminario próximo de ejemplo",
    ponente: "Nombre Apellido",
    afiliacion: "TRANSyT-UPM",
  },
  {
    fecha: "2026-10-15",
    titulo: "Seminario pasado de ejemplo",
    ponente: "Nombre Apellido",
    hora: "16:00",
    afiliacion: "Centro de investigación de ejemplo",
    presentacion: "#",
    video: "#",
  },
  {
    fecha: "2026-09-24",
    titulo: "Seminario aplazado de ejemplo",
    ponente: "Nombre Apellido",
    afiliacion: "TRANSyT-UPM",
    estado: "aplazado",
  },
];
