//import Javascript resources and modules
var $ = require('jquery');
import {centerMobileCarousel, unclickable} from './modules/initialize.js';
import Project, {project1, project2, project3, project4, project5, project6, project7, projects} from './modules/project.js';
import {transitionCircle} from './modules/circle.js';
import {loadAll, loadLastProject, loadNextProject, executed} from './modules/loadCell.js';
import MoveCell, {scrollMoveCell, scrollLoadCell, swipeMoveCell} from './modules/moveCell.js'


//initialize.js
unclickable();
centerMobileCarousel();

//get scroll and swipe event ready
scrollMoveCell();
scrollLoadCell();
swipeMoveCell();

// click events
$('.carousel__content').click(function(){
  transitionCircle($(this));
});

// window resize events
$(window).resize(function(){
  unclickable();
  centerMobileCarousel();
  swipeMoveCell();
  scrollMoveCell();
});
