$(document).ready(function ($) {
  var url = window.location.href;
  var i = url.lastIndexOf('.html');
  var j = url.lastIndexOf('/') + 1;
  url = url.substring(j, i);
  console.log(url);
switch(url) {
    case 'about':
        $('#about-nav li').toggleClass('active', true);
        break;
    case 'service':
        $('#service-nav li').toggleClass('active', true);
        break;
    case "edu":
      $('#edu-nav li').toggleClass('active', true);
    break;
  case 'awards':
      $('#awards-nav li').toggleClass('active', true);
    break;
    default:
        $('#index-nav li').toggleClass('active', true);
}
  
  $('.mobile-button').on('click', function() {
      $('nav').toggleClass('menu-open');
  });
});