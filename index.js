
 //ПРИКЛАД
 //Є об'єкт газети

 const newspaper = {
  titel: 'News......',
  articles: [{
    author: 'Nataliia Yakovenko',
    date: '25-12-2024',
    text: 'Lorem'
  },{
    author: 'Lidiia Yakovenko',
    date: '20-04-2024',
    text: 'Lorem'
  },{
    author: 'Olexander Yakovenko',
    date: '12-10-2024',
    text: 'Lorem'
  }],
  showArticles: function(){
    this.articles.forEach ((item,index)=>{ 
      //this.articles  - вказує на масив articles в нашом об'єкті
      //forEach перебирає об'єкти в масиві articles
      // в середину forEach передаємо callback
     console.log(`${this.titel} ${index}-${item.author}`)
    })
  }

}
// у об'єкта newspaper викликаємо метод showArticles

newspaper.showArticles();