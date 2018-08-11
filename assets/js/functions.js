// Modal View Code
var modal = document.getElementById('appt');
var modal2 = document.getElementById('join-modal');
var button = document.getElementById("open-welcome-modal");
var button2 = document.getElementById("open-welcome-join-modal");
var button3 = document.getElementById("open-modal");
var button4 = document.getElementById("open-join-modal");
var span = document.getElementsByClassName("close-button")[0];
var span2 = document.getElementsByClassName("close-button2")[0];

button.onclick = function() {
    modal.style.display = "block";
}
button2.onclick = function() {
    modal2.style.display = "block";
}
button3.onclick = function() {
    modal.style.display = "block";
}
button4.onclick = function() {
    modal2.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    else if (event.target == modal2) {
        modal2.style.display = "none";
    }
}




$(document).ready(function(){
  // Script for dynamic smooth scrolling
  // Select all links with hashes
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
      // On-page links
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $('html, body').animate({
                  scrollTop: target.offset().top - document.getElementById('header-offset').offsetHeight
              }, 1000, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                      return false;
                  } else {
                      $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                      $target.focus(); // Set focus again
                  };
              });
          }
      }
  });
  $('.date-pick').datetimepicker({
    format: 'M. d, Y g:i a',
    allowTimes:['8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00'],
    disabledWeekDays: [0],
    validateOnBlur: false
  });
  $('.slider').slick({
    dots: true,
    autoplay: true,
    speed: 1000,
    pauseOnHover: true,
  });
  $('.slider2').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.slider2-nav',
    fade: true
  });
  $('.slider2-nav').slick({
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider2',
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
  });
  $('.sponsor-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 7,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 6,
          autoplay: true,
          speed: 200,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 900,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 5,
          autoplay: true,
          speed: 200,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 750,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4,
          autoplay: true,
          speed: 200,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          autoplay: true,
          speed: 200,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 2,
          autoplay: true,
          speed: 200,
          autoplaySpeed: 2000,
        }
      }
    ]
  });
});
