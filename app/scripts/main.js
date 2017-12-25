console.log('\'Allo \'Allo!');

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

  AOS.init({
    delay: 500,
    duration: 500
  })
})

function myFunction() {
  $('.nav').toggleClass('responsive')
}
