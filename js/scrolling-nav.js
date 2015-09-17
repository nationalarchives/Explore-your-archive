//jQuery to collapse the navbar on scroll
var jQuery = jQuery.noConflict();
jQuery(window).scroll(function() {
    if (jQuery("header").offset().top > 50) {
        jQuery("header").addClass("smaller");
    } else {
        jQuery("header").removeClass("smaller");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
var jQuery = jQuery.noConflict();
jQuery(function() {
    jQuery('a.page-scroll').bind('click', function(event) {
        var $anchor = jQuery(this);
        jQuery('html, body').stop().animate({
            scrollTop: jQuery($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
