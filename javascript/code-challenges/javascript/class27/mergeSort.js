"use strict";

function mergeSort(arr) {
  let n = arr.length;
  let mid = Math.floor(n / 2);
  let  left = arr.slice(0, mid);
  let  right = arr.slice(mid, n);

  if (n<= 1) {
    return arr;
  }
  mergeSort(left);
  mergeSort(right);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while (j < right.length) {
    arr[k] = right[j];
    k++;
    j++;
  }
  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }

  
  return arr;
}

console.log(mergeSort([8, 4, 23, 42, 16, 15]));
module.exports=mergeSort;