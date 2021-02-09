document.addEventListener("DOMContentLoaded", function () {

var submenu = document.getElementById('submenu');
var mainBlock = document.getElementById('main-block');
var nav = document.getElementsByClassName("menu-item");
var sandwich = document.getElementById('hmt');
var header = document.getElementById('header');
var preloader = document.getElementById('page-preloader');

/*Прелоадер*/
window.onload = function(){
    if(preloader.style.display != 'none'){
      preloader.style.display = 'none';
    }
}


/*Сендвич-меню*/
for (i=0; i < nav.length; i++) {
  nav[i].onclick =  function(){
    sandwich.checked = false;
  }
};

function sandwichClick(){
  if (submenu.style.display != 'block'){
    submenu.style.display = 'block';
    mainBlock.style.display = 'none';
  }
  else{
    submenu.style.display = 'none';
    mainBlock.style.display = 'block';
  }
};

sandwich.onclick = function(){
  sandwichClick();
};

// /*Меняем крест на сендвич при нажатии кнопки Back в браузере*/
// window.onhashchange = function(){
// sandwichClick();
// };


// window.addEventListener('load', function() {
//   window.history.pushState({ noBackExitsApp: true }, '')
// });

// window.addEventListener('popstate', function(event) {
//   if (event.state && event.state.noBackExitsApp) {
//     window.history.pushState({ noBackExitsApp: true }, '')
//   }
// });



// ГАЛЕРЕЯ
var gallery = document.getElementById('foto-gallery');
var fotoPage = document.getElementById('foto-page');
var fotoGallery= fotoPage.getElementsByTagName('img');
var galleryClose = document.getElementById('foto-gallery-close');
var img = document.getElementById('foto');
var rightArrowButton = document.getElementById('foto-arrow-right');
var leftArrowButton = document.getElementById('foto-arrow-left');
 

 /*Открываем галерею нажатием на фотографию*/
for (var i = 0; i < fotoGallery.length; i++){
  fotoGallery[i].addEventListener('click', function(e){
    var elem = e.target;
    img.src = elem.src;
    gallery.classList.add('foto-gallery-open');
    history.pushState(null, null, '#foto');
  });
};

/*Закрываем галерею нажатием креста*/
function galleryСross(){
  img.src = "";
  gallery.classList.remove('foto-gallery-open');
};

galleryClose.addEventListener('click', function(){
  history.pushState(null, null, ' ');
  galleryСross();
})
;

window.addEventListener('popstate', function(){
  galleryСross();
});

/*Пролистываем галерею стрелкой влево*/
function leftArrow(){
  for (var i = 0; i < fotoGallery.length; i++) {
    if (img.src == fotoGallery[i].src){
      i--;
      img.src = fotoGallery[i].src;
    }
  }
};

leftArrowButton.addEventListener('click', function(){
  leftArrow();
});

/*Пролистываем галерею стрелкой вправо*/
function rightArrow(){
  for (var i = 0; i < fotoGallery.length; i++){
    if (img.src == fotoGallery[i].src){
      i++;
      img.src = fotoGallery[i].src;
    };
  };
};

rightArrowButton.addEventListener('click', function(){
  rightArrow();
});

/*Пролистываем галерею стрелками на клавиатуре*/
document.onkeydown = checkKey;
function checkKey(e){
  e = e || window.event;
    if(e.keyCode == '37'){
      leftArrow();
    }
    else if(e.keyCode == '39'){
      rightArrow();
    }
    else if(e.keyCode == '27'){
      history.pushState(null, null, ' ');
      galleryСross();
    }
}

/*Swipe галереи*/
img.addEventListener('touchstart', handleTouchStart, false);  
img.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
          rightArrow();
        } else {
          leftArrow();
        }                       
    }
    xDown = null;    yDown = null;                                             
};




});



















