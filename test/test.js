/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	toJSON = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'dstructs-typed-array-to-json', function tests() {

	it( 'should export a function', function test() {
		expect( toJSON ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided a typed array', function test() {
		var values, i;

		values = [
			'5',
			5,
			NaN,
			true,
			null,
			undefined,
			[],
			{},
			function(){}
		];

		for ( i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function badValue() {
				toJSON( value );
			};
		}
	});

	it( 'should return a JSON representation of a typed array', function test() {
		var expected,
			actual;

		// Empty array:
		expected = {
			'type': 'Float64Array',
			'data': []
		};
		actual = toJSON( new Float64Array() );

		assert.deepEqual( actual, expected, 'empty array' );

		// Filled array:
		expected = {
			'type': 'Int32Array',
			'data': [1,3,5,7]
		};
		actual = toJSON( new Int32Array( [1,3,5,7] ) );

		assert.deepEqual( actual, expected, 'filled array' );
	});

});
