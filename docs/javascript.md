# JavaScript

<a id="index"></a>

1. [Introduction][section-01]
    - APIs
    - Document Object Model (DOM)
1. [Elements][section-02]
    - Data types
    - Operators
1. [Strings][section-03]
    - Concatenation
    - Template literals
1. [Decisions and loops][section-04]
    - Condicional statements
    - Loops
1. [Arrays][section-05]
1. [Functions][section-06]
1. [Objects][section-07]
    - this
    - Built-in objects
    - Prototypes
1. [Arrays and objects][section-08]
1. [Classes][section-09]
    - Getters and setters
1. [Objects, properties and methods][section-10]
    - General
    - Window object
    - Document object
    - Node
    - Element node
    - String object
    - Array object
    - Number object
    - Math object
    - Date object
1. [Events][section-11]
1. [Asynchronous JavaScript][section-12]
    - Async callbacks
    - Cooperative asynchronous JavaScript
    - Promises
    - Async and await

[Home][Home]

## Introduction

**J**ava**S**cript: interpreted programming language.

```js
document.addEventListener( 'DOMContentLoaded', () => {
    // Code...
} );
```

```html
<head>
    <!-- Code... -->
    <script defer src="script.js"></script>
</head>
```

```html
<head>
    <!-- Code... -->
    <script async src="script.js"></script>
</head>
```

```html
<body>
    <!-- Code... -->
    <script src="script.js"></script>
</body>
```
### APIs

**A**pplication **P**rogramming **I**nterfaces.<br />
**Browser** APIs:

- **DOM** API
- **Geolocation** API
- **Canvas** and **WebGL** APIs
- **Audio** and **Video** APIs
- **requestAnimationFrame** API

**Third party** APIs:

- **Twitter** API
- **Google Maps** API
- **OpenStreetMap** API
- Etc.

### Document Object Model (DOM)

**Node** types:

- The **document** node
- **Element** nodes
- **Attribute** nodes
- **Text** nodes

**NodeList**: type of object called a **collection** (not array).

- `.length`
- `.item()`
- **Live** NodeList: `getElementsBy...` (when the script updates the page, the NodeList is updated at the same time).
- **Static** NodeList: `querySelector...` (when the script updates the page, the NodeList is not updated to reflect the changes made by the script).

```js
if ( elements.length >= 1 )
{
    // Do something...
}
```

```js
if ( el.hasAttribute( 'class' ) )
{
    // Do something...
}
```

## Elements

Statements:

```js
/* Do something... */;
```

Comments:

```js
/* Multi-line
 * comment
 */

// Single-line comment
```

Variables:

```js
// Use 0-9, a-z, A-Z or _
// Start with letter
// Never with a number
// _ for certain JavaScript constructs

let lowerCamelCase; // By default, undefined
let lowerCamelCase = 'Value';

// hoisting
var lowerCamelCase = 'Value';
```

Constants:

```js
const lowerCamelCase = 'Constant value';
```

Escaping:

```js
let quote = '...\'...\'...';
let quote = "...\"...\"...";

// \n Line break
```

### Data types

Simple or primitive data:

- Objects:
    - **Number**: `-0.75`
    - **BigInt**: `9007199254740991n`
    - **String**: `'quotes'` or `"double quotes"`
    - **Boolean**: `true` or `false`
- No objects:
    - `undefined` (Variable that no value has been assigned to it yet)
    - `null` (Variable with no value)

Complex data:

- **Object** (Arrays, functions)

```js
'string literal';
```

### Operators

- Assignment operators:

```
 =  Assignment
+=  Addition assignment
-=  Subtraction assignment
*=  Multiplication assignment
/=  Division assignment
```

- Arithmetic operators:

```
 +  Addition
 -  Subtraction
 *  Multiplication
 /  Division
 %  Remainder (modulo)
**  Exponent
```

- Increment and decrement operators: `++`, `--`
- String operator: `+` (concatenation)
- Comparison operators:

```
==  Is equal to            ===  Strict equal to
!=  Is not equal to        !==  Strict not equal to
 >  Greater than            >=  Greater than or equal to
 <  Less than               <=  Less than or equal to

Strict: test the equality of both the values and their datatypes.
```

