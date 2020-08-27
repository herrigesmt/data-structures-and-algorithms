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

function multiBracketValidation(string){
    let stack = new Stack();
    const openers = '([{';
    for(let index = 0; index < string.length; index++){
        let currentChar = string.charAt(index);
        if(!stack.top){
            if( openers.includes(currentChar)){
                stack.push(currentChar);
            }
        } else {
            switch(stack.peek()){
            case '{':
                if(openers.includes(currentChar)){
                    stack.push(currentChar);
                    break;
                } else if (currentChar === '}'){
                    stack.pop();
                    break;
                } else if(currentChar === ')' || currentChar === ']'){
                    return false;
                } else {
                    break;
                }
            case '[':
                if(openers.includes(currentChar)){
                    stack.push(currentChar);
                    break;
                } else if (currentChar === ']'){
                    stack.pop();
                    break;
                } else if(currentChar === ')' || currentChar === '}'){
                    return false;
                } else {
                    break;
                }
            case '(':
                if(openers.includes(currentChar)){
                    stack.push(currentChar);
                    break;
                } else if (currentChar === ')'){
                    stack.pop();
                    break;
                } else if(currentChar === '}' || currentChar === ']'){
                    return false;
                } else {
                    break;
                }
            }
        }
    }
    if(stack.top){
        return false;
    }
    return true;
}

module.exports = multiBracketValidation;
