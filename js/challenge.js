let counter = document.getElementById('counter'),
    plus = document.getElementById('plus'),
    minus = document.getElementById('minus'),
    pause = document.getElementById('pause'),
    heart = document.getElementById("heart"),
    commentForm = document.getElementsByTagName("form")[0],
    ticking = true;



function _toArray(a) {
    if (Array.isArray(a)) {
        for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
        return c
    }
    return Array.from(a)
}

let ticker = function() {
  return setInterval(function() {
    let count = parseInt(counter.innerText);
    counter.innerText = count + 1
  }, 1000)
}

interval = ticker()

plus.addEventListener("click", function() {
  let count = parseInt(counter.innerText);
  counter.innerText = count + 1
})

minus.addEventListener("click", function() {
  let count = parseInt(counter.innerText);
  counter.innerText = count - 1
})

pause.addEventListener("click", function() {
    ticking ? (ticking = false, clearInterval(interval), this.innerText =
    "resume") : (ticking = true, interval = ticker(), this.innerText = "pause"),
    [].concat(_toArray(document.getElementsByTagName("button"))).forEach(function(a) {
        "pause" !== a.id && (a.disabled = !ticking)
    })
})

commentForm.addEventListener("submit", function(a) {
    a.preventDefault();
    let b = this.children[0],
        comment = b.value;
    b.value = "";
    let d = document.querySelector(".comments"),
        e = document.createElement("p");
    e.innerText = comment
    d.appendChild(e)
});

heart.addEventListener("click", function() {
  let count = parseInt(counter.innerText),
      c = document.querySelector(".likes"),
      d = void 0;
  if ([].concat(_toArray(c.children)).map(function(counter) {
          return parseInt(counter.dataset.num)
      }).includes(count)) {
        d = document.querySelector('[data-num="' + count + '"]');
        let e = parseInt(d.children[0].innerText);
        d.innerHTML = count + " has been liked <span>" + (e + 1) + "</span> times"
    } else(d = document.createElement("li")).setAttribute("data-num",
    count), d.innerHTML = count + " has been liked <span>1</span> time", c.appendChild(d)
});