- Logical operators:

```
&&  Logical AND
||  Logical OR
 !  Logical NOT
```

- Grouping operator: `()`
- Member operator: `.`
- Ternary operator: `?:`

Operator precedence:

- `()`
- `*`, `/`
- `+`, `-`

Comparison and logical operators return `true` or `false`.<br />
Logical operators return the value that **stopped** the processing (not necessarily `true` or `false`).

- **Falsy** values:
    - `false`, `0`, `''`, `10 / 'score` (`NaN`), `var name;` (`undefined`), `null`
- **Truthy** values:
    - `true`, `1`, `'carrot'`, `10 / 5`, `'true'`, `'0'`, `'false'`
    - The **presence** of an object or an array.

- A **truthy** value is not always equal to a Boolean value of **true**.

```
(false == 0)     true        (undefined == null)    true        (NaN == null)  false
(false === 0)   false                                           (NaN == NaN)   false
                             (null == false)       false
(false == '')    true        (undefined == false)  false
(false === '')  false        (null == 0)           false
                             (undefined == 0)      false
(0 == '')        true
(0 === '')      false        (undefined === null)  false
```

## Strings

```js
string[ index ]; // return the character in that position
string[ string.length - 1 ] // return the last character
```

```js
// If substring exists

if ( string.indexOf( 'substring' ) !== -1 )
{
    // Do something...
}
```

```js
// Replace all the substrings
string.replace( /oldsubstring/g, 'newsubstring' );
```

### Concatenation

- `Numbers + Strings = Strings`
- `Numbers + Strings with arithmetic operators = NaN` (**Not a Number**)

> **NaN** is a value that is counted as a number.

### Template literals

(Template strings)

```js
`String ${ variables or expressions }
    with line break ${ variable ? 'value1' : 'value2' }.`
```

## Decisions and loops

### Condicional statements

`if...else` statements:

```js
if ( /* Condition */ )
{
    // Code to run if condition is true
}
else
{
    // Run some other code instead
}
```

```js
if ( /* Condition */ )
{
    // Code to run if condition is true
}
```

```js
if ( /* Condition */ )
{
    // Code to run
}
else if ( /* Condition */ )
{
    // Code to run
}

// More else if...

else
{
    // Code to run
}
```

```js
// Not recommended:

if ( /* Condition */ ) /* Code to run if condition is true */
else /* Run some other code instead */
```

`switch` statements:

```js
switch ( /* Expression or value */ )
{
    case 'choice1':
        // Run this code
        break;

    case 'choice2':
        // Run this code instead
        break;

    // Include as many cases as you like

    default:
        // Actually, just run this code
        break;
}
```

**Ternary** operator:

```js
// Returns a value
( condition ) ? /* run this code */ : /* run this code instead */
```

### Loops

`for...of` loop:

```js
for ( const element of elements )
{
    // Run this code
}

// More specialized loops for collections:
// - .map()
// - .filter()

// for..in loop
```

The standard `for` loop:

```js
// Counter can be before the condition:
// var index = 0;

for ( /* initializer */ ; /* condition */ ; /* final-expression */ )
{
    // Code to run
}
```

`while` and `do...while`:

```js
/* Initializer */

while ( /* Condition */ )
{
    // Code to run

    // Final-expression
}
```

```js
/* Initializer */

do
{
    // Code to run

    // Final-expression
}
while ( /* Condition */ );
```

- Exiting loops: `break;`
- Skipping iterations: `continue;`

## Arrays

```js
// Array literal
const array = [ something, something, something, '...' ];
const array = [ something,
                something,
                something,
                '...' ];

// Array constructor
var array = new Array( /* ... */ );
```

Item:

```js
array.item( index ); // or
array[ index ]; // Bracket notation
```

Number of elements:

```js
array.length;
```

## Functions

Named functions:

```js
function funcName( /* parameters */ )
{
    // Function code...

    return variable; // or
    return array;
}

funcName( /* arguments */ );
```

