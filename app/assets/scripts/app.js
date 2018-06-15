//import Javascript resources and modules
var $ = require('jquery');
var WheelIndicator = require('wheel-indicator');
// var MoveCells = require('./modules/MoveCells');


//cache variables
var carousel = $('.carousel'),
cell = $('.carousel__cell');


// contructor function for moving cell up and down
var duration = "500", //million seconds
timing = ".25, 1, .25, 1"; //cubic-bezier
function CellUpDown(cellHeight){
  this.cellUp = function(){
    $('.carousel').css({
       'transform' : 'translateY(' + -(cellHeight) + 'px)',
       'transition' : '' + duration + 'ms cubic-bezier(' + timing + ')',
     });
     setTimeout(function(){
       carousel.css({
         'transform' : 'translateY(0px)',
         'transition' : 'none',
       });
     }, duration);

     setTimeout(function(){
       carousel.removeAttr('style');
     }, 501);
  };
  this.cellDown = function(){
    $('.carousel').css({
        'transform' : 'translateY(' + (cellHeight) + 'px)',
        'transition' : '' + duration + 'ms cubic-bezier(' + timing + ')',
      });
      setTimeout(function(){
        carousel.css({
          'transform' : 'translateY(0px)',
          'transition' : 'none',
        });
      }, duration);
      setTimeout(function(){
        carousel.removeAttr('style');
      }, 501);
  };
}

function scroll(){
  var cellHeight = $('.carousel__cell').height();

  var swipe = new CellUpDown(cellHeight);
  var indicator = new WheelIndicator({
    elem: document.querySelector('.carousel'),
    callback: function(e){
      console.log(e.direction);
      // down or up
      var winWidth = $(window).width();
      if(e.direction === "down" && winWidth >= '1024'){
        swipe.cellUp();
      }
      else if(e.direction === "up" && winWidth >= '1024'){
        swipe.cellDown();
      }
      else{
        return;
      }
    }
  });
}
function centerMobileCarousel(){
  var winWidth = $(window).width();
  var x = (Math.floor(cell.length/2) - 1) * cell.width();
  if(winWidth <= '1023'){

    $('.carousel-wrapper').css({
      'transform' : 'translateX(' + -(x) + 'px)'
    });
  }
  else if(winWidth > '1023'){
    $('.carousel-wrapper').removeAttr('style');
  }
}


scroll();
centerMobileCarousel();

$(window).resize(function(){
  scroll();
  centerMobileCarousel();
});
