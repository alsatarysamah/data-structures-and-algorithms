'use strict';

const insertionSort=require("../insertionSort")

describe("Insertion Sort",()=>{
    
   
test ("Insertion Sort",()=>{
    
    expect(insertionSort([8,4,23,42,16,15])).toStrictEqual([ 4, 8, 15, 16, 23, 42 ])
})

})