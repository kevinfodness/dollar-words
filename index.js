const wordlist = require('wordlist-english');

const englishWords = wordlist['english'];

let found = 0;

englishWords.forEach((word) => {
  let total = 0;
  const letters = word
    .toLowerCase()
    .split('')
    .filter((letter) => letter.match(/[a-z]/));
  for (let i = 0; i < letters.length; i ++) {
    total += letters[i].charCodeAt(0) - 96;
    if ( total > 100) {
      return;
    }
  }

  if (total === 100) {
    console.log(word);
    found ++;
  }
});

console.log(`Found: ${found}`);
