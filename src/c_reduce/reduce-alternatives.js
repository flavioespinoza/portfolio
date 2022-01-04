let length = 10;
const arr = Array(length)
  .fill()
  .map((item, i) => {
    return i;
  });
arr.push(length);

console.log(arr);

const max = Math.max(...arr);
console.log(max);

/**
 * @param {arr} Array of positive integers
 * */

const _arr = [...arr];
const stuff = _arr.reduce((prevVal, currVal) => {
  console.log(prevVal);
  console.log(currVal);
  let res = add(Number(prevVal), Number(currVal));
  console.log(res);
  return res;
});

function reduceMath(arr, cb) {
  return arr.reduce((currVal, prevVal) => {
    return cb(Number(currVal), Number(prevVal));
  });
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function modulus(a, b) {
  return a % b;
}

console.log(stuff);
console.log(reduceMath(_arr, add));
console.log(reduceMath(_arr, subtract));
console.log(reduceMath(_arr, multiply));
console.log(reduceMath(_arr, divide));
console.log(reduceMath(_arr, modulus));

/**
 * @description Convert array of relative growth numbers to an array of absolute ones
 * @example
 * const arr = [1, 2, 3, 1];
 * const res = [1, 3, 6, 7];
 *
 * 1
 * 2 + 1 = 3
 * 3 + 3 = 6
 * 1 + 6 = 7
 * */
let x = [1, 2, 3, 1];
function relativeToAbsolute(input) {
  // @fix : figure this out
  return input;
}
console.log(relativeToAbsolute(x));

/**
 * @description Create graph (i.e. map) from edges
 * */

const edges = new Map();
edges.set('a', 'b');
edges.set('b', 'c');
edges.set('c', 'd');
edges.set('d', 'e');
console.log(edges);
const g = new Map();
for (const [u, v] of edges) {
  if (!g.has(u)) g.set(u, []);
  if (!g.has(v)) g.set(v, []);
  g.get(u).push(v);
}
console.log(g);

/**
 * @description Flatten an array
 * */
const flatArr = [];
const arrArr = [
  [2, 2],
  [3, 3],
];
for (const elem of arrArr) {  
  if (Array.isArray(elem)) {
    flatArr.push(...elem);
  } else {
    flatArr.push(elem);
  }
}
console.log(flatArr);

/**
 * @description Create graph (i.e. map) from edges
 * */