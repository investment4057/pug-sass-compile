// testコード
$('.navbar').click(function(){
  $(this).toggleClass('active');
  $(this).next('navbar').slideToggle();
});
// testコード
$('.navbar').hover(function(){
  $(this).toggleClass('active');
  $(this).next('navbar').slideToggle();
});
