//Задача
//Написати функцію для обчислення факторіала.
//Передбачити, щоб можна було обчислювати !
//тільки number, прицьому цілі додатні значення

function factorial(n){
    if(typeof n !== "number"){
        throw new Error('n must be number')
    }
  if(n<0 || Number.isSafeInteger(n)){  // Безпечне ціле число
        throw new RangeError('n must be not negative and integer value')
  }
 if(n === 0){
    return 1;
 }
 return n*factorial(n-1)

}
try{
    console.log(factorial(-5));
}catch(error){
    console.log(err);
}

console.log('hello');
