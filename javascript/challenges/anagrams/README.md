# Interview Question:

Identify anagrams.

- Actual code is required for a complete answer
- Ask the candidate to write a function to validate whether or not two given strings are anagrams (contain the same letters).
- Disregard spaces
- Help the candidate understand the definition of a anagram if they are unsure of it.
- Two strings are anagrams if one can be built from exactly the same letters as the other.

### Algo:

We should loop through string 1, pushing all the letters into an object as a key of the letter and a value of the number of occurrences, so starting at one and incrementing whenever we find an additional, skipping over spaces and punctuation. Do the same with string 2, then iterate through one object to see if it contains the same key, and if it does, see if the number assigned to that key is the same. We then have to iterate through the second object to make sure all of those letters are present in the first object and that the numbers match up.

### [Code](./anagrams.js)

### [Tests](../../../__tests__/test-anagram.js);
