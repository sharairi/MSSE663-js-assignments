// #1 Variable swapping
export const fruits = ['apple', 'banana'];

let a: any, b: any, temp: any;
[a, b] = fruits;

// Currently, I would get the following:
console.log(a); // 'apple'
console.log(b); // 'banana'

// deconstruct here
temp = a;
a = b;
b = temp;

// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
console.log(a); // 'banana';
console.log(b); // 'apple';

// #2 Variables and Rest
export const food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];
[a, b] = fruits;

// deconstruct here
let others = [a, b, ...food];

// expected result:
console.log(a); // 'apple'
console.log(b); // 'banana'
console.log(others); // ['chocolate, 'pears', 'oats', 'pizza']

// #3 Array: Contruct a statement
['hello', 'taylor'];

// construct statement here

// expected result: 'hello, taylor!'
