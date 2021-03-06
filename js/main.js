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

window.onload = function() {
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4)
    )
  ) {
    alert("Page not adapted for mobile version");
  }
};

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
  block_shadow[n - 1].style.boxShadow =
    "0px 0px 20px 20px rgba(100,100,100,0.5)";
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

(function() {
  var lastTime = 0;
  var vendors = ["moz", "webkit", "o"];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
    window.cancelRequestAnimationFrame =
      window[vendors[x] + "CancelRequestAnimationFrame"];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
})();

var layers = [],
  objects = [],
  world = document.getElementById("world"),
  viewport = document.getElementById("viewport"),
  d = 0,
  p = 1000,
  worldXAngle = 0,
  worldYAngle = 0;

viewport.style.webkitPerspective = p;
viewport.style.MozPerspective = p;
viewport.style.oPerspective = p;

generate();

function createCloud() {
  var div = document.createElement("div");
  div.className = "cloudBase";
  var x = 250 - Math.random() * 500;
  var y = 50 - Math.random() * 100;
  var z = -250 - Math.random() * 500;
  var t =
    "translateX( " +
    x +
    "px ) translateY( " +
    y +
    "px ) translateZ( " +
    z +
    "px )";
  div.style.webkitTransform = t;
  div.style.MozTransform = t;
  div.style.oTransform = t;
  world.appendChild(div);

  var list_img_skills = {
    "img/word/Python.png": 1,
    "img/word/Cpp.png": 1,
    "img/word/JavaScript.png": 1,
    "img/word/C.png": 1,
    "img/word/scss.png": 0.8,
    "img/word/SQL.png": 1,
    "img/word/Django.png": 0.9,
    "img/word/Flask.png": 0.9,
    "img/word/React.png": 0.6,
    "img/word/Windows.png": 0.5,
    "img/word/Linux.png": 0.5,
    "img/icon/bug.png": 0.5,
    "img/word/QA.png": 0.2,
    "img/word/Automation.png": 0.2,
    "img/word/SkLearn.png": 0.6,
    "img/word/TensorFlow.png": 0.7,
    "img/word/Keras.png": 0.6,
    "img/word/OpenCV.png": 0.8,
    "img/word/ScikitImage.png": 0.7,
    "img/word/kali.png": 0.5,
    "img/word/PostgreSQL.png": 0.7,
    "img/word/MySQL.png": 0.7,
    "img/word/threeJS.png": 0.5,
  };

  for (var j = 0; j < 50 + Math.round(Math.random() * 10); j++) {
    var cloud = document.createElement("img");
    cloud.style.opacity = 0;

    var rand = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var generateWeighedList = function(list, weight) {
      var weighed_list = [];
      for (var i = 0; i < list.length; i++) {
        if (i >= weight.length) {
          weight.push(0.2);
        }
        var multiples = weight[i] * 100;
        for (var j = 0; j < multiples; j++) {
          weighed_list.push(list[i]);
        }
      }
      return weighed_list;
    };
    var weighed_list = generateWeighedList(
      Object.keys(list_img_skills),
      Object.values(list_img_skills)
    );
    var random_num = rand(0, weighed_list.length - 1);

    var src = weighed_list[random_num];

    (function(img) {
      img.addEventListener("load", function() {
        img.style.opacity = 0.8;
      });
    })(cloud);
    cloud.setAttribute("src", src);
    cloud.className = "cloudLayer";

    var x = 500 - Math.random() * 1000;
    var y = 500 - Math.random() * 1000;
    var z = 2000 - Math.random() * 3000;
    var a = Math.random() * 360;
    var s = 0.25 + Math.random();
    x *= 0.9;
    y *= 0.8;
    cloud.data = {
      x: x,
      y: y,
      z: z,
      a: a,
      s: s,
      speed: 0.5 * Math.random()
    };
    var t =
      "translateX( " +
      x +
      "px ) translateY( " +
      y +
      "px ) translateZ( " +
      z +
      "px ) rotateZ( " +
      a +
      "deg ) scale( " +
      s +
      " )";
    cloud.style.webkitTransform = t;
    cloud.style.MozTransform = t;
    cloud.style.oTransform = t;

    div.appendChild(cloud);
    layers.push(cloud);
  }

  return div;
}

window.addEventListener("mousewheel", onContainerMouseWheel);
window.addEventListener("DOMMouseScroll", onContainerMouseWheel);

window.addEventListener("mousemove", function(e) {
  worldYAngle = -(0.5 - e.clientX / window.innerWidth) * 180;
  worldXAngle = (0.5 - e.clientY / window.innerHeight) * 180;
  updateView();
});

function generate() {
  objects = [];
  if (world.hasChildNodes()) {
    while (world.childNodes.length >= 1) {
      world.removeChild(world.firstChild);
    }
  }
  for (var j = 0; j < 2; j++) {
    objects.push(createCloud());
  }
}

function updateView() {
  var t =
    "translateZ( " +
    d +
    "px ) rotateX( " +
    worldXAngle +
    "deg) rotateY( " +
    worldYAngle +
    "deg)";
  world.style.webkitTransform = t;
  world.style.MozTransform = t;
  world.style.oTransform = t;
}

function onContainerMouseWheel(event) {
  event = event ? event : window.event;
  d = d - (event.detail ? event.detail * -5 : event.wheelDelta / 8);
  updateView();
}

function update() {
  for (var j = 0; j < layers.length; j++) {
    var layer = layers[j];
    layer.data.a += layer.data.speed;
    var t =
      "translateX( " +
      layer.data.x +
      "px ) translateY( " +
      layer.data.y +
      "px ) translateZ( " +
      layer.data.z +
      "px ) rotateY( " +
      -worldYAngle +
      "deg ) rotateX( " +
      -worldXAngle +
      "deg ) rotateZ( " +
      layer.data.a +
      "deg ) scale( " +
      layer.data.s +
      ")";
    layer.style.webkitTransform = t;
    layer.style.MozTransform = t;
    layer.style.oTransform = t;
  }

  requestAnimationFrame(update);
}

update();
