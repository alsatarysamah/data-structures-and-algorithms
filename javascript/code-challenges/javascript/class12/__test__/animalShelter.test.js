'use strict';
const AnimalShelter=require ("../AnimalShelter");
describe("Animal Shelter",()=>{
test("Enqueue",()=>{
let as=new AnimalShelter();
as.enqueue("cat");
as.enqueue("dog");
expect(as.cats.length).toBe(1);
expect(as.dogs.length).toBe(1);
});
test("Dequeue",()=>{
    let as=new AnimalShelter();
    as.enqueue("cat");
    as.enqueue("dog");  
    as.dequeue("cat");
    as.dequeue("dog");
    expect(as.cats.length).toBe(0);
expect(as.dogs.length).toBe(0);

});




})