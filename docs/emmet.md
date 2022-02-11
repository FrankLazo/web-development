# Emmet
<a id="header"></a>

- [Cheat Sheet](https://docs.emmet.io/cheat-sheet/)
- [Cheat Sheet as PDF](https://docs.emmet.io/cheatsheet-a5.pdf)

## Index

1. [Sintaxis](#section-1)
1. [Lorem Ipsum generator](#section-2)
1. [Snippets](#section-3)

---
<a id="section-1"></a>

## Sintaxis

- Si se omite el elemento con clases, ids o atributos se asume un `<div>`

||Name|Sintaxis|Descripción|
|---:|:---|:---:|:---|
|1|Child|`a>b`|Elemento **b** es hijo de **a**|
|2|Sibling|`a+b`|Elemento **b** a continuación de **a**|
|3|Climb-up|`a^b`|Elemento **b** a continuación del padre de **a**|
|||`a^^b`|Elemento **b** a continuación del abuelo de **a**|
|4|Grouping|`(...a)+b`|Elemento **b** a continuación del bloque contenedor de **a**|
|5|Multiplication|`a*m`|Elemento **a** se repite **m** veces|
|6|Item numbering|`$*m`|Símbolo **$** se reemplazará por los valores de **1** a **m**. Se puede incluir en clases, atributos o contenidos|
|||`$$` , `$$$` , ...|Se reemplazarán por dos y tres dígitos respectivamente|
|||`$@-`|Orden inverso, de **m** a **1**|
|||`$@n`|Inicia en **n** y aumenta de **1** en **1**|
|7|ID and CLASS attributes|`a#id`|Elemento con id|
|||`a.class`|Elemento con clase|
|||`a#id.class`|Elemento con id y clase|
|||`a.class1.class2`|Elemento con varias clases|
|8|Custom attributes|`a[attr1="" attr2=""]`|Elemento con varias clases|
|9|Text|`a{...}`|Contenido de **a**|
|10|Implicit tag names|`.class`|Si se omite el elemento es un `<div>`|
|||`em>.class`|Si va dentro de un elemento de texto es un `<span>`|
|||`ul>.class`|Si va dentro de una list es un `<li>`|
|||`table>.row>.col`|Si va dentro de una tabla o fila es un `<tr>` o `<td>`|
|||`select>.opt` , `optgroup>.opt`|Si va dentro de un `select` u `optgroup` es un `<option>`|

[Page top][Header]

---
<a id="section-2"></a>

## Lorem Ipsum generator

|Sintaxis|Descripción|
|:---:|:---|
|`lorem`|Genera un texto con **30** palabras|
|`loremN`|Genera un texto con **N** palabras|
|`lorem.class`|Genera un `.class>lorem`|
|`lorem#id`|Genera un `#id>lorem`|

[Page top][Header]

---
<a id="section-3"></a>

## Snippets

- Usar sintaxis [TextMate](https://macromates.com/textmate/manual/snippets)
- En settings.json:

```json
"emmet.extensionsPath": "ruta/del/archivo/snippets.json"
```

- En snippets.json:

```json
{
    "html": {
        "snippets": {
            "cod": "h2+p>code",
        }
    },
    "css": {
        "snippets": {
            "cb": "color: black",
        }
    },
}
```

[Page top][Header]

[Header]: #header