function binarySearchMinFixedPoint(arr) {
  let res = -1;
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let i = Math.floor((low + high) / 2);
    console.log(i);
    console.log(low);
    console.log(high);
    if (arr[i] < i) {
      console.log(arr[i]);
      console.log(i);
      console.log('go right');
      low = i + 1;
      console.log(low);
      console.log(high);
    } else if (arr[i] === i && (i === 0 || arr[i - 1] < i - 1)) {
      console.log(arr[i]);
      console.log(i);
      console.log(arr[i] === i);
      // and
      console.log(i === 0);
      // or
      console.log(arr[i - 1]);
      console.log(i - 1);
      console.log(arr[i - 1] < i - 1);
      return i;
    } else {
      console.log('go left');
      high = i - 1;
    }
  }

  return res;
}

let input = Array(20)
  .fill()
  .map((x, i) => {
    return i;
  });
input.push(20);
// input.sort((a, b) => {
//   return a - b;
// });
console.log(input);

let first = [0, 1, 2, 3, 4, 5];
let last = [
  -20,
  -19,
  -18,
  -17,
  -16,
  -15,
  -14,
  -13,
  -12,
  -11,
  -10,
  -9,
  -8,
  -7,
  -6,
  -5,
  -4,
  14,
  18,
  19,
  20,
];
let other = [-1, 0, 1, 2, 4, 5];
let none = [-1, 0, 1, 5, 6, 7];

console.log(binarySearchMinFixedPoint(last));
