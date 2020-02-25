import { expect } from 'chai';
import 'mocha';
import { a, fruits, b, food, c, d, others } from './array-destructuring'
describe('Array destructuring tests', () => {
  it('#1 should have a variable for every element in the given array', () => {
    expect(a).be.to.eql(fruits[1]);
    expect(b).be.to.eql(fruits[0]);

  });

  it('#2 should have a variable for the first 2 elements then spread the rest', () => {
    expect(c).be.to.eql(food[0]);
    expect(d).be.to.eql(food[1]);
    expect(others).be.to.eql([, , ...food]);

  });

  it('#3 should construct a statement from the given objarrayect', () => { });
});
