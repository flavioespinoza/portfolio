/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function (beginWord, endWord, wordList) {
  let len = 0;
  let path = `${beginWord} ➔`;
  let que = [beginWord];

  const dict = new Set(wordList);
  const seen = new Set(que);

  const available = Array.from(new Set(wordList.join(''))); // [ h o t d l g c ]

  while (que.length > 0) {
    const next = [];
    for (let word of que) {
      console.log(word)
      if (word === endWord) {
        console.log(path);
        console.log(dict)
        console.log(seen)
        console.log(que)
        return len;
      }
      const arr = word.split('');
      for (let i = 0; i < arr.length; i++) {
        for (let d = 0; d < available.length; d++) {
          arr[i] = available[d];
          const newWord = arr.join('');
          if (dict.has(newWord) && !seen.has(newWord)) {
            seen.add(newWord);
            next.push(newWord);
          }
          arr[i] = word[i];
        } // end of inner for loop
      } // end of outer for loop
    } // end for OF loop
    path = `${path} ${next[next.length - 1]} ➔`;
    que = next;
    len++;
  } // end of while loop
  return 0;
};

let start = 'hit';
let end = 'cog';
const words = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];

console.log(ladderLength(start, end, words)); // => 4
// =>  hit ->  hot ->  lot ->  log ->  cog

// console.log(ladderLength('sot', end, words)); // => 3
// =>  sot ->  lot ->  log ->  cog 

// console.log(ladderLength(start, 'end', words)); // => 0
