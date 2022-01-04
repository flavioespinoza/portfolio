# Unique by Set

```js
/**
 * uniqueBySet
 *
 * Use Set and Map to create a new Array without duplicates
 * - Preserves JavaScript Objects with prop functions
 * - Works on mixed arrays [Object, Array, Number, String]
 * - Works on JSON
 *
 * @param originalArray Array you want to remove duplicates from
 *
 * @returns Array with no duplicates
 *
 * @example
 *
 * const uniqueBySet = require('unique-by-set')
 *
 * console.log(uniqueBySet(['a', 'b', 'c', 'c', 'd', 'd', 'a']))
 * => [ 'a', 'b', 'c', 'd' ]
 * */
module.exports.uniqueBySet = function(originalArray) {
  if (!Array.isArray(originalArray)) {
    throw new Error(`first argument must be an Array`)
  }
  const result = []
  const myMap = originalArray.map((obj) => {
    if (typeof obj !== 'string') {
      return JSON.stringify(obj)
    }
    return obj
  })
  new Set(myMap).forEach((s) => {
    let index = myMap.indexOf(s)
    result.push(originalArray[index])
  })
  return result
}

```
