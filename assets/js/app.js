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

  // ページ内リンク
  $('.nav-link > li').on('click', function() {
    const target = $(this).attr('class');
    console.log('#' + target);
    
    const targetPlace = $('#' + target).offset().top;
    console.log(targetPlace);
    
    $('body, html').animate({ scrollTop: targetPlace }, 500);

    console.log($('#header nav').hasClass('active'));
    
    if ($('#header nav').hasClass('active')) {
      $('#header nav').removeClass('active');
    }

  })

});