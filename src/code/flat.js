function collapse(arrayOfArrays, cb) {
  // write your code in JavaScript
  // strategy
  /** 
   * @param {array[]} array
   * @param {reducer} function
   * @returns {array} array 

   */

  arrayOfArrays.reduce(function(accumulator, currentValue, currentIndex, array) {
   
      console.log(accumulator) // [] 
      console.log(currentValue)
      console.log(currentIndex)
      console.log(array)
      
  }, [])

}

function add(a, b) {
  return a + b;
}
console.log(collapse([[1,1],[1,1]]), add)