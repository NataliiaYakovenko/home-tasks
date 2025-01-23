/*Задача. Створити форму
в середині форми запитувати користувача його ім'я
При відправлені форми - привітайте користувача (привіт і ім'я користувача)
ім'я користувача візьміть з інпуту форми
*/

const userName = document.getElementById("userName");
console.log(userName);

function greating(event) {
  event.preventDefault();   //не роби так більше (наприклад не перезавантажувати сторінку)
  const value = userName[0].value;
  alert(`Hello, ${value}`)
}

userName.addEventListener("submit", greating);
