# Fetch API

<a id="index"></a>

[Home][Home]

- `fetch()`
- **Headers**
- **Request**
- **Response**

```js
fetch( 'http://example.com/data.json' )     // HTTP response
    .then( response => response.json() )    // Method json() defined in Body mixin
    .then( data => console.log( data ) );
```

Supplying request options: `init`:

```js
fetch( url, init );
```

```js
// Example POST method implementation:
async function postData( url = '', data = {} )
{
    // Default options are marked with *
    const response = await fetch( url, {
        method: 'POST',             // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',               // no-cors, *cors, same-origin
        cache: 'no-cache',          // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',             // manual, *follow, error
        referrerPolicy: 'no-referrer',  // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify( data )    // body data type must match "Content-Type" header
    } );

    return response.json(); // parses JSON response into native JavaScript objects
}

postData( 'https://example.com/answer', { answer: 42 } )
    .then( data => {
        console.log( data ); // JSON data parsed by `data.json()` call
    } );
```

Uploading JSON data:

```js
const data = { username: 'example' };

fetch( 'https://example.com/profile', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( data ),
    } )
    .then( response => response.json() )
    .then( data => {
        console.log( 'Success: ', data );
    } )
    .catch( ( error ) => {
        console.error( 'Error: ', error );
    } );
```

Uploading a file:

```html
<input type="file" />
```

```js
const formData = new FormData();
const fileField = document.querySelector( 'input[type="file"]' );

formData.append( 'username', 'abc123' );
formData.append( 'avatar', fileField.files[ 0 ] );

fetch( 'https://example.com/profile/avatar', {
    method: 'PUT',
    body: formData,
} )
.then( response => response.json() )
.then( result => {
    console.log( 'Success: ', result );
} )
.catch( error => {
    console.error( 'Error: ', error );
} );
```

Uploading multiple files:

```html
<input type="file" multiple />
```

```js
const formData = new FormData();
const photos = document.querySelector( 'input[type="file"][multiple]' );

formData.append( 'title', 'My Vegas Vacation' );

for ( let i = 0; i < photos.files.length; i++ )
{
    formData.append( `photos_${ i }`, photos.files[ i ] );
}

fetch( 'https://example.com/posts', {
    method: 'POST',
    body: formData,
} )
.then( response => response.json() )
.then( result => {
    console.log( 'Success: ', result );
} )
.catch( error => {
    console.error( 'Error: ', error );
} );
```

[Home][Home] - [Top][Index]

<!-------------------------------------------------------------------------
 !  Links
-------------------------------------------------------------------------->

[Home]:     ../README.md
[Index]:    #index
