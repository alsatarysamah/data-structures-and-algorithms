'use strict';

const LinkedList = require('../linked-list');

describe("Insertion into LL",()=>{

    test(" add a node to the end of the linked list ",()=>{
let ll = new LinkedList();
ll.append(1);
ll.append(2);

expect(ll.head.value).toBe(1);
    })
//add multiple nodes to the end of a linked list

test(" add multiple nodes to the end of a linked list",()=>{
    let ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    expect(ll.head.value).toBe(1);
        })
        //insert a node before a node located i the middle of a linked list
        
        test(" insert a node before a node located i the middle of a linked list",()=>{
            let ll = new LinkedList();
            ll.append(1);
            ll.append(2);
            ll.append(3);
            ll.inserBefor(2,10)
            expect(ll.toString()).toBe("{1} -> {10} -> {2} -> {3} -> NULL");
                })

                // insert a node before the first node of a linked lis
                test(" insert a node before the first node of a linked lis",()=>{
                    let ll = new LinkedList();
                    ll.append(1);
                    ll.append(2);
                    ll.append(3);
                    ll.inserBefor(1,10)
                    expect(ll.toString()).toBe("{10} -> {1} -> {2} -> {3} -> NULL");
                        })

                        //insert after a node in the middle of the linked list
                        test(" insert after a node in the middle of the linked list",()=>{
                            let ll = new LinkedList();
                            ll.append(1);
                            ll.append(2);
                            ll.append(3);
                            ll.insertAfter(2,10)
                            expect(ll.toString()).toBe("{1} -> {2} -> {10} -> {3} -> NULL");
                                })

                                // insert a node after the last node of the linked list
                                test("insert a node after the last node of the linked list",()=>{
                                    let ll = new LinkedList();
                                    ll.append(1);
                                    ll.append(2);
                                    ll.append(3);
                                    ll.insertAfter(3,10)
                                    expect(ll.toString()).toBe("{1} -> {2} -> {3} -> {10} -> NULL");
                                        })
})