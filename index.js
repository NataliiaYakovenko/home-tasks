//Створити конпу і при натисканні на неї виводити "Hello world!"

const click = document.getElementById('clickWorld')
console.log(click);

function clickWorld(event){
 alert('Hello world!')
}

click.onclick = clickWorld;