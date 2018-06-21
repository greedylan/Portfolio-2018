var $ = require('jquery');
var cell = $('.carousel__cell');
var centeredIndex = Math.floor(cell.length/2 );


//set-up onload


export function centerMobileCarousel(){
  var winWidth = $(window).width();
  var x = (Math.floor(cell.length/2) - 1) * cell.width();

  cell.eq(centeredIndex).addClass("centered");

  if(winWidth <= '1023'){

    $('.carousel-wrapper').css({
      'transform' : 'translateX(' + -(x) + 'px)'
    });
  }
  else if(winWidth > '1023'){
    $('.carousel-wrapper').removeAttr('style');
  }
}


export function unclickable(){
  var index = Math.floor(cell.length / 2);
  var cellNotFocused= cell.not(':eq(' + index + ')');
  cellNotFocused.css({
    'pointer-events' : 'none',
  });
}
