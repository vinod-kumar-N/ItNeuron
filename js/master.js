$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 10) {
           $('nav').addClass('transHeader');
        }
        else {
           $('nav').removeClass('transHeader');
        }
    });
    new AnimOnScroll(document.getElementById('grid'), {
        minDuration: 0.4,
        maxDuration: 0.7,
        viewportFactor: 0.2
    });
})