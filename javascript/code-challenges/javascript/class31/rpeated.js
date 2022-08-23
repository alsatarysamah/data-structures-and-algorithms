const Hashmap = require("../class30/hashtable");

function repeated(str) {
  str = str.toLowerCase();
  str = str.replaceAll(",", "");
  let arr = str.split(" ");
  let hash = new Hashmap();
  hash.set(arr[0], "01");
  let output;
  let isHere = false;
  for (let i = 1; i < arr.length; i++) {
    isHere = hash.contain(arr[i]);
    hash.set(arr[i], "01");
    output = arr[i];

    if (isHere) break;
  }
  return output;
}
console.log(
  repeated(
    "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."
  )
);
module.exports = repeated;
