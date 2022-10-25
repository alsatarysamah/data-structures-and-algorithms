"use strict";
const BinaryTree = require("./binary-tree");
const Node = require("./node");
// const BTS=require("./BST");
// const treeify=require("treeify")

function isBST(tree) {
  let arr = [];
  let isHere=true;
  function traverse(node) {
    if (node.left) {
      traverse(node.left);
    }
    arr.push(node.value);

    if (arr.length >= 2&& arr[arr.length - 1] < arr[arr.length - 2]) {
        isHere= false;
      }
   
    if (node.right) {
      traverse(node.right);
    }
  }
  traverse(tree.root);
  return isHere;
}

let tree = null;

let one = new Node(100);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

tree = new BinaryTree(one);

// console.log(tree.findMax())
console.log(isBST(tree));
