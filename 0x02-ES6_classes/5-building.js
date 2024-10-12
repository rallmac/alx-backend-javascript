class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (new.target === Building) {
      throw new Error('Building is an abstract class and cannot be instantiated directly');
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    // Using `this` to comply with the `class-methods-use-this` rule
    console.log(this._sqft);
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
