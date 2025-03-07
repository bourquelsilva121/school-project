// Function to generate a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to generate a random number between 1 and 20
function getRandomNumberBetween1And20() {
  return Math.floor(Math.random() * 20) + 1;
}

// Function to generate a random word from an array of words
function getRandomWord(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Example usage:
const num1 = getRandomNumber();
console.log(`Random number between 1 and 10: ${num1}`);

const num2 = getRandomNumberBetween1And20();
console.log(`Random number between 1 and 20: ${num2}`);

const words = ['apple', 'banana', 'cherry'];
const word = getRandomWord(words);
console.log(`Random word from the array: ${word}`);
