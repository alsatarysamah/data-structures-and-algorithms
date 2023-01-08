function reverseArray1(arr) {
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res;
}

function reverseArray2(arr) {
  return arr.reverse();
}
console.log("Reserve Array==> ", reverseArray1([1, 2, 3]));
//////////////////////////////////////////////////////
function duplicateItemArray(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1] && !res.includes(arr[i])) res.push(arr[i]);
  }
  return res ;
}
console.log("Duplicate Item in Sorted Array ==>",duplicateItemArray([1,1,2,3,4,4,4,5]));
////////////////////////////////////
function countOccurrences(arr) {
  let output = arr.reduce((acc, curr) => {
    if (acc[curr]) acc[curr] += 1;
    else acc[curr] = 1;
    return acc;
  }, {});
  return output;
}
console.log(
  "Count of Occurrences ==> ",
  countOccurrences([1, 1, 1, 2, 3, 6, 6])
);
////////////////////////////////////////////////////////
