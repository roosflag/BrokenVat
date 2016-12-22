// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets

// (function($) {
//     $(document).ready(function(){
//         $(window).scroll(function(){
//             if ($(this).scrollTop() > 200) {
//                 $('#mainnav').fadeIn(500);
//             } else {
//                 $('#mainnav').fadeOut(500);
//             }
//         });
//     });
// })(jQuery);
// $(document).on('turbolinks:load', function() {
//
//     var mainnav = $('.main_nav');
//     var origOffsetY = mainnav.offset().top;
//
//     function scroll() {
//         if ($(window).scrollTop() >= origOffsetY) {
//             $('.main_nav').addClass('sticky');
//             $('.moon').addClass('main_nav-padding');
//         } else if (true)  {
//             $('.main_nav').removeClass('sticky');
//             $('.moon').removeClass('main_nav-padding');
//         }
//
//
//     }
//
//     document.onscroll = scroll;
//
// });
$(document).on('turbolinks:load', function() {
    "use strict";

    var $navbar = $(".nav"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > y_pos + height) {
            $navbar.addClass("navbar-fixed").animate({
                top: 0
            });
        } else if (scrollTop <= y_pos) {
            $navbar.removeClass("navbar-fixed").clearQueue().animate({
                top: "48px"
            }, 0);
        }
    });

})(jQuery, undefined);
