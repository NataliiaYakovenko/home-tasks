//Map     Створюємо словник
const vocabulary = new Map();
vocabulary.set("cat", "кіт");
vocabulary.set("dog", "собака");
vocabulary.set("eat", "їсти");

/*
Написати функцію, яка приймає строку англійською
і перекладає цю строку українською використовуючи наш словник
*/
function translate(string, vocabulary) {
  const arrayWords = string.toLowerCase().trim().split(" ");
  console.log(arrayWords);
  //у нас є словник vocabulary
  //перебрати arrayWords і переклад для кожного англійського слова у масиві
  const translatedArray = arrayWords.map((word) => {
    if(vocabulary.has(word)){
      return vocabulary.get(word);
    }else{
      return word;
    }
  });
  return translatedArray.join(' ');
  //дістати з нашого слованика vocabulary
}
console.log(translate("      Cat eat dog             ", vocabulary))
console.log(translate('Dog eat cat',vocabulary));