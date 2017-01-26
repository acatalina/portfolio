$(document).ready(function() {
  $('.menubutton').hover(
    function() {
      $(this).addClass('menuButtonActive');
      },
    function() {
      $(this).removeClass('menuButtonActive');

  });

  $('.portfoliobutton').click(function() {
    $('.content').load('/portfolio.html', '.content')
  });

});
