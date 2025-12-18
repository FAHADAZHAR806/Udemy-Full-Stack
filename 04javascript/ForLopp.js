let teas = ["greenTea", "blackTea", "chai", "oolongTea"];
let selectedteas = [];
for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedteas.push(teas[i]);
}
console.log(selectedteas);

let cities = ["London", "NewYork", "Paris", "Berlin"];
visitedCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
console.log(visitedCities);

/////////// for of loop///////////////////////////////
let num = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const element of num) {
  if (element === 4) {
    break;
  }
  smallNumbers.push(element);
}
console.log(smallNumbers);

let teasFlavours = ["chai", "greenTea", "herbalTea", "blackTea"];
let prefferdTeas = [];
for (const flavours of teasFlavours) {
  if (flavours === "herbalTea") {
    continue;
  }
  prefferdTeas.push(flavours);
}
console.log(prefferdTeas);

//////// for in Loop ///////////////////////////////
let citiesPopulation = {
  London: 8900000,
  NewYork: 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let cityPopulations = {};
for (const city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }
  cityPopulations[city] = citiesPopulation[city];
}
console.log(cityPopulations);

let worldCities = {
  Sydney: 5000000,
  Tokkyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
largeCities = {};
for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}
console.log(largeCities);

//////////// for Each////////////////////////

let teaStock = ["earlgrey", "greenTea", "chai", "oolongTea"];
let avaialbeTeas = [];
teaStock.forEach((flavours) => {
  if (flavours === "chai") {
    return;
  }
  avaialbeTeas.push(flavours);
});
console.log(avaialbeTeas);
