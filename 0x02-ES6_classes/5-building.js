export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (sqft === undefined || sqft === null) {
      // Check if sqft is undefined or null.
      throw new Error('sqft must be defined');
    } else if (typeof sqft === 'string') {
      // Check if sqft is a string.
      throw new Error('sqft must be a number');
    } else if (typeof sqft !== 'number' || sqft <= 0) {
      // Check if sqft is not a positive number.
      throw new Error('sqft must be a positive number');
    } else if (!Number.isFinite(sqft)) {
      // Check if sqft is not a finite number.
      throw new Error('sqft must be a finite number');
    }
    this._sqft = Number(sqft);
  }
  }

  
  if (require.main === module) {
    const b = new Building(100);
    console.log(b);

    class TestBuilding extends Building {}

    try {
      new TestBuilding(200);
    }
    catch(err) {
    console.log(err);
    }
  }
