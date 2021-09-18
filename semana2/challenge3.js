<<<<<<< HEAD
function arrayOfMultiples(num, length) {
  const output = [];

  for (let i = 1; i <= length; i++) {
    let mult = num * i;
    output.push(mult);
  }

  return output;
=======
function arrayOfMultiples (num, length) {
  return 0;
>>>>>>> c99f0300d3fa3aadc807150dc0bcb86a35e550e9
}

module.exports = arrayOfMultiples;

console.log(arrayOfMultiples(7, 5));
