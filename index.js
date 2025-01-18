
//Деструктуризація масивів
//Масиви надають читкий порядок елементів
const arr =[1,2,3,4,5,6];

//const firstElement = arr[0]; //- виводимо перший елемент
//виводимо перший елемент через деструктуризацію масива
//const[firstElement,secondElement,thirdElement,fourthElement]=arr;

//Якщо нам потрібно тільки перші два елементи масиву
const[firstElement,secondElement,...restOfArr]=arr;
  