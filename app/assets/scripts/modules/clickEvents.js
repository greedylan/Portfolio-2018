var $ = require('jquery');
import {projects, apps} from './project.js';
import {loadCenteredTitle, titleOut, titleIn} from './title.js';
import {expandCircles, shrinkCircles} from './animation-circle.js';
import {letterDIn, letterDOut, letterHIn, letterHOut, resizeSpear, spearIn, spearOut} from './animation-letter.js';
import frameClipPath, {frameReveal, frameHide}  from './animation-frame.js';




export function toShowroom(){
  $('.centered').click(function(){
    var projectIndex = $(this).attr('data-project-index');
    var projectClicked = projects[projectIndex];

    (function transitionToShowroom(){
      $('.showroom').addClass('loaded');
      $('body').css({'overflow':'hidden'});
      titleOut();
      letterDOut();
      frameReveal();

      setTimeout(function(){
        frameClipPath();
        frameHide();
        expandCircles();
      }, 600);

      setTimeout(function(){
        $('.main').css({
          'opacity' : 0,
          'transition' : '3000ms cubic-bezier(.25, 1, .25, 1)'
        });
      }, 1800);

      setTimeout(function(){
        $('.main').css({'display' : 'none'});
        letterHIn();
      }, 3600);
    })();

    (function loadHeroContent(){

      var mainTitle = projectClicked.mainTitle,
      subTitle = projectClicked.subTitle,
      primaryColor = projectClicked.primaryColor,
      heroBackground = projectClicked.heroBackground;




      //// title, subtitle, hero bakcground image, bottom info background
      $('.rect').text(mainTitle);
      $('.rect').css({'background' : ''+ primaryColor +''});
      $('.frame').text(subTitle);
      $('.project-tools').css({'background' : ''+ primaryColor +''});
      $('.hero').css({'background-image' : 'url('+ heroBackground +')'});




      //// app-list
      var projectAppArray = projectClicked.app.split(/[, ]+/);
        // console.log(projectAppArray);

      var appArray = Object.keys(apps);
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





      //// frontend-list
      var projectFrontEndArray = projectClicked.frontend.split(/[, ]+/);

      if(!Array.isArray(projectFrontEndArray) || !projectFrontEndArray.length){
        return;
      }
      else{
        for(var j=0; j<projectFrontEndArray.length; j++){
          $('.list--frontend').append(`<li>${projectFrontEndArray[j]}</li>`);
        }
      }




      //// cta button
      var ctaExist = projects[projectIndex].cta.cta;
      if(ctaExist){

        let btn = $('.btn-cta');
        // insert type logo inside div's pseudo class
        btn.addClass(`btn-${projectClicked.cta.type}`);
        // insert button text
        btn.children().text(`${projectClicked.cta.text}`);
        // insert button link url
        btn.parent().attr("href", `${projectClicked.cta.url}`);
        // btn.parent().attr("href", "http://www.google.com");
      }



    })()

    function loadBullets(){
      let bulletsObj = projectClicked.bullets,
      keys = Object.keys(bulletsObj),
      keysLength = keys.length;

      // console.log(bulletsObj);
      // console.log(keys);
      // console.log(keysLength);

      for(var k=0; k<keysLength; k++){
        let content = bulletsObj[keys[k]],
        div = `\
          <div class="col-sm-12 col-md-6 col-lg-4">\
            <h4 class="project-info__heading"></h4>\
            <p></p>\
          </div>\
        `;

        $('.project-bulletpoints .container .row').append(div);
        $('.project-info__heading').eq(k).text(`${keys[k]}`);
        $('.project-info__heading+p').eq(k).text(content);
      }
    }

    function loadDetails(){
      var detailObj = projectClicked.details;
      var blockCount = Object.keys(projectClicked.details).length;


      for(var i=1; i<blockCount+1; i++){
        let blockNumber = "block" + i,
        block = detailObj[blockNumber];

        var divStyle1 = `\
          <!-- Module-- Image Full Span -->\
          <div class="detail-module--fullImage container" id="${blockNumber}">\
            <h2 class="text-center"></h2>\
            <p class="text-center"></p>\
            <img alt=""/>\
          </div>\
        `;
        var divStyle2 = `\
          <!-- Module-- Images Split Two Columns -->\
          <div class="detail-module--fullImage container" id="${blockNumber}">\
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
    }

    loadBullets();
    loadDetails();
  });
}






export function logoTransitions(){

  // $('.logo').click(function(){
  //   letterDOut();
  // });
  //


}
