/*
Напишіть функцію для отримання першого елемента(ів) послідовності. 
Передача параметра n (за замовчуванням=1) поверне перші n елементів послідовності.

Якщо n == 0 повертає порожню послідовність []
Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
 */

const array = ['a', 'b', 'c', 'd', 'e'];
function getFirstValue(array,n=1){
 if(n===0){
    return [];
 }
 return array.slice(0,n);
}
console.log(getFirstValue(array));
console.log(getFirstValue(array, 2));
console.log(getFirstValue(array,3));
console.log(getFirstValue(array,4));
console.log(getFirstValue(array,5));