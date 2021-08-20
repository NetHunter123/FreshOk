var $range = $(".filter__price-input"),
  $inputFrom = $(".filter__from"),
  $inputTo = $(".filter__to"),
  instance;

$range.ionRangeSlider({
  type: "double",
  onStart: updateInputs,
  onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("input", function () {
  var val = $(this).prop("value");

  // validate
  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val
  });
});

$inputTo.on("input", function () {
  var val = $(this).prop("value");

  // validate
  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val
  });
});
w = $(window).width();

$(function () {

  $('.select-style').styler();

  $('.catalog__filter-btn').on('click', function () {
    $('.catalog__wrap').addClass('catalog__wrap--active');
    $('.body').addClass('body--active');
  })

  $('.filter__close').on('click', function () {
    $('.catalog__wrap').removeClass('catalog__wrap--active');
    $('.body').removeClass('body--active');
  })

  $('.catalog__view-btn').on('click', function () {
    $('.catalog__view-btn').removeClass('catalog__view-btn--active');
    $(this).addClass('catalog__view-btn--active');
  })

  $('.button-list').on('click', function () {
    $('.product-card').addClass('product-card--list');
    $('.catalog__list').addClass('catalog__list--list');
  });

  $('.button-grid').on('click', function () {
    $('.product-card').removeClass('product-card--list');
    $('.catalog__list').removeClass('catalog__list--list');
  })


  $('.header__btn,.side-menu__close').on('click', function () {
    $('.side-menu').toggleClass('side-menu--active');
    $('.body').toggleClass('body--active');
  })

  $('.header__user-link--cart, .cart__close').on('click', function () {
    $('.cart').toggleClass('cart--active');
    $('.body').toggleClass('body--active');
    console.log('log');
  })

  $('.header__menu,.header__catalog').on('mouseenter mouseleave', function () {
    $('.header__menu').toggleClass('header__menu--active');
  })

  $('.header__search-min').on('click', function () {
    $('.header__form-search').toggleClass('header__form-search--active');
  })

  $('.filter__title').on('click', function () {
    $(this).toggleClass('filter__title--active');
  })

  $('.publicity__inner').slick({
    dots: true,
  });

  $('.brand__wrapper').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1310,
        settings: {
          variableWidth: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
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


$(document).mouseup(function (e) {
  var cart = $('.cart__inner');
  if ($('.cart').has(e.target).length === 0) {
    if (!cart.is(e.target) &&
      cart.has(e.target).length === 0) {
      $('.body').removeClass('body--active');
      $('.cart').removeClass('cart--active');
    }
  }
  if ($('.side-menu').has(e.target).length === 0) {
    if (!$('.side-menu__inner').is(e.target) &&
      $('.side-menu__inner').has(e.target).length === 0) {
      $('.side-menu').removeClass('side-menu--active');
      $('.body').removeClass('body--active');
    }
  }
});


// document.addEventListener('DOMContentLoaded', () => {
//   window.addEventListener('click', e => { // при клике в любом месте окна браузера
//     const target = e.target // находим элемент, на котором был клик
//     if (!target.closest('.cart__inner')) { // если этот элемент или его родительские элементы не окно корзины
//       $('.cart').classList.remove('cart--active') // то закрываем секцию, удаляя активный класс
//     }
//   })
// });