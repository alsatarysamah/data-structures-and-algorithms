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
