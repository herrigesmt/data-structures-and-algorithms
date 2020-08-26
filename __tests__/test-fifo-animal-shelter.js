'use strict';

const Shelter = require('../javascript/challenges/fifoAnimalShelter/fifo-animal-shelter');

describe('animal shelter', () => {
    it('should properly return the first instance of dog in the list ', () => {
        const shelter = new Shelter();
        shelter.enqueue('cat');
        shelter.enqueue('dog');
        shelter.enqueue('cat');
        expect(shelter.dequeue('dog').value).toBe('dog');
        expect(shelter.front.value).toBe('cat');
        expect(shelter.rear.value).toBe('cat');
    });
    it('should properly return the first instance of cat in the list', () => {
        const shelter = new Shelter();
        shelter.enqueue('dog');
        shelter.enqueue('cat');
        shelter.enqueue('dog');
        expect(shelter.dequeue('cat').value).toBe('cat');
        expect(shelter.front.value).toBe('dog');
        expect(shelter.rear.value).toBe('dog');
    });
    it('should return the first dog in the list if dequeue is not fed cat or dog', () => {
        const shelter = new Shelter();
        shelter.enqueue('dog');
        shelter.enqueue('cat');
        shelter.enqueue('dog');
        expect(shelter.dequeue('༼ つ ◕_◕ ༽つ').value).toBe('dog');
        expect(shelter.front.value).toBe('cat');
        
    });
    it('should throw an error when enqueue is called with something that is not a cat or a dog', () => {
        const shelter = new Shelter();
        expect(() => shelter.enqueue()).toThrow(Error);
        expect(() => shelter.enqueue()).toThrow('this shelter only accepts cats and dogs');
    });
});
