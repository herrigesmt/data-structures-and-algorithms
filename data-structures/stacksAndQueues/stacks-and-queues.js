'use strict';

class Node {

    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

}

class Stack {
    constructor(){
        this.top = null;

    }

    push(value){
        this.top = new Node(value, this.top);
    }

    pop(){
        if(this.isEmpty()){
            throw new RangeError('Cannot pop off empty stack');
        }
        let temp = this.top;
        this.top = temp.next;
        temp.next = null;
        return temp;
    }

    peek(){
        if(this.isEmpty()){
            throw new RangeError('Cannot peek on empty stack');
        }
        return this.top.value;
    }

    isEmpty(){
        return !this.top;
    }
}

class Queue {
    constructor(){
        this.front = null;
        this.rear = null;
    }

    enqueue(value){
        if(!this.isEmpty()){
            this.rear.next = new Node(value);
            this.rear = this.rear.next;
        } else {
            this.rear = new Node(value);
            this.front = this.rear;
        }
    }
    dequeue(){
        if(this.isEmpty()){
            throw new RangeError('Cannot dequeue from empty queue');
        }
        let temp = this.front;
        this.front = temp.next;
        temp.next = null;
        if(!this.front){
            this.rear = null;
        }
        return temp;
    }
    peek(){
        if(this.isEmpty()){
            throw new RangeError('Cannot peek on empty queue');
        }
        return this.front.value;
    }

    isEmpty(){
        if (!this.front && !this.rear){
            return true;
        } else {
            return false;
        }
    }
}

module.exports = {
    Stack,
    Queue,
};
