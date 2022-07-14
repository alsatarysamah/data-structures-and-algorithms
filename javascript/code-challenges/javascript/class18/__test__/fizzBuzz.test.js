'use strict';
const KaryTree=require ("../k-ary-tree");
const Node = require('../node');


describe("Fizz Buzz",()=>{
    let   tree =null;
   
test ("Fizz buzz",()=>{
    let one = new Node(30);
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
    tree = new KaryTree(one);
    tree.fizzBuzz();
    expect(tree.root.value).toBe('fizz buzz')
})

})