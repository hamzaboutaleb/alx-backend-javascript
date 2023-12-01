export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(val) {
    if (typeof val !== 'string') throw new Error('name must be a string');
    this._name = val;
  }

  get name() {
    return this._name;
  }

  set length(val) {
    if (typeof val !== 'number') throw new Error('lenght must be an integer');
    this._length = val;
  }

  get length() {
    return this._length;
  }

  set students(val) {
    if (!Array.isArray(val)) throw new Error('student must be a list');
    this._students = val;
  }

  get students() {
    return this._students;
  }
}
