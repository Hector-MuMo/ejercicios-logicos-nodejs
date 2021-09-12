function minMax(aNumbs) {
  //Implementación
  let output = {
    min: 0,
    max: 0,
  };
  const sort = aNumbs.sort((a, b) => a - b);

  if (sort.length < 2) return false;
  else if (aNumbs.every((value) => value < 0)) return false;
  else if (aNumbs.every((value) => typeof value !== 'number')) return false;

  output = { ...output, min: sort[0], max: sort[sort.length - 1] };

  return output;
}

module.exports = minMax;
