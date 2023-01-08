let arr = [1, 2, 3, 4, 5,100];
let i = 0;
function rec(element) {
  i += 1;
  if (i == arr.length + 1) return 1;
  return element * rec(arr[i]);
}
console.log(rec(arr[0]));
