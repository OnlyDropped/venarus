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
  prevArrow: '<button type="button" class="slick-prev"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0796 0.39973L1.47962 13.9997L15.0796 27.5996" stroke="white"/></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.920266 27.5999L14.5203 13.9999L0.920266 0.399905" stroke="white"/></svg></button>',
  responsive: [
    {
      breakpoint: 376,
      settings: {
        arrows: false,
      }
    },
    {
      breakpoint: 321,
      settings: {
        arrows: true,
      }
    }
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