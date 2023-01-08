/**Write a function that will take in an array and index and return new shuffled
 * array where the fist element will be starting from that index and the second
 * will be the original one and so on: //
 * exp: // input: [1, 2, 3, 4, 5, 6], idx = 3 // output: [4, 1, 5, 2, 6, 3]  */
// function two(arr, index) {
//   let arr2 = [];
//   arr2.push(arr[index]);
//   for (let i = 0; i < index; i++) {
//     if (arr[i]) arr2.push(arr[i]);
//     if (arr[index + i + 1]) arr2.push(arr[index + i + 1]);
//   }
//   return arr2;
// }
function two(arr, index) {
  let arr2 = [];
  // arr2.push(arr[index]);
  for (let i = 0; i < index; i++) {
    arr2.push(arr[index+i]);
    arr2.push(arr[i])
  }
  return arr2;
}
// console.log("***********",two([1, 2, 3, 4, 5, 6], 3));
/**Find all the missing numbers between the min and the max number in this array
 *  (No built in methods allowed) // array = [0, 5, 4, 9, 3];  */
function numbers(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  let arr2 = [];
  for (let i = min; i < max + 1; i++) {
    if (!arr.includes(i)) {
      arr2.push(i);
    }
  }
  return arr2;
}
// console.log(numbers([1, 2, 8, 0, 11, 6, 7]));
/**Write a function that will return a string combined with the number of letters
 *  between the fist and the last letter.
 *  // input = 'Jack', output: 'J2k' What is the difference between get and post requests? */
function stringbet(str) {
  return `${str[0]}${str.length - 2}${str[str.length - 1]}`;
}
// console.log(stringbet("jack"));
/**'- given an array, return an array for the elements that don't have greater
 *  elements on the right side of them.. EX: [2,8,5,4] => [8,5,4] */
function elementInArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
}
// console.log(elementInArr([2,8, 5, 4]));
function twoArr(arr1, arr2) {
  let r = arr1.every((elemnt, index) => {
    return elemnt === arr2[index];
  });
  return r;
}
// console.log(twoArr([1,2,3],[1,2,3]));
function getString(x) {
  // string class has a constructor
  // that allows us to specify size of
  // string as first parameter and character
  // to be filled in given size as second
  // parameter.
  return x;
}

// Function that returns true if
// the given strings contain same
// characters in same order
function solve(s1, s2) {
  // Get the first character of both strings
  var a = getString(s1[0]),
    b = getString(s2[0]);

  // Now if there are adjacent similar character
  // remove that character from s1
  for (var i = 1; i < s1.length; i++)
    if (s1[i] != s1[i - 1]) {
      a += getString(s1[i]);
    }

  // Now if there are adjacent similar character
  // remove that character from s2
  for (var i = 1; i < s2.length; i++)
    if (s2[i] != s2[i - 1]) {
      b += getString(s2[i]);
    }

  // If both the strings are equal
  // then return true
  if (a == b) return true;

  return false;
}

// Driver code
var s1 = "Geeks",
  s2 = "Geks";
// console.log(solve(s1,s2));
function samah(s1, s2) {
  let bol1 = s1.split("").every((element, index) => s2.includes(element));
  let bol2 = s2.split("").every((element, index) => s1.includes(element));

  return bol1 && bol2;
}
// console.log(samah("samah", "sammah"));
function repeted(s1) {
  let obj = {};
  for (var i = 1; i < s1.length; i++) {
    if (Object.keys(obj).includes(s1[i])) obj[s1[i]] += 1;
    else obj[s1[i]] = 1;
  }
  return obj;
}
// console.log(repeted("ammmmah"));

/**2. The sum of number that falls between the smaller and the largest
 * number in that array without using built-in methods
 * Input = [2,5,6,7,9,10,11,15] Output = 119  */
function sum(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != min && arr[i] != max) {
      sum += arr[i];
    }
  }
  return sum;
}
// console.log(sum([2,5,6,7,9,10,11,15]));

function prime() {
  for (let i = 1; i < 100; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prime = false;
      }
    }
    if (prime) console.log(i);
  }
}
// prime();
function cube(num) {
  //153
  let x = String(num).split("");
  console.log(x);
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += Math.pow(Number(x[i]), x.length);
  }
  console.log(sum);
  return sum === num;
}
// console.log(cube(153));
function unique(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) arr.push(str[i]);
  }
  return arr;
}

// console.log(unique("samammh"));

// [2,2,2,7,3,3,1,2]
function sumation(arr) {
  //   let arr2 = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let i = 0; i < arr.length; i++) {
  //       let x = arr.shift();
  //       let y = arr.shift();
  //       if (x === y) {
  //         arr2.push(x + y);
  //       } else {
  //         arr2.push(x);
  //         arr2.push(y)
  //       }
  //     }
  //   }
  //   console.log(arr2);
}

//  sumation([2,2,2,7,3,3,3,1,2])=================================================================
function printRepeating(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      let y = result.pop();

      result.push(arr[i] + y);
    } else {
      result.push(arr[i]);
    }
  }
  console.log(result);
  return result;
}
// printRepeating([2, 2, 2, 7, 3, 3, 3, 1, 2]);

function reverse(str) {
  //     let arr=str.split(" ")
  //     let arr2=[];
  //   for (i = arr.length-1; i >= 0; i--) {
  // arr2.push(arr[i])
  //   }
  let output = str.split(" ").reverse().join(" ");
  console.log(output);
}
// reverse("I love u ya man")
function addToMid(arr, num) {
  let index = Math.floor(arr.length / 2);
  // arr.splice(index,0,arr[index]+num);
  console.log(arr[index] + num);
  arr[index] = arr[index] + num;
  console.log(arr);
  let arr8 = arr.reverse();
  console.log(arr8);
  let r = [1, 2, 3];
  console.log([...r, ...r]);
  let x = 5;
  let y = 9;
  let temp = x;

  x = y + x;
  y = x - y;
  x = x - y;
  console.log(x, y);
}
// addToMid([1,2,3,4,5,6],10)

