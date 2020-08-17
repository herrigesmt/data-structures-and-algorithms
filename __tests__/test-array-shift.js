'use strict';

const insertShiftArray = require('../javascript/challenges/arrayShift/array-shift.js');

describe('array-shift test', () => {
    it('should return an increase in array length', () => {
        let array = [1, 2, 3, 4, 5];
        let ctr = 'test string';
        const resultArray = insertShiftArray(array, ctr);
        expect(resultArray.length).toBe(array.length + 1);
    })

    it('should not modify original', () => {
        const startArray = ['a','b','c','d','f','g','h','i'];
        insertShiftArray(startArray, 'e');
        expect(startArray.length).toBe(8);
    })

    it('should have item added in correct spot (even)', () => {
        const startArray = ['a','b','c','d','f','g','h','i'];
        const resultArray = insertShiftArray(startArray, 'e');
        expect(resultArray[4]).toBe('e')
    })

    it('should have item added in correct spot (odd)', () => {
        const startArray = ['a','b','c','d','f','g','h'];
        const resultArray = insertShiftArray(startArray, 'e');
        expect(resultArray[4]).toBe('e')
    })
})