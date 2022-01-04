// time O(n) | space O(n)
function mostFrequent(arr) {
  let mostFrequent = null;
  const frequency = {};
  frequency[mostFrequent] = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!frequency[arr[i]]) frequency[arr[i]] = 0;
    frequency[arr[i]]++;
    if (frequency[mostFrequent] < frequency[arr[i]]) {
      mostFrequent = arr[i];
    }
  }
  return mostFrequent;
}

console.log(mostFrequent([1, 3, 1, 3, 2, 1]));
console.log(mostFrequent([3, 3, 1, 3, 2, 1]));
console.log(mostFrequent([]));
console.log(mostFrequent([0]));
console.log(mostFrequent([0, -1, 10, 10, -1, 10, -1, -1, -1, 1]));