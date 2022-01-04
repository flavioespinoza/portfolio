function Solution() {
  return {
    sortColors_0: (colors) => {
      return colors.sort((a, b) => a - b);
    },
    sortColors_1: (colors) => {
      const counter = new Array(colors.length).fill(0);
      for (let n of colors) {
        counter[n]++;
      }
      let j = 0;
      for (let i = 0; i < colors.length; i++) {
        while (!counter[j]) {
          j++;
        }
        counter[j]--;
        colors[i] = j;
      }
      return colors;
    },
  };
}

// const colors_0 = [8, 2, 0, 3, 1, 1, 0, 8];
// const result_0 = Solution().sortColors_0(colors_0);
// console.log(result_0);

function sortColors(colors) {
  const counter = new Array(colors.length).fill(0);
  for (let n of colors) {
    counter[n]++;
  }
  let j = 0;
  for (let i = 0; i < colors.length; i++) {
    while (!counter[j]) {
      console.log(j)
      j++;
    }
    counter[j]--;
    colors[i] = j;
  }
  return colors;
}

function sortColors(nums) {
  let n = nums.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = nums[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < nums[j]) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = current;
  }
  return nums;
};


const nums = [2, 0, 2, 1, 1, 0];
function _sortColors(nums) {
  return nums.sort(nums)
}
console.log((_sortColors(nums)))
// const colors_2 = [7, 2, 0, 2, 1, 1, 0];
// const result_2 = sortColors(colors_2);
// console.log(result_2); // => stack overflow

