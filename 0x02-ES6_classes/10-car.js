const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneSymbol]() {
    const clonedCar = new this.constructor();
    return clonedCar;
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}
