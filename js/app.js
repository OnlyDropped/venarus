$('.specialist__slider').slick({
  fade: true, 
  arrows: false, 
  dots: true,
})


const btnMenu = document.querySelector('.header__btn-menu');
const menu = document.querySelector('.header__menu')
btnMenu.addEventListener('click', ()=>{
  btnMenu.classList.toggle('header__btn-menu--active')
  menu.classList.toggle('header__menu--active')
})

$('.header__slider').slick({
  fade: true, 
  arrows: true, 
  //dots: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-next.svg" alt=""></button>',
  responsive: [
    {
      breakpoint: 376,
      settings: {
        arrows: false,
      }
    },
  ]
})

 $('.production__thumb').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  focusOnSelect: true,
  asNavFor: '.production__nav'
});
$('.production__nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  asNavFor: '.production__thumb',
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-next.svg" alt=""></button>',
});