function reserveArray(arr)
{try{
    let result=[];
    for (var i = arr.length-1 ; i>=0 ; i--)
    result.push(arr[i])
return result;
}
catch{return "array is null"}
}

// function reserveArrayV2(arr)
// {
//     return arr.reverse();
// }
console.log(reserveArray([1,2,3])) 