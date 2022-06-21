# Stacks and Queues
<!-- Short summary or background information -->
[PR](https://github.com/alsatarysamah/data-structures-and-algorithms/pull/30)
## Stack

A stack is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous.

## Queue
A queue is an ordered list of elements where an element is inserted at the end of the queue and is removed from the front of the queue. A queue works based on the first-in, first-out (FIFO) principle

## Challenge
<!-- Description of the challenge -->
Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

Node
Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
*All stack's method*
O(1) space efficiency

O(1) time efficiency

*All stack's method*
O(1) space efficiency

O(1) time efficiency


## API
<!-- Description of each method publicly available to your Stack and Queue-->
## Stack
we implement:
Push - Nodes or items that are put into the stack are pushed

Pop - Nodes or items that are removed from the stack are popped. When you attempt to pop an empty stack an exception will be raised.

Top - This is the top of the stack.
Peek - When you peek you will view the value of the top Node in the stack. When you attempt to peek an empty stack an exception will be raised.

IsEmpty - returns true when stack is empty otherwise returns false.

## Queue

we implement:

Enqueue - Nodes or items that are added to the queue.

Dequeue - Nodes or items that are removed from the queue. If called when the queue is empty an exception will be raised.

Front - This is the front/first Node of the queue.

Rear - This is the rear/last Node of the queue.

Peek - When you peek you will view the value of the front Node in the queue. If called when the queue is empty an exception will be raised.

IsEmpty - returns true when queue is empty otherwise returns false.
