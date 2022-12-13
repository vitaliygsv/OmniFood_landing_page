// Generate correct number of the year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Making mobile navigation work
const headerEl = document.querySelector('.header');
const btnNavEl = document.querySelector('.btn-mobile-nav');

const mobileNavHandler = () => {
  headerEl.classList.toggle('nav-open');
};

btnNavEl.addEventListener('click', mobileNavHandler);