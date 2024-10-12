import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call parent constructor with brand, motor, and color
    this._range = range; // Store range in the "_range" attribute
  }

  // Override cloneCar method
  cloneCar() {
    // Return a new instance of the parent class (Car), not EVCar
    return new Car(undefined, undefined, undefined);
  }
}
