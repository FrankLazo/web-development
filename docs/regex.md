# RegEx

[RegExr](https://regexr.com/)

## Flags

```bash
/word/      # Sólo la primera coincidencia
/word/g     # Todas las coincidencias
/word/i     # No importa mayúsculas o minúsculas
/word/m     # Multilínea. Para ^ y $
```

## Escapar caracteres

```bash
\/  # Escapar slash
\.  # Escapar punto
    # etc.
```

## Coincidencias Basicas

```bash
.       # Cualquier Caracter, excepto nueva linea
\d      # Cualquier Digitos (0-9)
\D      # No es un Digito (0-9)
\w      # Caracter de Palabra (a-z, A-Z, 0-9, _)
\W      # No es un Caracter de Palabra.
\s      # Espacios de cualquier tipo. (espacio, tab, nueva linea)
\S      # No es un Espacio, Tab o nueva linea.
```

## Cuantificadores

```bash
*       # 0 o Más
+       # 1 o Más
?       # 0 o Uno
{3}     # Numero Exacto
{3,4}   # Rango de Numeros (Minimo, Maximo)
```

## Limites

```bash
\b      # Limite de Palabra
\B      # No es un Limite de Palabra
^       # Inicio de una cadena de texto
$       # Final de una cadena de texto
```

## Conjuntos de Caracteres

No es necesario escapar los símbolos especiales.

```bash
[]      # Caracteres dentro de los brackets
[^ ]    # Caracteres que NO ESTAN dentro de los brackets

# Ejemplos

[a-z]       # Desde la 'a' a la 'z' minúscula
[A-Z]       # Desde la 'A' a la 'Z' mayúscula
[a-zA-Z]    # Desde la 'A' a la 'Z' mayúscula o minúscula
[0-9]       # Desde el '0' al '9'
[a-z_@]     # Desde la 'a' a la 'z' minúscula incluyendo guión bajo y arroba
```

## Grupos

```bash
( )     # Grupo
|       # Uno u otro
```