'use strict';

const LinkedList = require('../data-structures/linkedList/linked-list.js');

it('should instantiate', () => {
    const ll = new LinkedList();
    expect(ll).toBeDefined();
})

it('should insert into empty linked list', () => {
    const ll = new LinkedList();
    ll.insert('dog');
    expect(ll.head.value).toBe('dog');
})

it('should insert new node as "head"', () => {
    const ll = new LinkedList();
    ll.insert('dog');
    ll.insert('cat');
    expect(ll.head.value).toBe('cat');
    expect(ll.head.next.value).toBe('dog');
})

it('should return true when calling includes() with a value that exists in the list', () => {
    const ll = new LinkedList();
    ll.insert('dog');
    ll.insert('cat');
    ll.insert('dragon');
    ll.insert('bearded dragon');
    expect(ll.head.next.value).toBe('dragon');
    expect(ll.includes('dragon')).toBe(true);
})

it('should return false when calling includes() with a value that does not exist in the list', () => {
    const ll = new LinkedList();
    ll.insert('dog');
    ll.insert('cat');
    ll.insert('dragon');
    ll.insert('bearded dragon');
    expect(ll.head.next.value).toBe('dragon');
    expect(ll.includes('frog')).toBe(false);
})

it('should return a collection of all values that exist in the linked list when callint toString()', () => {
    const ll = new LinkedList();
    ll.insert('dog');
    ll.insert('cat');
    ll.insert('dragon');
    ll.insert('bearded dragon');
    expect(ll.toString()).toBe('{ bearded dragon } -> { dragon } -> { cat } -> { dog } -> NULL');
})