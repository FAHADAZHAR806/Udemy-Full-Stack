function processTeaOrder(teaOrder) {
  return teaOrder;
}

function makeTea(teatype) {
  return `Thats your order enjoy it ${teatype}`;
}
console.log(processTeaOrder(makeTea("earlgrey")));

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}
let Teamaker = createTeaMaker();
console.log(Teamaker("green Tea"));
