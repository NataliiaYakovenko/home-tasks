"use strict";

/*Задача.
Потрібно написати функцію, яка вітає user 
alert('Hello user!')
Вітати функція має не одразу, а тільки через 8 секунд,
пісял того, як сторінка завантажиться
*/
const greetingUser = setTimeout(function greetUser(){
  alert('Hello user!');
}, 8000)
