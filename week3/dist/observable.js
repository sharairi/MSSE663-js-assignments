"use strict";
// Source code here
Object.defineProperty(exports, "__esModule", { value: true });
import { of } from "rxjs";

const myObservable = of(1, 2, 3, 4);
// Create observer object
const myObserver = {
    next: (x) => console.log('Observer got a next value: ' + x),
    error: (err) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
};
// var result = myObservable.map((value) => {
// });

// Execute with the observer object
myObservable.subscribe(myObserver);

// const nums = of(1, 2, 3);
// const squareValues = map((val: number) => val * val);
// const squaredNums = squareValues(nums);
// squaredNums.subscribe(x => console.log(x));
