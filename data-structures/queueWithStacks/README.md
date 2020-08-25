# Queue with stacks

## Challenge

Write a queue class pseudo-queue class using two stacks to form a queue.

## Approach & Efficiency

The idea here is we treat one stack as our main stack where we store all of the nodes in our queue and the other stack we only use when we run the `enqueue` function, so when we run enqueue, we while loop through stack1, popping/pushing all the values from stack1 to stack2, pushing a new node onto stack1, and then looping through stack2 and popping/pushing all the values from stack2 back to stack1.

Big 0:

Enqueue
- time: O(n)
- space: O(1)

Dequeue
- time: O(1)
- space: O(-1)??

[code](./queue-with-stacks)
[Whiteboard](https://docs.google.com/document/d/1ehTELD8IB5HOY0StF7asJC4b3F4TNw1koT6OBP5kmR4/edit?usp=sharing)
