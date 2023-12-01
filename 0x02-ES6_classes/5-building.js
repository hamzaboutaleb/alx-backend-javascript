export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
  }

  set sqft(v) {
    if (typeof v !== 'number') throw new Error('sqft must be an integer');
    this._sqft = v;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
