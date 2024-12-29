

/*Задача 2
Написати функцію, яка перевіряє чи є переданий їй рядок - паліндромом, не зважаючі на регістр
паліндром - це коли рядок з обох сторін читається однаково

 */

/*Алгоритм рішення
  1. Приймаємо строку від користувача
  2. Приводимо строку до нижнього регістру
  3. Перевернути строку 
  4. Перевернуту строку перевірити з оригінальною строкою
 */
  function isPalindrom(string){
    const newString = string.toLowerCase();
    console.log(newString)
    
    const arrayString = newString.split('').reverse().join('')
    console.log(arrayString);
    
    const result = newString === arrayString;
    return result
  }
  
  
  
  console.log(isPalindrom('Anna'));
  console.log(isPalindrom('Mama'));
  console.log(isPalindrom('Barab'));
  