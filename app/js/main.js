$(function(){
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



