const wordlist = require('wordlist-english');

const englishWords = wordlist['english'];

let found = 0;

englishWords.forEach((word) => {
  let total = 0;
  for (let i = 0; i < word.length; i ++) {
    const char = word.charCodeAt(i);
    if (char >= 65 && char <= 90) {
      total += char - 64;
    } else if (char >= 97 && char <= 122) {
      total += char - 96;
    }
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
