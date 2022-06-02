"use strict";
const Node = require("./node");

class Linkedlist {
  constructor() {
    this.head = null;
  }
  //insert/////////////////////////////////////////////
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
  //includes//////////////////////////////////////////
  includes(value) {
    //

    // console.log(this.head);

    let isIncludes = false;
    let currentNode = this.head;
    while (currentNode) {
      //   console.log(currentNode.value);
      if (currentNode.value === value) {
        isIncludes = true;
      }

      currentNode = currentNode.next;
    }
    return isIncludes;
  }
  //toString/////////////////////
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
