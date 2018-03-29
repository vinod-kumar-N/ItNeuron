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

    $(".nav-link").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
      /*call Fancy Box common */

      $(".appDev").on('click', function() {

        callFancyBoxFn();
      
      });
      sendMail = function() {
        window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.com"
    }
      setTimeout(function(){
        $('.hiringBtn').trigger('click');
       }, 2000);
})