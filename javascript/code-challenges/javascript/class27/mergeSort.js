function mergeSort(arr) {
    
    if (arr.length <= 1) 
    return arr
    let mid = Math.floor(arr.length / 2)
    let right = mergeSort(arr.slice(mid))
    let left = mergeSort(arr.slice(0, mid))
    console.log(right);
    console.log(left);
    return merge(left, right)
  }
  function merge(left, right) {
    let sort = [] 
    while (left.length && right.length) {
      
      if (left[0] < right[0]) {
        sort.push(left.shift())
      } else {
        sort.push(right.shift())
      }
    //   console.log(sort);
    }
     return [...sort, ...left, ...right]
  }
  console.log(mergeSort([8,4,23,42,16,15]));