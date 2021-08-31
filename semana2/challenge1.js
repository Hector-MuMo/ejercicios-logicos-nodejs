function twoSums(numbs, target) {
  //Implementación
  let output = [];

  for (let i = 0; i < numbs.length; i++) {
    for (let j = 1; j < numbs.length; j++) {
      let sum = numbs[i] + numbs[j];
      if (sum === target) {
        output = [...output, i, j];
        return output;
      }
    }
  }

  console.log(output);
}

module.exports = twoSums;

console.log(twoSums([3, 2, 4], 6));
