import { expect } from 'chai';
import 'mocha';
import { originalContenders, originalNumbers, originalPersons, originalUpdates } from './spread';

describe('test spread.ts file', () => {

    it('should be ~[1, 2, 3, 4, 5]~', () => {

        expect(originalNumbers).be.to.equal([1, 2, 3, 4, 5]);
    });

});