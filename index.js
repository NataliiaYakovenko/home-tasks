


//Практика
const array1 = [1,2,3,4,5]
const array2 = [10,11,12,13,14,15]
//Задача, потрібно склеїти ці два масиви
//Не вкористовувати метод конкат
//Використовувати ...spread - operator

const arrayCopy = [...array1,...array2]
console.log(arrayCopy);