// let die1 = Math.ceil(Math.random() * 6);

function rollDie(sides) {
    return (Math.ceil(Math.random() * sides));
};

console.log(rollDie(prompt('Please enter a number of sides.')));

function repeat(word, num) {
    let result = ''
    for (let i = 0; i < num; i++) {
        result += word
    };
    console.log(result);
}