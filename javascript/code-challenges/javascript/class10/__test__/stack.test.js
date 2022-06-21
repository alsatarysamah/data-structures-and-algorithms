'use strict';
const Stack = require ("../lib/stack");

describe("Stack test",()=>{
it("Can successfully push onto a stack",()=>{
    let stack = new Stack();
    stack.push(1);
    expect(stack.length).toBe(1);
});
it("Can successfully push multiple values onto a stack",()=>{

    let stack = new Stack();
    stack.push(1);
    stack.push(1);
    expect(stack.length).toBe(2);
});
it("Can successfully pop off the stack",()=>{
    let stack = new Stack();
    stack.push(1);
    stack.pop();
    expect(stack.length).toBe(0);


});
it("Can successfully empty a stack after multiple pops",()=>{
    let stack = new Stack();
    stack.push(1);
    stack.push(1);
    stack.pop();
    stack.pop();
    expect(stack.length).toBe(0);

});
it("Can successfully peek the next item on the stack",()=>{
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.next.value).toBe(2); 
});
it("Calling pop or peek on empty stack raises exception",()=>{
    let stack = new Stack();
   
    expect(stack.pop()).toBe("No Nodes the stack is empty");
});
it("Can successfully instantiate an empty stack",()=>{
    let stack = new Stack();
    expect(stack instanceof Stack).toBeTruthy();
});



})
