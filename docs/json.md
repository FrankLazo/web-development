# JSON

<a id="index"></a>

[Home][Home]

**J**ava**S**cript **O**bject **N**otation

- Text file: `.json`
- MIME type: `application/json`

JSON structure:

```json
{
    "property1": "value1",  // Strings
    "property2": 100,       // Numbers
    "property3": false,     // Booleans
    "property4": [          // Arrays
        // ...
    ],
    "property5": {          // Objects
        // ...
    },
}
```

Access the data inside:

```js
myJSON.property1;       // Dot notation
myJSON[ 'property1' ];  // Bracket notation
```

Arrays as JSON:

```json
[
    {
        // ...
    },
    {
        // ...
    },

    // More objects
]
```

Strings and numbers as JSON:

```json
"Single string"
```

```json
12300
```

Converting between objects and text:

```js
JSON.parse( jsonString ); // Returns an object
JSON.stringify( object ); // Returns a JSON string
```

[Home][Home] - [Top][Index]

<!-------------------------------------------------------------------------
 !  Links
-------------------------------------------------------------------------->

[Home]:     ../README.md
[Index]:    #index
