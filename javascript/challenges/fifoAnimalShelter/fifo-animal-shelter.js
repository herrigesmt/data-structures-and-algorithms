'use strict';

class Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class AnimalShelter {
    constructor(){
        this.front = null;
        this.rear = null;
    }

    enqueue(animal){
        if(animal !== 'dog' && animal !== 'cat'){
            throw new Error('this shelter only accepts cats and dogs');
        }
        if(this.front){
            this.rear.next = new Node(animal);
            this.rear = this.rear.next;
        } else {
            this.rear = new Node(animal);
            this.front = this.rear;
        }
    }

    dequeue(pref){
        let current = this.front;
        if(current.value === pref || (pref !== 'cat' && pref !== 'dog')){
            this.front = current.next;
            current.next = null;
            return current;
        }
        let next = current.next;
        let prev;
        while(current.value !== pref){
            let temp = current;
            prev = temp;
            current = current.next;
            next = current.next;
        }
        prev.next = next;
        current.next = null;
        return current;
    }
}

module.exports = AnimalShelter;
