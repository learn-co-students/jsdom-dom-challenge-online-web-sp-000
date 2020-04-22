// @ts-check
"use strict";

function _toConsumableArray(argArray) {
  //confirm if argument(a) is an array
  if (Array.isArray(argArray)) {
    for (
      var counter = 0, constructedArray = Array(argArray.length);
      counter < argArray.length;
      counter++
    )
      constructedArray[counter] = argArray[counter];
    return constructedArray;
  }
  return Array.from(argArray);
  //   return the new array made from argArray
}
// assign [counterIsActive] the value !0 aka false
var counterIsActive = !0,
  // create timer function and have it return a setInterval function
  timer = function () {
    return setInterval(function () {
      // inside the function hook (a) to GEBID "counter"
      var counterNode = document.getElementById("counter"),
        parsedInnerText = parseInt(counterNode.innerText);
      counterNode.innerText = parsedInnerText + 1;
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
minus.addEventListener("click", function () {
  var counterNode = document.getElementById("counter"),
    //counterInnerText = ,
    parsedText = parseInt(counterNode.innerText);
  counterNode.innerText = parsedText - 1;
}),
  plus.addEventListener("click", function () {
    var counterNode = document.getElementById("counter"),
      parsedText = parseInt(counterNode.innerText);
    counterNode.innerText = parsedText + 1;
  }),
  heart.addEventListener("click", function () {
    var counterNode = document.getElementById("counter"),
      parsedText = parseInt(counterNode.innerText),
      likesNode = document.querySelector(".likes"),
      voidStatus = void 0;
    if (
      []
        .concat(_toConsumableArray(likesNode.children))
        .map(function (counterNode) {
          return parseInt(counterNode.dataset.num);
        })
        .includes(parsedText)
    ) {
      voidStatus = document.querySelector('[data-num="' + parsedText + '"]');
      var likeCount = parseInt(voidStatus.children[0].innerText);
      voidStatus.innerHTML =
        parsedText +
        " has been liked <span>" +
        (likeCount + 1) +
        "</span> times";
    } else (voidStatus = document.createElement("li")).setAttribute("data-num", parsedText), (voidStatus.innerHTML = parsedText + " has been liked <span>1</span> time"), likesNode.appendChild(voidStatus);
  }),
  pause.addEventListener("click", function () {
    counterIsActive
      ? ((counterIsActive = !1),
        clearInterval(interval),
        (this.innerText = "resume"))
      : ((counterIsActive = !0),
        (interval = timer()),
        (this.innerText = "pause")),
      []
        .concat(_toConsumableArray(document.getElementsByTagName("button")))
        .forEach(function (a) {
          "pause" !== a.id && (a.disabled = !counterIsActive);
        });
  }),
  commentForm.addEventListener("submit", function (submitEvent) {
    submitEvent.preventDefault();
    var firstFromElement = this.children[0],
      c = firstFromElement.value;
    firstFromElement.value = "";
    var comments = document.querySelector(".comments"),
      newComment = document.createElement("p");
    (newComment.innerText = c), comments.appendChild(newComment);
  });
