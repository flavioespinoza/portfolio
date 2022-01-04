function cyclicRotation(arr, k) {
  const rotated = [];
  // The length of the arr does not change, 
  // therefore it is a constant.
  const arrLength = arr.length;
  if (arrLength === 1 || k === 0) return arr;
  for (let i = 0; i < arrLength; i++) {
    const newIndex = (i + k) % arrLength;
    rotated[newIndex] = arr[i];
  }
  return rotated;
}

console.log(cyclicRotation([0, 1, 2, 3, 4], 3)); // => [2, 3, 4, 0, 1]

const arr = [];
arr[3] = 0;
console.log(arr[0]); // => undefined
console.log(arr[1]); // => undefined
console.log(arr[2]); // => undefined
console.log(arr[3]); // => 0
console.log(arr); // => [ , , , 0]