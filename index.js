//Повернути масив унікальних(неповторювальних) імен


const user1 =['Bob','Nataliia','Jeck','Bob', 'Jeck']
const user2 =['Jein','Carl','Roland','Jein','Carl']
//варіант1
const userMain =[...new Set([...user1,...user2])]
console.log(userMain);
//варіант2
const userMain1= new Set([...user1,...user2])
const array3 = [...userMain1]
console.log(array3);