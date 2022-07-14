"use strict";
const Node = require("./node");
class KaryTree {
  constructor(root) {
    this.root = root;
  }

  fizzBuzz() {
    let nodeValue = (val) => {
      if (val % 3 == 0 && val % 5 == 0) return "fizz buzz";
      else if (val % 3 == 0) return "fizz";
      else if (val % 5 == 0) return "buzz";
      else return val;
    };
    let reverse = (node) => {
      if (node.left) {
        node.left.value = nodeValue(node.left.value);
        reverse(node.left);
      }

      if (node.right) {
        node.right.value = nodeValue(node.right.value);
        reverse(node.right);
      }
      node.value = nodeValue(node.value);
    };
    reverse(this.root);
    return this;
  }
}

module.exports = KaryTree;
