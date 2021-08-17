$(function(){
  $('.header__menu-button,.side-menu__flank,.side-menu__close').on('click',function(){
    $('.side-menu').toggleClass('side-menu--active');
    $('.side-menu__flank').toggleClass('side-menu__flank--active');
    $('body').toggleClass('body--active');
  })

  $('.header__user-link--cart, .cart__close,.cart__side').on('click',function(){
    $('.cart').toggleClass('cart--active');
    $('body').toggleClass('body--active');
    $('.cart__side').toggleClass('cart__side--active');
  })

  $('.header__menu,.header__catalog').on('mouseenter mouseleave',function(){
    $('.header__menu').toggleClass('header__menu--active');
  })

  $('.header__search-min').on('click',function(){
    $('.header__form-search').toggleClass('header__form-search--active');
  })
  
  
  $('.publicity__inner').slick({
    dots:true,
  });

    $('.brand__wrapper').slick({
      arrows:false,
      slidesToShow: 6,
      slidesToScroll:1,
      responsive:[
        {
          breakpoint:1310,
          settings: {
            variableWidth:false,
          }
        },
        {
          breakpoint:768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1, 
          }
        },
        {
          breakpoint:576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1, 
          }
        }
      ]

    });

      
const counter = function () {
  const btns = document.querySelectorAll('.counter__btn');


  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector('.counter__input');
      const currentValue = +inp.value;
      let newValue;

      if (direction === 'plus') {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 1;
      }

      inp.value = newValue;
    })
  })

}

counter();


  var topGoods = document.querySelector('[data-ref="top-goods"]');
  var goodsOffer = document.querySelector('[data-ref="goods-offer"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(topGoods, config);
  var mixer2 = mixitup(goodsOffer, config);
});



