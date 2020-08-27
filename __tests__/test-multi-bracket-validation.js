'use strict';

const multiBracketValidation = require('../javascript/challenges/multiBracketValidation/multi-bracket-validation');
describe('multi-bracket-validation', () => {
    it('should properly validate a balanced bracket string ', () => {
        expect(multiBracketValidation('{}')).toBe(true);
    });
    it('should properly validate a non-balanced bracket string ', () => {
        expect(multiBracketValidation('{{{fred}}}{')).toBe(false);
    });
});
