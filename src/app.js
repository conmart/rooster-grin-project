// import Home from '../index.html'
// import Styles from '../styles/main.css'


$(document).ready(function(){
  console.log('doc ready');
  $('.slider').slider({
    height: 509
  });
  $('.modal').modal();

});

var animated = false;


$(document).scroll(function(){
    if($(this).scrollTop() > 700 && !animated) {
      $('.percent').fadeIn(3000);
      animated = true;
    }
});
