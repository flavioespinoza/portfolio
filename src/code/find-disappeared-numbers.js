let input;
let expected;

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
  const res = [];
  const set = new Set([...nums])
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(i+1)) {
      res.push(i+1)
    }
  }
  return res;
}

input = [4,3,2,7,8,2,3,1]
expected = [5,6]
console.log(findDisappearedNumbers(input));

input = [1,1]
expected = [2]
console.log(findDisappearedNumbers(input));

input = [2,2]
expected = [1]
console.log(findDisappearedNumbers(input));

input = [1,2]
expected = []
console.log(findDisappearedNumbers(input));