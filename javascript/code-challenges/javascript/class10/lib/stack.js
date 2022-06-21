'use strict';
const Node = require("./node");
class Stack {

constructor(top){
    this.top=top;
    this.length = 0;
}
isEmpty(){
return this.top==null;
}
push(value){
    let newNode =new Node(value);
    if (this.top == null){
        this.top=newNode;
        this.length += 1;
      
    }
    else{
    newNode.next=this.top;
    this.top=newNode;
    this.length += 1;
    
}}
pop()
{
    if (this.top==null)
    {
        return "No Nodes the stack is empty";
    }
    else{
        let temp =this.top;
        this.top=this.top.next;
        temp.next=null;
        this.length -= 1;
        return temp.value;
    }
   
}
peek(){
    if (this.top==null)
    {
    
        return "No Nodes the stack is empty";
    }
    return this.top.value;
}
}
module.exports = Stack;