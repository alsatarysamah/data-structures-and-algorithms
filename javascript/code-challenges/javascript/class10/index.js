'use strict';
const Stack = require ("./lib/stack");
const Queue=require("./lib/queue");
let stack = new Stack();
let queue =new Queue();
console.log(queue.length)
queue.enqueue(1);
console.log(queue.length)
queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// console.log(queue.length)
queue.dequeue();
queue.dequeue();


console.log(queue.isEmpty());
console.log(queue.peek());
// console.log(queue.length)

// stack.push(1);
// stack.push(2);
// console.log(stack);

// console.log("pop ",stack.pop());
// console.log("top ",stack.peek());
// console.log("pop ",stack.pop());
// console.log("top ",stack.peek());
// console.log("pop ",stack.pop());
// console.log("top ",stack.peek());

// console.log(stack.isEmpty());

