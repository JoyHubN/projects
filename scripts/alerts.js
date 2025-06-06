const bAlertA = document.querySelector('#b-alert-a');
const bAlertC = document.querySelector('#b-alert-c');
const bAlertI = document.querySelector('#b-alert-i');

bAlertA.onclick = () => alert('Обычное уведомление');

bAlertC.onclick = () => {
const isAdmin = confirm('Вы админ?');
    alert(isAdmin);
}

bAlertI.onclick = () => {
    const user = prompt('Кто вы?', 'User');
    alert(user);
}