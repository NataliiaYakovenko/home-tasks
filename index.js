"use strict";

/*
https://randomuser.me/
https://randomuser.me/api/

На сторінці є кнопка підвантажити юзера
При на тиснені на цю кнопку на сторінці повинно додатись картка юзера
Картка може містити:
- аватарка
- ім'я , прізвище
- імейл
- адреса
- день народження

*/
const card = "https://randomuser.me/api/";

fetch(card)
  .then((response) => response.json())
  .then((data) => getInfoUser(data.results[0]))
  .catch((err) => console.log("error:", err));

function getInfoUser(user) {
  const userCard = document.querySelector("#user-card");
  const btn = document.querySelector("button");

  btn.addEventListener("click", function () {
    appearUserHandler(user);
  });


  function appearUserHandler(user) {
     userCard.textContent="";

     const img = document.createElement('img');
     img.src = user.picture.medium;
     img.classList.add('image-user');
     userCard.append(img);

     const fullName = document.createElement('h2');
     fullName.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
     fullName.classList.add('name-user');
     userCard.append(fullName);

     const email = document.createElement('span');
     email.textContent = user.email;
     email.classList.add('email-user');
     userCard.append(email);

     const adress = document.createElement('span');
     adress.textContent = `${user.location.street.number} ${user.location.street.name}  ${user.location.city}  ${user.location.country}`
     adress.classList.add('adress-user');
     userCard.append(adress);

     const birthday = document.createElement('span');
     birthday.textContent = new Date(user.dob.date).toLocaleDateString();
     birthday.classList.add('birthday-user');
     userCard.append(birthday);


  }}
