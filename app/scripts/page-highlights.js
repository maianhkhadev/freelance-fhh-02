$(document).ready(function () {
  $('.highlight .header').on('click', function () {
    let self = this
    $('.highlight .box').slideUp('fast')
    $(self).next().slideDown('fast')
    $(self).slideUp('fast')
  })
  $('.highlight .box').after().on('click', function () {
    let self = this
    $(self).prev().slideDown('fast')
    $(self).slideUp('fast')
  })

  $('.highlight .box').slideUp('fast')
})
