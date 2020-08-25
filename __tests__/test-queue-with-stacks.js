'use strict';

const PseudoQueue = require('../data-structures/queueWithStacks/queue-with-stacks');

describe('PsuedoQueue', () => {
    it('should successfully instantiate a queue', () => {
        const queue = new PseudoQueue();
        expect(queue).toBeDefined();
        expect(queue.front).toBe(null);
        expect(queue.rear).toBe(null);
    });
    it('should successfully enqueue onto a queue', () => {
        const queue = new PseudoQueue();
        queue.enqueue('(T_T)');
        expect(queue.front.value).toBe('(T_T)');
        expect(queue.rear.value).toBe('(T_T)');
    });
    it('should successfully enqueue multiple values into a queue', () => {
        const queue = new PseudoQueue();
        queue.enqueue('(T_T)');
        expect(queue.front.value).toBe('(T_T)');
        expect(queue.rear.value).toBe('(T_T)');
        queue.enqueue('¯\\_(ツ)_/¯');
        expect(queue.front.value).toBe('(T_T)');
        expect(queue.rear.value).toBe('¯\\_(ツ)_/¯');
    });
    it('should successfully dequeue out of a queue the expected value', () => {
        const queue = new PseudoQueue();
        queue.enqueue('(T_T)');
        queue.enqueue('¯\\_(ツ)_/¯');
        queue.enqueue('(⌐■_■)');
        expect(queue.front.value).toBe('(T_T)');
        expect(queue.dequeue().value).toBe('(T_T)');
        expect(queue.front.value).toBe('¯\\_(ツ)_/¯');
        expect(queue.rear.value).toBe('(⌐■_■)');
        expect(queue.rear.next).toBe(null);
    });
    it('should successfully empty a queue after multiple dequeues', () => {
        const queue = new PseudoQueue();
        queue.enqueue('(T_T)');
        queue.enqueue('¯\\_(ツ)_/¯');
        queue.enqueue('(⌐■_■)');
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.stack1.isEmpty()).toBe(true);
    });
    it('should throw error on calling dequeue from empty queue', () => {
        const queue = new PseudoQueue();
        expect(() => queue.dequeue()).toThrow(RangeError);
        expect(() => queue.dequeue()).toThrow('Cannot dequeue off empty queue');
    });
});
