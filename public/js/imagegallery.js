var flag = 0;

$("#myBtn").hide();
$("#Survey").hide();
$("#MEP").hide();
$("#Museum").hide();
$("#Interior").hide();
$("#Residential").hide();
$("#Hotel").hide();
$("#Hospital").hide();
$("#Palace").hide();
$("#Urban").hide();
$("#Others").hide();

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
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

function back2top() {
  window.scrollTo(0, 0);
}

$(window).scroll(function () {
  if (flag == 0) {
    $("#Survey").fadeIn(2000);
    flag = 1;
  }

  if (
    flag == 1 &&
    $(this).scrollTop() >= getOffset(document.getElementById("Commercial")).top
  ) {
    $("#MEP").fadeIn(2000);
    flag = 2;
  }

  if (
    flag == 2 &&
    $(this).scrollTop() >= getOffset(document.getElementById("Landscape")).top
  ) {
    $("#Museum").fadeIn(2000);
    flag = 3;
  }

  if (
    flag == 3 &&
    $(this).scrollTop() >= getOffset(document.getElementById("Survey")).top
  ) {
    $("#Interior").fadeIn(2000);
    flag = 4;
  }

  if (
    flag == 4 &&
    $(this).scrollTop() >= getOffset(document.getElementById("MEP")).top
  ) {
    $("#Residential").fadeIn(2000);
    flag = 5;
  }

  if (
    flag == 5 &&
    $(this).scrollTop() >= getOffset(document.getElementById("Museum")).top
  ) {
    $("#Hotel").fadeIn(2000);
    flag = 6;
  }

  if (
    flag == 6 &&
    $(this).scrollTop() >= getOffset(document.getElementById("Interior")).top
  ) {
    $("#Hospital").fadeIn(2000);
    flag = 7;
  }

  if (
    flag == 7 &&
    $(this).scrollTop() >= getOffset(document.getElementById("Residential")).top
  ) {
    $("#Palace").fadeIn(2000);
    flag = 8;
  }

  if (
    flag == 8 &&
    $(this).scrollTop() >= getOffset(document.getElementById("Hotel")).top
  ) {
    $("#Urban").fadeIn(2000);
    flag = 9;
  }

  if (
    flag == 9 &&
    $(this).scrollTop() >= getOffset(document.getElementById("Hospital")).top
  ) {
    $("#Others").fadeIn(2000);
  }

  if ($(this).scrollTop() >= getOffset(document.getElementById("Survey")).top) {
    $("#myBtn").fadeIn(1000);
  } else {
    $("#myBtn").fadeOut(1000);
  }
});
