
/*! //Animation

AOS.init({
  disable: function n() {
      return !!(window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./))},
      // disable on internet explorer
  offset: 100, // offset (in px) from the original trigger point
});

*/

/* ! // Popup

function togglePopup(id) {
      const modal = document.getElementById(id);

      if (modal) {
            modal.classList.toggle("active");

            document.body.style.overflow = (document.body.style.overflow == 'hidden') ? 'visible' : 'hidden';
      } else {
            console.error('The modal window by id "' + id + '" not found!');
      }
}

*/

/*
// Slider

let firstScreenSlider = new Swiper('#first-screen__slider', {
      lazy: true,
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 10,
      loop: true,
      autoplay: {
            delay: 10000,
            disableOnInteraction: true,
      },
      pagination: {
            el: '#first-screen__pagination',
            clickable: true,
      },
      navigation: {
            nextEl: '#first-screen__button-next',
            prevEl: '#first-screen__button-prev',
      },
})

*/

/*
// Tabs

function tabChange(_this, target, trigger, content) {

      document.querySelectorAll(trigger).forEach(function (item) {
            item.classList.remove('active');
            item.classList.toggle('wait');
      });

      document.querySelectorAll(content).forEach(function (item) {
            item.style.display = 'none';
      });

      _this.classList.add('active');

      document.getElementById(target).style.display = 'block';
}

*/

/*
// Burger

function burgerChange() {
      let burger = document.getElementById('header__burger');
      let heeaderMenu = document.getElementById('header__menu');
      let headerNav = document.getElementById('header__nav');
      let overlay = document.getElementById('overlay');

      burger.classList.toggle("active");
      heeaderMenu.classList.toggle("active");
      headerNav.classList.toggle("active");

      if (overlay) {
            overlay.classList.toggle("active");
      }
}

*/

//onclick="this.parentNode.classList.toggle('active')" - Accordion