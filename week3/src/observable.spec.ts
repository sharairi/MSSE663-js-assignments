import { expect } from 'chai';
import 'mocha';

import chai from 'chai';
import assertArrays from 'chai-arrays';
chai.use(assertArrays);

import { stream, sourceValue } from './observable';

describe('Observable tests', () => {
    it('should ouput square values of `[1, 2, 3]`', () => {
        stream.subscribe(val => {

            // expect(sourceValue.map((val: number) => val * val)).to.be.array();

            expect([1, 4, 9]).to.be.equalTo(sourceValue.map((val: number) => val * val));


        });

    });
});