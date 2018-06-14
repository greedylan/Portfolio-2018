

var duration = "300", //million seconds
timing = ".25, 1, .25, 1"; //cubic-bezier


function MoveCells(){
  this.cellUp = function(){
    $('.carousel').css({
       'transform' : 'translateY(' + -(cellHeight) + 'px)',
       'transition' : '' + duration + 'ms cubic-bezier(' + timing + ')',
     });
     setTimeout(function(){
       carousel.css({
         'transform' : 'translateY(0px)',
         'transition' : 'none',
       });
     }, duration);
  };

  this.cellDown = function(){
    $('.carousel').css({
        'transform' : 'translateY(' + (cellHeight) + 'px)',
        'transition' : '' + duration + 'ms cubic-bezier(' + timing + ')',
      });
      setTimeout(function(){
        carousel.css({
          'transform' : 'translateY(0px)',
          'transition' : 'none',
        });
      }, duration);
  };
}

module.exports = MoveCells;
