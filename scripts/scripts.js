const menuList = document.querySelector('#menu-list');
const iframe = document.querySelector('main iframe');

const changeFunc = function(event){
    const option = event.target.value;

    switch (option){
        case 'sorts':
            iframe.src='../pages/sort.html';
            break;
        case 'alerts':
            iframe.src='../pages/alerts.html';
            break;
        case 'add-elems':
            iframe.src='../pages/new_elements.html';
            break;
        case 'timers':
            iframe.src='../pages/timers.html';
            break;
        default:
            alert('Выбери опцию');
    }
}

menuList.addEventListener('change', changeFunc);