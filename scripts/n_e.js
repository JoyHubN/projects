const bAddP = document.querySelector('#b-add-p');
const bColorP = document.querySelector('#b-color-p');
const bDelFP = document.querySelector('#b-del-f-p');
const listP = document.querySelector('#list-p');

const listColor = ['red', 'blue', 'yellow', 'orange', 'cyan'];

const getRandom = ()=>
    listColor[Math.floor(Math.random()*(listColor.length))]

bAddP.onclick = function(){
    const p = document.createElement('p');
    p.textContent = `Новый элемент ${listP.childNodes.length+1}`;
    listP.appendChild(p);
}

bColorP.onclick = () => listP.lastChild.style.color=getRandom();

bDelFP.onclick = () =>listP.firstChild.remove();