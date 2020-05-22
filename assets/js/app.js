$(function() {
  // スムーススクロール
  $('.to-top').on('click', function() {
    $('body, html').animate({ scrollTop: 0 }, 500);
  })

  $('.humberger-menu').on('click', function() {
    $('nav').addClass('active');
  })

  $('.nav-close-btn').on('click', function() {
    $('nav').removeClass('active');
  })
});