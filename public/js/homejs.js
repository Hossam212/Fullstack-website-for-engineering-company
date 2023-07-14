$(document).ready(function () {
  $("#myBtn").hide();

  $(".whowetext").css({
    opacity: 1,
    transform: "translate3d(0, 0, 0)",
  });
});

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
  if ($(this).scrollTop() > 30) {
    setTimeout(function () {
      $("#ourv-text").css({
        opacity: 1,
        transform: "translate3d(0, 0, 0)",
      });
    }, 95);
  } else {
    $("#ourv-text").css({
      opacity: 0,
      transform: "translate3d(0, 20px, 0)",
    });
  }
});

function back2top() {
  window.scrollTo(0, 0);
}

$(window).scroll(function () {
  if ($(this).scrollTop() >= 200) {
    $("#myBtn").fadeIn(1000);
  } else {
    $("#myBtn").fadeOut(1000);
  }
});
