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
//    orcid        ORCID del ponente, p. ej. "0000-0002-1825-0097" (opcional)
//    afiliacion   institución                 (opcional)
//    resumen      abstract breve              (opcional; se despliega al pulsar)
//    lugar        sala / online               (opcional; si falta se usa LUGAR_POR_DEFECTO)
//    online       enlace de la llamada        (opcional; si falta se usa ENLACE_ONLINE)
//    presentacion enlace de SharePoint a las diapositivas (opcional)
//    estado       "aplazado" o "cancelado"    (opcional)
// =====================================================================

const DURACION_MIN = 50;   // 30 min de presentación + 20 de debate
const LUGAR_POR_DEFECTO = "Biblioteca TRANSyT, ETSI Caminos, Canales y Puertos (UPM)";

// Enlace de la llamada online. Ponlo aquí una vez y saldrá en todos los
// próximos seminarios. Mientras esté vacío, el botón "Unirse online" no aparece.
const ENLACE_ONLINE = "";

const SEMINARIOS = [
  {
    fecha: "2027-01-26",
    hora: "11:00",
    titulo: "Pago biométrico en transporte público: el papel de los beneficios percibidos, la madurez tecnológica y las preocupaciones en materia de privacidad",
    ponente: "Juan Sebastian Guzman",
    orcid: "0009-0001-4530-5364",
    afiliacion: "TRANSyT-UPM",
  },
];
