class CoffeeMaker {
  start() {
    return "Starting....";
  }
  Bewing() {
    return "Hold it";
  }
  PressStart() {
    let start = this.start();
    let bewing = this.Bewing();
    return `${start}  ${bewing}`;
  }
}
let MakingCoffee = new CoffeeMaker();
console.log(MakingCoffee.PressStart());
