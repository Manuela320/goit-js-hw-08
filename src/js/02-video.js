import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const STORAGE_KEY ='videoplayer-current-time';
const savedTime = localStorage.getItem(STORAGE_KEY);

if (savedTime !== null) {
    player.setCurrentTime(parseFloat(savedTime));
}

player.on('timeupdate', throttle(({ seconds }) => {
    localStorage.setItem(STORAGE_KEY, seconds);
}, 1000));
