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
        return string = `${string}{ ${currentNode.value} } -> NULL`
    }
}
module.exports = LinkedList;