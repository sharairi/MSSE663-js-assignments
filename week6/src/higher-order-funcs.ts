/**
 * #1 Higher order things.
 *
 * - Map the values to produce the result:
 *
 * [{ id: 1, name 'thing' }, { id: 2, name 'thing' }]
 *
 * - Then Hoist the callback function.
 *
 */
const things = ['thing1', 'thing2'];

// create callback here

const callBack = (thing: string, i: number) => ({
    id: i + 1,
    name: thing
}
);
// create map here
export const mappedThings = things.map(callBack);
/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from #1 to return a single `thing` object.
 * - Hoist that filter callback and curry all functions.
 */
interface Thing {
    id: number,
    name: string
}
// create function here
const filter = <T>(comparitor: string) => (key: string) => (thing: T) =>
    thing[key] === comparitor;

export const filteredThings = <T>(comparitor: string) => (key: string) =>
    mappedThings.filter(filter<Thing>(comparitor)(key));

console.log(filteredThings('thing1')('name'));

