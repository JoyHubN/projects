const time = document.querySelector('#clock')
const timerInput = document.querySelector(`[type="time"]`);
const bStart = document.querySelector('#b-start')


function updateTime(){
    let currentTime = new Date();
    let currentTimeString = currentTime.toLocaleTimeString();
    time.textContent = currentTimeString;
    setTimeout(updateTime,1000);
}
updateTime();



bStart.onclick = function(){
    // debugger;
    if(timerInput.value){
        
        const time = timerInput.value.split(':');
        let timer = setTimeout(() => alert(`Время закончилось:${time}`), (time[1]*60+time[2])*1000);
    }   
    else{
        alert('Введите время');
    }

    if(timerInput.value){console.dir(timerInput.value)};
}