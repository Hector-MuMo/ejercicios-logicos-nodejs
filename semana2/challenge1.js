function twoSums(numbs, target) {
  //Implementación
  let output = [];

  for (let i = 0; i < numbs.length; i++) {
    for (let j = i + 1; j < numbs.length; j++) {
      let sum = numbs[i] + numbs[j];
      if (sum === target) {
        output = [...output, i, j];
        return output;
      }
    }
  }
}

module.exports = twoSums;
