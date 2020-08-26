# Data Structures and Algorithms

## Language: `JavaScript`

### Reverse an array

#### Challenge

Write a function that takes in an array and returns the same array with the values reversed

#### Approach & Efficiency 

I created an empty array then iterated through the input array with a for loop and subtracted the index by the array.length to get the last item and pushed that last item into the empty array, then returned that empty array

### Solution

![Whiteboard](../assets/array-reverse.png)

[code](./challenges/arrayReverse/array-reverse.js)



### Shift Array

#### Challenges

Write a function that takes in an array and a value and returns a new array with the value inserted into the center of the array.

#### Approach & Efficiency

I used the Array.slice() method to create a copy of the original array, then found the center index of the original array by dividing the length by 2 and then rounding up for arrays with an odd number of values. I then used the Array.splice() method to insert the value into the center of the array and then return the new array

### Solution

![Whiteboard](../assets/array-shift.png)

[code](./challenges/arrayShift/array-shift.js)

### Binary Search Array

### Challenge

Write a function that takes in an array and a value and returns the index that the value appears in that array and if it doesn't appear, return -1. Use a binary search algorithm to find the value.

#### Approach & efficiency

The first idea was to use recursion which although I did get it working in the end, it wound up being a bit more complicated and less straight-forward than I first thought and took a lot of experimenting and also looking at [this medium article](https://medium.com/jsunderthescope/a-recursive-binary-search-in-javascript-b29efaff64d6) about recursive functions.

### Solution

![Whiteboard](../assets/array-binary-search.png)
The end result looks much different than what you see in the whiteboard because I had to change how the recursion worked.

[code](./challenges/arrayBinarySearch/array-binary-search.js)

### Animal Shelter

#### Challenges

Create a class called AnimalShelter which holds only dogs and cats using FIFO approach with the enqueue(animal) method to add either a cat or dog object and the dequeue(pref) method to return a dog or cat depending on what is put as pref.

#### Approach & efficiency

The idea for dequeue is to while loop through the queue until we reach a node which has a value that matches the pref, fix the nexts for the previous node to skip over the current node, set the next of the current node to null, and return the current node. For enqueue we simply tack on a new node to the rear with the animal type taken in and change the rear of the class to point to the new node instead. In both enqueue and dequeue, have if statements to check if the user entered either cat or dog. If you enter anything else for enqueue, you will get back the error 'this shelter only accepts cats and dogs'. If you enter anything else for dequeue, it will just return the front value.

### Solution

![Whiteboard](../assets/fifo-animal-shelter-whiteboard2.jpeg)
![Whiteboard](../assets/fifo-animal-shelter-whiteboard.jpeg)

[code](./challenges/fifoAnimalShelter/fifo-animal-shelter.js)
