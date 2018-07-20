var $ = require('jquery');

var logo = $('.logo'),
sandwich = $('.sandwich'),
bread = $('.bread'),
bread1 = $('.bread-1'),
bread2 = $('.bread-2'),
bread3 = $('.bread-3'),
timing = 'cubic-bezier(.25, 1, .25, 1)';


//////////////
// LETTER D //
//////////////
export function letterDOut(){
  //last bread: shrink width and reduce border radius to 0

  bread3.addClass('is__half-squared');
  bread.remove('is__hiding-seudo');

  // rotate three breads
  setTimeout(function(){
    bread.addClass('is__rotating');
  }, 100);
  // move pseudo class:before out of the parent's frame
  setTimeout(function(){
    bread.addClass('is__showing');
    $('.bread-1').addClass('grow');

    setTimeout(function(){
      $('.bread-2').addClass('grow');
    }, 50);

    setTimeout(function(){
      $('.bread-3').addClass('grow');
    }, 100);

  }, 500);
  // move breads out of site
  setTimeout(function(){
    bread1.addClass('is__outofsight');

    setTimeout(function(){
      bread2.addClass('is__outofsight');
    }, 50);

    setTimeout(function(){
      bread3.addClass('is__outofsight');
    }, 100);

  }, 1000);
}
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
    bread3.removeClass('grow');
    bread.removeClass('is__showing');
  }, 500);

  setTimeout(function(){
    bread2.removeClass('grow');
  }, 600);

  setTimeout(function(){
    bread1.removeClass('grow');
  }, 700);

  setTimeout(function(){
    bread.removeClass('is__rotating');

  }, 700);

  setTimeout(function(){
    bread3.removeClass('is__half-squared');
  }, 800);

  setTimeout(function(){
    bread1.removeClass('is__speeding');
    bread2.removeClass('is__speeding');
    bread3.removeClass('is__speeding');
  }, 1100);

}


///////////
// SPEAR //
///////////
export function spearIn(){

  var vw = $(window).width();
  var vh = $(window).height();

  var sideLength;
  if(vw/2>vh){ sideLength = vw * 1.2; }
  else{ sideLength = vh * 1.2;}

  var hypotenuseLength = sideLength * Math.sqrt(2);
  var length = Math.sqrt(Math.pow(vw, 2) + Math.pow(vh, 2)) * 1.2;


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
  var vw = $(window).width();
  var vh = $(window).height();

  var sideLength;
  if(vw/2>vh){ sideLength = vw * 1.1; }
  else{ sideLength = vh * 1.1;}

  var hypotenuseLength = sideLength * Math.sqrt(2);
  var length = Math.sqrt(Math.pow(vw, 2) + Math.pow(vh, 2)) * 1.1;


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

    $('.spear').removeClass('toFront');
  }, 300);
}
export function resizeSpear(){
  var vw = $(window).width();
  var vh = $(window).height();

  var sideLength;
  if(vw/2>vh){ sideLength = vw * 1.1; }
  else{ sideLength = vh * 1.1;}

  var hypotenuseLength = sideLength * Math.sqrt(2);
  var length = Math.sqrt(Math.pow(vw, 2) + Math.pow(vh, 2)) * 1.1;

  // console.log(sideLength, hypotenuseLength);
  $('#spear')[0].setAttribute("x2", sideLength);
  $('#spear')[0].setAttribute("y2", sideLength);
  $('#spear').css({
    'stroke-dasharray' : ''+ hypotenuseLength  +'',
    'stroke-dashoffset' : ''+ hypotenuseLength  +''
  });
}
