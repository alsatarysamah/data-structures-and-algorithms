# Reverse an Array
<!-- Description of the challenge -->
reverseArray function takes an array as an argument. Without utilizing any of the built-in methods available to my language, return an array with elements in reversed order.

## Whiteboard Process
<!-- Embedded whiteboard image -->
[whiteboard](./array-revers.png)

## Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->
- function use forloop to go through each element in input array and then push output array in reverse way
- the forloop start from inputArray.length-1 and will end at 0
We can describe this function as having a Big O(n) – “A Big O of n” its a liner function
- if we use bulit-in metheod for arrar callled reverse the function become more readble and more efficient
having a Big O(1)

[code](reserveArray.js)