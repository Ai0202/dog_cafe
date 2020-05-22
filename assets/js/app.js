$(function() {
  // ページトップに戻る
  $('.to-top').on('click', function() {
    $('body, html').animate({ scrollTop: 0 }, 500);
  })

  // ハンバーガーメニューを開く
  $('.humberger-menu').on('click', function() {
    $('#header nav').addClass('active');
  })

  // ハンバーガーメニューを閉じる
  $('.nav-close-btn').on('click', function() {
    $('#header nav').removeClass('active');
  })


});