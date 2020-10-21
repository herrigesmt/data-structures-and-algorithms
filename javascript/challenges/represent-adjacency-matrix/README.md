# Interview Question:

Given an adjacency matrix representation of a graph, return the adjacency list representation.

Input:

```
[
    [a, b, c, d, e],
    [0, 1, 0, 0, 1],
    [1, 0, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 0, 1],
    [1, 0, 0, 1, 0],
]
```

Output:

```
a| -> b -> e

b|-> a -> c -> d

c| -> b -> d

d| -> b -> c -> e

e| -> a -> d
```

### Algo:

Establish empty string. Loop through 2 dimensional array. Then create a nested loop to loop through each nested array. Save the first array as a legend. Otherwise, ignore the first array. Push the index of the legend that matches the index of the nested array we're on into the string. Then on each pass through the nested arrays, we check their index of the loops with the legend array. If we see 1, we push the letter it matches up with into our string. If we see a 0, we skip past it and do nothing. At the end of the inner loop, we will push a new line into the string.

### [Code](./print-matrix.js)

### [Tests](../../../__tests__/test-print-matrix.js)
