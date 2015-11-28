toJSON
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Returns a [JSON][json] representation of a [typed array][typed-array].


## Installation

``` bash
$ npm install dstructs-typed-array-to-json
```


## Usage

``` javascript
var toJSON = require( 'dstructs-typed-array-to-json' );
```

#### toJSON( arr )

Returns a [JSON][json] representation of a [typed array][typed-array].

``` javascript
var json = toJSON( new Float64Array( [1,2,3,4] ) );
/*
  {
    "type": "Float64Array",
    "data": [1,2,3,4]
  }
*/
```


## Examples

``` javascript
var toJSON = require( 'dstructs-typed-array-to-json' );

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha][mocha] test framework with [Chai][chai] assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The Compute.io Authors.


[npm-image]: http://img.shields.io/npm/v/dstructs-typed-array-to-json.svg
[npm-url]: https://npmjs.org/package/dstructs-typed-array-to-json

[travis-image]: http://img.shields.io/travis/dstructs/typed-array-to-json/master.svg
[travis-url]: https://travis-ci.org/dstructs/typed-array-to-json

[codecov-image]: https://img.shields.io/codecov/c/github/dstructs/typed-array-to-json/master.svg
[codecov-url]: https://codecov.io/github/dstructs/typed-array-to-json?branch=master

[dependencies-image]: http://img.shields.io/david/dstructs/typed-array-to-json.svg
[dependencies-url]: https://david-dm.org/dstructs/typed-array-to-json

[dev-dependencies-image]: http://img.shields.io/david/dev/dstructs/typed-array-to-json.svg
[dev-dependencies-url]: https://david-dm.org/dev/dstructs/typed-array-to-json

[github-issues-image]: http://img.shields.io/github/issues/dstructs/typed-array-to-json.svg
[github-issues-url]: https://github.com/dstructs/typed-array-to-json/issues

[mocha]: http://mochajs.org/
[chai]: http://chaijs.com
[istanbul]: https://github.com/gotwarlost/istanbul

[typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
[json]: http://www.json.org/
