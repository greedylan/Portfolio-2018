var $ = require('jquery');
import {projects} from './project.js';


var imageSource = $('.image-wrapper picture source'),
content = $('.carousel__content'),
circle1 = $('.circle-outer').children('circle'),
circle2 = $('.circle-inner'),
cell = $('.carousel__cell'),
scrollPosition = 0;

export function loadPreview (element){
  element.each(function(i){
    var index = i + scrollPosition;
    if(index >= projects.length){ index = i + scrollPosition - projects.length;}

    var x = projects[index];
    var previewImage = x.previewImage,
    primaryColor = x.primaryColor,
    subColor= x.subColor;

    if(element == imageSource){
      $(this).attr('srcset', previewImage);
    }else if(element == content){
      $(this).css({'background' : '' + primaryColor + ''});
    }else if(element == circle1){
      $(this).css({'fill' : '' + primaryColor + ''});
    }else if(element == circle2){
      $(this).css({'fill' : '' + subColor + ''});
    }else if(element == cell){
    }
  });
}
export function loadDataIndex(cell, array){
  cell.each(function(i){
    $(this).attr('data-project-index', array[i]);
  });
  console.log(array);
}
export function videoWrapperBackground(){
  var index = $('.centered').attr("data-project-index");
  $('.centered .video-wrapper').css({'background-color' : `${projects[index].primaryColor}`});
}




export function loadNextProject(){
  if(scrollPosition === projects.length){scrollPosition = 0;}
  scrollPosition = scrollPosition + 1;

  // store index values in an array corresponding to scroll event
  var array = [];
  for(var i=0; i<projects.length; i++){
    var index = i + scrollPosition;
    if(index >= projects.length){index = index - projects.length;}
    array.push(index);
  }

  loadPreview (imageSource);
  loadPreview (content);
  loadPreview (circle1);
  loadPreview (circle2);
  loadDataIndex(cell, array);
  videoWrapperBackground();

  // console.log(scrollPosition)


}
export function loadPreviousProject(){
  if(scrollPosition === 0){scrollPosition = projects.length;}
  scrollPosition = scrollPosition - 1;

  // store index values in an array corresponding to scroll event
  var array = [];
  for(var i=0; i<projects.length; i++){
    var index = i + scrollPosition;
    if(index >= projects.length){index = index - projects.length;}
    if(index < 0 ){index = index + projets.length;}
    array.push(index);
  }

  loadPreview (imageSource);
  loadPreview (content);
  loadPreview (circle1);
  loadPreview (circle2);
  loadDataIndex(cell, array);
  videoWrapperBackground();
  // console.log(scrollPosition)
}


loadPreview (imageSource);
loadPreview (content);
loadPreview (circle1);
loadPreview (circle2);
loadPreview (cell);
videoWrapperBackground();
