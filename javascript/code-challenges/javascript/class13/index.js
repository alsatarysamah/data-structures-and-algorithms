'use srict';
const validateBrackets=require ("./validateBrackets");
validateBrackets("{([])}");
// validateBrackets("{}()");
//stack1 0 1 { (
//stacck2  2 3})
// {()}
//stack1 0 1{(
//stack2 2 3)}

//{}()
// validateBrackets("x{}")

//{{[({})]}}