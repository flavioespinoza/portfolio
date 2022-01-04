// Binary Search
// define: `fixedPoint`: where the value at index i = i;
// example: 
// 1. Check if middle 
function indexEqualsValueSearch(arr) {
  // 2 pointers (left and right)
  let left = 0; // low <= high
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < mid) {
      left = mid + 1;
    } else if (arr[mid] === mid && (mid === 0 || arr[mid - 1] < mid - 1)) {
      return mid;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}




const inputs = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  [-8, 0, 2, 5],
  [-10, -5, 0, 3, 7],
  [-1, 0, 3, 6],
];

for (let i = 0; i < inputs.length; i++) {
  console.log(indexEqualsValueSearch(inputs[i])) 
  // 0, 2, 3, -1   
}

const worst = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 10];

console.log(indexEqualsValueSearch(worst)) 