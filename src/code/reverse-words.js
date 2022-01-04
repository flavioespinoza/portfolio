function reverseWords(arr) {
  const sArr = arr.join('').split(' ').reverse();
  let str = '';
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== '') {
      str += sArr[i];
    } else {
      str += ' ';
    }
  }
  return str.split('');
}

let s = "  Bob    Loves  Alice   "
console.log(s.trim())

const arr = [
  'p',
  'e',
  'r',
  'f',
  'e',
  'c',
  't',
  '  ',
  'm',
  'a',
  'k',
  'e',
  's',
  '  ',
  'p',
  'r',
  'a',
  'c',
  't',
  'i',
  'c',
  'e',
];

const output = [
  'p',
  'r',
  'a',
  'c',
  't',
  'i',
  'c',
  'e',
  '  ',
  'm',
  'a',
  'k',
  'e',
  's',
  '  ',
  'p',
  'e',
  'r',
  'f',
  'e',
  'c',
  't',
];

console.log(reverseWords(arr));
/**
 * 
 * [ 
 *  'p', 
    'r', 
    'a', 
    'c', 
    't', 
    'i', 
    'c', 
    'e', 
    ' ', 
    'm', 
    'a', 
    'k', 
    'e', 
    's', 
    ' ', 
    'p', 
    'e', 
    'r', 
    'f', 
    'e', 
    'c', 
    't' 
  ]
 * */