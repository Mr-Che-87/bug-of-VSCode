


const element = document.getElementById('oldId');  

element.innerHTML='123';
element.setAttribute ('title', 'привет');
element.style.color = 'red'; //действие ниже перепишет это свойство
element.style = 'font-size: 40px; color: blue';




/*
const customDiv = document.createElement('div');  //создаём элемент


customDiv.innerHTML = "<span id=\"custom\">Hello!</span>"
//затем заполняем его содержимое
 
//найдём соседний узел по  ID и добавим рядом с ним (ДО НЕГО) новый элемент:
const old = document.getElementById('old');

document.body.insertBefore(customDiv, old);
*/