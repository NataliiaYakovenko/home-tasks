/*
Задача
1. Ми маємо div
2. Ми маємо 5 кнопок з різними кольорами
3. За натисненням на кнопку, фоновий колір div 
має змінитися на відповідний колір, що вказаний на кнопці
*/
const button = document.querySelectorAll('button');
const div = document.querySelector('#root')

// через for перебираємо всі кнопки
for(let btn of button){
  btn.addEventListener('click',clickHandler )
}

function clickHandler({target:{dataset:{color}}}){ //деструктуризуємо target/потім деструктуризуємо dataset
  div.style.backgroundColor = color; //color - color, який прихлдить із об'єкту подій
}
