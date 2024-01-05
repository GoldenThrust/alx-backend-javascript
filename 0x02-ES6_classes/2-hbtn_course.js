export default class HolbertonCourse {
  constructor(name, length, students) {
    this._checkType(name, String);
    this._checkType(length, Number);
    this._checkType(students, Array);
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter and Setter for 'name'
  get name() {
    return this._name;
  }

  set name(name) {
    this._checkType(name, String);
    this._name = name;
  }

  // Getter and Setter for 'length'
  get length() {
    return this._length;
  }

  set length(length) {
    this._checkType(length, Number);
    this._length = length;
  }

  // Getter and Setter for 'students'
  get students() {
    return this._students;
  }

  set students(student) {
    this._checkType(student, Array);
    this._students = student;
  }

  // eslint-disable-next-line class-methods-use-this
  _checkType(value, type) {
    switch (type) {
      case String:
        if (typeof value !== 'string') {
          throw new TypeError('Name must be a string');
        }
        break;
      case Number:
        if (typeof value !== 'number') {
          throw new TypeError('Length must be a number');
        }
        break;
      case Array:
        if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
          throw new TypeError('Students must be an array of strings');
        }
        break;
      default:
        if (!(value instanceof type)) {
          throw new TypeError('Incorrect type');
        }
    }
  }
}
