function landMass(country, km) {
  //Implementación
  const EARTHMASS = 148940000;

  let countryMass = ((km / EARTHMASS) * 100).toFixed(2);

  let output = {
    percent: parseFloat(countryMass),
    message: `${country} representa el ${countryMass}% de la masa total de la tierra`,
  };

  return output;
}

module.exports = landMass;
