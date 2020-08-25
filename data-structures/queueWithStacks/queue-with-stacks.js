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

class PsuedoQueue {
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
        this.front = null;
        this.rear = null;
    }

    enqueue(value){
        while(!this.stack1.isEmpty()){
            this.stack2.push(this.stack1.pop().value);
        }
        this.stack1.push(value);
        this.rear = this.stack1.top;
        while(!this.stack2.isEmpty()){
            this.stack1.push(this.stack2.pop().value);
        }
        this.front = this.stack1.top;
        console.log('front', this.front);
    }

    dequeue(){
        if(this.stack1.isEmpty()){
            throw new RangeError('Cannot dequeue off empty queue');
        }
        let dequeued = this.stack1.pop();
        this.front = this.stack1.top;
        return dequeued;
    }
}

module.exports = PsuedoQueue;
