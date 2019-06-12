const compressWord = (word, i, j) => {
  const char = word.charAt(i);
  return char + (j - i);
}
const compressor = word => {
  let result = new Array();

  let bot = 0;
  let charBot = word.charAt(bot);
  for (let upper = 0; upper <= word.length; upper++) {
    let charUpper = word.charAt(upper);
    if (charUpper !== charBot) {
      result.push(compressWord(word, bot, upper));
      charBot = charUpper;
      bot = upper;
    }
  }

  return result.join('');
}

console.log(compressor('a'));
console.log(compressor('aa'));
console.log(compressor('aaabbbbbccddddkkkk'));
