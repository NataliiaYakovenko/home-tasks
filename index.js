function MyArray() {
  this.length = 0;

  this.push = function (value) {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.length;
  };

  this.pop = function () {
    if (this.length > 0) {
      const lastItem = this[this.length - 1];
      delete this[this.length - 1];
      this.length--;
      return lastItem;
    } else {
      return undefined;
    }
  };

  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
}

const array = new MyArray();

array.push(1, 2, 3, 4, 5, 6, 7);
console.log(array);
array.pop();
console.log(array);
//Відконсольлогувати квадрати кожного числа в масив array
array.forEach((item) => {
  console.log(item ** 2);
});
