
const Hashmap = require("./hashtable");
const leftjoin=require ("./leftjoin")
let hashMap=new Hashmap(20);
hashMap.set("1","samah")
hashMap.set("2","moath")
hashMap.set("3","tamara")
hashMap.set("4","ahmad")

let hashMap2=new Hashmap(20);
hashMap2.set("1","umelyan")
hashMap2.set("2","abu anwar")
hashMap2.set("5","ameen")
hashMap2.set("6","sara")
hashMap2.map.forEach((ll) => {
  console.log(ll.values());
})
leftjoin(hashMap,hashMap2)



