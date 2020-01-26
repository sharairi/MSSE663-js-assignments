/**
 * #1 Create an object literal named `monkey`
 * #2 Give it 3 unique properties
 * #3 Give it at least 2 behaviours/methods of your choice
 * #4 Calls the object's method(s) and output a result of your choice to the console.
 * #5 Convert the object literal to an Class
 * #6 Then call its method and output to the console.
 */

let monkey = {
    type: ["Vervet", "Spider"],
    food: "banana",
    origin: "Africa",
    Jump: function (monkeyType) {
        return monkeyType + " Jumbed";
    },
    Sitdown: function (monkeyType) {
        return monkeyType + " sat down";
    }
};

console.log(monkey.Jump(monkey.type[0]));
console.log(monkey.Jump(monkey.type[1]));
console.log(monkey.Sitdown(monkey.type[0]));
console.log(monkey.Sitdown(monkey.type[1]));

class MonkeyClass {

    type = ["Vervet", "Spider"];
    food = "banana";
    origin = "Africa";

    Jump(monkeyType) {
        return monkeyType + " Jumbed in the class";
    };

    Sitdown(monkeyType) {
        return monkeyType + " sat down in the class";
    }
}

let monkey1 = new MonkeyClass();

console.log(monkey1.Jump(monkey1.type[0]));
console.log(monkey1.Jump(monkey1.type[1]));
