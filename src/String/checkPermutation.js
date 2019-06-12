const equalMaps = (map1, map2) => {
  for (let key of map1.keys()) {
    if (!map2.has(key) || map1.get(key) !== map2.get(key)) {
      return false;
    }
  }
  return true;
}

/**
 * O(N) Space(N)
 */
const toMap = (string) => {
  const map = new Map();

  for (let c of string) {
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else {
      map.set(c, 1);
    }
  }

  return map;
}

/**
 * Checks the count number of each character, the time complexity would be O(a + b)
 */
const checkPermutation = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }

  if (string1 === string2) {
    return true;
  }

  const stringMap1 = toMap(string1);
  const stringMap2 = toMap(string2);

  return equalMaps(stringMap1, stringMap2);
}

console.log(checkPermutation('baagf', 'bagas'));
console.log(checkPermutation('god', 'dog'));