//Задача. Знайти суму перших 1000000 чисел
//Скільки часу зайняла ця операція

let sum = 0;  // Створюємо змінну
const time1 = new Date ()  // відрізок часу до початку операції 2

for(let i = 0;i <= 1000000;i++){  //Через цикл накопичуємо суму
  sum += i;
}

const time2 = new Date ()   // відрізок часу після початку операції 2

console.log(sum); // Консолимо накопичену суму
console.log(time1.getTime()) ;
console.log(time2.getTime());
console.log(time2.getTime() - time1.getTime())//кількість застрачених ілісекунд на операцію 2
//--------------------------------------------------------------------------------------------
//Приклад з консоль таймами
console.time('operation'); // включили таймер. Початок таймеру

let summa = 0;
for(let i = 0;i <= 1000000;i++){   //Через цикл накопичуємо суму
  summa += i;
}
console.timeEnd('operation')  // вимкнення таймеру. Вимикати можна декілька таймерів