function arrayOfMultiples(num, length) {
  const output = [];

  for (let i = 1; i <= length; i++) {
    let mult = num * i;
    output.push(mult);
  }

  return output;
}

module.exports = arrayOfMultiples;

console.log(arrayOfMultiples(7, 5));
