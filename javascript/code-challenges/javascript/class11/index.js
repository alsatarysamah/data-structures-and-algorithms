'use strict';
let PseudoQueue=require("./PseudoQueue");
let pq=new PseudoQueue();
pq.enqueue(1);
pq.enqueue(2);
pq.enqueue(3);
pq.dequeue();
pq.dequeue();
// pq.dequeue();
// pq.enqueue(3);
// pq.enqueue(4);
// pq.enqueue(5);
// pq.enqueue(6);
console.log(pq.toString());

