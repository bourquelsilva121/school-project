// Random JS Code
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomInt(1, 10);
console.log(`The random number is: ${randomNumber}`);
