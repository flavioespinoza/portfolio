// You are given a collection of person objects (in a natural manner for the
// language you're writing in) with three fields:

// {firstName, lastName, age} e.g. {Jane, Smith, 14}

// We want to know which family has the longest line of "juniors".
// A family has "juniors" when multiple family members have the same full name.

// Consider the following example.
const input = [
  { firstName: 'John', lastName: 'Doe', age: 13 },
  { firstName: 'John', lastName: 'Doe', age: 32 },
  { firstName: 'John', lastName: 'Doe', age: 62 },
  { firstName: 'John', lastName: 'Doe', age: 62 },
  { firstName: 'John', lastName: 'Doe', age: 62 },

  { firstName: 'Flavio', lastName: 'Espinoza', age: 14 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 14 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 14 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 14 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 14 },

  { firstName: 'Jenny', lastName: 'Smith', age: 34 },
  { firstName: 'Jenny', lastName: 'Smith', age: 12 },
  { firstName: 'Jenny', lastName: 'Smith', age: 12 },
  { firstName: 'Jenny', lastName: 'Smith', age: 12 },
  { firstName: 'Jenny', lastName: 'Smith', age: 12 },

  { firstName: 'Jenny', lastName: 'Doe', age: 34 },
  { firstName: 'Jenny', lastName: 'Doe', age: 12 },
];
// In this example, the Doe family has the longest line of juniors.

// function concat first and last which constists of first and last name
// Set remove duplicates which will let me know all possible candidate names
// results = [{ juniors: { name: first last, count: 0}}]
// iterate through set and for each possibility push obj onto results array

// return string ==> "lastName"

/**
 *
 * @param {array} array of people
 * @returns {string} lastName of juniors with max count
 */
function maxJuniors(juniorsArr) {
  const keys = juniorsArr.map((obj) => {
    return `${obj.firstName} ${obj.lastName}`
  })
  return maxString(keys).split(' ')[1];
}

/**
 * @fix : does not consider frequency of a tie for max frequency
 * @param {array} Array of strings
 * @returns {string} The string with the max frequency
 * @example 
 * const input = ['pear', 'apple', 'orange', 'apple', 'pear']
 * console.log(maxString(input))
 * // => pear (should be apple and pear)
 * */
function maxString(arr) {
  return arr
    .sort((a, b) => arr.filter((v) => v === a).length - arr.filter((v) => v === b).length)
    .pop();
}

// @fix : does not consider frequency of a tie for max frequency
const fruits = ['pear', 'apple', 'orange', 'apple', 'pear']
console.log(maxString(fruits))


console.log(maxJuniors(input));
