"use strict";
const Node = require('./node');
class BST {
  constructor(root) {
    this.root=root;
  }
  // add(value) {
  //   var newNode = new Node(value);
  //   if (this.root === null) {
  //     this.root = newNode;
  //     return this;
  //   }
  //   let current = this.root;
  //   while (current) {
  //     // if (value === current.value) return undefined;
  //     if (value < current.value) {
  //       if (current.left === null) {
  //         current.left = newNode;
  //         return this;
  //       }
  //       current = current.left;
  //     } else {
  //       if (current.right === null) {
  //         current.right = newNode;
  //         return this;
  //       }
  //       current = current.right;
  //     }
  //   }
  // }
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
