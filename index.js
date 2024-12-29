
/*
Написати функцію checkSpam, яка повертає true,
якщо переданий рядок містить слова 'xxx'або 'viagra'.
Якщо заборонених слів у рядку не має повертнути falce

checkSpam('buy ViAgRa now') //true
checkSpam('free xxxxxxxxxxxx') //true
checkSpam('innocent rabbit') //falce
 */

//variant1
function checkSpam(string){
   const stringLowerCase = string.toLowerCase()
   //console.log(stringLowerCase)
if(stringLowerCase.includes('xxx')|| stringLowerCase.includes('viagra')){
  return true;
} else{
  return false;
}

}
console.log(checkSpam('buy ViAgRa now'));
console.log(checkSpam('free xxxxxxxxxxxx'));
console.log(checkSpam('innocent rabbit'));

//------------------------------------------------------------------------------
//variant2
function checkSpam(string){
  const stringLowerCase = string.toLowerCase()
  return stringLowerCase.includes('xxx')|| stringLowerCase.includes('viagra')
 
}
console.log(checkSpam('buy ViAgRa now'));
console.log(checkSpam('free xxxxxxxxxxxx'));
console.log(checkSpam('innocent rabbit'));

//-------------------------------------------------------------------------------
//variant3
function checkSpam(string){
  const array = ['ViAgRa','xxx','drugs']
  for(let i = 0;i < array.length;i++)
  if(string.toLowerCase().includes(array[i])){
     return true
  }
  return false;
}
console.log(checkSpam('buy ViAgRa now'));
console.log(checkSpam('free xxxxxxxxxxxx'));
console.log(checkSpam('innocent rabbit'));

