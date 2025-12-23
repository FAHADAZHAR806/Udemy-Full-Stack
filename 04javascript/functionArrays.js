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

function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}
