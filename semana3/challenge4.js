function toArray() {
  //Implementación

  let empty = Object.keys(arguments[0]).length,
    output;

  if (empty === 0) {
    return [];
  } else {
    output = Object.entries(arguments[0]);
  }

  return output;
}

module.exports = toArray;

//console.log(toArray({ a: 10, b: 20 }));
