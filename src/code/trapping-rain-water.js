/**
 * @module LeetCode
 * */

/**
 * Trapping Rain Water
 * @name trap
 * @description Two Pointer Solution - Preferred
 * @url https://leetcode.com/problems/trapping-rain-water/
 * 
 * @param {array[number]} height
 * @return {number}
 */
function trap(height) {
  let result = 0;
  let L = 0;
  let R = height.length - 1;
  let current;
  while (L < R) {
    if (height[L] <= height[R]) {
      current = height[L];
      while (height[++L] < current) {
        result += current - height[L];
        console.log(`result[L|${L}]:  `, result);
      }
    } else {
      current = height[R];
      while (height[--R] < current) {
        result += current - height[R];
        console.log(`result[R|${R}]:  `, result);
      }
    }
  }
  return result;
}

/**
 * @class module:Solution
 */
class Solution {
  trap = trap
}

let input = [4, 2, 1, 8, 4, 2, 4];
let expected = 7;

let solution = new Solution();
console.log(solution.trap(input)); // => 7