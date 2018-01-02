$(document).ready(function () {
  $('.section-news .slick').slick({
    dots: true,
      arrows: true,
      prevArrow: '<button class="slick-prev"><img src="images/index/news/arrow-left.png"></button>',
      nextArrow: '<button class="slick-next"><img src="images/index/news/arrow-right.png"></button>',
      responsive: [
        {
          breakpoint: 900,
          settings: {
            arrows: false
          }
        }
      ]
  })
  $('.section-events .slick').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })
  $('.section-testimonials .slick').slick({
    dots: true,
    arrows: false
  })

  $('.section-data').viewportChecker({
      offset: 0,
      callbackFunction: function (elem, action) {
        $('.section-data .number').each(function () {
          $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
          }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
              $(this).text(Math.ceil(now))
            }
          })
        })
      }
    })

  new WOW().init()
})

function myFunction() {
  $('.nav').toggleClass('responsive')
}
