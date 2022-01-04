function sumOfDigits(value) {
  let sum = 0;
  while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
  }
  return sum;
}

function solution(arr) {
  let max = -1;
  const lookup = {};
  for (let n of arr) {
    let sum = sumOfDigits(n);
    if (sum in lookup) {
      let cmax = n + lookup[sum];
      if (cmax > max) {
        max = cmax;
      }
    } else {
      lookup[sum] = n;
    }
  }
  return max;
}

let a = solution([51, 32, 43]);
console.log(a);
