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
      var callFancyBoxFn = function(head,content){
        $.fancybox.open('<div class="message"><h2>'+head+'</h2><div>'+content+'</div></div>');
      }
      $(".appDev").on('click', function() {

        callFancyBoxFn();
      
      });

      setTimeout(function(){
        var head = 'We are Hiring';
        var content = '<div class="hireContainer"><p>Inbound Process</p><p>Location: Bangalore</p><p>Process: Inbound</p><p>Shift : Rotational</p><p>Working Days: 6 Days</p><p>Fixed Salary + Incentives</p><p>Graduation: Fresher/Graduate/Undergraduate</p><p>Cab Facility Available</p></div>';
        callFancyBoxFn(head,content);
       }, 2000);
})