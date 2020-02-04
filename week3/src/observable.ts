// Source code here


import { Observable } from 'rxjs';
import { of } from 'rxjs';




export const sourceValue = [1, 2, 3];
export const stream = of(sourceValue.map((val: number) => val * val));

stream.subscribe(val => {
  console.log(val);
});