let i = 0;
let sum = 0;
while (i <= 5) {
  sum = sum + i;
  i++;
}
console.log(sum);

let countdown = [];
let j = 5;
while (j >= 0) {
  countdown.push(j);
  j--;
}
console.log(countdown);

// let teaCollection = [];
// let tea;
// do {
//   tea = prompt(
//     "Enter your flavour of Tea nd enter stop if you finished your list"
//   );
//   if (tea != "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");
// console.log(teaCollection);

let total = 0;
let c = 0;
do {
  total = total + c;
  c++;
} while (c <= 3);
console.log(total);

let array = [2, 4, 6];
let multipliedNumber = [];
for (let k = 0; k < array.length; k++) {
  multipliedNumber.push(array[k] * 2);
}

console.log(multipliedNumber);

let cities = ["Rawalpindi", "Islamabd", "Abbottabad"];
let cityLisit = [];
for (let i = 0; i < cities.length; i++) {
  cityLisit.push(cities[i]);
}
console.log(cityLisit);
