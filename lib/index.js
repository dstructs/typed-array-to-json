'use strict';

// MODULES //

var isTypedArray = require( 'validate.io-typed-array' ),
	typeName = require( 'type-name' ),
	cast = require( 'dstructs-cast-arrays' );


// TOJSON //

/**
* FUNCTION: toJSON( arr )
*	Returns a JSON representation of a typed array.
*
* @param {Int8Array|Uint8Array|Unit8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} arr - input typed array
* @returns {Object} JSON representation
*/
function toJSON( arr ) {
	var out;
	if ( !isTypedArray( arr ) ) {
		throw new TypeError( 'invalid input argument. Must provided a typed array. Value: `' + arr + '`.' );
	}
	// Build a JSON object representing a typed array (similar to how Buffer objects are represented: https://nodejs.org/api/buffer.html#buffer_buf_tojson)
	out = {};

	// Set the type to the constructor name:
	out.type = typeName( arr );

	// Convert the typed array to a generic array:
	out.data = cast( arr, 'generic' );

	return out;
} // end FUNCTION toJSON()


// EXPORTS //

module.exports = toJSON;
