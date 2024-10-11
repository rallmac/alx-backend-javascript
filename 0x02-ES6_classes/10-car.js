const cloneSymbol = Symbol('clone');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneSymbol]() {
    return new this.constructor();
  }

  cloneCar() {
    const newCar = this[cloneSymbol]();
    newCar._brand = this._brand;
    newCar._motor = this._motor;
    newCar._color = this._color;
    return newCar;
  }
}

export default Car;
