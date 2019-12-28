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

$(window).on("scroll touchmove", function() {
  if ($(document).scrollTop() > $("#portfolio").position().top) {
    $("footer")
      .css("visibility", "visible")
      .fadeIn(500);
  } else {
    $("footer")
      .css("visibility", "hidden")
      .fadeOut(500);
  }
});

const progress = document.querySelector(".progress");
window.addEventListener("scroll", progressBar);
function progressBar(e) {
  let windowScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  let windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let per = (windowScroll / windowHeight) * 100;
  progress.style.width = per + "%";
}

function backlight_over(n) {
  var text_block = document.getElementsByClassName("backlight_black_text");
  var subhead_block = document.getElementsByClassName("backlight_blue_text");
  var subhead_block_data = document.getElementsByClassName("text_primary");
  var block_shadow = document.getElementsByClassName("resume-item");
  for (let i = 2 * n - 2; i <= 2 * n - 1; i++) {
    text_block[i].style.color = "black";
    text_block[i].style.transition = "all 1s";
  }
  subhead_block[n - 1].style.color = "rgba(80, 50, 200, 0.9)";
  subhead_block_data[n].style.color = "rgba(255, 150, 0, 0.9)";
  block_shadow[n - 1].style.boxShadow = "0px 0px 20px 20px rgba(100,100,100,0.5)";
  subhead_block[n - 1].style.transition = "all 1s";
  subhead_block_data[n].style.transition = "all 1s";
  block_shadow[n - 1].style.transition = "all 1s";
}

function backlight_out(n) {
  var text_block = document.getElementsByClassName("backlight_black_text");
  var subhead_block = document.getElementsByClassName("backlight_blue_text");
  var subhead_block_data = document.getElementsByClassName("text_primary");
  var block_shadow = document.getElementsByClassName("resume-item");
  for (let i = 2 * n - 2; i <= 2 * n - 1; i++) {
    text_block[i].style.color = "#868e96";
    text_block[i].style.transition = "all 1s";
  }
  subhead_block[n - 1].style.color = "#868e96";
  subhead_block_data[n].style.color = "rgba(80, 50, 200, 0.9)";
  block_shadow[n - 1].style.boxShadow = "none";
  subhead_block[n - 1].style.transition = "all 1s";
  subhead_block_data[n].style.transition = "all 1s";
  block_shadow[n - 1].style.transition = "all 1s";
}

const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener("mousemove", startRotate);
  card.addEventListener("mouseout", stopRotate);
}

function startRotate(event) {
  const cardItem = this.querySelector(".card-item");
  const halfHeight = cardItem.offsetHeight / 2;
  cardItem.style.transform =
    "rotateX(" +
    -(event.offsetY - halfHeight + 40) / 5 +
    "deg) rotateY(" +
    (event.offsetX - halfHeight) / 5 +
    "deg)";
}

function stopRotate(event) {
  const cardItem = this.querySelector(".card-item");
  cardItem.style.transform = "rotate(0)";
}

var timeout;
$(".scene").mousemove(function(e) {
  if (timeout) clearTimeout(timeout);
  setTimeout(callParallax.bind(null, e), 200);
});

$("#fon_main_block").mousemove(function(e) {
  if (timeout) clearTimeout(timeout);
  setTimeout(callParallax.bind(null, e), 200);
});

function callParallax(e) {
  parallaxIt(e, "#fon_main_block", "#interests", 30);
  parallaxIt(e, "#fon_main_block", "#fon_main_block", 5);
  parallaxIt(e, ".scene", ".layer.layer_1", 100);
  parallaxIt(e, ".scene", ".layer.layer_2", 70);
  parallaxIt(e, ".scene", ".layer.layer_3", 50);
  parallaxIt(e, ".scene", ".scene", 30);
}

function parallaxIt(e, start_point, target, movement) {
  var $this = $(start_point);

  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: ((relX - $this.width() / 2) / $this.width()) * movement,
    y: ((relY - $this.height() / 2) / $this.height()) * movement,
    ease: Power2.easeOut
  });
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

  return top + height >= 0 && height + window.innerHeight >= bottom;
}

var sub_text = document.getElementsByClassName("text_pulse");
var forEach = Array.prototype.forEach;
forEach.call(sub_text, function(b) {
  b.addEventListener("click", addElement);
});

function addElement(e) {
  var addDiv = document.createElement("div"),
    mValue = Math.max(this.clientWidth, this.clientHeight);
  addDiv.style.width = addDiv.style.height = mValue + "px";
  addDiv.style.left = e.pageX - mValue / 2 + "px";
  addDiv.style.top = e.pageY - mValue / 2 + "px";
  addDiv.style.overflow = "hidden";
  addDiv.classList.add("pulse");
  this.appendChild(addDiv);
}

function progressbar_start() {
  var elem1 = document.querySelector(
    ".cir_card:nth-child(1) svg circle:nth-child(2)"
  );
  var elem2 = document.querySelector(
    ".cir_card:nth-child(2) svg circle:nth-child(2)"
  );
  var elem3 = document.querySelector(
    ".cir_card:nth-child(3) svg circle:nth-child(2)"
  );
  var progress1 = 0;
  var progress2 = 0;
  var progress3 = 0;
  elem1.style.stroke = "rgb(0, 255, 0)";
  elem2.style.stroke = "rgb(0, 0, 255)";
  elem3.style.stroke = "rgb(255, 0, 0)";
  elem1.style.strokeDasharray = "calc(480)";
  elem2.style.strokeDasharray = "calc(420)";
  elem3.style.strokeDasharray = "calc(360)";
  setTimeout(function run() {
    frame();
    setTimeout(run, 10);
  }, 10);
  function frame() {
    if (progress1 <= 100) {
      progress1++;
      elem1.style.strokeDashoffset =
        "calc(480 - (480 * " + progress1 + ") / 100)";
    }
    if (progress2 <= 80) {
      progress2++;
      elem2.style.strokeDashoffset =
        "calc(420 - (420 * " + progress2 + ") / 100)";
    }
    if (progress3 <= 60) {
      progress3++;
      elem3.style.strokeDashoffset =
        "calc(360 - (360 * " + progress3 + ") / 100)";
    }
  }
}

function progressbar_stop() {
  var elem1 = document.querySelector(
    ".cir_card:nth-child(1) svg circle:nth-child(2)"
  );
  var elem2 = document.querySelector(
    ".cir_card:nth-child(2) svg circle:nth-child(2)"
  );
  var elem3 = document.querySelector(
    ".cir_card:nth-child(3) svg circle:nth-child(2)"
  );
  elem1.style.stroke = "rgba(0, 255, 0, 0.5)";
  elem2.style.stroke = "rgba(0, 0, 255, 0.5)";
  elem3.style.stroke = "rgba(255, 0, 0, 0.5)";
}
