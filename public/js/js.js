$(document).ready(function ($) {
  var url2 = "" + window.location.href;
  var j = url2.lastIndexOf('/');
  url2 = url2.substring(0, j);
  console.log(url2);
  j = url2.lastIndexOf('/') + 1;
  url2 = url2.substring(j);
  console.log(url2);
  switch(url2) {
      case 'about':
          $('#about-nav li').toggleClass('active', true);
          break;
      case 'service':
          $('#service-nav li').toggleClass('active', true);
          break;
      case "education-and-experience":
        $('#edu-nav li').toggleClass('active', true);
      break;
    case 'awards-honors-press':
        $('#awards-nav li').toggleClass('active', true);
      break;
      default:
          $('#index-nav li').toggleClass('active', true);
  }
  
  $('.mobile-button').on('click', function() {
      $('nav').toggleClass('menu-open');
  });
});