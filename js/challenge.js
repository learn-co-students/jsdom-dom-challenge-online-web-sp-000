let minusButton = document.getElementById('minus');
let plusButton = document.getElementById('plus');
let pauseButton = document.getElementById('pause');
let commentForm = document.getElementById('comment-form');
let counterId = document.getElementById("counter");

let counter = 0;
let life = true; 

setInterval(function() {
  if (life) {
    counterId.innerText = counter;
    counter += 1;
  }
}, 1000);

minusButton.addEventListener("click", function() {
  counter -= 1; 
  counterId.innerText = counter;
});

plusButton.addEventListener("click", function() {
  counterId.innerText = counter;
  counter += 1; 
});

pauseButton.addEventListener("click", function() {
  if (life) {
    pauseButton.innerText = "resume"
    life = false

    counterId.disabled = true;
    minusButton.disabled = true;
    plusButton.disabled = true;
  }
  else {
    pauseButton.innerText = "pause"
    life = true

    counterId.disabled = false;
    minusButton.disabled = false;
    plusButton.disabled = false;
  }
});

commentForm.addEventListener("submit", function(a) {
  a.preventDefault()
  let b = this.children[0]
  let c = b.value
  b.value = ""
  let d = document.querySelector(".comments")
  let e = document.createElement("p")
  e.innerText = c
  d.appendChild(e)
});

heart.addEventListener("click", function() {
  let like = document.querySelector(".likes")

  if (document.getElementById(`Li${counter}`) == null) {
    let li = document.createElement("li");
    li.setAttribute("id", `Li${counter}`)
    li.innerHTML = `${counter} has been liked 1 time.`
    like.appendChild(li)
  }
  else {
    let li = document.getElementById(`Li${counter}`)
    li.innerHTML = `${counter} has been liked many times.`
    like.appendChild(li)
  }
})  