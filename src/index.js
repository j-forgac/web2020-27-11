import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/lightbox2/dist/js/lightbox.min.js';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

setTimeout(function () {
    $(document).on("resize scroll", function () {
        console.log($("#after-image").offset().top)
        console.log(window.pageYOffset)
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

