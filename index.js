"use strict";

/*
Задача 
Написати функцію, яка через кожну секунду буде виводити числа  в консоль з 1 ло 10
Виконати задачу циклами не можемо
Потрібно виконанти задачу через інтервали
Перевірити скільки секунд ми витрачаємо на виконання цієї функції
*/

function counter(){
  let i = 1;
  const intervalID = setInterval(()=>{
     console.log(i++);
     if(i>10){
          clearInterval(intervalID)
          console.timeEnd('timer')
     }
  },1000)
}

console.time('timer') //показує скільки часу витарічаємо на виконання функції
counter()