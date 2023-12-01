export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }

  set code(v) {
    if (typeof v !== 'string') throw new Error('code must be a string');
    this._code = v;
  }

  get code() {
    return this._code;
  }

  set name(v) {
    if (typeof v !== 'string') throw new Error('name mus be a string');
    this._name = v;
  }

  get name() {
    return this._name;
  }
}
