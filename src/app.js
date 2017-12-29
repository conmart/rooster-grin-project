// import Home from '../index.html'
// import Styles from '../styles/main.css'


$(document).ready(function(){
  console.log('doc ready');
  $('.slider').slider({
    height: 509
  });
  $('.modal').modal();

});

var animatePercent = false;
var animateCheckerImg = false;

$(document).scroll(function(){
    let percentPoint = 800;
    let checkerPoint = 1100;

    if(!animatePercent || !animateCheckerImg) {
      if ($(window).width() < 600) {
        percentPoint = 1000;
        checkerPoint = 1900;
      }
    }

    if($(this).scrollTop() > percentPoint && !animatePercent) {
      $('.percent').fadeIn(3000);
      animatePercent = true;
    }
    if($(this).scrollTop() > checkerPoint && !animateCheckerImg) {
      let windWidth = $(window).width();
      console.log("triggered animate", windWidth);
      $('.flush-img').fadeIn(3000);
      animateCheckerImg = true;
    }
});
