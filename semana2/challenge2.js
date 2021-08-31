function divisibleByLeft(n) {
  //Implementación
  let newNum = 0;

  if (typeof number !== "number") {
    throw Error("Error: Tipo de dato no admitido.");
  }

  newNum =
    parseFloat(number.toString().split("").reverse().join("")) *
    Math.sign(number);

  return newNum;
}

module.exports = divisibleByLeft;
