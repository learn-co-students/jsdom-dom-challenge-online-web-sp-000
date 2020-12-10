const counter = document.querySelector("h1#counter")
const minus = document.querySelector("button#minus")
const plus = document.querySelector("button#plus")
const heart = document.querySelector("button#heart")
const likeList = document.querySelector("ul.likes")
const pause = document.querySelector("button#pause")
const commentList = document.querySelector("div#list.comments")
const commentInput = document.querySelector("input#comment-input")
const commentForm = document.querySelector("form#comment-form")
const submitButton = document.querySelector("button#submit")

let count = setInterval(incrementCounter, 1000);

function incrementCounter() {
  let num = parseInt(counter.innerHTML) + 1
  counter.innerHTML = num
}

plus.addEventListener("click", function(event) {
  let num = parseInt(counter.innerHTML) + 1
  counter.innerHTML = num
})

minus.addEventListener("click", function(event) {
  let num = parseInt(counter.innerHTML) - 1
  counter.innerHTML = num
})

pause.addEventListener("click", function(event) {
  if (pause.innerHTML == "resume") {
    pause.innerHTML = "pause";
    count = setInterval(incrementCounter, 1000);
    heart.disabled = false;
    plus.disabled = false;
    minus.disabled = false;
    submitButton.disabled = false;
  } else {
    pause.innerHTML = "resume";
    heart.disabled = true;
    plus.disabled = true;
    minus.disabled = true;
    submitButton.disabled = true;
    clearInterval(count);
  }
})

heart.addEventListener("click", function(event) {
  let time = counter.innerHTML
  let li = document.createElement('li')
  likeList.appendChild(li)

  li.innerHTML = `${time} has been liked`
})

commentForm.addEventListener("submit", function(event) {
  let li = document.createElement('li')
  commentList.appendChild(li)
  li.innerHTML = commentInput.value
  commentInput.value = ""

  event.preventDefault()
})
