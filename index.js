//Класи перепризначення методів
/*
squirrel(білка): має ім'я, їсть, що дадуть, бігає
flaingSquirrel(літаюча білка): має розмах крильєв, їсть тільки горіхи,літає
*/
class Squirrel {
  constructor(nickname) {
    this.nickname = nickname;
  }
  set nickname(value) {
    if (typeof value !== "string") {
      throw new TypeError("Nickname must be a string.");
    }
    if (value === " ") {
      throw new RangeError("Nickname cannot be empty.");
    }
    this._nickname = value;
  }
  get nickname() {
    return this._nickname;
  }
  eating(food) {
    console.log(`Squirrel ${this._nickname} eats ${food}.`);
  }
  runing() {
    console.log(`Squirrel ${this._nickname} runs.`);
  }
}
class FlaingSquirrel extends Squirrel {
  constructor(nickname, wingSpan) {
    super(nickname);
    this.wingSpan = wingSpan;
  }
  set wingSpan(value) {
    if (value === " ") {
      throw new RangeError("Wing span cannot be empty.");
    }
    if (typeof value !== "number") {
      throw new TypeError("Wing span must be a number.");
    }
    this._wingSpan = value;
  }

  get wingSpan() {
    return this._wingSpan;
  }

  eating() {
    console.log(`Flaing squirrel ${this._nickname} eats only nuts.`);
  }
  runing() {
    console.log(`Flaing squirrel ${this._nickname} cannot run.`);
  }
  
  flaing(){
    console.log(`Flaing squirrel ${this._nickname} flaes and has length wind span ${this.wingSpan}`);
  }
}

const squirrel = new Squirrel("Bamby");
console.log(squirrel);
squirrel.eating('strawberry');
squirrel.runing();

const flaingSquirrel = new FlaingSquirrel('Leyla',29)
console.log(flaingSquirrel);
flaingSquirrel.eating();
flaingSquirrel.runing();
flaingSquirrel.flaing();
