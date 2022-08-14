![NPM](https://img.shields.io/npm/l/typuv)
![NPM](https://img.shields.io/npm/v/typuv)
![GitHub Workflow Status](https://github.com/johnstonmatt/typuv/actions/workflows/typuv.yml/badge.svg?branch=main)

### typuv

```js
import typuv from "typuv";

const typeOfNull = typuv(null);
console.log(typeOfNull); // 'null'

const typeOfArray = typuv([]);
console.log(typeOfArray); // 'array'

// instead of

const unpredictableTypeOfNull = typeof null;
console.log(unpredictableTypeOfNull); // 'object'

const unpredictableTypeOfArray = typeof [];
console.log(unpredictableTypeOfArray); // 'object'
```

This package is silly and you shouldn't use it, but if you do: it is reliable
and has no dependencies.
