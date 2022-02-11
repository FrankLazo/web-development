# Visual Studio Code
<a id="header"></a>

## Index

1. [Temas](vscode-themes.md)
1. [Atajos](vscode-shortcuts.md)
1. [Extensiones](vscode-extensions.md)
1. [Snippets](vscode-snippets.md)
1. [Remover totalmente la configuración de VS Code](#section-1)
1. [Tips](#section-2)
1. [Configuraciones](#section-3)
1. [Terminal](#section-4)

---
<a id="section-1"></a>

## Remover totalmente la configuración de VS Code

1. Desinstalar totalmente **VS Code**
1. Abrir ejecutar `[Win] + [R]`:

```
%userprofile%\AppData\Roaming
```

3. Borrar totalmente la carpeta **Code**
3. Para eliminar todas las extensiones ir a:

```
%userprofile%
```

5. Borrar totalmente la carpeta **.vscode**
6. Finalmente, reinstalar **VS Code**

[Page top][Header]

---
<a id="section-2"></a>

## Tips

- Comando: `File Icon Theme`
- Atajos en `keybindings.json`
- Configuración en `settings.json`
- Configuración específica por lenguaje:

```json
"[languageid]": {

}
```

- Creación de extensiones: [Extension API](https://code.visualstudio.com/api)
- Asociaciones para archivos que no son detectados correctamente:

```json
"files.associations": {
    ".database": "json"
}
```

- Agrupar símbolos al buscar: `@:`
- Navegación rápida a los símbolos: **Outline view**
- Usar expresiones regulares al buscar: `.*`
- Drag and drop files para crear nuevos layouts.
- Toggle bookmark: `Ctrl+Alt+K`
- Open Live Server: `Alt+L Alt+O`
- Close Live Server: `Alt+L Alt+C`
- Comando: `Paste JSON as Code`

[Page top][Header]

---
<a id="section-3"></a>

## Configuraciones

- CodeSnap
    - Show window controls: false
    - Target: window
- Synth Wave '84
    - Comando: "Enable Neon Dreams"
    - Quitar advertencia de corrupción:
        - Instalar extensión **Fix VSCode Checksums**
        - Comando: "Fix Checksums: Apply"
- Gruvbox Material
    - Dark contrast: hard
    - Italic comments: false
    - Light contrast: soft
    - Light workbench: high-contrast
- Fuentes

```json
"editor.fontFamily": "Fira Code",
"editor.fontLigatures": true
```

- Menubar

```json
"window.menuBarVisibility": "toggle",
```

- TODO's

```json
"todo-tree.general.tags": [
    "BUG:",
    "HACK:",
    "FIXME:",
    "TODO:",
    "XXX",
    "[ ]",
    "[x]"
],
"todo-tree.highlights.enabled": false,
```

- Color Highlight
    - Marker type: underline

- Bracket Pair Colorizer 2 (sólo ejemplo)

```json
"bracket-pair-colorizer-2.colors": [
    "#fafafa",
    "#9F51B6",
    "#F7C244",
    "#F07850",
    "#9CDD29",
    "#C497D4"
],
```

- Depende de la fuente:

```json
// Monaco
"editor.lineHeight": 20,
"editor.fontSize": 12.5,
```

- PlantUML: revisar requisitos (Java y Graphviz) en documentación.

[Page top][Header]

---
<a id="section-4"></a>

## Terminal

```bash
# open code with current directory
code .
```

```bash
# open the current directory in the most recently used code window
code -r .
```

```bash
# create a new window
code -n
```

```bash
# change the language
code --locale=es
```

```bash
# open diff editor
code --diff <file1> <file2>
```

```bash
# open file at specific line and column <file:line[:character]>
code --goto package.json:10:5
```

```bash
# see help options
code --help
```

```bash
# disable all extensions
code --disable-extensions .
```

[Page top][Header]

[Header]: #header