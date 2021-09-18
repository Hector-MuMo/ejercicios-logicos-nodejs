function twoSums(numbs, target) {
<<<<<<< HEAD
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
=======
    
>>>>>>> c99f0300d3fa3aadc807150dc0bcb86a35e550e9
}

module.exports = twoSums;
