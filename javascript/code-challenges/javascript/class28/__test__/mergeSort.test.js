'use strict';

const quickSort=require("../quickSort")

describe("Quick Sort",()=>{
    
   
test ("Quick Sort",()=>{
    
    expect(quickSort([8,4,23,42,16,15])).toStrictEqual([ 4, 8, 15, 16, 23, 42 ])
})

})