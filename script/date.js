//    ПОКАЗЫВАЕТ ВРЕМЯ
const showTime = () => {
  setInterval(() => {
    showGreeting();
    showDate();
    let date = new Date();
    let time = document.querySelector('.time');
    time.innerHTML = date.toLocaleTimeString();
  }, 1000);
};

showTime();
//      ПОКАЗЫВАЕТ ДАТУ
const showDate = () => {
  let dateNow = document.querySelector('.date');
  const date = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const currentDate = date.toLocaleDateString('en-US', options);
  dateNow.innerHTML = currentDate;
};
