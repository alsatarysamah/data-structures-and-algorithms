"use strict";

const Node = require("./node");
class BST {
  constructor(root) {
    this.root = root;
  }
  add(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return 1;
    }
    let curr = this.root;
    // let insert=()=>{}
    let insert = () => {
      if (value < curr.value) {
        if (curr.left === null) {
          curr.left = newNode;
          return 1;
        }
        curr = curr.left;
        insert();
      } else {
        if (curr.right === null) {
          curr.right = newNode;
          return 1;
        }
        curr = curr.right;
        insert();
      }
    };
    insert();
  }

  contains(value) {
    let isHere = false;
    let search = (node) => {
      if (node.value == value) isHere = true;
      if (node.left) search(node.left);
      if (node.right) search(node.right);
    };
    search(this.root);
    return isHere;
  }
}
module.exports = BST;
