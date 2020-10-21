const printAdjList = require('../javascript/challenges/represent-adjacency-matrix/print-matrix');

const input = [
    ['a', 'b', 'c', 'd', 'e'],
    [0, 1, 0, 0, 1],
    [1, 0, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 0, 1],
    [1, 0, 0, 1, 0],
];

const output = 'a| -> b -> e \nb| -> a -> c -> d \nc| -> b -> d \nd| -> b -> c -> e \ne| -> a -> d \n';

describe('test print adjacency list representation ', () => {
    it('should be defined', () => {
        expect(printAdjList).toBeDefined();
    });
    it('should properly return an expected output when fed an adjacency list', () => {
        expect(printAdjList(input)).toEqual(output);
    });
    it('should throw range error if fed empty arrays', () => {
        expect(() => printAdjList([[]])).toThrow(RangeError);
    });
});

