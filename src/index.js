import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/lightbox2/dist/js/lightbox.min.js';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

setTimeout(function () {
    $(document).on("resize scroll", function () {
        if ($("#after-image").offset().top < window.pageYOffset + 60) {
            $('.menu').removeClass("basic-transparent");
            $('.menu').addClass("basic-visible");
            $('.logo_pic').attr("src", "home_images/logoblack.png");
        } else {
            $('.menu').addClass("basic-transparent");
            $('.menu').removeClass("basic-visible");
            $('.logo_pic').attr("src", "home_images/logowhite.png");
        }
    })
}, 2500);

$(function () {
    $('.menu_child a').on('click', function (ev){
        ev.preventDefault();
        ev.stopPropagation();
        window.scrollTo({
            left: 0,
            top: $($(this).attr('href')).offset().top - 70,
        });
    });
});
