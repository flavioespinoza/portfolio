
/**
 * @param {number[]} height
 * @return {number}
 */
function trapString(heights) {
  let count = 0;
  const map = {};
  const max = Math.max(...heights);
  let currHeight = max;
  for (let i = 0; i < max; i++) {
    map[currHeight] = '';
    for (const h of heights) {
      if (h < currHeight) {
        map[currHeight] += ' ';
      } else {
        map[currHeight] += 'brick';
      }
    }
    currHeight--;
  }
  for (const [key, str] of Object.entries(map)) {
    const replace = str.trim().replace(/\s/g, '*');
    for (let char of replace) {
      console.log(char);
      if (char === '*') {
        count++;
      }
    }
  }
  return count;
}

function trapBruteForce(height) {
  if (!height.length && height.length < 3) return 0;

  let ans = 0;
  let size = height.length;
  const left_max = [];
  const right_max = [];

  // find left_max
  left_max[0] = height[0];
  for (let i = 1; i < size; i++) {
    left_max[i] = Math.max(height[i], left_max[i - 1]);
  }

  // find right_max
  right_max[size - 1] = height[size - 1];
  for (let i = size - 2; i >= 0; i--) {
    right_max[i] = Math.max(height[i], right_max[i + 1]);
  }

  // += min of (left_max, right_max) minus height
  for (let i = 1; i < size - 1; i++) {
    let min = Math.min(left_max[i], right_max[i]) - height[i];
    console.log(min);
    ans += min;
  }

  return ans;
}

/**
 * Trap Two Pointers
 * @param {array[number]} height
 * @return {number}
 */
function trapTwoPointers(height) {
  let result = 0;
  let start = 0;
  let end = height.length - 1;
  let current;
  while (start < end) {
    if (height[start] <= height[end]) {
      current = height[start];
      while (height[++start] < current) {
        result += current - height[start];
        console.log(`result[start|${start}]:`, result);
      }
    } else {
      current = height[end];
      while (height[--end] < current) {
        result += current - height[end];
        console.log(`   result[end|${end}]:`, result);
      }
    }
  }
  return result;
}

let index = [0, 1, 2, 3, 4, 5, 6];
let input = [4, 2, 1, 8, 1, 2, 4];
let expected = 10;

console.log(trapTwoPointers(input));
