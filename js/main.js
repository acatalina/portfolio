$(document).ready(function () {
  const speed = 300;
  const offset = 80;

  $('#profile-btn').click(() => {
    $('html, body').animate({
      scrollTop: $('#profile').offset().top - offset
    }, speed);
  });
  
  $('#portfolio-btn').click(() => {
    $('html, body').animate({
      scrollTop: $('#portfolio').offset().top - offset
    }, speed);
  });

  $('#contact-btn').click(() => {
    $('html, body').animate({
      scrollTop: $('#contact').offset().top - offset
    }, speed);
  });
});
