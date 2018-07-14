var $ = require('jquery');
var ScrollReveal = require('scrollreveal');

import {projects, apps} from './project.js';
import {loadCenteredTitle, titleOut, titleIn} from './title.js';
import {expandCircles, shrinkCircles} from './animation-circle.js';
import {letterDIn, letterDOut, resizeSpear, spearIn, spearOut} from './animation-letter.js';
import frameClipPath, {frameReveal, frameHide}  from './animation-frame.js';

var centerClick = false;
var logoClick = false;
var contentLoaded = false;

var projectClicked,
projectIndex;




//// RESUABLE FUNCTIONS
function loadHero(projectClicked){

  //// LOAD ---> title, subtitle, hero bakcground image, bottom info background color
  (function(){
    $('.rect').text(`${projectClicked.mainTitle}`);
    $('.rect').css({'background' : `${projectClicked.primaryColor}`});
    $('.frame').text(`${projectClicked.subTitle}`);
    $('.project-tools').css({'background' : `${projectClicked.primaryColor}`});
    $('.hero').css({'background-image' : `url(${projectClicked.heroBackground})`});
  })();

  //// LOAD ---> app icons
  (function(){
    var projectAppArray = projectClicked.app.split(/[, ]+/);
    var appArray = Object.keys(apps);
      // console.log(projectAppArray);
      // console.log(appArray);
    if(!Array.isArray(projectAppArray) || !projectAppArray.length){
      return;
    }
    else{
      var newArr = projectAppArray.filter( value => appArray.indexOf(value) !==  -1);
      // console.log(newArr);
      for(var i=0; i<newArr.length; i++){
        $('.list-app').append(`<img src="${apps[newArr[i]]}"/>`);
      }
    }
  })();

  //// LOAD ---> frontend list
  (function(){
    var projectFrontEndArray = projectClicked.frontend.split(/[, ]+/);
    if(!Array.isArray(projectFrontEndArray) || !projectFrontEndArray.length){
      return;
    }
    else{
      for(var j=0; j<projectFrontEndArray.length; j++){
        $('.list-frontend ul').append(`<li>${projectFrontEndArray[j]}</li>`);
      }
    }
  })();

  //// LOAD ---> CTA button
  (function(){
    var ctaExist = projectClicked.cta.cta;
    if(ctaExist){
      let btn = $('.btn-cta');
      // insert type logo inside div's pseudo class
      btn.addClass(`btn-${projectClicked.cta.type}`);
      // insert button text
      btn.children().text(`${projectClicked.cta.text}`);
      // insert button link url
      btn.parent().attr("href", `${projectClicked.cta.url}`);
    }
  })();

}

function loadPresentation(projectClicked, projectIndex){

  //// LOAD ---> project bullet points (about, goal, team, role...ect)
  (function(){
    let bulletsObj = projectClicked.bullets,
    keys = Object.keys(bulletsObj),
    keysLength = keys.length;

    // console.log(bulletsObj);
    // console.log(keys);
    // console.log(keysLength);

    for(var k=0; k<keysLength; k++){
      let content = bulletsObj[keys[k]],
      div = `\
        <div class="bullet col-sm-12 col-md-6 col-lg-4">\
          <h4 class="project-info__heading"></h4>\
          <p></p>\
        </div>\
      `;

      $('.project-bulletpoints .container .row').append(div);
      $('.project-info__heading').eq(k).text(`${keys[k]}`);
      $('.project-info__heading+p').eq(k).text(content);
    }
  })();

  //// LOAD ---> project details (block main&sub titles, images/video)
  (function(){
    var detailObj = projectClicked.details;
    var blockCount = Object.keys(projectClicked.details).length;

    for(var i=1; i<blockCount+1; i++){
      let blockNumber = "block" + i,
      block = detailObj[blockNumber];

      var divStyle1 = `\
        <!-- Module-- Image Full Span -->\
        <div class="detail-module fullImage container vertical-spacing" id="${blockNumber}">\
          <h2 class="text-center"></h2>\
          <p class="text-center"></p>\
          <img alt=""/>\
        </div>\
      `;
      var divStyle2 = `\
        <!-- Module-- Images Split Two Columns -->\
        <div class="detail-module splitImages container vertical-spacing" id="${blockNumber}">\
          <h2 class="text-center"></h2>\
          <p class="text-center"></p>\
          <div class="row">\
            <div class="col-sm-12 col-lg-6">\
              <img class="left" src="" alt="">\
            </div>\
            <div class="col-sm-12 col-lg-6">\
              <img class="right" src="" alt="">\
            </div>\
          </div>\
        </div>\
      `;

      if(block.style === "1-col"){
        $('.project-detail').append(divStyle1);
        $(`#${blockNumber} h2`).text(block.mainTitle);
        $(`#${blockNumber} p`).text(block.subTitle);
        $(`#${blockNumber} img`).attr("src", `${block.imageUrl}`);
      }
      else if(block.style === "2-col"){
        $('.project-detail').append(divStyle2);
        $(`#${blockNumber} h2`).text(block.mainTitle);
        $(`#${blockNumber} p`).text(block.subTitle);
        $(`#${blockNumber} img.left`).attr("src", `${block.imageUrlLeft}`);
        $(`#${blockNumber} img.right`).attr("src", `${block.imageUrlRight}`);
      }
    }
  })();

  //// LOAD ---> more projects according to 'data-project-index'
  (function(){
    var previousProject = projects[parseInt(projectIndex) - 1],
    nextProject = projects[parseInt(projectIndex) + 1];

    $('.more-projects__previous').css({'background' : `${previousProject.primaryColor}`});
    $('.more-projects__previous').attr('data-project-index', `${parseInt(projectIndex) - 1}`);
    $('.more-projects__previous img').attr("src", `${previousProject.previewImage}`);

    $('.more-projects__next').css({'background' : `${nextProject.primaryColor}`});
    $('.more-projects__next').attr('data-project-index', `${parseInt(projectIndex) + 1}`);
    $('.more-projects__next img').attr("src", `${nextProject.previewImage}`);
  })();

}




