// =====================================================================
//  LISTA DE SEMINARIOS
//  Para añadir uno nuevo, copia un bloque { ... } y cambia los datos.
//  La página los ordena sola y los separa en "Próximos" y "Anteriores"
//  según la fecha, así que no hace falta moverlos de sitio.
//
//  Campos:
//    fecha        "AAAA-MM-DD"                (obligatorio)
//    hora         "HH:MM"  (hora de Madrid)   (opcional; si falta se usa HORA_POR_DEFECTO)
//    titulo       texto                       (obligatorio)
//    ponente      nombre                      (obligatorio)
//    web          enlace a la web del ponente (opcional)
//    afiliacion   institución                 (opcional)
//    resumen      abstract breve              (opcional; se despliega al pulsar)
//    lugar        sala / online               (opcional; si falta se usa LUGAR_POR_DEFECTO)
//    online       enlace Teams/Zoom           (opcional)
//    presentacion ruta o enlace al PDF        (opcional; p. ej. "presentaciones/2026-12-10.pdf")
//    video        enlace a la grabación       (opcional)
//    estado       "aplazado" o "cancelado"    (opcional)
// =====================================================================

const HORA_POR_DEFECTO = "12:00";
const DURACION_MIN = 60;
const LUGAR_POR_DEFECTO = "Sala de seminarios TRANSyT · ETSI Caminos, Canales y Puertos (UPM)";

const SEMINARIOS = [
  // ---- EJEMPLOS: sustitúyelos por los seminarios reales ----
  {
    fecha: "2026-12-10",
    titulo: "Título de ejemplo de un seminario próximo",
    ponente: "Nombre Apellido",
    afiliacion: "Universidad de ejemplo",
    web: "",
    resumen: "Breve resumen de la charla. Aparece desplegable al pulsar sobre el título.",
    online: "#",
  },
  {
    fecha: "2027-01-21",
    titulo: "Otro seminario próximo de ejemplo",
    ponente: "Nombre Apellido",
    afiliacion: "TRANSyT-UPM",
    online: "#",
  },
  {
    fecha: "2026-10-15",
    titulo: "Seminario pasado de ejemplo",
    ponente: "Nombre Apellido",
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
