// const URLify = word => {
//   return word.trim().split(' ').join('%20');
// }




const URLify = word => {

  const arrayWord = word.split('');

  let charFinder = word.length - 1;
  let charWorker = word.length - 1;
  let flag = false;
  while (charFinder !== 0) {

    if (arrayWord[charFinder] !== ' ') {
      arrayWord[charWorker] = arrayWord[charFinder];
      charWorker--;
      flag = true;
    } else if (flag) {
      arrayWord[charWorker--] = '0';
      arrayWord[charWorker--] = '2';
      arrayWord[charWorker--] = '%';
      flag = false;
    }
    charFinder--;
  }

  return arrayWord.join('');
}