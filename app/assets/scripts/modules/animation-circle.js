var $ = require('jquery');
import {projects} from './project.js'


var cell = $('.centered .carousel__content'),
circle1 = $('.centered .circle-outer'),
circle2 = $('.centered .circle-inner'),
image = $('.centered .image-wrapper'),
winWidth = $(window).width();

export function expandCircles(){
  //hide overlay video image layer

  $('.video-wrapper').addClass('is__hiding');

  // move two circles and project image in the center of the screen / vw
  cell.addClass('z-index--1000');
  if(winWidth >= '992'){

    circle1.addClass('is__centering');
    circle2.addClass('is__shrinkedCentering');
    image.addClass('is__shrinkedCentering');

  }else{
    circle1.addClass('is__centering--toLeft');
    circle2.addClass('is__shrinkedCentering--toLeft');
    image.addClass('is__shrinkedCentering--toLeft');

  }

  //expand circles and move project image, project image click effect starts
  setTimeout(function(){
    if(winWidth >= '992'){

      circle1.addClass('is__expanding');
      circle2.addClass('is__expanding');
      image.addClass('is__clicking');

    }else{

      circle1.addClass('is__expanding--mobile');
      circle2.addClass('is__expanding--mobile');
      image.addClass('is__clicking--mobile');

    }
  }, 600);

  //transition circle2 color to circle1 color(default color), project image click effect ends
  setTimeout(function(){
    var hex = $('.centered .carousel__content .circle-outer circle').css("fill");

    if(winWidth >= '992'){
      circle2.children('circle').css({
        'fill' : '' + hex + '',
        'transition' : 'fill 1000ms ease',
      });

      image.removeClass('is__clicking');
      image.addClass('is__hiding');

    }else{
      circle2.children('circle').css({
        'fill' : '' + hex + '',
        'transition' : 'fill 1000ms ease',
      });

      image.removeClass('is__clicking--mobile');
      image.addClass('is__hiding');
    }
  }, 700);

}






var dataIndex = $('.centered').attr("data-project-index");
var subColor = projects[dataIndex].subColor;



export function shrinkCircles(){
  console.log(subColor);
  circle2.children('circle').css({
    'fill' : '' + subColor + '',
  });

  image.removeClass('is__hiding');

  if(winWidth >= '992'){
    circle1.removeClass('is__expanding');
    circle2.removeClass('is__expanding');
    image.removeClass('is__clicking');
  }else{
    circle1.removeClass('is__expanding--mobile');
    circle2.removeClass('is__expanding--mobile');
    image.removeClass('is__clicking--mobile');
  }

  setTimeout(function(){
    circle1.addClass('is__speeding');
    circle2.addClass('is__speeding');
    image.addClass('is__speeding');

    if(winWidth >= '992'){
      circle1.removeClass('is__centering');
      circle2.removeClass('is__shrinkedCentering');
      image.removeClass('is__shrinkedCentering');
    }else{
      circle1.removeClass('is__centering--toLeft');
      circle2.removeClass('is__shrinkedCentering--toLeft');
      image.removeClass('is__shrinkedCentering--toLeft');
    }
  }, 400);

  setTimeout(function(){
    circle1.removeClass('is__speeding');
    circle2.removeClass('is__speeding');
    image.removeClass('is__speeding');
    $('.video-wrapper').removeClass('is__hiding');
  }, 700);


}
