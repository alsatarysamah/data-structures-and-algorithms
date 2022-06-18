'use strict';
const LinkedList = require('./linked-list');
const ll = new LinkedList();
const ll2 = new LinkedList();
const ll3 = new LinkedList();

// ll.append(1);
// ll.append(2);
// ll.append(3);
// ll.append(4);
// ll.append(5);
ll2.append(10);
ll2.append(20);
ll2.append(30);
ll2.append(40);
console.log(ll.linkedListZip(ll3,ll2).toString());