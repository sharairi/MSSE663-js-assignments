import { expect } from 'chai';
import 'mocha';
import { curryMe2, curryMe, doMathCurry, doMath, blackBelts, ninjaWarrior1, ninjaWarrior2 } from './currying';

describe('Currying tests', () => {
  it('#1 should output the same result as the original function', () => {
    expect(curryMe2('hello')('world')('!!')).to.equal(curryMe('hello', 'world', '!!'))
  });

  it('#2 should output the same result as the original function', () => {

    expect(doMathCurry(1)(2)(3)).to.equal(doMath(1)(2)(3));

  });

  it('#3 should return an array containing the ninjas who have a black belt', () => {
    const expected =
      [
        { name: 'Michelangelo', belt: 'white' },
        { name: 'Donatello', belt: 'green' },
        { name: 'Raphael', belt: 'black' },
        { name: 'Leonardo', belt: 'black' },
        { name: 'Mr. Miyagi', belt: 'black' },
        { name: 'Rocky', belt: 'black' },
        { name: 'Colt', belt: 'green' },
        { name: 'Tum Tum', belt: 'white' },
        { name: 'Haru', belt: 'white' },
        { name: 'The Bride', belt: 'black' },
        { name: 'Cammy', belt: 'black' },
        { name: 'Wong Fei-hung', belt: 'green' }
      ];
    expect(blackBelts).to.eql(expected);
  });

  it('#4 should return a new array of ninja objects with "status" added to each object', () => {
    const ninjaWithStatus1 = [
      { name: 'Michelangelo', belt: 'white', status: 'grasshopper' },
      { name: 'Donatello', belt: 'green', status: 'warrior' },
      { name: 'Raphael', belt: 'black', status: 'sensi' },
      { name: 'Leonardo', belt: 'black', status: 'sensi' },
      { name: 'Mr. Miyagi', belt: 'black', status: 'sensi' },
      { name: 'Rocky', belt: 'black', status: 'sensi' },
      { name: 'Colt', belt: 'green', status: 'warrior' },
      { name: 'Tum Tum', belt: 'white', status: 'grasshopper' },
      { name: 'Haru', belt: 'white', status: 'grasshopper' },
      { name: 'The Bride', belt: 'black', status: 'sensi' },
      { name: 'Cammy', belt: 'black', status: 'sensi' },
      { name: 'Wong Fei-hung', belt: 'green', status: 'warrior' }
    ];

    const ninjaStatus2 = [
      { name: 'Michelangelo', belt: 'white', status: 'Noob' },
      { name: 'Donatello', belt: 'green', status: 'Choob' },
      { name: 'Raphael', belt: 'black', status: 'Legend' },
      { name: 'Jim', belt: 'black', status: 'Legend' },
      { name: 'The Rat', belt: 'black', status: 'Legend' }];

    expect(ninjaWarrior1).to.eql(ninjaWithStatus1);
    expect(ninjaWarrior2).to.eql(ninjaStatus2);

  });
});
