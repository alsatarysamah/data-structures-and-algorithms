//arr=[1,1,4,2,2,2,6,6,1] output=[2,4,6,12,1]
function arrays(arr){
    let res=[]
    res.push(arr[0])
    for(let i=1;i<arr.length;i++){
        if(arr[i]==arr[i-1]){
            let y=res.pop;
            res.push(y+arr[i])
        }
        else{
            res.push(arr[i])

        }
    }
    return res;
}
//arr=[3,4,5,6,7,8] n=3 out=[6,3,7,4,8,5]


function reverse(num){
    let rem=0;
    let rev=0;
    while(num!=0){
        rem=num%10;
        rev+=rev*10+rem;
        num=Math.floor(num/10)
    }
    return rev;
}
//find the anagram if two word has the same characters for example word 1: listen, word 2: silent, if the characters are the same return true otherwise return false

//str1="eat"  str2="ate"
//str1="bar " str2="bare"
//str1="bba"  str2="aab"

function compare(str1, str2) {
    let obj1 = {};
  
    if (str1.length != str2.length) return false;
    for (let i = 0; i < str1.length; i++) {
      if (obj1[str1[i]]) {
        obj1[str1[i]] += 1;
      } else {
        obj1[str1[i]] -= 1;
      }
      if (obj1[str2[i]]) {
          obj1[[i]] += 1;
        } else {
          obj1[str1[i]] -= 1;
        }
    }
  }
  
