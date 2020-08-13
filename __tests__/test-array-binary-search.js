'use strict';

const binSearch = require('../javascript/arrayBinarySearch/array-binary-search.js');

describe('array-binary-search test', () => {
    it('should return number of index in sorted array if in first half of array', () => {
        let array = [11, 22, 33, 44, 55, 66, 77, 88 , 99, 111];
        let val = 44;
        expect(binSearch(array, val)).toBe(3);
    })
    it('should return number of index in sorted array if in second half of array', () => {
        let array = [11, 22, 33, 44, 55, 66, 77, 88 , 99, 111];
        let val = 77;
        expect(binSearch(array, val)).toBe(6);
    })
    it('should return -1 if val is not in sorted array', () => {
        let array = [11, 22, 33, 44, 55, 66, 77, 88 , 99, 111];
        let val = 49;
        expect(binSearch(array, val)).toBe(-1);    
    })
})