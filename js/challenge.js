let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");
let h1 = document.getElementById("counter");
let interval;

let timer = () => {
	interval = this.setInterval(() => {
		h1.innerText = parseInt(counter.innerText) + 1
	}, 1000)
};

let decrement = () => {
	minus.addEventListener("click", function(){
		h1.innerText = parseInt(counter.innerText) - 1;
	});
};

let increment = () => {
	plus.addEventListener("click", function(){
		h1.innerText = parseInt(counter.innerText) + 1;
	});
};

let like = () => {
	let counter, likesNumber = 1
	heart.addEventListener("click", function(){
		if (h1.innerText == counter) {
			likesNumber = likesNumber + 1
		} else {
			likesNumber = 1
		}
		let likes = document.getElementsByTagName('ul')[0]
		let li = document.createElement('li')
		li.innerText = h1.innerText + ` has been liked ${likesNumber} time`
		counter = h1.innerText
		likes.appendChild(li)
	});
};

let pause = () => {
	let btnStatus = "pause"
	pause.addEventListener("click", function(){
		if (btnStatus === "pause") {
			pause.innerText = "resume"
			minus.disabled = true
			plus.disabled = true
			heart.disabled = true
			btnStatus = "resume"
			clearInterval(interval)
		} else if (btnStatus === "resume") {
			pause.innerText = "pause"
			minus.disabled = false
			plus.disabled = false
			heart.disabled = false
			btnStatus = "pause"
			timer()
		}
	});
}

let submitForm = (e) => {
	e.preventDefault()
	let messgInput = document.getElementById('comment-input')
	let p = document.createElement('p')
	p.innerHTML = mssgInput.value
	document.getElementById("list").appendChild(p)
	mssgInput.value = ""
}

let form = document.getElementById('comment-form')
form.onsubmit = submitForm

timer ()
decrement()
increment()
like()
pause()