'use strict';

console.log('hello ninja');

const firstButton = document.getElementById('firstButton');

const secondButton = document.getElementById('secondButton');

firstButton.addEventListener('click', function firstHandler() {
  /*Some click handle code that runs for 8 ms*/
});

secondButton.addEventListener('click', function secondHandler() {
  /*Click handle code that runs for 5ms*/
});
