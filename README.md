# Seminarios TRANSyT

Web del Ciclo de Seminarios TRANSyT (UPM), publicada con GitHub Pages en
https://juannicolasgonzalez.github.io/seminariostransyt.github.io/

## Cómo añadir un seminario

1. Abre `seminarios.js` (en GitHub: pulsa el archivo y luego el lápiz ✏️).
2. Copia un bloque `{ ... },` y cambia la fecha, el título, el ponente, etc.
3. Guarda con "Commit changes". La web se actualiza en uno o dos minutos.

La página separa sola los seminarios en **Próximos** y **Anteriores** según la fecha.

## Subir las diapositivas

Sube el PDF a la carpeta `presentaciones/` y pon en el seminario:

```js
presentacion: "presentaciones/2026-12-10-apellido.pdf",
```

## Archivos

- `index.html` — textos de la página (descripción, formato, contacto)
- `seminarios.js` — lista de seminarios, lugar por defecto y enlace de la llamada online
- `style.css` — colores y diseño
