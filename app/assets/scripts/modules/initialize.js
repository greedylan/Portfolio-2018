var $ = require('jquery');




export default function initialize(){

  //cahce all variables
  var cell = $('.carousel__cell'),
  centeredIndex = Math.floor(cell.length/2 ),
  cellNotFocused= cell.not(':eq(' + centeredIndex + ')');


  // --1--
  //on load, add class to centered cell in viewport (desktop/mobile)
  cell.eq(centeredIndex).addClass("centered");


  // --2--
  // make carousel cells that are not centered unclickable;
  cellNotFocused.css({
    'pointer-events' : 'none',
  });







  // ARCHIVED BELOW: center caroucel_cell with javascript
  // fixed with little hack on css: see .carousel-wrapper & carousel-cell

  // var winWidth = $(window).width(),
  // x = (centeredIndex - 1) * cell.width(),
  // y = $(window).width()/4,
  // z = x+y;

  // if(winWidth < '1024'){
  //   $('.carousel-wrapper').css({
  //     'transform' : 'translateX(' + -(z) + 'px)'
  //   });
  // }
  // else if(winWidth >= '1024'){
  //   $('.carousel-wrapper').removeAttr('style');
  // }
}
