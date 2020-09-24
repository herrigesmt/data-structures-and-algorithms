const leftJoin = require('../javascript/challenges/leftJoin/left-join');

let synHash = {
    fond: 'enamored',
    wrath: 'anger',
    diligent: 'employed',
    outfit: 'garb',
    guide: 'usher',
};

let antHash = {
    fond: 'averse',
    wrath: 'delight',
    diligent: 'idle',
    guide: 'follow',
    flow: 'jam',
};

describe('testing left-join function', () => {
    it('should properly output when fed 2 valid hash tables of words', () => {
        const joinedHash = leftJoin(synHash, antHash);
        expect(joinedHash[0][0]).toEqual('fond');
        expect(joinedHash[3][2]).toEqual(null);
    });
});
