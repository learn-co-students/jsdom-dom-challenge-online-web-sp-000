document.addEventListener( "DOMContentLoaded", function () {
  counter()
} );

const counter = document.getElementById('counter'); 

function incrementEverySecond() {
    counter.innerText++;
}

let timerThing = window.setInterval(incrementEverySecond, 1*1000);


