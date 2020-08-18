'use strict';

class Node {

    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

}

class LinkedList {

    constructor() {
        this.head = null;
    }

    // insert and make head
    insert(value) {
        this.head = new Node(value, this.head);
    }

    includes(value) {
        let currentNode = this.head;

        while(currentNode.next) {
            if(currentNode.value === value){
                return true;
            }
            currentNode = currentNode.next;
        }
        if(currentNode.value === value) { // account for while loop ending before checking the last value since the last node will have a next property of null
            return true;
        }
        return false;
    }

    toString(){
        let string = ``;
        let currentNode = this.head;
        while(currentNode.next) {
            string = `${string}{ ${currentNode.value} } -> `;
            currentNode = currentNode.next;
        }
        return string = `${string}{ ${currentNode.value} } -> NULL`;
    }

    append(value){
        if(!this.head){
            this.insert(value);
            return;
        }
        let currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(value);
        return;
    }

    insertBefore(value, newVal){
        if(!this.head) {
            this.insert(newVal);
            return;
        }
        if(this.head.value === value){
            this.insert(newVal);
            return;
        }

        let currentNode = this.head;
        while(currentNode.next.value !== value){
            currentNode = currentNode.next;
        }

        currentNode.next = new Node(newVal, currentNode.next);

    }

    insertAfter(value, newVal){
        if(!this.head){
            this.insert(newVal);
            return;
        }
        let currentNode = this.head;

        while(currentNode.value !== value){
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(newVal, currentNode.next);
    }
}
module.exports = LinkedList;
