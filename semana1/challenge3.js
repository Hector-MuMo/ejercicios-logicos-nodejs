const capitalizeLetters = (str) => {
  //Implementación
  let workingVar = "",
    newStr = [],
    regExp = /\s/;

  workingVar = str.split(regExp);

  workingVar.forEach((word) => {
    let transform = word.charAt(0).toUpperCase();
    let slice = word.slice(1);
    newStr.push(transform + slice);
  });

  newStr = newStr.join(" ");

  return newStr;
};

module.exports = {
  capitalizeLetters,
};
