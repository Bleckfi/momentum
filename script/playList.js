const playList = [
  {
    title: 'Aqua Caelestis',
    src: '../assets/sounds/Aqua Caelestis.mp3',
    duration: '00:58',
  },
  {
    title: 'River Flows In You',
    src: '../assets/sounds/River Flows In You.mp3',
    duration: '03:50',
  },
  {
    title: 'Summer Wind',
    src: '../assets/sounds/Summer Wind.mp3',
  },
  {
    title: 'Ennio Morricone',
    src: '../assets/sounds/Ennio Morricone.mp3',
  },
];
const playPre = document.querySelector('.play-prev');
const playNex = document.querySelector('.play-next');
//                              ДОБАВЛЕНИЕ НАЗВАНИЙ ИЗ ПЛЕЙЛИСТА //////////////////////////////////////////////////////////////////////////////////////////////

playList.forEach((element) => {
  const li = document.createElement('li');
  const playLis = document.querySelector('.play-list');
  playLis.append(li);
  li.classList.add('play-item');
  li.textContent = element.title;
});

const current = document.querySelector('.play-item');
current.classList.add('item-active');

let isPlay = false;
const audio = new Audio();
let playNum = 0;
audio.currentTime = 0;

//                              КНОПКА ПЛЭЙ //////////////////////////////////////////////////////////////////////////////////////////////
const playAudio = () => {
  audio.src = playList[playNum].src;

  if (!isPlay) {
    audio.play();
    isPlay = true;
  } else {
    audio.pause();
    isPlay = false;
  }
};

play = document.querySelector('.play');
const toggleBtn = () => {
  if (isPlay) {
    play.classList.add('pause');
  } else {
    play.classList.remove('pause');
  }
};

const handler = () => {
  play.addEventListener('click', playAudio);
  play.addEventListener('click', toggleBtn);
};
handler();
//                              СЛЕД ТРЕК //////////////////////////////////////////////////////////////////////////////////////////////

const li = document.querySelector('.play-list');
const playNext = () => {
  playNum++;
  li.classList.add('item-active');
  if (playNum > playList.length - 1) {
    playNum = 0;
  }

  isPlay = false;
  playAudio();
  toggleBtn();
};

playNex.addEventListener('click', playNext);
//                              ПРЕД ТРЕК //////////////////////////////////////////////////////////////////////////////////////////////

const playPrev = () => {
  playNum--;
  if (playNum < 0) {
    playNum = playList.length - 1;
  }

  isPlay = false;
  playAudio();
  toggleBtn();
};

playPre.addEventListener('click', playPrev);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
