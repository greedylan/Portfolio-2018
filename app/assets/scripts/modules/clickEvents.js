var $ = require('jquery');
var ScrollReveal = require('scrollreveal');

import {projects, apps} from './project.js';
import {loadCenteredTitle, titleOut, titleIn} from './title.js';
import {expandCircles, shrinkCircles} from './animation-circle.js';
import {letterDIn, letterDOut, resizeSpear, spearIn, spearOut} from './animation-letter.js';
import frameClipPath, {frameReveal, frameHide}  from './animation-frame.js';


import {loadAll, loadPreviousProject, loadNextProject} from './loadCell.js';
import {loadNextTitle, loadPreviousTitle} from './title.js';


var centerClick = false;
var logoClick = false;
var contentLoaded = false;

var projectClicked,
projectIndex;



////////////////////////
// REUSABLE FUNCTIONS //
////////////////////////
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
      var divVideo = `\
        <!-- Module-- Image Full Span -->\
        <div class="detail-module detail__video-wrapper container vertical-spacing" id="${blockNumber}">\
          <h2 class="text-center"></h2>\
          <p class="text-center"></p>\
          <video class="project-detail__video" autoplay muted loop>\
            <source src="" type="video/mp4">
          </video>
        </div>\
      `;

      if(block.style === "1-col"){
        $('.project-detail').append(divStyle1);
        $(`#${blockNumber} h2`).text(block.mainTitle);
        $(`#${blockNumber} p`).text(block.subTitle);
        $(`#${blockNumber} img`).attr("src", `${block.imageURL}`);
      }
      else if(block.style === "2-col"){
        $('.project-detail').append(divStyle2);
        $(`#${blockNumber} h2`).text(block.mainTitle);
        $(`#${blockNumber} p`).text(block.subTitle);
        $(`#${blockNumber} img.left`).attr("src", `${block.imageURLLeft}`);
        $(`#${blockNumber} img.right`).attr("src", `${block.imageURLRight}`);
      }
      else if(block.style === "video"){
        $('.project-detail').append(divVideo);
        $(`#${blockNumber} h2`).text(block.mainTitle);
        $(`#${blockNumber} p`).text(block.subTitle);
        $(`#${blockNumber} .project-detail__video`).children('source').attr('src', `${block.videoURL}`);
        $(`#${blockNumber} .project-detail__video`)[0].load();
        $(`#${blockNumber} .project-detail__video`)[0].play();
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
function emptyDivs(){
  $('.bulletpoints-wrapper, .list-app, .list-frontend ul, .project-detail').empty();
}


////////////////////////////////////////
// TRANSITION: CUURENT TO DESTINATION //
////////////////////////////////////////



var currentIndex;


function toShowroom(){
  function foo(){
      var projectIndex = $(this).attr('data-project-index');
      var projectClicked = projects[projectIndex];

      currentIndex = projectIndex;
      // console.log(current);

      centerClick = true;
      logoClick = false;

      if(centerClick){$('.showroom').addClass('loaded');}
      if($('.showroom').hasClass('loaded')){


        ///////////////////////
        // SCREEN TRANSITION //
        ///////////////////////
        (function transitionToShowroom(){
          window.scrollTo(0, 0);
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
          // $('.logo').removeClass('is__above-carousel');
          // lift presentation div to cover parallax hero title
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

              $('.logo').addClass('logo__is-scrolled-passed-hero');

              $('.bread').css({
                'background' : `${primaryColor}`,
              });

              $('.bread-1, .bread-2, .bread-3').addClass('is__hiding-seudo');

            }


            else{
              $('.logo').removeClass('logo__is-scrolled-passed-hero');

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
  }

  var debounce = _.debounce(foo, 3000, {leading: true, trailing: false});
  $('.centered').on('click', debounce);

}
function toCarousel(){

  $('.sandwich').click(function(){

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
    emptyDivs();



    ////////////////////////////////////////////////
    //  LAYOUT & PARALLAX EFFECTS & SCROLL REVEAL //
    ///////////////////////////////////////////////
    window.scrollTo(0, 0);
    $('body').removeClass('no-scroll');
    // $('.logo').addClass('is__above-carousel');


    $('.logo').addClass('logo__is-scrolled-passed-hero')

    $('.main').removeClass('is__hiding is__hidden');
    $('.showroom').removeClass('loaded');
    $('.presentation').removeClass('z-index--100');

  });

}
function toAnotherProject(){

  $('.more-projects div').click(function(){
    // This section would be more clear in a timeline fashion so there is no blocky order like
    // toCarousel(){}; and to toShowroom(){};


    var projectIndex = $(this).attr('data-project-index');
    var projectClicked = projects[projectIndex];
    var primaryColor = projectClicked.primaryColor;

    console.log(currentIndex, projectIndex);

    if(currentIndex > projectIndex){
      loadPreviousProject();
      loadPreviousTitle();
    }
    else if(currentIndex < projectIndex){
      loadNextProject();
      loadNextTitle();

    }


    $('.centered .circle-outer').children('circle').css({
      'fill' : `${projectClicked.primaryColor}`,
    });

    $('.logo').removeClass('logo__is-scrolled-passed-hero');

    letterDOut();
    frameHide();
    $('.spear').removeClass('display-none');
    $('body').addClass('no-scroll');
    $('.bread').css({
      'background': '#FFFFFF',
      'transition' : 'background 0ms'
    });

    // change logo D's color upon change of the projects
    $(window).scroll(function(){

      var wscroll = $(this).scrollTop();
      //// shrink and color logo after scrolling beyond hero's height / window's VW
      if(wscroll >= $(this).height()){
        $('.bread').css({
          'background' : `${primaryColor}`,
        });
      }
      else{
        $('.bread-1, .bread-2, .bread-3').css({
          'background' : '#FFFFFF',
        });
      }
    });

    setTimeout(function(){
      spearIn();
    }, 1600);

    setTimeout(function(){
      emptyDivs();
    }, 2000);

    setTimeout(function(){
      window.scrollTo(0, 0);
      loadHero(projectClicked);
      loadPresentation(projectClicked, projectIndex);
      frameReveal();
    }, 2000);

    setTimeout(function(){
      spearOut();
      letterDIn();
    }, 2400);

    setTimeout(function(){
      $('.spear').addClass('is__hiding');
      $('.frame').removeClass('frame__is-hiding');
    }, 4000);

    setTimeout(function(){
      $('.spear').addClass('display-none');
      $('.spear').removeClass('is__hiding');

    }, 5000);


  });



}



/////////////////////////////
// EXECUTE ALL WHEN ONLOAD //
/////////////////////////////
export default function clickEvents(){
  toShowroom();
  toCarousel();
  toAnotherProject();
}
