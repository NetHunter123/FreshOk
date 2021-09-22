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

  min = data.min;
  max = data.max;

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

  $('.catalog__filter-btn').on('click', function () {
    $('.catalog__wrap').toggleClass('catalog__wrap--active');

    if ($(".catalog__wrap").hasClass('catalog__wrap--active')) {
      $(".body").addClass("body--active");
    }
  });

  $('.filter__close').on('click', function () {
    $('.catalog__wrap').removeClass('catalog__wrap--active');
    $('.body').removeClass('body--active');
  })

  $(".header__btn,.side-menu__close").on("click", function () {
    $(".side-menu").toggleClass("side-menu--active");

    if ($(".side-menu").hasClass('side-menu--active')) {
      $(".body").addClass("body--active");
    } else {
      $(".body").removeClass("body--active");
    }
  });

  $(".header__user-link--cart").on("click", function () {
    $(".cart").toggleClass("cart--active");

    if ($('.cart').hasClass('cart--active'))
      $(".body").addClass("body--active");
  });

  $(".cart__close").on("click", function () {
    $(".cart").removeClass("cart--active");
    $(".body").removeClass("body--active");
  });

  $('.header__search-min').on('click', function () {
    $('.header__form-search').toggleClass('header__form-search--active');
  })

  $('.filter__title').on('click', function () {
    $(this).toggleClass('filter__title--active');
  })

  $('.interested__list').slick({
    slidesToShow: 4,

    responsive: [{
        breakpoint: 1330,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 2,
        }
      }
    ]
  });

  $('.publicity__inner').slick({
    dots: true,
  });

  $('.product__images').slick({
    dots: true,
  });

  $('.stars').rateYo({
    starWidth: "16px",
    normalFill: "#A0A0A0",
    ratedFill: "#FFB800",
    spacing: "6px"
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
  if ($(".catalog__wrap").has(e.target).length === 0) {
    if (
      $(".catalog__wrap").is(e.target) &&
      !$(".catalog__filters").is(e.target)
    ) {
      console.log("entered3");
      $(".body").removeClass("body--active");
      $(".catalog__wrap").removeClass("catalog__wrap--active");
    }
  }

  if ($(".side-menu").has(e.target).length === 0) {
    if (
      $(".side-menu").is(e.target) &&
      !$(".side-menu__inner").is(e.target)
    ) {
      console.log("entered2");
      $(".side-menu").removeClass("side-menu--active");
      $(".body").removeClass("body--active");
    }
  }

  if ($(".cart").has(e.target).length === 0) {
    if (
      $(".cart").is(e.target) &&
      !$(".cart__inner").is(e.target) &&
      $(".header__user-link--cart").has(e.target).length === 0
    ) {
      console.log("entered1");
      $(".body").removeClass("body--active");
      $(".cart").removeClass("cart--active");
    }
  }
});