function toShowroom(){
  $('.centered').click(function(){

    var projectIndex = $(this).attr('data-project-index');
    var projectClicked = projects[projectIndex];

    centerClick = true;
    logoClick = false;

    if(centerClick){$('.showroom').addClass('loaded');}
    if($('.showroom').hasClass('loaded')){


      ///////////////////////
      // SCREEN TRANSITION //
      ///////////////////////
      (function transitionToShowroom(){
        $('body').addClass('no-scroll');
        titleOut();
        letterDOut();
        frameReveal();

        setTimeout(function(){
          frameClipPath();
          frameHide();
          expandCircles();
        }, 400);

        setTimeout(function(){
          $('.main').addClass('is__hiding');

        }, 1200);


        setTimeout(function(){
          letterDIn();
        }, 2600);

        setTimeout(function(){
          $('.main').addClass('is__hidden');

        }, 3000);
      })();


      //////////////////////
      // LOADING ELEMENTS //
      //////////////////////
      loadHero(projectClicked);
      loadPresentation(projectClicked, projectIndex);


      ////////////////////////////////////////////////
      //  LAYOUT & PARALLAX EFFECTS & SCROLL REVEAL //
      ///////////////////////////////////////////////
      (function(){

        //// for logo parallax effect
        $('.logo').removeClass('is__above-carousel');
        //// lift presentation div to cover parallax hero title
        $('.presentation').addClass('z-index--100');


        //// parallax effects
        $(window).scroll(function(){

          var wscroll = $(this).scrollTop();
          var subColor = projectClicked.subColor;
          var primaryColor = projectClicked.primaryColor;
          //// hero title
          $('.hero__titles').css({
            'transform' : `translateY( ${ wscroll / 2 }px)`,
          });

          //// shrink and color logo after scrolling beyond hero's height / window's VW
          if(wscroll >= $(this).height()){
            $('.sandwich').css({
              'transform' : 'scale(.75)',
              'transform-origin' : '0 0',
              'transition' : '1000ms cubic-bezier(.25, 1, .25, 1)'
            });

            $('.bread-1, .bread-2, .bread-3').css({
              'background' : `${primaryColor}`,
              // 'transition' : '300ms cubic-bezier(.25, 1, .25, 1)'
            });

            $('.bread-1, .bread-2, .bread-3').addClass('is__hiding-seudo');

          }
          else{
            $('.sandwich').css({
              'transform' : 'scale(1)',
            });
            $('.bread-1, .bread-2, .bread-3').css({
              'background' : '#ffffff',
            });
            $('.bread-1, .bread-2, .bread-3').removeClass('is__hiding-seudo');
          }
        });


        //// scroll reveal
        if(contentLoaded === false){
          window.sr = ScrollReveal({reset: true});
          sr.reveal('.bullet', {duration: 1000}, 50);
          sr.reveal('.detail-module', {duration: 800, delay: 200, scale: 1,});

          contentLoaded = true;
        }
        else if(contentLoaded === true){
          return;
        }

      })();

    }

  });
}

function toCarousel(){

  $('.logo').click(function(){

    centerClick = false;
    logoClick = true;


    ///////////////////////
    // SCREEN TRANSITION //
    ///////////////////////
    $('.frame').removeClass('frame__is-animating, frame__is-animatingReverse, frame__is-hiding, frame__is-animatingReverse, frame__white-background');

    setTimeout(function() {
      shrinkCircles();
    }, 100);

    setTimeout(function() {
      titleIn();
    }, 800);



    ////////////////////////
    // UNLOADING ELEMENTS //
    ////////////////////////
    $('.bullet, .list-app, .list-frontend ul, .project-detail').empty();



    ////////////////////////////////////////////////
    //  LAYOUT & PARALLAX EFFECTS & SCROLL REVEAL //
    ///////////////////////////////////////////////
    window.scrollTo(0, 0);
    $('body').removeClass('no-scroll');
    $('.logo').addClass('is__above-carousel');
    $('.main').removeClass('is__hiding is__hidden');
    $('.showroom').removeClass('loaded');
    $('.presentation').removeClass('z-index--100');

  });

}

function toAnotherProject(){

  $('.more-projects div').click(function(){
    // This section would be more clear in a timeline fashion so there is no blocky order like
    // toCarousel(){}; and to toShowroom(){};

    letterDOut();
    $('.spear').removeClass('display-none');

    setTimeout(function(){
      spearIn();
    }, 1600);

    setTimeout(function(){
      $('.bullet, .list-app, .list-frontend ul, .project-detail').empty();
      $('.spear').addClass('is__hiding');
      window.scrollTo(0, 0);
    }, 2400);

    setTimeout(function(){
      letterDIn();
      spearOut();
    }, 3200);

    setTimeout(function(){
      $('.spear').addClass('display-none');
      $('.spear').removeClass('is__hiding');
    }, 4000);
  });



}




export default function clickEvents(){
  toShowroom();
  toCarousel();
  toAnotherProject();
}
