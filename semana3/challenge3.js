function mcm(a, b) {
  let mcm;

  const maximoComunDivisor = (a, b) => {
    let temporal;
    while (b !== 0) {
      temporal = b;
      b = a % b;
      a = temporal;
    }
    return a;
  };

  const minimoComunMultiplo = (a, b) => {
    return (a * b) / maximoComunDivisor(a, b);
  };

  return (mcm = minimoComunMultiplo(a, b));
}

module.exports = mcm;

//console.log(mcm(8, 5));
