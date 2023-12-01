import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  set floors(v) {
    if (typeof v !== 'number') throw new Error('floors must be an inetger');
    this._floor = v;
  }

  get floors() {
    return this._floor;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