```js
function funcName ( parameter = 'defaultValue' )
{
    // Function code...
}
```

Anonymous functions:

```js
const funcName = function( /* parameters */ ) {
    // Function code...
};

funcName();
```

```js
let anotherFunction = funcName;
anotherFunction();
```

Arrow functions:

```js
const funcName = ( /* parameters */ ) => {
    // Function code...
};

// Only one line in the curly brackets:
const funcName = ( /* parameters */ ) => /* Run this code */;

// Only one parameter in the curly brackets:
const funcName = parameter => /* Run this code */;

// Return a value
const funcName = parameter => returnValue;

funcName();
```

**Function expression**:

- Where the interpreter would expect to see an expression.

**IIFE** ("*iffy*", Inmediately Invoked Function Expressions):

```js
const funcName = ( function() {
    // Function code...
}() );
```

Place all of the code inside an IIFE to ensure any variable names used in the script do not clash with variable names used in other scripts.

```js
( function() {

    // Script code...

}() );
```

Variable scope:

- **Local**: inside a function.
- **Global**: outside of a function.

Return values:

```js
return expression;
return value;
```

```js
// Functions that don´t return any value:
void /* or */ undefined
```

## Objects

Literal notation:

```js
const objectName = {
    // Properties
    key: value,

    // Methods
    method: function() {
        // Function code...
    },

    // or
    method() {
        // Function code...
    },

    // Dot notation
    this.property;
    this.method();
};
```

```js
// Dot notation
objectName.property;
objectName.method();

// Bracket notation
objectName[ 'property' ]; // Not for methods
objectName[ varName ];

// Objects are sometimes called ~associative arrays~
```

Constructor notation:

```js
const objectName = new Object(); // Creates a blank object
const objectName = {};
```

```js
// Add or modify
// For literal notation too
objectName.property = value;
objectName.method = function() {
    // Function code...
};
```

Delete:

```js
delete objectName.property;
```

Clear:

```js
objectName.property = '';
```

Templates:

```js
function createObject( prop1, prop2, prop3, /* ... */ )
{
    const object = {};

    object.prop1 = prop1;
    object.prop2 = prop2;
    object.prop3 = prop3;

    object.method = function() {
        // Method code...
    };

    return object;
}

const newObject = createObject( /* Property values */ );
```

```js
function ObjectTemplate( prop1, prop2, prop3, /* ... */ )
{
    this.prop1 = prop1;
    this.prop2 = prop2;
    this.prop3 = prop3;

    this.method1 = function() {
        // Method code...
    };
}

const objectName = new ObjectTemplate( /* Property values */ );
```

### this

- A function in global scope: **window object**.
- Global variables: properties of the **window object**.
- A method of an object: **containing object**.
- Function expression as method: **containing object**.

### Built-in objects

**Browser object model**:

- Browser tab/window.
- `window`:
    - `document`
    - `history`
    - `location`
    - `navigator`
    - `screen`

**Document object model**:

- Web page.
- `html`:
    - `head`
    - `body`
    - And so on.

**Global JavaScript objects**:

- General objects about JS language.
- Not a **model**.
- Wrapper objects:
    - `String`
    - `Number`
    - `Boolean`
- `Date`
- `Math`
- `Regex`

### Prototypes

Mechanism by which JavaScript objects **inherit** features from one another.

```js
// Prototype: built-in property
myObject.__proto__
Object.getPrototypeOf( myObject )

Object.prototype // The most basic prototype
Object.prototype.__proto__ // null
```

Setting a prototype:

```js
// myObjectPrototype is the prototype for myNewObject (__proto__)

const myObjectPrototype = {
    // Properties and methods...
}

const myNewObject = Object.create( myObjectPrototype );
```

```js
const myObjectPrototype = {
    // Properties and methods...
}

function MyNewObject()
{
    // Constructor code...
}

// All functions have a property named prototype
MyNewObject.prototype = myObjectPrototype;
// Set MyNewObject's constructor to MyNewObject constructor
MyNewObject.prototype.constructor = MyNewObject;
```

Constructor with properties and prototype with methods.

