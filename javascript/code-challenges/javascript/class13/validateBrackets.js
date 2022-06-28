"use strict";


const Stack = require("./stack");
function validateBrackets(str) {
  let stack = new Stack();

  let isMatching;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
      stack.push(str[i]);
    } else {
      if (str[i] == ")" || str[i] == "}" || str[i] == "]") {
        let open = stack.pop();
        if(open === "{" && str[i] === "}")
        isMatching=true;
        else
        if (open === "[" && str[i] === "]")
        isMatching=true;
        else
        if (open === "(" && str[i] === ")")
        isMatching=true;
        else
        isMatching=false;

      }
    }
  }

  console.log(isMatching);
  return isMatching;
}

module.exports = validateBrackets;
