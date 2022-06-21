'use strict';

const Queue=require("../lib/queue");

/**






 */
describe("Queue test",()=>{
it("Can successfully enqueue into a queue",()=>{
    let queue =new Queue();
    queue.enqueue(1);
    expect(queue.length).toBe(1);
});
it("Can successfully enqueue multiple values into a queue",()=>{
    let queue =new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.length).toBe(2);
});

it("Can successfully dequeue out of a queue the expected value",()=>{
    let queue =new Queue();
    queue.enqueue(1);
    queue.dequeue();
    expect(queue.length).toBe(0); 
});
it("vCan successfully peek into a queue, seeing the expected value",()=>{
    let queue =new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);

});
it("Can successfully empty a queue after multiple dequeues",()=>{
    let queue =new Queue();
    queue.enqueue(1);
    queue.enqueue(1);
    queue.enqueue(1);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.length).toBe(0); 
});
it("Can successfully instantiate an empty queue",()=>{
    let queue =new Queue();
    expect(queue instanceof Queue).toBeTruthy();
});
it("Calling dequeue or peek on empty queue raises exception",()=>{
    let queue =new Queue();
    
    expect(queue.dequeue()).toBe("the Queue is empty");
});
})