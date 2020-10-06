document.addEventListener("DOMContentLoaded", () => {
  // your code here 
  startTimer();
  addListeners();
});

let seconds = 0;
let timer = false;
let likesStore = {};

function startTimer(){
  timer = setInterval(function() { adjustCounter("plus"); }, 1000);
}

function  addListeners(){
  document.getElementById('minus').addEventListener("click", function(event){
    setPause("minus");
  }, false)
  document.getElementById('plus').addEventListener("click", function(event){
    setPause("plus");
  }, false)
  document.getElementById('pause').addEventListener("click", function(event){
    processStopStart();
  }, false)
  document.getElementById('heart').addEventListener("click", function(event){
    addLikes(seconds);
  }, false)
  document.querySelector("#comment-form").addEventListener("submit", function(event) {
    // document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
    event.preventDefault();
    addComments();
  }, false);
}

function addComments(){
  const myComments = document.getElementById("list");
  const myComment = document.getElementById('comment-input').value;
  let para = document.createElement("p");
  let node = document.createTextNode(myComment);
  para.appendChild(node);
  myComments.appendChild(para);
}

function addLikes(seconds){
  let myLikes = document.getElementById('likes');
  let entry = document.createElement('li');
  entry.appendChild(document.createTextNode(createLike(seconds)));
  myLikes.appendChild(entry)
}

function createLike(seconds){
  const secondsString = seconds.toString();
  let addS = "";
  if (likesStore[secondsString] === undefined){
    likesStore[secondsString] = 0;
  }
  likesStore[secondsString] += 1;
  if (likesStore[secondsString] > 1){
    addS = "s"
  }
  return `${seconds} has been liked ${likesStore[secondsString]} time${addS}`;
}

function toggleButtons(off){  
  document.getElementById('minus').disabled = off;
  document.getElementById('plus').disabled = off;
  document.getElementById('heart').disabled = off;
}

function processStopStart(){
  const startStop = document.getElementById('pause');
  switch (startStop.innerText){
    case "pause":
      startStop.innerText = "resume";
      clearInterval(timer);
      timer = false;
      toggleButtons(true);
      break;
    default:
      startStop.innerText = "pause";
      startTimer();
      toggleButtons(false);
  }
}

function setPause(action){
  if (timer != false){
    clearInterval(timer)
    timer = false;
  }
  adjustCounter(action);
}

function adjustCounter(action){
  let el = document.getElementById('counter');
  const startStop = document.getElementById('pause');
  if (startStop.innerText == "pause" && timer == false ){
    startStop.innerText = "resume";
  }
  switch(action){
    case "minus":
      seconds -= 1;
      break;
    case "plus":
      seconds += 1;
      break;
  }
  el.innerText = seconds
}
