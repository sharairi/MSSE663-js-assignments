// #1 Variable swapping
export const fruits = ['apple', 'banana'];

export let a: any, b: any, temp: any;
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
export let c: any, d: any;

[c, d] = fruits;

// deconstruct here
export let others = [c, d, ...food];
// expected result:
console.log(c); // 'apple'
console.log(d); // 'banana'
console.log(others); // ['chocolate, 'pears', 'oats', 'pizza']

// #3 Array: Contruct a statement

let elements = ['hello', 'taylor'];

console.log(elements.join() + '!');
// construct statement here

// expected result: 'hello, taylor!'
