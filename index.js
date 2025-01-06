/*
Задача 
1.Створити клас фігури
   фігура має кількість сторін
2.створити дочірній клас трикутник
  трикутник має три сторони(дві сторони і кут з єднання)
  потрібно отримати суму сторін
3. створити дочірній  клас квадрата
    потрібно отримати площу квадрата
Кожну фігуру перевірити на валідацію сеттери геттери
*/
class Figure {
    constructor(sideQuantity) {
      this.sideQuantity = sideQuantity;
    }
  
    set sideQuantity(value){
     if(value < 0){
      throw new RangeError('Side quantity cannot be less 0')
     }
     this._sideQuantity = value
    }
  
    get sideQuantity(){
      return this._sideQuantity
    }
  
    getAera() {}
  }
  
  class Triangle extends Figure {
    constructor(a, b, angle) {
      super(3);
      this.a = a;
      this.b = b;
      this.angle = angle;
    }
  
    set a(value) {
      if (value < 0) {
        throw new RangeError("Side cannot be less 0");
      }
      this._a = value;
    }
  
    get a() {
      return this._a;
    }
  
    set b(value) {
      if (value < 0) {
        throw new RangeError("Side cannot be less 0");
      }
      this._b = value;
    }
    get b() {
      return this._b;
    }
  
    set angle(value) {
      if (value < 0) {
        throw new RangeError("Angle cannot be less 0");
      }
      this._angle = value
    }
  
    get angle() {
      return this._angle;
    }
  
    getAera() {
      return this.a * this.b * Math.sin(this.angle);
    }
  }
  
  class Square extends Figure {
    constructor(a) {
      super(4);
      this.a = a;
    }
   
    set a(value){
      if(value < 0){
        throw new RangeError('ide cannot be less 0')
      }
      this._a = value
    }
  
    get a (){
      return this._a
    }
  
    getAera() {
      return this.a * this.a; //this.a **2
    }
  }
  
  const square = new Square(4);
  console.log(square);
  console.log(square.getAera())
  
  const triangle = new Triangle(5,5,1)
  console.log(triangle);
  console.log(triangle.getAera())