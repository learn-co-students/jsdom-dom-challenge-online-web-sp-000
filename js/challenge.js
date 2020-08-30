
let time = 0;

function increment() {
    time += 1;
    document.querySelector("#counter").innerText = time;
}

function backward() {
    time -= 1;
    document.querySelector("#counter").innerText = time;
}

let interval = setInterval(increment, 1000);

const pause = document.getElementById('pause');

pause.addEventListener('click', function(event) {
    clearInterval(interval);
  });

const plus = document.getElementById('plus');

plus.addEventListener('click', function(event) {
    increment();
  });

const minus = document.getElementById('minus');

minus.addEventListener('click', function(event) {
    backward();
  });

  document.querySelector("#comment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("list").innerHTML += document.getElementById("comment-input").value;
  });


