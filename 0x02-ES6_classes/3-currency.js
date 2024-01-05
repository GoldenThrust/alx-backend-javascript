export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter and Setter for 'code'
  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  // Getter and Setter for 'name'
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  // Method to display full currency format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
