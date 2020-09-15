const insertionSort = require('../sorts/insertionSort/insertion-sort');

describe('insertion sort testing', () => {

    it('should properly sort an array when fed', () => {
        let array = [8,4,23,42,16,15];
        insertionSort(array);
        expect(array[0]).toEqual(4);
        expect(array[1]).toEqual(8);
        expect(array[2]).toEqual(15);
        expect(array[3]).toEqual(16);
        expect(array[4]).toEqual(23);
        expect(array[5]).toEqual(42);
    });
    it('should properly sort a reverse-sorted array', () => {
        let array = [20,18,12,8,5,-2];
        insertionSort(array);
        expect(array[0]).toEqual(-2);
        expect(array[1]).toEqual(5);
        expect(array[2]).toEqual(8);
        expect(array[3]).toEqual(12);
        expect(array[4]).toEqual(18);
        expect(array[5]).toEqual(20);
    });
    it('should properly sort an array with few uniques', () => {
        let array = [5,12,7,5,5,7];
        insertionSort(array);
        expect(array[0]).toEqual(5);
        expect(array[1]).toEqual(5);
        expect(array[2]).toEqual(5);
        expect(array[3]).toEqual(7);
        expect(array[4]).toEqual(7);
        expect(array[5]).toEqual(12);
    });
    it('should properly sort an array that is already nearly sorted', () => {
        let array = [2,3,5,7,13,11];
        insertionSort(array);
        expect(array[0]).toEqual(2);
        expect(array[1]).toEqual(3);
        expect(array[2]).toEqual(5);
        expect(array[3]).toEqual(7);
        expect(array[4]).toEqual(11);
        expect(array[5]).toEqual(13);
        
    });
});
