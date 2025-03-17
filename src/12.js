function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomCode() {
  const randomNum = getRandomNumber(100000, 999999);
  return `your_code_here_${randomNum}`;
}

const code = generateRandomCode();
console.log(code);
