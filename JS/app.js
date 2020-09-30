$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $(".main-nav").addClass("darkHeader");
  }
  if (scroll <= 50) {
    $(".main-nav").removeClass("darkHeader");
  }
})


// Filter Element

$(document).ready(function () {
  $('.itemBox').not('.ui').hide();
  $('.itemBox').filter('.ui').show();
  $('.list').click(function () {

    const value = $(this).attr('data-filter');
    if (value == 'all') {
      $('.itemBox').show('1000');
    }
    else {
      $('.itemBox').not('.' + value).hide('500');
      $('.itemBox').filter('.' + value).show('500');
    }
  })
})


// Add Active Class Button

$('.list').click(function () {
  $(this).addClass('active').siblings().removeClass('active')
})


// MENU TOGGLE

$('.nav-trigger').click(function(){
  $('.site-content-wrapper').toggleClass('sidebar')
})
