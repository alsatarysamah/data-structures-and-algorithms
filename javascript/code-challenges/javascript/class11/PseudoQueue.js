"use strict";
const Stack = require("./stack");

class PseudoQueue {
  constructor(stack,stack2) {
    this.stack = new Stack();
    this.stack2 = new Stack();
  }
  ////////////enqueue/////////////////
  enqueue(value) 
  { let steps=this.stack.length;
    // let s2 = new Stack();
    this.stack.push(value);
    if (this.stack.isEmpty()) {
      this.stack.push(value);
  
    } else {
      
      this.stack.push(value);  

      while (steps>=0) {
        this.stack2.push(this.stack.pop());
        // console.log("in",this.stack.pop())
        steps--;
      }
      
      // this.stack=;
    }
    
  }
  //////////////dequeue///////////////////////
  dequeue()
  { 
    if (this.stack.length === 0) {
      while(this.stack2.length > 0) {
        this.stack.push(this.stack2.pop());
      }
    }
    
    return this.stack.pop();
//     console.log("de") 
//     let steps=this.stack2.length;
//     // console.log("length",steps)
//     if (this.stack2.length==1) {
//       return this.stack2.pop();
//     }
//     else{
//       console.log("bs1",this.stack.length)
//     console.log("bs2",this.stack2.length)
//       while (steps>0) {
//       this.stack.push(this.stack2.pop());
// steps--;
//     }
//     console.log("s1",this.stack.length)
//     console.log("s2",this.stack2.length)
//   //  this.stack=this.stack2;
//     // this.stack2.pop();
//     this.stack.pop();
//     // this.stack.pop();
//   }
//     // 
//     // return  this.stack.pop();
  }
  toString() {
    let currentNode = this.stack2.top;
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
