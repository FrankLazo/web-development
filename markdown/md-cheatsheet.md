# Markdown: Cheat Sheet
<a id="header"></a>

[Portada][Index]

## [Elementos de bloque](md-bloque.md)

|ELEMENTO|CÓDIGO|
|:---|:---|
|Párrafo|Línea de texto|
|Nuevo párrafo|Línea de texto + **`ENTER`** x 2|
|Salto de línea en párrafo|Línea de texto + **`SPACE`** x 2 + **`ENTER`**|
|Encabezados|**`#`** - **`##`** - **`###`** - **`####`** - **`#####`** - **`######`**|
|"|**`===`** , **`---`**|
|Citas|**`>`** , **`>>`** , **`>>>`** , etc|
|Listas|**`-`** Item , **`*`** Item , **`+`** Item , **`1.`** Item|
|Listas anidadas|**`TAB`** , **`SPACE`** x 4|
|Código|**\`\`\``language`** *code* \`\`\` , **\~\~\~`language`** *code* **\~\~\~**|
|"|**`TAB`** , **`SPACE`** x 4|
|Regla horizontal|`***` , **`---`** , **`___`** , **`* * *`** , **`- - -`** , **`_ _ _`**|

## [Elementos de línea](md-linea.md)

|ELEMENTO|CÓDIGO|
|:---|:---|
|Énfasis|**`*`** Texto **`*`** , **`_`** Texto **`_`**|
|Importancia|`**` Texto `**` , **`__`** Texto **`__`**|
|Importancia + énfasis|`***` Texto `***` , **`___`** Texto **`___`**|
|Enlaces|**`[`** *text link* **`] (`** *url "title"* **`)`**|
|"|**`[`** *text link* **`] [`** *keyword* **`]`** + **`[`** *keyword* **`]:`** *url "title"*|
|"|**`[`** *keyword* **`]`** + **`[`** *keyword* **`]:`** *url "title"*|
|Código|\` *code* \`|
|Imágenes|**`! [`** *alt text* **`] (`** *url "title"* **`)`**|
|"|**`! [`** *alt text* **`] [`** *keyword* **`]`** + **`[`** *keyword* **`]:`** *url "title"*|

## [Elementos varios](md-varios.md)

|ELEMENTO|CÓDIGO|
|:---|:---|
|Enlaces automáticos|**`<`** url completa **`>`**|
|Escapar caracteres|**`\`** + **\\ \` \* \_ { } [ ] ( ) \# \+ \- \. \!**|

## [Multimarkdown](md-multi.md)

|ELEMENTO|CÓDIGO|
|:---|:---|
|Tablas|\| head \| head \| head \||
||\| :--- \| :---: \| ---: \||
||\| data \| data \| data \||
|Definiciones|*Término*|
||**`:`** *Definición*|
|Abreviaciones|**`*[`** Abbr **`]:`** Abreviation|
|Notas al pie de página|Texto **`[^`** Nota **`]`** ...|
||**`[^`** Nota **`]:`** Descripción de la nota|
|Referencias cruzadas|**`{#`** *keyword* **`}`** , **`<a id="keyword"></a>`**|
||**`[`** *text link* **`]`** **`(#`** *keyword* **`)`**|
|Tachado|**`~~`** Texto **`~~`**|
|Emojis|😀, `:`shortcode`:`|
|Metadatos|*`Metadato:`* Contenido del metadato + **`ENTER`**|
|Listado de tareas|**`[ ]`** Tarea a realizar|
||**`[x]`** Tarea realizada|

[Portada][Index]

[Index]: index.md