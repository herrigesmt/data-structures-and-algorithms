# Interview Question:

Estimate water usage for a given sprinkler system.

- The sprinkler system is made of an inlet and a number of connected sprinkler heads that spray water.
- Each single spinkler head has a T connection that can be connected to 0, 1, or 2 other sprinklers.
- There are no connected loops in the system. That is, any given sprinkler head is connected to one other spinkler where water comes from (or the inlet), and potentially some downstream heads.
- Each sprinkler head is configured for a certain amount of output, each potentially different, in millileters per minute.
- Distance between sprinkler heads is irrelevant.
- The function should be able to start at any given sprinkler, and return the water used from that point on in the system.

### Algo:

So this is a really long way of describing a binary tree. To solve this issue, we will take in a node of a binary tree (specifically, this node will represent an individual sprinkler). Then, we will establish a variable that will represent water usage. Next, we will declare a recursive function inside our function that takes in a node. This function will do a number of things. First, we will check to see if the current node is null. If we do, then we return instantly. If our node is not node, we will add the water consumption to our previously declared variable. Then, we will call the recursive function with the left of the node the function is working with, then with the right of the node the function is working with. Lastly, we will initially call the recursive function with our current node and then return the water usage variable.

### [Code](./sprinkler-system.js)

### [Tests](../../__tests__/test-pring-matrix.js)
