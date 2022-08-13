'use strict';

const mergeSort=require("../mergeSort")

describe("Merge Sort",()=>{
    
   
test ("Merge Sort",()=>{
    
    expect(mergeSort([8,4,23,42,16,15])).toStrictEqual([ 4, 8, 15, 16, 23, 42 ])
})

})