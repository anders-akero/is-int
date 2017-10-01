is-int [![Build Status](https://travis-ci.org/RivalNick/is-int.svg?branch=master)](https://travis-ci.org/RivalNick/is-int)
============================================================

> Check if a variable is an integer.

## Install
```bash
npm install is-int
```

## Usage
```javascript
var isInt = require('is-int');

isInt(1);	// => true

isInt(1.1);	// => false

isInt('1');	// => false

isInt('foo');	// => false
```

## Test
```bash
npm install
npm test
```

## Author
Nicky Laczko

## License
MIT