function isSpecialArray(specialArr) {
  let checkArr = [],
    isTrue;

  specialArr.forEach((value, index) => {
    if (value % 2 === 0 && index % 2 === 0) {
      checkArr.push(true);
    } else if (!(value % 2 === 0) && !(index % 2 === 0)) {
      checkArr.push(true);
    } else {
      checkArr.push(false);
    }
  });

  isTrue = checkArr.every((value) => value === true);

  return isTrue;
}

module.exports = isSpecialArray;

//console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));
//console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]));
