# Javascript Notes

## JS Functions
* typeof VARIABLE
* * returns variable type

## Javascript Notation
Identifiers
* give identifiers names in camelCase
* can't start identifier with num
* can use _ but only within body of identifier, uncommon
* no spaces

## Strings
* can't update individual characters within string
* need to update entire string
* access methods
* * string.METHOD()

## String Methods
* can be chained together eg. variable.methodOne().methodTwo()
* .toLowerCase() or .toUpperCase()
* .trim() - removes whitespace at beginning/end of string
* methods can accept arguments
* indexOf(args) - shows starting index of args, no result = -1. Only shows index of first match. Can be used to test if some x in y.
* slice(start,end) - will extra indexed slice (inc, excl)
* replace(target, string) 
* repeat(num repeats)

## String Literals
* Must use back-ticks (` `) rather than usual (" ") or (' ')
* `hello *{1 + 2 + 9}` = "hello 12"
* e.g. `You bought ${qty} ${product.toUpperCase()}(s). Total is $${total}.`
* can include methods etc within 

## Null and Undefined
* null = null (actual value) 
* null is the intentional lack of value
* undefined is awaiting a definition - e.g. let x; has no value for x, will return 'undefined'


## Math Object
* use Math.method()
* e.g. Math.floor(), Math.ceil(), Math.random() etc

## Equality
* == will coerce values to be the same - ie.
* * 0 == '';
* * null == undefined;
* === will look for strict equality
* != not equal
* !== strict not equal

## Console and other inbuilt functions
* console.log() prints to the console screen, similar to 'print'
* alert(string) will make a pop-up
* prompt(prompt text) will ask user for an input and return it as a string, e.g. let num = prompt('enter your age please')
* parseInt() will try to parse a string as an int

## Logical
* && is AND
* || is OR
* ! is NOT
* switch statement

## Method uses
* use indexOf() to find if element within string (-1 = not in string)


## Arrays
* Arrays are stored as memory references - i.e. use const rather than let as the reference doesn't change, only the contents. 
* array.pop/push/shift/unshift
* pop - pops last item off. push = puts new item at end. shift - pops first item off, unshift puts new item in front.
* .concat() - adding 2x arrays to form a new merged array e.g. const array = array1.concat(array2)
* .includes() - does any element within the array match - returns boolean
* .indexOf() - returns index of element if matched, else -1
* .reverse() - DESTRUCTIVE - will do in place
* .slice(?start, ?end) - will only give elements from start (optional) to end (default = last)
* .splice(?start, ?deletecount, ?insertitem) - DESTRUCTIVE, returns array of deleted items
* .sort() - DESTRUCTIVE, sorts in place by UTF-16 code value (strings)


## JS Objects
* key-value pairs
* mutable
* unordered
* every key is converted to a string



const object = {
    key: int,
    key: 'string',
}

* object["key"] or object.key to access contents
* can pass object[variable] to search for key


## Loops
* for loop: 
for (
    [initialExpression];
    [condition];
    [incrementExpression]
)
* while loop:
let count = 0;
while (count <= 10) {
    console.log(count);
    i++;
    break; (if required)
}

### For Of loop
* for (let variable of iterable) {
    console.log(variable);
};

### For In Loop
```
for (let variable in object-enumerable-properties) {
    console.log(variable);
}
```

* Object.keys(object); - returns array of object keys
* Object.entries(object); - returns array of object entries (arrays key:value)
* Object.values(object);

## Functions
```
function funcName(params) {
    code here;
};
```

* calling the function
```
function(args);
```

