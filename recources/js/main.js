$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});

var owl = $('.owl-carousel');
$("#testimonial-slider").owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
});
$("#sp-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 3],
    pagination: false,
    navigation: true,
    navigationText: ["", ""],
    slideSpeed: 1000,
    autoPlay: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
});
/*START WOW ANIMATION JS*/
new WOW().init();
/*END WOW ANIMATION JS*/