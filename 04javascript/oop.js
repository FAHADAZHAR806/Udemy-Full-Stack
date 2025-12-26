let Person = {
  name: "fahad",
  age: 27,
};
Object.prototype.designation = function () {
  return `${Person.name} is manager`;
};
console.log(Person.designation());

function Animal(type) {
  this.type = type;
}
Animal.prototype.sound = function () {
  return `${this.type} make a horror sound`;
};

let BullDog = new Animal("BullDog");
console.log(BullDog.sound());

class Vechile {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.make} is a car from ${this.model}`;
  }
}
class Car extends Vechile {
  drive() {
    return `${this.make} wow exciting drive`;
  }
}

let myCar = new Car("Toyota", 2025);
console.log(myCar.drive());