- `.hasOwn()`
- `.hasOwnProperty()`

## Arrays and objects

> Arrays are objects.

Arrays in an object:

```js
var costs = {
    room1: items[ 420, 40, 10 ],
    // More properties...
};

costs.room1.items[ 0 ]; // 420
```

Objects in an array:

```js
var costs = [
    {
        accom: 420,
        food:  40,
        phone: 10,
    },
    // More objects...
];

costs[ 0 ].phone; // 10
```

## Classes

```js
class MyClass
{
    property; // Optional, but it make easier read the code

    constructor( property )
    {
        this.property = property;
    }

    method()
    {
        // Method code...
    }
}
```

```js
const myObject = new MyClass( property );
```

Default constructor:

```js
class MyClass
{
    property;

    method()
    {
        // Method code...
    }
}
```

```js
const myObject = new MyClass();
```

Inheritance:

```js
class MySubClass extends MyClass
{
    newProperty;

    constructor( property, newProperty )
    {
        super( property ); // Superclass constructor
        this.newProperty = newProperty;
    }

    method()
    {
        // Method code...
    }
}
```

Encapsulation:

```js
class MyClass
{
    #privateProperty;

    constructor( value )
    {
        this.#privateProperty = value;
    }

    #privateMethod()
    {
        // Method code...
    }
}

const myObject = new MyClass( value );

myObject.#privateProperty; // Syntax error
myObject.#privateMethod(); // Syntax error
```

### Getters and setters

For objects too.

```js
class Person()
{
    get name()
    {
        return this._name;
    }
}
```

```js
class Person()
{
    set name( newName )
    {
        this._name = newName;
    }
}
```

```js
let person = new Person();

person.name;              // Call to getter
person.name = 'New name'; // Call to setter
```

## Objects, properties and methods

### General

```js
// return type of variable
typeof varName;
```

Console:

- `.log()`

### Window object

Properties:

- `.innerHeight`, `.innerWidth`
- `.pageXOffset`, `.pageYOffset`
- `.screenX`, `.screenY`
- `.location`
- `.document`
- `.history`
- `.history.length`
- `.screen`
- `.screen.width` `.screen.height`

Methods:

- `.alert()`
- `.prompt()`
- `.open()`
- `.print()`

### Document object

Properties:

- `.title`
- `.lastModified`
- `.URL`
- `.domain`

Methods:

- `.write()`
- `.getElementById()`
- `.querySelector()`
- `.getElementsByClassName()`
- `.getElementsByTagName()`
- `.querySelectorAll()`
- `.createElement()`
- `.createTextNode()`

### Node

Properties:

- `.nodeValue`

### Element node

Properties:

- `.parentNode`
- `.previousSibling`, `.nextSibling`
- `.firstChild`, `.lastChild`
- `.innerHTML`
- `.textContent`
- `.className`
- `.id`
- `.accessKey`
- `.checked`
- `.href`
- `.lang`
- `.title`
- `.style`
- `.disabled`
- `.value`
- `.length`

Methods:

- `.createElement()`
- `.createTextNode()`
- `.appendChild()`, `.removeChild()`
- `.hasAttribute()`
- `.getAttribute()`
- `.setAttribute()`
- `.removeAttribute()`
- `.insertBefore()`
- `.focus()`
- `.append()`

### String object

Properties:

- `.length`

Methods:

- `.toUpperCase()`
- `.toLowerCase()`
- `.charAt()`
- `.indexOf()`
- `.lastIndexOf()`
- `.substring()`
- `.split()`
- `.trim()`
- `.replace()`
- `.fromCharCode()`
- `.slice()`
- `.includes()`
- `.startsWith()`
- `.endsWith()`

### Array object

Properties:

- `.length`

Methods:

- `.indexOf()`
- `.push()`
- `.unshift()`
- `.pop()`
- `.shift()`
- `.splice()`
- `.map()`
- `.filter()`
- `.join()`
- `.toString()`

### Number object

Methods:

- `.isNaN()`
- `.toFixed()`
- `.toPrecision()`
- `.toExponential()`
- `.toString()`

### Math object

Constructor:

- `Number()`

