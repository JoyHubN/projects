const bAddP = document.querySelector('#b-add-p');
const bColorP = document.querySelector('#b-color-p');
const bDelFP = document.querySelector('#b-del-f-p');
const listP = document.querySelector('#list-p');

const listColor = ['red', 'blue', 'yellow', 'orange', 'cyan'];

const getRandom = ()=>
    listColor[Math.floor(Math.random()*(listColor.length))]

const alertError = (message)=> alert(message);

bAddP.onclick = function(){
    const p = document.createElement('p');
    p.textContent = `Новый элемент ${listP.childNodes.length+1}`;
    listP.appendChild(p);
}
    
bColorP.onclick = () => listP.lastChild ? listP.lastChild.style.color=getRandom() : alertError('Элементов нет');

bDelFP.onclick = () => listP.lastChild ? listP.firstChild.remove() : alertError('Ну ты-то элемент создай');