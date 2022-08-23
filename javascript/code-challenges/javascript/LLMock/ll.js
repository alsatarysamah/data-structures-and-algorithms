"use strict";
const Node = require("./Node");
class LL {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(value) {
    let newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.length++;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
      this.length++;
    }
  }
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
  isEmpty() {
    return this.head ? false : true;
  }
  //////////////insert at//////////////////
  insertAt(data, index) {
    if (this.head) {
      if (index <= this.length) {
        let newNode = new Node(data);
        let current = this.head;
        if (index == 0) {
          newNode.next = this.head;
          this.head = newNode;
          return;
        }

        while (current.next != null && index >= 0) {
          index >= 0 ? index-- : null;
          if (index == 0) {
            newNode.next = current.next;
            current.next = newNode;
          }

          current = current.next;
        }
      } else {
        return "index>length";
      }
    } else {
      return "ll is empty";
    }
  }
  ////////////getByIndex(index) ///////////
  getByIndex(index) {
    let current = this.head;
    while (index >= 0) {
      if (index === 0) {
        return current.value;
      }
      index--;
      current = current.next;
    }
  }
  ///////////getByData(data) ///////////
  getIndex(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value == data) {
        return index;
      }
      index++;
      current = current.next;
    }
  }
  ///////removeAtt(index)//////////
  removeAt(index) {
    let prev = this.head;
    let curr = this.head;
    if (index == 0) {
      curr = curr.next;
      this.head.next = null;
      this.head = curr;
    } else {
      curr = curr.next;
      while (index  > 0) {
        console.log("loop");
        curr = curr.next;
        prev = prev.next;
        index--;
      }
      curr.next= prev;
    //   curr=null;
    }
  }
}
let ll = new LL();
ll.append(5);
ll.append(8);
ll.append(20);
ll.append(69);

// console.log(ll.toString());
// console.log(ll.isEmpty());
// console.log(ll.insertAt("99", 1));
// console.log(ll.getByIndex(3));
// console.log(ll.getIndex(69));
console.log(ll.toString());
ll.removeAt(1);
console.log(ll.toString());