Properties:

- `.PI`

Methods:

- `.round()`
- `.sqrt()`
- `.ceil()`
- `.floor()`
- `.random()`
- `.sin()`
- `.cos()`
- `.tan()`
- `.toFixed()`
- `.pow()`

### Date object

```js
// By default, it will hold today's date and the current time.
// Store the number of milliseconds since midnight on January 1, 1970.
// The current date/time is determined by the computer's clock.
var today = new Date();
```

- `.getDate()`, `.setDate()`
- `.getDay()`
- `.getFullYear()`, `.setFullYear()`
- `.getHours()`, `.setHours()`
- `.getMilliseconds()`, `.setMilliseconds()`
- `.getMinutes()`, `.setMinutes()`
- `.getMonth()`, `.setMonth()`
- `.getSeconds()`, `.setSeconds()`
- `.getTime()`, `.setTime()`
- `.getTimezoneOffset()`
- `.toDateString()`
- `.toTimeString()`
- `.toString()`
- `.toLocaleTimeString()`
- `.now()`

## Events

```js
// Traditional DOM event handlers
element.onclick = functionName;

// DOM Level 2 event listeners
element.addEventListener( 'eventName', functionName /* [, boolean ] */ );
element.removeEventListener( 'eventName', functionName /* [, boolean ] */ );

// With parameters
element.addEventListener( 'eventName', function() {

    functionName( /* parameters */ );

} /* [, boolean ] */ );

// 'this' refers to the element
// 'boolean' refers to event flow: capture
```

Remove events:

```js
const controller = new AbortController();

// Pass an AbortSignal to this handler
element.addEventListener( 'eventName', funcName, { signal: controller.signal } );

// Removes all/any event handlers associated with this controller
controller.abort();
```

Event flow:

- Event **bubbling**: `capture: false` (default value)
- Event **capturing**: `capture: true`

The **event object**:

- `.target`
- `.type`
- `.cancelable`
- `.preventDefault()`
- `.stopPropagation()`
- `.screenX()`, `.screenY()`
- `.pageX()`, `.pageY()`
- `.clientX()`, `.clientY()`
- `.keyCode()`
- `.key`

```js
// event, evt or e
function checkUsername( e )
{
    var.target = e.target;
}

el.addEventListener( 'blur', checkUsername, false );
```

```js
function check( e, minLength )
{
    var.target = e.target;
}

el.addEventListener( 'blur', function( e ) {
    check( e, 5 );
}, false );
```

HTML5 events:

- `readystatechange`
- `DOMContentLoaded`
- `hashchange`
- `beforeunload`

UI events:

- `load`
- `unload`
- `error`
- `resize`
- `scroll`

Keyboard events:

- `keydown`
- `keypress`
- `keyup`

Mouse events:

- `click`
- `dblclick`
- `mousedown`
- `mouseup`
- `mousemove`
- `mouseover`
- `mouseout`

Focus events:

- `focus`, `focusin`
- `blur`, `focusout`

Form events:

- `input`
- `change`
- `submit`
- `reset`
- `cut`
- `copy`
- `paste`
- `select`

Mutation events:

- `DOMSubtreeModified`
- `DOMNodeInserted`
- `DOMNodeRemoved`
- `DOMNodeInsertedIntoDocument`
- `DOMNodeRemovedFromDocument`

BOM events:

- `touchstart`
- `touchend`
- `touchmove`
- `orientationchange`

## Asynchronous JavaScript

JavaScript, generally speaking, is **single-threaded**: **blocking** code.

**Web workers**:

```
  Main thread: Task A --> Task C
Worker thread: Expensive task B
```

**Promises**:

```
Main thread: Task A                   Task B
    Promise:      |__async operation__|
```

### Async callbacks

```js
element.addEventListener( 'click', callback );
```

```js
function loadAsset( url, type, callback )
{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;

    xhr.onload = function() {
        callback(xhr.response);
    };

    xhr.send();
}
```

### Cooperative asynchronous JavaScript

**setTimeout()**:

