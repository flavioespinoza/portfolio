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
  { firstName: 'Janet', lastName: 'Doe', age: 14 },
  { firstName: 'Jenny', lastName: 'Smith', age: 34 },
  { firstName: 'Jenny', lastName: 'Smith', age: 12 },
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
  const map = {};
  const temp = [];
  for (let i = 0; i < juniorsArr.length; i++) {
    let firstLast = `${juniorsArr[i].firstName} ${juniorsArr[i].lastName}`;
    temp.push(firstLast);
  }
  new Set([...temp]).forEach((item, i) => {
    map[item] = 0;
  });
  for (let i = 0; i < juniorsArr.length; i++) {
    let firstLast = `${juniorsArr[i].firstName} ${juniorsArr[i].lastName}`;
    map[firstLast]++;
  }
  let maxVal = 0;
  let maxKey = '';
  for (const [key, val] of Object.entries(map)) {
    if (val > maxVal) {
      maxVal = val;
      maxKey = key;
    }
  }
  return maxKey.split(' ')[1];
}

console.log(maxJuniors(input));
