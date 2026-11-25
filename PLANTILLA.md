# Plantilla para actualizar la web de seminarios

Copia el bloque que necesites, rellénalo y envíalo, por ejemplo a un asistente de IA junto
con este repositorio. Puedes enviar varios bloques en el mismo mensaje. Los campos marcados
como *(opcional)* se pueden dejar vacíos o borrar.

Las fechas se escriben como `DD/MM/AAAA` y las horas en formato de 24 h, `HH:MM`, hora de
Madrid.

---

## 1. Nuevo seminario

```
NUEVO SEMINARIO
Fecha: 11/02/2027
Hora: 12:00                    (o "por confirmar")
Título:
Ponente(s):                    (si son varios, sepáralos con comas)
Afiliación:                    (opcional)
Web del ponente:               (opcional)
Resumen:                       (opcional)
Lugar:                         (opcional, solo si NO es la Biblioteca TRANSyT)
Enlace online:                 (opcional, solo si NO es el enlace habitual)
```

## 2. Cambiar datos de un seminario

```
CAMBIAR SEMINARIO
Seminario: 11/02/2027, Nombre del ponente
Cambios:
- Hora: 16:00
- Título: Nuevo título
```

## 3. Añadir las diapositivas de un seminario

```
DIAPOSITIVAS
Seminario: 11/02/2027, Nombre del ponente
Enlace de SharePoint:
```

Comprueba antes que el enlace de SharePoint deja abrir el archivo a quien quieras que lo vea.

## 4. Aplazar o cancelar un seminario

```
APLAZAR / CANCELAR
Seminario: 11/02/2027, Nombre del ponente
Estado: aplazado               (o "cancelado")
Nueva fecha:                   (opcional, si ya se conoce)
```

Si hay nueva fecha, el seminario aparece en la nueva fecha y deja de mostrarse como aplazado.

## 5. Enlace habitual de la llamada online

```
ENLACE ONLINE
Enlace:
```

Se pone una sola vez y aparece en todos los próximos seminarios.

---

## Ejemplo

```
NUEVO SEMINARIO
Fecha: 11/02/2027
Hora: 12:00
Título: Movilidad activa y calidad del aire en Madrid
Ponente(s): Ana García
Afiliación: Universidad de Valencia
Web del ponente: https://ejemplo.es/ana-garcia
Resumen: Analizamos el efecto de las zonas de bajas emisiones en los desplazamientos a pie y en bicicleta.

DIAPOSITIVAS
Seminario: 15/10/2026, Nombre Apellido
Enlace de SharePoint: https://upm365.sharepoint.com/...
```
