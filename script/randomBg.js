let bgNum;
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
//      РАНДОМНОЕ ЧИСЛО ДЛЯ БГ
const getRandomNum = () => {
  bgNum = Math.round(Math.random() * 19);
  bgNum < 10 ? (bgNum = '0'.padStart(1, '0') + bgNum) : bgNum;
};
getRandomNum();

//      ОПРЕДЕЛЕНИЕ ВРЕМЕНИ СУТОК
const getTimeOfDay = (time) => {
  if (time >= 6 && time <= 11) return 'morning';
  else if (time >= 12 && time <= 17) return 'afternoon';
  else if (time >= 18 && time <= 23) return 'evening';
  else if (time >= 0 && time <= 5) return 'night';
};

//    ФОН
const setBg = () => {
  const body = document.querySelector('body');
  const timeOfDay = new Date();
  const hours = timeOfDay.getHours();
  const time = getTimeOfDay(hours);

  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${bgNum}.jpg`;
  img.onload = () => {
    if (time == 'morning') {
      body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${bgNum}.jpg')`;
    } else if (time == 'afternoon')
      body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/${bgNum}.jpg')`;
    else if (time == 'evening')
      body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${bgNum}.jpg')`;
    else if (time == 'night')
      body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/${bgNum}.jpg')`;
  };
};

setBg();
//    СЛАЙД СЛЕД БГ
const getSlideNext = () => {
  bgNum++;
  bgNum > 20 ? (bgNum = 1) : '';
  bgNum < 10 ? (bgNum = '0'.padStart(1, '0') + bgNum) : bgNum;
  setBg();
};

slideNext.addEventListener('click', getSlideNext);
//    СЛАЙД ПРЕД БГ
const getSlidePrev = () => {
  bgNum--;
  bgNum < 0 ? (bgNum = 20) : '';
  bgNum < 10 ? (bgNum = '0'.padStart(1, '0') + bgNum) : bgNum;
  setBg();
};

slidePrev.addEventListener('click', getSlidePrev);
