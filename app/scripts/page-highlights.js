$(document).ready(function () {
  $('.highlight .header').on('click', function () {
    let self = this
    $('.highlight .box').after().trigger('click')
    $(self).next().slideDown('fast')
    $(self).closest('.highlight').addClass('active')
    $(self).slideUp('fast')
  })
  $('.highlight .box').after().on('click', function () {
    let self = this
    $(self).prev().slideDown('fast')
    $(self).closest('.highlight').removeClass('active')
    $(self).slideUp('fast')
  })

  $('.highlight .box').slideUp('fast')
})
