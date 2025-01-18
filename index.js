
//Задача Деструктуризація
//Дестректурузувати масив з об'єкта
//Задача 2
const user={
    name: 'Nataliia',
    age: 41,
    adress:{
      city:'Zaporizhzha',
      country:'Ukraine',
    },
    contacts:{
      email: 'yakovenkonatali@gmail.com',
      phone:[+380662865135,+380997865534,+380674532412],
  
    }
  }
  const{contacts:{phone:[firstNumber,secondNumber,thirdNumber]}}=user
  
  //const[firstNumber,secondNumber,thirdNumber]=phone;
  console.log(firstNumber);
  console.log(secondNumber);
  console.log(thirdNumber);
  