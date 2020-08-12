# Data Structures and Algorithms

## Language: `JavaScript`

### Reverse an array

#### Challenge

Write a function that takes in an array and returns the same array with the values reversed

#### Approach & Efficiency 

I created an empty array then iterated through the input array with a for loop and subtracted the index by the array.length to get the last item and pushed that last item into the empty array, then returned that empty array

### Solution

![Whiteboard](../assets/array-reverse.png)

### Shift Array

#### Challenges

Write a function that takes in an array and a value and returns a new array with the value inserted into the center of the array.

#### Approach & Efficiency

I used the Array.slice() method to create a copy of the original array, then found the center index of the original array by dividing the length by 2 and then rounding up for arrays with an odd number of values. I then used the Array.splice() method to insert the value into the center of the array and then return the new array

### Solution

![Whiteboard](../assets/array-shift.png)
