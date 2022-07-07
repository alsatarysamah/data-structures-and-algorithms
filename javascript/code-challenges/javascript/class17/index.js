'use strict';
const BinaryTree = require('./binary-tree');
const Node = require('./node');
// const BTS=require("./BST");
// const treeify=require("treeify")

let tree = null;

// let one = new Node(23);
// let two = new Node(8);
// let three = new Node(42);
// let four = new Node(4);
// let five = new Node(16);
// let six = new Node(15);
// let seven = new Node(22);
// let eight = new Node(27);
// let nine = new Node(85);
// let nine2 = new Node(85);

// one.left=two;
// one.right=three;
// two.left=four;
// two.right=five;
// five.left=six;
// five.right=seven;
// three.left=eight;
// three.right=nine;
// nine.right=nine2;

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);
let nine2 = new Node(10);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;
eight.left=nine2;

tree = new BinaryTree(one);

// console.log(tree.findMax())
console.log(tree.breadthFirst());