```js
let timeoutId = setTimeout( /* Function */ ,
                            /* Time interval in milliseconds */ ,
                            /* Parameters to pass to the function */ );

// Stop timeout
clearTimeout( timeoutId );
```

**setInterval()**:

```js
const intervalId = setInterval( /* Function */ ,
                                /* Time interval in milliseconds */ ,
                                /* Parameters to pass to the function */ );

// Stop interval
clearInterval( intervalId );
```

Instead of using `setInterval()`:

```js
setTimeout( function funcName() {
    // Code to run...
    setTimeout( funcName, 100 );
}, 100 );
```

- With `setTimeout()`: the `100` milliseconds will be the delay between the `funcName` code finishing, and the next `funcName` call.
- With `setInterval()`: if the code takes `40` milliseconds to run, the interval then ends up being only `60` milliseconds.

Inmediate timeouts:

```js
// Run as soon as possible but only after the main code thread has been run.

setTimeout( function() {
    // Code to run...
}, 0 );
```

**requestAnimationFrame()**:

```js
function funcName()
{
    // Code to run...
    requestAnimationFrame( funcName );
}

funcName();
```

- Since most screens have a refresh rate of **60Hz**, the fastest frame rate you can aim for is **60 frames per second** (FPS) when working with web browsers.
- If you have a monitor with a **60Hz** refresh rate and you want to achieve **60 FPS** you have about **16.7 milliseconds** (1000 / 60) to execute your animation code to render each frame.

Timestamp:

```js
let startTime = null;

function funcName( timestamp )
{
    if ( !startTime )
    {
        startTime = timestamp;
    }

    currentTime = timestamp - startTime;

    // Do something based on current time

    requestAnimationFrame( funcName );
}

funcName();
```

Clearing a `requestAnimationFrame()` call:

```js
rAF = requestAnimationFrame( funcName );

cancelAnimationFrame( rAF );
```

### Promises

```js
fetch( 'products.json' )
    .then( function( response ) {
        return response.json();
    })
    .then( function( json ) {
        let products = json;
        initialize( products );
    })
    .catch( function( err ) {
        console.log( 'Fetch problem: ' + err.message );
    });
```

- `.then()`: will run if the previous operation is successful.
- `.catch()`: will run if any of the `.then()` fail ( an **error object** is created ).

Fetch promises do not fail on 404 or 500 errors:

```js
let promise2 = promise.then( response => {
  if ( !response.ok )
  {
    throw new Error( `HTTP error! status: ${response.status}` );
  }
  else
  {
    return response.blob();
  }
} );
```

Promise terminology:

- **Pending**
- **Resolved** (when returns something)
- **Fulfilled** (success)
- **Rejected** (unsuccess, returns a **reason**)

Running code in response to multiple promises fulfilling:

```js
let a = fetch( url1 );
let b = fetch( url2 );
let c = fetch( url3 );

Promise.all( [ a, b, c ] )
    .then( values => {
        // ...
    } );
```

Running some final code after a promise fulfills/rejects:

```js
myPromise
    .then( response => {
        doSomething( response );
        runFinalCode();
    } )
    .catch( e => {
        returnError( e );
        runFinalCode();
    } );
```

```js
myPromise
    .then( response => {
        doSomething( response );
    } )
    .catch( e => {
        returnError( e );
    } )
    .finally( () => {
        runFinalCode();
    } );
```

Building your own custom promises:

```js
let myPromise = new Promise( ( resolve, reject ) => {
    // Do something
    resolve( 'Value for .then()' );
    // Do something
    reject( 'Value for .catch()' );
    // Do something
} );

myPromise
    .then( /* Do something */ )
    .catch( /* Do something */ );
```

```js
function funcName()
{
    return new Promise( /* Similar to before code */ );
}

funcName
    .then( /* Do something */ )
    .catch( /* Do something */ );
```

### Async and await

`async` turn a function into an **async function**:

```js
async function x() { /* ... */ }
let x = async function() { /* ... */ };
let x = async () => { /* ... */ };

x.then( /* ... */ );
```

`await` in front of any async **promise-based function** to pause the code until the promise fulfills:

