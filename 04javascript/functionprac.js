function sumOfN(n) {
  let sum = 0;
  for (let i = n; i >= 1; i--) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumOfN(7));

function printMultiplicationTable(n) {
  let multiply = [];
  for (let i = 1; i <= 10; i++) {
    multiply.push(`${n} * ${i} = ${n * i}`);
  }

  return multiply;
}

console.log(printMultiplicationTable(5));

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] === "A" ||
      str[i] === "e" ||
      str[i] === "E" ||
      str[i] === "i" ||
      str[i] === "I" ||
      str[i] === "o" ||
      str[i] === "O" ||
      str[i] === "u" ||
      str[i] === "U"
    ) {
      count = count + 1;
    }
  }
  return count;
}

console.log(countVowels("aeIOu"));
