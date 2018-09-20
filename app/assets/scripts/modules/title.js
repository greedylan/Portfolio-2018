var $ = require('jquery');
import {projects} from './project.js';


var titleMain = $('.main-title'),
titleSub = $('.field');





// onload, insert the middle set title texts in array "titles"
export function loadCenteredTitle(){
  var index = Math.floor(projects.length/2);
  titleMain.html(projects[index].mainTitle);


  for(var i=0; i<projects[index].field.length; i++){
    titleSub.append(`<li>${projects[index].field[i]}</li>`);
  }
}


// functions that execute title animation on scroll/swipe
var scrollPosition = 0,
centerPosition = Math.floor(projects.length/2);


export function titleOut(){
  titleMain.css({
    'transform' : 'translateX(-120%)',
    'transition' : '400ms cubic-bezier(.25, 1, .25, 1)'
  });
  titleSub.css({
    'transform' : 'translateX(-120%)',
    'transition' : '400ms cubic-bezier(.25, 1, .25, 1)'
  });
}
export function titleIn(){
  titleMain.css({
    'transform' : 'translateX(0%)',
    'transition' : '400ms cubic-bezier(.25, 1, .25, 1)'
  });
  titleSub.css({
    'transform' : 'translateX(0%)',
    'transition' : '800ms cubic-bezier(.25, 1, .25, 1)'
  });
}

function animateTitle(index){

  // sliding titles ouside of frame
  setTimeout(function(){
    titleOut();
  }, 100);

  //slideing titles back in with updated titles
  setTimeout(function(){

    titleSub.empty();
    titleMain.html(projects[index].mainTitle);

    var centeredIndex = $('.centered').attr('data-project-index');
    // console.log(centeredIndex);

    // load biography in special treatment
    if(centeredIndex == 0){
      for(var i=0; i<projects[index].field.length; i++){
        titleSub.append(`<span style="display:block; ">${projects[0].field[i]}</span>`);
      }
    }
    // load squared background field lists
    else{
      for(var i=0; i<projects[index].field.length; i++){
        titleSub.append(`<li>${projects[index].field[i]}</li>`);
      }
    }

    titleIn();

  }, 400);
}



export function loadNextTitle(){
  scrollPosition = scrollPosition + 1;
  if(scrollPosition > centerPosition){scrollPosition = -centerPosition;}
  var index = ( centerPosition + scrollPosition );
  // console.log(index, scrollPosition, centerPosition);
  animateTitle(index);
}

export function loadPreviousTitle(){
  scrollPosition = scrollPosition - 1;
  if(scrollPosition < -centerPosition){scrollPosition = centerPosition;}
  var index = ( centerPosition + scrollPosition );
  // console.log(index, scrollPosition, centerPosition)
  animateTitle(index);
}
