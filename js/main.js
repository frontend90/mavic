/****************     burger  *************/
let user_icon = document.querySelector('.burger');
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector('.main-menu');
  user_menu.classList.toggle('show');
  user_icon.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.burger')) {
    let user_menu = document.querySelector('.main-menu');
    user_menu.classList.remove('show');
    user_icon.classList.remove('active');
  }
});

$('.main-menu a').click(function () {
  $('.main-menu').removeClass('show');
  $('.burger').removeClass('active');
});

/***********  изменение HTML    *****************/
$(window).resize(function (event) {
  adaptive_function();
});
function adaptive_header(w, h) {
  var headerMenu = $('.main-menu');/* куда закинуть блок */
  var headerSocial = $('.buy-phone');/* блок, который закинуть */
  if (w < 1101) {/* ширина */
    if (!headerSocial.hasClass('done')) {
      headerSocial.addClass('done').appendTo(headerMenu);
    }
  } else {
    headerSocial.removeClass('done').appendTo($('.buy'));/* вернуть блок на прежнее место */
  }
}

function adaptive_function() {
  var w = $(window).outerWidth();
  var h = $(window).outerHeight();
  adaptive_header(w, h);
}
adaptive_function();

/*************       about  slick       ************/
$('.about-slider').slick({
  prevArrow: $('.about-arrows-left'),
  nextArrow: $('.about-arrows-right'),
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  autoplay: true,
  speed: 1500,
  responsive: [{
    breakpoint: 661,
    settings: {
      arrows: false
    }
  }]
});
