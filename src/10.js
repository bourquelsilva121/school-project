let numbers = [0, 1, 2, 3, 4, 5];

function getRandomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

getRandomNumber();
