const menuList = document.querySelector('#menu-list');
const iframe = document.querySelector('main iframe');

const changeFunc = function(event){
    const option = event.target.value;

    switch (option){
               case 'sorts':
            iframe.src='../projects/pages/sort.html';
            break;
        case 'alerts':
            iframe.src='../projects/pages/alerts.html';
            break;
        case 'add-elems':
            iframe.src='../projects/pages/new_elements.html';
            break;
        case 'timers':
            iframe.src='../projects/pages/timers.html';
            break;
        case 'bubbling':
            iframe.src='../projects/pages/bubbling.html';
            break;
        case 'json':
            iframe.src='../projects/pages/jsonLern.html';
            break;
        default:
            alert('Выбери опцию');
    }
}

menuList.addEventListener('change', changeFunc);