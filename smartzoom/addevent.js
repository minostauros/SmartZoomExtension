document.querySelector( 'body' ).addEventListener( 'click', function( event ) {
	if(event.shiftKey) {
		event.preventDefault();
		zoom.to({ element: event.target });
	}
});