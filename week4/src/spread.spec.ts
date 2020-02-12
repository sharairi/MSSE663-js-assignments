import { expect } from 'chai';
import 'mocha';
import {
    originalContenders2, originalNumbers, originalPersons, originalUpdates, originalUpdates2, originalNumbers2,
    originalPersons2
} from './spread';

describe('test spread.ts file', () => {

    it('should be ~[1, 2, 3, 4, 5]~', () => {
        expect(originalNumbers2).be.to.eql(originalNumbers);
    });

    it('should be ~["first","second", "third", "fourth", "fifth"]~', () => {
        expect(['first', 'second', 'third', 'fourth', 'fifth']).to.be.eql(originalContenders2);
    });

    it('should be ~ {man: "Bob",boy: "Kyle"}~', () => {
        expect(originalPersons2).to.be.eql(originalPersons);
    });

    it('should update data where task id =1', () => {
        expect(originalUpdates2).to.be.eql(originalUpdates);
    });

});