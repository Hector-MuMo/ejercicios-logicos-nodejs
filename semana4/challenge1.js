function keysAndValues(objInput) {
  //Implementación

  let keys = Object.keys(objInput),
    values = [],
    output = [];

  keys = keys.sort();

  keys.forEach((v) => {
    for (const key in objInput) {
      if (key === v) {
        values.push(objInput[key]);
      }
    }
  });

  output = [keys, values];

  return output;
}

module.exports = keysAndValues;

//console.log(keysAndValues({ a: 1, c: 3, b: 2 }));
