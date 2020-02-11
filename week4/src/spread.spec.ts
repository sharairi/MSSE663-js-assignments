import { expect } from 'chai';
import 'mocha';
import { originalContenders, originalNumbers, originalPersons, originalUpdates } from './spread';

describe('test spread.ts file', () => {

    it('should be ~[1, 2, 3, 4, 5]~', () => {
        expect(originalNumbers).be.to.equal([1, 2, 3, 4, 5]);
    });

    it('should be ~["first","second", "third", "fourth", "fifth"]~', () => {
        expect(['first', 'second', 'third', 'fourth', 'fifth']).to.be.equal(originalContenders);
    });

    it('should be ~ {man: "Bob",boy: "Kyle"}~', () => {
        expect({ man: "Bob", boy: "Kyle" }).to.be.equal(originalPersons);
    });

    it('update task id =1', () => {
        expect([
            {
                id: 0,
                task: 'Do the thing'
            },
            {
                id: 1,
                task: 'Do the other thing... again'
            },
            {
                id: 2,
                task: 'Do the last thing'
            }
        ]).to.be.equal(originalUpdates);
    });

});