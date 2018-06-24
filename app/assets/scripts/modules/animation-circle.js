var $ = require('jquery');

export function transitionCircle(ele){
  // cache variables
  var circle1 = ele.children('.expand-1st'),
  circle2 = ele.children('.expand-2nd'),
  image = ele.children('.image-wrapper'),
  winWidth = $(window).width();

  // move two circles and project image in place
  ele.css({'z-index' : '1000'});
  if(winWidth >= '1024'){
    circle1.css({
      'transform' : 'translateX(-50%)',
    });
    circle2.css({
      'transform' : 'translateX(-50%) scale(.5)',
    });
    image.css({
      'transform' : 'translateX(-50%)',
    });
  }else{
    circle1.css({
      'transform' : 'translateY(-50%)',
    });
    circle2.css({
      'transform' : 'translateY(-50%) scale(.5)',
    });
    image.css({
      'transform' : 'translateY(-20%)',
    });
  }

  //expand circles and move project image, project image click effect starts
  setTimeout(function(){
    if(winWidth >= '1024'){
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
    }else{
      circle1.css({
      'transform' : 'translateY(-50%) scale(5)',
      'transition' : '800ms cubic-bezier(.25, 1, .25, 1)',
    });
      circle2.css({
      'transform' : 'translateY(-50%) scale(5)',
      'transition' : '1500ms cubic-bezier(.25, 1, .25, 1)',
      'opacity' : '1'
    });
      image.css({
      'transform' : 'translateY(-20%) scale(.95)',
      'transition' : '100ms cubic-bezier(.25, 1, .25, 1)',
    });
    }
  }, 600);

  //transition circle2 color to circle1 color(default color), project image click effect ends
  setTimeout(function(){
    var hex = $('.centered .carousel__content .expand-1st circle').css("fill");

    if(winWidth >= '1024'){
      circle2.children('circle').css({
        'fill' : '' + hex + '',
        'transition' : 'fill 1000ms ease',
      });

      image.css({
        'transform' : 'translateX(-50%) scale(1)',
        'transition' : '100ms cubic-bezier(.25, 1, .25, 1)',
      });
    }else{
      circle2.children('circle').css({
        'fill' : '' + hex + '',
        'transition' : 'fill 1000ms ease',
      });

      image.css({
        'transform' : 'translateY(-20%) scale(1)',
        'transition' : '100ms cubic-bezier(.25, 1, .25, 1)',
      });
    }

  }, 700);

  // hide project image
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
