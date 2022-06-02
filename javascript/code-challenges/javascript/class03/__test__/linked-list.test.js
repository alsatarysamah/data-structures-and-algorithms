'use strict';

const LinkedList = require('../linked-list');

describe("Linked List",() => {

  test("instantiate an empty linked list",() =>{
let ll = new LinkedList();
expect(ll.head).toBeNull();

    });

    test("insert into the linked list",() => {
        let ll = new LinkedList();
        ll.insert(1);
        expect(ll.head.value).toBe(1);

    });

    
    test("The head property will properly point to the first node in the linked list",() => {
        let ll = new LinkedList();
        ll.insert(1);
        ll.insert(2);
        expect(ll.head.value).toBe(2);

    });

    test("Can properly insert multiple nodes into the linked list",() => {
        let ll = new LinkedList();
        ll.insert(1);
       
        expect(ll.head.value).toBe(1);
        ll.insert(2);
        expect(ll.head.value).toBe(2);

    });

    test("Will return true when finding a value within the linked list that exists",() => {
        let ll = new LinkedList();
        ll.insert(1);
        ll.insert(2);
        expect(ll.includes(2)).toBe(true);


    });

    
    test("Will return false when searching for a value in the linked list that does not exist",() => {
        let ll = new LinkedList();
        ll.insert(1);
        ll.insert(2);
        expect(ll.includes(5)).toBe(false);
    });

    
    test("Can properly return a collection of all the values that exist in the linked list",() => {

        let ll = new LinkedList();
        ll.insert(1);
        ll.insert(2);
        expect(ll.toString()).toBe("{2} -> {1} -> NULL");
    });
})