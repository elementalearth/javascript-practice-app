// min paramater is optional
export function randomNumberInc(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1));
}

// min paramater is optional
export function randomNumberExc(max, min = 0) {
  return Math.floor(Math.random() * (max - min));
}
