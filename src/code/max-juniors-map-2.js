// You are given a collection of person objects (in a natural manner for the
// language you're writing in) with three fields:

// {firstName, lastName, age} e.g. {Jane, Smith, 14}

// We want to know which family has the longest line of "juniors".
// A family has "juniors" when multiple family members have the same full name.

// Consider the following example.
const input = [
  { firstName: 'John', lastName: 'Doe', age: 13 },
  { firstName: 'John', lastName: 'Doe', age: 13 },
  { firstName: 'John', lastName: 'Doe', age: 32 },
  { firstName: 'Janet', lastName: 'Doe', age: 14 },
  { firstName: 'Jenny', lastName: 'Smith', age: 34 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
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
function maxJuniors(arr) {
  let maxVal = 0;
  let maxKey = '';
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const key = `${arr[i].firstName} ${arr[i].lastName}`;
    if (!map[key]) {
      map[key] = 1;
    } else {
      map[key]++;
    }
  }
  Object.entries(map).forEach(([key, val]) => {
    if (val > maxVal) {
      maxVal = val;
      maxKey = key.split(' ')[1];
    }
  });
  return maxKey;
}

console.log(maxJuniors(input));
