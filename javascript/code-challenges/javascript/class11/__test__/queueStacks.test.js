'use strict';
let PseudoQueue=require("../PseudoQueue");
let pq=new PseudoQueue();
describe("Queue using Staks",()=>{
test("Enqueue",()=>{
    pq.enqueue(1);
    pq.enqueue(2);
expect(pq.in.peek()).toBe(2);

})

test("Dequeue",()=>{
    pq.enqueue(1);
    pq.enqueue(2);
    pq.enqueue(3);
    pq.dequeue();
expect(pq.out.peek()).toBe(2);

})


})