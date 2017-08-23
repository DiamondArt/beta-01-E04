## Aborded notions

## TEST
#### test `isArray`
export the function `isArray` that should return true if the given value is
a an array

#### test `argsToArray3`
export the function `argsToArray3` that takes 3 arguments and return an array of
the 3 given values

#### test `first`
export the function `first` that takes an array and return the first value

#### test `last`
export the function `last` that takes an array and return the last value

#### test `each`
export the function `each` that similarly to
[`Array.prototype.forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
**but** you don't have to handle the `this` argument and you should iterate over
empty elements and uses an additional last argument which is the array to
iterate over:
```js
const arr = [ 1, 2, 3 ]

// Were we would use the method like so :
arr.forEach(console.log)

// We should be able to use your functions as such :
each(console.log, arr)
```

#### test `filter`
Sames as `each` but for
[`Array.prototype.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

#### test `map`
Sames as `each` but for
[`Array.prototype.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

#### test `reduce`
Sames as `each` but for
[`Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
