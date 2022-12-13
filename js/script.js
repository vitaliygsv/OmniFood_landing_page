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

// Smooth scrolling animation
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach((link) =>
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');

    //     Scroll back to the top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    //       Scroll to the other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    //     Close mobile navigation
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  })
);
