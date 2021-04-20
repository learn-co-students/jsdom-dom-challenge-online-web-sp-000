
let time = 0;
let second = 1

function increment() {
    time += second;
    document.querySelector("#counter").innerText = time;
}

function backward() {
    time -= 1;
    document.querySelector("#counter").innerText = time;
}

let interval = setInterval(increment, 1000);


const pause = document.getElementById('pause');

pause.addEventListener('click', function(event) {
     if (document.getElementById('pause').textContent === " pause ") {
       second = 0;
       document.getElementById('pause').textContent = " resume ";
     } else {
       second = 1;
       document.getElementById('pause').textContent = " pause ";
     }
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

  const heart = document.getElementById('heart');

  function addLike() {
    const newLike = document.createElement("li");
    newLike.innerText = `${time} has been liked`;
    document.querySelector(".likes").appendChild(newLike);
  };

  heart.addEventListener('click', function(event) {
      addLike();
    });
