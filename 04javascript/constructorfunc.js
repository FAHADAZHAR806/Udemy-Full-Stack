function Car(make, model) {
  this.make = make;
  this.model = model;
}

let swift = new Car("swift", 2024);
let Honda = new Car("Honda", 2025);

console.log(swift, Honda);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is the cup of ${this.type} Tea`;
  };
}
let lemonTea = new Tea("lemon");
console.log(lemonTea.describe());

function Animal(name) {
  this.name = name;
}
Animal.prototype.sound = function () {
  return `${this.name} makes a sound`;
};

let Cat=new Animal("Cat")
console.log(Cat.sound())