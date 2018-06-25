var $ = require('jquery');




export default function initialize(){

  //cahce all variables
  var cell = $('.carousel__cell'),
  centeredIndex = Math.floor(cell.length/2 ),
  winWidth = $(window).width(),
  x = (centeredIndex - 1) * cell.width(),
  cellNotFocused= cell.not(':eq(' + centeredIndex + ')');


  // --1--
  //center middle carousel cell in viewport (desktop/mobile)
  cell.eq(centeredIndex).addClass("centered");
  if(winWidth < '1024'){
    $('.carousel-wrapper').css({
      'transform' : 'translateX(' + -(x) + 'px)'
    });
  }
  else if(winWidth >= '1024'){
    $('.carousel-wrapper').removeAttr('style');
  }

  // --2--
  // make carousel cells that are not centered unclickable;
  cellNotFocused.css({
    'pointer-events' : 'none',
  });


}
