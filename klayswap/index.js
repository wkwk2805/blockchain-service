"use strict";

let isCount = true;

window.addEventListener("scroll", () => {
  if (window.scrollY >= 1100) {
    let fadeInDownClassList = document.querySelector("#fadeInDown").classList;
    fadeInDownClassList.add("fadeInDown");
    fadeInDownClassList.add("show");
    let fadeInUpClassList = document.querySelector("#fadeInUp").classList;
    fadeInUpClassList.add("fadeInUp");
    fadeInUpClassList.add("show");
    if (isCount) {
      countUp();
      isCount = false;
    }
  }
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// JQuery 설명
function countUp() {
  $({ val: 0 }).animate(
    { val: 5121300 },
    {
      duration: 1500,
      step: function () {
        var num = numberWithCommas(Math.floor(this.val));
        $("#count").text(num);
      },
      complete: function () {
        var num = numberWithCommas(Math.floor(this.val));
        $("#count").text(num);
      },
    }
  );
}
