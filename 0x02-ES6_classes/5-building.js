export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  set sqft(v) {
    if (typeof v !== 'number') throw new Error('sqft must be an integer');
    this._sqft = v;
  }

  get sqft() {
    return this._sqft;
  }
}
