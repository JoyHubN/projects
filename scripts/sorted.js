const bGenArray = document.querySelector('#b-gen-array');
const bSort = document.querySelector('#b-sort');
const pNewArray = document.querySelector('#new-array');
const pSortArray = document.querySelector('#sort-array');
const sortMenu = document.querySelector('#sort-menu');

const newArray = [];

const editPNewArray = function(array){
    pNewArray.textContent=array;
}


const editPSortArray = function(array){
    pSortArray.textContent=array;
}

const genArray = function(){
    newArray.length = 0;
    for(let i = 0; i < 15; i++){
        newArray.push(Math.floor(Math.random() * 100));
    }
    editPNewArray(newArray);
}


const sortArray = function(){
    if(newArray.length==0){
        editPSortArray('Мне нечего сортировать');
    }
    else{
        switch(sortMenu.value){
            case 'a':
                editPSortArray(newArray.sort((a,b)=>a-b));
                break;
            case 'z':
                editPSortArray(newArray.sort((a,b)=>b-a));
                break;
        }
    }
}

bGenArray.onclick = genArray;
bSort.onclick = sortArray;
