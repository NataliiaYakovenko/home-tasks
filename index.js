
//Повернути name які належать окремим маркам телефонів
//Samsung:["Test0","Test3"]
//Redmi:["Test1","Test4"]
//Nokia:["Test2","Test6"]
const phone2 = [
  { name: "Test0", brand: "Samsung" },
  { name: "Test1", brand: "Redmi" },
  { name: "Test2", brand: "Nokia" },
  { name: "Test3", brand: "Samsung" },
  { name: "Test4", brand: "Redmi" },
  { name: "Test5", brand: "Nokia" },
];

let phone3 = phone2.map(phone2=>phone2.brand)
const phoneSet1 = new Set(phone3)
const array5 = [...phoneSet1]
console.log(array5);

//const usersPhone ={}
// array5.forEach(b=>(usersPhone[b]=[]))
//console.log(usersPhone);
//отримати всі об'єкти де бренд Nokia
//const userWithNokia = phone2.filter(u=>u.brand === 'Nokia')
//console.log(userWithNokia);
//const usersNameWithNokia = userWithNokia.map(u=>u.name)
//console.log(usersNameWithNokia);

  //отримати всі об'єкти де бренд Nokia

  const phoneWithUsers ={}
  array5.forEach(
      b=>(phoneWithUsers[b]=phone2.filter(u=>u.brand === b).map(u=>u.name)))
 console.log(phoneWithUsers);