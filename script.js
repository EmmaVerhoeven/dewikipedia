const links = document.querySelectorAll('#circular-nav nav a');
const button = document.getElementById('spotlight-button');
const body = document.querySelector('body');

button.addEventListener('click', () => {
    for (link of links) {
        link.classList.remove('spotlight');
    }
  const randomIndex = Math.floor(Math.random() * links.length);
  const randomLink = links[randomIndex];

  randomLink.classList.add('spotlight');

  body.classList.add('darken');

  setTimeout(() => {
    spotlight.remove();
    body.classList.remove('darken');
  }, 1000);
});