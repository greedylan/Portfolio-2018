//import Javascript resources and modules
var $ = require('jquery');
import initialize from './modules/initialize.js';
import Project, {project1, project2, project3, project4, project5, project6, project7, projects} from './modules/project.js';
import {expandCircles, shrinkCircles} from './modules/animation-circle.js';
import {loadAll, loadPreviousProject, loadNextProject, executed} from './modules/loadCell.js';
import {scrollMoveCell, scrollLoadCell, swipeMoveCell,} from './modules/moveCell.js';
import {letterDIn, letterDOut, resizeSpear, spearIn, spearOut} from './modules/animation-letter.js';
import {loadCenteredTitle, titleOut, titleIn} from './modules/title.js';
import frameClipPath, {frameReveal, frameHide}  from './modules/animation-frame.js';


// initialize.js
initialize();
resizeSpear();
loadCenteredTitle();


// get scroll and swipe event ready
scrollMoveCell();
swipeMoveCell();
scrollLoadCell();



// click events
var showroom = $('.showroom');

$('.carousel__content').click(function(){
  showroom.addClass('loaded');
  $('body').css({'overflow':'hidden'});
  titleOut();
  expandCircles();
  letterDOut();
  frameReveal();

  setTimeout(function(){
    letterDIn();
    frameClipPath();
    frameHide();
  }, 800);

  setTimeout(function(){
    $('.main').css({
      'opacity' : 0,
      'transition' : '3000ms cubic-bezier(.25, 1, .25, 1)'
    });
  }, 1200);

  setTimeout(function(){
    $('.main').css({
      'display' : 'none',
    });
  }, 3000);
});

// $('.logo').click(function(){
//   $('.spear').addClass('toFront');
//   letterDOut();
//
//   setTimeout(function(){
//     spearIn();
//   }, 1200);
// });
//
// $('.temp').click(function(){
//   spearOut();
//   setTimeout(function(){
//     letterDIn();
//   }, 300);
// });
//
// $('.temp2').click(function(){
//   letterDOut();
//   shrinkCircles();
//   showroom.removeClass('loaded');
// });


// window resize events
$(window).resize(function(){
  initialize();
  resizeSpear();
  swipeMoveCell();
  scrollMoveCell();
});
