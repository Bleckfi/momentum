const quote = document.querySelector('.quote');
const autho = document.querySelector('.author');
const changeQoute = document.querySelector('.change-quote');
const url = 'https://api.quotable.io/random';
async function getQuotes() {
  const quotes = 'https://api.quotable.io/random';
  const res = await fetch(quotes);
  const data = await res.json();

  quote.innerHTML = data.content;
  autho.textContent = data.author;
}
changeQoute.addEventListener('click', getQuotes);
window.addEventListener('load', getQuotes);
