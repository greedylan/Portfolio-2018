// Note to myself -- Dylan you are crazy to figure this out

// template literals -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// insert additional style on <heade> https -- //stackoverflow.com/questions/18481550/how-to-dynamically-create-keyframe-css-animations
// clip-path forms -- https://bennettfeely.com/clippy/

// If you have time, try using SVG + dasharrayoffset + dynamic svg width & height

var $ = require('jquery');
var WheelIndicator = require('wheel-indicator');
// import WheelIndicator from 'wheel-indicator.js';


export default function frameClipPath(){
  var frameCSS = window.getComputedStyle(
    document.querySelector('.frame'), ':before'
  ).getPropertyValue('box-shadow');


  var frameWidth = $('.frame').width(),
  frameHeight = $('.frame').height(),
  strokeWidth = frameCSS.match(/\b\d+(?=px\b(?!.*\b\d+px\b))/g)[0],

  x1 = strokeWidth + 'px',
  x2 = (frameWidth + 96 - strokeWidth) + 'px',
  y1 = strokeWidth + 'px',
  y2 = (frameHeight + 96 - strokeWidth) + 'px';

  var style = document.createElement('style');
  style.type = 'text/css';
  var keyFrames = `
  @keyframes clip-frame {
    0% {
      clip-path: polygon(0% 0%, 0% 100%, ${x1} 100%, ${x1} ${x1}, ${x2} ${x1}, ${x2} ${x1}, ${x1} ${y1}, ${x1} 100%, 100% 100%, 100% 0%);
    }
    35%{
      clip-path: polygon(0% 0%, 0% 100%, ${x1} 100%, ${x1} ${x1}, ${x2} ${x1}, ${x2} ${y1}, ${x2} ${y1}, ${x2} 100%, 100% 100%, 100% 0%);
    }
    50%{
      clip-path: polygon(0% 0%, 0% 100%, ${x1} 100%, ${x1} ${x1}, ${x2} ${x1}, ${x2} ${x1}, ${x2} ${x1}, ${x2} ${x1}, 100% ${x1}, 100% 0);
    }
    85%{
      clip-path: polygon(0% 0%, 0% 100%, ${x1} 100%, ${x1} ${x1}, ${x1} ${x1}, ${x1} ${x1}, ${x1} ${x1}, ${x1} ${x1}, ${x1} ${x1}, ${x1} 0);
    }
    100%{
      clip-path: polygon(0 100%, 0% 100%, ${x1} 100%, ${x1} 100%, ${x1} 100%, ${x1} 100%, ${x1} 100%, ${x1} 100%, ${x1} 100%, ${x1} 100%);
    }
  }
  `;

  style.innerHTML = keyFrames.replace();
  document.getElementsByTagName('head')[0].appendChild(style);
}


export function frameReveal(){
  setTimeout(function(){
    $('.frame').addClass('frame__is-animating');
    $('.frame').addClass('frame-title__is-showing');


  }, 1500);

  setTimeout(function(){
    $('.frame').removeClass('frame__is-animating');
  }, 3000);
}


function restoreFrame(){
  $('.frame').removeClass('frame__is-animating');
  $('.frame').addClass('frame__is-animatingReverse');
  $('.frame').addClass('frame__is-hiding');



  setTimeout(function(){
    $('.frame').removeClass('frame__is-animatingReverse');
    // $('.frame').addClass('frame__white-background');
  }, 800);

  // setTimeout(function(){
  //   $('.rect').addClass('rect--grow');
  // }, 1000);
}


export function frameHide(){

  var scrollDownCount = 0;
  var indicator2 = new WheelIndicator({
    elem: document.querySelector('html'),
    callback: function(e){
      // console.log(e.direction);
      scrollDownCount = scrollDownCount + 1;
      // console.log(scrollDownCount);

      if(e.direction == 'down' && scrollDownCount == '1'){
        restoreFrame();
      }
      else if(scrollDownCount == '2'){
        $('body').removeClass('no-scroll');
      }
      else if(scrollDownCount >= '3'){
        return;
      }

    }

  });
  // see Instance method - https://github.com/Promo/wheel-indicator
  indicator2.setOptions({preventMouse: false});
}
