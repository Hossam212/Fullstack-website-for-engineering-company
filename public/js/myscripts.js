var flag;

$(document).ready(function () {
  flag = 0;
  $("#myBtn").hide();
  $("#Service").hide();
  $("#Project").hide();
  $("#Career").hide();
  $("#Contact").hide();
});

function back2top() {
  window.scrollTo(0, 0);
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

$(window).scroll(function () {
  if ($(this).scrollTop() > 320) {
    $(".about,.aboutAR").css({
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
    });
    setTimeout(function () {
      $("#ourv-text,#ourv-textAR").css({
        opacity: 1,
        transform: "translate3d(0, 0, 0)",
      });
    }, 750);
    setTimeout(function () {
      $(".wrapper").css({
        opacity: 1,
        transform: "translate3d(0, 0, 0)",
      });
    }, 1410);
  } else {
    $(".wrapper, .about, #ourv-text,.aboutAR, #ourv-textAR").css({
      opacity: 0,
      transform: "translate3d(0, 20px, 0)",
    });
  }
});

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

$(window).scroll(function () {
  if (flag == 0 && $(this).scrollTop() >= 200) {
    $("#Service").fadeIn(2000);
    flag = 1;
  }

  if (
    flag == 1 &&
    $(this).scrollTop() >= getOffset(document.getElementById("News")).top
  ) {
    $("#Project").fadeIn(2000);
    flag = 2;
  }

  if (
    flag == 2 &&
    $(this).scrollTop() >= getOffset(document.getElementById("Service")).top
  ) {
    $("#Career").fadeIn(2000);
    flag = 3;
  }

  if (
    flag == 3 &&
    $(this).scrollTop() >= getOffset(document.getElementById("Project")).top
  ) {
    $("#Contact").fadeIn(2000);
    flag = 4;
  }

  if ($(this).scrollTop() >= 400) {
    $("#myBtn").fadeIn(1000);
  } else {
    $("#myBtn").fadeOut(1000);
  }
});
