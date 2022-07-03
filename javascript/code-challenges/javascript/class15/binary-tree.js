"use strict";
const Node = require("./node");
class BinaryTree {
  constructor(root) {
    this.root = root;
  }
  preOrder() {
    let arr = [];
    let reverse = (node) => {
      arr.push(node.value);
      if (node.left) reverse(node.left);
      if (node.right) reverse(node.right);
    };
    reverse(this.root);
    return arr;
  }

  inOrder() {
    let arr = [];
    let reverse = (node) => {
      if (node.left) reverse(node.left);
      arr.push(node.value);
      if (node.right) reverse(node.right);
    };
    reverse(this.root);
    return arr;
  }
  postOrder() {
    let arr = [];
    let reverse = (node) => {
      if (node.left) reverse(node.left);

      if (node.right) reverse(node.right);
      arr.push(node.value);
    };
    reverse(this.root);
    return arr;
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
module.exports = BinaryTree;
