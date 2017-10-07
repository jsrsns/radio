/* 2017 Joes Roosens */

/* Page load in */
{
setTimeout(() => document.body.classList.add('render'), 60);
};

/* Scrolling */
(function($) {
  "use strict";

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 14)
        }, 500, "easeInOutExpo");
        return false;
      }
    }
  });
})(jQuery)
