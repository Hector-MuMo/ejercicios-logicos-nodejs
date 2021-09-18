function isEqual(objInput1, objInput2) {
  //Implementación
  let key1 = Object.keys(objInput1),
    key2 = Object.keys(objInput2);

  if (key1.length !== key2.length) return false;

  for (const k of key1) {
    let value1 = objInput1[k],
      value2 = objInput2[k];

    if (value1 !== value2) return false;
  }

  return true;
}

module.exports = isEqual;

/* console.log(isEqual({ a: 1, b: 2, c: 0 }, { a: 1, b: 2 }));
console.log(isEqual({ a: 1 }, { a: 2 }));
console.log(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); */
