window.scroll({
  top: 0,
  left: 0,
  behavior: 'smooth'
});

$(document).on('scroll', function() {
  var scroll_top = $(this).scrollTop();
  if (scroll_top > 50) {
    $('.toplink').addClass('show');
  }
});
