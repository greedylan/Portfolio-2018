var $ = require('jquery');
var WheelIndicator = require('wheel-indicator');
require('jquery-touchswipe');
import {loadAll, loadPreviousProject, loadNextProject} from './loadCell.js';
import {loadNextTitle, loadPreviousTitle} from './title.js';

var carousel = $('.carousel');
var duration = 300, //million seconds
durationStop = duration + 1,
timing = ".25, 1, .25, 1"; //cubic-bezier
var scrollPosition = 0;


// contructor function for moving cell up and down
function MoveCell(cellHeight, cellWidth){
  this.cellUp = function(){
    carousel.css({
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
    }, durationStop);
  };
  this.cellDown = function(){
    carousel.css({
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
    }, durationStop);
  };
  this.cellLeft = function(){
    carousel.css({
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
    }, durationStop);
  };
  this.cellRight = function(){
    carousel.css({
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
    }, durationStop);
  };
}

function videoFadeOutThenIn(){
  $('.video').css({'opacity' : '0'});
  setTimeout(function(){
    $('.video').css({'opacity' : '1'});
  }, durationStop);
}




export function scrollMoveCell(){
  var cellHeight = $('.carousel__cell').height();
  var scroll = new MoveCell(cellHeight, '');
  var indicator = new WheelIndicator({

    elem: document.querySelector('.carousel'),
    callback: function(e){
      console.log(e.direction);
      // down or up
      var winWidth = $(window).width();
      if(e.direction === "down" && winWidth >= '992' && !$('.showroom').hasClass('loaded')){
        scroll.cellUp();
        loadNextTitle();
        videoFadeOutThenIn();
      }
      else if(e.direction === "up" && winWidth >= '992' && !$('.showroom').hasClass('loaded')){
        scroll.cellDown();
        loadPreviousTitle();
        videoFadeOutThenIn();
      }
    }

  });
}

export function scrollLoadCell(){
  var indicator = new WheelIndicator({
    elem: document.querySelector('.carousel'),
    callback: function(e){
      var winWidth = $(window).width();
      if(e.direction === "down" && winWidth >= '992' && !$('.showroom').hasClass('loaded')){
        setTimeout(function(){
            loadNextProject();
        }, durationStop);
      }
      else if(e.direction === "up" && winWidth >= '992' && !$('.showroom').hasClass('loaded')){
        setTimeout(function(){
          loadPreviousProject();
        }, durationStop);
      }
    }
  });
}

export function swipeMoveCell(){
  var winWidth = $(window).width();
  var cellWidth = $('.carousel__cell').width();
  var swipe = new MoveCell('', cellWidth);

  $('.home').swipe({
    // Generic swipe handler for all directions
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      // console.log(direction, distance, fingerCount);

      if( direction == 'left' && winWidth < '992' && !$('.showroom').hasClass('loaded')){
        // console.log('swiping left');
        swipe.cellLeft();
        loadNextTitle();
        videoFadeOutThenIn();

        setTimeout(function(){
          loadNextProject();
        }, 300);
      }
      else if( direction == 'right' && winWidth < '992' && !$('.showroom').hasClass('loaded')){
        // console.log('swiping right');
        swipe.cellRight();
        loadPreviousTitle();
        videoFadeOutThenIn();

        setTimeout(function(){
          loadPreviousProject();
        }, 300);
      }
    }
  });
}
