
//import Javascript resources and modules
var $ = require('jquery');
var ScrollReveal = require('scrollreveal');

// lodash debouncing
import './modules/lodash.custom.min.js';

import initialize from './modules/initialize.js';
import {projects, apps, detail} from './modules/project.js';
import {expandCircles, shrinkCircles} from './modules/animation-circle.js';
import {loadPreview, loadPreviousProject, loadNextProject, loadDataIndex} from './modules/loadCell.js';
import {scrollMoveCell, scrollLoadCell, swipeMoveCell,} from './modules/moveCell.js';

import {loadCenteredTitle, titleOut, titleIn} from './modules/title.js';
import frameClipPath, {frameReveal, frameHide}  from './modules/animation-frame.js';
import clickEvents from './modules/clickEvents.js';


import {resizeSpear, spearIn, spearOut} from './modules/animation-letter.js'


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
  clickEvents();
  window.scrollTo(0, 0);

});



// The following codes re-inject data in a debouncing manner when window resizes
// lodash ignites reIntroduceData() only once after 300ms pause of not having continuous resize event

function reIntroduceData(){
  initialize();

  swipeMoveCell();
  scrollMoveCell();

  resizeSpear();
  spearOut();
  spearIn();

  (function(){
    $('.centered').click(function(){
      expandCircles();
    });
  })();

  // test
  // console.log('sup');
}
var debouncedWindowResizing = _.debounce(reIntroduceData, 500, {leading: true, trailing: false});
$(window).on('resize', debouncedWindowResizing);
