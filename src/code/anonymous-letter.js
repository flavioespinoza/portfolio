/** 
  Anonymous Love Letter 
  - a.k.a Anonymous Ransom Letter
  
  Is it possible to construct the entire letter from  
  characters available in news paper's writings?
  
  @param {string} L Multiple words written alphabet
  @param {string} N Multiple words written from an alphabet
  @returns {boolean} `true` if all L's exist in N else `false`
*/
function isLoveLetterReproducible(L, N) {
  const loveLower = L.toLowerCase();
  const loveCharsAll = loveLower.split('');
  const loveChars = [];
  new Set(loveCharsAll).forEach((char, i) => {
    loveChars.push(char.toLowerCase());
  });
  const newsCharsAll = N.split('');
  let newsString = '';
  new Set(newsCharsAll).forEach((char, i) => {
    newsString += char.toLowerCase();
  });
  console.log(newsString);

  for (let i = 0; i < loveChars.length; i++) {
    if (!newsString.includes(loveChars[i])) return false;
  }
  return true;
}

const loveLetter = `You’ve got it girl, you’ve got it.`;
const newsPaperToday = `You’ve got it girl, you’ve got it. In other news...`;

console.log(isLoveLetterReproducible(loveLetter, newsPaperToday));
