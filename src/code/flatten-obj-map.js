const details = {
  name: 'John',
  age: 20,
  salary: 70000,
  location: {
    city: 'Austin',
    state: 'TX',
    geo: {
      lat: 34.223,
      long: 54.54,
    },
  },
};

// {
//   name: 'John',
//   age: 20,
//   salary: 70000,
//   city: 'Austin',
//   state: 'TX',
//   lat: 34.223,
//   long: 54.54
// }

function flatMap(obj) {
  const map = new Set(obj)
  console.log(map)
}

console.log(flatMap(details))