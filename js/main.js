(function($) {
  "use strict";

  $("a.js-scroll-trigger[href*='#']:not([href='#'])").click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
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
    console.log($(document).scrollTop(), $("#portfolio").position().top);
  } else {
    $("footer").css("visibility", "hidden").fadeOut(500);
  };
});









function backlight_over(n) {
  var text_block = document.getElementsByClassName("backlight_black_text");
  var subhead_block = document.getElementsByClassName("backlight_orange_text");
  var block_shadow = document.get
  for (let i = (2*n-2); i <= (2*n-1); i++) {
    text_block[i].style.color = "black";
    text_block[i].style.transition = "all 1s";
  }
  subhead_block[n - 1].style.color = "rgba(80, 50, 200, 0.9)";
  subhead_block[n - 1].style.transition = "all 1s";
}

function backlight_out(n) {
  var text_block = document.getElementsByClassName("backlight_black_text");
  var subhead_block = document.getElementsByClassName("backlight_orange_text");
  for (let i = (2*n-2); i <= (2*n-1); i++) {
    text_block[i].style.color = "#868e96";
    text_block[i].style.transition = "all 1s";
  }
  subhead_block[n-1].style.color = "#868e96";
  subhead_block[n-1].style.transition = "all 1s";
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
