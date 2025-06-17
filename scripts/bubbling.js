const [el1, el2, el3] = [document.getElementById('elem1'), document.getElementById('elem2'), document.getElementById('elem3')];


const listColor= ['b-green', 'b-white', 'b-red', 'b-cyan'];
const getRandColor=()=> listColor[Math.floor(Math.random()*(listColor.length))];

el1.addEventListener('click',function(){
    this.classList='';
    this.classList.add(getRandColor());
});

el2.addEventListener('click',function(){
    this.classList='';
    this.classList.add(getRandColor());
})

el3.addEventListener('click',function(){
    this.classList='';
    this.classList.add(getRandColor());
})