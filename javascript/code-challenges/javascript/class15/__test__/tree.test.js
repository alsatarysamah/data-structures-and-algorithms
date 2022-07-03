'use strict';
const BinaryTree=require ("../binary-tree");
const Node = require('../node');
const BTS=require("../BST");

describe("Binary Tree",()=>{
    let   tree =null;
    beforeAll(() => {
        let one = new Node(1);
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
    });
/**




Returns true	false for the contains method, given an existing or non-existing node value */
test("Can successfully instantiate an empty tree",()=>{
expect(tree instanceof BinaryTree).toBeTruthy();
});
test("Can successfully instantiate a tree with a single root node",()=>{
    let one = new Node(1);
  let  tree = new BinaryTree(one);
  expect(tree.root.value).toEqual(1);
});
test("Can successfully return a collection from a preorder traversal",()=>{
    expect( tree.preOrder()).toEqual([1, 2, 6, 7, 8, 9, 3, 4, 5]);
});
test("Can successfully return a collection from an inorder traversal",()=>{
    expect( tree.inOrder()).toEqual([6, 8, 7, 9, 2, 1, 4, 3, 5]);
});
test("Can successfully return a collection from a postorder traversal",()=>{
    expect( tree.postOrder()).toEqual( [8, 9, 7, 6, 2, 4, 5, 3, 1]);
});
test("Returns true for the contains method, given an existing  node value",()=>{
    expect(tree.contains(2)).toEqual(true);
});
test("Returns false for the contains method, given a non-existing node value",()=>{
    expect(tree.contains(10)).toEqual(false);
});



})