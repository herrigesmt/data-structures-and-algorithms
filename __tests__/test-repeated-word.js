let repeatedWords = require('../code-challenges/repeated-word/repeated-word');

let twoCities = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

let fairyTale = 'Once upon a time, there was a brave princess who...';

let bellJar = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

describe('testing repeated words', () => {
    it('should correctly return it when fed twoCities', () => {
        expect(repeatedWords(twoCities)).toEqual('it');
    });
    it('should correctly return a when fed fairyTale', () => {
        expect(repeatedWords(fairyTale)).toEqual('a');
    });
    it('should correctly return a when fed bellJar', () => {
        expect(repeatedWords(bellJar)).toEqual('summer');
    });
    it('should return undefined when fed a string with no repeated words', () => {
        expect(repeatedWords('A quick brown fox jumps over the lazy dog')).toEqual(undefined);
    });
});
