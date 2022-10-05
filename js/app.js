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