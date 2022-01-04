// You are given a collection of person objects (in a natural manner for the
// language you're writing in) with three fields:

// {firstName, lastName, age} e.g. {Jane, Smith, 14}

// We want to know which family has the longest line of "juniors".
// A family has "juniors" when multiple family members have the same full name.

// Consider the following example.
const input = [
  { firstName: 'Ren', lastName: 'Dog', age: 12 },
  { firstName: 'Ren', lastName: 'Dog', age: 12 },
  { firstName: 'Ren', lastName: 'Dog', age: 12 },

  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },

  { firstName: 'Stimpy', lastName: 'Cat', age: 12 },

  { firstName: 'John', lastName: 'Doe', age: 13 },
  { firstName: 'John', lastName: 'Doe', age: 13 },
  { firstName: 'John', lastName: 'Doe', age: 32 },
  { firstName: 'John', lastName: 'Doe', age: 32 },
  { firstName: 'John', lastName: 'Doe', age: 32 },

  { firstName: 'Betty', lastName: 'Doe', age: 32 },
];

/**
 * Max Juniors
 * @param {array} Array of objects.
 * @param {array} Array of properties to compare and must match. @todo add
 * @returns {string} The family name with the max frequency of juniors.
 */
function maxJuniors(arr, props) {
  if (!Array.isArray(arr)) {
    throw new Error(`first argument must be an Array`);
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // @todo : create key from strings in props array.
    // Example : props = ['firstName', 'lastName']
    const key = `${arr[i].firstName} ${arr[i].lastName}`;
    const idx = result.findIndex((obj) => {
      return obj.key === key;
    });
    if (idx === -1) {
      result.push({
        key: key,
        value: 1,
      });
    } else {
      result[idx].value++;
    }
  }
  result.sort((a, b) => {
    return b.value - a.value;
  });
  if (result[0].value === result[1].value) {
    // If 2 items have the same frequency return message below.
    return `There was a tie between 2 or more items in the array.`;
  }
  return result[0].key.split(' ')[1];
}
console.log(maxJuniors(input, ['firstName', 'lastName']));
