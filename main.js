(function($) {
  "use strict";

  $("a.js-scroll-trigger[href*='#']:not([href='#'])").click(function() {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  $("body").scrollspy({
    target: "#sideNav"
  });
})(jQuery);




$(window).on("scroll touchmove", function () {
  if ($(document).scrollTop() > $("#portfolio").position().top) {
    $("footer").css("visibility", "visible").fadeIn(500);
  } else {
    $("footer").css("visibility", "hidden").fadeOut(500);
  };
});









const progress = document.querySelector('.progress');
window.addEventListener('scroll', progressBar);
function progressBar(e){
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let per = windowScroll / windowHeight * 100;
  progress.style.width = per + '%';
}









function backlight_over(n) {
  var text_block = document.getElementsByClassName("backlight_black_text");
  var subhead_block = document.getElementsByClassName("backlight_orange_text");
  var block_shadow = document.getElementsByClassName("resume-item");
  for (let i = (2*n-2); i <= (2*n-1); i++) {
    text_block[i].style.color = "black";
    text_block[i].style.transition = "all 1s";
  }
  subhead_block[n - 1].style.color = "rgba(80, 50, 200, 0.9)";
  subhead_block[n - 1].style.transition = "all 1s";
  block_shadow[n - 1].style.boxShadow = "0px 0px 20px 20px rgba(100,100,100,0.5)";
  block_shadow[n - 1].style.transition = "all 1s";
}

function backlight_out(n) {
  var text_block = document.getElementsByClassName("backlight_black_text");
  var subhead_block = document.getElementsByClassName("backlight_orange_text");
  var block_shadow = document.getElementsByClassName("resume-item");
  for (let i = (2*n-2); i <= (2*n-1); i++) {
    text_block[i].style.color = "#868e96";
    text_block[i].style.transition = "all 1s";
  }
  subhead_block[n - 1].style.color = "#868e96";
  subhead_block[n - 1].style.transition = "all 1s";
  block_shadow[n - 1].style.boxShadow = "none";
  block_shadow[n - 1].style.transition = "all 1s";
}









const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++){
  const card = cards[i];
  card.addEventListener("mousemove", startRotate);
  card.addEventListener("mouseout", stopRotate);
}

function startRotate(event){
  const cardItem = this.querySelector(".card-item");
  const halfHeight = cardItem.offsetHeight / 2;
  cardItem.style.transform = "rotateX(" + - (event.offsetY - halfHeight) / 5 + "deg) rotateY(" + (event.offsetX - halfHeight) / 5 + "deg)";
}

function stopRotate(event){
  const cardItem = this.querySelector(".card-item");
  cardItem.style.transform = "rotate(0)";
}








var timeout;
$('.scene').mousemove(function(e){
  if(timeout) clearTimeout(timeout);
  setTimeout(callParallax.bind(null, e), 200);
});

$('#fon_main_block').mousemove(function(e){
  if(timeout) clearTimeout(timeout);
  setTimeout(callParallax.bind(null, e), 200);
});


function callParallax(e){
  parallaxIt(e, '#fon_main_block', '#interests', 30);
  parallaxIt(e, '#fon_main_block', '#fon_main_block', 5);
  parallaxIt(e, '.scene', '.layer.layer_1', 100);
  parallaxIt(e, '.scene', '.layer.layer_2', 70);
  parallaxIt(e, '.scene', '.layer.layer_3', 50);
  parallaxIt(e, '.scene', '.scene', 30);
}

function parallaxIt(e, start_point, target, movement){
  var $this = $(start_point);

  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;
  console.log(relY);

  TweenMax.to(target, 1, {
    x: (relX - $this.width()/2) / $this.width() * movement,
    y: (relY - $this.height()/2) / $this.height() * movement,
    ease: Power2.easeOut
  })
}









var isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var listItems = document.querySelectorAll("#text_move");

function scrolling(e) {
  for (var i = 0; i < listItems.length; i++) {
  var listItem = listItems[i];

  if (isPartiallyVisible(listItem)) {
      listItem.classList.add("active");
    } else {
      listItem.classList.remove("active");
    }
  }
}

function isPartiallyVisible(el) {
var elementBoundary = el.getBoundingClientRect();

var top = elementBoundary.top;
var bottom = elementBoundary.bottom;
var height = elementBoundary.height;

return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}