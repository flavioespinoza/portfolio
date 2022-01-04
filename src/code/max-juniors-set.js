// You are given a collection of person objects (in a natural manner for the
// language you're writing in) with three fields:

// {firstName, lastName, age} e.g. {Jane, Smith, 14}

// We want to know which family has the longest line of "juniors".
// A family has "juniors" when multiple family members have the same full name.

// Consider the following example.
const input = [
  { firstName: 'Betty', lastName: 'Doe', age: 32 },

  { firstName: 'John', lastName: 'Doe', age: 13 },
  { firstName: 'John', lastName: 'Doe', age: 13 },
  { firstName: 'John', lastName: 'Doe', age: 32 },
  { firstName: 'John', lastName: 'Doe', age: 32 },
  { firstName: 'John', lastName: 'Doe', age: 32 },
  { firstName: 'John', lastName: 'Doe', age: 32 },
  { firstName: 'John', lastName: 'Doe', age: 32 },

  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },

  { firstName: 'Betty', lastName: 'Doe', age: 32 },
  { firstName: 'Betty', lastName: 'Doe', age: 32 },
];
// In this example, the Doe family has the longest line of juniors.

// function concat first and last which constists of first and last name
// Set remove duplicates which will let me know all possible candidate names
// create array of items consisting of first and last names
// items = [`${first} ${last}`]
// iterate through set and for each possibility push obj onto results array

// return string ==> "lastName"

/**
 *
 * @param {array} array of people
 * @returns {string} lastName of juniors with max count
 */
function maxJuniors(arr) {
  let set = [];
  let maxVal = 0;
  let currentCount = 0;
  let maxCount = 0;
  let maxKey = 'not working';
  let keys = arr.map((obj) => `${obj.firstName} ${obj.lastName}`);
  let length = keys.length;
  let bettyDoe = 0;
  let johnDoe = 0;
  let flavioEspinoza = 0;
  console.log(keys);
  const map = {};
  new Set([...keys]).forEach((val, key) => {
    map[key] = 0;
    set.push(val);
  });
  console.log(map);
  let comparator = set.shift();
  console.log(set.length);
  console.log(comparator);
  console.log(keys.length);
  let toDelete = []
  for (let i = 0; i < keys.length; i++) {
    if (comparator === keys[i]) {
      maxCount++;
      toDelete.push(keys[i])
    }
  }
  keys = keys.filter((item) => !toDelete.includes(item));
  console.log(keys.length);
  
  for (let s = 0; s < set.length; s++) {
    let possible = set[s];
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === possible) {
        currentCount++
        if (currentCount > maxCount) {
          console.log(maxCount)
          console.log(currentCount)
          break;
        }
      }
    }
    
  }

  console.log(currentCount);

  console.log(maxCount);
  return maxKey;
}

maxJuniors(input);
