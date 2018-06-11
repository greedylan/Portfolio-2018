var $ = require('jquery');

function moveCarouselCells(){
  var carouselCellUnitHeight = $('.carousel .carousel__cell').height(),
  carouselCellCounts = $('.carousel .carousel__cell').length,
  moveDis = -(carouselCellUnitHeight * ((carouselCellCounts/2)-1)),
  moveHalf = -(carouselCellUnitHeight/2);

  // Logic: Moving Cells Up
  if(carouselCellCounts%2 != 0){
    $('.carousel__content-wrapper').css({
      'transform' : 'translateY('+ moveDis +'px)'
    });
  } else {
    $('.carousel__content-wrapper').css({
      'transform' : 'translateY('+ moveHalf +'px)'
    });
  }
}


(function() {moveCarouselCells();})();
$(window).resize(moveCarouselCells);


$('.scroll').scroll(function(){
  // alert('dont you dare');
});

$(window).scroll(function(){

});
