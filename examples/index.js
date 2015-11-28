'use strict';

var toJSON = require( './../lib' );

var data = new Int8Array( 10 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = i;
}

var json = toJSON( data );
console.log( json );
/*
	{
		"type": "Int8Array",
		"data": [0,1,2,3,4,5,6,7,8,9]
	}
*/
