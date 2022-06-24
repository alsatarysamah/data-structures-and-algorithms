"use strict";
const Stack = require("./stack");

class PseudoQueue {
  constructor(stack, stack2) {
    this.in = new Stack();
    this.out = new Stack();
  }
  ////////////enqueue/////////////////
  enqueue(value) {
   
      this.in.push(value);

  }
  //////////////dequeue///////////////////////
  dequeue()
  {
        while (!this.in.isEmpty()) {
     let   temp=this.in.pop();
        this.out.push(temp);
       
    }
    return this.out.pop();

  }
  toString() {
    let currentNode = this.out.top;
    let str = "";
    while (currentNode) {
      //"{ a } -> { b } -> { c } -> NULL"
      str += `{${currentNode.value}} -> `;
      if (!currentNode.next) str += "NULL";
      currentNode = currentNode.next;
    }
    return str;
  }
}

module.exports = PseudoQueue;
