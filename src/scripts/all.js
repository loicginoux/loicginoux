// import '../../node_modules/glightbox/dist/css/glightbox.min.css';
// import '../css/animate.css';
// import '../css/style.css';

import imagesLoaded from 'imagesloaded';
import Isotope from 'isotope-layout';
import VenoBox from 'venobox';
// import WOW from 'wowjs';

// window.wow = new WOW.WOW({
//   live: false,
// });

// window.wow.init({
//   offset: 50,
// });

new VenoBox({
  selector: '.venobox',
  titlePosition: "bottom",
});

//============== isotope masonry js with imagesloaded
imagesLoaded('.portfolio-container', function () {
  var elem = document.querySelector('.items-wrapper');
  if (!elem) return;
  var iso = new Isotope(elem, {
    // options
    itemSelector: '.item',
    layoutMode: 'fitRows',
    masonry: {
      // use outer width of sizer for columnWidth
      columnWidth: '.item',
    },
  });

  let filterButtons = document.querySelectorAll('.portfolio-buttons button');
  filterButtons.forEach((e) =>
    e.addEventListener('click', () => {
      let filterValue = event.target.getAttribute('data-filter');
      iso.arrange({
        filter: filterValue,
      });
    })
  );
});

var elements = document.querySelectorAll('.portfolio-buttons button');
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    var el = elements[0];
    while (el) {
      if (el.tagName === 'BUTTON') {
        el.classList.remove('active');
      }
      el = el.nextSibling;
    }
    this.classList.add('active');
  };
}

(function () {
  'use strict';

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector('.header');
    const sticky = ud_header.offsetTop;

    if (window.pageYOffset > sticky) {
      ud_header.classList.add('sticky');
    } else {
      ud_header.classList.remove('sticky');
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      backToTop.style.display = 'flex';
    } else {
      backToTop.style.display = 'none';
    }
  };

  // ===== responsive navbar
  let navbarToggler = document.querySelector('#navbarToggler');
  const navbarCollapse = document.querySelector('#navbarCollapse');

  navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('navbarTogglerActive');
    navbarCollapse.classList.toggle('hidden');
  });

  //===== close navbar-collapse when a  clicked
  document.querySelectorAll('#navbarCollapse ul li:not(.submenu-item) a').forEach((e) =>
    e.addEventListener('click', () => {
      navbarToggler.classList.remove('navbarTogglerActive');
      navbarCollapse.classList.add('hidden');
    })
  );

  // ===== Sub-menu
  const submenuItems = document.querySelectorAll('.submenu-item');
  submenuItems.forEach((el) => {
    el.querySelector('a').addEventListener('click', () => {
      el.querySelector('.submenu').classList.toggle('hidden');
    });
  });

  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  document.querySelector('.back-to-top').onclick = () => {
    scrollTo(document.documentElement);
  };
})();

// Document Loaded
document.addEventListener('DOMContentLoaded', () => {

  // display footer email
  document.querySelector("#email").innerText = ["loic", "lgx-development.com"].join("@")
  // display footer year
  document.querySelector("#current_year").innerText = new Date().getFullYear();
});


// ==== for menu scroll
const pageLink = document.querySelectorAll(".menu-scroll");

// pageLink.forEach((elem) => {
//   elem.addEventListener("click", (e) => {
//     e.preventDefault();
//     document.querySelector(elem.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//       offsetTop: 1 - 60,
//     });
//   });
// });

// section menu active
function onScroll(event) {
  const sections = document.querySelectorAll(".menu-scroll");
  const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  for (let i = 0; i < sections.length; i++) {
    const currLink = sections[i];
    const val = currLink.getAttribute("href");
    const refElement = document.querySelector(val.split("/").pop());
    if (!refElement) return;
    const scrollTopMinus = scrollPos + 73;
    if (refElement.offsetTop <= scrollTopMinus && refElement.offsetTop + refElement.offsetHeight > scrollTopMinus) {
      document.querySelector(".menu-scroll").classList.remove("active");
      currLink.classList.add("active");
    } else {
      currLink.classList.remove("active");
    }
  }
}

window.document.addEventListener("scroll", onScroll);

const onContactSubmitForm = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      document.querySelector("#contact-form button").disabled = true;
      document.querySelector("#contact-form button").style.opacity = '0.5';
      document.querySelector("#contact-response").style.display = "block";
    })
    .catch((error) => alert(error));
};

document
  .querySelector("#contact-form")
  .addEventListener("submit", onContactSubmitForm);
