console.log('Hello, World!');

console.log("Before Conditional");

let random = Math.ceil(Math.random() * 9);

if (random <= 3) {
    console.log("You scored poorly");
} else if (random <= 6) {
    console.log("You scored okay");
} else {
    console.log("You scored amazingly well");
};

console.log("After Conditional");


const password = prompt('Enter your password');
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log('All Good!');
} else {
    console.log('Incorrect Password Format');
};

const day = 2;
switch (day) {
    case 1:
        console.log('MONDAY');
        // need breaks otherwise once tripped the switch will keep evaluating codes
        break;
    case 2:
        console.log('TUESDAY');
        break;
    case 3:
        console.log('WEDNESDAY');
        break;
    case 4:
        console.log('THURSDAY');
        break;
    case 5:
        console.log('FRIDAY');
        break;
    case 6:
        console.log('SATURDAY');
        break;
    case 7:
        console.log('SUNDAY');
        break;
    default:
        console.log('Something')
}

// Arrays = lists

let newArray = [];

newArray = ['a', 'b', 'c'];
console.log(newArray);