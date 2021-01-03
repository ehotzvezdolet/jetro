$(function(){

  $('.slider__inner').slick({
      asNavFor: '.thumbs',
  });

  $('.thumbs').slick({
      asNavFor: '.slider__inner',
      slidesToShow: 6,
      slidesToScroll: 6,
      focusOnSelect: true,
});
    $('.header__menu-btn').on('click', function(){
        $('.nav ul').slideToggle();
    });


});

