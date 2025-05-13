const btn = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

btn.addEventListener('click', () => {
  links.classList.toggle('active');
});