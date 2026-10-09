/* ==========================================================================
   ADONAI ENGINEERING — Home page script
   Nav toggle, scroll reveal, footer year, and the fading hero photos.
   ==========================================================================
   HERO PHOTOS
   Put wide (landscape) photos in images/hero/ and list them here. They fade
   into each other behind the headline. Add or remove lines freely; any file
   that is missing is skipped, and if none exist the blueprint tower shows.
   ========================================================================== */

const HERO_IMAGES = [
  "images/hero/hero-4.jpeg",
  "images/hero/hero-6.jpeg",
  "images/hero/hero-5.jpeg",
  "images/hero/hero-3.jpeg",
  "images/hero/hero-7.jpg",
  "images/hero/hero-8.jpeg",
  "images/hero/hero-2.jpeg",
  "images/hero/hero-9.jpeg",
  "images/hero/hero-1.jpeg"
];
const HERO_SECONDS = 6; // time each photo stays before fading to the next

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Mobile nav ---- */
  var hamburger = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Current year in footer ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* ---- Fading hero photos ---- */
  var hero = document.getElementById('hero');
  var slidesWrap = document.getElementById('heroSlides');

  if (hero && slidesWrap && HERO_IMAGES.length) {
    var found = [];
    var remaining = HERO_IMAGES.length;

    var startSlideshow = function (list) {
      if (!list.length) return; // no photos yet: keep the blueprint hero

      var slides = list.map(function (src) {
        var div = document.createElement('div');
        div.className = 'hero-slide';
        div.style.backgroundImage = 'url("' + src + '")';
        slidesWrap.appendChild(div);
        return div;
      });

      hero.classList.add('has-photos');
      slides[0].classList.add('active');

      var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (slides.length > 1 && !reduceMotion) {
        var current = 0;
        setInterval(function () {
          slides[current].classList.remove('active');
          current = (current + 1) % slides.length;
          slides[current].classList.add('active');
        }, HERO_SECONDS * 1000);
      }
    };

    var checkedOne = function () {
      remaining--;
      if (remaining === 0) {
        startSlideshow(found.filter(Boolean)); // keeps the order you listed
      }
    };

    HERO_IMAGES.forEach(function (src, i) {
      var probe = new Image();
      probe.onload = function () { found[i] = src; checkedOne(); };
      probe.onerror = checkedOne;
      probe.src = src;
    });
  }

});