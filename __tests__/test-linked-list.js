'use strict';

const LinkedList = require('../data-structures/linkedList/linked-list.js');

it('should instantiate', () => {
    const ll = new LinkedList();
    expect(ll).toBeDefined();
});

it('should insert into empty linked list', () => {
    const ll = new LinkedList();
    ll.insert('dog');
    expect(ll.head.value).toBe('dog');
});

it('should insert new node as "head"', () => {
    const ll = new LinkedList();
    ll.insert('dog');
    ll.insert('cat');
    expect(ll.head.value).toBe('cat');
    expect(ll.head.next.value).toBe('dog');
});

it('should return true when calling includes() with a value that exists in the list', () => {
    const ll = new LinkedList();
    ll.insert('dog');
    ll.insert('cat');
    ll.insert('dragon');
    ll.insert('bearded dragon');
    expect(ll.head.next.value).toBe('dragon');
    expect(ll.includes('dragon')).toBe(true);
});

it('should return false when calling includes() with a value that does not exist in the list', () => {
    const ll = new LinkedList();
    ll.insert('dog');
    ll.insert('cat');
    ll.insert('dragon');
    ll.insert('bearded dragon');
    expect(ll.head.next.value).toBe('dragon');
    expect(ll.includes('frog')).toBe(false);
});

it('should return a collection of all values that exist in the linked list when callint toString()', () => {
    const ll = new LinkedList();
    ll.insert('dog');
    ll.insert('cat');
    ll.insert('dragon');
    ll.insert('bearded dragon');
    expect(ll.toString()).toBe('{ bearded dragon } -> { dragon } -> { cat } -> { dog } -> NULL');
});

it('should append a new node to the end of a linked list when you call appand()', () => {
    const ll = new LinkedList();
    ll.insert('dog');
    ll.insert('dragon');
    ll.append('alligator');
    expect(ll.head.next.next.value).toBe('alligator');
    ll.append('(╯°□°）╯︵ ┻━┻');
    expect(ll.head.next.next.next.value).toBe('(╯°□°）╯︵ ┻━┻');

});

it('should insert a node before a node with a value taken in as an argument with insertbefore()', () => {
    const ll = new LinkedList();
    ll.insert('dog');
    ll.insert('dragon');
    ll.append('alligator');
    ll.insertBefore('alligator', 'bear');
    expect(ll.head.next.next.value).toBe('bear');
});

it('should insert a node before the first node of a linked list with insertbefore()', () => {
    const ll = new LinkedList();
    ll.insert('dog');
    ll.insert('dragon');
    ll.insert('alligator');
    ll.insertBefore('alligator', 'bear');
    expect(ll.head.value).toBe('bear');
});

it('should insert a node after a node with a value taken in as an argument with insertafter()', () => {
    const ll = new LinkedList();
    ll.insert('dog');
    ll.insert('dragon');
    ll.insert('alligator');
    ll.insertAfter('alligator', '(╯°□°）╯︵ ┻━┻');
    expect(ll.head.next.value).toBe('(╯°□°）╯︵ ┻━┻');
    expect(ll.head.value).toBe('alligator');
});

it('should insert stuff', () => {
    const ll = new LinkedList();
    ll.insert('dog');
    ll.insert('dragon');
    ll.insert('alligator');
    ll.insertAfter('dragon', '(⌐■_■)');
    expect(ll.head.next.next.value).toBe('(⌐■_■)');
    expect(ll.head.next.value).toBe('dragon');
    expect(ll.head.next.next.next.value).toBe('dog');
});

it('should insert a node after the last node of the linked list if necessary with insertAfter()', () => {
    const ll = new LinkedList();
    ll.insert('dog');
    ll.insert('dragon');
    ll.insert('alligator');
    console.log(ll.head.next.next);
    ll.insertAfter('dog', '(╯°□°）╯︵ ┻━┻');
    expect(ll.head.next.next.next.value).toBe('(╯°□°）╯︵ ┻━┻');
    expect(ll.head.next.next.next.next).toBe(null);

});
