'use strict';
let PseudoQueue=require("./PseudoQueue");
let pq=new PseudoQueue();
pq.enqueue(1);
pq.enqueue(2);
// pq.enqueue(3);
// pq.dequeue();
// pq.dequeue();

console.log(pq.in.peek());
// console.log(pq.out.peek())

