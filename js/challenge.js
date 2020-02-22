const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const like = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
let runCount = true;
const disableButtons = () => {
	plus.disabled = true;
	minus.disabled = true;
	like.disabled = true;
}
const enableButtons = () => {
	plus.disabled = false;
	minus.disabled = false;
  like.disabled = false;
} 
const commentForm = document.getElementsByTagName('form')[0]

function increment() {
  if (runCount) counter.innerText++;
}

function decrement() {
  if (runCount) counter.innerText--;
}

function likes() {
  let likesList = document.getElementsByClassName('likes')
  let newLike = document.createElement('li')
  newLike.innerHTML = `Number ${counter.innerText} has been liked`
  likesList[0].appendChild(newLike)
}

//I should see the timer increment every second once the page has loaded

document.addEventListener('DOMContentLoaded', function() {
  setInterval(function() { increment() }, 1000);
})

//I can manually increment and decrement the counter using the plus and minus buttons

plus.addEventListener('click', function() {
    increment();
})

minus.addEventListener('click', function() {
    decrement()
})

//I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number

like.addEventListener('click', function() {
    likes()
}) 

//pause the counter, disable all buttons except the pause button, the pause button should then show the text "resume"

pauseButton.addEventListener('click', () => {
	if (runCount) {
		runCount = false;
		pauseButton.innerText = 'Resume'
		disableButtons()
	} else {
		runCount = true
		pauseButton.innerText = 'Pause'
		enableButtons()
	}
})

//I can leave comments on my gameplay, such as: "Wow, what a fun game this is"

commentForm.addEventListener('submit', function (c) {
	c.preventDefault()
	let input = this.children[0]
	let comment = input.value
	input.value = ""
	let commentsList = document.querySelector(".comments")
	let newComment = document.createElement("p")
	newComment.innerText = comment
	commentsList.appendChild(newComment)
})