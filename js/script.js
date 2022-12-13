// Generate correct number of the year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
