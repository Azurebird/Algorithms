const isMapPalyndrome = (map) => {
  let odds = 0;
  for (const value of map.values()) {
    if (value % 2 !== 0) {
      odds++;
      // could use break but the complexity will be the same
    }
  }
  return odds <= 1;
};

const palindromePermutation = (word) => {
  const map = new Map();
  for (const c of word) {
    if (map.has(c)) {
      map.set(c, 1 + map.get(c));
    } else {
      map.set(c, 1);
    }
  }
  return isMapPalyndrome(map);
}

console.log(palindromePermutation('tactcoa'));
