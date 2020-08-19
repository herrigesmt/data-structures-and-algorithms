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
    ll.insertAfter('dog', '(╯°□°）╯︵ ┻━┻');
    expect(ll.head.next.next.next.value).toBe('(╯°□°）╯︵ ┻━┻');
    expect(ll.head.next.next.next.next).toBe(null);

});

it('should return the string \'Exception\' when you put in an argument greater than the length of the list', () => {
    const ll = new LinkedList();
    ll.insert('1');
    ll.append('2');
    ll.append('3');
    ll.append('4');
    ll.append('5');
    expect(ll.kthFromTheEnd(7)).toBe('Exception');
});

it('should work properly when k and the length of the list are the same', () => {
    const ll = new LinkedList();
    ll.insert('1');
    ll.append('2');
    ll.append('3');
    ll.append('4');
    ll.append('5');
    expect(ll.kthFromTheEnd(4)).toBe('1');
});

it('should return the string \'Exception\' when you put in a negative integer as the argument', () => {
    const ll = new LinkedList();
    ll.insert('1');
    ll.append('2');
    ll.append('3');
    ll.append('4');
    ll.append('5');
    expect(ll.kthFromTheEnd(-1)).toBe('Exception');
});

it('should work properly when the linked list is of a size 1', () => {
    const ll = new LinkedList();
    ll.insert('(╯°□°）╯︵ ┻━┻)');
    expect(ll.kthFromTheEnd(0)).toBe('(╯°□°）╯︵ ┻━┻)');
});

it('should work when k is not at the end, but somewhere in the middle of the linked list', () => {
    const ll = new LinkedList();
    ll.insert('1');
    ll.append('2');
    ll.append('3');
    ll.append('4');
    ll.append('5');
    ll.append('6');
    ll.append('7');
    ll.append('8');
    ll.append('9');
    ll.append('10');
    ll.append('11');
    ll.append('12');
    ll.append('13');
    ll.append('14');
    ll.append('15');
    ll.append('16');
    ll.append('17');
    ll.append('18');
    ll.append('19');
    ll.append('20');
    ll.append('21');
    ll.append('22');
    ll.append('23');
    ll.append('24');
    ll.append('25');
    expect(ll.kthFromTheEnd(9)).toBe('16');
});
