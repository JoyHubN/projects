const menuList = document.querySelector('#menu-list');
const iframe = document.querySelector('main iframe');

const changeFunc = function(event){
    const option = event.target.value;

    switch (option){
        case 'sorts':
            iframe.src='https://joyhubn.github.io/projects/pages/sort.html';
            break;
        case 'alerts':
            iframe.src='https://joyhubn.github.io/projects/pages/alerts.html';
            break;
        case 'add-elems':
            iframe.src='https://joyhubn.github.io/projects/pages/new_elements.html';
            break;
        case 'timers':
            iframe.src='https://joyhubn.github.io/projects/pages/timers.html';
            break;
        default:
            alert('Выбери опцию');
    }
}

menuList.addEventListener('change', changeFunc);