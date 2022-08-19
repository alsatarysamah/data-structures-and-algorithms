'use strict';

const Hashmap=require("../hashtable")

const myhashmap = new Hashmap(10);
describe("Hash Table",()=>{
    beforeAll(()=>{
        
        myhashmap.set("ayman", "01");
        myhashmap.set("samah", "02");
        myhashmap.set("sarah", "03");
        myhashmap.set("yara", "04");
        myhashmap.set("elyan", "05");
        myhashmap.set("tamara", "06");
    })
   
test ("Retrieving based on a key returns the value stored",()=>{

    expect(myhashmap.get("samah")).toStrictEqual("02")
})
test ("Successfully returns null for a key that does not exist in the hashtable",()=>{
   
    expect(myhashmap.get("h")).toStrictEqual(null)
})
test ("Successfully returns a list of all unique keys that exist in the hashtable",()=>{
   
    expect(myhashmap.keys()).toStrictEqual([
        [ 'tamara' ],
        [ 'yara' ],
        [ 'sarah' ],
        [ 'elyan' ],
        [ 'ayman' ],
        [ 'samah' ]
      ])
})
test ("Successfully handle a collision within the hashtable",()=>{
    myhashmap.set("ayman", "01");
    expect(myhashmap.keys()).toStrictEqual([
        [ 'tamara' ],
        [ 'yara' ],
        [ 'sarah' ],
        [ 'elyan' ],
        [ 'ayman' ],
        [ 'ayman' ],
        [ 'samah' ]
      ])
})
test ("Successfully retrieve a value from a bucket within the hashtable that has a collision",()=>{

    expect(myhashmap.get("elyan")).toStrictEqual("05")
})
test ("Successfully retrieve a value from a bucket within the hashtable that has a collision",()=>{

    expect(myhashmap.get("elyan")).toStrictEqual("05")
})
})