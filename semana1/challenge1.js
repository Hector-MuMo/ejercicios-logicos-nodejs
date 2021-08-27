//Terminado

const reverseString = (str) => {
  //Implementación
  let revStr = "";

  if (typeof str !== "string") {
    throw new Error("Tipo de dato o longitud no admitidos");
  } else if (str.length <= 1 || str.length > 15) {
    throw new Error("Tipo de dato o longitud no admitidos");
  } else {
    revStr = str.split("").reverse().join("");
  }

  return revStr;
};

module.exports = {
  reverseString,
};
