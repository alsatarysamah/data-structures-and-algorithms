"use strict";
const Node = require("./node");

class Linkedlist {
  constructor() {
    this.head = null;
  }
  //append/////////////////////////////////////////////
  append(new_data) {
    let newNode = new Node(new_data);

    if (this.head == null) {
      this.head = new Node(new_data);
      return;
    }
    newNode.next = null;

    var last = this.head;
    while (last.next != null) last = last.next;

    last.next = newNode;
    return;
  }
  /////////////kth from end///////////
  kthFromEnd(k) {
    if (k >= 0) {
      let currentNode = this.head;
      let nodesCount = 0;
      while (currentNode) {
        nodesCount++;

        currentNode = currentNode.next;
      }
      if (k < nodesCount) {
        currentNode = this.head;
        let steps = nodesCount - k - 2;
        while (steps >= 0) {
          currentNode = currentNode.next;
          steps--;
        }
        return currentNode.value;
      } else return "exeption";
    } else return "exeption";
  }

  //////////////////to string///////////////
  toString() {
    let currentNode = this.head;
    let str = "";
    while (currentNode) {
      //"{ a } -> { b } -> { c } -> NULL"
      str += `{${currentNode.value}} -> `;
      if (!currentNode.next) str += "NULL";
      currentNode = currentNode.next;
    }
    return str;
  }

  ///////linked-list-zip/////////////
  linkedListZip(ll1,ll2){
let result = new Linkedlist();
let current1=ll1.head;
let current2=ll2.head;
while(current1!=null || current2!=null)
{
  if(current1 !=null){
    result.append(current1.value);
    current1=current1.next;
  }
  if(current2 !=null){
    result.append(current2.value);
    current2=current2.next;
  }

}
return result;
  }
//////////////insert///////////////
insert(value) {
  let newNode = new Node(value);
  if (!this.head) {
    this.head = newNode;
    //   console.log(newNode.value)
    return this;
  } else {
    newNode.next = this.head;
    this.head = newNode;
    //   console.log
    return this;
  }
}
  /////////////revers ll//////////////////////
  reverse(ll){
let current =ll.head;
let result=new Linkedlist();
while(current){
result.insert(current.value);
current=current.next;
}
return result;
  }
}
///////////
module.exports = Linkedlist;
