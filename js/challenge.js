
//variable assignment const/let/var 
//calling method document.getElementbyId() returns one element
//argument = ("")
const like = document.getElementById("heart")
const likes = document.getElementById("likes")
const plus = document.getElementById("plus")
const form = document.getElementById("comment-form")
const commentInput = document.getElementById("comment-input")
const submitComment = document.getElementById("submit")

//create a timer setInterval method 
var increment = setInterval(incrementSeconds, 100)

const pause = document.getElementById("pause")
const resume = document.getElementById("resume")
const list = document.getElementById("list")
const counter = document.getElementById("counter")
let seconds = parseInt(counter.innerText)
const minus = document.getElementById("minus")
let isPaused = false

//lists all comments
function listComment() {
    const addComment = document.createElement('li')
    addComment.innerText = commentInput.value
    list.appendChild(addComment)
  }
//submit button
form.addEventListener("submit", function(e) { 
  e.preventDefault()   
  listComment()
  clearcommentField()
})

//user can press (click) button to pause 
pause.addEventListener("click", function(e) {
  if(!isPaused) {
    pauseTimer()
  } else {
    resumeTimer()
  }
})

//timer can be paused 
function pauseTimer() {
    isPaused = true
    pause.innerText = "resume"
    incrementSeconds()
  }
  
  //timer can resume
  function resumeTimer() {
    isPaused = false
    pause.innerText = "pause"
    incrementSeconds()
  }
  
//user can click to add 1 second to timer
plus.addEventListener("click", function(e) {
  seconds += 1
  counter.innerText = seconds
})

//user can click to subtract 1 second to timer
minus.addEventListener("click", function(e) {
  seconds -= 1
  counter.innerText = seconds
})

//user can click the like button 
like.addEventListener("click", function(e) {
  addLike()
})

//seconds go up by 1 or decrease by 1
function incrementSeconds() {
  if(!isPaused) {
  seconds += 1;
  counter.innerText = seconds
  }
}

//like function 
heart_id.addEventListener("click", function(){
    let like = document.querySelector(".likes")
  
    if(document.getElementById(`Li${counter}`) == null){
      let li = document.createElement("li");
      li.setAttribute("id", `Li${counter}`)
      li.innerHTML = `${counter} have this many likes:1`
      like.appendChild(li)
    }
    else {
      let li = document.getElementById(`Li${counter}`)
      let splitted = parseInt(li.innerHTML.split(":")[1]) + 1
      li.innerHTML = `${counter} have this many likes:${splitted}`
      like.appendChild(li)
    }
  
  })