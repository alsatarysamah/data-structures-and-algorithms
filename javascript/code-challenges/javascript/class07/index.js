'use strict';
const LinkedList = require('./linked-list');
const ll = new LinkedList();

ll.append(1);
ll.append(2);
// ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
// ll.insertAfter(3,10);
// ll.inserBefor(1,10)
console.log(ll.toString())

console.log(ll.kthFromEnd(1))