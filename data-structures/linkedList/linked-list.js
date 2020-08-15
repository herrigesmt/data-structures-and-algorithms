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