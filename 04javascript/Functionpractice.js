function stringToNumber(input) {
  let convert = Number(input);
  return isNaN(convert) ? "Not a number" : convert;
}

console.log(stringToNumber("46hi")); // Not a number
console.log(stringToNumber("46")); // 46
console.log(stringToNumber("3.14")); // 3.14

function flipBoolean(input) {
  return !input;
}
console.log(flipBoolean(0));
function whatAmI(input) {
  if (typeof input === "number") {
    return "I'm a number!";
  } else if (typeof input === "string") {
    return "I'm a string!";
  } else {
    return `I am ${typeof input}`; // fallback for other types
  }
}

console.log(whatAmI(56));

function isItTruthy(value) {
  return value ? "It's truthy!" : "It's falsey!";
}

console.log(isItTruthy(0));

let a = 3;
let b = 3;

function Add() {
  return a + b;
}
function subtract() {
  return a - b;
}
function Multiply() {
  return a * b;
}
function Divide() {
  return a / b;
}
function Incremnt() {
  return a++;
}
function Decremnt() {
  return a--;
}
function Reminder(){
  return a%b
}


console.log(Add(),subtract(),Multiply(),Divide(),Incremnt(),Decremnt(),Reminder());