[![Coverage Status](https://coveralls.io/repos/github/johnstonmatt/current-type-of/badge.svg?branch=master)](https://coveralls.io/github/johnstonmatt/current-type-of?branch=master)
[![Build Status](https://travis-ci.org/johnstonmatt/current-type-of.svg?branch=master)](https://travis-ci.org/johnstonmatt/current-type-of)
[![npm](https://img.shields.io/npm/v/current-type-of.svg)](https://npmjs.com/package/current-type-of)

### typuv
```js
import typuv from 'typuv'

const typeOfNull = typuv(null);
console.log(typeOfNull); // 'null'

const typeOfArray = typuv([]);
console.log(typeOfArray); // 'array'

// instead of

const unpredictableTypeOfNull = typeof null;
console.log(unpredictableTypeOfNull) // 'object'


const unpredictableTypeOfArray = typeof [];
console.log(unpredictableTypeOfArray) // 'object'
```

This package is silly and you shouldn't use it, but if you do: it is reliable and has no dependencies.
