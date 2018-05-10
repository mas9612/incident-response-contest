$(document).ready(function() {
  $(".titleNav").load("header.html");
  $("#spNav").load("spNav.html");
  $("footer").load("footer.html");
});
$(window).load(function() {
  nav = $('#spNav');
  offset = nav.offset();
});
$(window).scroll(function() {
  if ($(window).scrollTop() > offset.top) {
    nav.addClass('fixed');
  } else {
    nav.removeClass('fixed');
  }
});
