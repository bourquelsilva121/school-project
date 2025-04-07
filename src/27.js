function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumberGenerator(0, 100));
