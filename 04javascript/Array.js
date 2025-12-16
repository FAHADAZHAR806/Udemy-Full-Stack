let teaFlavors = ["greentea", "blacktea", "oolongtea"];
const firstTea = teaFlavors[0];
console.log(firstTea);

let cities = ["karachi", "lahore", "Rawalpindi"];
let favoriteCity = cities[2];
console.log(favoriteCity);

let TeaTypes = ["herbalTea", "WhiteTea", "MasalaTea"];
TeaTypes[1] = "jasmineTea";
console.log(TeaTypes);

let visitedCities = ["Islamabad", "Abbottabad"];
visitedCities.push("Rawalpindi");
console.log(visitedCities);
let teaOrders = ["chai", "icedTea", "matcha", "earl grey"];
let lastOrder = teaOrders.pop();
console.log(teaOrders);

let popularTeas = ["greenTea", "oolongTea", "chai"];
let softCopyTeas = popularTeas;
console.log(softCopyTeas);

let topCities = ["Lahore", "Karachi", "Islamabad"];
let hardCopyCities = [...topCities];
topCities.push("Sialot");
console.log(topCities);

console.log(hardCopyCities);

let PunjabCities = ["Rawalpindi", "Lahore"];
let KpkCities = ["Abbottabad", "Peshawar"];
let Pakistan = PunjabCities.concat(KpkCities);
console.log(Pakistan);
