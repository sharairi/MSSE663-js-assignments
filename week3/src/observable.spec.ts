import { expect } from 'chai';
import 'mocha';

import { stream, sourceValue } from './observable';

describe('Observable tests', () => {
    it('should ouput square values of `[1, 2, 3]`', () => {
        stream.subscribe(val => {
            expect(val).to.equal(sourceValue.map((val: number) => val * val));
        });

    });
});