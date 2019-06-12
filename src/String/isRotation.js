let equalsFromIndex = (word, word2, index) => {
  let areEquals = true;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word2[(i + index) % word.length]) {
      areEquals = false;
      break;
    }
  }
  return areEquals;
}

const isRotation = (word, word2) => {
  if (word.length !== word2.length) {
    return false;
  }

  let isRotation = false;
  for (let index = 0; index < word.length; index++) {
    if (word[0] === word2[index] && equalsFromIndex(word, word2, index)) {
      isRotation = true;
      break;
    }
  }
  return isRotation;
}

console.log(isRotation('rato', 'orat'));  // true
console.log(isRotation('a', 'b'));        // false
console.log(isRotation('ab', 'ab'));      // true
console.log(isRotation('ab', 'ab'));      // true
console.log(isRotation('EsteEsUnGranEjemplo', 'GranEjemploEsteEsUn'));      // true
console.log(isRotation('wwwwwwwww', 'wwwwwwwww'));      // true
