const Hashmap = require("./hashtable");

module.exports = function leftjoin(hashMap1, hashMap2) {
  let result = [];
  let arr1;
  let arr2;
  let key = hashMap1.keys();

  key.forEach((element) => {
    arr1 = hashMap1.get(element[0]);

    if (hashMap2.contain(element[0])) {
      arr2 = hashMap2.get(element[0]);
    } else {
      arr2 = null;
    }
    result.push([element[0], arr1, arr2]);
  });
  {
  }
  console.log(result);
  return result;
};
