document.addEventListener("DOMContentLoaded", function () {

// СТРЕЛКА НАВЕРХ
let goTopBtn = document.getElementById('arrow_top');

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -2000);
        setTimeout(backToTop, 0);
    }
};

goTopBtn.onclick = function() {
    backToTop();
};


let submenu = document.getElementById('submenu');
let mainBlock = document.getElementById('main-block');
let nav = document.getElementsByClassName("menu-item");
let sandwich = document.getElementById('hmt');
let preloader = document.getElementById('page-preloader');

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

// ГАЛЕРЕЯ
let gallery = document.getElementById('foto-gallery');
let fotoPage = document.getElementsByClassName('foto-page');
let galleryClose = document.getElementById('foto-gallery-close');
let img = document.getElementById('foto');
let rightArrowButton = document.getElementById('foto-arrow-right');
let leftArrowButton = document.getElementById('foto-arrow-left');

/*Открываем галерею нажатием на фотографию*/
for (var i = 0; i < fotoPage.length; i++){
  var fotoGallery = fotoPage[i].getElementsByTagName('img');
  for (var i = 0; i < fotoGallery.length; i++){
    fotoGallery[i].addEventListener('click', function(e){
      var elem = e.target;
      img.src = elem.src;
      gallery.classList.add('foto-gallery-open');
    });
  };
};

/*Закрываем галерею нажатием креста*/
function galleryСross(){
  img.src = "";
  gallery.classList.remove('foto-gallery-open');
};

galleryClose.addEventListener('click', function(){
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

let xDown = null;                                                        
let yDown = null;                                                        

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



















