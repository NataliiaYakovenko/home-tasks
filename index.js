"use strict";

//Задача. Кіт Шредингера

function executor(resolve, reject) {
  if (Math.random() < 0.5) {
    resolve('the cat is alive')
  } else {
    reject(new Error ('the cat is dead'))
  }
}

const schredingerCat = new Promise(executor);

schredingerCat
.then(data=>console.log(data))
.catch(error=>console.log(error));
