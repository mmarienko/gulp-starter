// ie 11 polyfill

if (window.NodeList && !NodeList.prototype.forEach) {
   NodeList.prototype.forEach = Array.prototype.forEach;
}

/*!

AOS.init({
  disable: function n() {
      return !!(window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./))},
      // disable on internet explorer
  offset: 100, // offset (in px) from the original trigger point
});

*/



// Burger
let burger = document.querySelector("[data-menu=burger]");
let menu = document.querySelector("[data-menu=menu]");

burger.addEventListener('click', function () {
      burger.classList.toggle("active");
      menu.classList.toggle("active");

      document.body.style.overflow = (document.body.style.overflow == 'hidden') ? 'visible' : 'hidden'
});

document.querySelectorAll("data-menu>a").forEach( function (item) {
      item.addEventListener('click', function () {
            burger.classList.remove("active");
            menu.classList.remove("active");
            document.body.style.overflow = 'visible';
      });
});

/*

// Modal
let modal = document.querySelector("[data-modal]");

Array.prototype.forEach.call(document.querySelectorAll('a[href*="#modal-"]'), function (item) {
   	  item.addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.add('active');
      });
});

Array.prototype.forEach.call(document.querySelectorAll('[data-modal]'), function (item) {
   	  item.addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.remove('active');
      });
});

*/

/*
// Accordions

Array.prototype.forEach.call(document.querySelectorAll('[data-accordions=link]'), function (item) {
   item.addEventListener('click', function (e) {
      e.preventDefault();
      const parent = item.parentNode;

      parent.classList.toggle('faq__item--active')

      //if (parent.classList.contains('faq__item--active')) {
      //   parent.classList.remove('faq__item--active');
      //} else {
      //   document.querySelectorAll('.faq__item').forEach((child) => child.classList.remove('faq__item--active'))
      //   parent.classList.add('faq__item--active');
      //}
   })
});

*/