document.addEventListener("DOMContentLoaded", () => {

	let counter = document.querySelector("#counter");
	let like = document.querySelector("#heart")
	let submit = document.querySelector("#comment-form")
	let minus = document.querySelector("#minus")
	let plus = document.querySelector("#plus")
	let pause = document.querySelector("#pause")

	let likeCount = 1

	let interval = window.setInterval(plusSecond, 1*1000);

	function plusSecond() {
		let current = parseInt(counter.textContent); 
		newTime = current + 1;
		counter.textContent = newTime;
	};

	function minusSecond() {
		let current = parseInt(counter.textContent); 
		newTime = current - 1;
		counter.textContent = newTime;
	};


	minus.addEventListener("click", minusSecond);
	plus.addEventListener("click", plusSecond);

	like.addEventListener("click", likeNum)

	function likeNum() {
		let currentTime = parseInt(counter.textContent);
		let entry = document.getElementById(`${currentTime}`)
		let ul = document.querySelector(".likes")


		if (entry == null) {
			let n = document.createElement("li");
			let comments = document.getElementById("comments")
			n.setAttribute("id", `${currentTime}`)
			n.setAttribute("likes", 1)
			n.textContent = `You liked #${currentTime} ${n.getAttribute("likes")} time.`
			ul.appendChild(n)	
		} else {
			entry.setAttribute("likes", `${parseInt(entry.getAttribute("likes")) + 1}`)
			entry.textContent = `You liked #${currentTime} ${entry.getAttribute("likes")} times.`
			console.log(entry.getAttribute("likes"))
		}
	};

	let paused = false

	pause.addEventListener("click", function() {
		if (paused == false) {
			window.clearInterval(interval);
			minus.disabled = true;
			plus.disabled = true;
			like.disabled = true;
			submit.disabled = true;

			pause.textContent = "resume";
			paused = true
		} else { 
			counter.textContent = "0"
			interval = window.setInterval(plusSecond, 1*1000);
			interval

			minus.disabled = false;
			plus.disabled = false;
			like.disabled = false;
			submit.disabled = false;

			pause.textContent = "pause";
			paused = false;
		};
	});

	submit.addEventListener("submit", function(event) {
		event.preventDefault();
		
		let div = document.querySelector("#list")
		let p = document.createElement("p")
		let c = document.querySelector("#comment-input")
		p.textContent = c.value

		div.appendChild(p)

		submit.reset();
	});

});





