var $ = require('jquery');

var logo = $('.logo'),
sandwich = $('.sandwich'),
bread1 = $('.bread-1'),
bread2 = $('.bread-2'),
bread3 = $('.bread-3'),
timing = 'cubic-bezier(.25, 1, .25, 1)';

export function letterDOut(){
  //last bread: shrink width and reduce border radius to 0
  bread3.addClass('is__half-squared');
  // rotate three breads
  setTimeout(function(){
    bread1.addClass('is__rotating');
    bread2.addClass('is__rotating');
    bread3.addClass('is__rotating');
  }, 100);
  // move pseudo class:before out of the parent's frame
  setTimeout(function(){
    $('.bread-1').addClass('grow');
    setTimeout(function(){
      $('.bread-2').addClass('grow');
    }, 100);
    setTimeout(function(){
      $('.bread-3').addClass('grow');
    }, 200);
  }, 500);
  // move breads out of site
  setTimeout(function(){
    bread1.addClass('is__outofsight');

    setTimeout(function(){
      bread2.addClass('is__outofsight');
    }, 100);

    setTimeout(function(){
      bread3.addClass('is__outofsight');
    }, 200);

  }, 1000);
};

export function letterDIn(){

  bread3.addClass('is__speeding');
  bread3.removeClass('is__outofsight');

  setTimeout(function(){
    bread2.addClass('is__speeding');
    bread2.removeClass('is__outofsight');
  }, 100);

  setTimeout(function(){
    bread1.addClass('is__speeding');
    bread1.removeClass('is__outofsight');
  }, 200);

  setTimeout(function(){
    bread3.removeClass('grow')
  }, 500);

  setTimeout(function(){
    bread2.removeClass('grow')
  }, 600);

  setTimeout(function(){
    bread1.removeClass('grow')
  }, 700);

  setTimeout(function(){
    bread1.removeClass('is__rotating');
    bread2.removeClass('is__rotating');
    bread3.removeClass('is__rotating');
  }, 700);

  setTimeout(function(){
    bread3.removeClass('is__half-squared')
  }, 800);

  setTimeout(function(){
    bread1.removeClass('is__speeding');
    bread2.removeClass('is__speeding');
    bread3.removeClass('is__speeding');
  }, 1100);

}



var vw = $(window).width();
var vh = $(window).height();

var sideLength;
if(vw/2>vh){var sideLength = vw * 1.1
}else{var sideLength = vh * 1.1}
var hypotenuseLength = sideLength * Math.sqrt(2);
var length = Math.sqrt(Math.pow(vw, 2) + Math.pow(vh, 2)) * 1.1;


export function resizeSpear(){
  $('#spear')[0].setAttribute("x2", sideLength);
  $('#spear')[0].setAttribute("y2", sideLength);
  $('#spear').css({
    'stroke-dasharray' : ''+ hypotenuseLength  +'',
    'stroke-dashoffset' : ''+ hypotenuseLength  +''
  });
}
export function spearIn(){

  $('#spear').css({
    'stroke-dashoffset' : '0',
    'transition' : '600ms cubic-bezier(.25, 1, .25, 1)'
  });

  setTimeout(function(){
    $('#spear').css({
      'transform' : 'rotate(45deg)',
      'transform-origin' : '50% 50%',
    });

    $('#spear').css({
      'stroke-width' : ''+ length +'',
      'transition' : '600ms cubic-bezier(.25, 1, .25, 1)'
    });
  }, 300);

}
export function spearOut(){
  $('#spear').css({
    'transform' : 'rotate(0deg)',
    'transform-origin' : '50% 50%',
  });

  $('#spear').css({
    'stroke-width' : '15px',
    'transition' : '300ms cubic-bezier(.25, 1, .25, 1)'
  });

  $('#spear').css({
    'stroke-dashoffset' : '0'
  });

  setTimeout(function(){
    $('#spear').css({
      'stroke-dashoffset' : ''+ hypotenuseLength  +''
    });

    $('.spear').removeClass('toFront')
  }, 300)
}




// Archived
// export function letterHIn(){
//
//   bread1.css({
//     'transform' : 'translate(0px, 0px) rotate(-45deg)'
//   });
//
//   bread2.css({
//     'transform' : 'translate(0px, 0px) rotate(-45deg)'
//   });
//
//   bread3.css({
//     'transform' : 'translate(0px, 0px) rotate(-45deg)'
//   });
//
//   setTimeout(function(){
//     $('.bread-1').removeClass('grow');
//
//     setTimeout(function(){
//       $('.bread-2').removeClass('grow');
//     }, 100);
//
//     setTimeout(function(){
//       $('.bread-3').removeClass('grow');
//     }, 200);
//
//   }, 300);
//
//   setTimeout(function(){
//     bread1.addClass('idk');
//
//     bread2.css({
//       'transform' : 'rotate(0deg)',
//       'transform-origin' : '100% 50%',
//       'transition' : '300ms ' + timing + ''
//     });
//
//     bread3.css({
//       'transform' : 'rotate(0deg)',
//       'transform-origin' : '0% 50%',
//       'transition' : '300ms ' + timing + ''
//     });
//   }, 600);
//
//   setTimeout(function(){
//     bread1.css({
//       'width' : '30px',
//     });
//
//     bread2.css({
//       'width' : '0px',
//     });
//
//     bread3.css({
//       'width' : '30px',
//     });
//
//     bread3.addClass('slides');
//
//   }, 601);
//
//   setTimeout(function(){
//     bread3.addClass('is__sliding');
//   }, 1000);
//
// }
//
//
// export function letterHOut(){
//   bread3.removeClass('is__sliding');
//
//   setTimeout(function(){
//     bread3.removeClass('slides');
//   }, 400);
//
//   setTimeout(function(){
//     bread1.css({
//       'width' : '15px',
//     });
//
//     bread2.css({
//       'width' : '15px',
//     });
//
//     bread3.css({
//       'width' : '15px',
//     });
//
//   }, 1000)
//
// }
//
//
//
