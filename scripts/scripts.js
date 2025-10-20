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
            break
        case 'class':
            iframe.src='../projects/pages/jsonLern2.html';
            break;
        case 'figma1': {
            iframe.src='../projects/pages/figma1.html';
            break;
        }
        case 'video-player11': {
            iframe.src = '../projects/pages/video-player11.html';
            break;
        }
        case 'bom1': {
            iframe.src = '../pages/bom1.html';
            break;
        }
        case 'bom2': {
            iframe.src = '../projects/pages/bom2.html';
            break;
        }

        case 'bom3': {
            iframe.src = '../projects/pages/bom3.html';
            break;
        }

        case 'bom4': {
            iframe.src = '../projects/pages/bom4.html';
            break;
        }
        default:
            alert('Выбери опцию');
    }
}

menuList.addEventListener('change', changeFunc);

