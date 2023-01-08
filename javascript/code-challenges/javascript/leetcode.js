function twoSum(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let rem1 = target - nums[i];

    if (obj[rem1] !== undefined) {
      return [obj[rem1], i];
    } else obj[nums[i]] = i;
  }
}
////////////////////4,6,5,3
// console.log(twoSum([3, 1, 2, 4], 7));

// https://leetcode.com/problems/palindrome-number/
//101 true 123 false  2002   60006
function palindrome(num) {
  if (num.toString()[0] == "-") return false;
  let str = num.toString().split("");
  let ispalindrome = true;
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] != str[str.length - i - 1]) ispalindrome = false;
  }

  return ispalindrome;
}
// console.log(palindrome(201));
////////////////////////////////////////////////////////////////////
//  https://leetcode.com/problems/roman-to-integer/

function romanToInt(s) {
  let obj = {};
  let num = 0;
  let str = s.split("");
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) obj[str[i]] += 1;
    else obj[str[i]] = 1;
  } // i=1  v=5 x=10 l=50 c=100 d=500 m=100
  console.log(obj);
  for (const element in obj) {
    switch (element) {
      case "I":
        num += obj[element];
        continue;
      case "V":
        num += obj[element] * 5;
        continue;
      case "X":
        num += obj[element] * 10;
        continue;
      case "L":
        num += obj[element] * 50;
        continue;
      case "C":
        num += obj[element] * 100;
        continue;
      case "D":
        num += obj[element] * 500;
        continue;
      case "M":
        console.log(obj[element]);
        console.log(num);
        num += obj[element] * 1000;
        console.log(num);
        continue;

      default:
        break;
    }
  }
console.log(num);
  if (str.includes("I") && str.includes("V")) {
    if (str.indexOf("I") > str.indexOf("V")) {
        console.log("if");
      num -= 2;
    }
  }
  // i=1  v=5 x=10 l=50 c=100 d=500 m=100
  if (str.includes("X") && str.includes("L")) {
    if (str.indexOf("X") > str.indexOf("L")) {
        console.log("if");
      num -= 20;
    }
  }
  if (str.includes("X") && str.includes("C")) {
    if (str.indexOf("X") < str.indexOf("C")) {
        console.log("if");
      num -= 20;
    }
  }
  if (str.includes("I") && str.includes("X")) {
    if (str.indexOf("I") < str.indexOf("X")) {
        console.log("if");
      num -= 2;
    }
  }
  if (str.includes("C") && str.includes("D")) {
    if (str.indexOf("C") < str.indexOf("D")) {
        console.log("if");
      num -= 200;
    }
  }
  if (str.includes("C") && str.includes("M")) {
    if (str.indexOf("C") > str.indexOf("M")) {
        console.log("if");
      num -= 200;
    }
  }
  return num;
}
// console.log(romanToInt("MCMXCIV"));
function isAnagram(one, two) {
  //Change both words to lowercase for case insensitivity..
  var a = one.toLowerCase();
  var b = two.toLowerCase();
console.log(a.split("").sort());
  // Sort the strings, then combine the array to a string. Examine the outcomes.
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}
var firstWord = "Deepak";
var secondWord = "Aman";
// console.log(isAnagram("leet", "teel"));
// isAnagram("Deepak", "Aman"); // true
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 1000);
}
