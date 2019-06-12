
const oneWay = (word, destiny) => {

  if (word === destiny) {
    return true;
  }

  if (Math.abs(word.length - destiny.length) > 1) {
    return false;
  }

  let i = 0;
  let j1 = word.length - 1;
  let j2 = destiny.length - 1;
  while (word.charAt(i) === destiny.charAt(i)) {
    i++;
  }

  while (word.charAt(j1) === destiny.charAt(j2)) {
    j1--;
    j2--;
  }

  return j1 - i <= 1;
}

console.log(oneWay('pale', 'ple') === true);
console.log(oneWay('pales', 'pale') === true);
console.log(oneWay('pale', 'bale') === true);
console.log(oneWay('pale', 'bake') === false);
console.log(oneWay('pake', 'bake') === true);
console.log(oneWay('baker', 'bake') === true);

