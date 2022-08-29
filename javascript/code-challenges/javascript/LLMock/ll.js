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
    // 1 2 3
    let current = this.head;
    while (index > 0) {
      index--;
      current = current.next;
    }
    return current.value;
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
      //1=>5=>6=>7
      //
      curr = curr.next;
      while (index > 1) {
        console.log("loop");
        curr = curr.next;
        prev = prev.next;
        index--;
      }
      prev.next = curr.next;
      //   curr=null;
    }
  }
  reverse() {
    // try{
    if (this.length > 1) {
      let prev = null;
      let curr = this.head;
      let next = null;

      while (curr.next) {
        next = curr.next;
        curr.next = prev;

        prev = curr;

        curr = next;
      }
      ll.head = prev;
      console.log(this.toString());
    } else {
      if (this.length == 1) return this;
      throw new Error("empty LL");
    }
    //   }catch(e){
    // return e.message;
    //     }
  }
  plandmore() {
    let j = this.length - 1;
    let isPlandmore = false;





    
    for (let i = 0; i < Math.floor(this.length / 2); i++) {
      if (this.getByIndex(i) == this.getByIndex(j)) {
        isPlandmore = true;
      } else {
        isPlandmore = false;
      }
      j--;
    }
    return isPlandmore;
  }
}
let ll = new LL();
ll.append(5);
ll.append(1);
// ll.append(1);
ll.append(4);
ll.append(5);

// console.log(ll.toString());
// console.log(ll.isEmpty());
// console.log(ll.insertAt("99", 1));
// console.log(ll.getByIndex(3));
// console.log(ll.getIndex(69));
// console.log(ll.toString());
// ll.removeAt(0);
// console.log(ll.toString());
// console.log(ll.toString());
// console.log(ll.reverse());
// console.log(ll.toString());
console.log(ll.plandmore());
