function Vehicle() {
  this.heigth = 0;
  this.width = 0;
}

function Car(name) {
  this.name = name;
}

//Car.prototype = new Vehicle();

var car = Object.create(new Vehicle(), {
  name: {
    value: 'BMW',
    enumerable: false
  }
});

//var car = new Car('BMW');
//car.__proto__ = new Vehicle();

console.log(car);
console.log(car.heigth);

