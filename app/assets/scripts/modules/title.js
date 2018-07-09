var $ = require('jquery');
import Project, {projects} from './project.js';

export default function Title(mainTitle, subTitle){
  this.mainTitle = mainTitle;
  this.subTitle  = subTitle;
}

var  title1 = new Title("Project-1 Main Title", "Project-1 Sub Title"),
title2 = new Title("Project-2 Main Title", "Project-2 Sub Title"),
title3 = new Title("Project-3 Main Title", "Project-3 Sub Title"),
title4 = new Title("NHOO.com", "Web app connects local businesses and new homeowners with exclusive deals"),
title5 = new Title("Project-5 Main Title", "Project-5 Sub Title"),
title6 = new Title("Project-6 Main Title", "Project-6 Sub Title"),
title7 = new Title("Project-7 Main Title", "Project-7 Sub Title");

var titles = [title1, title2, title3, title4, title5, title6, title7];

var titleMain = $('.main-title'),
titleSub = $('.sub-title');

// onload, insert the middle set title texts in array "titles"
export function loadCenteredTitle(){
  var index = Math.floor(titles.length/2);
  titleMain.html(titles[index].mainTitle);
  titleSub.html(titles[index].subTitle);
}


// functions that execute title animation on scroll/swipe
var scrollPosition = 0,
centerPosition = Math.floor(titles.length/2);


export function titleOut(){
  titleMain.css({
    'transform' : 'translateX(-120%)',
    'transition' : '400ms cubic-bezier(.25, 1, .25, 1)'
  });
  titleSub.css({
    'transform' : 'translateX(-120%)',
    'transition' : '600ms cubic-bezier(.25, 1, .25, 1)'
  });
}
export function titleIn(){
  titleMain.css({
    'transform' : 'translateX(0%)',
    'transition' : '400ms cubic-bezier(.25, 1, .25, 1)'
  });
  titleSub.css({
    'transform' : 'translateX(0%)',
    'transition' : '600ms cubic-bezier(.25, 1, .25, 1)'
  });
}

function animateTitle(index){
  setTimeout(function(){
    titleOut();
  }, 100);
  setTimeout(function(){
    titleMain.html(titles[index].mainTitle);
    titleSub.html(titles[index].subTitle);
    titleIn();
  }, 800);
}

// function loadGif(index){
//   var gif = projects[index].gif;
//   $('.gif').attr('src', gif);
// }


export function loadNextTitle(){
  scrollPosition = scrollPosition + 1;
  if(scrollPosition > centerPosition){scrollPosition = -centerPosition;}
  var index = ( centerPosition + scrollPosition );
  // console.log(index, scrollPosition, centerPosition);
  animateTitle(index);
  // loadGif(index);
}
export function loadPreviousTitle(){
  scrollPosition = scrollPosition - 1;
  if(scrollPosition < -centerPosition){scrollPosition = centerPosition;}
  var index = ( centerPosition + scrollPosition );
  // console.log(index, scrollPosition, centerPosition)
  animateTitle(index);
  // loadGif(index);
}
