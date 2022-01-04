const details = {
  name: 'John',
  age: 20,
  salary: 70000,
  homeAddress: {
    city: 'Austin',
    state: 'TX',
    geo: {
      lat: 34.223,
      long: 54.54,
    },
  },
  billingAddress: {
    city: 'Salt Lake City',
    state: 'UT',
    geo: {
      lat: 39.223,
      long: 53.54,
    },
  }
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


function flat(obj) {
  const result = {};
  for (const prop in obj) {
    // check if prop type is object
    let typeObj = typeof obj[prop] === 'object';
    if (typeObj) {
      // if true call flat recursively with obj key of prop
      const temp = flat(obj[prop]);
      for (const prop2 in temp) {
        result[prop2] = temp[prop2];
      }
    } else {
      result[prop] = obj[prop];
    }
  }
  return result;
}
// are you there?
// let me know once you are done
// Great!!
// Thanks Flavio, Gopi will connect with you after this
// Done

// Thank you!
// And, extend my thanks to Gilles, Ravi, Amit, and Marhaf -  Sure
console.log(flat(details));

/** 
   * 
    { 
      name: 'John',
      age: 20,
      salary: 70000,
      city: 'Austin',
      state: 'TX',
      lat: 34.223,
      long: 54.54 
    }
   */
