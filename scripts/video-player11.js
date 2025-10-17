const video = document.querySelector('video');
const playButton = document.querySelector('.play');
const progress = document.querySelector('.progress');
const volume = document.querySelector('.volume');
const currentTimeDisplay = document.querySelector('.current-time');
const durationDisplay = document.querySelector('.duration');

const playSVG = `
    <svg class="play" width="40px" height="40px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ffffff" stroke-width="0.336"></g>
        <g id="SVGRepo_iconCarrier">
            <path d="M3 12L3 18.9671C3 21.2763 5.53435 22.736 7.59662 21.6145L10.7996 19.8727M3 8L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L14.0026 18.131" stroke="#00ff33" stroke-width="1.2" stroke-linecap="round"></path>
        </g>
    </svg>
`;

const pauseSVG = `
    <svg class="pause" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path d="M2 18C2 19.8856 2 20.8284 2.58579 21.4142C3.17157 22 4.11438 22 6 22C7.88562 22 8.82843 22 9.41421 21.4142C10 20.8284 10 19.8856 10 18V6C10 4.11438 10 3.17157 9.41421 2.58579C8.82843 2 7.88562 2 6 2C4.11438 2 3.17157 2 2.58579 2.58579C2 3.17157 2 4.11438 2 6V14" stroke="#00ff1e" stroke-width="1.5" stroke-linecap="round"></path>
            <path d="M22 6C22 4.11438 22 3.17157 21.4142 2.58579C20.8284 2 19.8856 2 18 2C16.1144 2 15.1716 2 14.5858 2.58579C14 3.17157 14 4.11438 14 6V18C14 19.8856 14 20.8284 14.5858 21.4142C15.1716 22 16.1144 22 18 22C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V10" stroke="#00ff1e" stroke-width="1.5" stroke-linecap="round"></path>
        </g>
    </svg>
`;

playButton.innerHTML = playSVG;

let isPlaying = false;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

video.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(video.duration);
    progress.max = 100;
    volume.value = video.volume * 100; // Начальная громкость
});

playButton.addEventListener('click', () => {
    if (!isPlaying) {
        video.play();
        playButton.innerHTML = pauseSVG;
        isPlaying = true;
    } else {
        video.pause();
        playButton.innerHTML = playSVG;
        isPlaying = false;
    }
});

video.addEventListener('timeupdate', () => {
    const current = video.currentTime;
    const duration = video.duration;
    currentTimeDisplay.textContent = formatTime(current);
    progress.value = (current / duration) * 100;
});

progress.addEventListener('input', () => {
    const value = progress.value;
    video.currentTime = (value / 100) * video.duration;
});

volume.addEventListener('input', () => {
    video.volume = volume.value / 100;
});

video.addEventListener('ended', () => {
    playButton.innerHTML = playSVG;
    isPlaying = false;
    progress.value = 0;
    currentTimeDisplay.textContent = '0:00';
});