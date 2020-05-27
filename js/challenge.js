const counter = document.getElementById("counter")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")
const list = document.getElementById("list")
const submit = document.getElementById("submit")
let totalTime = 0
let numberOfLikes = 0

function timer (){
  ++totalTime;
  counter.innerHTML = totalTime;
}

let timeStart = setInterval(timer, 1000);

plus.addEventListener("click", function(){
  totalTime += 1;
  counter.innerHTML = totalTime;
});

minus.addEventListener("click", function(){
  totalTime -= 1;
  counter.innerHTML = totalTime;
});

heart.addEventListener("click", function(){
  let likes = document.getElementsByClassName("likes")[0];
  if (document.getElementById(totalTime)) {
    let existingLike = document.getElementById(totalTime)
    ++numberOfLikes
    if (numberOfLikes == 1){
      existingLike.innerText = `${totalTime} has been liked ${numberOfLikes} time`
    } else {
      existingLike.innerText = `${totalTime} has been liked ${numberOfLikes} times`
    }
  } else {
    let newLike = document.createElement("li")
    newLike.setAttribute("id", totalTime)
    numberOfLikes = 1
    if (numberOfLikes == 1){
      newLike.innerText = `${totalTime} has been liked ${numberOfLikes} time`
    } else {
      newLike.innerText = `${totalTime} has been liked ${numberOfLikes} times`
    }
    likes.appendChild(newLike)
  }
})

pause.addEventListener("click", function(){
  if (pause.innerText == `pause`){
    clearInterval(timeStart)
    pause.innerText = `resume`
    plus.setAttribute("disabled", "disabled")
    minus.setAttribute("disabled", "disabled")
    heart.setAttribute("disabled", "disabled")
  } else {
    timeStart = setInterval(timer, 1000);
    pause.innerText = `pause`
    plus.removeAttribute("disabled")
    minus.removeAttribute("disabled")
    heart.removeAttribute("disabled")
  }
})

document.addEventListener("submit", function(a){
  a.preventDefault()
  let commentList = document.getElementsByClassName("comments")[0]
  let newComment = document.createElement("li")
  newComment.innerText = document.getElementById("comment-input").value
  commentList.appendChild(newComment)
})