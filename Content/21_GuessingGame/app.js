// Ask user to set maximum number
let maxNumber = parseInt(prompt('Please enter a number...'));

// Ensure maximum number is an Int, otherwise ask again
while (!maxNumber) {
    maxNumber = parseInt(prompt('Please enter a number...'));
};

// Set random target number
const targetNum = Math.ceil(Math.random() * maxNumber);
console.log('Target number is: ' + targetNum);

// Ask user for first guess
let guess = prompt('Enter your first guess');
let attempts = 1;

while (parseInt(guess) !== targetNum) {

    attempts += 1;

    // console.log('here');

    if (guess === 'q') {
        console.log('Ok, you quit.');
        break;
    } else if (guess > targetNum) {
        guess = prompt('Too high, guess again!');
    } else {
        guess = prompt('Too low, guess again!');
    };
};

// End game
console.log(`You guessed it! It took you ${attempts} attempts!`);

// while (guess != targetNum) {

//     attempts += 1;

//     if (guess === 'q') {
//         console.log('Ok, you quit.');
//         break;
//     } else if (!guess) {
//         guess = parseInt(prompt('Please enter a valid number!'));
//     } else if (guess > targetNum) {
//         guess = parseInt(prompt('Too high, guess again!'));
//     } else {
//         guess = parseInt(prompt('Too low, guess again!'));
//     };
// };