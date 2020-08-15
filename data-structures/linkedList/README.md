# Singly Linked List

## Challenge

Create a module that allows you to create linked lists and do three things: insert a new head into the linked list, check if something exists in a linked list with includes, and return a string of all the values that exist in the linked list with toString.

## Approach & efficiency & API

With insert I simply called the Node class constructor and assigned the head of the LinkedList class to be the new Node while assigning the next of the new node to the previous head.

With includes I define current node to the current head, loop through the list with a while loop while `currentNode.next` is truthy. In the while loop, have a conditional checking if `currentNode.value === value` where value is the argument. If true, return true. Otherwise, continue looping.

With toString, I declare a variable string and assign it an empty string. Then I go through a while loop the same way I did before for includes and used template literal to combine the string variable with the value of `currentNode`, doing it one last time outside the loop for the last node and return string. 

I think everything is O(n)? Not sure on that front yet