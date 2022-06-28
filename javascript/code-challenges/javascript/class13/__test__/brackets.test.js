'use srict';
const validateBrackets=require ("../validateBrackets");
describe("Brackets Validator",()=>{
test("Valid Brackets",()=>{
  expect(validateBrackets("()[[Extra Characters]]")).toBe(true);  
})
test("inValid Brackets",()=>{
    expect(validateBrackets("()Extra Characters]]")).toBe(false);  
  })
})