
//import Javascript resources and modules
var $ = require('jquery');
var ScrollReveal = require('scrollreveal');

import initialize from './modules/initialize.js';
import {projects, apps, detail} from './modules/project.js';
import {expandCircles, shrinkCircles} from './modules/animation-circle.js';
import {loadPreview, loadPreviousProject, loadNextProject, loadDataIndex} from './modules/loadCell.js';
import {scrollMoveCell, scrollLoadCell, swipeMoveCell,} from './modules/moveCell.js';

import {loadCenteredTitle, titleOut, titleIn} from './modules/title.js';
import frameClipPath, {frameReveal, frameHide}  from './modules/animation-frame.js';
import {toShowroom, toCarousel, loadContent} from './modules/clickEvents.js';


import {resizeSpear} from './modules/animation-letter.js'


// cache global variables
let projectCount = $('.carousel__cell').length;



$(function(){
  // initialize.js
  initialize();
  resizeSpear();
  loadCenteredTitle();

  // get scroll and swipe event ready
  scrollMoveCell();
  swipeMoveCell();
  scrollLoadCell();
  toShowroom();
  toCarousel();

  window.scrollTo(0, 0);

});



// window resize events
$(window).resize(function(){
  initialize();
  resizeSpear();
  swipeMoveCell();
  scrollMoveCell();
});
