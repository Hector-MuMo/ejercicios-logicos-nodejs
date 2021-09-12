function countPrimes(number) {
  //Implementación

  const p = [];

  for (let i = 2; i <= number; i++) {
    let isPrime = true;
    let maxD = Math.floor(Math.sqrt(i));
    for (let j = 2; j <= maxD; j++) {
      if (i % j == 0) {
        isPrime = !isPrime;
        break;
      }
    }
    if (isPrime) p.push(i);
  }

  return p.length;
}

module.exports = countPrimes;
