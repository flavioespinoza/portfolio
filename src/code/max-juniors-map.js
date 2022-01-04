// You are given a collection of person objects (in a natural manner for the
// language you're writing in) with three fields:

// {firstName, lastName, age} e.g. {Jane, Smith, 14}

// We want to know which family has the longest line of "juniors".
// A family has "juniors" when multiple family members have the same full name.

// Consider the following example.
const input = [
  { firstName: 'Ren', lastName: 'Dog', age: 23 },
  { firstName: 'Ren', lastName: 'Dog', age: 12 },
  { firstName: 'Ren', lastName: 'Dog', age: 33 },

  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },

  { firstName: 'Stimpy', lastName: 'Cat', age: 12 },
  { firstName: 'Stimpy', lastName: 'Cat', age: 12 },
  { firstName: 'Stimpy', lastName: 'Cat', age: 12 },

  { firstName: 'John', lastName: 'Doe', age: 13 },
  { firstName: 'John', lastName: 'Doe', age: 13 },
  { firstName: 'John', lastName: 'Doe', age: 32 },
  { firstName: 'John', lastName: 'Doe', age: 32 },
  { firstName: 'John', lastName: 'Doe', age: 32 },
  { firstName: 'John', lastName: 'Doe', age: 32 },

  { firstName: 'Betty', lastName: 'Doe', age: 32 },
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
function maxJuniors_1(arr) {
  const map = {};
  arr.forEach((val) => {
    const key = `${val.firstName} ${val.lastName}`;
    if (!map[key]) {
      map[key] = 1;
    } else {
      map[key]++;
    }
  });
  const result = Object.entries(map).map((val, key) => {
    return { name: (val[0]).split(' ')[1], count: val[1]}
  }).sort((a, b) => {
    return b.count - a.count;
  });
  if (result[0].count === result[1].count) {
    return `There was a tie between ${result[0].name} & ${result[1].name}`
  }
  return result[0].name;
}


function maxJuniors_2(array) {
  const store = [];
  for (let i = 0; i < array.length; i++) {
    const index = store.findIndex((item) => item.fullName === `${array[i].firstName} ${array[i].lastName}`)
    if (index === -1) {
      store.push({
        fullName: `${array[i].firstName} ${array[i].lastName}`,
        lastName: array[i].lastName,
        count: 1,
      })
    } else {
      store[index].count++;
    }
  }
  return store.find((obj) => obj.count === Math.max.apply(Math, store.map((obj) => obj.count))).lastName;
}


function maxJuniors(array) {
  const store = {};
  let hasMaxJuniors = '';
  store[hasMaxJuniors] = 0;
  for (let i = 0; i < array.length; i++) {
    const fullName = `${array[i].firstName} ${array[i].lastName}`;
    if (!store[fullName]) {
      store[fullName] = 1;
    } else {
      store[fullName]++;
    }
    if (store[fullName] > store[hasMaxJuniors]) {
      hasMaxJuniors = fullName
    }
  }
  return hasMaxJuniors.split(' ')[1];
}

console.log(maxJuniors(input));
