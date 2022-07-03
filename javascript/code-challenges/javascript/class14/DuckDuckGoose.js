function DuckDuckGoose(arr,k){
//[a,b,c,d,e]    c[a,b,d,e]  a[b,d,e]  e[b,d]  b[d]  d
//l-k 2-3=-1
//.splice(index,number of element)
// let result=[1,2,3];
// result.splice(3,1);
console.log(arr)
let l=arr.length ;
for( let i = 0 ; i <=l-k+1; i++){
    // console.log(arr.length -k)
    // console.log(i)
if(arr.length -k >= 0){
    arr.splice(k-1,1);
    console.log(arr)
   
}
if(arr.length -k < 0)  {
    let index=arr.length-k-1+arr.length+1;
    console.log("index");
    arr.splice(index,1);
    console.log(arr)
}
 
 
    
}

}
DuckDuckGoose(["a","b","c","d","e"],3);