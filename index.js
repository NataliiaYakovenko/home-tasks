//Повернути масив марок телофонів


const phone = [
  { name: "Test0", bhand: "Samsung" },
  { name: "Test1", bhand: "Redmi" },
  { name: "Test2", bhand: "Nokia" },
  { name: "Test3", bhand: "Samsung" },
  { name: "Test4", bhand: "Redmi" },
  { name: "Test5", bhand: "Nokia" },
];
let phone1 = phone.map(phone=>phone.bhand)
const phoneSet = new Set(phone1)
const array4 = [...phoneSet]
console.log(array4);