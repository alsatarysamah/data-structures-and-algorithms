'use strict';

const LinkedList = require('../linked-list');
const ll = new LinkedList();
const ll2 = new LinkedList();

ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll2.append(10);
ll2.append(20);
ll2.append(30);
ll2.append(40);
describe("Insertion into LL",()=>{
it("Zipping corectly",()=>{
 
 expect(ll.linkedListZip(ll,ll2).toString()).toBe("{1} -> {10} -> {2} -> {20} -> {3} -> {30} -> {4} -> {40} -> {5} -> NULL");

})
it("Zipping corectly if the first LL is null",()=>{
   const ll3 = new LinkedList();
    expect(ll.linkedListZip(ll3,ll2).toString()).toBe("{10} -> {20} -> {30} -> {40} -> NULL");
   
   })
   it("Zipping corectly if the second LL is null",()=>{
    const ll3 = new LinkedList();
     expect(ll.linkedListZip(ll2,ll3).toString()).toBe("{10} -> {20} -> {30} -> {40} -> NULL");
    
    })

})