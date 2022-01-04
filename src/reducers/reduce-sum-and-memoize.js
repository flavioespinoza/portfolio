// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function memoize(sum) {
  // write your code in JavaScript
  // cache

  // function(n) 
  // checks if n is in cache
  // return value of cache[n]
  
  
  // else
  // let result = sum(iput)
  // cache[n] = result
  // return result


  let cache = {};
  return (...n) => {
      if (n in cache) {
          console.log('fetching from cache')
          return cache[n];
      } else {
          console.log('calculating and storing result')
          
          let result = sum(...n)
          cache[n] = result; 
          return result
      }
  } 
};

// Please do not touch anything below
// Here is the 'sum' function that the above 'memoize' function will use

function sum() {
return Object.values(arguments).reduce((a, b) => a + parseInt(b), 0);
}







































// Please ignore below - this is the array and text output generator

let sumCallCount;
function solution(numberOfArguments, numberOfCalls) {
  const outputText = [];
  const input = new Array(numberOfArguments).fill().map((x,i) => (i+1)*123);
  const directResult = sum.apply(null, input);

  console.log(`Given the input of memoizedSum(${input}) called ${numberOfCalls} time(s)`);

  let memoizedSum = memoize(sum);

  // calling the same arguments ${numberOfCalls} times
  sumCallCount = 0;
  for (let i = 0; i < numberOfCalls; i++) {
      memoizedResult = memoizedSum.apply(null, input);
  }
  console.log(`${numberOfArguments} argument(s) called ${numberOfCalls} time(s): ${sumCallCount} 'sum' call(s) (${sumCallCount === 1 ? 'good' : 'fail'})`);
  outputText.push(`Same call: (${sumCallCount === 1 ? 'good' : 'fail'})`);
  console.log(`direct/memo result: ${directResult}/${memoizedResult} (${directResult === memoizedResult ? 'good' : 'fail'})`);
  outputText.push(`Result: (${directResult === memoizedResult ? 'good' : 'fail'})`);

  // if more than one argument supplied, make a successive call for each argument
  if (numberOfArguments > 1) {
      sumCallCount = 0;
      for (let i = 0; i < numberOfArguments; ++i) {
          memoizedSum.apply(null, input.slice(0,i));
      }
      console.log(`${numberOfArguments} different calls: ${sumCallCount} 'sum' calls (${sumCallCount === numberOfArguments ? 'good' : 'fail'})`);
      outputText.push(`Multiple calls: (${sumCallCount === numberOfArguments ? 'good' : 'fail'})`);
  }

  return outputText;
}