function repeated(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i], i + 1)) {
      console.log(arr[i]);
    }
  }
}
// repeated([2,3,2,5,8,5,7,7])

let arrF = [1, 5, 6, 7, 8, 9, 10, 12];
//output
//[1,8,5,9,6,10,7,12]
function arrrev(arr) {
  let arr2 = [];
  for (i = 0; i < arr.length / 2; i++) {
    arr2.push(arr[i]);
    arr2.push(arr[i + arr.length / 2]);
  }
  console.log(arr2);
}
// arrrev(arrF);
function indexOffirst(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return i;
      }
    }
  }
}
// console.log(indexOffirst([3,5,10,2,7,7,1]));
function timeOfMeasurment(i) {
  let count = 0;
  while (i > 0) {
    console.log(i);
    if (i % 2 === 0) {
      i = i / 2;
    } else i--;
    count++;
  }
  return count;
}
// console.log("7. timeOfMeasurment : ", timeOfMeasurment(14));
function reversedNum(revNum) {
  let reverse = 0;
  let lastNum;
  while (revNum != 0) {
    lastNum = revNum % 10;
    reverse = reverse * 10 + lastNum;
    revNum = Math.floor(revNum / 10);
  }
  return reverse;
}
//   console.log('12. reversedNum : ' ,reversedNum(1596));

function isArmstrongNum(armestrongNum) {
  let n = armestrongNum.toString().split("");
  let result = 0;
  for (let i = 0; i < n.length; i++) {
    result += n[i] ** n.length;
    console.log("nnnnnnnnn",n[i] ** n.length);
  }
  if (result === armestrongNum) return true;
  else return false;
}
  // console.log('15. isArmstrongNum : ' ,isArmstrongNum(153));
function removedublicate(str) {
  let result = [];
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) result.push(arr[i]);
  }
  return arr.length === result.length;
}
// console.log(removedublicate("smah"));
function obj(str) {
  let obj = {};
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      return false;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return true;
}
// console.log(obj("smahaaa"));
//aaabbcdd  a3 b2c1d2
function count(str) {
  let result = [];
  let arr2 = [];
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (result[result.length - 1] == arr[i]) {
      let y = result.pop();
      let x = arr2.pop();
      result.push(y);
      arr2.push(x + 1);
    } else {
      result.push(arr[i]);
      arr2.push(1);
    }
  }
  let x = [];
  for (let i = 0; i < result.length; i++) {
    x.push(result[i]);
    x.push(arr2[i]);
  }
  return x.join("");
}
// console.log(count("aaabbbcadd"));
function jded(str) {
  let count = 1;
  let arr = str.split("");
  let letters = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count += 1;
    } else {
      letters.push(`${arr[i]}${count}`);
      count = 1;
    }
  }
  return letters.join("");
}
// console.log(jded("aaaatteeah"));
function doublicate(arr) {
  let len1 = arr.length;
  for (let i = 0; i < len1 + 1; i++) {
    if (i == 0) arr.splice(i, 0, arr[i]);
    else if (arr[i] != arr[i + 1]) {
      arr.splice(i + 1, 0, arr[i + 1]);
    }
    if (i == len1) arr.splice(+1, 0, arr[i + 1]);
  }
  return arr;
}
// console.log(doublicate([1, 2, 3, 4]));
// let a=1,b=2;
// [a,b]=[b,a]
// console.log(a,b);
let set = new Set([1, 2, 2, 3, 5, 5]);
// console.log([...set]);

function reversee(str) {
  let arr = str.split(" ");
  console.log(arr);
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    res = [...res, arr[i]];
  }
  return res.join(" ");
}
// console.log(reversee("hi samah how"));//h i  s a m a h

function doublicatee(arr) {
  let obj = {};
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      arr2.push(arr[i]);
      obj[arr[i]] = 1;
    }
  }
  return [...arr];
}

// console.log("",doublicatee([1,2,3,3,8,9,7,2]));
function pop(str) {
  let arr = str.split("");
  let str2 = "";
  while (arr.length > 0) {
    let x = arr.pop();
    let y = arr.shift();
    str2 += x + y;
  }
  return str2;
}
// console.log(pop("123456"));
function rev(num) {
  let rem = 0;
  let shigt = 0;
  while (num != 0) {
    console.log(num);
    rem = num % 10;
    shigt = shigt * 10 + rem;
    num = Math.floor(num / 10);
  }
  return shigt;
  /**
   *
   *
   */
}
// console.log(rev(123));
function timesOfRepeatedStr(string) {
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] in obj) {
      obj[string[i]] += 1;
    } else {
      obj[string[i]] = 1;
    }
  }
  return obj;
}
// console.log('11. timesOfRepeatedStr : ' ,timesOfRepeatedStr("ssrrssyy"));

// [1, 2, 3, 4, 5, 6], idx = 3 // output: [4, 1, 5, 2, 6, 3]

function shuffle(arr, idx) {
  let res = [];
  let len = idx > arr.length - idx ? idx : arr.length - idx;
  for (let i = 0; i < len; i++) {
    if (arr[idx]) res.push(arr[idx]);
    res.push(arr[i]);
    idx++;
  }
  return res;
}
console.log(shuffle([1, 2, 3, 4, 5, 6],3));