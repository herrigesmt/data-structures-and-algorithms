const isAnagram = require('../javascript/challenges/anagrams/anagrams');

describe('testing anagram tester', () => {
    it('function should be defined', () => {
        expect(isAnagram).toBeDefined();
    });
    it('should return true when fed 2 anagrams', () => {
        expect(isAnagram('car', 'rac')).toEqual(true);
    });
    it('should return false when fed 2 strings that are not anagrams', () => {
        expect(isAnagram('car', 'rc')).toEqual(false);
    });
    it('should ignore periods, commas, and spaces', () => {
        expect(isAnagram('jwoiefo', 'ieof jow')).toEqual(true);
    });
});
