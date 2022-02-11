const displayedImage = document.querySelector( '.displayed-img' );
const thumbBar = document.querySelector( '.thumb-bar' );

const btn = document.querySelector( 'button' );
const overlay = document.querySelector( '.overlay' );

/* Declaring the array of image filenames */

const images = [ 'pic1.jpg',
				 'pic2.jpg',
				 'pic3.jpg',
				 'pic4.jpg',
				 'pic5.jpg', ]

/* Looping through images */

for ( const image of images )
{
	const newImage = document.createElement( 'img' );
	newImage.setAttribute( 'src', `images/${ image }` );
	thumbBar.appendChild( newImage );
}

thumbBar.addEventListener( 'click', ( e ) => {
	const newSrc = e.target.getAttribute( 'src' );
	displayedImage.setAttribute( 'src', newSrc );
} );

/* Wiring up the Darken/Lighten button */

btn.addEventListener( 'click', ( e ) => {
	const state = e.target.getAttribute( 'class' );

	if ( state === 'dark' )
	{
		e.target.textContent = 'Lighten';
		e.target.setAttribute( 'class', 'light' );
		overlay.style.backgroundColor = 'rgba( 0, 0, 0, 0.5 )';
	}
	else if ( state === 'light' )
	{
		e.target.textContent = 'Darken';
		e.target.setAttribute( 'class', 'dark' );
		overlay.style.backgroundColor = 'rgba( 0, 0, 0, 0 )';
	}
} );
