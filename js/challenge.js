const timer = document.querySelector("h1#counter")
const pause = document.querySelector("button#pause")
const plus = document.querySelector("button#plus")
const minus = document.querySelector("button#minus")
const heart = document.querySelector("button#heart")
let timerId = setInterval(() => timer.textContent = parseInt(timer.textContent) + 1, 1000)



minus.addEventListener("click", function(e) {
  timer.textContent = parseInt(timer.textContent) - 1
})

plus.addEventListener("click", function(e) {
  timer.textContent = parseInt(timer.textContent) + 1
})

heart.addEventListener("click", function(e) {
  let likes = document.querySelector("ul.likes").children
  let like = document.createElement(`li`)
  like.className = `${timer.textContent}`
  like.hidden = true
  document.querySelector("ul.likes").appendChild(like)
})

pause.addEventListener("click", function(e) {
  if (pause.textContent === " pause ") {
    pause.textContent = " resume ";
    clearInterval(timerId);
  } 
  else {
    pause.textContent = " pause ";
    timerId = setInterval(() => timer.textContent = parseInt(timer.textContent) + 1, 1000);
  }
})
  


