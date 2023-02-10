//получаем все элементы
var videoEl = document.getElementsByTagName('video')[0],
    playBtn = document.getElementById('playBtn'),
    vidControls = document.getElementById('controls'),
    volumeControl = document.getElementById('volume'),
    timePicker = document.getElementById('timer');
progress = document.getElementById('progress')

videoEl.ontimeupdate = progressUpdate;
progress.onclick = videoRewind;

//если браузер может воспроизводить видео удаляем класс
videoEl.addEventListener('canplaythrough', function() {
    vidControls.classList.remove('hidden');
    videoEl.volume = volumeControl.value;
}, false);

//запускаем или останавливаем воспроизведение 
playBtn.addEventListener('click', function() {
    if (videoEl.paused) {
        videoEl.play();
    } else {
        videoEl.pause();
    }
}, false);

videoEl.addEventListener('play', function() {
    playBtn.innerText = "Pause";
}, false);

videoEl.addEventListener('pause', function() {
    playBtn.innerText = "Play";
}, false);

volumeControl.addEventListener('input', function() {
    videoEl.volume = volumeControl.value;
}, false);

videoEl.addEventListener('ended', function() {
    videoEl.currentTime = 0;
}, false);

videoEl.addEventListener('timeupdate', function() {
    timePicker.innerHTML = secondsToTime(videoEl.currentTime);
}, false);

//рассчет отображаемого времени
function secondsToTime(time) {
    var h = Math.floor(time / (60 * 60)),
        dm = time % (60 * 60),
        m = Math.floor(dm / 60),
        ds = dm % 60,
        s = Math.ceil(ds);
    if (s === 60) {
        s = 0;
        m = m + 1;
    }
    if (s < 10) {
        s = '0' + s;
    }
    if (m === 60) {
        m = 0;
        h = h + 1;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (h === 0) {
        fulltime = m + ':' + s;
    } else {
        fulltime = h + ':' + m + ':' + s;
    }
    return fulltime;
}

function progressUpdate() {
    console.log(videoEl.duration);
    console.log(videoEl.currentTime);
    let d = videoEl.duration;
    let c = videoEl.currentTime;
    progress.value = 100 * c / d;
}

function videoRewind() {
    let w = this.offsetWidth;
    let o = event.offsetX;
    console.log(w);
    console.log(o);
    this.value = 100 * o / w;
    //videoEl.pause();
    videoEl.currentTime = videoEl.duration * (o / w);
    //videoEl.play();
}