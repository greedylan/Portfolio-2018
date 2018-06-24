//import Javascript resources and modules
var $ = require('jquery');
import {centerMobileCarousel, unclickable} from './modules/initialize.js';
import Project, {project1, project2, project3, project4, project5, project6, project7, projects} from './modules/project.js';
import {transitionCircle} from './modules/animation-circle.js';
import {loadAll, loadPreviousProject, loadNextProject, executed} from './modules/loadCell.js';
import {scrollMoveCell, scrollLoadCell, swipeMoveCell} from './modules/moveCell.js'
import {letterDIn, letterDOut, resizeSpear, spearIn, spearOut} from './modules/animation-letter.js'
import {loadCenteredTitle} from './modules/title.js'


//initialize.js
unclickable();
centerMobileCarousel();
resizeSpear();
loadCenteredTitle();



//get scroll and swipe event ready
scrollMoveCell();
scrollLoadCell();

swipeMoveCell();

// click events
$('.carousel__content').click(function(){
  transitionCircle($(this));
  letterDOut();

  setTimeout(function(){
    letterDIn();
  }, 1500)
});

$('.logo').click(function(){
  $('.spear').addClass('toFront')
  letterDOut();

  setTimeout(function(){
    spearIn();
  }, 1500)
});

$('.temp').click(function(){
  spearOut();
  setTimeout(function(){
    letterDIn();
  }, 300)
});

// window resize events
$(window).resize(function(){
  unclickable();
  resizeSpear();
  centerMobileCarousel();
  swipeMoveCell();
  scrollMoveCell();
});
