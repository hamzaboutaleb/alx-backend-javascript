import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  set amount(v) {
    if (typeof v !== 'number') throw new Error('amount must be an integer');
    this._amount = v;
  }

  get amount() {
    return this._amount;
  }

  set currency(v) {
    if (!(v instanceof Currency)) throw new Error('currentcy must be a type of Currency');
    this._currency = v;
  }

  get currency() {
    return this._currency;
  }
}
