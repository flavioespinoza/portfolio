/// [demo]

const btn = document.getElementsByClassName('btn-primary')[0];

btn.addEventListener('click', () => {
  Promise.resolve().then(() => {
    console.log('Microtask 1');
    console.log('-----------------------------------------')
  });
  console.log('Listener 1');
});

btn.addEventListener('click', () => {
  Promise.resolve().then(() => {
    console.log('Microtask 2');
    console.log('-----------------------------------------')
  });
  console.log('Listener 2');
});
/// [demo]


/// [userClick]
// => Listener 1
// => Microtask 1
// -----------------------------------------
// => Listener 2
// => Microtask 2
/// [userClick]


/// [javascriptClick]
btn.click();
// => Listener 1
// => Listener 2
// => Microtask 1
// -----------------------------------------
// => Microtask 2
/// [javascriptClick]





