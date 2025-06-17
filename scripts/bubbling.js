const [el1, el2, el3] = [document.getElementById('elem1'), document.getElementById('elem2'), document.getElementById('elem3')];
const btnOffBubbling = document.querySelector(`input[id='check']`);
const count = document.querySelector('#count');

const listColor= ['b-green', 'b-white', 'b-red', 'b-cyan'];
const getRandColor=()=> listColor[Math.floor(Math.random()*(listColor.length))];


el1.addEventListener('click',function(event){
    if (btnOffBubbling.checked){
        event.stopPropagation();
    }
    this.classList='';
    this.classList.add(getRandColor());
});

el2.addEventListener('click',function(event){
    if (btnOffBubbling.checked){
        event.stopPropagation();
    }
    this.classList='';
    this.classList.add(getRandColor());
});

el3.addEventListener('click',function(event){
    if (btnOffBubbling.checked){
        event.stopPropagation();
    }
    this.classList='';
    this.classList.add(getRandColor());
});

count.addEventListener('mouseover', function(){
    this.textContent = Number(this.textContent)+1
})