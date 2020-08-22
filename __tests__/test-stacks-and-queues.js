/*
Can successfully push onto a stack
Can successfully push multiple values onto a stack
Can successfully pop off the stack
Can successfully empty a stack after multiple pops
Can successfully peek the next item on the stack
Can successfully instantiate an empty stack
Calling pop or peek on empty stack raises exception
Can successfully enqueue into a queue
Can successfully enqueue multiple values into a queue
Can successfully dequeue out of a queue the expected value
Can successfully peek into a queue, seeing the expected value
Can successfully empty a queue after multiple dequeues
Can successfully instantiate an empty queue
Calling dequeue or peek on empty queue raises exception
*/

const stacksAndQueues = require('../data-structures/stacksAndQueues/stacks-and-queues.js');
const Stack = stacksAndQueues.Stack;
const Queue = stacksAndQueues.Queue;
describe('Stack', () => {
    it('should successfully instantiate a stack', () => {
        const stack = new Stack();
        expect(stack).toBeDefined();
        expect(stack.top).toBe(null);
    });
    it('should successfully push onto a stack', () => {
        const stack = new Stack();
        stack.push('( •_•)>⌐■-■');
        expect(stack.top.value).toBe('( •_•)>⌐■-■');
    });
    it('should successfully pop off the stack', () => {
        const stack = new Stack();
        stack.push('( •_•)>⌐■-■');
        expect(stack.top.value).toBe('( •_•)>⌐■-■');
        stack.pop();
        expect(stack.top).toBe(null);
    });
    it('should successfully empty a stack after multiple pops', () => {
        const stack = new Stack();
        stack.push('( •_•)>⌐■-■');
        stack.push('༼ つ ◕_◕ ༽つ');
        stack.push('(⊙_⊙;)');
        expect(stack.pop().value).toBe('(⊙_⊙;)');
        expect(stack.pop().value).toBe('༼ つ ◕_◕ ༽つ');
        expect(stack.pop().value).toBe('( •_•)>⌐■-■');
        expect(stack.top).toBe(null);
    });
    it('should successfully peek the next item on the stack', () => {
        const stack = new Stack();
        stack.push('( •_•)>⌐■-■');
        stack.push('༼ つ ◕_◕ ༽つ');
        stack.push('(⊙_⊙;)');
        expect(stack.peek()).toBe('(⊙_⊙;)');
    });
    it('should throw error on calling pop on empty stack', () => {
        const stack = new Stack();
        expect(() => stack.pop()).toThrow(RangeError);
        expect(() => stack.pop()).toThrow('Cannot pop off empty stack');
    });
    it('should throw error on calling peek on empty stack', () => {
        const stack = new Stack();
        expect(() => stack.peek()).toThrow(RangeError);
        expect(() => stack.peek()).toThrow('Cannot peek on empty stack');
    });
});

describe('Queue', () => {
    it('should successfully instantiate a queue', () => {
        const queue = new Queue();
        expect(queue).toBeDefined();
        expect(queue.front).toBe(null);
        expect(queue.rear).toBe(null);
    });
    it('should successfully enqueue onto a queue', () => {
        const queue = new Queue();
        queue.enqueue('(T_T)');
        expect(queue.front.value).toBe('(T_T)');
        expect(queue.rear.value).toBe('(T_T)');
    });
    it('should successfully enqueue multiple values into a queue', () => {
        const queue = new Queue();
        queue.enqueue('(T_T)');
        expect(queue.front.value).toBe('(T_T)');
        expect(queue.rear.value).toBe('(T_T)');
        queue.enqueue('¯\\_(ツ)_/¯');
        expect(queue.front.value).toBe('(T_T)');
        expect(queue.rear.value).toBe('¯\\_(ツ)_/¯');
    });
    it('should successfully dequeue out of a queue the expected value', () => {
        const queue = new Queue();
        queue.enqueue('(T_T)');
        queue.enqueue('¯\\_(ツ)_/¯');
        queue.enqueue('(⌐■_■)');
        expect(queue.front.value).toBe('(T_T)');
        expect(queue.dequeue().value).toBe('(T_T)');
        expect(queue.front.value).toBe('¯\\_(ツ)_/¯');
        expect(queue.rear.value).toBe('(⌐■_■)');
        expect(queue.rear.next).toBe(null);
    });
    it('should successfully peek into a queue, seeing the expected value', () => {
        const queue = new Queue();
        queue.enqueue('(T_T)');
        queue.enqueue('¯\\_(ツ)_/¯');
        queue.enqueue('(⌐■_■)');
        expect(queue.peek()).toBe('(T_T)');
    });
    it('should successfully empty a queue after multiple dequeues', () => {
        const queue = new Queue();
        queue.enqueue('(T_T)');
        queue.enqueue('¯\\_(ツ)_/¯');
        queue.enqueue('(⌐■_■)');
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.isEmpty()).toBe(true);
    });
    it('should throw error on calling dequeue from empty queue', () => {
        const queue = new Queue();
        expect(() => queue.dequeue()).toThrow(RangeError);
        expect(() => queue.dequeue()).toThrow('Cannot dequeue from empty queue');

    });
    it('should throw error on calling peek on empty queue', () => {
        const queue = new Queue();
        expect(() => queue.peek()).toThrow(RangeError);
        expect(() => queue.peek()).toThrow('Cannot peek on empty queue');
    });
});

