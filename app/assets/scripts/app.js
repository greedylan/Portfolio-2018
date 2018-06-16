//import Javascript resources and modules
var $ = require('jquery');
var WheelIndicator = require('wheel-indicator');
require('jquery-touchswipe');


//cache variables
var carousel = $('.carousel'),
cell = $('.carousel__cell');


// contructor function for moving cell up and down
var duration = 400, //million seconds
durationStop = duration + 1,
timing = ".25, 1, .25, 1"; //cubic-bezier
function MoveCell(cellHeight, cellWidth){
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
  this.cellLeft = function(){
    $('.carousel').css({
       'transform' : 'translateX(' + -(cellWidth) + 'px)',
       'transition' : '' + duration + 'ms cubic-bezier(' + timing + ')',
     });
     setTimeout(function(){
       carousel.css({
         'transform' : 'translateX(0px)',
         'transition' : 'none',
       });
     }, duration);

     setTimeout(function(){
       carousel.removeAttr('style');
     }, 501);
  };
  this.cellRight = function(){
    $('.carousel').css({
       'transform' : 'translateX(' + (cellWidth) + 'px)',
       'transition' : '' + duration + 'ms cubic-bezier(' + timing + ')',
     });
     setTimeout(function(){
       carousel.css({
         'transform' : 'translateX(0px)',
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
  var scroll = new MoveCell(cellHeight, '');

  var indicator = new WheelIndicator({
    elem: document.querySelector('.carousel'),
    callback: function(e){
      console.log(e.direction);
      // down or up
      var winWidth = $(window).width();
      if(e.direction === "down" && winWidth >= '1024'){
        scroll.cellUp();
      }
      else if(e.direction === "up" && winWidth >= '1024'){
        scroll.cellDown();
      }
      else{
        return;
      }
    }
  });
}

function swipe(){
  var winWidth = $(window).width();
  var cellWidth = $('.carousel__cell').width();
  var swipe = new MoveCell('', cellWidth);

  $('.home').swipe( {
    // Generic swipe handler for all directions
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      // console.log(direction, distance, fingerCount);

      if( direction == 'left' && winWidth < '1024'){
        swipe.cellLeft();
        console.log('swiping left');
      }
      else if( direction == 'right' && winWidth < '1024'){
        swipe.cellRight();
        console.log('swiping right');
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

swipe();
scroll();
centerMobileCarousel();

$(window).resize(function(){
  scroll();
  swipe();
  centerMobileCarousel();
});
