const squareNumbers = (arr) => {
  return arr.map((item) => {
    return item * item;
  });
};

console.log(squareNumbers([2, 3, 4]));

const filterEvenNumbers = (arr) => {
  return arr.filter((item) => {
    return item % 2 === 0;
  });
};
console.log(filterEvenNumbers([2, 4, 9, 22, 13, 44, 46]));

const sumPositiveNumbers = (arr) => {
  return arr
    .filter((item) => {
      return item > 0;
    })
    .reduce((acc, item) => {
      return acc + item;
    }, 0);
};
console.log(sumPositiveNumbers([-1, 2, 3, -9, -7, 2]));

const getNames = (arr) => {
  return arr.map((item) => {
    return item.name;
  });
};
console.log(getNames([{ name: "Fahad" }, { name: "waji" }]));

const findLongestWord = (arr) => {
  return arr.reduce((acc, item) => {
    if (item.length > acc.length) {
      return item;
    }
    return acc;
  }, "");
};
console.log(
  findLongestWord(["Fahad", "Waji", "GHAGGHAJ", "hhhhhhhhhhhhhhh", "Hihihihi"])
);
