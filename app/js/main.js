$(function(){
  $('.header__user-link--cart, .close__top,.cart__side').on('click',function(){
    $('.cart').toggleClass('cart--active');
    $('body').toggleClass('body--active');
  })

  $('.header__menu').on('click',function(){
    $('.header__catalog').toggleClass('header__catalog--active');
    $('.header__menu').toggleClass('header__menu--active');
  })
  
  $('.publicity__inner').slick({
  });

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



