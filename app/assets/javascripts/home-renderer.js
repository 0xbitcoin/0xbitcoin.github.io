
const $ = require('jquery');
import Vue from 'vue';

import Typed from 'typed.js';

//require('owl.carousel')


export default class HomeRenderer {

    init( )
    {


      $(window).on('load', function () {
          $("#loading-center-page").fadeOut();
          $("#loading-page").delay(400).fadeOut("slow");
      });



      var options = {
          strings: [
           '',
          'node index.js^1000\n `Welcome to 0xBitcoin Miner!` ^100\n `Version 1.5.21` ^100\n `Type a command to get started..` ^2000\n `mine` ^200\n `Selected mining account:` ^100\n `0x430d92dfb5caa11347F26eE741910Dee6eed3208` ^100\n `New challenge number: 0xd7ba815` ^2000\n `Hash rate: 6318 kH/s` ^2000\n `Hash rate: 6121 kH/s` ^2000\n `Hash rate: 6188 kH/s`  '
        //'hello'
         ],
          typeSpeed: 40,
           loop: true,
           backSpeed: 0,
        }

  /*    var options = {
          strings: [
            "<i>First</i> sentence.",
           "&amp; a second sentence."
           , "&amp; a second sentence."
           , "&amp; a second sentence."
         ],
          typeSpeed: 40,
           startDelay: 500,
           loop: true,
          backSpeed: 0,
        }
*/

        var typed = new Typed(".code-terminal", options);


  /*
      $('.testimonial-carousel').slick({
        dots: true,
        speed: 500
      });




      $('.screenshot_slider').owlCarousel({
          loop: true,
          responsiveClass: true,
          nav: true,
          margin: 5,
          autoplay: true,
          autoplayTimeout: 4000,
          smartSpeed: 500,
          center: true,
          navText: ['<span class="icon-arrow-left"></span>', '<span class="icon-arrow-right"></span>'],
          responsive: {
              0: {
                  items: 1,
              },
              600: {
                  items: 3
              },
              1200: {
                  items: 5
              }
          }
      });


      $('.testimonial-caroussel').owlCarousel({
          loop: true,
          responsiveClass: true,
          nav: true,
          autoplay: true,
          autoplayTimeout: 4000,
          smartSpeed: 500,
          center: true,
          navText: ['<span class="icon-arrow-left"></span>', '<span class="icon-arrow-right"></span>'],
          responsive: {
              0: {
                  items: 1,
              },
              600: {
                  items: 1

              },
              1200: {
                  items: 1
              }
          }
      });


      $('.popup-image').magnificPopup({
          type: 'image',
          removalDelay: 300,
          mainClass: 'mfp-with-zoom',
          gallery: {
              enabled: true
          },
          zoom: {
              enabled: true,

              duration: 300,
              easing: 'ease-in-out',

              opener: function (openerElement) {

                  return openerElement.is('img') ? openerElement : openerElement.find('img');
              }
          }
      });



      $.scrollUp({
          scrollText: '<i class="icon-arrow-up"></i>',
          easingType: 'linear',
          scrollSpeed: 900,
          animation: 'fade'
      });


      new WOW().init({
          mobile: true,
      });

        $('a.section-scroll[href*="#"]:not([href="#"])').on('click', function (event) {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
              || location.hostname == this.hostname) {

              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  // Only prevent default if animation is actually gonna happen
              event.preventDefault();
                  $('html,body').animate({
                      scrollTop: target.offset().top
                  }, 750);
                  return false;
              }
          }
      });
      */


      console.log('init home')

      $("#loading-center-page").fadeOut();
      $("#loading-page").delay(400).fadeOut("slow");
    }

     update( )
    {

    }

    hide()
    {

    }

    show()
    {

    }

}
