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

// Sticky Navigation
const sectionHeroEl = document.querySelector('.section-hero');

const observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;

    !entry.isIntersecting
      ? document.body.classList.add('sticky')
      : document.body.classList.remove('sticky');
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);

observer.observe(sectionHeroEl);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}

checkFlexGap();
