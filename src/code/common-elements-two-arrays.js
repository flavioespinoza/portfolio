const A = [1, 3, 4, 6, 7, 9];
const B = [1, 2, 4, 5, 9, 10];

// create an empty array called “common”

// concat A & B into single array called “elements”
// [1,1,2,3,4,4,5,6,7,9,9,10]

// create a dictionary called “seen” using Set

// for const “digit” of “elements”

// check if “seen” does not have “digit”
// if true “seen” add “digit”
// else
// push “digit” onto “common”

// return common

function commonElements(A, B) {
  const common = [];
  const elements = [...A, ...B];
  const seen = new Set();
  for (const digit of elements) {
    if (!seen.has(digit)) {
      seen.add(digit);
    } else {
      common.push(digit);
    }
  }
  return common;
}

function commonElementsPointers(A, B) {
  let p1 = 0;
  let p2 = 0;
  const result = [];
  while (p1 < A.length && p2 < B.length) {
    if (A[p1] === B[p2]) {
      result.push(A[p1]);
      p1++;
      p2++;
    } else if (A[p1] > B[p2]) {
      p2++;
    } else {
      p1++;
    }
  }
  return result;
}

const array1A = [1, 3, 4, 6, 7, 9];
const array2A = [1, 2, 4, 5, 9, 10];
// commonElements(array1A, array2A) should return [1, 4, 9] (an array).
console.log(commonElements(array1A, array2A));

const array1B = [1, 2, 9, 10, 11, 12];
const array2B = [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 15];
// commonElements(array1B, array2B) should return [1, 2, 9, 10, 12] (an array).
console.log(commonElements(array1B, array2B));

const array1C = [0, 1, 2, 3, 4, 5];
const array2C = [6, 7, 8, 9, 10, 11];
// common_elements(array1C, array2C) should return [] (an empty array).
console.log(commonElements(array1C, array2C));
