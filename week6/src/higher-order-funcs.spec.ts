import { expect } from 'chai';
import 'mocha';
import { mappedThings, filteredThings } from './higher-order-funcs';

describe('Higher Order Function tests', () => {
  it("#1 should produce the expected result `[{ id: 1, name 'thing' }, { id: 2, name 'thing' }]` after hoisting", () => {

    const expected = [
      {
        id: 1, name: 'thing1'
      },
      {
        id: 2, name: 'thing2'

      }
    ]
    expect(mappedThings).to.eql(expected);
  });

  it('#2 should return a single thing from array of things objects after hoisting and currying', () => {

    expect(filteredThings('thing1')).to.eql([{ id: 1, name: 'thing1' }]);
  });
});
