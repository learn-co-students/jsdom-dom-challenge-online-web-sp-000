const counter = document.getElementById('counter')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const heartButton = document.getElementById('heart')
const pauseButton = document.getElementById('pause')
const commentInput = document.getElementById('comment-input')
const submitCommentButton = document.getElementById('submit')
const commentForm = document.getElementsByTagName("form")[0]

let count = 0 // NUMBER OF THE COUNTER
let runTimer = true

const timer = setInterval(() => { // ADDS ONE TO THE COUNT EVER SECOND
	if (runTimer) incrementCounter()
}, 1000)

plusButton.addEventListener('click', () => { // ONCLICK, ADDS ONE TO THE COUNT
	incrementCounter()
})

minusButton.addEventListener('click', () => {
	decrementCounter()
})

pauseButton.addEventListener('click', () => {
	if (runTimer) {
		runTimer = false
		pauseButton.innerText = 'Resume'
		disableButtons()
	} else {
		runTimer = true
		pauseButton.innerText = 'Pause'
		enableButtons()
	}
})

commentForm.addEventListener("submit", function (a) {
	a.preventDefault()
	let input = this.children[0]
	let comment = input.value
	input.value = ""
	let commentsList = document.querySelector(".comments")
	let newComment = document.createElement("p")
	newComment.innerText = comment
	commentsList.appendChild(newComment)
})

heartButton.addEventListener("click", function () {
	let like = document.querySelector(".likes")
	if (document.getElementById(`Li${count}`) == null) {
		let li = document.createElement("li")
		li.setAttribute("id", `Li${count}`)
		li.innerHTML = `${count} have this many likes:1`
		like.appendChild(li)
	}
	else {
		let li = document.getElementById(`Li${count}`)
		let splitted = parseInt(li.innerHTML.split(":")[1]) + 1
		li.innerHTML = `${count} have this many likes:${splitted}`
		like.appendChild(li)
	}
})

const incrementCounter = () => { // ADDS ONE TO THE COUNTER AND THEN SETS THE NEW VALUE
	count++
	counter.innerHTML = count
}

const decrementCounter = () => {
	count--
	counter.innerHTML = count
}

const disableButtons = () => {
	plusButton.disabled = true
	minusButton.disabled = true
	heartButton.disabled = true
	commentInput.disabled = true
	submitCommentButton.disabled = true
}

const enableButtons = () => {
	plusButton.disabled = false
	minusButton.disabled = false
	heartButton.disabled = false
	commentInput.disabled = false
	submitCommentButton.disabled = false
}