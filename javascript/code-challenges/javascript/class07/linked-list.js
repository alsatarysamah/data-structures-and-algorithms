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
}

module.exports = Linkedlist;
