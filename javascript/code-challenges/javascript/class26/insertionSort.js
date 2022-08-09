function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    console.log("i= ", i);
    let value = arr[i];
    let j = i-1;
    while (arr[j] > value && j >= 0) {
      console.log("j= ", j);
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = value;
    console.log(arr);
  }
  return arr;
}
console.log(insertionSort([8,4,23,42,16,15]));
module.exports = insertionSort;