```js
async function hello()
{
    return await Promise.resolve( "Hello" );
};

hello().then( alert );
```

Rewriting promise code with async/await:

```js
fetch( 'coffee.jpg' )
    .then( response => {
        if ( !response.ok )
        {
            throw new Error( `HTTP error! status: ${ response.status }` );
        }
            return response.blob();
    } )
    .then( myBlob => {
        let objectURL = URL.createObjectURL( myBlob );
        let image = document.createElement( 'img' );
        image.src = objectURL;
        document.body.appendChild( image );
    } )
    .catch( e => {
        console.log( 'There has been a problem with your fetch operation: ' + e.message );
    } );
```

```js
async function myFetch()
{
    let response = await fetch( 'coffee.jpg' );

    if ( !response.ok )
    {
        throw new Error( `HTTP error! status: ${ response.status }` );
    }

    let myBlob = await response.blob();

    let objectURL = URL.createObjectURL( myBlob );
    let image = document.createElement( 'img' );
    image.src = objectURL;
    document.body.appendChild( image );
}

myFetch()
    .catch( e => {
        console.log( 'There has been a problem with your fetch operation: ' + e.message );
    } );
```

```js
async function myFetch()
{
    let response = await fetch( 'coffee.jpg' );

    if ( !response.ok )
    {
        throw new Error( `HTTP error! status: ${ response.status }` );
    }

    return await response.blob();
}

myFetch()
    .then( blob => {
        let objectURL = URL.createObjectURL( blob );
        let image = document.createElement( 'img' );
        image.src = objectURL;
        document.body.appendChild( image );
    } )
    .catch( e => console.log( e ) );
```

Adding error handling:

```js
async function myFetch()
{
    try
    {
        let response = await fetch( 'coffee.jpg' );

        if ( !response.ok )
        {
            throw new Error( `HTTP error! status: ${ response.status }` );
        }

        let myBlob = await response.blob();
        let objectURL = URL.createObjectURL( myBlob );
        let image = document.createElement( 'img' );
        image.src = objectURL;
        document.body.appendChild( image );
    }
    catch( e )
    {
        console.log( e) ;
    }
}

myFetch();
```

Awaiting a `Promise.all()`:

```js
async function funcName()
{
    // Do something...
    let values = await Promise.all( [ a, b, c ] );
    // Do something...
}
```

It is also possible to use a sync `finally` block within an async function, in place of a `.finally()` async block.

```js
// Promises at the same time

const asyncFunc1 = asyncFunc();
const asyncFunc2 = asyncFunc();
const asyncFunc3 = asyncFunc();

await asyncFunc1;
await asyncFunc2;
await asyncFunc3;

// Or Promise.all()
```

If you want all the promises to settle and then use some of their fulfilled values, even when some of them are rejected, you could use `Promise.allSettled()` instead.

**Choosing the right approach**:

Asynchronous JS|Single delayed operation|Repeating operation|Multiple sequential operations|Multiple simultaneous operations
:---|:---|:---|:---|:---
Asynchronous callbacks|No|Yes (recursive callbacks)|Yes (nested callbacks)|No
`setTimeout()`|Yes|Yes (recursive timeouts)|Yes (nested timeouts)|No
`setInterval()`|No|Yes|No (unless they are the same)|No
`requestAnimationFrame()`|No|Yes|No (unless it is the same one)|No
Promises|No|No|Yes|See `Promise.all()`, below
`Promise.all()`|No|No|No|Yes
Async/await|No|No|Yes|Yes (in combination with `Promise.all()`)

[Home][Home] - [Top][Index]

<!-------------------------------------------------------------------------
 !  Links
-------------------------------------------------------------------------->

[Home]:         ../README.md
[Index]:        #index

[section-01]:   #introduction
[section-02]:   #elements
[section-03]:   #strings
[section-04]:   #decisions-and-loops
[section-05]:   #arrays
[section-06]:   #functions
[section-07]:   #objects
[section-08]:   #arrays-and-objects
[section-09]:   #classes
[section-10]:   #objects-properties-and-methods
[section-11]:   #events
[section-12]:   #asynchronous-javascript
