/// [demo]
let x = 0;

async function add() {
  // x = x + await 1;
  // or
  // x = 0 + Promise.resolve(1);
  x += await 1
  console.log(x);
}

add()
x += 1;
console.log(x);

// => 1
// => 1
/// [demo]