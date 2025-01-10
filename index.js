//Задача повернути масив з унікальними (неповторювальних) значенями
const array = [1,2,3,4,5,6,1,3,5]
const s3 = new Set(array)
const array2 =[...s3]
console.log(array2);