function filterNumbers(arr) {
  return arr.filter((item) => {
    let val = typeof item === "number";
    return val;
  });
}

console.log(filterNumbers(["hi", 2, 3, "Hello"]));

function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray([2, 3, 4, 5]));

function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([2, 56, 67, 89, 92, 24]));
