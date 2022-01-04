function pancakeSort(arr) {
  // your code goes here
  // [1, 5, 4, 3, 2]
  // find index of k which is the largest val in arr
  for (let i = arr.length - 1; i >=0; i--) {
    // find index of max element
    let maxi = findMax(arr, i);
    // if max element is not last elem in array
    // move the max element to end of current array
    if (maxi !== i - 1) {
      // move max elem to begining
      flip(arr, maxi)
      
      // move max elem to end by reversing current array
      flip(arr, i - 1)
    }
  }

  flip(arr)
  
  return arr;

}

function flip(arr, i) {
  let start = 0;
  // start point 
  // reverse array from 0,,,i 
  let temp; // temp array
  // while start is less than i
  // do stuff
  // iterate backwards i--
  while (start < i) {
    temp = arr[start];
    arr[start] = arr[i];
    arr[i] = temp;
    start++
    i--
  }
  return arr;
}

function findMax(arr, n) {
  let mi;
  let i;
  for (mi = 0, i = 1; i <= n; i++) {
    if (arr[i] > arr[mi]) {
      mi = i
    }
  }
  return mi
}

console.log(pancakeSort([1,5,4,3,2]));