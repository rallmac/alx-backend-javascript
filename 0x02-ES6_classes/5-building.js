export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (new.target === Building) {
      throw new Error('Building is an abstract class and cannot be instantiated directly');
    }

    if (this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('evacuationWarningMessage must be implemented');
  }
}
