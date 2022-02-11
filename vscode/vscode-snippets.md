# VS Code: Snippets
<a id="header"></a>

- Abrir comando: `Configure User Snippets`
- Seleccionar lenguaje.
- Tabulación: `\t`
- Comillas: `\"`

## Index

1. [Markdown](#section-1)

[Title page][Index]

---
<a id="section-1"></a>

## Markdown

```json
"Insert block code": {
    "prefix": "cod",
    "body": [
        "```${1:markdown}",
        "$2",
        "```",
        "$0",
    ],
    "description": "Block of code in markdown"
},
```

[Title page][Index] - [Page top][Header]

[Index]: index.md
[Header]: #header