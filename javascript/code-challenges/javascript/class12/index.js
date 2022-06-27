'use strict';
const AnimalShelter=require ("./AnimalShelter");

let as=new AnimalShelter();
as.enqueue("cat");
as.enqueue("cat");
as.enqueue("cat");
as.enqueue("dog");
as.dequeue("cat");
as.dequeue("dog");
