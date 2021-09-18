function divisibleByLeft(n) {
<<<<<<< HEAD
  //Implementación
  output = [];
  str = n.toString();

  for (const key in str) {
    str[key] % str[key - 1] === 0 ? output.push(true) : output.push(false);
  }

  return output;
=======
    //Implementación
    return 0;
>>>>>>> c99f0300d3fa3aadc807150dc0bcb86a35e550e9
}

module.exports = divisibleByLeft;

console.log(divisibleByLeft(73312));
