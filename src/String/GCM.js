const getLowestValue = array => {
  return Math.min.apply(null, array);
}

const getNumberDivisor = number => {
  const divisors = new Array();

  const halfNumber = Math.floor(number / 2);
  for (let i = 1; i < halfNumber; i++) {
    if (number % i === 0) {
      divisors.push(number / i);
    }
  }
  divisors.push(1);
  return divisors;
}

const GCM = array => {
  const lowestValue = getLowestValue(array);
  const divisors = getNumberDivisor(lowestValue);

  let cantidate = divisors.shift();
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    while (element % cantidate !== 0) {
      cantidate = divisors.shift();
    }
  }

  return cantidate;
}

console.log(GCM([81, 120, 1000]));