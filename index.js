/*Задача
Реалізувати клас для телефонів:
марка, модель, колір, ціна, рік випуску
реалізувати метод для розрахунку віку телефона
створити екземпляр класу, викликати для нього метод
*/
class Phone{
    constructor(brand, model, color, price, year){
           this.brand = brand;
           this.model = model;
           this.color = color;
           this.price = price;
           this.year = year;
    }
    getAgePhone (){
       return new Date().getFullYear()-this.year
    }
}
const phone1 = new Phone('samsung', 'galaxy','red',200,2020) 
const phone2 = new Phone('lg', 'vortex','green',250,2022) 


console.log(phone1);
console.log(phone1.getAgePhone())

console.log(phone2);
console.log(phone2.getAgePhone())