function divisibleByLeft(n) {
  //Implementación
  output = [];
  str = n.toString();

  for (const key in str) {
    str[key] % str[key - 1] === 0 ? output.push(true) : output.push(false);
  }

  return output;
}

module.exports = divisibleByLeft;

console.log(divisibleByLeft(73312));
