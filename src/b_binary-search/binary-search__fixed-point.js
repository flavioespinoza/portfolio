/**
 * Binary Search
 * @memberof timeComplexity O(log n)
 * @param {array} arr A sorted array of negative and positive integers.
 * @param {number} low Index to start at. Usually 0
 * @param {number} n A number to search for
 * @description First check whether middle element is Fixed Point or not.
 *    If it is, then return it; otherwise check whether index of middle element is
 *    greater than value at the index. If index is greater, then Fixed Point(s)
 *    lies on the right side of the middle point (obviously only if there is a Fixed Point).
 *    Else the Fixed Point(s) lies on left side.
 * */
function binarySearch(arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let i = Math.floor((low + high) / 2);
    // if the value of the array at the index isLessThan the index
    // the value of `low` becomes (index + 1)
    if (arr[i] < i) {
      low = i + 1;
    } 
    // else if the value of the array at the index isEqualTo the index 
    // and one of these 2 conditions are true
    // c1. (the index = 0)
    // c2. (the array at [index - 1] isLessThan the value of (index - 1))
    // return the index
    else if (arr[i] === i && (i === 0 || arr[i - 1] < i - 1)) {
      return i;
    } 
    // else the value of `high` becomes (index - 1)
    else {
      high = i - 1;
    }
  }
  return -1;
}

// Tests
const inputs = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // 0 every value is fixed point.
  [-11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 11], // 11 worst case
  [-8, 0, 2, 5], // 2
  [-10, -5, 0, 3, 7], // 3
  [-1, 0, 3, 6], // -1
  [-10, -1, 0, 3, 10, 11, 30, 50, 100], // 3
];

for (let i = 0; i < inputs.length; i++) {
  console.log(binarySearch(inputs[i]));
  // 0, 2, 3, -1, 3
}

const last = [ -5, -4, -3, -2, -1, 5 ];
console.log(binarySearch(last)); // 5

console.log([-1, -2, -3, -4, -5, 5].sort((a, b) => a - b))
