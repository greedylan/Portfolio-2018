var $ = require('jquery');
import {projects} from './project.js';



var imageSource = $('.image-wrapper picture source'),
content = $('.carousel__content'),
circle1 = $('.expand-1st circle'),
circle2 = $('.expand-2nd circle'),
scrollPosition = 0;


export function loadAll(element){
  element.each(function(i){
    var num = i + scrollPosition;
    if(num >= projects.length){ num = i + scrollPosition - projects.length;}
    var x = projects[num];

    var image = x.image,
    defaultColor = x.defaultColor,
    subColor= x.subColor;

    if(element == imageSource){
      $(this).attr('srcset', image);
    }else if(element == content){
      $(this).css({'background' : '' + defaultColor + ''});
    }else if(element == circle1){
      $(this).css({'fill' : '' + defaultColor + ''});
    }else if(element == circle2){
      $(this).css({'fill' : '' + subColor + ''});
    }
  });
}

export function loadNextProject(){
  if(scrollPosition === projects.length){scrollPosition = 0;}
  scrollPosition = scrollPosition + 1;

  loadAll(imageSource);
  loadAll(content);
  loadAll(circle1);
  loadAll(circle2);

  // console.log(scrollPosition)
}

export function loadPreviousProject(){
  if(scrollPosition === 0){scrollPosition = projects.length;}
  scrollPosition = scrollPosition - 1;


  loadAll(imageSource);
  loadAll(content);
  loadAll(circle1);
  loadAll(circle2);

  // console.log(scrollPosition)
}


loadAll(imageSource);
loadAll(content);
loadAll(circle1);
loadAll(circle2);
