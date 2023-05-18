const greetingTranslation = {
  us: '',
  ru: '',
};

//      ПРИВЕТСТВИЕ
const showGreeting = () => {
  let greeting = document.querySelector('.greeting');
  const date = new Date();
  const hours = date.getHours();
  const timeOfDay = getTimeOfDay(hours);
  const greetingText = `Good ${timeOfDay}`;
  greeting.innerHTML = greetingText;
};
//      СОХРАНЕНИЕ ИМЕНИ В СТОРАДЖЕ БРАУЗЕРА
const setLocalStorage = () => {
  let name = document.querySelector('.name');
  localStorage.setItem('name', name.value);
};
window.addEventListener('beforeunload', setLocalStorage);

const getLocalStorage = () => {
  let name = document.querySelector('.name');
  if (localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
};
window.addEventListener('load', getLocalStorage);
