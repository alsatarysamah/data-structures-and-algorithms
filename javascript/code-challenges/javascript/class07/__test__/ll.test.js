'use strict';

const LinkedList = require('../linked-list');

describe("the Kth from end",()=>{

    test(" Where k is greater than the length of the linked list ",()=>{
let ll = new LinkedList();
ll.append(1);
ll.append(2);

expect(ll.kthFromEnd(10)).toBe("exeption");
    })


test(" Where k and the length of the list are the same",()=>{
    let ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    expect(ll.kthFromEnd(2)).toBe(1);
        })
        
        
        test(" Where k is not a positive integer",()=>{
            let ll = new LinkedList();
            ll.append(1);
            ll.append(2);
            ll.append(3);
           
            expect(ll.kthFromEnd(-1)).toBe("exeption");
                })

               
                test(" Where the linked list is of a size 1",()=>{
                    let ll = new LinkedList();
                    ll.append(1);
                    expect(ll.kthFromEnd(0)).toBe(1);
                        })

                 
                        test(" “Happy Path” where k is not at the end, but somewhere in the middle of the linked list",()=>{
                            let ll = new LinkedList();
                            ll.append(1);
                            ll.append(2);
                            ll.append(3);
                            expect(ll.kthFromEnd(1)).toBe(2);
                                })

        //                         // insert a node after the last node of the linked list
        //                         test("insert a node after the last node of the linked list",()=>{
        //                             let ll = new LinkedList();
        //                             ll.append(1);
        //                             ll.append(2);
        //                             ll.append(3);
        //                             ll.insertAfter(3,10)
        //                             expect(ll.toString()).toBe("{1} -> {2} -> {3} -> {10} -> NULL");
        //                                 })
})