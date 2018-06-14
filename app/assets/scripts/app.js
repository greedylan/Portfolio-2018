//import Javascript resources and modules
var $ = require('jquery');
var WheelIndicator = require('wheel-indicator');
// var MoveCells = require('./modules/MoveCells');


//cache variables
var carousel = $('.carousel'),
cell = $('.carousel__cell');


// contructor function for moving cell up and down
var duration = "300", //million seconds
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
     }, 301);
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
      }, 301);
  };
}


function swipeReady(){
  var cellHeight = $('.carousel__cell').height();
  var swipe = new CellUpDown(cellHeight);
  var indicator = new WheelIndicator({
    elem: document.querySelector('.carousel'),
    callback: function(e){
      console.log(e.direction);
      // down or up
      if(e.direction === "down"){
        swipe.cellUp();
      }

      else if(e.direction === "up"){
        swipe.cellDown();
      }

    }
  });

}

swipeReady();

$(window).resize(function(){
  swipeReady();
});
