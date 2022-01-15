// initialise todo list as empty array
const todoList = [];
console.log('Todo list initialised');

let userInput = prompt('Good Morning, what would you like to do? (list/new/delete/quit)');

while (userInput) {

    // make sure input LowerCase
    userInput = userInput.toLowerCase;

    if (userInput == 'list') {

        // need to list items
        for (let item of todoList) {
            console.log(`${todoList.indexOf(item) + 1}. ${item}`);
        };
        userInput = prompt('Done. What would you like to do? (list/new/delete/quit)');

    } else if (userInput == 'new') {

        // need to push new items onto the end of the list
        todoList.push(prompt('Please enter new items to add to the list.'));
        console.log('List updated.');
        userInput = prompt('Done. What would you like to do? (list/new/delete/quit)');

    } else if (userInput == 'delete') {

        // need prompt listing items and asking which index to remove, use array.splice()
        todoList.splice(prompt('Please enter the index of the item you would like to remove.') - 1, 1);
        console.log('List updated.');
        for (let item of todoList) {
            console.log(`${todoList.indexOf(item) + 1}. ${item}`);
        };
        userInput = prompt('Done. What would you like to do? (list/new/delete/quit)');

    } else if (userInput == 'quit') {

        // exit todo list
        break;

    } else {

        // catch invalid input
        userInput = prompt('Input not recognised - try again. What would you like to do? (list/new/delete/quit)');

    };
}

console.log('OK, Todo List closed.');