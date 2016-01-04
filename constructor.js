function Car(name, speed, price) {
  this.name = name;
  this.speed = speed;
  this.price = price;
};

Car.prototype.toString = function() {
  return 'Name: ' + this.name + ', Speed: ' +
      this.speed + ', Price: ' + this.price;
}

var car = new Car('BMW', 320, 1000000);
var car2 = new Car('Citroen', 270, 130000);

console.log(car.toString());
console.log(car2.toString());