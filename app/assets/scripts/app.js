//import Javascript resources and modules
var $ = require('jquery');
var WheelIndicator = require('wheel-indicator');
require('jquery-touchswipe');




//cache variables
var carousel = $('.carousel'),
cell = $('.carousel__cell'),
content = $('.carousel__content');
var centeredIndex = Math.floor(cell.length/2 );
cell.eq(centeredIndex).addClass("centered");




//set-up onload
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
function unclickable(){
  var index = Math.floor(cell.length / 2);
  var cellNotFocused= cell.not(':eq(' + index + ')');
  cellNotFocused.css({
    'pointer-events' : 'none',
  });
}





// cache projects' resources (image, circe colors, video/png)
function Project(url, defaultColor, subColor){
  this.url = url;
  this.defaultColor = defaultColor;
  this.subColor = subColor;
}
var project1 = new Project("images/preview--1.png", "#9AB999", "#C5DEC4");
var project2 = new Project("images/preview--2.png", "#EC7F7A", "#FFB3AF");
var project3 = new Project("images/preview--3.png", "#E4475C", "#C45C6A");
var project4 = new Project("images/preview--4.png", "#00999E", "#35CFD4");
var project5 = new Project("images/preview--5.png", "#355D7D", "6DA2CC");
var project6 = new Project("images/preview--6.png", "#283338", "#638B9E");
var project7 = new Project("images/preview--7.png", "#CDE377", "#AAB67A");
var projects = [project1, project2, project3, project4, project5, project6, project7];

var imageSource = $('.image-wrapper picture source'),
content = $('.carousel__content'),
circle1 = $('.expand-1st circle'),
circle2 = $('.expand-2nd circle');
var scrollPosition = 0;
function loadAll(element){
  element.each(function(i){
    var num = i + scrollPosition;
    if(num >= projects.length){ num = i + scrollPosition - projects.length;}
    var x = projects[num];

    var url = x.url,
    defaultColor = x.defaultColor,
    subColor= x.subColor;
    //
    // console.log(element)

    if(element == imageSource){
      $(this).attr('srcset', url);
    }else if(element == content){
      $(this).css({'background' : '' + defaultColor + ''});
    }else if(element == circle1){
      $(this).css({'fill' : '' + defaultColor + ''});
    }else if(element == circle2){
      $(this).css({'fill' : '' + subColor + ''});
    }
  });
}
function loadNextProject(){
  scrollPosition = scrollPosition + 1;
  if(scrollPosition === projects.length){
    scrollPosition = 0;
  }
  loadAll(imageSource);
  loadAll(content);
  loadAll(circle1);
  loadAll(circle2);

  // console.log(scrollPosition)
}
function loadLastProject(){
  scrollPosition = scrollPosition - 1;
  if(scrollPosition === 0){
    scrollPosition = projects.length;
  }

  loadAll(imageSource);
  loadAll(content);
  loadAll(circle1);
  loadAll(circle2);

  // console.log(scrollPosition)
}
loadAll(imageSource);
loadAll(content);
loadAll(circle1);
loadAll(circle2);




// contructor function for moving cell up and down
var duration = 300, //million seconds
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
     }, durationStop);
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
      }, durationStop);
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
     }, durationStop);
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
     }, durationStop);
  };
}
function scroll(){

  var cellHeight = $('.carousel__cell').height();
  var scroll = new MoveCell(cellHeight, '');

  var indicator = new WheelIndicator({
    elem: document.querySelector('.carousel'),
    callback: function(e){
      // console.log(e.direction);
      // down or up
      var winWidth = $(window).width();
      if(e.direction === "down" && winWidth >= '1024'){
        scroll.cellUp();

        setTimeout(function(){
          if(scrollPosition === 7){
            scrollPosition = 0;
          }
          loadNextProject();
        }, duration);
      }
      else if(e.direction === "up" && winWidth >= '1024'){
        scroll.cellDown();

        setTimeout(function(){
          if(scrollPosition === 0){
            scrollPosition = 7;
          }
          loadLastProject();
        }, duration);
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





function transitionCircle(ele){
  // cache variables
  var circle1 = ele.children('.expand-1st'),
  circle2 = ele.children('.expand-2nd'),
  image = ele.children('.image-wrapper');

  // move two circles and project image in place
  ele.css({'z-index' : '1000'});
  circle1.css({
    'transform' : 'translateX(-50%)',
  });
  circle2.css({
    'transform' : 'translateX(-50%) scale(.5)',
  });
  image.css({
    'transform' : 'translateX(-50%)',
  });

  //expand circles and hide project image
  setTimeout(function(){
    circle1.css({
      'transform' : 'translateX(-50%) scale(5)',
      'transition' : '800ms cubic-bezier(.25, 1, .25, 1)',
    });

    circle2.css({
      'transform' : 'translateX(-50%) scale(5)',
      'transition' : '1500ms cubic-bezier(.25, 1, .25, 1)',
      'opacity' : '1'
    });

    image.css({
      'transform' : 'translateX(-50%) scale(.95)',
      'transition' : '100ms cubic-bezier(.25, 1, .25, 1)',
    });
  }, 600);
  setTimeout(function(){
    var hex = $('.centered .carousel__content .expand-1st circle').css("fill");
    circle2.children('circle').css({
      'fill' : '' + hex + '',
      'transition' : 'fill 1000ms ease',
    });

    image.css({
      'transform' : 'translateX(-50%) scale(1)',
      'transition' : '100ms cubic-bezier(.25, 1, .25, 1)',
    });
  }, 700);
  setTimeout(function(){
    image.css({
      'opacity' : '0',
      'transition' : '400ms cubic-bezier(.25, 1, .25, 1)'
    });
  }, 701);
  // setTimeout(function(){
  //   $('.carousel').css({
  //     'opacity' : '0'
  //   });
  // }, 2000)
}
$('.carousel__content').click(function(){
  transitionCircle($(this));
});





unclickable();
swipe();
scroll();
centerMobileCarousel();






$(window).resize(function(){
  scroll();
  swipe();
  centerMobileCarousel();
});
