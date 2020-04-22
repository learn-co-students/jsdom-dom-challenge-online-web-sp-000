// rewrite this entire solution as instructions
// follow instructions adn research as needed.
// @ts-check

"use strict";
// document.addEventListener("DOMContentLoaded", function () {
//   console.log("The DOM has loaded");
// });

// use underscore to label function as private
function _toConsumableArray(a) {
  // build a conditional that checks if the argument is an array
  if (Array.isArray(a)) {
    for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
    return c;
  }
  return Array.from(a);
  //   return a copy of the new array made from argument(a)
}
// assign variable playing the value !0 aka false
var playing = !0,
  // create timer function and have it return a setInterval function
  timer = function () {
    return setInterval(function () {
      // inside the function hook (a) to GEBID "counter"
      var a = document.getElementById("counter"),
        //   hook (b) to parseInt method with an argument of a.innerText
        b = parseInt(a.innerText);
      //
      // b = parseInt(a.textContent);

      //   console.log(b);
      //   set the value of a.innerText to (b) + 1
      a.innerText = b + 1;
      //   setTimeout time in millisecond
      //   1e3 = 1000 ms aka 1 second
    }, 1e3);
  },
  //   hook buttons to elements of the DOM node tree
  interval = timer(),
  minus = document.getElementById("minus"),
  plus = document.getElementById("plus"),
  heart = document.getElementById("heart"),
  pause = document.getElementById("pause"),
  commentForm = document.getElementsByTagName("form")[0];
/*
  minus.addEventListener("click", function () {
  var a = document.getElementById("counter"),
    b = parseInt(a.innerText);
  a.innerText = b - 1;
}),
  plus.addEventListener("click", function () {
    var a = document.getElementById("counter"),
      b = parseInt(a.innerText);
    a.innerText = b + 1;
  }),
  heart.addEventListener("click", function () {
    var a = document.getElementById("counter"),
      b = parseInt(a.innerText),
      c = document.querySelector(".likes"),
      d = void 0;
    if (
      []
        .concat(_toConsumableArray(c.children))
        .map(function (a) {
          return parseInt(a.dataset.num);
        })
        .includes(b)
    ) {
      d = document.querySelector('[data-num="' + b + '"]');
      var e = parseInt(d.children[0].innerText);
      d.innerHTML = b + " has been liked <span>" + (e + 1) + "</span> times";
    } else (d = document.createElement("li")).setAttribute("data-num", b), (d.innerHTML = b + " has been liked <span>1</span> time"), c.appendChild(d);
  }),
   */
pause.addEventListener("click", function () {
  playing
    ? ((playing = !1), clearInterval(interval), (this.innerText = "resume"))
    : ((playing = !0), (interval = timer()), (this.innerText = "pause")),
    []
      .concat(_toConsumableArray(document.getElementsByTagName("button")))
      .forEach(function (a) {
        "pause" !== a.id && (a.disabled = !playing);
      });
});

/*   ,
  commentForm.addEventListener("submit", function (a) {
    a.preventDefault();
    var b = this.children[0],
      c = b.value;
    b.value = "";
    var d = document.querySelector(".comments"),
      e = document.createElement("p");
    (e.innerText = c), d.appendChild(e);
  });
*/
