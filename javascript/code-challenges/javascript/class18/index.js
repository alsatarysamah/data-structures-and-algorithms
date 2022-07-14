'use strict';
// const BinaryTree = require('./binary-tree');
const Node = require('./node');
// const BTS=require("./BST");
// const treeify=require("treeify")
const KaryTree=require("./k-ary-tree");

let tree = null;

let one = new Node(30);
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

tree = new KaryTree(one);

// console.log(tree.findMax())
console.log(tree.fizzBuzz(tree));
console.log(tree.root.value)