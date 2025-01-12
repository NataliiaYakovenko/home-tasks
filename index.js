//Реалізація стека
class Stack {
  constructor(maxSize) {
    this._maxSize = maxSize;
    this._size = 0;
  }

  get isEmpty() {
    return this._size === 0; // якщо розмір = 0 тоді повертається true/ (оператор === повертає булєвоє значення)
  }
  set size(newValue) {
    throw new Error("Access denied"); // доступ заборонено
  }
  get size() {
    return this._size;
  }
  set maxSize(newValue) {
    throw new Error("Access denied"); // доступ заборонено
  }
  get maxSize() {
    return this._maxSize;
  }
  push(newValue) {
    if (this._size > this._maxSize) {
      throw new Error("Stack overflow");
    }
    this[`_${this.size}`] = newValue;
    this._size++;
    return this.size;
  }
  pop() {
    if (this.size > 0);
    {
      const lastitem = this[`_${this.size - 1}`];
      delete this[`_${this.size}`];
      this._size--;

      return lastitem;
    }
  }
  pick() {
    return this[`_${this.size-1}`];
  }
}
const myStack = new Stack(4)