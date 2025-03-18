// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Generate a random boolean value (true or false)
let randomBoolean = Math.random() >= 0.5;

// Generate a random string of length 1-20
let randomString = Math.random().toString(36).substring(7);

console.log(randomNumber, randomBoolean, randomString);
